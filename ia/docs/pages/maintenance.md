# Node 11.2 - Maintenance (503 + Retry-After)

*System / global node, cluster 11. Source of truth for ia/maintenance.html. Type: page (minimal, self-contained). Surface [all]. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the planned-downtime page: a calm, expected maintenance notice (not an apologetic fault), returning a real HTTP 503 with a Retry-After header, noindex. The sibling of 11.0 (404) and 11.1 (500).*

## Page: Maintenance (11.2)

**Purpose:** during planned downtime (a deploy, a migration, scheduled maintenance), show a calm, honest notice that Brio is briefly unavailable and will be back, rather than a scary error. It is deliberately expected in tone, not apologetic; a maintenance window is a normal event, not a failure. **Jobs:** supporting (global resilience). Persona: anyone (guest, Priya, Marcus). Design Principle 4 (honest) and Principle 2 (clear).

**URL / slug:** none of its own; it is served for all requests during a maintenance window and must return **HTTP 503** with a **Retry-After** header. **Breadcrumbs:** none. **Reached from:** any request while maintenance is on. **Forward:** a reload ("Try again"), and a quiet status link.

### Content blocks (mobile-first priority)

1. **Minimal chrome**: only the Brio wordmark, no full nav and no footer, self-contained like the 500, because the app may be intentionally offline during the window.
2. **Status and heading**: a calm status pill ("Scheduled maintenance") and a friendly heading ("Brio is getting an upgrade" / "Back shortly"). Deliberately no large error numeral; this is a notice, not a fault. The 503 code is a small technical detail, not a headline.
3. **Plain reason**: a short line ("we are doing some scheduled maintenance and will be back shortly").
4. **Expected return** (optional): an estimated time back ("expected back by about 14:00 UTC" [?]), if known, so the wait is bounded. Shown as a small chip; omitted if unknown.
5. **Recovery (small, static)**: "Try again" (reload) and a quiet "check status" link. No account push, no upsell.

### Components used

The 11.1 minimal card (wf-mincard) and the Brio wordmark, a small status pill, an optional expected-return chip, and a static action row. No nav, footer, search, or app chrome, on purpose. No new global component is invented; the calm-notice tone is what distinguishes it from the 500.

### States

- **Maintenance on (return time known):** the status pill, the heading, the reason, the expected-return chip, and the actions.
- **Maintenance on (return time unknown):** the same, with the expected-return chip omitted.
- **Same for everyone:** there is no context-aware variant; every request during the window sees this page.

### Primary CTA

"Try again" (reload). The status link is secondary. The page's job is a calm, bounded wait, so the strongest elements are the heading and the expected-return chip.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the wordmark, the status pill, the heading, the reason, the expected-return chip, and the action row, centered in a single column.
- **Desktop, 900px and up:** the same content centered in a narrow card; nothing else is added.

### Technical and SEO (noindex)

A maintenance page is a system response, not indexable content, but the status code is the whole point and differs from the 404 and 500.

- **HTTP status:** the page must return a real **503 Service Unavailable** with a **`Retry-After`** header (a number of seconds, or a date). This is the defining difference: 503 tells search engines and monitors that the site is temporarily unavailable, not gone, and Retry-After tells them when to come back, so a planned maintenance is not de-indexed or penalized. Contrast: 404 means gone, 500 means an unexpected fault; 503 means back soon.
- **robots:** `noindex`; no schema.org.
- **Self-contained:** inline CSS, no external assets, no dynamic includes, served from the edge or a static host so it renders while the app is offline.
- the LCP is the heading text, not an image; the retry is a reload and the status link is a static `<a>`.

## Canonical reuse and next

Maintenance is the planned-downtime notice: the Brio wordmark, a calm status pill and friendly heading, a plain reason, an optional expected-return chip, and a small static recovery, returning a real HTTP 503 with a Retry-After header and noindex. It reuses the 11.1 minimal card and invents nothing global; its calm, expected tone and the 503 + Retry-After status are the deliberate contrast with the apologetic 500 and the gone-for-good 404. This completes the error-page trio. Next in cluster 11: 11.3 Cookie consent (grounded in real law), 11.4 Toast / inline notification, and the 11.5 Global search N/A confirmation.
