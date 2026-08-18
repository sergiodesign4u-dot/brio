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
| Concept | In progress. Brand plate A chosen and layout direction 02 chosen. Root DESIGN-artifacts.md holds the brand with an origin on every value: palette sampled from the pixels of the plate, Inter Tight and Inter, icon language, UI tone. design/concept/directions.html shows the three layout directions; design/concept/concept.html is the stand (language live, attributes, palette with measured contrast, typography, shape, photography, icons, brand and references, three components). Remaining: design/_theme.css and the two coloured screens. |
| UI + Visual | Not started |
| Tokens + Components | Not started |
| Design System | Not started |
| Responsive | Not started |
| Animation | Not started |
| Handoff | Not started |

---

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
