# DESIGN-artifacts.md

*Draft design document, written at stage 06 (Concept). It holds the approved brand decisions and the concept language, and nothing else. The product `DESIGN.md` is not this file: stage 07 builds it from the real code of the coloured screens plus this document. Every value below carries its origin on the same line. A value with no origin is not entered here at all, because stage 07 turns this file into tokens and a token with an unverifiable origin poisons everything downstream.*

**Route:** no existing brand and no existing design system (`docs/decisions.md` D-11). So the language is found from scratch: brand plates generated, one chosen.

---

## Chosen plate

**`design/concept/assets/brand-plate-a.png`.** Origin: decision of the user, 18 August 2026.

Light airy surface, one blue accent as the single interactive colour, soft cards, human photography. Taken as the **base**: the surface language and the accent discipline are A, and the mechanism content that A does not show is brought in from the specification, not invented (see "Corrections applied to plate A").

**Recorded, not chosen** (kept so we can return to them):

| Plate | Character | Why not chosen |
|---|---|---|
| B `brand-plate-b.png` | Indigo, uppercase, "engineered" | Reads as enterprise theatre, against attribute A1 (calm, not clinical) and A5 (not faceless corporate) |
| C `brand-plate-c.png` | Near black with warm amber | Amber on the primary action reads as a warning, and the mockup text degraded into noise |
| D `brand-plate-d.png` | Light paper with teal | Second round, strongest rival: carried the owner CAN and CANNOT panel, the pre-check-in disclosure and the minimum-of-5 poster |
| E `brand-plate-e.png` | Graphite with ice blue | Dark base, and `concept.md` fixes the base as light (Signal). Available later as a dark register |
| F `brand-plate-f.png` | Light paper with plum and moss | Plum reads editorial and wine-like, and moss as the positive colour drifts back toward the wellness palette we rejected |

---

## Palette

**Taken from pixels, not from the captions.** The hex printed under a swatch on a generated plate is drawn text and can disagree with the swatch itself. Where they disagreed, the pixel won. Sampling: `brand-plate-a.png` resampled without compression, modal colour of a patch at the centre of each named zone.

| Role | Value | Origin | Caption on the plate |
|---|---|---|---|
| Background (page canvas) | `#F7F8FC` | pixel of plate A, palette zone, swatch 1 | `#F6F8FB` |
| Surface (cards, panels) | `#FFFFFF` | pixel of plate A, palette zone, swatch 2 | `#FFFFFF` |
| Ink (text, structure) | `#1D1D1D` | pixel of plate A, palette zone, swatch 3 | `#1B1B1B` |
| Accent soft (hero fills, icon fills, non-interactive) | `#A4BEF3` | pixel of plate A, palette zone, swatch 4 | `#9DBBF8` |
| Action (the only interactive colour) | `#346FEC` | pixel of plate A, palette zone, swatch 5 | `#2C6BED` |
| Muted (secondary text, borders) | `#5B6171` | pixel of plate A, palette zone, swatch 6 | `#6B6472` |

**Caption drift worth naming:** the plate calls the sixth swatch `#6B6472`, a warm purple grey, while the swatch itself is `#5B6171`, a cool blue grey. The pixel is the value, and it is the more coherent one: a cool grey sits with the blue, a purple grey does not.

**One accent, and only for action.** Origin: attribute A3 in `concept.md` (Apple restraint, one accent as the single interactive colour). `#346FEC` marks what can be acted on and nothing else. `#A4BEF3` is decorative and never carries meaning on its own.

### Contrast, measured, not assumed

| Pair | Ratio | Verdict |
|---|---|---|
| `#1D1D1D` on `#F7F8FC` | 15.88 | AA and AAA |
| `#5B6171` on `#FFFFFF` | 6.19 | AA |
| `#FFFFFF` on `#346FEC` | 4.53 | AA for normal text, so the primary button label is legal |
| `#346FEC` on `#FFFFFF` | 4.53 | AA, at the edge |
| `#346FEC` on `#F7F8FC` | 4.27 | **fails AA.** Accent text and links must not sit on the page background |
| `#A4BEF3` on `#FFFFFF` | 1.87 | decorative only, never text and never a border that carries meaning |

**Consequence, decided here so stage 07 does not rediscover it:** any text or link in the action colour sits on `#FFFFFF`, or the action colour is darkened for text use. Origin: measurement above plus attribute A1 (a surface that lowers the guard cannot also be unreadable).

---

## Typography

**The plate gives character, never a font file.** The letters in a generated specimen are drawn glyphs, so the name printed on the plate is not evidence of anything.

**Character read off plate A:** neutral low contrast grotesque, even stroke, open apertures, wide and quiet at display size, no serifs, no personality tics. The headline sets large and calm, the body sets small and dense.

**Chosen pair: Inter Tight for display, Inter for body.** Origin: decision of the user, 18 August 2026.

| Slot | Family | Why it answers the character |
|---|---|---|
| Display | **Inter Tight** | The same neutral neo grotesque skeleton as the specimen on plate A, with tracking that holds at 48px and up. It reads as structure rather than as a voice, which is attribute A3 |
| Body | **Inter** | Built for dense interface text at 14 to 16px, and the operator dashboard is dense. It pairs invisibly with the display face, so the character has to come from rhythm and from the mechanism on screen, not from the typeface |

Recorded and not chosen, so we can return to them: **Instrument Sans** for display (narrower, quiet humanist details, closer to the Linear side of the taste) and **Public Sans** for body (more open, less machined).

Numbers carry meaning in this product (the pulse score, participation, trend), so figures are set tabular. Inter provides them, and they are switched on in the concept stand with `font-feature-settings: "tnum"`. Origin: attribute A4 (a number never stands bare) and `voice.md` P1.

### The scale, as it ships

Sizes live as variables in `design/_theme.css` and the coloured screens read them, so this table and the product cannot drift apart silently. Origin of the scale: the character of plate A plus what the etalon and the check-in actually needed; each value was set once and reused.

| Token | Value | Where it is used |
|---|---|---|
| `--size-display` | clamp 26 to 34 | the page h1 |
| `--size-read` | clamp 30 to 40 | the pulse read, the one word that answers the question |
| `--size-metric` | 24 | participation, the one number |
| `--size-state-title`, `--size-brand` | 20 | a state heading, and the wordmark |
| `--size-body` | 16 | running text |
| `--size-ui`, `--size-h2` | 15 | controls, the privacy line, a card heading |
| `--size-nav`, `--size-label` | 14 | app bar, form label, the unit beside a metric |
| `--size-micro`, `--size-eyebrow` | 13 | the quiet line, and the label above a heading |
| `--size-tabbar` | 12 | the mobile bottom bar |
| `--size-tag` | 11 | the alert tag, the smallest type in the language |

---

## Icon language

- **One weight, geometric, rounded joins, stroke 1.5 on the 24px grid.** Origin: plate A, icon zone for the shape, and the Solar linear drawing for the stroke. Corrected at stage 06 step 8: this line first said "roughly 2px", read off the plate by eye, while every icon actually shipped is Solar linear at 1.5. The drawing is the evidence, the estimate was not.
- **Two tones of one accent:** the line in the action blue, the fill in the soft accent. No third colour, no gradients. Origin: plate A, icon zone, plus attribute A3.
- **Vocabulary already present on the plate:** shield, lock, people, pulse, check, trend, message, hidden eye. It maps one to one onto the product's own concepts (privacy, team, pulse, confirmation, trend, invitation, what is not shown). Origin: plate A, icon zone, checked against `ia/docs/` node specs.

---

## UI tone

The tone of a screen, not its layout. The layout is chosen at step 4 and lives in `directions.html`.

- **Light and airy, flat, no shadow drama.** Depth comes from the paper against white surface, not from elevation. Origin: attribute A1 and attribute A3 (depth from tonal contrast rather than shadows, taken from Apple in `references.md`).
- **Radius: about 8px on controls, about 16px on cards.** Origin: plate A, UI component zone, measured on the shape. The plate's own captions agree, which is corroboration and not the source.
- **One primary action per screen, in the action colour, everything else ghost or plain text.** Origin: the wireframe contract in `CLAUDE.md` (exactly one main action per screen) plus attribute A3.
- **The score never appears alone.** Score, plain language read and next step sit inside one card. Origin: attribute A4, and the stage 04 etalon 4.0 Dashboard.
- **Photography: real small teams, natural light, documentary.** Not stock smiles, not illustration, not blobs. Origin: attribute A5. The specific photographs are chosen at steps 5 to 7 and listed in `concept.md`, Photo list.

---

## Corrections applied to plate A

Named out loud, because the plate is raw material and not a contract, and because these three points are where A argues with rules that are already recorded.

1. **"Your privacy is our priority" does not ship.** It is a promise, and attribute A2 with `voice.md` P2 both require the mechanism to be shown instead: aggregate only, minimum of 5, no live count. The screens carry the owner CAN and CANNOT panel and the pre-check-in disclosure, which plate A does not show and plates D and E do. Origin: attribute A2, `voice.md` P2.
2. **The stock meeting photograph does not ship.** Origin: attribute A5, which rejects stock smiles as explicitly as it rejects blobs.
3. **The generic blue is a live risk, accepted knowingly.** `docs/decisions.md` D-13 says a palette that can be guessed from the category is a reflex rather than a decision, and a cornflower blue SaaS accent is close to that line. It is taken anyway by decision of the user, and the differentiation therefore has to be carried by the mechanism zones and the restraint, not by hue. If the accent later reads as anonymous, the honest fix is to shift the blue, not to add a second colour.

---

## Where the values live

At stage 06 there is exactly one file that holds a value: **`design/_theme.css`**. This document is its written record and the two must agree; the concept stand at `design/concept/concept.html` shows the same values live. A value changed in one of the three and not in the other two is a defect, and it is the first thing stage 08 will audit. Stage 07 moves `_theme.css` to `design/kit/kit.css` unchanged, which is why the names are already in their final form.

---

## Sources

- `design/concept/docs/concept.md` - designer's taste and attributes A1 to A5, the only place a visual decision may be traced to.
- `design/concept/docs/references.md` - base direction Signal, techniques from Apple and 1Password, the rejected category reflex.
- `design/concept/assets/brand-plate-a.png` - the chosen plate, every pixel value above sampled from it.
- `docs/decisions.md` D-11 and D-13 - route with no existing brand, and Brio looking like a privacy product rather than a wellness brand.
- `voice/docs/voice.md` - the text on any surface is governed here, not by the plate.
