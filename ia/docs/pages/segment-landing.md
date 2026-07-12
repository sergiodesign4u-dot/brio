# Node 1.5 - Category / segment landing (SEO template)

*Page node, public marketing. Source of truth for ia/segment-landing.html. Cluster 1 Public marketing and acquisition, type: page (listing / landing template), surface [pub] public (pre-auth, indexed). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is NOT a single hand-built page: it is ONE canonical landing template that stamps out N target pages, one per program category and one per company-size segment. The SEO block structure is fixed; the per-target content (slug, H1, title, description, intro, programs) is a token slot. The exact list of targets is [?] pending keyword research. Indexed, with a full A to E SEO block framed as a template. Serves the existing Main job (acquisition); it is an IA mechanism, not a new job.*

## Page: Category / segment landing (1.5)

**Purpose:** capture non-branded acquisition search ("mental health programs for small teams", "employee wellbeing for a 20-person company") on dedicated, indexable landing pages that each speak to one target, and funnel that traffic to Sign up. One template renders every target so the structure stays consistent and maintainable; the copy per target must be genuinely unique so the pages are not thin or duplicate. **Jobs:** Main (acquisition). Persona: Priya (operator, pre-auth, arriving from search). It is an IA and SEO mechanism that serves the existing Main job, not a new job.

**URL / slug:** a template, self-canonical per target. Two axes: program-category landings at `/programs/{category}` (e.g. `/programs/mental-health`, `/programs/physical`, `/programs/financial`, `/programs/social`, from the 0.6 categories) and segment landings at `/wellbeing/{segment}` (e.g. `/wellbeing/small-teams-no-hr`, `/wellbeing/20-person-company`). The exact published set is [?] pending keyword research. **Breadcrumbs:** `Home / Programs / {category}` for a category page, `Home / {segment}` for a segment page. **Reached from:** organic search (the primary intent), the footer, and sibling landings (cross-linking). **Forward:** 2.0 Sign up (Start free), and internal links to 1.0 Pricing, 1.1 Security and privacy, and 0.0 Home.

### Content blocks (mobile-first priority, fixed template skeleton with token slots)

1. **Public nav** (0.1 pre-auth variant): the Brio mark, marketing links (Pricing, Security, About), Log in, and Start free. No job tabs. (Fixed.)
2. **Hero**: H1 `{target}` (the one token that changes the page's topic), a per-target subhead `{intro-lead}`, and the primary Start free CTA. The LCP is the heading text. (Structure fixed, H1 and subhead per target.)
3. **Target intro copy**: one or two paragraphs `{intro}` written specifically for this category or segment. This is the block that must be genuinely unique per target so the page is not thin or duplicate. (Per target.)
4. **What is included**: the relevant programs for this target, `{programs}`, a light list (for a category page, the programs in that category; for a segment page, the recommended starting programs for that size). Reuses the 0.4 program idea in a lightweight list, not the full app card. (Per target, drawn from a fixed catalog.)
5. **Why Brio for `{target}`**: two or three value points that map to the differentiator (private by design, guided for a non-expert, low effort), reworded per target. (Structure fixed, wording per target.)
6. **Privacy proof strip**: the subscription-as-privacy line (0.3 claim 4, public), with a link to 1.1 Security and privacy. (Fixed.)
7. **Internal links**: to 1.0 Pricing, 1.1 Security, 0.0 Home, and sibling landings, so the template's own pages cross-link. (Fixed structure, sibling set per axis.)
8. **CTA band**: Start free, to 2.0 Sign up. **Footer** (0.2). (Fixed.)

### Components used

0.1 Navigation (public pre-auth variant) and 0.2 Footer, the public marketing chrome from 1.0 and 1.1, the subscription-as-privacy strip (0.3 claim 4, public, as on 1.0), and a lightweight program list derived from the 0.4 program idea and the 0.6 category list. The token map, the program list, the value points, and the internal-links row are thin, page-specific layout, not new globals. No new global component is invented; the target list and the per-target copy are [?] pending keyword research and content.

### States

- **Default (guest):** the full template as above, filled for one target.
- **Empty category / segment (no programs yet):** if a target has no programs to list, the "what is included" block falls back to the general program library and a Start free CTA, never a blank page. (An unpublished target simply does not exist as a page.)
- **Logged-in:** the nav shows the app entry instead of Start free; the content is unchanged.

### Primary CTA

Start free, to 2.0 Sign up, at the hero and the CTA band. The internal links (to Pricing, Security, and siblings) are secondary. The page's job is acquisition, so the strongest element is the per-target hero and intro that match the searcher's query.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the hero, the intro, the program list stacked, the value points stacked, the privacy strip, the internal links wrapped, and the CTA band, then the footer as accordions. Single column.
- **Desktop, 900px and up:** the program list and value points can sit in a row; a wider hero and intro; the same crawlable text.

### SEO block A to E (indexed) - framed as a template

This is the SEO node of cluster 1: the whole point is programmatic acquisition, so the SEO block is written as a template (a token pattern plus one or two concrete example targets) and its checklist guards against the failure mode of a landing template, thin and duplicate pages. Copy structure is ready; the target list and final query volumes are [?] pending keyword research.

**A. Meta tags** (per target; pattern plus concrete examples)
- **title (pattern):** `{target} for small teams | Brio`
- **title (example, category):** `Mental health programs for small teams | Brio` (about 45 / 60)
- **title (example, segment):** `Employee wellbeing for a 20-person company | Brio` (about 49 / 60)
- **description (example, category):** `Mental health wellbeing programs for small teams with no HR. Brio runs guided, aggregate-only check-ins, private by design. Start free in five minutes.` (about 151 / 155)
- **canonical:** self per target, e.g. `https://[production-domain]/programs/mental-health` [? domain]. Each target canonicals to ITSELF, never collapsed to one master, or the pages would not index.
- **hreflang:** en-US (primary), en-GB (UK) [?]
- **robots:** `index, follow` (only for a published target with real demand and unique copy; an unpublished target is simply absent, not a noindex stub)
- **open graph:** og:title, og:description, og:type=website, og:url, og:image [? asset at Concept]
- **twitter:** `summary_large_image`

**B. Heading structure** (exactly one H1 per target, then a fixed H2 skeleton)
- **H1:** `{target}` (e.g. `Mental health programs for small teams`)
- **H2:** What is included
- **H2:** Why Brio for `{target}`
- **H2:** Private by design
- **H2:** Start free in five minutes

**C. Ready SEO text** (pattern plus a filled example; each target needs genuinely unique copy)
> (pattern) `{Target}` for a small company with no HR: Brio gives you a guided set of `{category or segment}` programs, runs light weekly check-ins, and shows you an honest, aggregate-only team signal, never an individual answer.
> (example, mental health) Mental health programs for small teams with no HR: Brio gives you a guided set of mental-wellbeing check-ins, runs them for you on a light weekly cadence, and shows an honest team signal that is aggregate-only, so no one ever sees an individual answer. Start free and run your first program in about five minutes.

**D. Structured data (schema.org)** (per target)
- `BreadcrumbList`: Home, {section}, {target}
- `CollectionPage` or `ItemList`: the programs listed in the "what is included" block (must match the visible list)
- `Organization`: name Brio, url, logo [? asset at Concept]

**E. Optimization checklist** (the template's guardrails)
- exactly one H1 per target; the LCP is the hero heading text, not an image
- **canonical is self per target**, never a shared master, or the set will not index
- **each target has a genuinely unique title, description, intro, and program list**; do not stamp out near-identical pages, thin or duplicate content is the failure mode of a landing template
- **only publish a target that has real search demand and real unique copy**; the target list is [?] pending keyword research, not auto-generated at scale
- siblings cross-link, and every page links to 1.0 Pricing, 1.1 Security, 0.0 Home, and 2.0 Sign up; nav and footer links are crawlable `<a>`
- canonical and hreflang set; Core Web Vitals budget respected; final query volumes deferred to production [?]

## Canonical reuse and next

Category / segment landing is the SEO acquisition template: one canonical structure that renders N indexable target pages (per program category and per company-size segment), each with a per-target hero, unique intro, program list, value points, and a full A to E SEO block, in the public chrome. It reuses the public chrome, the subscription-as-privacy strip, and the 0.4 and 0.6 catalog, and invents nothing global; the target list and per-target copy are [?] pending keyword research, and the SEO checklist explicitly guards against thin and duplicate pages. Next in cluster 1: 1.6 Legal documents (the shared legal template: Privacy Policy, Terms of Service, Cookie Policy), which closes cluster 1 and the Step 5 rollout.
