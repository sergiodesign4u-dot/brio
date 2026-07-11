# Node 4.2 - Threshold alert detail

*Page node. Source of truth for ia/threshold-alert.html. Cluster 4 Dashboard and pulse, type: page, surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This closes cluster 4. It is the early-warning surface (J2, the retention driver); it must be honest (Design Principle 4) yet calm and never point at any individual (the privacy boundary).*

## Page: Threshold alert detail (4.2)

**Purpose:** when the aggregate drops meaningfully, tell the operator plainly what changed, what it means, and the one thing to do next, so a struggle is caught early. **Jobs:** J2 (know if the team is struggling early), with E1 (the plain-language reading keeps the non-expert competent). Persona: Priya (operator).

**URL / slug:** `/app/alerts/:id` (operator app). **Breadcrumbs:** `Dashboard / Alert`; back returns to 4.0. **Reached from:** the DX1 alert banner on 4.0 (1 tap), and the deep-link in the alert notification (email or push). **Forward:** 5.1 Program detail (the relevant program), 4.1 Team pulse detail.

### Content blocks (mobile-first priority)

1. **Nav + header** (0.1 operator, Dashboard active): H1 "What changed". Back to 4.0. First screen on mobile.
2. **What dropped**: the specific aggregate signal and its move, plainly, for example "Team wellbeing moved from Steady to Low over the last two cycles." A small down-trend indicator, aggregate only, never who.
3. **Plain-language reading (E1)**: what it means, calm and non-alarming, no HR jargon. It names a team-level dip, not a person, and is explicit that it is not a diagnosis of anyone.
4. **Suggested next action**: one concrete step, the primary CTA, usually See the program that feeds this (to 5.1), or Review the full pulse (to 4.1).
5. **Link to the relevant program**: a compact reference to the program tied to this signal, to 5.1.
6. **Privacy reassurance** (0.3 condensed): the alert is a team-level signal; it never names or points at an individual. To 1.1.
7. **App shell footer** (minimal): privacy link (1.1) and help.

### Components used

0.1 Navigation (operator, Dashboard active), 0.3 Privacy-disclosure (condensed). The what-dropped indicator and reading reuse the same in-node pulse elements from 4.0 and 4.1. No new global component is invented.

### Honest but not alarming, and never individual

Two design principles meet here. Principle 4 (honest signals over flattering ones) means the alert says plainly that the team dipped, it does not soften a real decline. The privacy boundary means the alert is strictly aggregate, it reports a team-level move and points at a program to act on, never at a person, and it says so. The reading is calm and action-oriented so the operator acts, rather than panics or goes looking for who.

### States

- **Active alert (default):** what dropped, the reading, the next action, and the program link.
- **Recovered / stale:** if the signal has since recovered, the page says so ("This has since recovered") and points to the current pulse (4.1); the record is kept, not hidden.
- **Below minimum-N:** an alert never fires under 5 responses (there is no reliable aggregate to alert on), so this page is never reached in a sub-threshold state; the dashboard shows 4.3 instead.
- **Loading:** skeleton reading.
- **Error / not found (bad id):** "Could not load this alert" plus a link to 4.0, never a dead-end (MS4).
- **Guest / Owner:** redirect to 2.1 Log in / 9.0 Owner dashboard (alerts are an operator surface in the MVP).

### Primary CTA

See the program that feeds this (to 5.1), the concrete action; Review the full pulse (to 4.1) is the secondary path.

### Adaptive (mobile-first)

- **Mobile, base 360px:** header, then what dropped and the reading as the first screen, then the next action and the program link. Single column.
- **Desktop, 900px and up:** what dropped and the reading lead at the left, the next action and program link sit in a panel on the right.

### SEO block (noindex)

Threshold alert detail is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 ("What changed") for the accessible document outline; the what-dropped move is stated in text (from and to, and the period), not by color or an icon alone; the next action is a labeled control; tap targets at least 44px.

## Canonical reuse and next

Threshold alert detail reuses 0.1 and 0.3 and invents nothing global; the what-dropped indicator and reading are the same in-node pulse elements from 4.0 and 4.1. It respects minimum-N (no alert fires below 5) and stays strictly aggregate. This closes cluster 4 (Dashboard and pulse: 4.0, 4.1, 4.2; states 4.3 and 4.4 live inside 4.0). Next: cluster 6, 6.0 Team roster (invite, roster, participation, all aggregate), continuing the persona-priority order.
