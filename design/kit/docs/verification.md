# Verification log, stage 08

*Two instruments plus the mechanical detector, and a third pass that reads the contract rather than the artefacts. Sets were taken independently and in full before they were merged. Every finding was checked in the current file before anything was touched, and a finding that did not survive stays here marked "withdrawn at verification" with the reason.*

**Division of labour, and it is not arbitrary.** Codex owns what is proved by comparing text: a token without a pair, an import out of order, a registry entry with no file, a divergence between a coloured copy and its grey original. Claude owns what needs a browser or a judgement: a resolved contrast value, a computed style compared before and after, a role that meets another role in the dark, whether a class on 97 screens is a hole or somebody's furniture. The detector owns the mechanical sweep of every file.

---

## The merged table

| # | Class | Where | What | Who found | Verdict |
|---|---|---|---|---|---|
| 1 | Variable used and never declared | `kit.css:638` at stage 07 | `.pg-grid` read `var(--size-progcard)` and the variable was declared nowhere. The whole `grid-template-columns` declaration was therefore invalid and dropped, so the program library stacked its cards full width instead of laying them out in a reflowing grid | Claude, by the computed style comparison at step 8 | **Fixed.** The token is declared at 240px. Both instruments missed it at step 1: Codex checked variables declared and never used, Claude checked the same direction, and nobody checked the reverse. The class is now in the step 9 taxonomy |
| 2 | Dead rule that the new load order would have woken | `auth.css` | `.wf-auth-proof .wf-ico` carried a width and a height that never applied in the flat kit: `.wf-ico.sm` had the same specificity and stood later in the file. Under the level order of `index.css` the organism loads after the atom, so the dead pair would have come alive and shrunk the icon slot on the sign up panel from 40px to 20px | Claude, computed style comparison | **Fixed.** The dead pair removed, the live `background: none` beside it kept. This is the clearest thing the split surfaced: the flat file could not tell a decision from an accident of position |
| 3 | A responsive override reaching a component nobody meant | `kit.css`, `@media (max-width: 520px) :root` | The badge's smaller step was written as a `:root` override, and the icon slot was reading the badge's variable, so it silently resized too | Claude, computed style comparison | **Fixed.** Each component owns its own step now, in its own file. Same values, one less surprise |
| 4 | Contrast, line surface | `--color-line-strong` | The entire visible boundary of five controls measured **1.5:1** where WCAG 1.4.11 asks 3:1 | Claude, measured | **Fixed** as a named change of the foundation review: `.28` to `.70`, now 3.19 and 3.08. Stage 07 reported zero contrast failures and was honest: it measured every text node, and a border is not a text node |
| 5 | Contrast, fill surface | `.wf-tag.on` | The selected chip was identified by a fill measuring **1.87** and by a border set to transparent | Claude, measured | **Fixed** as a named change: the border takes the action colour, 4.53. The fill stays, because it is a brand pixel with an origin |
| 6 | Two roles meeting in the dark | `--line-hover` | Set to `--slate-200` at step 5, where it met `--text-primary`, `--glyph-strong` and `--text-hover`. A hover border as bright as the body text is louder than the light theme's own answer | Claude, at the step 7 stress test | **Fixed.** Moved to `--slate-400`: 7.07 against a rest line of 3.06, the same size of step the light theme makes from 3.19 to 6.19 |
| 7 | Two roles meeting in the dark | `--text-on-action` and `--bg-page` | Different in the light theme, both `--slate-950` in the dark | Codex | **Not a defect, verified.** They paint different surfaces and never sit next to each other: one is the ink on a blue fill, the other is the ground behind the page. In the light theme they are also all but identical, `#FFFFFF` against `#F7F8FC` |
| 8 | Role comment without an origin or a count | `tokens.css`, 9 roles | The pack requires every semantic role to name how many places it grew from, as a figure, and to carry its origin in one word | Codex | **Fixed.** All 23 roles now carry both. Checked mechanically afterwards: zero without |
| 9 | A role comment contradicting the code | `--line-action` | The comment claimed the focus ring, which is `--color-focus` | Codex, class 3 | **Fixed.** The comment names its real consumers, and says in as many words that it is not the focus ring |
| 10 | One token doing two jobs | `--bg-action` | It fills the solid button and the two emphasised bars of the spark | Codex, class 4 | **Kept as one role, and the disagreement is recorded.** The emphasised bars mean "these are the cycles you are being asked about", which is the same act of pointing as a solid button, and the spark is the only chart in the product, so a data role would have exactly one consumer. The reasoning is now in the token comment, so the day a second chart arrives the line is there to reread |
| 11 | `:focus` where `:focus-visible` is meant | `input.css` | Input and textarea | Codex | **Fixed** |
| 12 | Registry entry with no file | `_nav.js`, `overview.html` | `pixel-proof.html` was declared and did not exist | Codex | **Fixed by building it.** The idle control worked exactly as intended: a declared entry that covers nothing fails the check as loudly as an undeclared case |
| 13 | Coverage | `--bg-control` and `--opacity-disabled` | Neither appeared on any foundation page, while `color.html` claimed every role was in its table | Codex | **Fixed.** Both are on the colour page, the opacity as a pair of tinted plates rather than a contrast row, because it is not a colour |
| 14 | Structural divergence | `design/signup.html`, `signup-error.html` | `robots` read `noindex, nofollow` where the wireframe and the IA decision read `noindex, follow` | Codex | **Fixed.** SEO is decided at the IA stage and a coloured copy has no standing to change it. An inherited defect, not one this stage created |
| 15 | Structural divergence | `design/index.html`, `contact.html`, `contact-sent.html` | The `meta description` had been dropped from the coloured copy | Codex | **Fixed**, restored from the grey original. Same class and same inherited origin |
| 16 | Structural divergence | all 24 screens | The `title` differs: the grey one says "Wireframe: Home (0.0) - Guest", the colour one says "Home (0.0)" | Codex | **Not a defect, and now declared.** A coloured copy is not a wireframe and saying so in the title is right. It had never been written down, which is why it read as a divergence |
| 17 | Structural divergence | all 24 screens | The grey navigator `aside.wf-panel` is replaced by `aside#sidebar` plus `nav#dz-strip` | Codex | **Not a defect.** Prototype chrome, an allowed difference under the stage 06 contract, and the reason `design/_proto.css` exists |
| 18 | Rename map not executed | `index.html` | Codex read the app bar and found `.wf-settings` rather than `.wf-btn.compact` | Codex | **Withdrawn at verification.** `design/index.html:32` carries `class="wf-btn solid compact"`. Codex read the log in link beside it |
| 19 | Present tense about a deleted file | `inventory.md` two lines | Referred to `kit.css` as a file that exists | Codex | **Fixed.** Past tense, and the evidence citation of the deleted file keeps its line numbers as history |
| 20 | Stand carrying inline styles | 7 component pages | The snapshot caption set `font-family:inherit` inline | Claude, prompted by a detector misparse | **Fixed.** It became a class, which removed both the inline style and the false positive at once |
| 21 | Stand breaking at 360 | 36 stand pages | Horizontal scroll: the side panel's content forced its grid column past 360, because a grid item defaults to `min-width: auto` | Claude, measured | **Fixed** in `_page.css` only. `base.css` was not touched, which is the rule |
| 22 | Stand link unreadable in the dark | every anti rule link | No colour rule, so the browser default blue, measuring 1.99 in the dark theme | Claude, measured | **Fixed** |
| 23 | Token without a pair in the theme | every role and state token | **None.** Both instruments compared the two blocks in full and independently and got the same 23 names on both sides | Codex + Claude | Clean, confirmed twice |
| 24 | `@import` order against the level column | `index.css` | **None.** Codex printed the actual order of all 41 lines and it matches the inventory | Codex | Clean |
| 25 | Registry grouped by purpose | `_nav.js` | **None.** Foundations, Atoms, Molecules, Organisms, Verification | Codex | Clean |
| 26 | Component reading a primitive colour | all 37 files | **None** | Codex | Clean |
| 27 | Surface of a role | all 37 files | **None.** No fill role read by `color:`, no ink role read by `background:`. The masked glyphs paint with `currentColor`, so the role sits on `color` where it belongs | Codex | Clean |
| 28 | Folder mixing | `design/system/`, `design/kit/` | **None.** No html in the system, no product class in `_page.css`, no stand style in the system | Codex | Clean |
| 29 | Changes inside `wireframes/` | the whole folder | **None** | Codex | Clean |
| 30 | Variable used and never declared, second sweep | the whole system | **None**, after finding 1 was fixed | Claude + Codex | Clean |
| 31 | Contrast on the product | 24 screens, 2 themes, 2 viewports | **None.** Every text node measured against its resolved background | Claude, measured | Clean |
| 32 | Contrast on the stand | 45 pages, 2 themes, 2 viewports | **None**, after findings 21 and 22 | Claude, measured | Clean |
| 33 | Breaks at 360 | 24 screens and 45 stand pages, both themes | **None.** `clientWidth` measured at exactly 360 every time, zero horizontal overflow | Claude, measured | Clean |

## Where the two instruments disagreed

*The rule says a disagreement is not put to a vote. Three of them, each decided and recorded.*

| Codex said | Decided | Why |
|---|---|---|
| `--bg-action` carries two jobs that can diverge and should be split | One role, and the reasoning written into the token | The emphasised spark bars are not decoration: they are the product pointing at the cycles being asked about, the same act as a solid button. And the spark is the only chart, so a `--bg-data` role would ship with one consumer, which is the empty role trap from the other direction |
| `--line-action` and `--color-focus` point at the same primitive, so they are two names for one role | Two roles, and the comment on the first one corrected | The comment was wrong, not the split. A focus ring is the one thing in an interface allowed to take a hue the brand does not otherwise use, precisely so it can be seen where the brand colour cannot |
| `design/overview.html` carries its own `<style>` block, which class 9 forbids on a screen in `design/` | Kept, and the boundary written down | It is not a screen, it is the hub, the same kind of surface as `design/kit/_page.css`. The rule it has to obey is the other one: no styles scattered through the markup, and it obeys that |

## Accepted, with the reason stated

| What the detector says | Why it stands |
|---|---|
| `overused-font: Inter`, 117 files | The pair is the user's decision, taken at stage 06 with the alternative recorded |
| **`em-dash-overuse`, 14 files, up to 170 in one file** | **Withdrawn at verification.** A search for U+2014 across the whole repository returns nothing. The detector counts the `--` of a CSS custom property, so `tokens.css` scores highest precisely because it is the token file. Recorded rather than silently ignored, exactly as at stage 07 |
| `design-system-font-size` and `design-system-radius`, 41 findings | All of them in `design/concept/*.html`, `design/kit/kit.html` and `design/overview.html`: stand pages, whose own heading scale is declared in `DESIGN.md` under "Documentation chrome is not the product". No product screen and no component file carries one |
| 281 inline styles remaining on the stand pages | Two kinds, both deliberate. A swatch background **is** the exhibit: the tile shows the measured value, and putting it in a class would hide the thing being shown. A `max-width` inside a demo is product markup that the "Markup to copy" block prints verbatim, and a stand class inside it would print a class the product does not have. The page chrome that was inline, 236 of them, became classes at step 9 |
| The stand's own geometry as plain lengths in `_page.css` | Declared at the top of that file and in `DESIGN.md`. A stand that reached for a product token it does not mean would start documenting a system it is not part of |

---

## The contract of the stage, read as a checklist

*A separate pass and a separate table, on purpose. Both instruments above read what **exists**, so neither of them can see a step that never happened: a skipped gate is in no file and on no page. This one reads the pack instead of the artefacts.*

| Requirement of the pack | Done | Note |
|---|---|---|
| Entry gate read first: kit, showcase, shells, inventory, DESIGN.md, personas read only, the screens, microcopy, visuals | yes | |
| `inventory.md` moved to `docs/` by `git mv`, every reference updated | yes | Two files moved, two links rewritten |
| `wip: true` on the roadmap row at step 1 | yes | And the badge reads "Next" rather than "WIP" until the row has a page, which is what the renderer does by design |
| Codex read only, independently, before the table was written | yes | Twice: the token inventory at step 1 and the full taxonomy at step 9 |
| Both halves of step 1: the code audit and the browser census | yes | 83 variables, 459 controls, two viewports |
| 360 measured rather than intended | yes | `clientWidth === 360` on every screen of every walk, four walks |
| Consolidation decided on paper before a line of code | yes | Step 2 wrote no code |
| Rename map written at step 2, executed at step 6 | yes | Four rows, all executed |
| `tokens.css` at exactly two levels | yes | 106 primitives including 9 icons, 23 roles |
| Every role and state token paired in `[data-theme="dark"]` | yes | 23 and 23, verified twice independently |
| No new value except consolidated drift | yes | Consolidated drift was **empty**: sixteen names folded into ten steps with no value moving. The two values that did change are in the foundation review list |
| Origins carried across as they stand | yes | And one value that had none anywhere was found by both instruments and given one |
| Foundation pages before components, and reviewed before them | **partly** | The pages were built at step 4 and every component was built after them. The user's own review in the browser did not happen as a separate gate, because the whole stage was run in one pass on the user's instruction. Said out loud rather than counted as green |
| One page per component, five blocks, in the fixed order | yes | 37 pages |
| A state faked with a class the product does not wear | none | Snapshots are taken from real interaction: a real hover, a real press, a real tab |
| Snapshot unit is the difference, not the occurrence | yes | 24 snapshots: one base set on the etalon and six named deltas. Every other component carries a line of text instead |
| Three lists of the reconciliation closed | yes | Nothing missing inside the sample, nothing drawn past the system, one genuinely dead class |
| `backlog.md` written | yes | |
| Second census proving the first is closed | yes | 459 to 459, 17 families to 17, 23 forms to 23 |
| Dark theme stress tested on the full showcase | yes | Two neighbourhood findings, one fixed and one verified as harmless |
| The sample moved to `system/index.css` with a pixel proof | yes | 554 differences across 24 screens and two viewports, each one attributable to one of three named causes, nothing unexplained |
| `kit.css` deleted, no reference left | yes | |
| Coverage map honest | yes | 24 of 99 in colour, stated as a number |
| `/impeccable audit` run | yes | And its four remaining classes are accounted for above |
| Dry run over the still grey product | yes | 4 screens by hand, 75 swept, 5 holes found, all in the backlog |
| Closing ritual | yes | |

**Two rows are not green, and neither is hidden.** The user's browser review of the foundations was folded into the same pass rather than standing as its own gate, which is a change of process the user asked for and not an artefact defect. And `pixel-proof.html` was declared in the registry before it existed, which Codex caught and which is now fixed. A checklist with no amber row in it has usually been read rather than run, so it is worth saying that these two are the amber rows and everything else was checked against the file or the browser.
