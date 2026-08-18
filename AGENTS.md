# AGENTS.md

The rules of this repository live in **`CLAUDE.md`** at the root. Read it as your first move. Without it, every finding here will be a median opinion rather than a judgement about this project.

## What this repository is

Not an application: a **product design pipeline**, built stage by stage. Markdown files under `*/docs/` are the sources of truth; the html pages beside them are how a person sees the same material in a browser. Nothing here executes. The material is text, and it is checked as text.

Stage order: Foundation Research, User Research (Personas + JTBD), CJM (As-Is + To-Be), Information Architecture (Base + Detail), Wireframes, Voice, Concept, UI + Visual, Tokens + Components, Design System, Responsive, Animation, Handoff. Status lives in `README.md` and in the `done` flags of `/_nav.js`, nowhere else.

## Hard rules for a review pass

1. **Read-only.** Return findings as a list with `file:line` proof. The repository owner applies the edits after an explicit go-ahead. Do not edit files yourself unless asked in plain words.
2. **A finding without proof is not a finding.** Every claim quotes a line that genuinely exists in the file. If it does not survive a re-read, it is not submitted.
3. **General advice is noise.** "Add examples", "structure this better", "consider automating" are not findings. What is wanted is falsifiable inconsistency: a quote that contradicts another quote, a promise with no one to keep it, an artefact with no reader, a link that does not resolve, a value that drifted from its token.
4. **Your radius is the source, not the render.** Yours are the classes that can be falsified in text: contradiction between files, an orphan with no parent, a state that is not in the code, a broken link, a rule of `CLAUDE.md` that is violated, a fact with no source. Anything about how a page looks at 360px, whether a line breaks a layout, or a pixel comparison stays with the instrument that has a browser. Asked about those, you will invent a confident answer, so do not answer them.
5. **A conscious decision of this project is not a defect.** Before filing one, check `docs/decisions.md`: the reason is recorded there.
6. **Answer in Ukrainian.**

## Conscious decisions, not oversights

Full list with reasoning in `docs/decisions.md`. The ones that most often get mistaken for bugs:

- **Wireframes are grey on purpose and are never coloured in place.** `wireframes/` is frozen after the Voice stage. Colour lives in `design/` as copies. A grey screen is a finished artefact, not an unfinished one.
- **Navigation is rendered, not written.** Pages carry an empty `<aside id="sidebar"></aside>` and load `/_nav.js`. A page that declares no roadmap markup is correct; a page that declares its own `nav-*` CSS is the defect.
- **`index.html` is the entry to the folder you opened; the hub is always `overview.html`.** In `wireframes/`, `index.html` is the product home page and `overview.html` is the all-screens hub. This is not a naming slip.
- **English in internal markdown, Ukrainian in chat.** Product copy embedded in markdown (SEO blocks in `ia/docs/pages/`, the dictionary in `voice/docs/`) is in the product language, which is English here.
- **No em dash in project output files.** Deliberate, and checked.
- **`[?]` marks an honest unknown** in research files. It is a finding only if it appears in shipped product copy.
