---
name: Brio
description: Employee wellbeing for a small company with no HR team, where the privacy boundary is the product.
colors:
  page: "#F7F8FC"
  surface: "#FFFFFF"
  ink: "#1D1D1D"
  action: "#346FEC"
  action-ink: "#FFFFFF"
  accent-soft: "#A4BEF3"
  muted: "#5B6171"
  alert: "#B92928"
  line: "rgba(91, 97, 113, .16)"
  line-strong: "rgba(91, 97, 113, .28)"
  skeleton: "rgba(91, 97, 113, .13)"
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
rounded:
  bar: "3px"
  sm: "4px"
  control: "8px"
  card: "16px"
  pill: "999px"
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
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "44px"
  button-plain:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "44px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px"
  pulse-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.read}"
    rounded: "{rounded.card}"
    padding: "28px"
  privacy-strip:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.control}"
    padding: "12px 16px 12px 42px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.control}"
    padding: "12px 12px"
  badge-outcome:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "56px"
  tag-alert:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.alert}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
---

# Design System: Brio

*Written at stage 07 from the real code of the coloured screens in `design/`, their shared `design/_theme.css`, and the brand recorded at stage 06 in `DESIGN-artifacts.md`. Brand decisions are not rewritten here, they are unfolded into the values the product actually runs on. Every token below carries its origin, and the origins are carried across from `DESIGN-artifacts.md` as they stand: stage 08 moves them into the comment of the semantic role.*

## Overview

Brio is operated by somebody who was handed "people stuff" without being trained for it, and answered by employees who have to believe an anonymity promise made by their own employer. So the surface has one job before it has any other: **look like a privacy product rather than a wellness brand**. Light paper, one blue that means "you can act on this", hairline structure, real photographs of real small teams, and no decoration that has to be explained.

The system is deliberately quiet. There is no gradient, no shadow, no second accent, and no success colour. A dip is called a dip and a confirmation states a fact. If a screen looks exciting, something has gone wrong with it.

**Creative north star: the calm instrument.** A thing that reports honestly, in plain words, and does not perform. Anti-references, recorded and still binding: the category reflex of cream and sage with rounded blobs; playful illustration with emoji and motivational tone; and corporate stock-SaaS polish.

## Colors

One accent, and it means one thing. `#346FEC` marks what can be acted on and nothing else. Everything that is not an action is ink, muted, or paper.

| Token | Value | Role | Origin |
|---|---|---|---|
| `--color-bg` | `#F7F8FC` | the page canvas | pixel of plate A, palette swatch 1 |
| `--color-surface` | `#FFFFFF` | cards, panels, bars | pixel of plate A, swatch 2 |
| `--color-ink` | `#1D1D1D` | text and structure | pixel of plate A, swatch 3 |
| `--color-accent-soft` | `#A4BEF3` | decorative fills: badges, spark bars, icon fills | pixel of plate A, swatch 4 |
| `--color-action` | `#346FEC` | the only interactive colour | pixel of plate A, swatch 5 |
| `--color-action-ink` | `#FFFFFF` | the label on an action | technical decision, measured at 4.53 on the action colour |
| `--color-muted` | `#5B6171` | secondary text and borders | pixel of plate A, swatch 6 |
| `--color-alert` | `#B92928` | error and threshold alert | pixel of plate D, alert swatch, carried across as a candidate at stage 06 and **fixed here** |
| `--color-line` | `rgba(91,97,113,.16)` | hairline between rows and around cards | derived from `--color-muted` |
| `--color-line-strong` | `rgba(91,97,113,.28)` | the border of a control | derived from `--color-muted` |
| `--color-skeleton` | `rgba(91,97,113,.13)` | loading only | derived from `--color-muted` |

**There is no success colour, on purpose.** Origin: voice principle P3, honest signals and never flattering ones. A confirmation carries the soft accent and an ink glyph; green would be the product congratulating a person for answering one question about a hard week. Recorded as decision D-16.

**Measured contrast**, not assumed. Ink on surface 16.86, ink on page 15.88, muted on surface 6.19, muted on page 5.83, white on action 4.53, ink on soft accent 9.02, alert on surface 6.16. The one failure is named and has a rule attached: the action colour on the page background measures 4.27, so accent text and links sit on white, or they are not accent. On the page background a link is ink with an underline.

## Typography

Two real families, chosen at stage 06 against the character of plate A and approved by the designer: **Inter Tight** for display, **Inter** for body. Origin of the pair: decision of the user. Figures are tabular everywhere (`font-feature-settings: "tnum"`), because a pulse score that shifts sideways as it changes undercuts the one thing it is there to do.

| Token | Value | Where | Origin |
|---|---|---|---|
| `--size-display` | clamp 26 to 34 | the page h1 | attribute A3, restraint: the heading states, it does not shout |
| `--size-read` | clamp 30 to 40 | the pulse read, the word that answers the question | attribute A4, the read is the thing being read |
| `--size-metric` | 24 | participation, the one number | attribute A4 |
| `--size-state-title` | 20 | the heading of a state block | technical decision, one step under the h1 |
| `--size-brand` | 20 | the wordmark | pixel of plate A, identity zone |
| `--size-body` | 16 | running text | technical decision |
| `--size-ui`, `--size-h2` | 15 | controls, the privacy line, a card heading | technical decision |
| `--size-nav`, `--size-label` | 14 | app bar, form label, the unit beside a metric | technical decision |
| `--size-micro`, `--size-eyebrow` | 13 | the quiet line, and the label above a heading | technical decision |
| `--size-tabbar` | 12 | the mobile bottom bar | technical decision |
| `--size-tag` | 11 | the alert tag | technical decision |
| `--size-badge-glyph` | 26 | the glyph inside an outcome badge | technical decision |

## Layout

- **Content column** `--size-content: 1140px`, centred, with the app bar and the footer rules running full bleed so the page reads as one surface rather than a stack of boxes. Origin: technical decision.
- **Focused column** `--size-narrow: 480px` for the employee check-in: one question, one action, under thirty seconds. Origin: layout direction 01, kept for the check-in when direction 02 was chosen for the operator (D-15).
- **The operator layout is two columns**, `1.6fr` main and `1fr` rail, collapsing to one column at 720px. Origin: layout direction 02, the working desk (D-15). The pulse, the participation, the privacy line and the next program are on one screen without scrolling.
- **Spacing is a 4px scale**, `--space-1` to `--space-7` (4, 8, 12, 16, 20, 28, 40). Origin: attribute A3, restraint carried by rhythm rather than by decoration. Three named insets are derived from the icon size rather than from the scale: `--space-icon-inset` 42, `--space-icon-inset-sm` 26, `--space-icon-stack` 34.
- **Touch targets** are at least `--size-touch: 44px`. Origin: technical decision, WCAG 2.5.5, found by audit at stage 06 step 8 when controls stood at 41.
- **Mobile chrome:** the shared roadmap is a fixed 52px bar under 900px and a 220px left rail above it. That is portfolio chrome, not product chrome.

## Elevation & Depth

**Flat, on purpose.** There is not one shadow in the system. Depth comes from paper (`#F7F8FC`) against surface (`#FFFFFF`) and from hairline borders, which is the Apple restraint recorded in `references.md`: elevation through tonal contrast rather than through floating. Origin: attribute A3.

A consequence worth stating, because it will be tested at stage 08: a card is told apart from the page by one hairline and one step of tone. If a component ever needs a shadow to be legible, the composition is wrong before the shadow is.

## Shapes

| Token | Value | Where | Origin |
|---|---|---|---|
| `--radius-control` | 8px | buttons, inputs, tabs, the privacy strip | plate A, UI component zone, measured on the shape |
| `--radius-card` | 16px | cards, panels, images | plate A, UI component zone |
| `--radius-pill` | 999px | badges and pills only, never a button | attribute A3: a pill button would start shouting |
| `--radius-sm` | 4px | the alert tag, skeleton lines | technical decision |
| `--radius-bar` | 3px | one bar of the trend spark | technical decision, the smallest shape in the language |

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

The mechanical detector flags these as sizes off the ramp, and it is right about the fact and wrong about the verdict. They are recorded here so the flag is a known one rather than a new one, and so nobody snaps them into the product scale by reflex. **Product screens carry none of this**: every value on a screen in `design/` comes from `design/kit/kit.css`.

---

## Tokens still to be checked

Not an error list, a list of what carries a block comment rather than a line of its own, so stage 08 gives each one a role and a stated origin: `--radius-sm`, `--size-h2`, `--size-body`, `--size-ui`, `--size-micro`, `--size-eyebrow`, and the geometry group `--size-skel-line`, `--size-skel-block`, `--size-skel-act`, `--size-control-h`.

## Sources

- `design/concept/docs/concept.md` - the attributes A1 to A5 and the designer's taste, the only place a visual decision may be traced to.
- `design/concept/docs/references.md` - Signal as the base, restraint from Apple, product-as-proof from 1Password, mechanism content from Culture Amp and Oura.
- `DESIGN-artifacts.md` - the stage 06 draft: identity, palette sampled from pixels, typography, icon language, UI tone. It stays as the first source and is not edited into a second product document.
- `design/_theme.css` - where the values physically live until stage 07 moves the file to `design/kit/kit.css`.
- `voice/docs/voice.md` - the text on any surface is governed there, not here.
