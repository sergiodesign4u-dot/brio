# Node 9.2 - Monthly owner digest

*Page node (an email to view), the owner's monthly touch. Source of truth for ia/owner-digest.html. Cluster 9 Owner surface, type: page (email), surface [O] owner (secondary, aggregate-only). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the email the owner receives monthly; it delivers the read in the inbox in under two minutes and links to 9.0. This node closes cluster 9.*

## Page: Monthly owner digest (9.2)

**Purpose:** keep the owner in a light monthly habit without asking them to log in. The email carries the month's score, the trend, and one honest sentence, so the owner gets the value in their inbox in under two minutes, with a single link to open the full dashboard (9.0). It is the retention loop for the owner (W1) and a quiet reminder that the tool is working (J5, S2). **Jobs:** S2 (keep the owner engaged), item 8 (the paid feature's ongoing value), and W1 (the monthly habit). Persona: Marcus (owner), who wants a number, a trend, and reassurance, delivered, not fetched. Under two minutes (Principle 5) and honest (Principle 4).

**URL / slug:** delivered as email; the view-in-browser version is a token-gated `/owner/digest/{token}` (private, not a public route). **Reached from:** the monthly send. **Forward:** 9.0 Owner dashboard (Open your dashboard).

### Content blocks (mobile-first priority)

1. **Email header**: the sender and a plain subject ("Your Acme team wellbeing, June"). Email is mobile-first by nature.
2. **The month's read**: the score and one honest sentence ("Steady this month, no sign anyone is at risk of leaving", or a plainly worded drop). The value, delivered.
3. **Trend**: the direction versus recent months (a small trend and a "up from last month" style line), so the owner sees movement at a glance.
4. **Participation**: as a share of the team, never who. Confirms the signal is real.
5. **Condensed privacy line**: one 0.3 line ("you only ever see the team aggregate, never individual data"), so the promise travels with the email.
6. **Primary action**: "Open your dashboard" to 9.0, the single link.
7. **Email footer**: sent monthly, manage email frequency or unsubscribe, and a view-in-browser link.

### Components used

An email template layout (distinct from the app chrome), the pulse read reused from 9.0 (score, trend, participation), a condensed 0.3 privacy line, and a single primary link to 9.0. No new global is invented; the email is a delivery of the same aggregate-only read.

### States

- **Default (minimum-N met):** the month's score, the honest sentence, the trend, participation share, the privacy line, and Open your dashboard.
- **Minimum-N not met:** the email says "not enough responses yet for a score this month", with no partial number and no individual data (the email form of 9.3), still inviting the owner to open the dashboard.
- **Trending down (honest signal):** the same layout with a plainly worded drop, never softened, so a bad month is not hidden from the owner.
- **Manage frequency / unsubscribe:** the footer links let the owner change cadence or stop the emails, respected immediately.

### Primary CTA

Open your dashboard, to 9.0. The email is designed to deliver the value on its own (under two minutes, no click required), with the link as the path to the full read. There is no upsell to the owner.

### Adaptive (mobile-first)

- **Mobile, base 360px:** a single-column email, the header, the score and sentence, the trend, participation, the privacy line, the button, then the footer. This is the primary form, since most email is read on a phone.
- **Desktop / webmail:** the same single column centered at a comfortable email width (around 600px in production), not stretched full width.
- **Email robustness (production note):** table-based layout with inline styles, a plain-text alternative, alt text on any image, readable in both light and dark mail clients, and no meaning carried by color alone.

### SEO block (noindex)

The digest is an email; email is not crawled. The view-in-browser version is a private, token-gated page.

- **robots (view-in-browser):** `noindex, nofollow`. Token-gated and personal; never indexed.
- **schema.org / hreflang / OG:** none.
- **Email findability (not SEO, still specified):** a meaningful subject line and preview text; a plain-text alternative; semantic headings in the HTML email; the score, trend, and participation are text, not an image; participation is stated as a share, never as who; the reason for any missing score is stated in text; tap targets at least 44px.

## Canonical reuse and next

Monthly owner digest reuses the pulse read from 9.0 and a condensed 0.3 privacy line; it invents nothing global and delivers the same aggregate-only read to the inbox. It is the owner's monthly habit (W1): the value arrives, honest and under two minutes, with one link to the full dashboard. This node closes cluster 9 Owner surface (9.0 Owner dashboard with 9.1 and 9.3, 9.2 Monthly owner digest). Next cluster in the Step 5 build order: cluster 10 Employee check-in (the near-anonymous, under-30-second linear flow: 10.0 through 10.6, including the pre-Q1 disclosure and the expired and already-submitted states).
