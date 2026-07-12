# Node 1.2 - About

*Page node, public marketing. Source of truth for ia/about.html. Cluster 1 Public marketing and acquisition, type: page, surface [pub] public (pre-auth, indexed). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the supporting About page: the mission (wellbeing without surveillance), what Brio believes, the team, and a way to get in touch. Indexed, with a full A to E SEO block; the Organization schema is primary here.*

## Page: About (1.2)

**Purpose:** say who Brio is and why it exists, so a prospective operator understands the belief behind the product (wellbeing without surveillance) and trusts the company, not just the features. It is supporting marketing that reinforces the differentiator as a company stance, not a tactic. **Jobs:** supporting (brand trust for acquisition); it reinforces the Main job indirectly by making the privacy stance credible. Persona: Priya (operator, pre-auth). Design Principle 1 (privacy is the product) and Principle 4 (honest, not flattering).

**URL / slug:** `/about`, public, indexed. **Breadcrumbs:** `Home / About`. **Reached from:** the public nav and footer. **Forward:** 1.3 Contact / Support (get in touch) and 2.0 Sign up (Start free).

### Content blocks (mobile-first priority)

1. **Public nav** (0.1 pre-auth variant): the Brio mark, marketing links (Pricing, Security, About active), Log in, and Start free. No job tabs.
2. **Hero**: H1 "Wellbeing without surveillance", a one-line subhead, and the primary Start free CTA. The LCP is the heading text.
3. **Our mission**: a short statement of why Brio exists (small companies get handed people work with no HR; wellbeing should never mean watching people; the privacy boundary is the belief).
4. **What we believe**: a few plain values that map to the design principles (privacy is the product; make the non-expert feel competent; honest signals over flattering ones).
5. **The team**: a small grid of people (name and role), placeholders at wireframe level; real bios and photos are [?] pending.
6. **Get in touch**: a link to 1.3 Contact / Support.
7. **CTA band**: Start free, to 2.0 Sign up. **Footer** (0.2).

### Components used

0.1 Navigation (public pre-auth variant) and 0.2 Footer, and the public marketing chrome from 1.0 and 1.1. The mission statement, the values, and the team grid are page-specific marketing layout, thin, not globals. No new global component is invented; team bios and photos are [?] pending, and compliance badges are deliberately not shown [?] pending legal review.

### States

- **Default (guest):** the full page as above.
- **Logged-in:** the nav shows the app entry instead of Start free; the content is unchanged.

### Primary CTA

Start free, to 2.0 Sign up, at the hero and the CTA band; Get in touch (1.3) is the secondary. The page's job is trust and brand, so the strongest element is the mission, not the CTA.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the hero, the mission, the values stacked, the team grid one or two per row, the contact link, and the CTA band, then the footer as accordions. Single column.
- **Desktop, 900px and up:** the values in a row, the team grid multi-column, a wider mission block.

### SEO block A to E (indexed)

About is indexed. Copy is ready; team bios and photos are [?] pending; final query volumes deferred to production [?].

**A. Meta tags**
- **title:** `About Brio: wellbeing without surveillance | Brio` (about 48 / 60)
- **description:** `Brio helps small companies with no HR run real employee wellbeing without surveillance. Meet the team and the belief behind aggregate-only, privacy-first wellbeing.` (about 160, trim to 155 in production [?])
- **canonical:** `https://[production-domain]/about` [? domain]
- **hreflang:** en-US (primary), en-GB (UK) [?]
- **robots:** `index, follow`
- **open graph:** og:title, og:description, og:type=website, og:url, og:image [? asset at Concept]
- **twitter:** `summary_large_image`

**B. Heading structure** (exactly one H1, then H2s in block order)
- **H1:** `Wellbeing without surveillance`
- **H2:** Our mission
- **H2:** What we believe
- **H2:** The team
- **H2:** Get in touch
- **H2:** Start free in five minutes

**C. Ready SEO text**
> Brio exists because small companies get handed people work with no HR and no playbook, and because wellbeing should never mean watching people. We build employee wellbeing software that is guided enough for a non-expert to run and private by design: individual answers are never shown to anyone, because the privacy boundary is the product, not a setting. We would rather show an owner an honest team signal than a flattering vanity metric.

**D. Structured data (schema.org)**
- `Organization` (primary): name Brio, url, logo [? asset at Concept], sameAs social links [?]
- `AboutPage` (or `WebPage`): name, url, description
- `BreadcrumbList`: Home, About

**E. Optimization checklist**
- exactly one H1; the LCP is the hero heading text, not an image
- the mission and values are real text, never baked into an image
- nav and footer links are crawlable `<a>`; canonical and hreflang set; internal links to 0.0 Landing, 1.1 Security and privacy, 1.3 Contact, 2.0 Sign up
- team photos, when added, carry alt text; compliance badges are deferred [?]; Core Web Vitals budget respected

## Canonical reuse and next

About is the supporting brand page: the mission (wellbeing without surveillance), the values that map to the design principles, the team, and a contact link, in the public chrome, with a full A to E SEO block and the Organization schema. It reuses the public chrome, and invents nothing global; team bios and photos are [?] pending. Next in cluster 1: 1.3 Contact / Support (get in touch), then 1.4 Help / FAQ, 1.5 Category / segment landing (the SEO template), and 1.6 Legal documents (the shared legal template).
