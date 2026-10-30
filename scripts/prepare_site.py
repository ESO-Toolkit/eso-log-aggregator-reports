"""Prepare a bounded Pages payload without deleting archived report attachments."""

import argparse
import base64
import binascii
import io
import json
import os
import re
import shutil
import sys
import zipfile
from pathlib import Path, PurePosixPath
from urllib.parse import quote

REPORT_TEMPLATE = re.compile(
    r"""(?P<open><(?P<tag>template|script)\b[^>]*\bid\s*=\s*["']playwrightReportBase64["'][^>]*>)"""
    r"(?P<payload>.*?)(?P<close></(?P=tag)\s*>)",
    re.IGNORECASE | re.DOTALL,
)
ARCHIVE_PREFIX = "data:application/zip;base64,"


def is_report_root(relative):
    parts = relative.parts
    if not parts or not parts[-1].isdigit():
        return False
    return (parts[0] == "nightly-tests" and len(parts) == 2) or (
        parts[0] == "screen-size-tests" and len(parts) >= 3
    )


def report_sparse_patterns(paths):
    """Exclude attachments only beside tracked report indexes, preserving viewers."""
    reports = {
        PurePosixPath(path).parent
        for path in paths
        if PurePosixPath(path).name == "index.html"
        and is_report_root(PurePosixPath(path).parent)
    }
    return ["/*", *(f"!/{report}/data/" for report in sorted(reports))]


def rewrite_attachment_paths(value, base_url, attachment=False):
    """Rewrite attachment records, leaving source-code paths and other data alone."""
    changed = 0
    if isinstance(value, dict):
        path = value.get("path")
        if attachment and isinstance(path, str) and path.startswith("data/"):
            relative = path[len("data/") :]
            if not relative or ".." in relative.split("/") or "\\" in relative:
                raise ValueError(f"Invalid attachment path: {path!r}")
            value["path"] = base_url + quote(relative, safe="/")
            changed += 1
        for key, child in value.items():
            if key == "attachments" and isinstance(child, list):
                changed += sum(
                    rewrite_attachment_paths(item, base_url, attachment=True)
                    for item in child
                )
            else:
                changed += rewrite_attachment_paths(child, base_url)
    elif isinstance(value, list):
        changed += sum(rewrite_attachment_paths(item, base_url) for item in value)
    return changed


def rewrite_report(html, base_url, report_path):
    match = REPORT_TEMPLATE.search(html)
    if not match:
        # A failed merge can deliberately publish an ordinary fallback HTML page.
        return html, 0
    payload = match.group("payload").strip()
    if not payload.startswith(ARCHIVE_PREFIX):
        raise ValueError(f"{report_path}: unsupported Playwright report encoding")
    try:
        archive_bytes = base64.b64decode(
            "".join(payload[len(ARCHIVE_PREFIX) :].split()), validate=True
        )
        rewritten = io.BytesIO()
        changes = 0
        with (
            zipfile.ZipFile(io.BytesIO(archive_bytes)) as archive,
            zipfile.ZipFile(rewritten, "w") as output,
        ):
            output.comment = archive.comment
            for entry in archive.infolist():
                content = archive.read(entry)
                if entry.filename.endswith(".json") and not entry.is_dir():
                    data = json.loads(content)
                    count = rewrite_attachment_paths(data, base_url)
                    if count:
                        content = json.dumps(
                            data, ensure_ascii=False, separators=(",", ":")
                        ).encode("utf-8")
                        changes += count
                output.writestr(entry, content)
    except (
        binascii.Error,
        zipfile.BadZipFile,
        UnicodeError,
        ValueError,
        RuntimeError,
        NotImplementedError,
    ) as error:
        raise ValueError(
            f"{report_path}: invalid Playwright report archive: {error}"
        ) from error
    encoded = ARCHIVE_PREFIX + base64.b64encode(rewritten.getvalue()).decode("ascii")
    return html[: match.start("payload")] + encoded + html[
        match.end("payload") :
    ], changes


def prepare_site(source, output, repository, commit, max_bytes=900_000_000):
    source = Path(source)
    output = Path(output)
    if source.is_symlink() or output.is_symlink():
        raise ValueError("Source and output must not be symbolic links")
    source, output = source.resolve(), output.resolve()
    if source == output or source in output.parents or output in source.parents:
        raise ValueError(
            "Source and output must be separate, non-overlapping directories"
        )
    if not source.is_dir():
        raise ValueError(f"Source directory does not exist: {source}")
    if output.exists():
        raise ValueError(f"Output must not already exist: {output}")
    if not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+", repository):
        raise ValueError("Repository must be an owner/name pair")
    if not re.fullmatch(r"[a-fA-F0-9]{40}", commit):
        raise ValueError("Commit must be an immutable 40-character Git SHA")
    if max_bytes <= 0:
        raise ValueError("Payload budget must be positive")

    total_bytes = files = attachments = 0
    output.mkdir(parents=True)
    for directory, directories, filenames in os.walk(source, followlinks=False):
        directory = Path(directory)
        relative_dir = directory.relative_to(source)
        kept_directories = []
        for name in directories:
            path = directory / name
            if relative_dir == Path(".") and name in {".git", ".github", "scripts"}:
                continue
            if (
                name == "data"
                and is_report_root(relative_dir)
                and (directory / "index.html").is_file()
            ):
                continue
            if path.is_symlink():
                raise ValueError(f"Refusing to copy symbolic link: {path}")
            kept_directories.append(name)
        directories[:] = kept_directories
        for name in filenames:
            path = directory / name
            if relative_dir == Path(".") and name == ".git":
                continue
            if path.is_symlink():
                raise ValueError(f"Refusing to copy symbolic link: {path}")
            relative = path.relative_to(source)
            content = None
            if name == "index.html" and is_report_root(relative_dir):
                base_url = (
                    f"https://raw.githubusercontent.com/{repository}/{commit}/"
                    f"{quote(PurePosixPath(*relative_dir.parts).as_posix(), safe='/')}/data/"
                )
                html, count = rewrite_report(
                    path.read_bytes().decode("utf-8"), base_url, relative
                )
                content = html.encode("utf-8")
                attachments += count
            size = len(content) if content is not None else path.stat().st_size
            if total_bytes + size > max_bytes:
                raise ValueError(
                    f"Pages payload exceeds {max_bytes:,}-byte budget at {relative} "
                    f"({total_bytes + size:,} bytes)"
                )
            target = output / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            if content is None:
                shutil.copyfile(path, target)
            else:
                target.write_bytes(content)
            total_bytes += size
            files += 1
    return {
        "bytes": total_bytes,
        "files": files,
        "externalized_attachments": attachments,
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--repository", required=True)
    parser.add_argument("--commit", required=True)
    parser.add_argument("--max-bytes", type=int, default=900_000_000)
    args = parser.parse_args()
    try:
        print(json.dumps(prepare_site(**vars(args)), sort_keys=True))
    except (OSError, ValueError) as error:
        print(f"Pages preparation failed: {error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
