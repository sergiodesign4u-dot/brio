# Node 1.1 - Security and privacy (public explainer)

*Page node, public marketing. Source of truth for ia/security-privacy.html. Cluster 1 Public marketing and acquisition, type: page, surface [pub] public (pre-auth, indexed). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the public, indexable instance of the canonical 0.3 privacy-disclosure (the public / explainer variant), Brio's differentiator made public. It is the only crawlable version of the five claims; its copy is the canonical public source and must not drift from the 0.3 spine.*

## Page: Security and privacy (1.1)

**Purpose:** explain, in public and in plain language, how Brio keeps team wellbeing private, so a prospective operator (and any employee who looks it up) can trust the model before signing up. It renders the 0.3 privacy-disclosure in its public / explainer variant, a fuller, third-person, crawlable version of the same five claims. This is the strategic dimension Brio must win (privacy made visible, not promised in a policy), stated for the widest audience. **Jobs:** the Main job (trust that the aggregate-only model is real), the benchmark differentiator, and J3 and E2 (privacy certainty and feeling supported, not monitored). Persona: Priya (operator, pre-auth) and, indirectly, Yemi (employee looking it up). Design Principle 3 (earn trust) and Principle 1 (privacy is the product).

**URL / slug:** `/security`, public, indexed. **Breadcrumbs:** `Home / Security and privacy`. **Reached from:** the public nav and footer, the 0.0 Landing and 1.0 Pricing privacy notes, and organic search. **Forward:** 2.0 Sign up (Start free) and 1.6 Legal (the full Privacy Policy, the legal document behind this explainer).

### Content blocks (mobile-first priority)

1. **Public nav** (0.1 pre-auth variant): the Brio mark, marketing links (Pricing, Security active, About), Log in, and Start free. No job tabs.
2. **Hero**: H1 "Your team's answers stay private", a one-line subhead, and the primary Start free CTA. The LCP is the heading text.
3. **How the aggregate-only model works**: a plain, three-step explanation (your answer joins an aggregate, results appear only above a minimum of 5, the owner sees a team number and a trend, never an individual). A small non-image diagram.
4. **The five claims (public framing)**: the canonical 0.3 spine, fuller and third-person: aggregate only; minimum-N of 5; no live count; subscription as privacy; and what the owner can and cannot see.
5. **What the owner can and cannot see**: the can and cannot panel, public framing (the same wf-see and wf-seerow used at 7.0, 8.2, 9.0).
6. **Privacy questions (FAQ)**: real questions and answers (can my manager see my answer, what about a small team, do you sell data), marked up as an FAQ. This is the crawlable trust content and the FAQPage schema source.
7. **CTA band and legal link**: Start free, to 2.0 Sign up, plus a link to the full Privacy Policy (1.6 Legal). **Footer** (0.2).

### Components used

0.1 Navigation (public pre-auth variant) and 0.2 Footer, the canonical 0.3 privacy-disclosure (public / explainer variant, the five claims and the can and cannot panel via wf-see and wf-seerow), and the public marketing chrome from 1.0. The how-it-works diagram and the FAQ are page-specific layout, thin, not globals. No new global component is invented. 1.1 is the public, indexable 0.3 instance; the operator (8.2, 3.1, 4.0), owner (9.1), and employee (10.1) instances are noindex, so this page carries the crawlable copy and must not drift from the spine.

### States

- **Default (guest):** the full explainer as above.
- **Logged-in:** the nav shows the app entry instead of Start free; the content is unchanged (it is public trust content).
- **Below minimum-N (explained, not a live state):** the FAQ and the how-it-works explain the small-team case (results need at least 5), which is the very concern this page answers; there is no live data on this marketing page.

### Primary CTA

Start free, to 2.0 Sign up, at the hero and the CTA band. The secondary path is the full Privacy Policy (1.6). There is no demo (self-serve). The page's job is trust, so the strongest element is the plain, honest explanation, not the CTA.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the hero, then the how-it-works steps stacked, the five claims, the can and cannot panel as two stacked blocks, the FAQ, and the CTA band, then the footer as accordions. Single column.
- **Desktop, 900px and up:** the how-it-works is a three-step row; the can and cannot panel is side by side; the FAQ is a wider list.

### SEO block A to E (indexed)

Security and privacy is indexed and is the canonical public source of the five claims. Copy is ready; final query volumes are deferred to production [?].

**A. Meta tags**
- **title:** `How Brio keeps team wellbeing private | Brio` (about 45 / 60)
- **description:** `How Brio keeps employee wellbeing private: aggregate-only results, no score until 5 people answer, no live count, and never an individual response. See how it works.` (about 165, trim to 155 in production [?])
- **canonical:** `https://[production-domain]/security` [? domain]
- **hreflang:** en-US (primary), en-GB (UK) [?]
- **robots:** `index, follow`
- **open graph:** og:title, og:description, og:type=website, og:url, og:image [? asset at Concept]
- **twitter:** `summary_large_image`

**B. Heading structure** (exactly one H1, then H2s in block order)
- **H1:** `Your team's answers stay private`
- **H2:** How the aggregate-only model works
- **H2:** The five things we promise
- **H2:** What the owner can and cannot see
- **H2:** Privacy questions
- **H2:** Start free in five minutes

**C. Ready SEO text**
> Brio is built so that no one, not a manager and not the owner, ever sees an individual employee's answer. Every response joins a team aggregate, and no score is shown until at least five people have answered, so a single reply cannot be picked out. While a check-in is open, no one sees a running count. The owner sees a team wellbeing score, its trend, and how many people took part, never who said what. This is the product, not a setting: the subscription pays for the aggregate, and individual data is never shown or sold.

**D. Structured data (schema.org)**
- `WebPage`: name, url, description; part of the Brio site
- `BreadcrumbList`: Home, Security and privacy
- `FAQPage`: the privacy questions and answers in the FAQ block
- `Organization`: name Brio, url, logo [? asset at Concept]

**E. Optimization checklist**
- exactly one H1; the LCP is the hero heading text, not an image
- the five claims and the can and cannot lists are real text, never baked into an image, never carried by color alone
- the FAQ answers are crawlable text and match the FAQPage schema exactly
- nav and footer links are crawlable `<a>`; canonical and hreflang set; internal links to 0.0 Landing, 1.0 Pricing, 2.0 Sign up, and 1.6 Privacy Policy
- copy must not drift from the 0.3 spine (single source); Core Web Vitals budget respected; final query volumes deferred to production [?]

## Canonical reuse and next

Security and privacy is the public, indexable face of Brio's differentiator: the canonical 0.3 five claims and the can and cannot panel, in a fuller public framing, with a how-it-works explanation and a crawlable FAQ, inside the public chrome, and a full A to E SEO block with ready copy. It reuses the public chrome, the 0.3 component, and the wf-see and wf-seerow list, and invents nothing global; its copy is the single public source and must not drift from the spine. Next in cluster 1: 1.2 About, 1.3 Contact / Support, 1.4 Help / FAQ, 1.5 Category / segment landing (the SEO template), and 1.6 Legal documents (the shared legal template, which holds the full Privacy Policy this page links to).
