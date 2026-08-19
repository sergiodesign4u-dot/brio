# Brio

Employee wellbeing SaaS for small businesses with no HR team. Gives the person handed "people stuff" a guided way to run real wellbeing programs, and gives the owner honest proof it is working - at the team level only, never surveilling any individual.

**Start here:** https://sergiodesign4u-dot.github.io/brio/ - the project entry, with every stage and its status.

## Live pages

- **Foundation Research:** https://sergiodesign4u-dot.github.io/brio/research/research.html
- **Personas:** https://sergiodesign4u-dot.github.io/brio/research/personas.html
- **Jobs to Be Done:** https://sergiodesign4u-dot.github.io/brio/research/jtbd.html
- **CJM As-Is:** https://sergiodesign4u-dot.github.io/brio/research/cjm-as-is.html
- **CJM To-Be:** https://sergiodesign4u-dot.github.io/brio/research/cjm-to-be.html
- **IA Base Layer - Flows:** https://sergiodesign4u-dot.github.io/brio/ia/flows.html
- **IA Base Layer - Concept map:** https://sergiodesign4u-dot.github.io/brio/ia/concept-map.html
- **IA Detail Layer - Sitemap:** https://sergiodesign4u-dot.github.io/brio/ia/sitemap.html
- **IA Detail Layer - Structure:** https://sergiodesign4u-dot.github.io/brio/ia/structure.html
- **Wireframes - All screens:** https://sergiodesign4u-dot.github.io/brio/wireframes/overview.html
- **Wireframes - Product home:** https://sergiodesign4u-dot.github.io/brio/wireframes/index.html
- **Voice:** https://sergiodesign4u-dot.github.io/brio/voice/voice.html
- **Concept - Directions:** https://sergiodesign4u-dot.github.io/brio/design/concept/directions.html
- **Concept - The stand:** https://sergiodesign4u-dot.github.io/brio/design/concept/concept.html
- **Concept - The etalon in colour:** https://sergiodesign4u-dot.github.io/brio/design/dashboard.html
- **Concept - The check-in in colour:** https://sergiodesign4u-dot.github.io/brio/design/checkin-privacy.html
- **UI + Visual - Coloured screens:** https://sergiodesign4u-dot.github.io/brio/design/overview.html
- **UI + Visual - Component kit:** https://sergiodesign4u-dot.github.io/brio/design/kit/kit.html
- **UI + Visual - Product home in colour:** https://sergiodesign4u-dot.github.io/brio/design/index.html

---

## Project Status

*This table and the `done` flags in `/_nav.js` are the only two places that hold status. `CLAUDE.md` holds no status at all.*

| Stage | Status |
|-------|--------|
| Foundation Research | Done (competitors, benchmark, Lean UX Canvas, AARRR, UX patterns, research synthesis, research.html) |
| User Research (Personas + JTBD) | Done (personas, jobs to be done, JTBD matrix, MVP core, personas.html, jtbd.html) |
| CJM (As-Is + To-Be) | Done (customer journey map As-Is + To-Be, emotional curve, backlog, cjm-as-is.html, cjm-to-be.html) |
| Information Architecture (Base + Detail) | Done (Base Layer: flows.html + concept-map.html. Detail Layer: sitemap.html + structure.html + all node specs in ia/docs/pages/ + ia/<node>.html) |
| Wireframes | Done. Grey clickable prototype of the whole product: overview.html (all-screens hub + coverage map), index.html (product home), 47 of 47 screens, 99 state pages, shared grey _wf.css. Every internal link resolves; greyscale and one-H1 clean; audited in wireframes/docs/critique.md. |
| Voice | Done. The rules by which Brio speaks, applied to all 99 screens. voice/docs/voice.md (tone, five principles, dictionary, forbidden, microcopy rules), voice/docs/microcopy.md (full text inventory with was/now), voice/voice.html. Only text changed, never markup. |
| Concept | Done. The visual language, proven on the screen rather than described in a table. Brand plate A and layout direction 02 chosen; root DESIGN-artifacts.md holds the brand with an origin on every value; design/concept/ carries the references, the attributes, the three layout directions and the concept stand; design/_theme.css was the single place a value lived at the time (it has since moved twice, to design/kit/kit.css and then to design/system/tokens.css); 15 coloured copies in design/ (4.0 Dashboard with six states, the employee check-in with eight screens) with zero structural drift from the grey originals. Critique in two instruments plus the mechanical detector, log in design/concept/docs/critique.md, summary on the stand. |
| UI + Visual | Done. The language became a kit. Root DESIGN.md (product tokens from real code, each with an origin), design/kit/ (inventory read from all 99 wireframes with levels and a control census, the flat kit, shell markup, showcase, critique log), design/visuals/ (Brio's own imagery, one grade, prompts recorded), design/overview.html with an honest coverage map. Critique in three instruments, contrast clean on every text node, 360 measured. **24 of 99 screens are in colour; the other 75 stay grey and wait for the roll-out at stage 12.** |
| Tokens + Components | Done. The kit became a system. design/system/ (tokens.css at two levels, 106 primitives and 23 colour roles, every role paired in a dark theme; base.css, layout.css, oneoff.css; index.css importing by level; 37 component files), design/kit/ (five foundation pages, a page per component with five blocks, the hub, docs/). The look did not change except in three named places, and every one of 554 measured differences across 24 screens and two viewports is attributed to one of them. Critique in two instruments plus the detector plus a contract checklist; contrast clean in both themes on 24 screens and 45 stand pages; a dry run over the still grey product put five holes in the backlog. |
| Design System | Not started |
| Responsive | Not started |
| Animation | Not started |
| Handoff | Not started |

---

## Concept, the visual language

Brio looks like a privacy product, not a wellness brand. That is the argument of stage 06, and every value traces back to it or it is not there.

- **Brand:** plate A of six, generated in two rounds. The palette is sampled from the pixels of the image, not from the captions printed on it, and where the two disagreed the pixel won. Six values: paper `#F7F8FC`, surface `#FFFFFF`, ink `#1D1D1D`, soft accent `#A4BEF3`, action `#346FEC`, muted `#5B6171`. One accent, and only for action.
- **Type:** Inter Tight for display, Inter for body, chosen against the character of the plate rather than copied from a name drawn on it.
- **Layout:** direction 02, the working desk, the composition the operator lives in weekly.
- **Where a value lives:** one file at a time, and the file has moved twice by `git mv` with the values untouched: `design/_theme.css` at stage 06, `design/kit/kit.css` at stage 07, and `design/system/tokens.css` since stage 08. `DESIGN-artifacts.md` is the written record of the brand, `DESIGN.md` of the product language, and the concept stand is the live one.
- **What is proven on a real screen:** the etalon 4.0 Dashboard with all six states, and the employee check-in with all eight, as coloured copies. `wireframes/` stays grey and untouched, and a normalised diff of every copy against its original reports zero structural drift.
- **What is not:** photography never reached a product screen, because adding an image means adding an element and a copy owns the visual layer alone. Attribute A5 is proven on the stand only, and the first product screen with a real photograph belongs to stage 07.

## Tokens and components, the system

The same look, a new architecture, and the honesty test of the stage is that the product did not change except where it was written down that it would.

- **Two levels of token, not three.** primitive says what the value is and where it came from; semantic says why the colour is here and which surface it paints. Colour goes through a role because a theme replaces colour; geometry is read from primitive directly because it has nothing to override.
- **Every role is paired.** 23 roles and 23 dark values, written in the same breath, and the pair is deliberately not a mirror: the focus ring takes a lighter blue in the dark, a recessed surface goes darker than its card in the light theme and lighter in the dark one.
- **One file per component, imported by level.** atoms, then molecules, then organisms, and the content grid last because it holds other organisms. Alphabetical order would load a composite above its own parts and the first context fix would be treated with `!important`.
- **A new component is five things:** css, a page, a registry row, an inventory row with the level, and an `@import` in the group of its own level.
- **Three named changes of look**, and nothing else: the boundary of a control raised from 1.5:1 to 3.19:1, the selected chip given a 3:1 boundary, and a program grid that finally lays out because `--size-progcard` had been referenced and never declared.
- **What the split surfaced:** a rule that only worked by accident of position in a flat file. `.wf-auth-proof .wf-ico` was dead under source order and would have come alive under level order.
- **What is open:** five classes that stand on two or more still grey screens and that the stage 07 inventory never recorded. They are in `design/kit/docs/backlog.md` with a reason each, and stage 12 starts with them.

## People

Primary persona is Priya, the operator handed "people stuff" with no HR training. Secondary is Marcus (owner, ROI judge, drives renewal); the end user is Yemi (employee, the participation engine). The MVP core is three jobs: run wellbeing without HR training, know if the team is struggling early, and feel competent as a people person. Full detail in research/docs/personas.md and research/docs/jtbd.md.

The CJM (As-Is + To-Be) maps Priya's journey end to end: the deepest As-Is low is distrust of anonymity in a small team (the trust gate), which the To-Be path closes with the privacy bundle - visible disclosure, minimum-N of 5, and no live response count. It refines the MVP into a traced backlog of 7 core plus 3 supporting features. Detail in research/docs/cjm-as-is.md and research/docs/cjm-to-be.md.

---

## How the repository is organised

- `/_nav.js` and `/_nav.css` - the single navigation registry and its look. Every page renders its sidebar from these; adding a page means one row in the registry.
- `/index.html` - the entry to the project.
- `CLAUDE.md` - the rules that must hold in the next session. No status, no history.
- `docs/decisions.md` - what we did, why this way, and what was rejected. Never loaded into a session.
- `AGENTS.md` - the entry for the Codex reviewer, so a second instrument knows the conscious decisions of this project.
- Each stage folder: `docs/` for markdown sources, the pages flat beside it, `screens/` where screenshots are needed.

## Key documents

- [Project rules](CLAUDE.md) - [Decisions](docs/decisions.md) - [Retrofit audit](docs/retrofit-audit.md)
- [Lean UX Canvas](research/docs/lean-ux-canvas.md) - [Research synthesis](research/docs/research.md) - [AARRR](research/docs/aarrr.md) - [Competitors](research/docs/competitors.md) - [Benchmark](research/docs/benchmark.md) - [UX Patterns](research/docs/ux-patterns.md)
- [Personas](research/docs/personas.md) - [Jobs to Be Done](research/docs/jtbd.md) - [CJM As-Is](research/docs/cjm-as-is.md) - [CJM To-Be](research/docs/cjm-to-be.md)
- [IA Sitemap](ia/docs/sitemap.md) - [IA User Flows](ia/docs/flows.md) - [Block bank by page type](ia/docs/blocks.md)
- [Wireframe conventions](wireframes/docs/conventions.md) - [Screen matrix](wireframes/docs/screens.md) - [Critique log](wireframes/docs/critique.md)
- [Voice](voice/docs/voice.md) - [Microcopy inventory](voice/docs/microcopy.md)
- [Concept references](design/concept/docs/references.md) - [Concept](design/concept/docs/concept.md)

Supporting history (superseded, kept for provenance): research/strategy.md, research/product-model.md, research/quality-check.md, research/live-research.md.
