---
name: Brio
description: Employee wellbeing for a small company with no HR team, where the privacy boundary is the product.
colors:
  # PRIMITIVE, light ramp: pixels of brand plate A, plus the alert swatch of plate D
  white: "#FFFFFF"
  mist-50: "#F7F8FC"
  ink-900: "#1D1D1D"
  slate-600: "#5B6171"
  blue-600: "#346FEC"
  blue-300: "#A4BEF3"
  red-700: "#B92928"
  # PRIMITIVE, dark ramp: added at stage 08, same hue at another lightness
  slate-950: "#101218"
  slate-900: "#191C24"
  slate-850: "#21242D"
  slate-400: "#A0A7B8"
  slate-200: "#E4E6EC"
  blue-400: "#8FB2F7"
  blue-900: "#32456B"
  red-600: "#C93B39"
  red-300: "#F5908E"
  # PRIMITIVE, alpha steps of one slate
  slate-a13: "rgba(91, 97, 113, .13)"
  slate-a16: "rgba(91, 97, 113, .16)"
  slate-a70: "rgba(91, 97, 113, .70)"
  ink-a45: "rgba(29, 29, 29, .45)"
  dslate-a14: "rgba(160, 167, 184, .14)"
  dslate-a20: "rgba(160, 167, 184, .20)"
  dslate-a55: "rgba(160, 167, 184, .55)"
  black-a60: "rgba(0, 0, 0, .60)"
typography:
  display:
    fontFamily: "Inter Tight, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(26px, 3.4vw, 34px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  read:
    fontFamily: "Inter Tight, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(30px, 4vw, 40px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  metric:
    fontFamily: "Inter Tight, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  title:
    fontFamily: "Inter Tight, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  ui:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
  label:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.06em"
  # documentation chrome only, never the product: the stand sets code and markup samples
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
rounded:
  xs: "3px"
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "999px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "20px"
  s6: "28px"
  s7: "40px"
components:
  button-primary:
    backgroundColor: "{colors.blue-600}"
    textColor: "{colors.white}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
  button-plain:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-900}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.lg}"
    padding: "20px"
  pulse-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-900}"
    typography: "{typography.read}"
    rounded: "{rounded.lg}"
    padding: "28px"
  privacy-strip:
    backgroundColor: "{colors.mist-50}"
    textColor: "{colors.ink-900}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "12px 16px 12px 42px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-900}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "12px 12px"
  badge-outcome:
    backgroundColor: "{colors.blue-300}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.full}"
    size: "56px"
  tag-alert:
    backgroundColor: "{colors.white}"
    textColor: "{colors.red-700}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
---

# Design System: Brio

*Written at stage 07 from the real code of the coloured screens in `design/`, and rewritten at stage 08 when the flat kit became a system.*

*Origin of the values: the brand recorded at stage 06 in `DESIGN-artifacts.md`. Brand decisions are not rewritten here, they are unfolded into the values the product actually runs on. Every token below carries its origin, carried across from `DESIGN-artifacts.md` as it stands, and now living in the comment beside its semantic role in `design/system/tokens.css`.*

## Overview

Brio is operated by somebody who was handed "people stuff" without being trained for it, and answered by employees who have to believe an anonymity promise made by their own employer. So the surface has one job before it has any other: **look like a privacy product rather than a wellness brand**. Light paper, one blue that means "you can act on this", hairline structure, real photographs of real small teams, and no decoration that has to be explained.

The system is deliberately quiet. There is no gradient, no shadow, no second accent, and no success colour. A dip is called a dip and a confirmation states a fact. If a screen looks exciting, something has gone wrong with it.

**Creative north star: the calm instrument.** A thing that reports honestly, in plain words, and does not perform. Anti-references, recorded and still binding: the category reflex of cream and sage with rounded blobs; playful illustration with emoji and motivational tone; and corporate stock-SaaS polish.

## Colors

One accent, and it means one thing. `#346FEC` marks what can be acted on and nothing else. Everything that is not an action is ink, muted, or paper.

**Since stage 08 the colour layer has two levels.** A primitive says what the value is and where it came from; a role says why this colour is here and which surface it paints. A component reads only a role. The full file is `design/system/tokens.css` and the live page is `design/kit/color.html`.

### Primitive, light ramp

| Token | Value | Origin |
|---|---|---|
| `--white` | `#FFFFFF` | pixel of plate A, swatch 2 |
| `--mist-50` | `#F7F8FC` | pixel of plate A, swatch 1 |
| `--ink-900` | `#1D1D1D` | pixel of plate A, swatch 3 |
| `--slate-600` | `#5B6171` | pixel of plate A, swatch 6 |
| `--blue-600` | `#346FEC` | pixel of plate A, swatch 5 |
| `--blue-300` | `#A4BEF3` | pixel of plate A, swatch 4 |
| `--red-700` | `#B92928` | pixel of plate D, alert swatch, fixed at stage 07 |

### Primitive, dark ramp

*Added at stage 08 step 3. Same hue as `--slate-600` at another lightness, so the dark theme is the same material and not a second palette. Nothing here carries a role: the dark theme redefines the roles, never the primitives.*

| Token | Value | Origin |
|---|---|---|
| `--slate-950` | `#101218` | derived from `--slate-600`, the dark page |
| `--slate-900` | `#191C24` | derived from `--slate-600`, the dark card |
| `--slate-850` | `#21242D` | derived from `--slate-600`, the dark recessed surface |
| `--slate-400` | `#A0A7B8` | derived from `--slate-600`, dark secondary text |
| `--slate-200` | `#E4E6EC` | derived from `--slate-600`, dark primary text |
| `--blue-400` | `#8FB2F7` | derived from `--blue-600`, the lighter step the dark theme needs |
| `--blue-900` | `#32456B` | derived from `--blue-600`, the soft accent plate on dark |
| `--red-600` | `#C93B39` | derived from `--red-700`, the alert fill on dark |
| `--red-300` | `#F5908E` | derived from `--red-700`, alert ink and line on dark |

### Primitive, alpha steps

| Token | Value | Origin |
|---|---|---|
| `--slate-a13` | `rgba(91, 97, 113, .13)` | derived from `--slate-600`, loading only |
| `--slate-a16` | `rgba(91, 97, 113, .16)` | derived from `--slate-600`, hairline |
| `--slate-a70` | `rgba(91, 97, 113, .70)` | derived from `--slate-600`, control boundary. Raised from `.28` at stage 08 step 4 |
| `--ink-a45` | `rgba(29, 29, 29, .45)` | derived from `--ink-900`, the dialog ground |
| `--dslate-a14` `--dslate-a20` `--dslate-a55` | `rgba(160, 167, 184, …)` | derived from `--slate-400`, the same three jobs on dark |
| `--black-a60` | `rgba(0, 0, 0, .60)` | the dialog ground on dark, where an ink alpha would be invisible |

### Semantic roles, both themes, every contrast measured

*A role declares the surface it paints, and the threshold follows from it: ink 4.5:1, a glyph 3:1 as a graphical object under WCAG 1.4.11, fill and line 3:1. The four state roles are here too, because a state without a pair in the second theme does not exist.*

| Role | Paints | Light | Dark | Measured against | Light ratio | Dark ratio | Threshold |
|---|---|---|---|---|---|---|---|
| `--text-primary` | ink | `#1D1D1D` | `#E4E6EC` | `--bg-surface` | 16.86 | 13.65 | 4.5 |
| `--text-primary` | ink | `#1D1D1D` | `#E4E6EC` | `--bg-page` | 15.88 | 15.0 | 4.5 |
| `--text-secondary` | ink | `#5B6171` | `#A0A7B8` | `--bg-surface` | 6.19 | 7.07 | 4.5 |
| `--text-secondary` | ink | `#5B6171` | `#A0A7B8` | `--bg-page` | 5.83 | 7.77 | 4.5 |
| `--text-on-action` | ink | `#FFFFFF` | `#101218` | `--bg-action` | 4.53 | 8.81 | 4.5 |
| `--text-alert` | ink | `#B92928` | `#F5908E` | `--bg-surface` | 6.16 | 7.51 | 4.5 |
| `--text-hover` | ink | `#1D1D1D` | `#E4E6EC` | `--bg-surface` | 16.86 | 13.65 | 4.5 |
| `--glyph-strong` | glyph | `#1D1D1D` | `#E4E6EC` | `--bg-accent-soft` | 9.02 | 7.65 | 3.0 |
| `--glyph-action` | glyph | `#346FEC` | `#8FB2F7` | `--bg-page` | 4.27 | 8.81 | 3.0 |
| `--glyph-alert` | glyph | `#B92928` | `#F5908E` | `--bg-surface` | 6.16 | 7.51 | 3.0 |
| `--bg-surface` | fill | `#FFFFFF` | `#191C24` | `--bg-page` | 1.06 | 1.1 | 3.0 |
| `--bg-recessed` | fill | `#F7F8FC` | `#21242D` | `--bg-surface` | 1.06 | 1.1 | 3.0 |
| `--bg-control` | fill | `#FFFFFF` | `#191C24` | `--bg-surface` | 1.0 | 1.0 | 3.0 |
| `--bg-action` | fill | `#346FEC` | `#8FB2F7` | `--bg-surface` | 4.53 | 8.01 | 3.0 |
| `--bg-accent-soft` | fill | `#A4BEF3` | `#32456B` | `--bg-surface` | 1.87 | 1.78 | 3.0 |
| `--bg-skeleton` | fill | `rgba(91, 97, 113, .13)` | `rgba(160, 167, 184, .14)` | `--bg-surface` | 1.2 | 1.28 | 3.0 |
| `--bg-overlay` | fill | `rgba(29, 29, 29, .45)` | `rgba(0, 0, 0, .60)` | `--bg-page` | 2.81 | 1.08 | 3.0 |
| `--line-hairline` | line | `rgba(91, 97, 113, .16)` | `rgba(160, 167, 184, .20)` | `--bg-surface` | 1.25 | 1.45 | 3.0 |
| `--line-control` | line | `rgba(91, 97, 113, .70)` | `rgba(160, 167, 184, .55)` | `--bg-surface` | 3.19 | 3.06 | 3.0 |
| `--line-control` | line | `rgba(91, 97, 113, .70)` | `rgba(160, 167, 184, .55)` | `--bg-page` | 3.08 | 3.16 | 3.0 |
| `--line-action` | line | `#346FEC` | `#8FB2F7` | `--bg-surface` | 4.53 | 8.01 | 3.0 |
| `--line-alert` | line | `#B92928` | `#F5908E` | `--bg-surface` | 6.16 | 7.51 | 3.0 |
| `--line-hover` | line | `#5B6171` | `#A0A7B8` | `--bg-surface` | 6.19 | 7.07 | 3.0 |
| `--color-focus` | line | `#346FEC` | `#8FB2F7` | `--bg-surface` | 4.53 | 8.01 | 3.0 |
| `--color-focus` | line | `#346FEC` | `#8FB2F7` | `--bg-page` | 4.27 | 8.81 | 3.0 |
| `--opacity-disabled` | opacity | `.45` | `.5` | not applicable | | | none |

**Three rows sit below their threshold on purpose, and each has a rule attached.** `--bg-accent-soft` at 1.87 and 1.78 never identifies a state on its own: the selected chip is identified by its action coloured border at 4.53 and the outcome badge by its glyph at 9.02. `--line-hairline` at 1.25 separates without enclosing and no control depends on it. The two surface separations, card against page, are not contrast requirements at all and are tabulated so the number is visible rather than assumed.

**One role is measured as a glyph and would fail as text.** `--glyph-action` is the shield on the privacy strip, on 42 of 99 screens, and it measures 4.27 against the page. It passes at the 3:1 of a graphical object and would fail at the 4.5 of text, which is exactly why the action blue is never set as a label anywhere in Brio.

**There is no success colour, on purpose.** Origin: voice principle P3, honest signals and never flattering ones. A confirmation carries the soft accent and an ink glyph; green would be the product congratulating a person for answering one question about a hard week. Recorded as decision D-16.

**There is no hover fill role.** This product has no hover fill anywhere: its hover language is a link darkening its ink and a bordered control darkening its line. A `--bg-hover` that nothing reads would be an empty role.

## Typography

Two real families, chosen at stage 06 against the character of plate A and approved by the designer: **Inter Tight** for display, **Inter** for body. Origin of the pair: decision of the user. Figures are tabular everywhere (`font-feature-settings: "tnum"`), because a pulse score that shifts sideways as it changes undercuts the one thing it is there to do.

**At stage 08 the sixteen purposeful names became ten steps of one scale.** Not one value moved: `--size-micro` and `--size-eyebrow` were both 13px, `--size-h2` and `--size-ui` were both 15px, three names shared 20px. The purpose now lives in the class that reads the step, which is where it belongs, and the scale can be read as a scale.

| Token | Value | Where it is read | Origin |
|---|---|---|---|
| `--text-11` | 11px | the alert tag, the chip | technical decision |
| `--text-12` | 12px | the mobile tab bar, an app footer link | technical decision |
| `--text-13` | 13px | micro copy, the eyebrow, a row link | technical decision |
| `--text-14` | 14px | a form label, an app bar tab, a public footer link | technical decision |
| `--text-15` | 15px | running UI text, a button label, a card heading | technical decision |
| `--text-16` | 16px | body text on a marketing page | technical decision |
| `--text-20` | 20px | a state block title, the wordmark, a program card title | pixel of plate A, identity zone, for the wordmark |
| `--text-22` | 22px | the badge glyph under 520px | technical decision |
| `--text-24` | 24px | participation, the one number on a card | attribute A4 |
| `--text-26` | 26px | the glyph inside an outcome badge | technical decision |
| `--text-display` | clamp 26 to 34 | the page h1 | attribute A3, restraint: the heading states, it does not shout |
| `--text-read` | clamp 30 to 40 | the pulse read, the word that answers the question | attribute A4, the read is the thing being read |
| `--text-hero` | clamp 30 to 46 | the marketing display step, never inside the product | technical decision |
| `--text-section` | clamp 20 to 26 | a marketing section heading | technical decision |
| `--text-quote` | clamp 18 to 22 | the one testimonial | technical decision |
| `--text-code` | clamp 56 to 96 | the error code on 404 and 500 | carried from the wireframe at stage 08 |

**Weight and rhythm are tokens too.** `--weight-regular` 400, `--weight-medium` 500, `--weight-strong` 600, `--weight-bold` 700, and five leading steps: `--leading-tight` 1, `--leading-heading` 1.12, `--leading-quote` 1.45, `--leading-lead` 1.5, `--leading-body` 1.55. The link carries `--underline-offset` 3px and `--underline-thickness` 2px.

**One weight was not carried across.** The error code is set at 800 on the two grey screens and joins the coloured scale at 700 instead, rather than reintroducing a weight the system does not have. Neither screen exists in colour, so nothing that had a "before" changed.

## Layout

- **Content column** `--size-content: 1140px`, centred, with the app bar and the footer rules running full bleed so the page reads as one surface rather than a stack of boxes. Origin: technical decision.
- **Focused column** `--size-narrow: 480px` for the employee check-in: one question, one action, under thirty seconds. Origin: layout direction 01, kept for the check-in when direction 02 was chosen for the operator (D-15).
- **The operator layout is two columns**, `1.6fr` main and `1fr` rail, collapsing to one column at 720px. Origin: layout direction 02, the working desk (D-15). The pulse, the participation, the privacy line and the next program are on one screen without scrolling.
- **Spacing is a 4px scale**, `--space-1` to `--space-7` (4, 8, 12, 16, 20, 28, 40). Origin: attribute A3, restraint carried by rhythm rather than by decoration. Three named insets are derived from the icon size rather than from the scale: `--space-icon-inset` 42, `--space-icon-inset-sm` 26, `--space-icon-stack` 34.
- **Touch targets** are at least `--size-touch: 44px`. Origin: technical decision, WCAG 2.5.5, found by audit at stage 06 step 8 when controls stood at 41.
- **Mobile chrome:** the shared roadmap is a fixed 52px bar under 900px and a 220px left rail above it. That is portfolio chrome, not product chrome.

## Elevation & Depth

**Flat, on purpose.** There is not one shadow in the system. Depth comes from paper (`#F7F8FC`) against surface (`#FFFFFF`) and from hairline borders, which is the Apple restraint recorded in `references.md`: elevation through tonal contrast rather than through floating. Origin: attribute A3.

A consequence worth stating, and stage 08 tested it: a card is told apart from the page by one hairline and one step of tone. If a component ever needs a shadow to be legible, the composition is wrong before the shadow is.

**The dark theme is where that would have failed and did not.** A system that separated a card from the page with a shadow would have lost the separation the moment the ground went dark, because a shadow on a dark ground is invisible. Here the separation is tonal and it survived: card against page measures 1.06 in the light theme and 1.10 in the dark, and the hairline goes from 1.25 to 1.45. Both moved slightly in the right direction rather than disappearing.

## Shapes

**At stage 08 the four purposeful radius names became a scale**, for the same reason as the type steps: a radius named after its first use invites the second use to invent a name. No value moved.

| Token | Value | Where it is read | Origin |
|---|---|---|---|
| `--radius-md` | 8px | buttons, inputs, tabs, the privacy strip | plate A, UI component zone, measured on the shape |
| `--radius-lg` | 16px | cards, panels, images | plate A, UI component zone |
| `--radius-full` | 999px | badges and pills only, never a button | attribute A3: a pill button would start shouting |
| `--radius-sm` | 4px | the alert tag, skeleton lines | technical decision |
| `--radius-xs` | 3px | one bar of the trend spark | technical decision, the smallest shape in the language |

**Line width is two primitives**, named at stage 08 because the focus ring stopped being a literal there: `--line-1` 1px for every border in the product, `--line-2` 2px for the focus ring and the current tab underline.

**Icons** are Solar linear, one weight, stroke 1.5 on the 24px grid, inlined as SVG or painted from a CSS mask so the markup of a coloured copy stays identical to its grey original. No icon font, no runtime CDN. Origin: icon language in `DESIGN-artifacts.md`.

## Components

Each entry is what the code actually does today on `design/dashboard.html`, its six states, and the eight screens of the employee check-in.

- **Action button.** Solid `--color-action` with a white label, 8px radius, 44px minimum height, one per screen. Everything else is the plain control: white surface, `--color-line-strong` border, ink label, same geometry. Focus is a 2px ring in the action colour, offset 2px; the outline is never removed. Origin: attribute A3 (one accent, only for action) and the wireframe contract (exactly one main action per screen).
- **Card.** White, 16px radius, one hairline, 20px padding, no shadow. Origin: attribute A1 and A3.
- **Pulse card.** The aha of the product: the read at `--size-read`, the plain-language interpretation under it, a hairline, then the suggested next step. A number never appears without its interpretation and never as a lone metric tile. Origin: attribute A4, voice P1 and P4.
- **Privacy strip.** Paper inside a white card, 8px radius, a shield drawn from a CSS mask in the action colour, text at `--size-ui`. It carries the mechanism sentence and it repeats on almost every screen. Origin: attribute A2, voice P2.
- **Alert banner.** White, hairline, the warning icon and the tag in `--color-alert`, the sentence in ink. It wraps under 520px rather than pushing the page sideways. Origin: voice P3, a dip is stated and never dramatised.
- **State block.** A centred title, a muted sentence under it, and the action. The error variant carries the warning icon above the title, selected through the `aria-label` the wireframe already had. Origin: attribute A1.
- **Outcome badge.** 56px circle in the soft accent with an ink glyph, 44px on mobile. There is no green here. Origin: voice P3, decision D-16.
- **Form field.** Label at `--size-label` in ink, input with an 8px radius and a `--color-line-strong` border, hint in muted under it. The focus ring is the action colour. The radio option is a full-width row; the chosen one takes the action colour on its border. Origin: attribute A1 and the wireframe structure.
- **Trend spark.** Five bars, `--size-bar` wide, soft accent with the last two in the action colour, 56px tall. It shows the shape of five cycles and no axis, because the interpretation is written beside it in words. Origin: attribute A4.
- **Claims list and the proof disclosure.** The five mechanism claims as rows in one card, and a `details` block that opens the actual owner view. It carries a chevron in the action colour, because proof that nobody opens is a promise again. Origin: attribute A2.

## Do's and Don'ts

**Do**

- Put one action per screen, and make it the only blue thing.
- Write the number and its meaning together, always.
- Show the privacy mechanism on the surface where data is asked for, in the specific sentence: aggregate only, minimum of five, no live count.
- Use a photograph of people working, in daylight, not performing for the camera.
- Reach for a hairline and a tone step before reaching for any other separator.

**Don't**

- Do not add a second accent, a gradient, or a shadow. If something is not legible without them, fix the composition.
- Do not celebrate. No green success state, no exclamation, no congratulation for answering.
- Do not put accent text on the page background: it measures 4.27 and fails AA.
- Do not use a pill radius on a button, and do not use the soft accent for anything that carries meaning on its own.
- Do not style a screen. A screen is assembled from the kit; a value written on the page is a second copy of that value, and drift starts there.

## Documentation chrome is not the product

The stands, `design/overview.html`, `design/kit/kit.html`, `design/concept/concept.html` and `design/concept/directions.html`, are project artefacts rather than product surfaces. They carry their own page chrome, prefixed `o-`, `k-` and page-local, and it uses a slightly larger heading scale than the product ramp above: page titles at `clamp(30px, 4vw, 42px)`, section titles at `clamp(20px, 3vw, 30px)`, and a monospace family for code. That is deliberate: a document that reads like the product it documents is harder to read as a document.

The mechanical detector flags these as sizes off the ramp, and it is right about the fact and wrong about the verdict. They are recorded here so the flag is a known one rather than a new one, and so nobody snaps them into the product scale by reflex. **Product screens carry none of this**: every value on a screen in `design/` comes from `design/system/index.css`.

**Two further pieces of documentation chrome, declared here so the detector flag is a known one.** The stand sets code samples and markup blocks in `ui-monospace, SFMono-Regular, Menlo, monospace`, which is not a product family and never appears on a screen. And the stand's own layout carries plain lengths of its own (a 244px panel, a 900px reading column, measures in `ch`, tile heights). That is deliberate: a stand that reached for a product token it does not mean would start documenting a system it is not part of. The boundary is written into `design/kit/_page.css` at the top of the file.

---

## Tokens still to be checked

**Closed at stage 08.** The list stood as: `--radius-sm`, `--size-h2`, `--size-body`, `--size-ui`, `--size-micro`, `--size-eyebrow`, and the geometry group `--size-skel-line`, `--size-skel-block`, `--size-skel-act`, `--size-control-h`. Every one was audited: the type names folded into the scale, the geometry kept its own names because a skeleton height is not a type step, and all 83 variables were checked for an origin. **One value turned out to have none anywhere**, `--size-logo-h: 34px`, found independently by both instruments; its origin was recovered as the pair of `--size-logo-w` and written down.

Nothing replaces this list. What stage 08 leaves open is in `design/kit/docs/backlog.md`, and it is a different kind of thing: five classes that stand on two or more still grey screens and that the stage 07 inventory never recorded, plus breakpoints and motion, which belong to stages 10 and 11.

## State tokens

*Born at stage 08 step 5 with the button, the first component that wears them, and born paired.*

| Token | Light | Dark | What it is |
|---|---|---|---|
| `--text-hover` | `--ink-900` | `--slate-200` | a link under the pointer |
| `--line-hover` | `--slate-600` | `--slate-400` | the border of a bordered control under the pointer |
| `--color-focus` | `--blue-600` | `--blue-400` | the keyboard ring, `focus-visible` only, measured at 3:1 in both themes |
| `--opacity-disabled` | `.45` | `.5` | a control that cannot be pressed, muted rather than repainted |

**A state does not move the layout.** Hover and active change fill, ink and border colour. They do not shift the element, do not change its size, and do not add a border where there was none.

## Sources

- `design/concept/docs/concept.md` - the attributes A1 to A5 and the designer's taste, the only place a visual decision may be traced to.
- `design/concept/docs/references.md` - Signal as the base, restraint from Apple, product-as-proof from 1Password, mechanism content from Culture Amp and Oura.
- `DESIGN-artifacts.md` - the stage 06 draft: identity, palette sampled from pixels, typography, icon language, UI tone. It stays as the first source and is not edited into a second product document.
- `design/system/tokens.css` - where the values physically live. It arrived from `design/_theme.css` at stage 06 and `design/kit/kit.css` at stage 07, by file moves, and was split into two levels at stage 08. That file no longer exists.
- `design/kit/docs/architecture.md` - the rules of the system: the two ladders, the two folders, how the theme and the states work, and how to add a component.
- `design/kit/docs/tokens-audit.md` - the audit the split was made from, and the three lists of named changes.
- `voice/docs/voice.md` - the text on any surface is governed there, not here.
