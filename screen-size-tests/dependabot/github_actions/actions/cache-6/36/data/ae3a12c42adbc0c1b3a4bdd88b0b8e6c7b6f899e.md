# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: comprehensive-visual-regression.spec.ts >> Comprehensive Visual Regression - All Device Types >> visual regression for calculator page (public)
- Location: tests/screen-sizes/comprehensive-visual-regression.spec.ts:259:7

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  Expected an image 360px by 3768px, received 360px by 4603px. 351783 pixels (ratio 0.22 of all image pixels) are different.

  Snapshot: calculator-page.png

Call log:
  - Expect "toHaveScreenshot(calculator-page.png)" with timeout 45000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - Expected an image 360px by 3768px, received 360px by 4604px. 351983 pixels (ratio 0.22 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - Expected an image 360px by 4604px, received 360px by 4603px.
  - waiting 250ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - Expected an image 360px by 3768px, received 360px by 4603px. 351783 pixels (ratio 0.22 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - link "Skip to main content" [ref=e5] [cursor=pointer]:
      - /url: "#main-content"
    - banner [ref=e6]:
      - generic [ref=e8]:
        - button "ESO Toolkit logo ESO Toolkit" [ref=e10] [cursor=pointer]:
          - generic [ref=e11]:
            - img "ESO Toolkit logo" [ref=e12]
            - text: ESO Toolkit
        - button "toggle navigation" [ref=e14] [cursor=pointer]
    - dialog "Navigation menu" [ref=e19]:
      - button "U Profile View profile" [ref=e22] [cursor=pointer]:
        - generic [ref=e23]: U
        - generic [ref=e25]:
          - paragraph [ref=e26]: Profile
          - paragraph [ref=e27]: View profile
        - img [ref=e28]
      - paragraph [ref=e30]: Navigate
      - generic [ref=e31]:
        - button "👥 Roster Hub" [ref=e32] [cursor=pointer]:
          - generic [ref=e33]: 👥
          - paragraph [ref=e34]: Roster Hub
        - button "🏗️ Build Hub" [ref=e35] [cursor=pointer]:
          - generic [ref=e36]: 🏗️
          - paragraph [ref=e37]: Build Hub
        - button "🧩 Pack Hub" [ref=e38] [cursor=pointer]:
          - generic [ref=e39]: 🧩
          - paragraph [ref=e40]: Pack Hub
      - paragraph [ref=e41]: Reports
      - generic [ref=e42]:
        - button "📁 My Reports Your uploaded logs" [ref=e43] [cursor=pointer]:
          - generic [ref=e44]: 📁
          - generic [ref=e45]:
            - paragraph [ref=e46]: My Reports
            - paragraph [ref=e47]: Your uploaded logs
        - button "🎲 Sample Report Explore a demo log" [ref=e48] [cursor=pointer]:
          - generic [ref=e49]: 🎲
          - generic [ref=e50]:
            - paragraph [ref=e51]: Sample Report
            - paragraph [ref=e52]: Explore a demo log
        - button "📊 Latest Reports Recently uploaded" [ref=e53] [cursor=pointer]:
          - generic [ref=e54]: 📊
          - generic [ref=e55]:
            - paragraph [ref=e56]: Latest Reports
            - paragraph [ref=e57]: Recently uploaded
        - button "🏆 Leaderboards Top parse rankings" [ref=e58] [cursor=pointer]:
          - generic [ref=e59]: 🏆
          - generic [ref=e60]:
            - paragraph [ref=e61]: Leaderboards
            - paragraph [ref=e62]: Top parse rankings
      - paragraph [ref=e63]: Tools
      - generic [ref=e64]:
        - button "📝 Text Editor Format guild announcements" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 📝
          - generic [ref=e67]:
            - paragraph [ref=e68]: Text Editor
            - paragraph [ref=e69]: Format guild announcements
        - button "Calculator Stat & damage math" [ref=e70] [cursor=pointer]:
          - img [ref=e72]
          - generic [ref=e80]:
            - paragraph [ref=e81]: Calculator
            - paragraph [ref=e82]: Stat & damage math
        - button "📈 Parse Analysis Break down your parses" [ref=e83] [cursor=pointer]:
          - generic [ref=e84]: 📈
          - generic [ref=e85]:
            - paragraph [ref=e86]: Parse Analysis
            - paragraph [ref=e87]: Break down your parses
        - button "⚔️ Loadout Manager Manage gear loadouts" [ref=e88] [cursor=pointer]:
          - generic [ref=e89]: ⚔️
          - generic [ref=e90]:
            - paragraph [ref=e91]: Loadout Manager
            - paragraph [ref=e92]: Manage gear loadouts
        - button "👥 Roster Builder Plan trial compositions" [ref=e93] [cursor=pointer]:
          - generic [ref=e94]: 👥
          - generic [ref=e95]:
            - paragraph [ref=e96]: Roster Builder
            - paragraph [ref=e97]: Plan trial compositions
        - button "🔧 Build Editor Create & share builds" [ref=e98] [cursor=pointer]:
          - generic [ref=e99]: 🔧
          - generic [ref=e100]:
            - paragraph [ref=e101]: Build Editor
            - paragraph [ref=e102]: Create & share builds
        - button "✒️ Scribing Plan scribed skills" [ref=e103] [cursor=pointer]:
          - generic [ref=e104]: ✒️
          - generic [ref=e105]:
            - paragraph [ref=e106]: Scribing
            - paragraph [ref=e107]: Plan scribed skills
      - paragraph [ref=e108]: Appearance
      - generic [ref=e109]:
        - button "Switch to light mode" [ref=e110] [cursor=pointer]:
          - img [ref=e112]
          - generic [ref=e114]:
            - paragraph [ref=e115]: Theme
            - paragraph [ref=e116]: Dark · tap to switch
        - 'button "Performance: Auto · Low — change" [ref=e117] [cursor=pointer]':
          - img [ref=e119]
          - generic [ref=e121]:
            - paragraph [ref=e122]: Performance
            - paragraph [ref=e123]: Auto · Low
          - img [ref=e124]
      - button "Log out" [ref=e127] [cursor=pointer]:
        - img [ref=e129]
        - text: Log out
    - main [active] [ref=e131]:
      - generic [ref=e134]:
        - tablist "Calculator type" [ref=e138]:
          - tab "Stats" [selected] [ref=e139] [cursor=pointer]:
            - img [ref=e140]
            - generic [ref=e142]: Stats
          - tab "Ultimate" [ref=e143] [cursor=pointer]:
            - img [ref=e144]
            - text: Ultimate
          - tab "Scribing" [ref=e146] [cursor=pointer]:
            - img [ref=e147]
            - text: Scribing
        - generic [ref=e152]:
          - generic [ref=e153]:
            - generic [ref=e154]:
              - generic [ref=e155] [cursor=pointer]:
                - switch "Lite Mode" [checked] [ref=e158]
                - paragraph [ref=e161]: Lite Mode
              - generic [ref=e162]:
                - button "Select All" [ref=e163] [cursor=pointer]:
                  - img [ref=e165]
                  - text: Select All
                - button "Clear" [ref=e167] [cursor=pointer]:
                  - img [ref=e169]
                  - text: Clear
            - group [ref=e173]:
              - button "🗡️ PvE" [ref=e174] [cursor=pointer]:
                - paragraph [ref=e176]: 🗡️
                - text: PvE
              - button "🛡️ PvP" [ref=e177] [cursor=pointer]:
                - paragraph [ref=e179]: 🛡️
                - text: PvP
              - button "Both" [ref=e180] [cursor=pointer]
          - generic [ref=e182]:
            - button "Penetration" [ref=e184] [cursor=pointer]:
              - generic [ref=e185]: Penetration
            - button "Critical" [ref=e187] [cursor=pointer]:
              - generic [ref=e188]: Critical
            - button "Armor" [ref=e190] [cursor=pointer]:
              - generic [ref=e191]: Armor
          - tabpanel [ref=e193]:
            - list [ref=e195]:
              - listitem [ref=e196] [cursor=pointer]:
                - generic [ref=e198]:
                  - checkbox [checked] [ref=e199]
                  - img [ref=e200]
                - generic [ref=e203]:
                  - textbox "N/A" [disabled] [ref=e204]: "-"
                  - group
                - generic [ref=e208]:
                  - paragraph [ref=e209]: Major Breach
                  - button "Item info" [ref=e210]:
                    - img [ref=e211]
                - paragraph [ref=e214]: 5,948
              - listitem [ref=e215] [cursor=pointer]:
                - generic [ref=e217]:
                  - checkbox [checked] [ref=e218]
                  - img [ref=e219]
                - generic [ref=e222]:
                  - textbox "N/A" [disabled] [ref=e223]: "-"
                  - group
                - generic [ref=e227]:
                  - paragraph [ref=e228]: Minor Breach
                  - button "Item info" [ref=e229]:
                    - img [ref=e230]
                - paragraph [ref=e233]: 2,974
              - listitem [ref=e234] [cursor=pointer]:
                - generic [ref=e236]:
                  - checkbox [ref=e237]
                  - img [ref=e238]
                - generic [ref=e241]:
                  - textbox "N/A" [disabled] [ref=e242]: "-"
                  - group
                - generic [ref=e246]:
                  - paragraph [ref=e247]: Roar of Alkosh
                  - button "Item info" [ref=e248]:
                    - img [ref=e249]
                - paragraph [ref=e252]: 6,000
              - listitem [ref=e253] [cursor=pointer]:
                - generic [ref=e255]:
                  - checkbox [ref=e256]
                  - img [ref=e257]
                - generic [ref=e260]:
                  - textbox "N/A" [disabled] [ref=e261]: "-"
                  - group
                - generic [ref=e265]:
                  - paragraph [ref=e266]: Crimson Oath's Rive
                  - button "Item info" [ref=e267]:
                    - img [ref=e268]
                - paragraph [ref=e271]: 3,541
              - listitem [ref=e272] [cursor=pointer]:
                - generic [ref=e274]:
                  - checkbox [ref=e275]
                  - img [ref=e276]
                - generic [ref=e279]:
                  - textbox "N/A" [disabled] [ref=e280]: "-"
                  - group
                - generic [ref=e284]:
                  - paragraph [ref=e285]: Tremorscale
                  - button "Item info" [ref=e286]:
                    - img [ref=e287]
                - paragraph [ref=e290]: 2,640
              - listitem [ref=e291] [cursor=pointer]:
                - generic [ref=e293]:
                  - checkbox [checked] [ref=e294]
                  - img [ref=e295]
                - generic [ref=e298]:
                  - textbox "N/A" [disabled] [ref=e299]: "-"
                  - group
                - generic [ref=e303]:
                  - paragraph [ref=e304]: Legendary Infused Crusher Enchant
                  - button "Item info" [ref=e305]:
                    - img [ref=e306]
                - paragraph [ref=e309]: 2,108
              - listitem [ref=e310] [cursor=pointer]:
                - generic [ref=e312]:
                  - checkbox [checked] [ref=e313]
                  - img [ref=e314]
                - generic [ref=e317]:
                  - textbox "N/A" [disabled] [ref=e318]: "-"
                  - group
                - generic [ref=e322]:
                  - paragraph [ref=e323]: Runic Sunder
                  - button "Item info" [ref=e324]:
                    - img [ref=e325]
                - paragraph [ref=e328]: 2,200
              - listitem [ref=e329] [cursor=pointer]:
                - generic [ref=e331]:
                  - checkbox [ref=e332]
                  - img [ref=e333]
                - generic [ref=e336]:
                  - textbox "N/A" [disabled] [ref=e337]: "-"
                  - group
                - generic [ref=e341]:
                  - paragraph [ref=e342]: Crystal Weapon
                  - button "Item info" [ref=e343]:
                    - img [ref=e344]
                - paragraph [ref=e347]: 1,000
              - listitem [ref=e348] [cursor=pointer]:
                - generic [ref=e350]:
                  - checkbox [checked] [ref=e351]
                  - img [ref=e352]
                - generic [ref=e355]:
                  - textbox "N/A" [disabled] [ref=e356]: "-"
                  - group
                - generic [ref=e360]:
                  - paragraph [ref=e361]: Velothi Ur-Mage's Amulet
                  - button "Item info" [ref=e362]:
                    - img [ref=e363]
                - paragraph [ref=e366]: 1,650
              - listitem [ref=e367] [cursor=pointer]:
                - generic [ref=e369]:
                  - checkbox [ref=e370]
                  - img [ref=e371]
                - generic [ref=e374]:
                  - textbox "N/A" [disabled] [ref=e375]: "-"
                  - group
                - generic [ref=e379]:
                  - paragraph [ref=e380]: Shattered Fate
                  - button "Item info" [ref=e381]:
                    - img [ref=e382]
                - paragraph [ref=e385]: 7,918
              - listitem [ref=e386] [cursor=pointer]:
                - generic [ref=e388]:
                  - checkbox [ref=e389]
                  - img [ref=e390]
                - generic [ref=e393]:
                  - button "Decrease quantity" [ref=e395]:
                    - img [ref=e396]
                  - spinbutton [ref=e398]: "1"
                  - button "Increase quantity" [ref=e400]:
                    - img [ref=e401]
                  - group
                - generic [ref=e406]:
                  - paragraph [ref=e407]: Armor Set Penetration Bonus
                  - button "Item info" [ref=e408]:
                    - img [ref=e409]
                - paragraph [ref=e412]: 1,487
              - listitem [ref=e413] [cursor=pointer]:
                - generic [ref=e415]:
                  - checkbox [ref=e416]
                  - img [ref=e417]
                - generic [ref=e420]:
                  - textbox "N/A" [disabled] [ref=e421]: "-"
                  - group
                - generic [ref=e425]:
                  - paragraph [ref=e426]: Spriggan's Thorns
                  - button "Item info" [ref=e427]:
                    - img [ref=e428]
                - paragraph [ref=e431]: 3,460
              - listitem [ref=e432] [cursor=pointer]:
                - generic [ref=e434]:
                  - checkbox [ref=e435]
                  - img [ref=e436]
                - generic [ref=e439]:
                  - textbox "N/A" [disabled] [ref=e440]: "-"
                  - group
                - generic [ref=e444]:
                  - paragraph [ref=e445]: Sharpened (1H Trait)
                  - button "Item info" [ref=e446]:
                    - img [ref=e447]
                - paragraph [ref=e450]: 1,638
              - listitem [ref=e451] [cursor=pointer]:
                - generic [ref=e453]:
                  - checkbox [ref=e454]
                  - img [ref=e455]
                - generic [ref=e458]:
                  - textbox "N/A" [disabled] [ref=e459]: "-"
                  - group
                - generic [ref=e463]:
                  - paragraph [ref=e464]: Sharpened (2H Trait)
                  - button "Item info" [ref=e465]:
                    - img [ref=e466]
                - paragraph [ref=e469]: 3,276
              - listitem [ref=e470] [cursor=pointer]:
                - generic [ref=e472]:
                  - checkbox [ref=e473]
                  - img [ref=e474]
                - generic [ref=e477]:
                  - textbox "N/A" [disabled] [ref=e478]: "-"
                  - group
                - generic [ref=e482]:
                  - paragraph [ref=e483]: Arena 1-piece Bonus
                  - button "Item info" [ref=e484]:
                    - img [ref=e485]
                - paragraph [ref=e488]: 1,190
              - listitem [ref=e489] [cursor=pointer]:
                - generic [ref=e491]:
                  - checkbox [ref=e492]
                  - img [ref=e493]
                - generic [ref=e496]:
                  - textbox "N/A" [disabled] [ref=e497]: "-"
                  - group
                - generic [ref=e501]:
                  - paragraph [ref=e502]: Anthelmir
                  - button "Item info" [ref=e503]:
                    - img [ref=e504]
                - paragraph [ref=e507]: "400"
              - listitem [ref=e508] [cursor=pointer]:
                - generic [ref=e510]:
                  - checkbox [ref=e511]
                  - img [ref=e512]
                - generic [ref=e515]:
                  - button "Decrease quantity" [ref=e517]:
                    - img [ref=e518]
                  - spinbutton [ref=e520]: "70"
                  - button "Increase quantity" [ref=e522]:
                    - img [ref=e523]
                  - group
                - generic [ref=e528]:
                  - paragraph [ref=e529]: Balorgh
                  - button "Item info" [ref=e530]:
                    - img [ref=e531]
                - paragraph [ref=e534]: 1,610
              - listitem [ref=e535] [cursor=pointer]:
                - generic [ref=e537]:
                  - checkbox [ref=e538]
                  - img [ref=e539]
                - generic [ref=e542]:
                  - textbox "N/A" [disabled] [ref=e543]: "-"
                  - group
                - generic [ref=e547]:
                  - paragraph [ref=e548]: "Wood Elf Passive: Hunter's Eye"
                  - button "Item info" [ref=e549]:
                    - img [ref=e550]
                - paragraph [ref=e553]: "950"
              - listitem [ref=e554] [cursor=pointer]:
                - generic [ref=e556]:
                  - checkbox [ref=e557]
                  - img [ref=e558]
                - generic [ref=e561]:
                  - textbox "N/A" [disabled] [ref=e562]: "-"
                  - group
                - generic [ref=e566]:
                  - paragraph [ref=e567]: "Grave Lord Passive: Dismember"
                  - button "Item info" [ref=e568]:
                    - img [ref=e569]
                - paragraph [ref=e572]: 3,271
              - listitem [ref=e573] [cursor=pointer]:
                - generic [ref=e575]:
                  - checkbox [checked] [ref=e576]
                  - img [ref=e577]
                - generic [ref=e580]:
                  - button "Decrease quantity" [ref=e582]:
                    - img [ref=e583]
                  - spinbutton [ref=e585]: "2"
                  - button "Increase quantity" [ref=e587]:
                    - img [ref=e588]
                  - group
                - generic [ref=e593]:
                  - paragraph [ref=e594]: "Herald of the Tome: Splintered Secrets"
                  - button "Item info" [ref=e595]:
                    - img [ref=e596]
                - paragraph [ref=e599]: 2,480
              - listitem [ref=e600] [cursor=pointer]:
                - generic [ref=e602]:
                  - checkbox [checked] [ref=e603]
                  - img [ref=e604]
                - generic [ref=e607]:
                  - button "Decrease quantity" [ref=e609]:
                    - img [ref=e610]
                  - spinbutton [ref=e612]: "1"
                  - button "Increase quantity" [ref=e614]:
                    - img [ref=e615]
                  - group
                - generic [ref=e620]:
                  - paragraph [ref=e621]: "Light Armor Passive: Concentration"
                  - button "Item info" [ref=e622]:
                    - img [ref=e623]
                - paragraph [ref=e626]: "939"
              - listitem [ref=e627] [cursor=pointer]:
                - generic [ref=e629]:
                  - checkbox [ref=e630]
                  - img [ref=e631]
                - generic [ref=e634]:
                  - button "Decrease quantity" [ref=e636]:
                    - img [ref=e637]
                  - spinbutton [ref=e639]: "1"
                  - button "Increase quantity" [ref=e641]:
                    - img [ref=e642]
                  - group
                - generic [ref=e647]:
                  - paragraph [ref=e648]: "Dual Wield: Twin Blade and Blunt (Mace)"
                  - button "Item info" [ref=e649]:
                    - img [ref=e650]
                - paragraph [ref=e653]: 1,487
              - listitem [ref=e654] [cursor=pointer]:
                - generic [ref=e656]:
                  - checkbox [ref=e657]
                  - img [ref=e658]
                - generic [ref=e661]:
                  - textbox "N/A" [disabled] [ref=e662]: "-"
                  - group
                - generic [ref=e666]:
                  - paragraph [ref=e667]: "Two Handed: Heavy Weapons (Maul)"
                  - button "Item info" [ref=e668]:
                    - img [ref=e669]
                - paragraph [ref=e672]: 2,974
              - listitem [ref=e673] [cursor=pointer]:
                - generic [ref=e675]:
                  - checkbox [checked] [ref=e676]
                  - img [ref=e677]
                - generic [ref=e680]:
                  - button "Decrease quantity" [ref=e682]:
                    - img [ref=e683]
                  - spinbutton [ref=e685]: "2"
                  - generic [ref=e686]:
                    - button "Increase quantity" [disabled]:
                      - img
                  - group
                - generic [ref=e690]:
                  - paragraph [ref=e691]: "Champion Point: Piercing"
                  - button "Item info" [ref=e692]:
                    - img [ref=e693]
                - paragraph [ref=e696]: "700"
              - listitem [ref=e697] [cursor=pointer]:
                - generic [ref=e699]:
                  - checkbox [ref=e700]
                  - img [ref=e701]
                - generic [ref=e704]:
                  - button "Decrease quantity" [ref=e706]:
                    - img [ref=e707]
                  - spinbutton [ref=e709]: "3"
                  - button "Increase quantity" [ref=e711]:
                    - img [ref=e712]
                  - group
                - generic [ref=e717]:
                  - paragraph [ref=e718]: "Champion Point: Force of Nature"
                  - button "Item info" [ref=e719]:
                    - img [ref=e720]
                - paragraph [ref=e723]: 1,980
          - generic [ref=e726]:
            - generic [ref=e727]:
              - generic [ref=e728]: Total Penetration
              - heading "18,999" [level=4] [ref=e729]
            - generic [ref=e731]:
              - img [ref=e732]
              - paragraph [ref=e734]: Optimal
            - paragraph [ref=e736]: "Underpen: 0 Damage Loss: 0%"
            - paragraph [ref=e738]: "PvE: 18,200–18,999 PvP: 33,300–37,000"
    - generic [ref=e739]: Navigated to Calculator
    - contentinfo [ref=e740]:
      - generic [ref=e741]:
        - generic [ref=e742]:
          - generic [ref=e743]:
            - generic [ref=e744]: Stay ahead of the meta
            - heading "Ready for the next wave of ESO combat analytics?" [level=2] [ref=e745]
            - paragraph [ref=e746]: Connect with our team for early feature access, share your feedback, and help shape the tools that power top-tier raid strategy.
          - generic [ref=e747]:
            - link "Join Discord" [ref=e748] [cursor=pointer]:
              - /url: https://discord.gg/mMjwcQYFdc
              - text: Join Discord
            - link "View on GitHub" [ref=e750] [cursor=pointer]:
              - /url: https://github.com/ESO-Toolkit/eso-toolkit
        - generic [ref=e751]:
          - generic [ref=e752]:
            - generic [ref=e753]:
              - img "ESO Toolkit logo" [ref=e755]
              - generic [ref=e756]:
                - heading "ESO Helper Tools" [level=3] [ref=e757]
                - paragraph [ref=e758]: Data-driven utilities crafted by raiders for raiders. Surface the insights you need to plan faster pulls, tighter logs, and smoother clears.
            - generic [ref=e759]:
              - generic [ref=e760]: Real-time analytics
              - generic [ref=e762]: Player-built insights
              - generic [ref=e764]: Free beta access
              - generic [ref=e766]: Community-driven support
          - generic [ref=e769]:
            - generic [ref=e770]:
              - paragraph [ref=e771]: Tools
              - generic [ref=e772]:
                - link "Build Calculator" [ref=e773] [cursor=pointer]:
                  - /url: /calculator
                  - generic [ref=e774]: Build Calculator
                  - img [ref=e775]
                - link "Build Editor" [ref=e777] [cursor=pointer]:
                  - /url: /build-editor
                  - generic [ref=e778]: Build Editor
                  - img [ref=e779]
                - link "Roster Builder" [ref=e781] [cursor=pointer]:
                  - /url: /roster-builder
                  - generic [ref=e782]: Roster Builder
                  - img [ref=e783]
                - link "Parse Analysis" [ref=e785] [cursor=pointer]:
                  - /url: /parse-analysis
                  - generic [ref=e786]: Parse Analysis
                  - img [ref=e787]
                - link "Text Editor" [ref=e789] [cursor=pointer]:
                  - /url: /text-editor
                  - generic [ref=e790]: Text Editor
                  - img [ref=e791]
                - link "Loadout Manager" [ref=e793] [cursor=pointer]:
                  - /url: /loadout-manager
                  - generic [ref=e794]: Loadout Manager
                  - img [ref=e795]
                - link "Scribing" [ref=e797] [cursor=pointer]:
                  - /url: /calculator#scribing
                  - generic [ref=e798]: Scribing
                  - img [ref=e799]
                - link "Gear Sets" [ref=e801] [cursor=pointer]:
                  - /url: /gear-sets
                  - generic [ref=e802]: Gear Sets
                  - img [ref=e803]
            - generic [ref=e805]:
              - paragraph [ref=e806]: Quick Links
              - generic [ref=e807]:
                - link "Home" [ref=e808] [cursor=pointer]:
                  - /url: /
                  - generic [ref=e809]: Home
                  - img [ref=e810]
                - link "Roster Hub" [ref=e812] [cursor=pointer]:
                  - /url: /roster-hub
                  - generic [ref=e813]: Roster Hub
                  - img [ref=e814]
                - link "Build Hub" [ref=e816] [cursor=pointer]:
                  - /url: /build-hub
                  - generic [ref=e817]: Build Hub
                  - img [ref=e818]
                - link "Pack Hub" [ref=e820] [cursor=pointer]:
                  - /url: /pack-hub
                  - generic [ref=e821]: Pack Hub
                  - img [ref=e822]
                - link "Leaderboards" [ref=e824] [cursor=pointer]:
                  - /url: /leaderboards
                  - generic [ref=e825]: Leaderboards
                  - img [ref=e826]
                - link "Calculation Knowledge Base" [ref=e828] [cursor=pointer]:
                  - /url: /docs/calculations
                  - generic [ref=e829]: Calculation Knowledge Base
                  - img [ref=e830]
                - link "Discord Bot Guide" [ref=e832] [cursor=pointer]:
                  - /url: /docs/discord-roster-bot
                  - generic [ref=e833]: Discord Bot Guide
                  - img [ref=e834]
                - link "What's New" [ref=e836] [cursor=pointer]:
                  - /url: /whats-new
                  - generic [ref=e837]: What's New
                  - img [ref=e838]
                - link "About" [ref=e840] [cursor=pointer]:
                  - /url: /about
                  - generic [ref=e841]: About
                  - img [ref=e842]
        - generic [ref=e845]:
          - paragraph [ref=e846]: ESO Helper Tools is an independent project and is not affiliated with ZeniMax Online Studios, Bethesda, or esologs.com. All trademarks are the property of their respective owners.
          - generic [ref=e847]:
            - link "Privacy Policy" [ref=e848] [cursor=pointer]:
              - /url: /privacy
            - button "Report a Bug" [ref=e849] [cursor=pointer]:
              - img [ref=e851]
              - text: Report a Bug
  - generic [ref=e855]:
    - button "Close" [ref=e856] [cursor=pointer]:
      - img [ref=e857]
    - generic [ref=e859]:
      - img [ref=e861]
      - heading "Privacy & Cookies" [level=6] [ref=e863]
    - paragraph [ref=e864]:
      - text: We use essential storage for app functionality. Optional analytics and error tracking help us improve.
      - link "Privacy Policy" [ref=e865] [cursor=pointer]:
        - /url: /privacy
    - generic [ref=e866]:
      - button "Decline All" [ref=e867] [cursor=pointer]
      - button "Customize" [ref=e868] [cursor=pointer]
      - button "Accept All" [ref=e869] [cursor=pointer]
```

# Test source

```ts
  185 |       animations: 'disabled'
  186 |     });
  187 |     
  188 |     console.log('✅ Insights panel visual regression test completed successfully');
  189 |   });
  190 | 
  191 |   test('visual regression for login page (unauthenticated)', async ({ page }) => {
  192 |     console.log('🔐 Running visual regression tests for login page...');
  193 |     
  194 |     // Navigate directly to the login page WITHOUT enableApiCaching
  195 |     console.log('📍 Navigating to login page...');
  196 |     await page.goto('/login');
  197 |     
  198 |     // Wait for login page to load
  199 |     console.log('⏳ Waiting for login page to load...');
  200 |     await page.waitForSelector('[data-testid="login-title"], .MuiCard-root', { timeout: 30000 });
  201 |     
  202 |     // Wait for any loading states to complete
  203 |     await page.waitForTimeout(2000);
  204 |     
  205 |     // Verify we're on the login page
  206 |     console.log('🔍 Verifying login page elements...');
  207 |     const loginTitle = await page.locator('[data-testid="login-title"]').count();
  208 |     const loginButton = await page.locator('button:has-text("Login"), button:has-text("Sign In")').count();
  209 |     const loginCard = await page.locator('.MuiCard-root').count();
  210 |     
  211 |     console.log(`Login title: ${loginTitle}`);
  212 |     console.log(`Login button: ${loginButton}`);
  213 |     console.log(`Login card: ${loginCard}`);
  214 |     
  215 |     // Visual regression comparison
  216 |     console.log('📸 Performing visual regression comparison for login page...');
  217 |     await expect(page).toHaveScreenshot('login-page.png', {
  218 |       fullPage: true,
  219 |       animations: 'disabled'
  220 |     });
  221 |     
  222 |     console.log('✅ Login page visual regression test completed successfully');
  223 |   });
  224 | 
  225 |   test('visual regression for home/landing page (unauthenticated)', async ({ page }) => {
  226 |     console.log('🏠 Running visual regression tests for home/landing page...');
  227 |     
  228 |     // Navigate to the home page WITHOUT enableApiCaching (unauthenticated)
  229 |     console.log('📍 Navigating to home/landing page...');
  230 |     await page.goto('/');
  231 |     
  232 |     // Wait for the landing page to load
  233 |     console.log('⏳ Waiting for landing page content to load...');
  234 |     await page.waitForSelector('h1, [data-testid="landing-title"], .MuiTypography-h1', { timeout: 30000 });
  235 |     
  236 |     // Wait for any hero images or dynamic content to load
  237 |     await page.waitForTimeout(3000);
  238 |     
  239 |     // Verify we're on the landing page
  240 |     console.log('🔍 Verifying landing page elements...');
  241 |     const heroText = await page.locator('h1, [data-testid="landing-title"], .MuiTypography-h1').count();
  242 |     const navBar = await page.locator('header, [data-testid="header-bar"], .MuiAppBar-root').count();
  243 |     const mainContent = await page.locator('main, [data-testid="main-content"], .MuiContainer-root').count();
  244 |     
  245 |     console.log(`Hero text: ${heroText}`);
  246 |     console.log(`Navigation bar: ${navBar}`);
  247 |     console.log(`Main content: ${mainContent}`);
  248 |     
  249 |     // Visual regression comparison
  250 |     console.log('📸 Performing visual regression comparison for landing page...');
  251 |     await expect(page).toHaveScreenshot('landing-page.png', {
  252 |       fullPage: true,
  253 |       animations: 'disabled'
  254 |     });
  255 |     
  256 |     console.log('✅ Landing page visual regression test completed successfully');
  257 |   });
  258 | 
  259 |   test('visual regression for calculator page (public)', async ({ page }) => {
  260 |     console.log('🧮 Running visual regression tests for calculator page...');
  261 |     
  262 |     // Navigate to the calculator page WITHOUT enableApiCaching (public, no auth required)
  263 |     console.log('📍 Navigating to calculator page...');
  264 |     await page.goto('/calculator');
  265 |     
  266 |     // Wait for the calculator to load - look for Container or main calculator elements
  267 |     console.log('⏳ Waiting for calculator content to load...');
  268 |     await page.waitForSelector('.MuiContainer-root, [role="main"], main', { timeout: 30000 });
  269 |     
  270 |     // Wait for calculator components to fully render
  271 |     await page.waitForTimeout(4000);
  272 |     
  273 |     // Verify we're on the calculator page
  274 |     console.log('🔍 Verifying calculator page elements...');
  275 |     const containerElement = await page.locator('.MuiContainer-root').count();
  276 |     const inputFields = await page.locator('input, .MuiTextField-root').count();
  277 |     const buttons = await page.locator('button').count();
  278 |     
  279 |     console.log(`Container element: ${containerElement}`);
  280 |     console.log(`Input fields: ${inputFields}`);
  281 |     console.log(`Buttons: ${buttons}`);
  282 |     
  283 |     // Visual regression comparison
  284 |     console.log('📸 Performing visual regression comparison for calculator page...');
> 285 |     await expect(page).toHaveScreenshot('calculator-page.png', {
      |                        ^ Error: expect(page).toHaveScreenshot(expected) failed
  286 |       fullPage: true,
  287 |       animations: 'disabled'
  288 |     });
  289 |     
  290 |     console.log('✅ Calculator page visual regression test completed successfully');
  291 |   });
  292 | });
  293 | 
```