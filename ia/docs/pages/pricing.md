# Node 1.0 - Pricing

*Page node, public marketing. Source of truth for ia/pricing.html. Cluster 1 Public marketing and acquisition, type: page, surface [pub] public (pre-auth, indexed). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the first indexed page of the Detail rollout: unlike the operator app and employee surfaces (all noindex), Pricing carries a full A to E SEO block with ready copy. All pricing figures are hypotheses.*

## Page: Pricing (1.0)

**Purpose:** show the plan tiers and price transparently, so an operator can decide without a demo or a sales call, and route them to sign up. It makes the business model legible (Free to start, the owner dashboard is the paid unlock) and reinforces the privacy promise as part of what the subscription buys. **Jobs:** item 1 (business model, transparent pricing, no demo). Persona: Priya (operator, the buyer), pre-auth. Design Principle 2 (clear, no jargon) and Principle 3 (privacy is part of the value, said even on the pricing page).

**URL / slug:** `/pricing`, public, indexed. **Breadcrumbs:** `Home / Pricing`. **Reached from:** the public nav and footer, the 0.0 Landing pricing teaser, and organic search. **Forward:** 2.0 Sign up (Start free) and 0.0 Landing; secondary links to 1.1 Security and privacy and 1.4 Help.

### Content blocks (mobile-first priority)

1. **Public nav** (0.1 pre-auth variant): the Brio mark, a few marketing links (Pricing, Security, About), Log in, and a Start free CTA. No job tabs (this is pre-auth).
2. **Hero**: H1 "Simple pricing for team wellbeing", a one-line subhead, and the primary Start free CTA. The LCP is the heading text, not an image.
3. **Compare plans**: the three tiers (Free, Starter, Growth) as cards, using the 0.6 tiers and the 7.1 plan cards; Starter is marked recommended; every price carries a hypothesis flag. Each tier has its own CTA.
4. **Why the owner dashboard is paid**: a short callout that Free gives the operator the aggregate, and the owner dashboard (the proof-of-value surface) is the paid unlock (item 8).
5. **Your team's answers stay private**: the subscription-as-privacy note, public framing (the subscription pays for the aggregate; individual answers are never shown or sold). This is 0.3 claim 4, made public.
6. **Pricing questions (FAQ teaser)**: a few common questions with a link to 1.4 Help / FAQ.
7. **CTA band**: Start free, to 2.0 Sign up.
8. **Footer** (0.2): the full marketing footer with the registered public pages.

### Components used

0.1 Navigation (public pre-auth variant) and 0.2 Footer (the public marketing chrome), 0.6 Canonical lists (the plan tiers), and the 7.1 plan cards (wf-plans and wf-plan) for the tier comparison. The hero, callouts, and FAQ teaser are page-specific marketing layout, thin, not globals. No new global component is invented; all pricing is flagged a hypothesis, benchmarked in research/docs/competitors.md.

### States

- **Default (guest):** the full page as above.
- **Logged-in operator:** the nav shows the app entry instead of Start free; the CTA becomes "Go to your dashboard" or "Upgrade" as appropriate.
- **Annual / monthly (optional):** a toggle if annual pricing is offered; the MVP shows monthly per-seat, annual is [?].

### Primary CTA

Start free, to 2.0 Sign up, repeated at the hero, on the Free tier card, and in the CTA band. There is deliberately no "book a demo" (item 1, transparent price, self-serve). The paid tiers route to sign up as well, with the plan carried into onboarding.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the nav condenses to the mark and Start free; the hero, then the tier cards stacked one per row, the callouts, the FAQ teaser, and the CTA band, then the footer as accordions. Single column.
- **Desktop, 900px and up:** the three tier cards sit side by side; the hero is wider; the footer is a multi-column block.

### SEO block A to E (indexed)

Pricing is indexed. Copy is ready, not "fill later"; final query volumes are deferred to production [?].

**A. Meta tags**
- **title:** `Pricing for team wellbeing software | Brio` (about 44 / 60)
- **description:** `See Brio's simple per-seat pricing for employee wellbeing at a small company with no HR. Start free, upgrade for the owner dashboard, and individual answers stay private.` (about 165, trim to 155 in production [?])
- **canonical:** `https://[production-domain]/pricing` [? domain]
- **hreflang:** en-US (primary), en-GB (UK) [?]
- **robots:** `index, follow`
- **open graph:** og:title, og:description, og:type=website, og:url, og:image [? asset at Concept]
- **twitter:** `summary_large_image`

**B. Heading structure** (exactly one H1, then H2s in block order)
- **H1:** `Simple pricing for team wellbeing`
- **H2:** Compare plans
- **H2:** Why the owner dashboard is paid
- **H2:** Your team's answers stay private
- **H2:** Pricing questions
- **H2:** Start free in five minutes

**C. Ready SEO text**
> Brio has simple, transparent pricing for employee wellbeing, with no demo and no sales call. Start free for up to 10 people with one program and a weekly check-in. Upgrade to Starter for the full program library, trends, and the owner dashboard, the honest team-level proof an owner wants. Pricing is per seat, and the subscription pays for aggregate insight: individual answers are never shown or sold, because the privacy boundary is the product.

**D. Structured data (schema.org)**
- `Product` (or `SoftwareApplication`, name Brio) with `Offer` entries: Free (price 0), Starter (price hypothesis, priceCurrency USD), Growth (price hypothesis); `AggregateOffer` lowPrice 0
- `BreadcrumbList`: Home, Pricing
- `FAQPage`: the pricing questions in the teaser
- `Organization`: name Brio, url, logo [? asset at Concept]

**E. Optimization checklist**
- exactly one H1; the LCP is the hero heading text, not an image
- tier prices are real text and in schema, never baked into an image; the hypothesis flag is visible in the UI but not in the meta
- nav and footer links are crawlable `<a>`; canonical and hreflang set
- internal links to 0.0 Landing, 1.1 Security and privacy, 2.0 Sign up, and 1.4 Help
- Core Web Vitals budget respected; final query volumes deferred to production [?]

## Canonical reuse and next

Pricing is the first indexed page of the Detail rollout: the public pre-auth chrome (0.1, 0.2), the 0.6 tiers via the 7.1 plan cards, the owner-dashboard-is-paid callout, and the subscription-as-privacy note, with a full A to E SEO block and ready copy. It reuses the public chrome, the tiers, and the plan cards, and invents nothing global; all pricing is a hypothesis, and there is no demo (item 1, self-serve). Next in cluster 1: 1.1 Security and privacy (the public, indexable instance of the 0.3 privacy-disclosure, Brio's differentiator made public), then 1.2 About, 1.3 Contact, 1.4 Help / FAQ, 1.5 Category / segment landing (the SEO template), and 1.6 Legal documents (the shared legal template).
