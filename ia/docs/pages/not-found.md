# Node 11.0 - 404 Not found

*System / global node, cluster 11. Source of truth for ia/not-found.html. Type: page (full page with nav and footer). Surface [all] (can appear in any zone; renders context-aware chrome). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the canonical not-found page: a full recovery page with a site / help search and quick links, returning a real HTTP 404 status (never a soft-404), noindex. Opens Step 6 (system nodes).*

## Page: 404 Not found (11.0)

**Purpose:** turn a wrong or dead URL into a recovery, not a wall. Whoever lands here (a guest on a broken marketing link, or a logged-in operator on a stale app URL) gets a plain explanation and a fast way back: a search over Brio's public and help content, and quick links to the main destinations. It is the site-wide expression of the no-dead-end rule. **Jobs:** supporting (global resilience); it protects every job by catching bad navigation. Persona: anyone (guest, Priya, Marcus). Design Principle 2 (clear, low-jargon).

**URL / slug:** none of its own; it renders at any unmatched URL and must return **HTTP 404**. **Breadcrumbs:** none (it is not a real content location). **Reached from:** any broken or stale link, a mistyped URL, or a removed page. **Forward:** 0.0 Home, 1.4 Help, 1.0 Pricing, 1.1 Security, the operator app (4.0 Dashboard) for a logged-in user, and 1.3 Contact as the last-resort fallback.

### Content blocks (mobile-first priority)

1. **Chrome (context-aware)**: the public nav and footer (0.1 / 0.2) for a guest or public URL; the operator app chrome (the 7.0 app bar and job tabs, no tab active) for a logged-in in-app 404. The recovery content is identical; only the frame changes.
2. **Error mark**: a large "404" and H1 "Page not found", plus a plain, non-blaming line ("the page may have moved, or the link may be wrong"). Carried by text, never by color.
3. **Search**: a search box over Brio's public and help content, so a user can find what they were after. This is site / help search (it routes to 1.4 Help results), not an in-app catalog search; Brio has no catalog search index (11.5 is N/A), so this is deliberately the marketing / help search, not an app-wide one.
4. **Quick links**: the main destinations, Home, Help, Pricing, Security, and, for a logged-in user, "your dashboard" (4.0). One tap back to somewhere useful.
5. **Contact fallback**: "still cannot find it? contact us", a link to 1.3, so even a failed search is not a dead-end.
6. **Footer** (0.2), or the app frame for the in-app variant.

### Components used

0.1 Navigation and 0.2 Footer (public variant), or the 7.0 operator app chrome (app bar and job tabs) for the in-app variant, the in-help search pattern from 1.4 (wf-search), the quick-links row, and the 1.3 contact fallback (wf-help). No new global component is invented; the search here reuses the 1.4 help search and confirms the 11.5 Global search decision (no app catalog search index).

### States

- **Public 404 (guest or public URL):** marketing chrome, quick links to public destinations.
- **In-app 404 (logged-in operator):** operator app chrome (no job tab active), quick links into the app (Dashboard, Programs, Team).
- **Employee check-in zone:** a bad check-in link is handled by 10.4 (invite link expired / invalid), not by this generic 404, because that flow has its own near-anonymous chrome and recovery.

### Primary CTA

There is no single CTA; recovery is the job, so the strongest elements are the search and the quick links. Contact (1.3) is the secondary, last-resort path.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the error mark, the search full width, the quick links wrapped, and the contact fallback, then the footer. Single column.
- **Desktop, 900px and up:** the error mark and search centered, the quick links in a row; the same recovery content.

### Technical and SEO (noindex)

A 404 is a system response, not indexable content, so there is no A to E SEO block; what matters is correctness.

- **HTTP status:** the page must return a real **404** status code. A soft-404 (a "not found" page served with a 200) is a defect; search engines would index the error and users would be misled. The custom 404 is configured at the host / CDN so any unmatched URL renders this page with a 404.
- **robots:** `noindex, follow` (do not index the error; follow lets the recovery links pass equity and aid crawl recovery).
- **schema.org:** none; error pages carry no structured data.
- **500 and 503** are the sibling error pages (11.1, 11.2), each with its own correct status code; this 404 is only for not-found.
- nav, footer, and quick links are crawlable `<a>`; the LCP is the heading text, not an image.

## Canonical reuse and next

404 Not found is the canonical recovery page: a context-aware full page (public chrome or in-app chrome) with a large 404 mark, a site / help search, quick links, and a contact fallback, returning a real HTTP 404 and noindex. It reuses the public chrome, the 7.0 app chrome, the 1.4 help search, and the 1.3 contact fallback, invents nothing global, and confirms the 11.5 Global search decision (no app catalog search index). Next in cluster 11: 11.1 500 Server error and 11.2 Maintenance (503), the sibling error pages, then 11.3 Cookie consent (grounded in real law), 11.4 Toast / inline notification, and the 11.5 Global search N/A confirmation.
