import base64
import io
import json
import subprocess
import tempfile
import unittest
import zipfile
from pathlib import Path

from prepare_site import (
    ARCHIVE_PREFIX,
    REPORT_TEMPLATE,
    prepare_site,
    report_sparse_patterns,
    rewrite_report,
)

COMMIT = "0123456789abcdef" * 2 + "01234567"
REPOSITORY = "ESO-Toolkit/eso-log-aggregator-reports"


def report_html(data, tag="template", extra=None):
    memory = io.BytesIO()
    with zipfile.ZipFile(memory, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        archive.comment = b"preserved archive comment"
        info = zipfile.ZipInfo("report.json", date_time=(2025, 1, 2, 3, 4, 6))
        info.external_attr = 0o644 << 16
        archive.writestr(info, json.dumps(data).encode())
        for name, content in (extra or {}).items():
            archive.writestr(name, content)
    encoded = base64.b64encode(memory.getvalue()).decode()
    return f'<html><{tag} id="playwrightReportBase64">{ARCHIVE_PREFIX}{encoded}</{tag}></html>'


def archive_from_html(html):
    payload = REPORT_TEMPLATE.search(html).group("payload")
    return zipfile.ZipFile(io.BytesIO(base64.b64decode(payload[len(ARCHIVE_PREFIX) :])))


class PrepareSiteTests(unittest.TestCase):
    def setUp(self):
        # Keep temporary fixtures together and remove them after each test.
        self.temporary = tempfile.TemporaryDirectory(dir=Path(__file__).parent)
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        self.source = self.root / "source"
        self.source.mkdir()
        self.output = self.root / "site"

    def write(self, name, value):
        path = self.source / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(value.encode() if isinstance(value, str) else value)
        return path

    def build(self, **kwargs):
        return prepare_site(self.source, self.output, REPOSITORY, COMMIT, **kwargs)

    def test_rewrites_nested_attachments_but_not_other_path_fields(self):
        data = {
            "path": "data/source.spec.ts",
            "tests": [
                {
                    "results": [
                        {
                            "steps": [
                                {
                                    "attachments": [
                                        {
                                            "path": "data/nested/screen #1?.png",
                                            "name": "screenshot",
                                        },
                                        {"path": "https://already.example/screen.png"},
                                        {"body": "inline body"},
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
        }
        original = report_html(data)
        report = self.write("screen-size-tests/feature/branch/35/index.html", original)
        self.write(
            "screen-size-tests/feature/branch/35/data/nested/large.png", b"large image"
        )
        summary = self.build()
        html = (self.output / report.relative_to(self.source)).read_text()
        with archive_from_html(html) as archive:
            result = json.loads(archive.read("report.json"))
        attachment = result["tests"][0]["results"][0]["steps"][0]["attachments"][0]
        self.assertEqual(
            attachment["path"],
            f"https://raw.githubusercontent.com/{REPOSITORY}/{COMMIT}/"
            "screen-size-tests/feature/branch/35/data/nested/screen%20%231%3F.png",
        )
        self.assertEqual(result["path"], "data/source.spec.ts")
        self.assertEqual(summary["externalized_attachments"], 1)
        self.assertFalse(
            (self.output / "screen-size-tests/feature/branch/35/data").exists()
        )
        self.assertEqual(report.read_text(), original)
        self.assertEqual(
            (
                self.source
                / "screen-size-tests/feature/branch/35/data/nested/large.png"
            ).read_bytes(),
            b"large image",
        )

    def test_retains_trace_assets_storybook_data_and_ordinary_site_files(self):
        self.write(
            "nightly-tests/445/index.html",
            report_html({"attachments": [{"path": "data/trace.zip"}]}),
        )
        self.write("nightly-tests/445/data/trace.zip", b"large trace")
        self.write("nightly-tests/445/trace/index.html", "trace viewer")
        self.write("nightly-tests/445/trace/data/required.js", "viewer resource")
        self.write("storybook/data/catalog.json", "storybook data")
        self.write("index.html", "home")
        self.write(".github/workflows/pages.yml", "not public")
        self.write(".git/config", "not public")
        self.write("scripts/prepare_site.py", "not public")
        result = self.build()
        self.assertEqual(
            (self.output / "nightly-tests/445/trace/data/required.js").read_text(),
            "viewer resource",
        )
        self.assertEqual(
            (self.output / "storybook/data/catalog.json").read_text(), "storybook data"
        )
        self.assertEqual((self.output / "index.html").read_text(), "home")
        self.assertFalse((self.output / ".github").exists())
        self.assertFalse((self.output / ".git").exists())
        self.assertFalse((self.output / "scripts").exists())
        self.assertEqual(
            result["bytes"],
            sum(p.stat().st_size for p in self.output.rglob("*") if p.is_file()),
        )

    def test_sparse_checkout_preserves_viewer_data_and_nested_branch_names(self):
        report_roots = [
            "nightly-tests/445",
            "screen-size-tests/feature/branch/35",
            "screen-size-tests/2026/data/branch/36",
        ]
        for root in report_roots:
            self.write(f"{root}/index.html", "report")
            self.write(f"{root}/data/large.zip", "attachment")
            self.write(f"{root}/trace/data/viewer.js", "viewer")
        self.write("storybook/data/catalog.json", "catalog")

        def git(*args, **kwargs):
            return subprocess.run(
                ["git", *args],
                cwd=self.source,
                check=True,
                capture_output=True,
                text=True,
                **kwargs,
            )

        git("init", "-b", "fixture")
        git("add", ".")
        git(
            "-c",
            "user.name=Fixture",
            "-c",
            "user.email=fixture@example.invalid",
            "-c",
            "commit.gpgsign=false",
            "commit",
            "-m",
            "fixture",
        )
        paths = git("ls-tree", "-r", "--name-only", "-z", "HEAD").stdout.split("\0")
        git(
            "sparse-checkout",
            "set",
            "--no-cone",
            "--stdin",
            input="\n".join(report_sparse_patterns(paths)),
        )
        for root in report_roots:
            self.assertTrue((self.source / root / "index.html").is_file())
            self.assertTrue((self.source / root / "trace/data/viewer.js").is_file())
            self.assertFalse((self.source / root / "data/large.zip").exists())
        self.assertTrue((self.source / "storybook/data/catalog.json").is_file())

    def test_template_and_legacy_script_preserve_zip_metadata_and_binary_entries(self):
        for tag in ("template", "script"):
            with self.subTest(tag=tag):
                original = report_html(
                    {"attachments": [{"path": "data/file.zip"}]},
                    tag,
                    {"binary.bin": b"\x00\xff", "unchanged.json": b'{ "hello" : 42 }'},
                )
                changed, count = rewrite_report(
                    original, "https://raw.example/", "index.html"
                )
                with (
                    archive_from_html(original) as before,
                    archive_from_html(changed) as after,
                ):
                    self.assertEqual(after.comment, before.comment)
                    self.assertEqual(after.read("binary.bin"), b"\x00\xff")
                    self.assertEqual(after.read("unchanged.json"), b'{ "hello" : 42 }')
                    self.assertEqual(
                        after.getinfo("report.json").date_time,
                        before.getinfo("report.json").date_time,
                    )
                    self.assertEqual(
                        after.getinfo("report.json").external_attr,
                        before.getinfo("report.json").external_attr,
                    )
                    self.assertEqual(count, 1)

    def test_ordinary_fallback_html_is_copied_unchanged(self):
        self.write("nightly-tests/445/index.html", "<h1>No report data</h1>")
        result = self.build()
        self.assertEqual(
            (self.output / "nightly-tests/445/index.html").read_text(),
            "<h1>No report data</h1>",
        )
        self.assertEqual(result["externalized_attachments"], 0)

    def test_malformed_archives_fail_instead_of_publishing_broken_attachments(self):
        for payload in ("not base64!", base64.b64encode(b"not zip").decode()):
            with self.subTest(payload=payload):
                html = f'<template id="playwrightReportBase64">{ARCHIVE_PREFIX}{payload}</template>'
                with self.assertRaisesRegex(
                    ValueError, "invalid Playwright report archive"
                ):
                    rewrite_report(html, "https://raw.example/", "report/index.html")

    def test_size_budget_is_enforced_without_changing_source(self):
        original = self.write("index.html", "0123456789")
        with self.assertRaisesRegex(ValueError, "exceeds 9-byte budget"):
            self.build(max_bytes=9)
        self.assertEqual(original.read_text(), "0123456789")

    def test_invalid_json_archive_reports_which_report_failed(self):
        html = report_html({}, extra={"invalid.json": b"{invalid json"})
        with self.assertRaisesRegex(
            ValueError,
            "nightly-tests/445/index.html: invalid Playwright report archive",
        ):
            rewrite_report(html, "https://raw.example/", "nightly-tests/445/index.html")

    def test_overlapping_output_and_mutable_commits_are_rejected(self):
        for output in (self.source, self.source / "site", self.root):
            with (
                self.subTest(output=output),
                self.assertRaisesRegex(ValueError, "non-overlapping"),
            ):
                prepare_site(self.source, output, REPOSITORY, COMMIT)
        with self.assertRaisesRegex(ValueError, "immutable"):
            prepare_site(self.source, self.output, REPOSITORY, "gh-pages")

    def test_existing_output_is_not_overwritten(self):
        self.output.mkdir()
        sentinel = self.output / "keep.txt"
        sentinel.write_text("preserve me")
        with self.assertRaisesRegex(ValueError, "already exist"):
            self.build()
        self.assertEqual(sentinel.read_text(), "preserve me")

    def test_symlinks_are_not_copied(self):
        original = self.write("index.html", "home")
        try:
            (self.source / "linked.html").symlink_to(original)
        except OSError as error:
            self.skipTest(f"Symlinks unavailable: {error}")
        with self.assertRaisesRegex(ValueError, "symbolic link"):
            self.build()

    def test_attachment_traversal_is_rejected(self):
        html = report_html({"attachments": [{"path": "data/../outside.zip"}]})
        with self.assertRaisesRegex(ValueError, "Invalid attachment path"):
            rewrite_report(html, "https://raw.example/", "index.html")


if __name__ == "__main__":
    unittest.main()
