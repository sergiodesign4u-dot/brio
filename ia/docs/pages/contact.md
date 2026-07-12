# Node 1.3 - Contact / Support

*Page node, public marketing. Source of truth for ia/contact.html. Cluster 1 Public marketing and acquisition, type: page, surface [pub] public (pre-auth, indexed). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the supporting Contact / Support page: a support email and a simple contact form, a help-first deflection to 1.4, and a response-time note. Indexed, with a full A to E SEO block.*

## Page: Contact / Support (1.3)

**Purpose:** give a prospective or current user a plain way to reach Brio, while steering common questions to self-serve Help first. It sets expectations (a support email, a short form, a response-time note) and keeps the tone honest and low-friction. **Jobs:** supporting (reachability and support). Persona: Priya (operator, pre-auth or logged-in). Design Principle 2 (clear and low-jargon).

**URL / slug:** `/contact`, public, indexed. **Breadcrumbs:** `Home / Contact`. **Reached from:** the public nav and footer, and the 1.2 About and 1.4 Help pages. **Forward:** 1.4 Help / FAQ (the help-first path) and, on submit, a confirmation (reusing the 2.2 check-your-email confirmation pattern).

### Content blocks (mobile-first priority)

1. **Public nav** (0.1 pre-auth variant): the Brio mark, marketing links (Pricing, Security, About), Log in, and Start free. No job tabs.
2. **Hero**: H1 "Get in touch", a one-line subhead. The LCP is the heading text.
3. **Help first**: a short deflection ("most answers are in Help") with a link to 1.4, so a user finds an answer faster than waiting on a reply.
4. **Send us a message**: a simple contact form (name, email, message), reusing the auth and settings input fields. Submit sends the message; success shows a confirmation (the 2.2 pattern).
5. **A direct email**: the support email as an alternative to the form, for people who prefer email.
6. **When we reply**: a response-time note ("we reply within about one business day" [?]), so expectations are set.
7. **Privacy note**: a short line that messages here are support requests, not wellbeing data, so the privacy model is not confused with support contact.
8. **CTA band**: Start free, to 2.0 Sign up. **Footer** (0.2).

### Components used

0.1 Navigation (public pre-auth variant) and 0.2 Footer, the auth and settings input fields (wf-field, wf-input), and the 2.2 confirmation pattern for the submit success. The help-first note, the response-time note, and the privacy note are page-specific layout, thin, not globals. No new global component is invented; the exact response-time SLA and support email are [?] pending.

### States

- **Default (guest):** the help-first note, the form, the direct email, and the response-time note.
- **Validation:** name, a valid email, and a non-empty message are required; a missing field shows an inline hint, never a dead-end.
- **Submitting / sent:** a brief submitting state, then a confirmation ("message sent, we will reply to your email"), reusing the 2.2 confirmation layout.
- **Error:** "could not send, try again or email us directly", with the form kept filled, never a dead-end.
- **Logged-in:** the form may prefill the account name and email.

### Primary CTA

Send the message (the form), with the direct support email as the alternative and the help-first link as the faster path. Start free (2.0) is the secondary marketing CTA in the band. The page's job is reachability, so the form and the email are the strongest elements.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the hero, the help-first note, the form fields stacked, the direct email, the response-time note, and the CTA band, then the footer as accordions. Single column.
- **Desktop, 900px and up:** the form and the contact details can sit side by side; a wider layout.

### SEO block A to E (indexed)

Contact is indexed. Copy is ready; the support email and the exact response-time SLA are [?] pending; final query volumes deferred to production [?].

**A. Meta tags**
- **title:** `Contact Brio support | Brio` (about 26 / 60)
- **description:** `Contact Brio support. Check Help for quick answers, or send a message and we will reply to your email, usually within one business day.` (about 135 / 155)
- **canonical:** `https://[production-domain]/contact` [? domain]
- **hreflang:** en-US (primary), en-GB (UK) [?]
- **robots:** `index, follow`
- **open graph:** og:title, og:description, og:type=website, og:url, og:image [? asset at Concept]
- **twitter:** `summary_large_image`

**B. Heading structure** (exactly one H1, then H2s in block order)
- **H1:** `Get in touch`
- **H2:** Check Help first
- **H2:** Send us a message
- **H2:** Email us directly
- **H2:** When we reply
- **H2:** Start free in five minutes

**C. Ready SEO text**
> Have a question about Brio? Many answers are in Help, from setup to privacy to billing, so it is worth a look first. If you still need us, send a message with the form or email support directly, and we will reply to your email, usually within one business day. Messages here are support requests, not wellbeing data; they are handled separately from the private, aggregate-only check-ins.

**D. Structured data (schema.org)**
- `ContactPage`: name, url, description
- `Organization` with `contactPoint` (email, contactType customer support) [? email pending]
- `BreadcrumbList`: Home, Contact

**E. Optimization checklist**
- exactly one H1; the LCP is the hero heading text, not an image
- the form fields are labelled inputs; validation hints are text, not color alone
- the support email is real text and matches the schema contactPoint; nav and footer links are crawlable `<a>`
- canonical and hreflang set; internal links to 1.4 Help, 0.0 Landing, 2.0 Sign up
- Core Web Vitals budget respected; final SLA and support email deferred to production [?]

## Canonical reuse and next

Contact is the supporting reachability page: a help-first deflection to 1.4, a simple contact form, a direct support email, and a response-time note, in the public chrome, with a full A to E SEO block and the ContactPage schema. It reuses the public chrome, the auth and settings inputs, and the 2.2 confirmation, and invents nothing global; the support email and SLA are [?] pending. Next in cluster 1: 1.4 Help / FAQ (also an SEO surface), then 1.5 Category / segment landing (the SEO template) and 1.6 Legal documents (the shared legal template).
