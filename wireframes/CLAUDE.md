# wireframes/ - local rules

*Loaded only while Claude reads something in this folder, and not re-injected after a compact. The root `CLAUDE.md` repeats the first line, because that is the one that is catastrophic to forget.*

1. **This folder is frozen.** Voice (stage 05) was the last stage allowed to edit it. Stages 06 and later work on coloured copies in `design/`, never here.
2. **Grey only.** No colour, type, brand, icons or shadows. The greyscale scale in `_wf.css` is the only palette a screen body may use.
3. **A screen is one responsive page**, not a device mockup and not two frames. It reflows from 360px up with real media queries.
4. **Exactly one main action per screen.**
5. **Nothing is invented here.** Text comes from the node's SEO block, components from IA nodes, states from the node's States section, links from `flows.md`. A hole found while building is fixed in the IA first, then rendered.
6. **`index.html` is the product home (node 0.0); `overview.html` is the all-screens hub.** Never the other way round.
7. **Navigation is rendered from `_nav.js`.** A screen page carries one empty `<aside id="wf-panel">` and one `BRIO_WF.render()` call. Adding a screen means a row in the registry, not new markup.
