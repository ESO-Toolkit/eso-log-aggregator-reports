# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: nightly-regression-pages.spec.ts >> Nightly Regression - Pages & Features >> Utility Pages >> gear sets page should load with content
- Location: tests/nightly-regression-pages.spec.ts:450:9

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /home/runner/.cache/ms-playwright/webkit-2336/pw_run.sh --inspector-pipe --headless --no-startup-window
<launched> pid=7459
[pid=7459][err] /home/runner/.cache/ms-playwright/webkit-2336/minibrowser-wpe/bin/MiniBrowser: error while loading shared libraries: libicudata.so.74: cannot open shared object file: No such file or directory
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2336/pw_run.sh --inspector-pipe --headless --no-startup-window
  - <launched> pid=7459
  - [pid=7459][err] /home/runner/.cache/ms-playwright/webkit-2336/minibrowser-wpe/bin/MiniBrowser: error while loading shared libraries: libicudata.so.74: cannot open shared object file: No such file or directory
  - [pid=7459] <gracefully close start>
  - [pid=7459] <kill>
  - [pid=7459] <will force kill>
  - [pid=7459] exception while trying to kill process: Error: kill ESRCH
  - [pid=7459] <process did exit: exitCode=127, signal=null>
  - [pid=7459] starting temporary directories cleanup
  - [pid=7459] finished temporary directories cleanup
  - [pid=7459] <gracefully close end>

```