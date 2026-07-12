# Node 11.1 - 500 Server error

*System / global node, cluster 11. Source of truth for ia/server-error.html. Type: page (minimal, backend-independent). Surface [all]. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the generic server-error page: deliberately minimal and self-contained so it renders even when the backend is down, returning a real HTTP 500, noindex. The sibling of 11.0 (404) and 11.2 (503).*

## Page: 500 Server error (11.1)

**Purpose:** when the server fails, still show the user a calm, honest, self-contained page rather than a blank screen or a browser error. The defining constraint is backend-independence: this page must render when the app and its data are unavailable, so it carries no app data, no dynamic includes, and no external assets. **Jobs:** supporting (global resilience). Persona: anyone (guest, Priya, Marcus). Design Principle 4 (honest) and Principle 2 (clear).

**URL / slug:** none of its own; it is served for any request that hits a server fault, and must return **HTTP 500**. **Breadcrumbs:** none. **Reached from:** any unhandled server error. **Forward:** a reload ("Try again"), 0.0 Home (a static link), and a quiet status or contact link.

### Content blocks (mobile-first priority)

1. **Minimal chrome**: only the Brio wordmark, no full nav and no footer. Unlike the 404 (which is context-aware and carries nav, footer, and search), the 500 stays minimal and static, because the backend may be down and app chrome that needs data cannot be trusted to render.
2. **Error mark**: a large "500" and H1 "Something went wrong", plus a plain, non-blaming line ("this is on our side, not you"). Carried by text, never by color.
3. **Reassurance**: a short line that the user's account and the team's data are safe and nothing was lost, which matters for a wellbeing and privacy product; plus "we have been notified".
4. **Recovery (small, static)**: "Try again" (reload the page), "Go to homepage" (a static link), and a quiet "check status" or "contact support" link. All static; no backend call is required to recover.

### Components used

The 11.0 error-mark kit (wf-errcode, wf-errh, wf-errsub) and the Brio wordmark, plus a small static action row. No public nav, no footer, no search, no app chrome, no 0.x global that needs data, on purpose: the page must be self-contained. No new global component is invented.

### States

- **Only one state:** the minimal 500. There is no context-aware variant (unlike the 404), because a server fault means app chrome cannot be relied on. The same static page renders everywhere.
- **Employee check-in:** a failed check-in submit is handled by 10.6 (submit error, answers preserved), not this generic 500, because that flow keeps the answers and offers a targeted retry.

### Primary CTA

"Try again" (reload). Home and the status link are secondary. The page's job is a calm, honest fallback, so the strongest element is the reassurance, then the retry.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the wordmark, the 500 mark, the reassurance, and the action row, centered in a single column.
- **Desktop, 900px and up:** the same content centered in a narrow card; nothing else is added.

### Technical and SEO (noindex)

A 500 is a system response, not indexable content, so there is no A to E SEO block; correctness and resilience are what matter.

- **HTTP status:** the page must return a real **500** status code (the 404 returns 404, the 503 returns 503).
- **Backend-independent:** the page is fully self-contained, inline CSS, no external fonts, scripts, or images, and no dynamic includes or API calls, so it renders during an outage. Ideally it is served as a static fallback from the edge or CDN.
- **robots:** `noindex`; no schema.org.
- **Reassurance is honest:** it says the data is safe only because the aggregate-only architecture means a request failure does not expose or lose individual data; it does not over-promise.
- the LCP is the heading text, not an image; the recovery links are static `<a>` and the retry is a reload.

## Canonical reuse and next

500 Server error is the minimal, backend-independent fallback: the Brio wordmark, a 500 mark, an honest non-blaming line, a data-is-safe reassurance, and a small static recovery (try again, home, status), returning a real HTTP 500 and noindex. It reuses the 11.0 error-mark kit and invents nothing global; its defining property is that it carries no app data or external assets so it survives an outage, which is the deliberate contrast with the richer 404. A failed check-in submit is handled by 10.6. Next in cluster 11: 11.2 Maintenance (503 + Retry-After), then 11.3 Cookie consent (grounded in real law), 11.4 Toast / inline notification, and the 11.5 Global search N/A confirmation.
