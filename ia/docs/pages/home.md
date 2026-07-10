# Node 0.0 - Home (marketing home)

*Page node, and the exemplar for the per-page IA template. Source of truth for ia/home.html. Cluster 0, type: page, surface [pub]. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06).*

## Per-page IA template (applies to every page node)

Every `pages/<name>.md` follows this order:

1. Page name, type, node number, surface
2. Page purpose (one line) and the job(s) it serves
3. URL / slug and breadcrumbs
4. Content blocks, in mobile-first priority order (block 1 is the first screen)
5. Components used (from the library) and their variants
6. States (guest / logged-in / role / empty / loading / error, as applicable)
7. Filters or facets (listing pages only)
8. Primary CTA (one clear next step)
9. Adaptive notes (mobile stack, then desktop)
10. SEO block A to E (indexed pages) or a noindex note (private / transactional pages)

The SEO block: A meta tags with ready copy (title, description, canonical, hreflang, robots, OG/Twitter); B heading structure (exactly one H1 plus ordered H2s); C ready SEO text (not "fill later"); D structured data (schema.org type); E optimization checklist.

---

## Page: Home (0.0)

**Purpose:** the front door and the return door. Lead the primary persona to her main job in one clear step, and give a returning operator a fast way back in. **Jobs:** Main + item 1 (self-serve start), acquisition.

**URL / slug:** `/` (root). **Breadcrumbs:** none (root).

### Content blocks (mobile-first priority)

1. **Nav** (0.1, guest or logged-in variant) plus **hero**: privacy-first value proposition (H1), one-line subhead, primary CTA, secondary link to how privacy works (1.1). First screen on mobile.
2. **State strip**: the hero CTA and greeting change by auth state (guest: Start free; returning operator: Go to your dashboard). One clear next step per state.
3. **How it works** (3 steps): pick a program, invite the team, read the team pulse. Mirrors the main flow (F1).
4. **Privacy proof / trust strip** (0.3 public variant, condensed): "Aggregate-only. We never show individual responses," with a link to 1.1. The differentiator, kept high.
5. **Programs preview**: the four wellbeing categories (0.6), light, linking to the library or a 1.5 landing.
6. **Pricing teaser**: free to start, owner dashboard is paid, link to 1.0.
7. **FAQ teaser**: privacy, setup, billing, link to 1.4.
8. **Final CTA band**: Start free.
9. **Footer** (0.2, full public variant).

Social proof (logos, testimonials) is [?], not invented; a placeholder block is reserved and left empty until there is real proof.

### Components used

0.1 Navigation (guest / logged-in variant), 0.3 Privacy-disclosure (public trust-strip variant), 0.4 Program card (optional preview), 0.2 Footer, 0.6 Canonical lists (categories, tiers).

### States

- **Guest (default):** hero CTA is Start free; full marketing page.
- **Logged-in operator:** hero greets "Welcome back" and the CTA is Go to your dashboard (to 4.0); the rest of the page still renders for reference.
- **Logged-in owner:** rare here; the CTA points to the owner dashboard (9.0).
- **Loading / error:** a static marketing page, so no data states; only the auth check is async and defaults to the guest view until resolved.

### Primary CTA

Start free (guest) to 2.0 Sign up; Go to your dashboard (returning operator) to 4.0.

### Adaptive (mobile-first)

- Mobile, base 360px: single column in the block order above; the hero and its one CTA are the first screen; how-it-works stacks vertically.
- Desktop, 900px and up: a wider hero (headline and CTA left, a simple product framing right), how-it-works in a row of three, categories in a grid.

### SEO block (A to E)

Home is indexed (public).

**A. Meta tags (ready copy):**
- title (46 chars): `Employee wellbeing for teams with no HR | Brio`
- description (145 chars): `Run real employee wellbeing at a small company with no HR. Brio gives the owner honest team-level proof and never shows any individual's answers.`
- canonical: `https://[production-domain]/` [? production domain not confirmed]
- hreflang: `en-US` (primary), `en-GB` (secondary, UK) [?]
- robots: `index, follow`
- Open Graph: `og:title`, `og:description`, `og:type=website`, `og:url`, `og:image` [? social image is a Concept-stage asset]
- Twitter: `summary_large_image`

**B. Heading structure (one H1, then ordered H2s):**
- H1: `Employee wellbeing for teams with no HR`
- H2, in block order: `How Brio works` -> `Your team's privacy is the product` -> `Programs for every kind of wellbeing` -> `Start free, upgrade when you are ready` -> `Questions people ask` -> `Start in five minutes`

**C. Ready SEO text (indexable, not a placeholder):**
`Brio is employee wellbeing software for small companies that have no HR team. Whoever got handed people work, an office manager, an ops lead, or the founder, gets a guided way to run real wellbeing programs. The owner gets honest proof it is working at the team level. Individual answers are never shown to anyone, because the privacy boundary is the product, not a setting you can switch off.`

**D. Structured data (schema.org):**
- `Organization` (name Brio, url, logo [? Concept-stage asset])
- `SoftwareApplication` (name Brio, applicationCategory BusinessApplication, operatingSystem Web, offers: the free tier at price 0; the paid tiers are [?]). No `SearchAction` (Brio has no site search).

**E. Optimization checklist:**
- exactly one H1
- LCP is the hero heading text, not an image
- nav and footer links are crawlable `<a>`
- canonical and hreflang set
- copy is real text, never baked into images
- Core Web Vitals budget respected; final query volumes deferred to production [?]

## Canonical reuse and next

Home reuses 0.1, 0.2, 0.3, 0.4, 0.6 rather than defining anything new. This page also defines the per-page template above, which the remaining pages follow at Step 5. Next page: 5.0 Program library (the first listing), per the persona-priority order.
