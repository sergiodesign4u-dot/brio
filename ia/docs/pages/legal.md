# Node 1.6 - Legal documents (shared legal template)

*Page node, public marketing / compliance. Source of truth for ia/legal.html. Cluster 1 Public marketing and acquisition, type: page (shared legal-document template), surface [pub] public (pre-auth, indexed). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is NOT three hand-built pages: it is ONE legal-document template rendered as a template map for each document (Privacy Policy, Terms of Service, Cookie Policy). The structure is fixed; the document title, slug, last-updated stamp, and section body vary per document. The legal copy is [?] pending legal review. The LAST node of cluster 1; after it the Step 5 rollout is complete.*

## Page: Legal documents (1.6)

**Purpose:** give Brio a compliant, maintainable home for its legal documents, one consistent template per document, so the Privacy Policy, Terms of Service, and Cookie Policy read the same way, carry a visible last-updated date, and cross-link. The Privacy Policy in particular is the formal counterpart of the 1.1 Security and privacy page and must not contradict it. **Jobs:** compliance (supporting the whole product); the Privacy Policy also backs the Main-job trust story. Persona: Priya (operator) and any employee or owner who follows a legal link; pre-auth or logged-in. Design boundary conditions from CLAUDE.md (ADA, GINA, HIPAA-adjacent, EEOC, GDPR, UK GDPR) are where a real legal review is needed before launch.

**URL / slug:** a template, self-canonical per document: `/privacy` (Privacy Policy), `/terms` (Terms of Service), `/cookies` (Cookie Policy). **Breadcrumbs:** `Home / {document}`. **Reached from:** the footer (0.2 legal column), the 1.1 Security and privacy page (which links to the full Privacy Policy), the 2.0 Sign up legal microcopy, and the 11.3 cookie consent banner. **Forward:** 11.3 Cookie consent (the "cookie settings" link reopens the consent panel), and cross-links between the three documents.

### Content blocks (mobile-first priority, fixed template skeleton)

1. **Public nav** (0.1 pre-auth variant): the Brio mark, marketing links, Log in, and Start free. No job tabs. (Fixed.)
2. **Document header**: H1 `{document title}` (the token that names the page), a document switcher (Privacy Policy / Terms of Service / Cookie Policy) so the three siblings cross-link, and a **last-updated stamp** `{last-updated}` [?]. (Structure fixed, title and date per document.)
3. **In-page contents**: an anchor list of the document's sections, because legal documents are long and a table of contents aids scanning and deep-linking. (Structure fixed, section list per document.)
4. **Legal-copy body**: the document's sections, each an H2 heading plus body copy `{sections}`. The section headings are structural; the body copy is [?] pending legal review, shown as placeholder at wireframe level. (Per document.)
5. **Cookie settings** (on the Cookie Policy, and available site-wide): a "Manage cookie settings" control that reopens 11.3 Cookie consent, so a user can change consent after the first banner. (Fixed control, forwards to 11.3.)
6. **Footer** (0.2), including the legal column that links the three documents. (Fixed.)

### Components used

0.1 Navigation (public pre-auth variant) and 0.2 Footer, the public marketing chrome from 1.0 and 1.1, and a forward to 11.3 Cookie consent (the cookie-settings control). The document switcher, the contents anchor list, the last-updated stamp, and the legal body are thin, page-specific layout, not new globals. No new global component is invented; 11.3 Cookie consent is a Step 6 system node (now built), and the cookie-settings link forwards to it. All legal copy is [?] pending legal review; the Privacy Policy must be consistent with the 1.1 privacy spine (aggregate only, minimum of 5, no live count).

### States

- **Default (guest):** the selected document rendered in full, with the switcher, contents, and last-updated stamp.
- **Deep-link to a section:** an anchor from the contents or an external link scrolls to that section.
- **Cookie settings open:** the "Manage cookie settings" control reopens 11.3 (a separate system node).
- **Logged-in:** the nav shows the app entry instead of Start free; the content is unchanged.

### Primary CTA

There is no acquisition CTA here; the document's job is to be read and to be compliant. The strongest elements are the last-updated stamp (trust) and the readable body. The document switcher and the cookie-settings control are the secondary actions.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the document header and switcher, the contents as a collapsible list, then the sections stacked, then the cookie-settings control and footer. Single column; long copy reads comfortably at one column.
- **Desktop, 900px and up:** the contents can sit as a sticky left rail beside the body; a wider reading column with a comfortable measure.

### SEO block A to E (indexed) - framed as a template

Legal documents are indexed but thin by nature, so their crawl priority is low; the SEO block is written as a template (a token pattern plus concrete documents) and its checklist guards the two things that matter here: a self canonical per document and consistency between the Privacy Policy and the 1.1 spine. Copy structure is ready; the legal copy and the last-updated dates are [?] pending legal review.

**A. Meta tags** (per document; pattern plus concrete examples)
- **title (pattern):** `{document title} | Brio`
- **title (Privacy Policy):** `Privacy Policy | Brio` (about 21 / 60)
- **title (Cookie Policy):** `Cookie Policy | Brio` (about 20 / 60)
- **title (Terms of Service):** `Terms of Service | Brio` (about 23 / 60)
- **description (Privacy Policy):** `How Brio handles your data: employee wellbeing answers are aggregate-only, never shown per individual. Read Brio's privacy policy.` (about 130 / 155) [? final copy pending legal review]
- **canonical:** self per document, e.g. `https://[production-domain]/privacy` [? domain]
- **hreflang:** en-US (primary), en-GB (UK) [? UK GDPR variant may differ]
- **robots:** `index, follow` (indexable but low crawl priority; thin by nature, that is acceptable for legal pages)
- **open graph:** og:title, og:description, og:type=website, og:url [og:image optional for legal]
- **twitter:** `summary`

**B. Heading structure** (exactly one H1 per document, then the document's section H2s)
- **H1:** `{document title}` (e.g. `Privacy Policy`)
- **H2 (Privacy Policy example):** What information we collect
- **H2:** How wellbeing answers are handled (aggregate only, a minimum of 5, no live count) [consistent with 1.1]
- **H2:** How we use information
- **H2:** Your rights (access, deletion / GDPR)
- **H2:** Data retention and security
- **H2:** How to contact us

**C. Ready SEO text**
> Legal copy is [?] pending legal review, so it is not fabricated here. The template guarantees a structure: each document has one H1, a last-updated stamp, a contents list, and section headings. For the Privacy Policy, the "how wellbeing answers are handled" section must state, consistently with the 1.1 Security and privacy page, that answers are aggregate only, that no score is shown until at least five people have answered, that there is no live count while a check-in is open, and that individual data is never shown or sold.

**D. Structured data (schema.org, per document)**
- `WebPage`: name (the document title), url, description, `dateModified` (the last-updated date)
- `BreadcrumbList`: Home, {document}
- `Organization`: name Brio, url [? logo asset at Concept]

**E. Optimization checklist** (the template's guardrails)
- exactly one H1 per document; the last-updated stamp is real text and maps to schema `dateModified`
- **canonical is self per document** (`/privacy`, `/terms`, `/cookies`), never one shared master
- **the Privacy Policy must be consistent with the 1.1 privacy spine** (aggregate only, minimum of 5, no live count, never shown or sold); it must not contradict the public claims
- the "manage cookie settings" control reopens 11.3 Cookie consent (a Step 6 system node); the footer legal column links all three documents
- legal pages are indexed but low priority; thin content is acceptable here, unlike the 1.5 landing template
- all legal copy is [?] pending legal review; do not ship placeholder text; nav and footer links are crawlable `<a>`

## Canonical reuse and next

Legal documents is the shared legal template: one structure that renders each document (Privacy Policy, Terms of Service, Cookie Policy) with a document switcher, a last-updated stamp, a contents list, section headings, and a cookie-settings control that reopens 11.3, in the public chrome. It reuses the public chrome and the footer legal column, forwards to 11.3, and invents nothing global; the legal copy and dates are [?] pending legal review, and the Privacy Policy must not drift from the 1.1 spine. This is the LAST node of cluster 1: with it the Step 5 page rollout is complete. Next is Step 6 (the cluster 11 system nodes: 404, 500, 503, cookie consent 11.3, and the toast / notification pattern, plus confirming 11.5 Global search is not applicable), then Step 7 (a full audit) and Step 8 (the final sidebar sync, the sitemap.html tree reconcile, and the CLAUDE / README IA row).
