# Token audit of the flat kit (stage 08, step 1)

*Facts before decisions. This file says what `design/kit/kit.css` held at the moment this audit was taken, where every variable stood, and which role it was doing in each place. That file was split at step 3 and deleted at step 8; the line numbers below are its line numbers and stay as evidence. Nothing here is fixed and nothing is renamed: consolidation is step 2, the split into two levels is step 3. Two instruments took the counts independently and in full before they were merged, and the column "who found" says which one saw each row.*

**Corpus, as it stood at step 1.** `design/kit/kit.css`, `design/kit/kit.html`, `design/kit/shell.html`, and all 24 coloured screens in `design/` with their state pages. `wireframes/` is not read as a source of tokens: it is a frozen grey prototype on its own `_wf.css` and does not belong to the product's token layer. The one thing counted against `wireframes/` is structural, not token: how many times a component occurs **in the whole product**, because `design/` currently holds 24 screens out of 100.

---

## Summary of the audit, in numbers

*These are the "was" numbers. The "now" half is filled in at step 3 and shown to a reader in the "Audit summary" block on `design/kit/pixel-proof.html` at step 9.*

| What | Was, at the end of stage 07 |
|---|---|
| Variables declared | **83** |
| Distinct raw values behind them | **62** |
| `var()` references across the kit and the 24 screens | **706** |
| Colour variables | 12 |
| Icon variables (Solar glyphs as data URIs) | 9 |
| Geometry, type and size variables | 62 |
| Variables with an origin recorded | **82 of 83** (53 in a comment beside the declaration, 29 under a group header) |
| Variables with no origin anywhere, not in `kit.css` and not in `DESIGN.md` | **1** (`--size-logo-h`) |
| Orphan variables, declared and never used | **0** |
| `:root` blocks the values are spread across | **4** |
| Classes declared in `kit.css` | 125 |
| Rule blocks / media queries | 264 / 14 |
| Styles written past the kit on a product screen | **0** |

**Four `:root` blocks, not one.** The header of `kit.css` says "every value sits in `:root`", and that is true in the singular sense only. The values are actually spread across four blocks: the main one at line 24 (59 variables), a responsive override inside `@media (max-width: 520px)` at line 330 that re-declares `--size-badge-box` and `--size-badge-glyph`, the icon block at line 340 (9 glyphs), and a late block at line 497 headed "values this step needed" (15 variables added while the sample was being assembled). No instrument called this a defect and it is not one: the file works. It is recorded because step 3 has to gather all four into one primitive level, and a reader who trusts the header would gather one.

---

## Part A, the code audit

### A.1 Every variable, where it stands and what it paints

*Property is taken from the declaration it appears in, so it says which surface the value paints: ink, fill or line. That third axis is what step 3 splits roles on, and it is the axis that found the one real contrast failure below.*

| Variable | Value | Uses | Property it paints | Where it stands (selectors, first six) | Origin |
|---|---|---|---|---|---|
| `--color-bg` | `#F7F8FC` | 7 | background x7 | `.wf-media, .wf-see .see-body, .wf-strip2, .wf-sys, body` | pixel of plate A, palette swatch 1, the page canvas |
| `--color-surface` | `#FFFFFF` | 32 | background x32 | `.dz-strip, .wf-alert, .wf-appbar, .wf-appfoot, .wf-badge.warn, .wf-btn` | pixel of plate A, swatch 2, cards and panels |
| `--color-ink` | `#1D1D1D` | 31 | color x21, a x5, wf-tab x1 | `.dz-strip a.on, .dz-strip a:hover, .wf-appfoot a:hover, .wf-auth-proof, .wf-badge.ok, .wf-brand` | pixel of plate A, swatch 3, text and structure |
| `--color-accent-soft` | `#A4BEF3` | 10 | background x10 | `.dz-strip a.on, .wf-avatar, .wf-badge.ok, .wf-ico, .wf-saved, .wf-spark .bar` | pixel of plate A, swatch 4, decorative only |
| `--color-action` | `#346FEC` | 25 | background x6, border-color x4, background-color x4 | `.wf-appbar-inner .wf-step::before, .wf-auth-proof .wf-ico::before, .wf-btn.solid, .wf-btn:focus-visible, .wf-input:focus, .wf-radio:focus-within` | pixel of plate A, swatch 5, the only interactive colour |
| `--color-muted` | `#5B6171` | 54 | color x49, wf-btn x1, wf-input x1 | `.dz-strip a, .wf-appbar-inner .wf-step, .wf-appfoot a, .wf-body, .wf-cannot, .wf-cannot::before` | pixel of plate A, swatch 6, secondary text and borders |
| `--color-action-ink` | `#FFFFFF` | 2 | color x1, solid x1 | `.wf-btn.solid, .wf-btn.solid:hover` | measured: white on the action colour is 4.53, AA |
| `--color-alert` | `#B92928` | 7 | color x3, background-color x2, border x1 | `.wf-alert .tag, .wf-alert::before, .wf-badge.warn, .wf-err, [aria-label^="Could not load"] .wf-state` | candidate, pixel of plate D, alert swatch. Fixed at stage 07 |
| `--color-line` | `rgba(91, 97, 113, .16)` | 33 | border x19, border-bottom x9, border-top x4 | `.wf-appbar, .wf-appfoot, .wf-card, .wf-claims, .wf-claims li, .wf-dialog` | derived from --color-muted, hairline |
| `--color-line-strong` | `rgba(91, 97, 113, .28)` | 17 | border x11, border-top x2, background x2 | `.dz-strip, .dz-strip .dz-out, .dz-strip a:hover, .wf-alert, .wf-btn, .wf-input` | derived from --color-muted, control border |
| `--color-skeleton` | `rgba(91, 97, 113, .13)` | 1 | background x1 | `.wf-skel` | derived from --color-muted, loading only |
| `--radius-control` | `8px` | 13 | border-radius x13 | `.wf-alert, .wf-btn, .wf-ico.sm, .wf-input, .wf-logo, .wf-radio` | group: radius: plate A, UI component zone, measured on the shape |
| `--radius-card` | `16px` | 19 | border-radius x19 | `.wf-card, .wf-claims, .wf-dialog, .wf-ico, .wf-list, .wf-media` | group: radius: plate A, UI component zone, measured on the shape |
| `--radius-pill` | `999px` | 13 | border-radius x13 | `.dz-strip a, .wf-avatar, .wf-badge, .wf-ico.round, .wf-pill, .wf-saved` | group: radius: plate A, UI component zone, measured on the shape |
| `--radius-sm` | `4px` | 2 | border-radius x2 | `.wf-alert .tag, .wf-skel` | group: radius: plate A, UI component zone, measured on the shape |
| `--radius-bar` | `3px` | 3 | border-radius x2 | `.wf-spark .bar` | one spark bar, the smallest shape in the language |
| `--space-1` | `4px` | 12 | padding x6, margin-bottom x3, width x1 | `.dz-strip a, .wf-alert .tag, .wf-claims .c-lead, .wf-eyebrow, .wf-pill, .wf-saved` | group: space: 4px step, attribute A3, restraint carried by rhythm |
| `--space-2` | `8px` | 40 | gap x13, margin-bottom x8, padding x5 | `.dz-strip, .dz-strip .dz-id, .pg-facets, .wf-appbar-inner .wf-step, .wf-btn, .wf-btn.compact` | group: space: 4px step, attribute A3, restraint carried by rhythm |
| `--space-3` | `12px` | 57 | padding x15, gap x14, margin-bottom x7 | `.wf-alert, .wf-auth-proof, .wf-badge, .wf-btn, .wf-btns, .wf-card .wf-strip2 + .wf-micro` | group: space: 4px step, attribute A3, restraint carried by rhythm |
| `--space-4` | `16px` | 39 | padding x9, margin-top x7, gap x6 | `.pg-grid, .wf-appbar-inner, .wf-auth-brand, .wf-btn.block + .wf-micro, .wf-cannot, .wf-card` | group: space: 4px step, attribute A3, restraint carried by rhythm |
| `--space-5` | `20px` | 49 | margin-top x11, padding x6, margin x6 | `.pg-facets, .wf-alert, .wf-appbar-inner, .wf-appfoot-inner, .wf-badge, .wf-card` | group: space: 4px step, attribute A3, restraint carried by rhythm |
| `--space-6` | `28px` | 13 | padding x4, gap x4, margin-top x2 | `.wf-contact, .wf-content, .wf-dialog, .wf-foot-cols, .wf-grid, .wf-hero-grid` | group: space: 4px step, attribute A3, restraint carried by rhythm |
| `--space-7` | `40px` | 11 | padding x5, gap x2, margin-bottom x1 | `.wf-auth-grid, .wf-hero-grid, .wf-mkt section, .wf-pubfoot-inner, .wf-state, .wf-sys-body` | group: space: 4px step, attribute A3, restraint carried by rhythm |
| `--font-display` | `"Inter Tight", system-ui, -apple-system, "Segoe UI", sans-serif` | 26 | font-family x26 | `.dz-strip .dz-id, .wf-brand, .wf-card-h, .wf-claims .c-lead, .wf-metric, .wf-mkt h2` | group: type: decision of the user, chosen against the character of pla |
| `--font-body` | `"Inter", system-ui, -apple-system, "Segoe UI", sans-serif` | 3 | font-family x2, letter-spacing x1 | `.wf-metric span, body` | group: type: decision of the user, chosen against the character of pla |
| `--size-display` | `clamp(26px, 3.4vw, 34px)` | 2 | font-size x2 | `.wf-screen h1` | group: size: the scale published on the concept stand |
| `--size-read` | `clamp(30px, 4vw, 40px)` | 2 | font-size x2 | `.wf-pulse .read` | group: size: the scale published on the concept stand |
| `--size-state-title` | `20px` | 2 | font-size x2 | `.wf-state .n` | the heading of a state block, one step under the page h1 |
| `--size-brand` | `20px` | 1 | font-size x1 | `.wf-brand` | the wordmark, plate A identity zone |
| `--size-h2` | `15px` | 1 | font-size x1 | `.wf-screen h2` | group: size: the scale published on the concept stand |
| `--size-body` | `16px` | 3 | font-size x3 | `.wf-hero .wf-lead, body` | group: size: the scale published on the concept stand |
| `--size-ui` | `15px` | 23 | font-size x23 | `.wf-alert, .wf-auth-proof, .wf-body, .wf-btn, .wf-card-h, .wf-claims .c-lead` | group: size: the scale published on the concept stand |
| `--size-metric` | `24px` | 2 | font-size x2 | `.wf-metric` | participation, the one number on the dashboard |
| `--size-nav` | `14px` | 5 | font-size x5 | `.wf-foot-col a, .wf-navlink, .wf-settings, .wf-tab` | app bar tabs and settings |
| `--size-label` | `14px` | 3 | font-size x3 | `.wf-field > .k, .wf-metric span` | form label, and the unit beside a metric |
| `--size-micro` | `13px` | 24 | font-size x24 | `.wf-appbar-inner .wf-step, .wf-appfoot-inner, .wf-cannot, .wf-claims .c-body, .wf-err, .wf-list-row .who small` | group: size: the scale published on the concept stand |
| `--size-eyebrow` | `13px` | 4 | font-size x4 | `.wf-eyebrow, .wf-foot-col h3, .wf-progcard .cat, .wf-pulse .act-lbl` | group: size: the scale published on the concept stand |
| `--size-tabbar` | `12px` | 3 | font-size x3 | `.dz-strip, .wf-tabbar a` | the mobile bottom bar, one step under micro |
| `--size-tag` | `11px` | 10 | font-size x10 | `.wf-alert .tag, .wf-logo, .wf-pill, .wf-tag` | the alert tag, the smallest type in the language |
| `--size-badge-glyph` | `26px` | 1 | font-size x1 | `.wf-badge` | the check or exclamation inside an outcome badge |
| `--size-icon` | `20px` | 10 | width x5, height x5 | `.wf-alert::before, .wf-auth-proof .wf-ico, .wf-auth-proof .wf-ico::before, .wf-see > summary::before, .wf-strip2::before` | the icon square in a strip or a banner |
| `--size-icon-sm` | `16px` | 5 | width x2, height x2, background-size x1 | `.wf-appbar-inner .wf-step::before, .wf-cannot::before, select.wf-input` | the icon square in a micro line |
| `--size-icon-lg` | `24px` | 4 | width x2, height x2 | `.wf-ico::before, [aria-label^="Could not load"] .wf-state` | the Solar drawing grid |
| `--size-badge-box` | `56px` | 4 | width x2, height x2 | `.wf-badge, .wf-ico` | outcome badge, carried from the wireframe |
| `--size-spark` | `56px` | 1 | height x1 | `.wf-spark` | the trend spark, five cycles |
| `--size-bar` | `18px` | 1 | width x1 | `.wf-spark .bar` | one bar of the spark |
| `--size-skel-line` | `14px` | 1 | height x1 | `.wf-skel` | a line of loading skeleton |
| `--size-skel-block` | `52px` | 1 | height x1 | `.wf-skel.tall` | a block of loading skeleton |
| `--size-skel-act` | `190px` | 1 | width x1 | `.wf-skel.act` | the skeleton standing in for a button |
| `--size-control-h` | `40px` | 3 | height x2, width x1 | `.wf-ico.sm, .wf-skel.act` | the height a control occupies while loading |
| `--size-content` | `1140px` | 4 | max-width x4 | `.wf-appbar-inner, .wf-appfoot-inner, .wf-content, .wf-pubfoot-inner` | the product content column |
| `--size-narrow` | `480px` | 1 | max-width x1 | `.wf-narrow` | the focused single column, employee check-in |
| `--size-rail` | `220px` | 3 | padding-left x3 | `body` | the shared roadmap rail on desktop |
| `--size-rail-bar` | `52px` | 4 | padding-top x3, top x1 | `.dz-strip, body` | the shared roadmap bar on mobile |
| `--size-touch` | `44px` | 2 | min-height x2 | `.wf-btn, .wf-list-row` | the smallest comfortable pointer target, WCAG 2.5.5 |
| `--space-icon-inset` | `42px` | 3 | min-height x1, padding-right x1 | `.wf-screen, select.wf-input` | icon 20 plus the gutters on both sides |
| `--space-icon-inset-sm` | `26px` | 1 | padding-left x1 | `.wf-cannot` | icon 16 plus one gutter |
| `--space-icon-stack` | `34px` | 1 | padding-top x1 | `[aria-label^="Could not load"] .wf-state` | an icon standing above a centred heading |
| `--space-hair` | `2px` | 1 | top x1 | `.wf-cannot::before` | the smallest optical nudge, an icon against a line of text |
| `--color-overlay` | `rgba(29, 29, 29, .45)` | 2 | background x2 | `.wf-overlay` | derived from --color-ink, needed by the dialog |
| `--size-media-sm` | `140px` | 1 | min-height x1 | `.wf-media` | the media slot at its resting size, carried from the wireframe |
| `--size-media` | `260px` | 1 | min-height x1 | `.wf-media.shot` | the media slot when it holds a product screenshot, the .shot modifier |
| `--size-media-tall` | `340px` | 1 | min-height x1 | `.wf-media.tall` | the tall media slot, same origin |
| `--size-dialog` | `440px` | 1 | max-width x1 | `.wf-dialog` | the dialog panel, geometry carried from the wireframe |
| `--size-switch` | `40px` | 1 | min-width x1 | `.wf-switch a` | one segment of the document switch, derived from --size-touch |
| `--size-hero` | `clamp(30px, 5vw, 46px)` | 2 | font-size x2 | `.wf-hero h1` | the marketing display step, needed by the hero. The product interior n |
| `--size-section` | `clamp(20px, 2.4vw, 26px)` | 1 | font-size x1 | `.wf-mkt h2` | a marketing section heading, needed by .wf-mkt h2 |
| `--size-card-title` | `20px` | 1 | font-size x1 | `.wf-progcard .title` | the title of a program card, snapped to the state-title step |
| `--size-textarea` | `120px` | 1 | min-height x1 | `.wf-textarea` | the resting height of a textarea, needed by the contact form |
| `--size-quote` | `clamp(18px, 2vw, 22px)` | 1 | font-size x1 | `.wf-quote-t` | the one testimonial, a step between body and state title |
| `--size-logo-w` | `104px` | 1 | width x1 | `.wf-logo` | one logo in the social proof strip |
| `--size-logo-h` | `34px` | 1 | height x1 | `.wf-logo` | group: values this step needed and the component that needed each |
| `--size-avatar` | `46px` | 2 | width x1, height x1 | `.wf-avatar` | the one testimonial avatar |
| `--size-auth` | `960px` | 1 | max-width x1 | `.wf-auth-grid` | the split auth column pair, carried from the wireframe |
**Icons, the same table in one row per glyph.** Every one is a Solar linear glyph on the 24px grid at stroke 1.5, inlined as a data URI and painted through a CSS mask, so the glyph takes the ink colour of its context instead of carrying its own.

| Variable | Value | Uses | Property | Where |
|---|---|---|---|---|
| `--icon-shield` | Solar linear glyph, data URI | 6 | mask | `.wf-auth-proof .wf-ico::before, .wf-grid4 .wf-card:nth-child(3) .wf-ico:, .wf-strip2::before` |
| `--icon-lock` | Solar linear glyph, data URI | 4 | mask | `.wf-appbar-inner .wf-step::before, .wf-grid3 .wf-card:nth-child(2) .wf-ico:` |
| `--icon-cross` | Solar linear glyph, data URI | 2 | mask | `.wf-cannot::before` |
| `--icon-chevron` | Solar linear glyph, data URI | 3 | mask | `.wf-see > summary::before, select.wf-input` |
| `--icon-grid` | Solar linear glyph, data URI | 2 | mask | `.wf-grid3 .wf-card:nth-child(1) .wf-ico:` |
| `--icon-chart` | Solar linear glyph, data URI | 4 | mask | `.wf-grid3 .wf-card:nth-child(3) .wf-ico:, .wf-grid4 .wf-card:nth-child(2) .wf-ico:` |
| `--icon-team` | Solar linear glyph, data URI | 2 | mask | `.wf-grid4 .wf-card:nth-child(4) .wf-ico:` |
| `--icon-pulse` | Solar linear glyph, data URI | 4 | mask | `.wf-grid4 .wf-card:nth-child(1) .wf-ico:, .wf-ico::before` |
| `--icon-warning` | Solar linear glyph, data URI | 4 | mask | `.wf-alert::before, [aria-label^="Could not load"] .wf-state` |
### A.2 Drift of values

*The same role written as two values that are close but not identical. Codex reported none, and it was right about the half it looked at: the coloured screens carry no inline colour, pixel or font-family at all, so there is nowhere for that classic drift to hide. The drift this project actually had was inside `kit.css`, on the type scale, and it was a drift of steps rather than of hex codes.*

| # | Class | What | Who found | Verdict |
|---|---|---|---|---|
| D1 | Drift across files | None. No inline value on any of the 24 coloured screens; at the time of the audit every screen loaded `kit/kit.css` and nothing else | Codex | Clean, confirmed |
| D2 | Type scale, too many steps | Eleven type sizes sit between 11px and 26px: 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26. Three pairs are one pixel apart and carry different names: `--size-micro` 13 against `--size-eyebrow` 13, `--size-h2` 15 against `--size-ui` 15, `--size-label` 14 against `--size-nav` 14 | Claude | **For step 2.** Same value under two names is legal when the roles can diverge; it is drift when they cannot. Each pair gets a decision, not a rename |
| D3 | One value, five names | `20px` is `--space-5`, `--size-state-title`, `--size-brand`, `--size-icon` and `--size-card-title`. `16px` is `--space-4`, `--radius-card`, `--size-body` and `--size-icon-sm`. `40px` is `--space-7`, `--size-control-h` and `--size-switch` | Claude | **Not drift, and not a merge either.** A spacing step and a type step that happen to be 20px are two scales that must be free to move apart. Recorded so step 3 does not fold them by value |
| D4 | Badge, two sizes for one role | `--size-badge-box` is 56px in the main block and 44px inside `@media (max-width: 520px)`; `--size-badge-glyph` is 26px and 22px | Claude | **Not drift.** This is responsive override done the right way, at the variable rather than in the rule. Named because step 3 has to carry it across, and stage 10 owns the breakpoint |
| D5 | Line alphas | Three alphas off one colour: `.13` skeleton, `.16` hairline, `.28` control border. All three derived from `--color-muted` and each on a different job | Claude | Clean. Three roles, three values, no pair close enough to be an accident |

### A.3 One variable carrying several roles

*The reason the semantic level exists. A variable here is not wrong, it is overloaded: two places share a value today and would have to be edited apart tomorrow.*

| # | Variable | The roles hiding behind it | Can they diverge |
|---|---|---|---|
| R1 | `--color-bg` | the page canvas (`body`) **and** a recessed surface inside a card (`.wf-strip2`, `.wf-see .see-body`, `.wf-media`, `.wf-sys`) | **Yes.** A recessed strip inside a white card is a different job from the page behind everything. Two roles |
| R2 | `--color-surface` | the raised surface (card, app bar, footer, tab bar, dialog) **and** the fill of an outline button, an input and a radio | **Yes.** The day a control gets a tinted rest fill, every card would follow it. Two roles |
| R3 | `--color-ink` | body text, headings, the wordmark, a current tab **and** the glyph of a masked icon | **No, and this is the point of the surface axis.** All five are ink: the pack counts an icon glyph as ink, not as a fill, even though the declaration reads `background-color`. One role |
| R4 | `--color-muted` | secondary text (30 uses) **and** the glyph of the "what they never see" cross **and** a hover border on a control | **Yes, on the third.** Text and glyph are one ink role; a border is a line and belongs with the line roles. Two roles, split by surface |
| R5 | `--color-action` | the solid button fill, the focus ring, the checked radio ring, the current tab underline, `accent-color` | **Partly.** Fill and line are two surfaces with two different thresholds, 4.5 and 3. The one thing it is never used for is **text**, and that is not an accident: `#346FEC` on the page is 4.27 and would fail. A role named `--text-action` would be a trap and is not created |
| R6 | `--color-alert` | the tag text and the error text (ink), the alert bar and the error icon (fill), the warn badge border (line) | **Yes, all three surfaces at once.** This is the sharpest role split in the file |
| R7 | `--color-accent-soft` | selected chip, selected document switch, ok badge, icon slot, avatar, the two emphasised spark bars | **No.** Every one is the same job: a soft fill that says "this one". One role. It is never ink: 1.87 against white, and the file says "decorative only" |
| R8 | `--color-action-ink` | white on the action fill, and nothing else | One role, one use. Kept because the pair "fill plus its ink" has to survive the dark theme together |

### A.4 Values written past a variable

*Codex returned ten rows here. Nine of them are withdrawn at verification, and the reason is written into `kit.css` itself, seven lines under the `:root` block: "Deliberate literals, and the only ones allowed in a rule below: hairlines (1px and 2px borders and outlines), percentages, the underline offset, and the media query breakpoints."*

| # | What Codex reported | Verdict |
|---|---|---|
| L1 | `2px` in seven focus rings and two hover borders bypasses `--space-hair: 2px` | **Withdrawn at verification.** `--space-hair` is a spacing role, the optical nudge of an icon against a line of text. An outline width is a line, not a space. Binding the two would be a false coupling that the first change to either would break. **But the signal is real and is carried forward:** the file has no primitive for a line width, and step 3 creates one, because at step 5 the focus ring stops being a literal and becomes a token |
| L2 | `3px` in `text-underline-offset` bypasses `--radius-bar: 3px` | **Withdrawn at verification.** A radius and an underline offset share a number and nothing else. Named as a deliberate literal in the same header |
| L3 | Breakpoints: 520, 640, 700, 720, 760, 900, 960 in 14 media queries | **Not a defect of this stage.** The header names breakpoints as literals on purpose, because responsive is stage 10 and it will name them. Recorded so stage 10 finds them in one list |
| L4 | Layout literals that no variable holds: 140px, 260px, 340px, 440px, 104px, 46px, 120px, 30px | **Already variables.** All eight were lifted into the late `:root` block at line 497 during stage 07 step 6. The scan reports them because the declaration itself contains the literal. Clean |
| L5 | Any hex, pixel or font name inline on a product screen | **None.** Zero `style` attributes and zero `<style>` blocks across the 24 screens. The one `<style>` block in `design/` is on `overview.html`, which is a stand and is allowed one |

### A.5 Variables with no origin

*`kit.css` arrived by `git mv` from stage 06 and every value was supposed to keep the comment that says where it came from. Both instruments counted this the same way and reached the same single row.*

| Kind | Count | Detail |
|---|---|---|
| Origin in a comment beside the declaration | 53 | every colour, every icon-adjacent size, and all fifteen of the late block except one |
| Origin in the group header above the declaration | 29 | the four radii, the seven spacing steps, the two font stacks, seven type sizes, and the nine icons under the Solar block comment |
| Origin in `DESIGN.md` as well | 29 of those 29 | Codex checked each one against the root `DESIGN.md` and found the line: radii at 191 to 194, spacing at 177, fonts at 155, the type steps at 159 to 167, Solar at 197 |
| **No origin in either file** | **1** | **`--size-logo-h: 34px`**, declared at `design/kit/kit.css:510`, used once by `.wf-logo` at line 681. Its neighbour `--size-logo-w: 104px` carries "one logo in the social proof strip"; this one carries nothing, and `DESIGN.md` has it in no list |

**The one value from nowhere, and what happens to it.** `--size-logo-h` is the height of one placeholder logo in the social proof strip on the home page, and the strip is a stage-07 one-off that appears on exactly one screen. Both instruments found it independently. It is not fixed here: step 2 decides whether the logo strip becomes a component at all, and if it does not, the variable leaves with it. Either way it does not reach `tokens.css` without an origin.

### A.6 Orphans

**None.** All 83 declared variables have at least one exact `var()` reference. Codex checked it against the file text, and a second pass over the same 28 files reached the same result. 46 of the 83 are read only inside `kit.css` and never appear on a screen or in the showcase, which is the healthy shape rather than a finding: a screen carries classes, a class carries variables.

---

## Changes of look, named

*Three, and only three, sources may change what the product looks like during this stage. Every one of them writes a line here, and the pixel comparison at step 8 checks each difference against these three lists. A difference with no line here is a defect and is fixed in `tokens.css` or in a component file, never on a screen.*

### Consolidated drift (step 3)

**Empty, and that is the finding rather than an omission.** The audit looked for a value written two ways for one role and found none: the coloured screens carry no inline value at all, and inside the kit no two near values sat on one job. What the type scale had was sixteen purposeful **names** over ten **values**, which is a drift of naming and not of value. It was consolidated at step 3 with nothing moving by a pixel, so it belongs in this file as a note and not in this table.

| Variable or class | Was | Now | Why |
|---|---|---|---|
| `--size-micro`, `--size-eyebrow` | two names, both `13px` | one step, `--text-13` | The purpose moved to the class that reads the step, which is where it belongs. Zero pixel change |
| `--size-h2`, `--size-ui` | two names, both `15px` | `--text-15` | Same |
| `--size-label`, `--size-nav` | two names, both `14px` | `--text-14` | Same. `--size-skel-line` kept its own name at 14px, because it is a height and not a type step |
| `--size-state-title`, `--size-brand`, `--size-card-title` | three names, all `20px` | `--text-20` | Same |
| `--size-metric` | `24px` | `--text-24` | Same. `--size-icon-lg` kept its name at 24px, because it is the icon grid |
| `--size-tag`, `--size-tabbar`, `--size-body`, `--size-badge-glyph`, `--size-display`, `--size-read`, `--size-hero`, `--size-section`, `--size-quote` | purposeful names | `--text-11`, `--text-12`, `--text-16`, `--text-26`, `--text-display`, `--text-read`, `--text-hero`, `--text-section`, `--text-quote` | Same |
| `--radius-control`, `--radius-card`, `--radius-pill`, `--radius-bar` | purposeful names | `--radius-md`, `--radius-lg`, `--radius-full`, `--radius-xs` | A radius scale, not four places named after their first use |

**Values that moved: none.** Sixteen type names became ten steps, four radius names became a scale, and every resulting pixel is the pixel that was there before.

### Review of the foundations (step 4)

**Two rows, and they are the only two places where this stage changed what the product looks like on purpose.** Both come from the third axis, surface, and both are contrast failures that stage 07 could not have seen, because stage 07 measured text against its background and neither of these is text.

| Variable or class | Was | Now | Why |
|---|---|---|---|
| `--color-line-strong`, now `--line-control` | `rgba(91, 97, 113, .28)`, resolving to `#D1D3D7`, measured **1.5:1** on the surface and **1.48:1** on the page | `rgba(91, 97, 113, .70)`, resolving to `#8C909C`, measured **3.19** and **3.08** | It is the entire visible boundary of five controls: outline button, input, radio option, chip, status pill. An outline button is a white fill on a white card, so nothing but that line says a control is there, and WCAG 1.4.11 asks 3:1 of a boundary that has to identify one. The rest state failed and the hover state passed, which is the shape of the defect in one sentence. The alert banner moves with it, because it read the same variable and a container whose job is to interrupt is not worse for a firmer edge |
| `.wf-tag.on` border | `transparent`. The selected chip was identified by its soft accent fill alone, and that fill measures **1.87** on the surface and **1.78** in the dark theme | `var(--line-action)`, measured **4.53** and **8.01** | A state that is signalled by one fill below 3:1 is not signalled. The fill stays, because it is a brand pixel with an origin, and the border carries the threshold. It also brings the chip into line with the status pill, which already took an action coloured border for its active state. No layout moves: the border was always 1px and only its colour changed |

**A third change was made in the dark theme and is deliberately not in this list.** `--line-hover` was set to `--slate-200` at step 5 and moved to `--slate-400` at step 7, because at 200 it met `--text-primary` and a hover border as bright as the body text is louder than the light theme's own answer. The pixel comparison runs in the light theme, where nothing moved, so this is not a source of a visible difference there. It is counted in the theme line of the proof page instead.

### Moving local overrides onto system classes (step 6)

**Four rows of the rename map, all executed, and three of them change no markup at all.** What they change is the address: an override that sat in a shared file moved into the css of the component that owns the composition, so that it stops being invisible.

| Variable or class | Was | Now | Why |
|---|---|---|---|
| `.wf-appbar-inner .wf-btn` | a context override bending the button's padding and height from inside the app bar | `.wf-btn.compact`, declared in `button.css` and worn by the markup | Declared at stage 07 step 6 and carried through unchanged. A smaller button nobody had named is an undeclared variant |
| `.wf-see .see-body .wf-pulse` | a context override in the shared kit | the same contextual selector, now declared in `pulse.css` as the embedded variant with the reason beside it | The markup belongs to the frozen grey original and a copy may not add a class to it, so the selector stays contextual. What changed is that it is now named and documented |
| `.wf-copy .wf-input` | a flex rule in the shared kit | the same rule in `copy-field.css` | The rule is about the composition, so it belongs to the component that composes |
| `.wf-media.tall` and `--size-media-tall` | declared and worn by nobody, in either corpus | deleted | A rule nobody wears is not a variant waiting for a use |

**One rule was removed that is not in the rename map, and it needs its own line.** `.wf-auth-proof .wf-ico` carried a width and a height that were **dead** in the flat kit: `.wf-ico.sm` had the same specificity and stood later in the file, so 40px won and 20px never applied. Under the level order of `index.css` the organism loads after the atom, the dead pair would have come alive, and the icon slot on the sign up panel would have silently shrunk. It was removed rather than kept, and the `background: none` beside it, which was live, stays. This is the clearest thing the split surfaced: a rule that worked only by accident of position is not a decision, and the flat file could not tell the two apart.

---

## The one measured failure, and why it did not show up at stage 07

`--color-line-strong` is `rgba(91, 97, 113, .28)`. Against a white surface it resolves to `#D1D3D7` and measures **1.5:1**; against the page it resolves to `#CBCED5` and measures **1.48:1**. It is the whole visual boundary of five controls: the outline button, the input, the radio option, the chip and the status pill. An outline button is a white fill on a white card, so nothing but that 1px line says a control is there. WCAG 1.4.11 asks for **3:1** on the boundary of a control that has to be identified, and 1.5 is half of it.

Stage 07 measured contrast and reported zero failures, and that report was honest for what it measured: **every text node against its resolved background**. A border is not a text node. The third axis of this stage, ink against fill against line, is what put the question to it, and the answer is a number.

It is not fixed at step 1. It changes what the product looks like, so it belongs to a named source, and the source it belongs to is **the review of the foundations at step 4**, where the user sees it on the colour page in both themes and decides. The measurements sit ready:

| Pair | Resolved value | Measured | Threshold | Result |
|---|---|---|---|---|
| `--color-line-strong` on surface | `#D1D3D7` | 1.5 | 3.0 (WCAG 1.4.11) | **fails** |
| `--color-line-strong` on page | `#CBCED5` | 1.48 | 3.0 | **fails** |
| the same border on hover, `--color-muted` | `#5B6171` | 6.19 | 3.0 | passes |
| `--color-line`, hairline between rows | `#E5E6E8` | 1.25 | none, decorative divider | not applicable |
| `--color-focus`, today `--color-action` on surface | `#346FEC` | 4.53 | 3.0 | passes, light theme |
| white on the action fill | `#FFFFFF` on `#346FEC` | 4.53 | 4.5 | passes |
| ink on the soft accent fill | `#1D1D1D` on `#A4BEF3` | 9.02 | 4.5 | passes |
| alert as ink on surface | `#B92928` | 6.16 | 4.5 | passes |
| white as ink on the alert fill | `#FFFFFF` on `#B92928` | 6.16 | 4.5 | passes |

The rest state of a control fails and its hover state passes. That is the shape of the defect in one sentence, and it is why the border, not the text, was the thing to measure.

---

## Three lists

### List 1: candidates for a semantic role

*Read out of the usage above, not taken from another design system. A role is here because the audit found it on the screens; a colour that stands in exactly one place is listed separately and is not a candidate.*

| Candidate role | Surface | Read from | Value today |
|---|---|---|---|
| page canvas | fill | `body` on all 24 screens | `--color-bg` |
| recessed surface | fill | `.wf-strip2`, `.wf-see .see-body`, `.wf-media`, `.wf-sys` | `--color-bg`, and it wants to leave |
| raised surface | fill | `.wf-card` on 12 screens, `.wf-appbar` on 24, `.wf-pulse`, `.wf-state`, `.wf-dialog` | `--color-surface` |
| control rest fill | fill | `.wf-btn`, `.wf-input`, `.wf-radio`, `.wf-tag` | `--color-surface`, and it wants to leave |
| primary text | ink | `body`, every heading, `.wf-brand`, `.wf-tab.on` | `--color-ink` |
| secondary text | ink | `.wf-micro`, `.wf-eyebrow`, `.wf-tab`, `.wf-settings`, `.wf-pulse .interp` and 25 more | `--color-muted` |
| action fill | fill | `.wf-btn.solid` on 20 of 24 screens | `--color-action` |
| action ink | ink | the label on the action fill | `--color-action-ink` |
| action line | line | `.wf-tab.on` underline, `.wf-input:focus` border, `.wf-radio:has(input:checked)` | `--color-action` |
| alert ink | ink | `.wf-alert .tag`, `.wf-badge.warn`, `.wf-err` | `--color-alert` |
| alert fill | fill | `.wf-alert::before`, the error state icon | `--color-alert` |
| alert line | line | `.wf-badge.warn` border | `--color-alert` |
| soft accent fill | fill | `.wf-tag.on`, `.wf-switch a.on`, `.wf-badge.ok`, `.wf-ico`, `.wf-spark .bar` | `--color-accent-soft` |
| hairline | line | `.wf-card`, `.wf-appbar`, `.wf-pulse`, `.wf-strip2` and 17 more | `--color-line` |
| control boundary | line | `.wf-btn`, `.wf-input`, `.wf-radio`, `.wf-tag`, `.wf-status` | `--color-line-strong`, and it measures 1.5 |
| skeleton fill | fill | `.wf-skel` on the two loading screens | `--color-skeleton` |
| overlay | fill | `.wf-overlay` behind a dialog | `--color-overlay` |

**Colours that stand in exactly one place.** Not candidates for a role, listed because the pack asks to see them: `--color-skeleton` (one selector, `.wf-skel`), `--color-overlay` (one selector, `.wf-overlay`), `--color-action-ink` (one selector plus its hover). All three stay as they are; a single use is not yet a role, and naming it one would be the empty-role trap.

**Roles that are deliberately not created.** `--text-action`: the action blue is never used as text anywhere in the product, and at 4.27 on the page it could not be. `--color-success`: decided at stage 06 as D-16, this product has no success colour, because principle 4 says a dip is called a dip and a success states the fact without celebrating. Neither role is invented to round out a set.

### List 2: the split into files, ordered by the level column

*The order below is the order of everything that follows: consolidation at step 2, the build rounds at step 5, the `@import` order in `index.css`, and the groups in the showcase registry. It is taken from `design/kit/docs/inventory.md`, which was read out of all 99 wireframes, and not from the 24 screens that happen to be in colour.*

**The level column exists.** The inventory carries it as three named sections with the counting rule written above them, so nothing is assigned by guess here.

**Level 1, atoms. 16 components.**

| # | Component | `design/system/components/` | Classes moving in |
|---|---|---|---|
| 1 | Button | `button.css` | `.wf-btn`, `.wf-btn.solid`, `.wf-btn.block`, `.wf-btn.compact`, `.wf-btns` |
| 2 | Input | `input.css` | `.wf-input`, `.wf-input:focus`, `.wf-input::placeholder` |
| 3 | Textarea | `textarea.css` | `.wf-textarea` |
| 4 | Select | `select.css` | `select.wf-input` and the chevron mask |
| 5 | Checkbox | `checkbox.css` | `input[type="checkbox"]`, the `accent-color` rule |
| 6 | Radio option | `radio.css` | `.wf-radio`, `.wf-radio:has(input:checked)`, `.wf-radio:focus-within`, `input[type="radio"]` |
| 7 | Chip | `chip.css` | `.wf-tag`, `.wf-tag.on` |
| 8 | Status pill | `status.css` | `.wf-status`, `.wf-status.on` |
| 9 | Outcome badge | `badge.css` | `.wf-badge`, `.wf-badge.ok`, `.wf-badge.warn`, and the media override of its size |
| 10 | Metric | `metric.css` | `.wf-metric`, `.wf-metric .n`, `.wf-metric .k` |
| 11 | Spark | `spark.css` | `.wf-spark`, `.bar`, `.bar.hi`, the seven height classes |
| 12 | Skeleton | `skeleton.css` | `.wf-skel`, `.tall`, `.act`, `.w44`, `.w50`, `.w70` |
| 13 | Icon slot | `icon-slot.css` | `.wf-ico`, `.wf-ico.sm`, `.wf-ico.round` and the per-position mask rules |
| 14 | Media slot | `media.css` | `.wf-media`, `.wf-media.shot`, `.wf-media.tall` |
| 15 | Error text | `error-text.css` | `.wf-err` |
| 16 | Document switch | `switch.css` | `.wf-switch`, `.wf-switch a`, `.wf-switch a.on`, `.wf-switch a:hover` |

**Level 2, molecules. 9 components.**

| # | Component | File | Classes moving in |
|---|---|---|---|
| 17 | Field | `field.css` | `.wf-field`, its label and hint rules |
| 18 | Copy field | `copy-field.css` | `.wf-copy` and the flex rule on the input inside it |
| 19 | Card | `card.css` | `.wf-card`, `.wf-card-h` |
| 20 | Privacy strip | `privacy-strip.css` | `.wf-strip2`, `.wf-strip2::before` |
| 21 | Alert banner | `alert.css` | `.wf-alert`, `.wf-alert::before`, `.wf-alert .tag`, the button rule inside it |
| 22 | Pulse card | `pulse.css` | `.wf-pulse`, `.read`, `.interp`, `.act-lbl`, and the embedded variant |
| 23 | Program card | `program-card.css` | `.wf-progcard`, `.cat`, `.title`, `.meta`, `.desc`, `.badges` |
| 24 | List row | `list-row.css` | `.wf-list-row`, `.wf-rowlink`, `.who`, `.sub` |
| 25 | Claims list | `claims.css` | `.wf-claims`, `.c-lead`, `.c-body` |

**Level 3, organisms. 12 components.**

| # | Component | File | Classes moving in |
|---|---|---|---|
| 26 | List | `list.css` | `.wf-list` |
| 27 | State block | `state.css` | `.wf-state`, `.n`, and the error-variant mark |
| 28 | System block | `system-block.css` | `.wf-sys`, `.wf-sys-head`, `.wf-sys-body` |
| 29 | Proof disclosure | `disclosure.css` | `.wf-see`, `> summary`, `.see-body` and the embedded pulse rule |
| 30 | Dialog | `dialog.css` | `.wf-overlay`, `.wf-dialog` |
| 31 | Hero | `hero.css` | `.wf-hero`, `.wf-hero-grid` |
| 32 | Content grid | `content-grid.css` | `.wf-grid` |
| 33 | Split auth | `auth.css` | `.wf-auth-grid`, `.wf-auth-brand`, `.wf-auth-proof` |
| 34 | App bar | `appbar.css` | `.wf-appbar`, `.wf-appbar-inner`, `.wf-brand`, `.wf-tabs`, `.wf-tab`, `.wf-tab.on`, `.wf-settings`, `.wf-step`, `.wf-navlink`, `.wf-navlinks` |
| 35 | Bottom tab bar | `tabbar.css` | `.wf-tabbar`, its links and the current one |
| 36 | App footer | `app-footer.css` | `.wf-appfoot`, `.wf-appfoot-inner` |
| 37 | Public footer | `public-footer.css` | `.wf-pubfoot`, `.wf-pubfoot-inner`, `.wf-foot-cols`, `.wf-foot-col`, `.trust` |

**Not a component, going to `design/system/base.css`.** The reset, `html` and `body`, `img`, the type ramp (`.wf-lead`, `.wf-eyebrow`, `.wf-micro`, `.wf-body`, headings), the page frame (`.wf-screen`, `.wf-content`, `.wf-narrow`, `.wf-mkt`) and the content link rule.

**Layout helpers, and the decision they need at step 2.** `.wf-grid3`, `.wf-grid4`, `.wf-tags`, `.wf-cta-final`, `.pg-facets`, `.pg-grid`, `.wf-contact`. The inventory already says they arrange things and carry no identity. They cannot go in `base.css` untouched, because two of them are page-specific by name. Step 2 decides: one `layout.css` in the system, or each one folded into the component it arranges.

**Classes in `kit.css` that fall into no file, and the decision they need.** Fourteen of them, and they split into two kinds:

- **Prototype chrome, and it must not enter the system at all:** `.dz-strip`, `.dz-id`, `.dz-group`, `.dz-out`. This is the design-only navigator panel that the coloured screens carry outside `.wf-screen`. It is not the product; it belongs in a stand stylesheet, and step 3 moves it to `design/kit/_page.css`. Leaving it in `index.css` would ship the prototype's own furniture to anyone who took the package.
- **One-offs that nevertheless have rules:** `.wf-avatar`, `.wf-quote`, `.wf-quote-by`, `.wf-quote-t`, `.wf-logos`, `.wf-logo`, `.wf-pill`, `.wf-saved`, `.wf-cannot`. Every one appears on exactly one screen and the stage-07 inventory correctly put it in "One-off", yet each one has a rule in the kit, because the sample needed it to look finished. This is not a contradiction to fix silently: it is the question of whether a one-off with a rule is part of the system. Step 2 answers it, and the inventory says three of the nine (`.wf-cannot`, `.wf-saved`, `.wf-pending`) carry the trust argument and move into the kit the moment a second screen picks them up.

**One row of the inventory that does not survive verification.** The atoms table lists **Switch `.wf-switch`** under the form-control exception, with "on, off" as its states. The product has no toggle switch. `.wf-switch` is the **document switch** on `legal.html`: a row of pill links that navigates between the three legal documents, with `.on` marking the current one. It is a real interactive component and it stays in the kit, but it is a segmented navigation, not a form primitive, and the exception that let it in with a single appearance does not apply to it. It is renamed to Document switch in the list above and the inventory row is corrected at step 2 with the reason recorded, not edited away.

### List 3: the split onto the foundation pages

*After this stage no token and no class may be left that is visible on no page. The four foundation pages are written at step 4 and reviewed before a single component is built.*

| Page | What it shows |
|---|---|
| `design/kit/color.html` | the 12 primitive colours with their plate origin, the semantic roles grouped by surface (ink, fill, line), every role in both themes side by side, and the contrast table with the threshold named on each row: 4.5 for ink, 3.0 for large ink, 3.0 for fill and line |
| `design/kit/typography.html` | the two font stacks with their stage-06 origin, the type ramp after the step-2 decision on the eleven steps, the weights actually used (400, 500, 600), line height 1.55, and the `tnum` setting that keeps a score from shifting as it changes |
| `design/kit/geometry.html` | the seven spacing steps on the 4px rhythm, the five radii, the layout widths (content 1140, narrow 480, auth 960, dialog 440), the touch target at 44, and the control heights |
| `design/kit/icons.html` | the nine Solar glyphs at 24, 20 and 16, the mask mechanism that makes a glyph take its context ink, and the stroke and grid recorded in `DESIGN-artifacts.md` |

**Material that fits none of the four.** Two things, and both get a home rather than a footnote.

- **Shadow.** There is exactly one in the product, on the dialog panel, and it is written as a literal. It goes on `geometry.html` beside the radii, because a shadow is a shape decision here and not a colour one, and it becomes a primitive at step 3 so the dialog stops holding the only copy of it.
- **The nine icon masks and the four state-carrying pseudo-elements** (`.wf-strip2::before`, `.wf-alert::before`, `.wf-cannot::before`, the error mark on `.wf-state`). They belong on `icons.html`, because they are the same mechanism seen from the other end: a glyph painted by ink through a mask.

---

## Method, and what each instrument did

**Codex, read-only, from the shell.** `codex exec --sandbox read-only` with stdin closed, reading the local working folder. It was given the five lists and no table of mine, so its pass is independent by construction. It read `AGENTS.md` and `CLAUDE.md` first. What it owns here is the count: every occurrence of every variable across the whole coloured product is arithmetic, not judgement, and it does it without knowing what the author of the kit remembers about their own variables.

**Claude, in the file and in the browser.** The type-scale drift, the value collisions, the role overload, the surface axis and the contrast measurements. These need either a resolved value (an alpha composited over its actual background) or a judgement about whether two places can diverge, and neither survives being read off the source.

**Where the two disagreed.** One class, ten rows: the literals of section A.4. Codex reported them as values bypassing a variable; nine are withdrawn at verification, because the file names them as deliberate literals and because a spacing token and a line width are two different roles that share a number. The disagreement is not put to a vote and it is not deleted: the row that survives it is the real one, which is that no primitive for a line width exists yet, and step 3 creates one.

**Where the two agreed exactly.** 83 variables, 0 orphans, 53 origins beside the declaration, and one single value from nowhere, `--size-logo-h`. Two instruments reaching the same four numbers from different directions is the strongest line in this file.
