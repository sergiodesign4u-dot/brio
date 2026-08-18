# UI and Visual, critique log (stage 07, steps 6 and 7)

*Three instruments. `/impeccable`'s mechanical detector over every file, Codex read only over the text of the files, and my own pass in the browser at 360 and 1280. Codex owns the class that is invisible on screen and fatal later: **a screen assembled past the kit**, and its softer form, the context override that looks like a tidy adjustment and is actually an undeclared variant. Sets were taken independently and merged afterwards; every finding was verified in the current file before anything was touched.*

---

## The merged table

| # | Class | Where | What | Who found | Verdict |
|---|---|---|---|---|---|
| 1 | Screen assembled past the kit | all 24 coloured screens | None. No `style` attribute and no `<style>` block on any product screen | Codex + Claude | Clean, confirmed twice |
| 2 | Modifier with no base declaration | `design/signup.html` | `.wf-auth-grid`, `.wf-auth-brand`, `.wf-auth-proof` were used in markup and declared nowhere, so the sign-up screen had no split layout at all | Claude | **Fixed.** Ported into the kit, with the brand panel disappearing under 760px so signing up stays one fast column |
| 3 | Two names for one thing | `design/index.html`, kit | The media slot's tall modifier is `.shot` in the wireframes and I had declared `.tall`. The screen used a class that did not exist | Claude | **Fixed.** The kit takes the wireframe's own modifier names, because the markup belongs to `wireframes/` and a second name for the same thing is drift, not a variant |
| 4 | Context override that is really a variant | `kit.css`, the app bar | `.wf-appbar-inner .wf-btn { padding; min-height: 0 }` bent the button from a context: a smaller button nobody had named | Codex + Claude | **Fixed.** Declared as `.wf-btn.compact` and used in the shell markup. Recorded in the inventory's Button row |
| 5 | Context override that is really a variant | `kit.css`, the proof disclosure | `.wf-see .see-body .wf-pulse` changes the pulse card's radius and padding | Codex | **Fixed by naming it.** It stays a contextual selector, because the markup belongs to `wireframes/` and a copy may not add a class, but it is now declared as the pulse card's *embedded* variant, with the reason in the file and a row in the inventory |
| 6 | Value past a variable | `kit.css`, the cross icon | `top: 2px` written as a literal | Codex | **Fixed.** `--space-hair`, the smallest optical nudge |
| 7 | Value past a variable | `kit.css`, the program grid | `minmax(240px, 1fr)` written as a literal | Codex | **Fixed.** `--size-progcard` |
| 8 | Inventory against the kit | `inventory.md`, Form | Form was listed as a level 3 component and the kit has no `form` rule to match it | Codex | **Fixed in the inventory, not the kit.** A form here is a stack of fields plus one action and owns no values. Adding a rule to satisfy a table would be the tail wagging the dog |
| 9 | Inventory against the kit | `inventory.md` | Split auth, and seven layout helpers (`.pg-facets`, `.pg-grid`, `.wf-contact`, `.wf-grid3`, `.wf-grid4`, `.wf-tags`, `.wf-cta-final`) existed in the kit and in no list | Codex | **Fixed.** Split auth is a level 3 organism; the helpers get their own section, because a selector in the kit that appears in no list is a decision nobody made |
| 10 | Doubled icon | `design/signup.html` | The proof rows drew two icons: the markup's icon slot and a second one from my own rule | Claude, in the browser | **Fixed.** The rule fills the slot the markup already has instead of drawing beside it |
| 11 | Style on a stand | `design/overview.html` | Ten inline style attributes on the hub | Claude | **Fixed.** They became classes. A stand may carry a `<style>` block; it may not carry styles scattered through its markup |
| 12 | Style on a stand | `design/kit/kit.html` | Sixteen inline nudges mixed in with the exhibits | Claude | **Fixed.** The nudges became classes; the exhibits stayed, and the spacing exhibit now reads `var(--space-N)` so the showcase demonstrates the tokens rather than restating their values |
| 13 | Structural drift | all 24 pairs against `wireframes/` | None | Codex + Claude | Clean. Text, markup and states match; only styling differs |
| 14 | Three records disagreeing | `DESIGN.md`, `kit.css`, `kit.html` | None. Palette, radii, spacing, type sizes and component padding agree everywhere all three name them | Codex | Clean |
| 15 | Contrast below AA | every text node on 19 screens, measured against its resolved background | None | Claude, in the browser | Clean |
| 16 | Breaks at 360 | 19 screens at 360 and 1280 | None. No horizontal scroll, no broken image, one h1 each | Claude, measured | Clean |

## Where I disagreed with Codex, and why

The rule says a disagreement is not put to a vote. The user delegated these decisions to me, so here they are, decided and recorded.

| Codex said | I decided | Why |
|---|---|---|
| Eight context overrides in `kit.css` are undeclared variants | Two of them were (rows 4 and 5). The other six stay | `.wf-alert .wf-btn { flex }`, `.wf-copy .wf-input { flex }`, `.wf-see .see-body .wf-card { margin-bottom: 0 }`, the two sibling-margin rules and the mobile badge margin change **arrangement**, not identity: no colour, no type, no radius, no size. A component's identity is what a variant is for; where a thing sits is what composition is for. Folding every layout relationship into a modifier class would need markup changes on screens whose markup belongs to `wireframes/` |
| Three identical `.wf-btns` margin rules, one per container | Folded into one rule with three selectors | Codex flagged them separately and was right that three patches is a smell. The fix is one declaration, not three modifiers |
| The `compact` class on the shell CTA is structural drift against the wireframe | Not drift | The app bar in a coloured copy is static markup replacing `BRIO_WF.render()`, which is an allowed difference by the stage 06 contract, and the class sits inside it. The screen body, which is what the drift rule protects, is byte-comparable and was verified as such. The alternative Codex's reading implies is worse: keep bending the button from a context so the class never appears |

## Attribute divergences, decided

*Written at step 1, resolved at step 6, and the reasoning is in `design/concept/docs/concept.md` rather than only here.*

| Attribute | The mockup said | Decided |
|---|---|---|
| **A5**, personable and human, technique "real photography of real small teams" | No photograph reached the operator or employee interior, only the public surfaces and the sign-up panel | **Amend the attribute.** A peer does not hang photographs of strangers in the room where you report a hard week. Photography carries A5 where the product is explained; inside, the human register is wording, type scale and the soft accent |
| **A1**, calm and plain, technique "light, airy split sections" | The operator screen is deliberately dense, layout direction 02 | **Amend the attribute** to "light and unhurried at any density". What makes a screen non-clinical is tone and hierarchy, not empty space, and D-15 already accepted the density with a constraint |

Neither amendment touches what an attribute claims, only the technique line that said how it would be carried.

## Accepted, with the reason stated

| What | Why it stands |
|---|---|
| `overused-font: Inter`, 29 files | The pair is the user's decision, taken at stage 06 with the alternative recorded |
| Stand pages use a heading scale off the product ramp | Declared in `DESIGN.md` under "Documentation chrome is not the product". A document that reads like the product it documents is harder to read as a document |
| The detector reports "34 em-dashes" in `kit.html` | **Withdrawn at verification.** The file contains zero U+2014; the detector is counting plain hyphens. Recorded rather than silently ignored |
| Six kit classes are used by no screen in the sample | Expected and correct: the system block, the document switch, the pill and the chip row belong to screens that are still grey. The kit knows the whole product; the sample colours part of it |
