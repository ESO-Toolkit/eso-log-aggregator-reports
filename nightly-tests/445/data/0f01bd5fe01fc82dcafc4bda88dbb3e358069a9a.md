# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: nightly-regression-interactive.spec.ts >> Nightly Regression - Interactive Features >> Data Filtering and Search >> should test advanced filtering functionality
- Location: tests/nightly-regression-interactive.spec.ts:701:9

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /home/runner/.cache/ms-playwright/webkit-2336/pw_run.sh --inspector-pipe --headless --no-startup-window
<launched> pid=6701
[pid=6701][err] /home/runner/.cache/ms-playwright/webkit-2336/minibrowser-wpe/bin/MiniBrowser: error while loading shared libraries: libicudata.so.74: cannot open shared object file: No such file or directory
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2336/pw_run.sh --inspector-pipe --headless --no-startup-window
  - <launched> pid=6701
  - [pid=6701][err] /home/runner/.cache/ms-playwright/webkit-2336/minibrowser-wpe/bin/MiniBrowser: error while loading shared libraries: libicudata.so.74: cannot open shared object file: No such file or directory
  - [pid=6701] <gracefully close start>
  - [pid=6701] <kill>
  - [pid=6701] <will force kill>
  - [pid=6701] <process did exit: exitCode=127, signal=null>
  - [pid=6701] starting temporary directories cleanup
  - [pid=6701] finished temporary directories cleanup
  - [pid=6701] <gracefully close end>

```