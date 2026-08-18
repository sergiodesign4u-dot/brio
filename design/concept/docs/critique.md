# Concept, critique log (stage 06, step 8)

*Two instruments, taken independently and in full before any merge. Claude looked at what needs an eye and taste; Codex, read only, took the classes that are proved by comparing files. The mechanical detector shipped with `/impeccable` ran as a third source. Deduplication happened afterwards, on complete sets. Every finding was verified in the current file before it was touched, and anything that did not survive verification stays here with the reason rather than disappearing.*

**One note on the instruments.** Codex could not start inside the plugin subagent (`failed to initialize in-process app-server client: Operation not permitted`, a nested sandbox). It ran instead from the shell with an explicit `--sandbox read-only` flag, twice: once before the fixes and once after them. It changed nothing.

---

## The merged table

| # | Class | Where | What | Who found | Status |
|---|---|---|---|---|---|
| 1 | Structural drift | all 15 pairs `design/<screen>.html` against `wireframes/<screen>.html` | No drift. Text, DOM inside `.wf-content`, attributes and the set of states match | Codex + Claude, independently | Confirmed clean, twice |
| 2 | Breaks at 360 | `dashboard-alert.html` | Horizontal scroll, `scrollWidth 367` against `clientWidth 345`. The icon added to the banner at step 6 made the flex row unbreakable | Claude | Fixed: the banner wraps under 520px, the action takes its own line |
| 3 | Same component, different values | stand `.pulse .read` 36px against screens `clamp(30,4vw,40)` | The pulse read, the one word that answers the question, was two sizes | Codex + Claude | Fixed: both read `--size-read` |
| 4 | Same component, different values | stand `.read` line-height 1 against screens 1.02 | Two line heights for one word | Codex | Fixed: 1 everywhere |
| 5 | Same component, different values | stand `.pulse` 20px against screens 28px | Pulse card padding | Codex | Fixed: 28 |
| 6 | Same component, different values | stand `.facts .metric` 22px against screens 24px | Participation metric | Codex | Fixed: 24 |
| 7 | Same component, different values | stand `.card` 18px against screens 20px | Card padding | Claude | Fixed: 20 |
| 8 | Same component, different values | stand `.wm` 18px against screens 20px | The wordmark | Codex | Fixed: 20 |
| 9 | Same component, different values | stand `.appbar` full border and card radius against screens bottom rule only; `gap 6/22`, `padding 10x12 / 15x20` | The app bar was a different object on the stand | Codex | Fixed: the stand renders the product bar |
| 10 | Same component, different values | stand `.strip` white, `16px 18px`; screens paper, `12px 16px 12px 42px` | The privacy strip, the most repeated element in the product, looked different in the two places | Codex + Claude | Fixed: paper, 8px radius, icon inset, on both |
| 11 | Stand against brand | `concept.html` published a type scale ("Display 40") that the product does not use (h1 renders 34) | The stand promised a scale nobody read from | Claude | Fixed: the scale section now lists the real tokens, and `DESIGN-artifacts.md` records them |
| 12 | Stand against brand | `DESIGN-artifacts.md` said icons are "roughly 2px stroke at 24px"; every icon shipped is Solar linear at 1.5 | The brand document was wrong, not the drawing. The 2px was read off the plate by eye | Codex | Fixed: 1.5 in all three files, with the correction stated in place |
| 13 | Value past a variable | `design/_theme.css`, 11 rules | Font size as a literal inside a rule: 20, 24, 14, 12, 11, 26 | Codex | Fixed: `--size-brand`, `--size-metric`, `--size-nav`, `--size-label`, `--size-tabbar`, `--size-tag`, `--size-state-title`, `--size-badge-glyph` |
| 14 | Value past a variable | `design/_theme.css`, 23 rules | Spacing as a literal: 22, 15, 11, 18, 6, 5, 7, 10, 42, 26, 34 | Codex | Fixed: snapped to the 4px scale, plus three named insets that are derived from the icon size |
| 15 | Value past a variable | `design/_theme.css` spark bar | `border-radius: 3px 3px 0 0` | Codex | Fixed: `--radius-bar` |
| 16 | Value past a variable | `design/*.html` | No `style=""` attribute on any of the 15 screens | Codex | Confirmed clean |
| 17 | Variable without provenance | `design/_theme.css`, the icon block | Four icon variables carried no origin | Codex | Fixed, and after the first fix Codex caught the comment still saying "all four" while five variables stood under it. Fixed again |
| 18 | Contrast | every foreground and background pair actually used | No pair below AA. 16.86, 15.88, 6.19, 5.83, 4.53, 9.02, 6.16 | Codex + Claude, independently | Confirmed clean, twice |
| 19 | Eye and taste | `details.wf-see`, "See exactly what your manager sees" | The one place where the privacy promise is turned into proof had no sign that it opens. Proof nobody opens is not proof | Claude | Fixed: a Solar chevron, drawn from CSS, that turns on open |
| 20 | Eye and taste | `.wf-radio` | A chosen answer looked unchosen: the wireframe had a `.on` state and the theme had not carried it | Claude | Fixed through `:has(input:checked)`, so the markup stays untouched |
| 21 | Accessibility | every control | Buttons stood 41px tall and the app bar links 22px, under the 44px comfortable target | impeccable audit + Claude | Fixed: `--size-touch`, and vertical padding on the bar links |
| 22 | Breaks at 360 | `checkin-submit-error` and `checkin-expired` | The action sits below a 740px fold | Claude | Partly fixed: the badge and the leading blocks give back what they can, 790 to 761 and 849 to 828. The rest is accepted, see below |
| 23 | Breaks at 360 | `checkin-privacy` | The action sits at 1393px, far below the fold | Claude | Not a defect, and deliberately so. Five claims of the mechanism have to be read before Continue: that is the screen's whole job (Yemi E5) |
| 24 | Eye and taste | both coloured screens | No photograph anywhere, so attribute A5 is proven on the stand only | Claude | Deferred with reason, see below |
| 25 | Universal AI default | `.wf-badge` | It is literally an icon in a circle, one of the named model reflexes | Claude | Not a defect: the shape is inherited from the grey wireframe, and structure is not this stage's to change. Recorded so stage 07 revisits it deliberately |
| 26 | Accessibility | `checkin-questions-loading`, the disabled button | Label contrast fails at `opacity .45` | Claude | Accepted: WCAG 1.4.3 exempts disabled controls. Recorded rather than hidden |
| 27 | Slop detector | 17 files | `overused-font: Inter` | impeccable | Accepted: the pair is the user's decision, taken at step 3b with the alternative recorded |
| 28 | False positive | console of `design/concept/concept.html` | Six 404s for `design/assets/brand-plate-*` | Claude | **Withdrawn at verification.** The 404s came from my own test harness, which wrote the stand into an iframe based at `/design/`, so `assets/...` resolved one level too high. On the real page every asset loads |

## Deferred, with the reason stated

| What | Why it is deferred, not fixed |
|---|---|
| Photography on the coloured screens (24) | Adding a photograph means adding an element, and the copy owns the visual layer only: structure and text stay the property of `wireframes/`. Neither 4.0 Dashboard nor cluster 10 carries a media placeholder in the grey original, so there is nowhere to put an image without changing the wireframe. Attribute A5 is therefore proven on the stand and on the marketing surfaces, and the first product screen with a real photograph belongs to stage 07 |
| The action below the fold on two outcome screens (22) | Both screens put the reassurance before the action on purpose: "your answers are saved" has to be read before "Try again". Cutting more space would compress the badge and the sentence that carry the reassurance, which trades a real thing for a measurement. It stays a short scroll |
| A dark register | Recorded in `concept.md` as available and never refused by the designer. It is not needed by either screen, and inventing one here would be a decision without a screen to prove it on |

---

# Contract checklist (third instrument, separate on purpose)

*Both instruments above read what exists, so neither can see a step that never happened. This table walks the stage contract line by line. It is kept apart from the defect table because a missed step is not a defect of an artefact, and mixing the two taxonomies hides it a second time.*

| Contract line | Verdict | Note |
|---|---|---|
| The fork about an existing brand was put at step 2 and answered out loud | Done | Route "nothing exists yet", recorded in `docs/decisions.md` D-11 and in `concept.md` |
| `references.md`: sources with name, link, technique taken, persona anxiety removed; nothing copied whole | Done | Signal as the base, Apple and 1Password for technique, Culture Amp and Oura as mechanism only |
| `concept.md`: taste, attributes, brand, layout; the rejected options kept | Done | Five attributes, each with a source line; five plates and two layout directions kept with reasons |
| Brand plates as images, one chosen, visible on `concept.html` with the others as thumbnails | Done, and exceeded | Six plates in two rounds, not three. A is chosen; B to F stand as thumbnails with the reason each was not chosen |
| `references.md` has a visible place in `NAV_SECTIONS` | Done | Section "Brand and references" |
| Palette taken from pixels, typography two real Google Fonts approved by the user | Done | Six values sampled from the pixels of plate A; the caption drift on the muted swatch is recorded. Inter Tight and Inter chosen by the user |
| `DESIGN-artifacts.md` with an origin on every value and a Sources section; no product `DESIGN.md` | Done | Origins read `pixel of plate A`, `pixel of plate D`, `decision of the user`, `derived from --color-muted`, `attribute` |
| `directions.html`: three layout directions of one brand, composition only | Done | Same palette, type and icons in all three; each direction states what it answers and what it risks |
| `concept.html`: the full stand, all sections in `NAV_SECTIONS`, contrast table | Done | Nine sections, ten now with "Was to now" |
| Both coloured screens take colour only from `_theme.css`, no inline styles | Done | Verified by both instruments |
| `_theme.css` in the naming convention, everything in `:root`, an origin beside each variable | Done | Confirmed by Codex on the second pass |
| Copies in `design/`, `wireframes/` untouched, link rule respected | Done | 15 copies; links point at `design/` only for screens that exist there |
| Etalon and contrast screen in the same language, the same card reads as the same product | Done | Computed styles compared across both screens: one set of values for button, card, strip, heading, app bar |
| Every decision has a pair in the attributes or the taste; every pair passes AA | Done | The one measured failure, the action colour on paper, is published with the rule that follows from it |
| Structural drift is zero | Done | Both instruments, before and after the fixes |
| `done:true` for Directions and Concept in `/_nav.js`, no other page edited | Done | Set at step 5; no page outside `design/` was touched |
| Both screens checked at 360 | Done, measured | 15 screens measured, `scrollWidth` against `clientWidth`, not judged by eye |
| `/impeccable critique` and `/impeccable audit` run, findings verified, taxonomy re-run after the fixes | Partly, and named | The mechanical detector ran across all 17 files, before and after. The audit dimensions were walked by hand and produced finding 21. The `critique` playbook was **not** loaded as a separate scored review: its classes were covered by my own pass and by Codex, and I am recording that rather than claiming a run that did not happen |
| The critique is visible on the page | Done | Section "Was to now" on `concept.html`, with three before and after pairs including the 360 one |
| Stage closed by the ritual: `CLAUDE.md`, `README`, `docs/decisions.md`, pushed | Done | See the stage 06 rows in each |

**Not everything is green, and that is the point of a separate table.** Two lines are honest reservations: the `critique` playbook was not run as a scored review, and photography never reached a product screen. Both are named above rather than folded into a defect count.
