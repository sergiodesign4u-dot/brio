# Wireframes - Conventions (Stage 04)

*The contract shared by every screen and every subagent. It inherits from the IA Detail Layer, it does not start a new style. If a wireframe visually or structurally diverges from the IA anatomy it continues, that is a defect, fixed here or upstream in the IA. Read this before drawing any screen. Sources: ia/docs/sitemap.md, ia/docs/flows.md, ia/docs/pages/*.md, wireframes/docs/screens.md, and the IA HTML pages (ia/*.html) as the style source.*

---

## 1. Inheritance from the IA (reference, do not reinvent)

The IA node pages (ia/*.html) already contain a black-and-white wireframe kit (the `.wf-*` classes) plus the grey token palette and the roadmap sidebar. Stage 04 lifts that kit into standalone, full-screen, clickable pages. We inherit, not invent.

- **Stylesheet:** one shared sheet, `wireframes/_wf.css`. It carries the IA `:root` tokens, the roadmap sidebar, the main layout, the grey wireframe kit, and the state panel. Every screen links it in `<head>`; anything truly per-screen is a small inline `<style>`. Do not start a second stylesheet or a new visual language.
- **Text:** from each node's A-E SEO block in ia/docs/pages/<node>.md (ready H1, headings, and body copy). This is why there is no lorem ipsum: the real product text already exists in the IA. Carry it verbatim, do not translate or rewrite it.
- **Components:** 0.1 Navigation, 0.2 Footer, 0.3 Privacy-disclosure, 0.4 Program card, 0.5 Dialog shell, 0.6 Canonical lists are IA nodes. Include a component once and reuse it; never redraw the header or a card per screen. Change the canon once, propagate to every copy.
- **Viewports:** mobile base 360px and desktop, on every screen, using the same "§01 desktop / §02 mobile" split the IA specs already use.

## 2. The grey contract (structure, not look)

- **Allowed palette:** only the greyscale scale defined in `_wf.css` as the `--wf-*` tokens (ink, panel, line, edge, stroke, and the text greys, plus white and the filled-control grey). No brand color, no type choice, no icon set, no shadow, no image, no finished UI on the screen body. Color, brand, and imagery arrive at Concept (stage 06), applied to COPIES in ui-visual/, never to these files.
- **One exception, the portfolio sidebar:** the roadmap sidebar is inherited portfolio chrome and keeps the IA accent for its active-nav state, exactly as every other stage page (research, IA) does. The grey rule governs the SCREEN body (the product wireframe in `<main>`), not the portfolio sidebar around it.
- **Semantic HTML:** real `header`, `nav`, `main`, `section`, `article`, `form`, `button`, and labelled inputs, not a pile of `div`s. Buttons and fields are real elements. This is the first layer of product code, so it must read like code that grows into UI, not like a picture of one.

## 3. Page anatomy (every screen file)

Each screen file is thin: the shell comes from `_wf.css` and `_nav.js`, and only the screen body is unique.

1. **Roadmap sidebar** (portfolio nav): the same accordion sidebar as all stage pages, with Wireframes the expanded active group (Flow 1..N + All screens) and the earlier groups (Foundation, User Research, IA) each collapsed to one link. Markup and links come from `_nav.js`.
2. **State panel** (`.wf-bar`, a thin bar at the top of `<main>`): the node number and name, the current state, chips linking the sibling states of the same screen, and a link back to the flow entry. Rendered from `_nav.js`. This is the prototype's flow-first nav, not a second product rail.
3. **Screen body:** the product wireframe at real proportions, shown in two labelled viewports, §01 Desktop (`.wf-page`) and §02 Mobile 360 (`.wf-phone`), both grey, both semantic, both carrying the real `<a href>` links along the flow. Block priority is reasoned from the 360px baseline up; the desktop frame may use multi-column, the mobile frame stacks.

## 4. File naming

- Latin, from the node basename in ia/docs/sitemap.md (the same basenames the IA HTML already uses: home.html, signup.html, onboarding-company.html, dashboard.html, team-pulse.html, and so on).
- The base file `wireframes/<name>.html` is the primary state (success, or for a form or wizard node the ready form the user acts from, since success there is a forward redirect, not a page).
- Each real state is its own page: `wireframes/<name>-<state>.html` (`-empty`, `-error`, `-loading`, `-<role>`, `-<domain>`). The exact list is the "State to wireframe file" map in wireframes/docs/screens.md. A state not in that map is not drawn.

## 5. States (first-class, and more than four)

- **Floor:** empty, error, loading, and the base (success or ready) state.
- **Plus** the real role, domain, and transient states from the node's "States" section in its IA spec (guest or role redirects, pre-minimum-N, cycle-open no-live-count, pending invites, sending, and so on).
- **Each state is a separate page** so the prototype can navigate between them; same structure, different content.
- **Every state has a visible exit** (no dead-ends), checked against ia/docs/flows.md: empty routes to a fix, error offers retry, loading resolves to success.
- **Success is not automatic** and a state absent from the IA spec is not invented. A hole found while building is fixed in the IA spec first, then rendered.

## 6. Navigation (flow-first)

- The "All screens" index (wireframes/index.html) doubles as the coverage map (built vs still in spec); it plus the thin state panel plus the flow entries are all rendered from the single source wireframes/_nav.js.
- No extra product-navigation rail inside the prototype; the portfolio roadmap sidebar is the only rail, and it must not fight the screen layout.
- A screen's primary action is a real `<a href>` to the next screen along ia/docs/flows.md; branches go both ways (a "no" leads somewhere real and back, a "yes" leads on); no dead ends anywhere.

## 7. SEO layout validation (layer 2)

- The IA set the SEO structure (layer 1). Here we only validate layout: every A-E block has a visible place and the right priority, there is exactly one H1, and breadcrumbs, SEO body text, and FAQ are not hidden. This is a check, not an invention; a gap is fixed in the IA.
- Private and transactional zones (auth, the operator app, the employee check-in) are noindex with no schema, but still carry exactly one H1 for the accessible outline.

## 8. Deferred to stages 06 to 08

Color, type, shadows, icons, images, finished UI. Grey now. If any of these appears on a screen body, return it to grey per this file.

## 9. Language and formatting

- The product HTML uses the same language as research.html (the product language); the A-E text is carried verbatim from the IA nodes, not re-translated.
- Internal md (this file, screens.md, critique.md, CLAUDE.md, README.md) is English.
- No em dash (the long dash) anywhere in any output file, in any language: use commas, periods, or a spaced hyphen.

## 10. The allowed grey palette and placeholder textures (for the Step 9 critique)

So auditors do not false-flag the project's own placeholder textures as leaked "color," the grey contract is:

- **Greyscale tokens** (the only allowed values on a screen body): `--wf-ink` #0a0a0a, `--wf-panel` #0c0c0c, `--wf-panel-2` #131313, `--wf-line` #2c2c2c, `--wf-line-2` #1f1f1f, `--wf-edge` #3a3a3a, `--wf-stroke` #7a7a7a, `--wf-solid` #e6e6e6 with ink `--wf-solid-ink` #111, and the text greys `--wf-t-hi` #ffffff, `--wf-t` #cfcfcf, `--wf-t-2` #e6e6e6, `--wf-t-mid` #9a9a9a, `--wf-t-lo` #6a6a6a.
- **Placeholder textures** (structure, not color): dashed-border frames mark a state or empty area (`.wf-state`, `.wf-strip2`), solid-grey filled controls mark the primary action (`.wf-btn.solid`), and grey bars mark a skeleton or a trend spark. These are wireframe grammar, not decoration.
- **The portfolio sidebar accent** is inherited IA chrome and is out of scope for the grey-screen audit.
