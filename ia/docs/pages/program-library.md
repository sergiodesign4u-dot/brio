# Node 5.0 - Program library (browse + pick)

*Page node, and the exemplar for the listing template (the first listing built at Step 5). Source of truth for ia/program-library.html. Cluster 5 Programs, type: page (listing), surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06).*

## Listing template (applies to every listing page node)

A listing page adds three planks to the per-page template (0.0). Program library is the first listing built to it; 5.1 detail and any later grid follow the same shape:

- **Facet set defined in-node.** The filter values live with the listing that uses them, unless they are big enough to be a canonical global. Brio's facet set is thin (one dimension, category), so it is defined here and cross-referenced, not lifted into 0.6. See section 7.
- **The grid reuses a canonical card, never a new one.** The cells are 0.4 Program card. The listing arranges and filters cards; it does not restyle them.
- **The empty and loading states are first-class.** A listing must specify its zero-result and pre-load appearance. Here: 5.3 first-run empty (a registered node) and the 0.4 skeleton state. Neither is ever a dead-end (MS4).

---

## Page: Program library (5.0)

**Purpose:** let the operator browse the curated library and pick a program to run, with the size-matched recommendation pinned so a non-expert is guided, not dropped into a catalog. **Jobs:** Main (run wellbeing without HR training) + J6 (curated library the system runs) + item 2 (self-serve start). Persona: Priya (operator).

**URL / slug:** `/app/programs` (operator app). A category filter is reflected as a query parameter, `?category=mental-health`, for back-button and share-within-team friendliness; the canonical stays `/app/programs`. **Breadcrumbs:** none. Programs is a top-level job tab (0.1), so location is shown by the active tab, not a breadcrumb trail.

### Content blocks (mobile-first priority)

1. **Nav** (0.1, operator logged-in variant, Programs tab active) plus **page header**: H1 "Programs", one-line subhead ("Pick a program. Brio runs it and reads the team pulse for you."). First screen on mobile.
2. **Recommended-for-your-size card**: one 0.4 card in the recommended state, pinned at the top, carrying the "Recommended for your size" tag. This is the guided shortcut that closes choice paralysis for the non-expert operator. It is the page's primary action.
3. **Facet bar** (category): `All` (default) plus the four categories from 0.6. Thin, single-dimension. On mobile a horizontal chip row; on desktop a pill row. See section 7.
4. **Program-card grid** (0.4 canonical): the rest of the library as default cards. If the operator already runs programs, those cards carry status badges (active / draft / ended) in place of Select; recommended stays pinned first under the `All` facet.
5. **Empty state** (5.3, first-run, no active program): shown in place of the grid when the operator has picked nothing yet. Copy: "No active program yet. Start with the one we recommend for your size," plus the recommended shortcut and a browse-by-category hint. Never a dead-end.
6. **App shell footer** (minimal): a privacy link (1.1) and a help link, not the full public marketing footer (0.2). The operator app zone is noindex, so it carries no SEO footer.

### Components used

0.1 Navigation (operator logged-in variant, Programs tab active), 0.4 Program card (states: recommended, default / Select, active, draft, ended, skeleton), 0.6 Canonical lists (the four categories, and company-size buckets behind the "recommended for your size" match). No new component is invented; the facet set is defined in-node (section 7), not as a global.

### States

- **Guest (not authenticated):** the page is behind auth. A guest hitting `/app/programs` is redirected to 2.1 Log in, then returned here. Not a public state.
- **Operator, first run (empty):** no program picked yet, so the grid area shows 5.3 empty with the recommended shortcut. Never a dead-end.
- **Operator, active (default):** recommended pinned first, then the library grid; cards for programs the operator runs show status badges.
- **Loading:** the grid renders 0.4 skeleton cards until the library resolves.
- **Error:** if the library fails to load, show a short "Could not load programs, retry" with a retry control and a link back to 4.0 Dashboard, never a bare dead-end (MS4).
- **Owner role:** Programs is an operator surface; an owner who lands here is sent to 9.0 Owner dashboard. Owners do not manage programs.

### Filters / facets (listing only)

- **One facet: Category.** Single-select, with an `All` default. Values from 0.6 canonical lists: Mental health, Physical, Financial, Social. Defined in-node because the set is thin and used mainly here; a change to the category list happens in 0.6 and propagates.
- **Behavior:** filtering is a client-side narrowing over a small curated set. It changes which 0.4 cards are shown; it never changes a card (per the 0.4 "where it is used" contract). Selecting a category filters to that category; the recommended pin stays first only under `All`, and within a filtered category the size-recommended program, if present, sorts first.
- **No search, no pagination, no sort control** in the MVP. The library is small and curated, so browse plus one facet is enough; this is the concrete reason 11.5 Global search is likely N/A (confirmed or closed at Step 6). A future sort ("recommended / newest") is deferred [?], not built.
- **Zero result:** a category with no programs shows a short "Nothing here yet, see all programs" that clears the facet back to `All`. Never a dead-end.

### Primary CTA

Pick the recommended program (the pinned card's Select / Confirm) to 5.1 Program detail. Secondary: browse by category, or Select any other card, also to 5.1.

### Adaptive (mobile-first)

- **Mobile, base 360px:** header, then the recommended card full width, then the facet bar as a horizontal-scroll chip row, then the grid as a single stacked column. The pinned recommendation and its one action are within the first screen.
- **Desktop, 900px and up:** header and subhead, the facet bar as an inline pill row, and the grid at two to three columns (auto-fill), recommended pinned in the first cell with its tag.

### SEO block (noindex)

Program library is inside the operator app, a private zone. It is **not indexed** and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org. Reason: authenticated, per-account application view, not a public landing page.
- **In-app findability (not SEO), still specified:** exactly one H1 ("Programs") for the accessible document outline; the facet controls are labeled controls, not color-only; every card is one crawlable in-app `<a>` to 5.1 with the title as its accessible name; the recommended tag and status badges are text, not color alone; tap targets at least 44px.
- **If a public "programs overview" or a 1.5 category landing ever renders these cards,** that page is indexable and gets its own A-E SEO block and schema decision at its own node, not here.

## Canonical reuse and next

Program library reuses 0.1, 0.4, and 0.6 and invents nothing; it defines only the thin in-node facet set. It also sets the listing template above, which 5.1 and any later grid follow. Next page: 5.1 Program detail / manage (the card opened into a full page), per the persona-priority order.
