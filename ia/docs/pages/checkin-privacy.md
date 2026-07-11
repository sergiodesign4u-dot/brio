# Node 10.1 - Pre-Q1 privacy disclosure

*Section node, persistent, shown before Question 1 every cycle. Source of truth for ia/checkin-privacy.html. Cluster 10 Employee check-in, type: section (a render of the canonical 0.3 privacy-disclosure, employee variant), surface [E] employee (third-party, near-anonymous, mobile), on the check-in chrome from 10.0 (no navigation, no account). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the trust-critical screen where the riskiest assumption (H2, honest participation at or above 65%) is won or lost, so it earns its own node even though it renders a global component.*

## Section: Pre-Q1 privacy disclosure (10.1)

**Purpose:** before the employee answers anything, show, not just tell, that their individual response is never seen. This is the concrete expression of the product differentiator (the privacy boundary made visible in the UI, not promised in a policy) and it is the point where the employee decides to answer honestly or not. It renders the canonical 0.3 privacy-disclosure component in its employee variant. **Jobs:** J3 (certainty of privacy before responding), E2 (supported, not monitored), and item 4 (a clear statement of what the owner can and cannot see). Persona: Yemi (employee). Design Principle 3 (earn trust before asking for data) and Principle 1 (privacy is the product).

**URL / slug:** `/c/{invite-token}` (the disclosure step of the check-in flow, before Question 1); the token is the access, there is no login. **Breadcrumbs:** none. **No navigation, by design:** this is a linear near-anonymous flow, not an app. **Reached from:** 10.0 Check-in entry (Start, or a valid join code). **Forward:** 10.2 Questions (Continue). **Back:** leave the check-in with no penalty (nothing was asked yet, nothing is recorded).

### Canonical spine, employee variant (the five claims)

This section is one render of the 0.3 component. The five claims are fixed; the wording is [?] pending final UX and legal copy. The employee variant leads with "no one sees your individual response", frames each claim as "your answer", and adds the "see exactly what your manager sees" expander. Source: ia/docs/pages/privacy-disclosure.md.

1. **No one sees your individual response.** Not your manager, not the owner, no one. There is no named list and no individual timeline. (Claim 1, aggregate only.)
2. **Your answer joins an aggregate of at least 5.** Nothing is shown until at least 5 people have answered, so no single response can be picked out. (Claim 2, minimum-N of 5, benchmarked to Culture Amp indirect-identification protection.)
3. **No running count while the check-in is open.** No one watches answers arrive, so no one can guess who answered when. (Claim 3, no live count, founder decision D1, closes the small-team timing-inference vector.)
4. **The owner pays for the team view, never for your answers.** The subscription buys an aggregate read of team wellbeing; the business is built on never exposing an individual. (Claim 4, subscription as privacy.)
5. **Results appear only after the cycle closes, and only as a team number.** The owner sees the team score, the trend, and how many took part; never any individual, any answer, or any group smaller than 5. (Claim 5, what the owner can and cannot see.)

### Content blocks (mobile-first priority)

1. **Minimal check-in top bar**: the Brio mark and the company name ("for Acme"), no navigation and no account controls (the 10.0 chrome, carried through).
2. **Section heading**: a plain-language title ("Before you answer"), the screen H1 for the document outline; the 0.3 component itself carries no H1, but the screen does.
3. **The five claims**: each an icon plus one plain sentence, in the employee variant above, stacked on a phone. This is the body of the disclosure.
4. **"See exactly what your manager sees" expander**: an employee-only disclosure button that opens an aggregate-only mock (the exact owner view: a team number, a trend, a participation share, and a "cannot see" line). The promise is shown, not just told. This is the F2 DE2 recovery for the skeptical employee, especially on a small team ("my dept only has 3 of us").
5. **Continue**: the primary action, to 10.2 Questions.
6. **Leave**: a quiet way out with no penalty; nothing has been asked or recorded yet.

### Components used

The canonical 0.3 privacy-disclosure component (employee variant) rendered on the 10.0 check-in chrome (the minimal top bar, no nav, no account). The expander is a disclosure widget (a `button aria-expanded` toggling a labelled region), per the 0.3 anatomy. The aggregate-only mock inside the expander reuses the pulse-read element from 9.0 / 4.0 (a team number, a trend spark, a participation share) so the employee sees the same aggregate the owner would, never an individual. No new global is invented; this is a role render of an existing global.

### States

- **Default:** the five claims, the expander collapsed, Continue and Leave.
- **Expanded (employee):** the "see exactly what your manager sees" mock is revealed in place: the aggregate-only owner view (team number, trend, participation share) plus an explicit "cannot see" line (no names, no individual answers, nothing below 5). The promise shown, not just told.
- **Below minimum-N:** the fifth claim (results) is replaced by "Results need at least 5 people. If fewer answer this cycle, no results are shown at all." No live count is still enforced; the same honest limit as 4.3 and 9.3, surfaced not hidden, which is what makes it credible on a small team.

### Primary CTA

Continue, to 10.2 Questions. Leave is the always-present no-penalty exit (nothing recorded yet). There is no account step and no other navigation, by design: the disclosure is the only thing between entry and Question 1, and it must be read, not skipped past chrome.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the claims stack, each icon plus one sentence; the expander opens in place and pushes Continue down; the can and cannot content in the mock becomes two stacked blocks. This is the first substantive screen of the check-in and the expected device, since the employee opens the link on a phone.
- **Desktop / wide:** the same content centered in a narrow card; the claims sit in a tighter list and the mock's can and cannot content can sit side by side. The surface never becomes an app, even on a large screen.

### SEO block (noindex)

Pre-Q1 disclosure is a private, token-gated employee surface. It is not indexed and carries no schema. The indexable version of the same five canonical claims lives on the public 1.1 Security and privacy page; the two must not drift (0.3 is the single source).

- **robots:** `noindex, nofollow`. Token-gated and personal; never indexed. Transactional zone, per the platform SEO stance.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 (the section heading) for the accessible document outline; each claim is text with an icon, never carried by color alone; the expander is a `button aria-expanded` toggling a labelled region; Continue and Leave are labelled controls; the aggregate mock is legible to a screen reader as text; tap targets at least 44px; the flow works without an account.

## Canonical reuse and next

Pre-Q1 disclosure is the trust gate of the whole product: the differentiator (aggregate-only privacy) rendered as the last thing the employee reads before answering, with the "see exactly what your manager sees" expander turning the promise into something shown rather than told. It renders the canonical 0.3 component (employee variant) and reuses the 9.0 pulse-read mock; it invents nothing global. This is where H2 (honest participation at or above 65%) is won or lost. Next in cluster 10: 10.2 Questions (1 to 3, emoji or slider, under 30 seconds), then 10.3 thank-you, and the 10.4 expired / 10.5 already-submitted / 10.6 submit-error states.
