# Decisions

*Not loaded into any session. Referenced by path, never with `@`. This is where the reasoning lives so that `CLAUDE.md` can stay a list of rules: what we did, why this way, what we rejected and on what grounds. A reviewer who thinks they found a defect checks here first.*

---

## D-01 - Aggregation is structural, not a setting

**Decided:** stage 01, held ever since. The owner and the operator never see a named individual. A score appears only once at least 5 people have answered.

**Why:** in a company with no HR there is no layer between the boss and personal data. If aggregation were a toggle, the promise would be worth exactly as much as the person holding the toggle. Making it structural is the product.

**Rejected:** per-individual drill-down, named timelines, leaderboards. They close no core job and they break J3 (certainty of privacy before responding). The legal validation of "5" is deferred, and the number is marked as an MVP default rather than a legal finding.

---

## D-02 - No live response count during an open cycle

**Decided:** founder decision, June 2026. Neither the operator nor an employee sees a running tally while a cycle is open.

**Why:** in a team of eight, a count that moves right after one person answers identifies that person. The timing-inference vector is specific to small teams, which is exactly our market.

**Rejected:** showing the count to the operator only. It leaks the same signal to the one person whose curiosity the whole privacy model is built against.

---

## D-03 - Wireframes are never coloured in place

**Decided:** stage 04, reaffirmed when planning stage 06. `wireframes/` is grey, and it is frozen after the Voice stage. Colour arrives as copies in `design/`.

**Why:** a stage that overwrites the previous stage's artefact destroys it. If colour landed on the grey files, the grey prototype would stop existing and the "Wireframes: Done" row would start lying. Copies keep the change reversible and let the grey and the coloured screen be shown side by side.

**Rejected:** colouring in place, as the base course lesson does.

---

## D-04 - The sidebar theme carries nine knobs, not eight

**Decided:** 5 August 2026, while building `/_nav.css`.

**Why:** the pipeline names eight theme variables (`--nav-fg`, `--nav-active`, `--nav-muted`, `--nav-rule`, `--nav-badge`, `--nav-w`, `--nav-size`, `--nav-lh`). None of them is the panel surface, and the panel needs one: Brio's pages are dark, and a sidebar with no background of its own would sit transparently over page content on mobile, where the panel overlays the page.

**Rejected:** hardcoding the background inside a `nav-*` rule. That is the exact thing the knobs exist to prevent - the next theme change would need a rule edit rather than a variable edit.

---

## D-05 - Wireframe screens move from a top strip to a side tree

**Decided:** 5 August 2026, superseding the stage 04 decision.

**Why:** stage 04 gave each screen a sticky top strip (node number, current state, sibling-state chips, All screens) and no side panel, on the argument that a prototype screen should be clean chrome-free. With 47 screens and 99 states, a strip cannot show where a screen sits in the product: it shows the siblings of one state and nothing above them. The pipeline contract asks for a wireframe-only side panel with a three-level tree (IA cluster, screen, states), an accordion that opens only the current node, and a link back to the hub. That answers "where am I" without making the reader look at the URL.

**Rejected:** keeping the strip and recording it as a named deviation. It was a real option, and the reason it lost is that the strip's weakness grows with the product, and this product is already at the size where it hurts.

**Consequence:** `wireframes/_nav.js` is reworked and every screen re-renders from it. The grey contract is untouched - this is chrome around the screen, not the screen.

---

## D-06 - User Research merges into `research/`

**Decided:** 5 August 2026. `user-research/` is gone; `personas.html`, `jtbd.html`, `cjm-as-is.html`, `cjm-to-be.html` and their markdown now live beside stage 01 in `research/`.

**Why:** the folder convention groups by what is read and edited together, not by which stage produced it. `research.md` is amended by stage 02, and `personas.md` is amended by CJM. They belong in one folder for the same reason `design/` will hold stages 06 to 11.

---

## D-07 - `ia/concept.html` becomes `ia/concept-map.html`

**Decided:** 5 August 2026.

**Why:** with stage 06 arriving, "concept" means the visual language and lives at `design/concept/concept.html`. One word cannot mean the IA concept map on one page and the visual concept on the next; "open the concept page" stops being an answer.

---

## D-08 - `index.html` is a product home, `overview.html` is a hub

**Decided:** 5 August 2026. In `wireframes/`, the former hub `index.html` is now `overview.html`, and the home screen wireframe is `index.html`.

**Why:** the rule is one meaning per name across the whole project. Opening a stage folder should land on the product's home page; the list of every page is always `overview.html`. Before this, `index.html` meant "hub" in `wireframes/` and would have meant "home page" in `design/`, in adjacent folders.

**Consequence:** node 0.0 Home is served from `wireframes/index.html`, and the 15 references to `home.html` were rewritten.

---

## D-09 - `design/` is the roof of the visual half

**Decided:** 5 August 2026. The root `concept/` folder moved to `design/concept/`.

**Why:** stages 06 to 11 all write into one place, and the values line (plate pixel, theme file, kit, tokens) moves through it without being re-derived. Product pages live flat in `design/`; supporting material lives in subfolders (`concept/`, later `kit/`, `system/`, `visuals/`).

---

## D-10 - Empty stage folders are not created ahead of time

**Decided:** 5 August 2026. `animation/`, `design-system/`, `handoff/`, `responsive/`, `tokens-components/` and `ui-visual/` were deleted, along with their `.gitkeep` files.

**Why:** the route of the project is shown by the registry (`/_nav.js`, with Next and Soon badges) and by the status table in `README.md`. An empty folder adds nothing to that and takes something away: it looks like started work, and it fixes the internal structure of stages 09 to 12 before those stages get to decide it. Stages 10 and 11 grow inside `design/`; stage 12 creates `handoff/` itself.

---

## D-11 - Scope boundary: the three questions, answered

**Decided:** 5 August 2026, answering the questions stage 01 is supposed to ask before anything else.

- **Second language: no.** Brio is English only. Nothing about hreflang, URL structure per language, per-language voice or microcopy keys applies. If a second language is ever wanted, the honest place to decide it was stage 03a, and adding it later means rewriting every IA node.
- **Existing brand or design system: no.** There is no logo, palette, typeface or token set to inherit, so stage 06 takes the "nothing exists yet" route: three brand plates, one chosen.
- **Product size: 47 screens, 99 state pages.** Far above the ~8-screen floor below which stages 07 to 09 stop paying for themselves.

---

## D-12 - The wireframe etalon is 4.0 Dashboard

**Decided:** stage 04. Not the first screen of the main flow, but the working horse with the most reuse: it sets the operator app shell and the pulse card (reused on 4.1, 4.2, 9.0, 9.2) and carries the richest state set.

**Why:** a defect caught on the etalon is fixed once; the same defect found after roll-out is fixed 47 times. The screen with maximum reuse is therefore worth more as an etalon than the screen a user sees first.

---

## D-13 - Brio looks like a privacy product, not a wellness brand

**Decided:** stage 06, steps 1 and 2. Base reference Signal; restraint from Apple; product-as-proof and single-accent discipline from 1Password.

**Why:** the strategic dimension named at stage 01 is employee trust in the aggregate-only model, made visible in the UI. A wellness look undercuts that on sight.

**Rejected:** the category reflex - cream, sage, rounded blobs, soft illustration. It can be guessed from the category without looking at a single line of our data, which is the definition of a model reflex rather than a decision.

---

## D-14 - Brand plate A, chosen with its risk named

**Decided:** stage 06, step 3, by the user, 18 August 2026. Six plates were generated in two rounds; A is the base.

**Why A:** a light airy surface, one blue accent used only for action, soft cards, real photography. It answers A1 (calm, not clinical), A3 (one accent as the single interactive colour) and A5 (human rather than faceless), and it sits closest to Signal, the base direction confirmed at step 1.

**The risk, accepted knowingly:** a cornflower blue accent sits near the category reflex D-13 warns about. The differentiation is therefore carried by the mechanism zones and by restraint, not by hue. If the accent ever reads as anonymous, the honest fix is to shift the blue, not to add a second colour.

**Rejected, and why:** B, indigo and uppercase, enterprise theatre. C, amber on the primary action reads as a warning. D, light teal, the strongest rival, kept as the source of the alert colour. E, graphite, a dark base where the base is fixed light; available later as a dark register. F, plum and moss, editorial and half a step back toward the wellness palette.

**Also decided here:** two things on plate A do not ship. Its headline "Your privacy is our priority" is a promise where A2 requires the mechanism to be shown, and its stock meeting photograph is the stock smile A5 rejects.

---

## D-15 - Layout direction 02, the working desk

**Decided:** stage 06, step 5. Two columns: the pulse, the participation, the privacy line and the next program on one screen without scrolling.

**Why:** it is the composition the operator lives in weekly, and the owner review is meant to take two minutes. A4 survives the density because the read and the next step stay inside the pulse card and never split into a bare metric tile.

**The standing constraint that comes with it:** density is the shortest path to the clinical feel A1 rules out, so every row added to the rail has to earn its place.

**Rejected, and kept:** 01, a single wide column, is calmer but pushes participation and the privacy line below the fold on the screen used weekly. It remains the right shape for the employee check-in, where there is one question and one action. 03, the evidence band, expresses A2 most strongly, but a permanent proof panel competes with the one main action per screen; its panel survives as a pattern on the privacy surfaces.

---

## D-16 - There is no success colour in this language

**Decided:** stage 06, steps 6 to 8, while colouring the confirmation screens.

**Decided:** Brio has an alert colour and no success colour. A confirmation states the fact in ink and in the soft accent, and never celebrates.

**Why:** voice principle P3, honest signals and never flattering ones. A green success state is the product congratulating itself for a person answering one question about a hard week. The same reasoning removed the coloured bar down the side of the alert banner: a dip is marked by the warning icon and the tag, then described in words.

**Consequence:** the only semantic colour in the palette is the alert red, and it is still a candidate carried from plate D. It is fixed for good at stage 07, where every error state lives.

---

## D-17 - The sample is seven screens, chosen by what they add

**Decided:** stage 07, step 5. The screens coloured are Home, Programs and its empty state, Team and its manage dialog, Sign up and its error, Contact and its confirmation, beside the Dashboard with six states and the whole employee check-in from stage 06. Twenty-four state pages of ninety-nine.

**Why these:** the criterion is not "representative", it is how many different components and how many of the heaviest layouts they cover between them. All three levels of the ladder had to appear, plus the densest screen, a form, a list, and an empty or error state. A screen that adds no new component was not taken, because it proves nothing.

**The signal that stopped it:** the kit stopped growing on the sixth screen. Sign up and Contact added arrangements, not components. That is the saturation signal the pipeline asks for, so the sample stops at seven rather than running on.

**What this costs, stated plainly:** the roll-out at stage 12 will build the other 75 state pages. That is deliberate. A screen is built once, when the system, the responsive rules and the motion already exist, rather than three times.

---

## D-18 - The kit keeps the wireframe class names

**Decided:** stage 07, step 3, against the letter of the stage pack, which says not to carry the `wf-` scaffolding into the kit.

**Why:** every product screen in `design/` is a copy whose markup must match its grey original class for class. That diff is the only proof that a copy owns the visual layer and nothing else, and it is checked on all 24 pairs. Renaming the classes in the kit would break the proof on every screen at once, and would have to be repeated for all 75 screens still to come.

**What it costs:** the kit carries a prefix that says "wireframe" while holding the product's real values. Stage 08 splits the file and may rename then, when a rename can be done once for the whole system rather than screen by screen.

---

## D-19 - Photography explains the product from outside, and stays out of the interior

**Decided:** stage 07, step 6, resolving a divergence between attribute A5 and the mockups.

**Decided:** photographs live on the public surfaces and the sign-up panel, and in any wireframe that holds a media slot. Inside the operator dashboard and the employee check-in there is none.

**Why:** a picture of strangers on the screen where somebody reports a hard week is decoration, and A3 rules decoration out. A5 grew from "a knowledgeable peer, not a data terminal", and a peer speaks plainly rather than decorating the room. Inside, the human register is carried by wording, by the human scale of the type, and by the soft accent.

**Also decided here:** the imagery is Brio's own from now on, generated in one recorded colour grade rather than taken from stock, with the prompts kept in `design/visuals/README.md` so the style is reproducible. The trade is stated in that file: the product gets consistent imagery of its own and gives up any claim that these are real customers.

---

## D-20 - Two levels of token, and the class names stay

**Decided:** stage 08, steps 2 and 3.

**Decided:** `design/system/tokens.css` has exactly two levels, primitive and semantic. Colour is read only through a semantic role; geometry is read from primitive directly. A component token is created point by point, only where a state lands on no existing role, and this stage produced **zero** of them, because every state landed.

**Why not three:** a blanket component level is a third set of names to rename through and buys nothing. Changing the colour of a button would mean opening three files instead of one.

**Why colour and geometry differ:** what a role exists for is being overridden. A theme and a rebrand override colour. A radius and a spacing step have nothing to override, they simply repeat.

**D-18 is extended rather than overturned.** The system keeps the `wf-` class names. Stage 07 kept them so that a normalised diff of each coloured copy against its grey original could prove that the copy owns the visual layer alone; that proof is worth more than a tidier prefix, and it will be worth more again at stage 12, when 75 more screens are built from the same grey markup. The rename map of step 2 therefore has four rows, and three of them change no markup at all: what they change is which file a rule lives in.

---

## D-21 - The three changes of look, and the rule that made them findable

**Decided:** stage 08, step 4.

**Decided:** three things look different after this stage, and nothing else does.

1. `--line-control` went from `rgba(91,97,113,.28)` to `.70`. It is the whole visible boundary of five controls and it measured **1.5:1** where WCAG 1.4.11 asks 3:1.
2. The selected chip's border went from transparent to the action colour. Its soft accent fill measures 1.87, and a state signalled by one fill below 3:1 is not signalled.
3. The program library's grid lays out, because `--size-progcard` was referenced at `kit.css:638` and declared nowhere, which made the whole `grid-template-columns` declaration invalid.

**Why they were invisible until now:** stage 07 measured contrast and reported none failing, and that report was honest for what it measured, **every text node against its resolved background**. A border is not a text node. The third axis of stage 08, ink against fill against line, is what put the question to it, and each surface brought its own threshold.

**What is not in this list, deliberately:** `--line-hover` was re-pitched in the dark theme at step 7. The pixel comparison runs in the light theme, where that value did not move, so it is counted in the theme line of the proof page instead of in the three named lists.

---

## D-22 - The dry run finds holes and builds nothing

**Decided:** stage 08, step 9.

**Decided:** the paper pass over the still grey product found five classes standing on two or more grey screens that the system does not have, and **none of them was built**. Every one went to `design/kit/docs/backlog.md` with a reason and stage 12 named as the closer.

**Why not build them:** all five are **variant questions rather than missing components**. In each case the system already holds the family and what is unknown is whether the grey screen shows a new value on an existing axis or a new anatomy, and that is answered by colouring the screen. Building five components to be safe would put five rows in the registry that the roll-out then has to merge back, and a merge costs more than a gap that is written down.

**What it buys:** stage 12 starts from a list of five known questions instead of a blank sheet, and the first act on each is a decision recorded in the inventory before any css is written.
