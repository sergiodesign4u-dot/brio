# Node 1.4 - Help / FAQ

*Page node, public marketing. Source of truth for ia/help.html. Cluster 1 Public marketing and acquisition, type: page, surface [pub] public (pre-auth, indexed). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the main help hub: FAQ groups by topic (setup, privacy, billing), an in-help search, and a contact fallback to 1.3. It is also a key SEO surface, so it carries a full A to E SEO block with the FAQPage schema as the primary type. The privacy answers reuse the 1.1 canonical spine and must not drift.*

## Page: Help / FAQ (1.4)

**Purpose:** be the first place a prospective or current user finds an answer, so most questions resolve without contacting support. It groups the common questions by topic (setting up, privacy, billing), lets a user search within help, and, only if that fails, hands off to 1.3 Contact. **Jobs:** supporting (self-serve support and deflection); it also serves the Main job indirectly by lowering the effort to get unblocked. Persona: Priya (operator, pre-auth or logged-in). Design Principle 2 (clear, low-jargon) and Principle 3 (earn trust: the privacy answers are stated plainly here too).

**URL / slug:** `/help`, public, indexed. **Breadcrumbs:** `Home / Help`. **Reached from:** the public nav and footer, the 1.3 Contact help-first deflection, and any in-app help link. **Forward:** 1.3 Contact / Support (the "still stuck" fallback), and the topic answers link out to 1.1 Security and privacy, 1.0 Pricing, and 2.0 Sign up.

### Content blocks (mobile-first priority)

1. **Public nav** (0.1 pre-auth variant): the Brio mark, marketing links (Pricing, Security, About), Log in, and Start free. No job tabs.
2. **Hero**: H1 "How can we help?", a one-line subhead. The LCP is the heading text.
3. **Search within help**: a search box that filters the FAQ by keyword. This is help-scoped search, not the app-wide global search (11.5), which is likely N/A and parked; the FAQ content is present in the HTML, not loaded only on search, so it stays crawlable. [?]
4. **FAQ groups by topic**: three groups, Setting up Brio, Privacy and your data, and Plans and billing, each a set of question and answer rows (the 1.1 wf-faq pattern). These questions and answers are the FAQPage schema source and must match the visible text exactly. The privacy group reuses the 1.1 canonical spine and must not drift.
5. **Contact fallback**: "still stuck? contact us", a link to 1.3, so a user who did not find an answer is never a dead-end.
6. **CTA band**: Start free, to 2.0 Sign up. **Footer** (0.2).

### Components used

0.1 Navigation (public pre-auth variant) and 0.2 Footer, the public marketing chrome from 1.0 and 1.1, the wf-faq group pattern from 1.1, and the wf-help fallback row from 1.3. The in-help search box is thin, page-specific layout, not a global; it ties to 11.5 Global search, which is likely N/A. No new global component is invented; the exact FAQ copy is refined in production, and the privacy answers must not drift from the 1.1 spine.

### States

- **Default (guest):** the search box and all three FAQ groups expanded (crawlable), then the contact fallback and the CTA band.
- **Search active:** the groups filter to matching questions; a no-match state shows "no answer found, contact us" with the 1.3 link, never a dead-end.
- **Logged-in:** the nav shows the app entry instead of Start free; the content is unchanged.

### Primary CTA

Find an answer (search, then the grouped FAQ). The contact fallback (1.3) is the secondary path for when self-serve fails; Start free (2.0) is the marketing CTA in the band. The page's job is deflection, so the strongest elements are the FAQ groups, not the CTA.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the hero, the search box full width, the three FAQ groups stacked, the contact fallback, and the CTA band, then the footer as accordions. Single column; each answer stays open (no color-only affordance).
- **Desktop, 900px and up:** the search box wider, the FAQ groups can sit in a wider column, a contents rail is optional; the same crawlable text.

### SEO block A to E (indexed)

Help is indexed and is a key SEO surface (the FAQPage schema is primary here). Copy is ready; final query volumes deferred to production [?]. The privacy answers must not drift from the 1.1 spine.

**A. Meta tags**
- **title:** `Brio Help center: setup, privacy, billing | Brio` (about 48 / 60)
- **description:** `Answers to common Brio questions: getting set up, how privacy works, and billing. Search the help center or contact support if you are still stuck.` (about 148 / 155)
- **canonical:** `https://[production-domain]/help` [? domain]
- **hreflang:** en-US (primary), en-GB (UK) [?]
- **robots:** `index, follow`
- **open graph:** og:title, og:description, og:type=website, og:url, og:image [? asset at Concept]
- **twitter:** `summary_large_image`

**B. Heading structure** (exactly one H1, then H2s in block order)
- **H1:** `How can we help?`
- **H2:** Setting up Brio
- **H2:** Privacy and your data
- **H2:** Plans and billing
- **H2:** Still need a hand?
- **H2:** Start free in five minutes

**C. Ready SEO text**
> The Brio help center answers the questions operators ask most: how to set up your first program and invite your team, how the aggregate-only privacy model protects individual answers, and how plans and billing work. Search for a topic, or browse the groups below. If you are still stuck, contact support and we will reply to your email, usually within one business day.

**D. Structured data (schema.org)**
- `FAQPage` (primary): every question and answer in the three groups (must match the visible text exactly)
- `BreadcrumbList`: Home, Help
- `Organization`: name Brio, url, logo [? asset at Concept]

**E. Optimization checklist**
- exactly one H1; the LCP is the hero heading text, not an image
- every FAQ answer is crawlable text and matches the FAQPage schema exactly; the search filters existing text, it does not replace it
- the privacy answers must not drift from the 1.1 spine (single public source)
- nav and footer links are crawlable `<a>`; canonical and hreflang set; internal links to 1.1 Security, 1.0 Pricing, 1.3 Contact, 2.0 Sign up
- Core Web Vitals budget respected; final query volumes deferred to production [?]

## FAQ groups (schema source, must match the visible wireframe exactly)

**Setting up Brio**
- *How do I get started with Brio?* Sign up, tell us your company size, and Brio pre-selects a first program for you; setup takes about five minutes.
- *How do I invite my team?* From the Team tab, share an invite link or a join code; people can take their first check-in without creating an account.
- *How long does a check-in take?* Under 30 seconds, one to three quick questions, with no account needed the first time.

**Privacy and your data** (reuses the 1.1 spine, must not drift)
- *Can my manager see my answer?* No. Answers are only ever shown as a team aggregate of at least 5 people.
- *What if my team is small?* If fewer than 5 answer, no results are shown at all, so no one can be singled out.
- *Do you sell my data?* No. Individual data is never shown or sold; the subscription pays for the aggregate.

**Plans and billing**
- *Is there a free plan?* Yes. The free plan covers up to 10 people with one active program and a basic weekly check-in. [?]
- *What do I get when I upgrade?* Paid plans add the full program library, trends, and the owner dashboard; pricing is per seat. [?]
- *Can I change or cancel anytime?* Yes, from Settings then Plan; changes take effect from the next billing cycle. [?]

## Canonical reuse and next

Help is the main self-serve support hub and a key SEO surface: three FAQ groups (setup, privacy, billing) in the 1.1 wf-faq pattern, an in-help search, and a contact fallback to 1.3, in the public chrome, with a full A to E SEO block and the FAQPage schema as the primary type. It reuses the public chrome, the wf-faq groups, and the wf-help fallback, and invents nothing global; the privacy answers must not drift from the 1.1 spine, and final query volumes are [?] pending. Next in cluster 1: 1.5 Category / segment landing (the SEO template), then 1.6 Legal documents (the shared legal template), which closes cluster 1 and the Step 5 rollout.
