# ESO Toolkit reports

This repository archives nightly and screen-size Playwright reports, coverage badges,
and Storybook. Report publishers append artifacts to `gh-pages`.

GitHub Pages has a supported 1 GB site limit. The archive exceeds that limit, and a
single screen-size report can exceed it. The Pages workflow builds a smaller site
without deleting archived reports or their attachments.

`scripts/prepare_site.py` keeps report pages, trace viewers, Storybook, and badges.
It rewrites Playwright attachment URLs to this repository's immutable raw Git URLs
and omits those attachments from the Pages upload. Screenshots, videos, and trace
downloads remain accessible. The build fails if the remaining site exceeds 900 MB.

## Activate the workflow

After merging the Pages workflow, change **Settings → Pages → Build and deployment
→ Source** from **Deploy from a branch** to **GitHub Actions**. Then run
**Publish lightweight reports site** on `gh-pages`. Future report publications
trigger the workflow automatically.

The old branch-based builder must be disabled by that setting; it uploads the
entire archive and exceeds the Pages limit. No archive cleanup is required.

## Validate locally

```sh
python -m unittest discover -s scripts -p 'test_*.py' -v
python scripts/prepare_site.py --source . --output ../report-site \
  --repository ESO-Toolkit/eso-log-aggregator-reports --commit "$(git rev-parse HEAD)"
```
