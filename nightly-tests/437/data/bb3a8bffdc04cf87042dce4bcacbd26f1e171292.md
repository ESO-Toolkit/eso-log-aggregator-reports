# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: nightly-regression-pages.spec.ts >> Nightly Regression - Pages & Features >> Leaderboards >> leaderboards page should load with data rows
- Location: tests/nightly-regression-pages.spec.ts:358:9

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Leaderboard Logs' })
Expected: visible
Timeout: 120000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 120000ms
  - waiting for getByRole('heading', { name: 'Leaderboard Logs' })

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - button "ESO Toolkit logo ESO Toolkit":
    - img "ESO Toolkit logo"
    - text: ESO Toolkit
  - navigation "Main navigation":
    - button "roster hub Roster Hub":
      - img "roster hub": 👥
      - text: Roster Hub
    - button "build hub Build Hub":
      - img "build hub": 🏗️
      - text: Build Hub
    - button "pack hub Pack Hub":
      - img "pack hub": 🧩
      - text: Pack Hub
    - button "Reports"
    - button "Tools"
    - button "Switch to light mode"
    - button "Sign in with ESO Logs": Sign in
- dialog "Navigation menu":
  - paragraph: Navigate
  - button "👥 Roster Hub":
    - text: 👥
    - paragraph: Roster Hub
  - button "🏗️ Build Hub":
    - text: 🏗️
    - paragraph: Build Hub
  - button "🧩 Pack Hub":
    - text: 🧩
    - paragraph: Pack Hub
  - paragraph: Reports
  - button "🎲 Sample Report Explore a demo log":
    - text: 🎲
    - paragraph: Sample Report
    - paragraph: Explore a demo log
  - button "📊 Latest Reports Recently uploaded":
    - text: 📊
    - paragraph: Latest Reports
    - paragraph: Recently uploaded
  - button "🏆 Leaderboards Top parse rankings":
    - text: 🏆
    - paragraph: Leaderboards
    - paragraph: Top parse rankings
  - button "🧬 Build Leaderboard Top DPS builds by archetype":
    - text: 🧬
    - paragraph: Build Leaderboard
    - paragraph: Top DPS builds by archetype
  - paragraph: Tools
  - button "📝 Text Editor Format guild announcements":
    - text: 📝
    - paragraph: Text Editor
    - paragraph: Format guild announcements
  - button "Calculator Stat & damage math":
    - paragraph: Calculator
    - paragraph: Stat & damage math
  - button "📈 Parse Analysis Break down your parses":
    - text: 📈
    - paragraph: Parse Analysis
    - paragraph: Break down your parses
  - button "⚔️ Loadout Manager Manage gear loadouts":
    - text: ⚔️
    - paragraph: Loadout Manager
    - paragraph: Manage gear loadouts
  - button "👥 Roster Builder Plan trial compositions":
    - text: 👥
    - paragraph: Roster Builder
    - paragraph: Plan trial compositions
  - button "🔧 Build Editor Create & share builds":
    - text: 🔧
    - paragraph: Build Editor
    - paragraph: Create & share builds
  - button "✒️ Scribing Plan scribed skills":
    - text: ✒️
    - paragraph: Scribing
    - paragraph: Plan scribed skills
  - paragraph: Appearance
  - button "Switch to light mode":
    - paragraph: Theme
    - paragraph: Dark · tap to switch
  - 'button "Performance: Auto · Low — change"':
    - paragraph: Performance
    - paragraph: Auto · Low
  - button "Sign in with ESO Logs"
- main:
  - alert:
    - text: ESO Logs is temporarily unavailable. Retrying shortly.
    - button "Retry"
- text: Navigated to Leaderboards
- contentinfo:
  - text: Stay ahead of the meta
  - heading "Ready for the next wave of ESO combat analytics?" [level=2]
  - paragraph: Connect with our team for early feature access, share your feedback, and help shape the tools that power top-tier raid strategy.
  - link "Join Discord":
    - /url: https://discord.gg/mMjwcQYFdc
  - link "View on GitHub":
    - /url: https://github.com/ESO-Toolkit/eso-toolkit
  - img "ESO Toolkit logo"
  - heading "ESO Toolkit" [level=3]
  - paragraph: Data-driven utilities crafted by raiders for raiders. Surface the insights you need to plan faster pulls, tighter logs, and smoother clears.
  - text: Real-time analytics Player-built insights Free beta access Community-driven support
  - paragraph: Tools
  - link "Build Calculator":
    - /url: /calculator
  - link "Build Editor":
    - /url: /build-editor
  - link "Roster Builder":
    - /url: /roster-builder
  - link "Parse Analysis":
    - /url: /parse-analysis
  - link "Text Editor":
    - /url: /text-editor
  - link "Loadout Manager":
    - /url: /loadout-manager
  - link "Scribing":
    - /url: /calculator#scribing
  - link "Gear Sets":
    - /url: /gear-sets
  - paragraph: Quick Links
  - link "Home":
    - /url: /
  - link "Roster Hub":
    - /url: /roster-hub
  - link "Build Hub":
    - /url: /build-hub
  - link "Pack Hub":
    - /url: /pack-hub
  - link "Leaderboards":
    - /url: /leaderboards
  - link "Calculation Knowledge Base":
    - /url: /docs/calculations
  - link "Discord Bot Guide":
    - /url: /docs/discord-roster-bot
  - link "DLSS 5 Neural Rendering":
    - /url: /docs/dlss5-neural-rendering
  - link "What's New":
    - /url: /whats-new
  - link "About":
    - /url: /about
  - paragraph: © 2026 ESO Toolkit. This independent fan project is not affiliated with, sponsored by, or endorsed by ZeniMax Online Studios, Bethesda, or ESO Logs. All trademarks are the property of their respective owners.
  - link "Privacy Policy":
    - /url: /privacy
  - link "Terms of Use":
    - /url: /terms
  - button "Report a Bug"
- region "Privacy & Cookies":
  - button "Decline all optional cookies"
  - heading "Privacy & Cookies" [level=2]
  - paragraph:
    - text: We use essential storage for app functionality. Optional analytics and error tracking help us improve.
    - link "Privacy Policy":
      - /url: /privacy
  - button "Decline All"
  - button "Customize"
  - button "Accept All"
```

# Test source

```ts
  268 |         timeout: TEST_TIMEOUTS.dataLoad,
  269 |       });
  270 | 
  271 |       await page.screenshot({
  272 |         path: 'test-results/nightly-regression-pages-shared-roster.png',
  273 |         timeout: TEST_TIMEOUTS.screenshot,
  274 |       });
  275 |     });
  276 |   });
  277 | 
  278 |   // ---------------------------------------------------------------------------
  279 |   // ESO-744: Scribing Simulator
  280 |   // ---------------------------------------------------------------------------
  281 |   test.describe('Scribing Simulator', () => {
  282 |     test('scribing simulator should load with interactive UI', async ({ page }) => {
  283 |       await page.goto('/calculator#scribing', {
  284 |         waitUntil: 'domcontentloaded',
  285 |         timeout: TEST_TIMEOUTS.navigation,
  286 |       });
  287 |       await page
  288 |         .waitForLoadState('networkidle', { timeout: TEST_TIMEOUTS.dataLoad })
  289 |         .catch(() => {});
  290 |       await waitForAppMount(page);
  291 | 
  292 |       await expect(page.getByRole('tab', { name: 'Scribing' })).toHaveAttribute(
  293 |         'aria-selected',
  294 |         'true',
  295 |       );
  296 |       await expect(page.getByRole('radiogroup', { name: /Grimoire/i })).toBeVisible({
  297 |         timeout: TEST_TIMEOUTS.dataLoad,
  298 |       });
  299 |       await createSkeletonDetector(page).waitForSkeletonsToDisappear({ timeout: 30000 });
  300 | 
  301 |       await page.screenshot({
  302 |         path: 'test-results/nightly-regression-pages-scribing-simulator.png',
  303 |         timeout: TEST_TIMEOUTS.screenshot,
  304 |       });
  305 |     });
  306 | 
  307 |     test('scribing simulator should respond to a basic skill selection', async ({ page }) => {
  308 |       await page.goto('/calculator#scribing', {
  309 |         waitUntil: 'domcontentloaded',
  310 |         timeout: TEST_TIMEOUTS.navigation,
  311 |       });
  312 |       await page
  313 |         .waitForLoadState('networkidle', { timeout: TEST_TIMEOUTS.dataLoad })
  314 |         .catch(() => {});
  315 |       await waitForAppMount(page);
  316 | 
  317 |       // Try to interact with the first available select/dropdown
  318 |       const firstSelect = page
  319 |         .locator('select, .MuiSelect-root, [role="combobox"], [data-testid*="select"]')
  320 |         .first();
  321 | 
  322 |       if (!(await firstSelect.isVisible({ timeout: 5000 }).catch(() => false))) {
  323 |         test.skip(true, 'Scribing controls are unavailable on the calculator page');
  324 |       }
  325 | 
  326 |       await firstSelect.click();
  327 |       await page.waitForTimeout(1000);
  328 | 
  329 |       // Look for an option in the dropdown
  330 |       const firstOption = page.locator('[role="option"], .MuiMenuItem-root, option').first();
  331 |       await expect(firstOption).toBeVisible({ timeout: TEST_TIMEOUTS.dataLoad });
  332 |       await firstOption.click();
  333 |       await page.waitForTimeout(1500);
  334 |       console.log('✅ Scribing simulator responded to skill selection');
  335 | 
  336 |       // No JS errors after interaction
  337 |       const errors: string[] = await page.evaluate(() => (window as any).testErrors ?? []);
  338 |       const criticalErrors = errors.filter(
  339 |         (e) =>
  340 |           !e.includes('ResizeObserver') &&
  341 |           !e.includes('Not implemented') &&
  342 |           !e.includes('Non-Error promise rejection') &&
  343 |           !e.includes('ChunkLoadError'),
  344 |       );
  345 |       expect(criticalErrors, 'No critical errors after scribing interaction').toHaveLength(0);
  346 | 
  347 |       await page.screenshot({
  348 |         path: 'test-results/nightly-regression-pages-scribing-interaction.png',
  349 |         timeout: TEST_TIMEOUTS.screenshot,
  350 |       });
  351 |     });
  352 |   });
  353 | 
  354 |   // ---------------------------------------------------------------------------
  355 |   // ESO-746: Leaderboards
  356 |   // ---------------------------------------------------------------------------
  357 |   test.describe('Leaderboards', () => {
  358 |     test('leaderboards page should load with data rows', async ({ page }) => {
  359 |       await page.goto('/leaderboards', {
  360 |         waitUntil: 'domcontentloaded',
  361 |         timeout: TEST_TIMEOUTS.navigation,
  362 |       });
  363 |       await page
  364 |         .waitForLoadState('networkidle', { timeout: TEST_TIMEOUTS.dataLoad })
  365 |         .catch(() => {});
  366 |       await waitForAppMount(page);
  367 | 
> 368 |       await expect(page.getByRole('heading', { name: 'Leaderboard Logs' })).toBeVisible({
      |                                                                             ^ Error: expect(locator).toBeVisible() failed
  369 |         timeout: TEST_TIMEOUTS.dataLoad,
  370 |       });
  371 | 
  372 |       // Verify no failed API requests for esologs.com
  373 |       // (errors already captured via addInitScript in beforeEach)
  374 | 
  375 |       await page.screenshot({
  376 |         path: 'test-results/nightly-regression-pages-leaderboards.png',
  377 |         timeout: TEST_TIMEOUTS.screenshot,
  378 |       });
  379 |     });
  380 |   });
  381 | 
  382 |   // ---------------------------------------------------------------------------
  383 |   // ESO-748: Public user profiles
  384 |   // ---------------------------------------------------------------------------
  385 |   test.describe('User Profiles', () => {
  386 |     test('public user profile should load from latest-reports', async ({ page }) => {
  387 |       // Find a real username by pulling one from the latest reports page
  388 |       await page.goto('/latest-reports', {
  389 |         waitUntil: 'domcontentloaded',
  390 |         timeout: TEST_TIMEOUTS.navigation,
  391 |       });
  392 |       await page
  393 |         .waitForLoadState('networkidle', { timeout: TEST_TIMEOUTS.dataLoad })
  394 |         .catch(() => {});
  395 |       await waitForAppMount(page);
  396 | 
  397 |       // Look for a user profile link on the page
  398 |       const profileLink = page.locator('a[href*="/u/"]').first();
  399 | 
  400 |       if (!(await profileLink.isVisible({ timeout: 8000 }).catch(() => false))) {
  401 |         test.skip(true, 'No public profile links are currently available on /latest-reports');
  402 |       }
  403 | 
  404 |       const href = await profileLink.getAttribute('href');
  405 |       console.log(`🔍 Testing user profile at: ${href}`);
  406 | 
  407 |       await page.goto(href!, {
  408 |         waitUntil: 'domcontentloaded',
  409 |         timeout: TEST_TIMEOUTS.navigation,
  410 |       });
  411 |       await page
  412 |         .waitForLoadState('networkidle', { timeout: TEST_TIMEOUTS.dataLoad })
  413 |         .catch(() => {});
  414 |       await waitForAppMount(page);
  415 | 
  416 |       await expect(page.getByRole('heading').first()).toBeVisible({
  417 |         timeout: TEST_TIMEOUTS.dataLoad,
  418 |       });
  419 | 
  420 |       await page.screenshot({
  421 |         path: 'test-results/nightly-regression-pages-user-profile.png',
  422 |         timeout: TEST_TIMEOUTS.screenshot,
  423 |       });
  424 |     });
  425 | 
  426 |     test('non-existent user profile should show an error state', async ({ page }) => {
  427 |       await page.goto('/u/definitely-not-a-real-user-xyzzy-nightly-test', {
  428 |         waitUntil: 'domcontentloaded',
  429 |         timeout: TEST_TIMEOUTS.navigation,
  430 |       });
  431 |       await waitForAppMount(page);
  432 | 
  433 |       const hasError = await page
  434 |         .getByText(/not found|404|player.*not.*found|user.*not.*exist|no.*user|error/i)
  435 |         .first()
  436 |         .isVisible({ timeout: 10000 })
  437 |         .catch(() => false);
  438 |       const redirectedAway = !page.url().includes('xyzzy');
  439 |       expect(
  440 |         hasError || redirectedAway,
  441 |         'Invalid user profile should be handled gracefully',
  442 |       ).toBeTruthy();
  443 |     });
  444 |   });
  445 | 
  446 |   // ---------------------------------------------------------------------------
  447 |   // ESO-749: Utility pages — Gear Sets, Legacy Logs Redirect, Parse Analysis
  448 |   // ---------------------------------------------------------------------------
  449 |   test.describe('Utility Pages', () => {
  450 |     test('gear sets page should load with content', async ({ page }) => {
  451 |       await expectPageLoads(page, '/gear-sets', 'gear-sets', /gear sets/i);
  452 | 
  453 |       await expect(page.getByRole('heading', { name: 'Gear Sets' })).toBeVisible({
  454 |         timeout: TEST_TIMEOUTS.dataLoad,
  455 |       });
  456 |     });
  457 | 
  458 |     test('legacy logs route should lead to the report analyzer', async ({ page }) => {
  459 |       await page.goto('/logs', {
  460 |         waitUntil: 'domcontentloaded',
  461 |         timeout: TEST_TIMEOUTS.navigation,
  462 |       });
  463 |       await waitForAppMount(page);
  464 | 
  465 |       await expect(page).toHaveURL(/\/(?:my-reports|login)(?:[?#]|$)/, {
  466 |         timeout: TEST_TIMEOUTS.dataLoad,
  467 |       });
  468 | 
```