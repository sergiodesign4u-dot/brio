# Node 10.3 - Check-in complete / thank-you

*Page node, the terminal screen of the employee check-in. Source of truth for ia/checkin-complete.html. Cluster 10 Employee check-in, type: page (flow terminal), surface [E] employee (third-party, near-anonymous, mobile), on the check-in chrome from 10.0 to 10.2 (no navigation, no account). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the closure of flow F2: a calm end that confirms the answer landed and reaffirms it stays private, then lets the employee go.*

## Page: Check-in complete / thank-you (10.3)

**Purpose:** confirm the answer was recorded, reassure that it joined the team's aggregate and is not visible on its own, and end calmly, with no account push and nothing more to do. It is the last thing the employee sees, so it closes the trust loop that 10.1 opened. **Jobs:** J4 (the whole check-in stayed short and is now done) and E2 (supported, not monitored, felt at the end too). Persona: Yemi (employee). Design Principle 3 (earn trust before asking for data, honored to the last screen) and Principle 5 (low effort).

**URL / slug:** `/c/{invite-token}` (the complete step of the check-in flow, after 10.2); the token is the access, there is no login. **Breadcrumbs:** none. **No navigation, by design:** this is a linear near-anonymous flow, not an app. **Reached from:** 10.2 Questions (a successful submit). **Forward:** none, this is a terminal node; the natural end is to close the tab. An optional quiet link to the public 1.1 Security and privacy page is the only outbound affordance, and it is not required.

### Content blocks (mobile-first priority)

1. **Minimal check-in top bar with the persistent anonymity anchor**: the Brio mark, the company name, and the small "Anonymous" reminder, carried through to the end so the promise is the last thing as well as the first.
2. **Confirmation**: a check badge and a plain "Thanks, you're done" heading. Closure that the short task is complete (J4).
3. **Reassurance**: one line that the answer joined the team's aggregate and is not seen on its own (ties directly back to the 10.1 promise). This is where E2 is honored at the end: supported, not monitored.
4. **No individual score, by design**: the employee is not shown a personal score or result. Results are team-level only, and the employee surface never renders an individual number. (An employee-facing aggregate result, HJ2, is [?] parked; if ever greenlit it would surface here, still aggregate, never individual.)
5. **Calm end**: a quiet "you can close this" hint, no account prompt, no upsell. An optional "how your privacy is protected" link to the public 1.1 page is the only outbound path, and it is optional.

### Components used

The 10.0 to 10.2 check-in chrome (minimal top bar, no nav, no account) and a simple confirmation badge (the same confirmation idea used at 2.2, redrawn for this surface). No new global component is invented; the privacy content itself is not repeated (that is 10.1), only the short aggregate reassurance line and the persistent anchor remain.

### States

- **Default (complete):** the confirmation, the aggregate reassurance, the calm end. This is the same for every team size, because the employee is never shown a score, so minimum-N does not change this screen.
- **HJ2 employee result [? parked]:** a possible future state that would show the team aggregate to the employee here, still aggregate and never individual. Parked; not built in the MVP.

There is no error state on this screen: a failed submit never reaches here (it routes to 10.6 from 10.2), so arriving at 10.3 always means the answer landed.

### Primary CTA

None, by design. The task is done; the natural end is to close the tab. The only affordance is an optional quiet link to the public 1.1 Security and privacy page, for an employee who wants to read more. No account step, no upsell, no forward button, which keeps the ending honest and low-pressure.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the confirmation badge, the "you're done" heading, the aggregate reassurance, and the calm end, centered in a single column. This is the primary and expected form, since the employee answered on a phone.
- **Desktop / wide:** the same content centered in a narrow card; the surface never becomes an app, even on a large screen.

### SEO block (noindex)

Check-in complete is a private, token-gated employee surface. It is not indexed and carries no schema. It is a transactional zone, per the platform SEO stance.

- **robots:** `noindex, nofollow`. Token-gated and personal; never indexed.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 (the thank-you heading) for the accessible document outline; the confirmation is conveyed by text and a mark, not by color alone; the optional privacy link is a labelled control; tap targets at least 44px; the flow works without an account.

## Canonical reuse and next

Check-in complete closes flow F2 the way 10.1 opened it: the answer landed, it joined the aggregate, and it is never seen on its own, said plainly one last time. It reuses the 10.0 to 10.2 check-in chrome and a simple confirmation badge, and invents nothing global; there is no forward step, by design, and no individual score is ever shown to the employee. This completes the employee happy path (10.0 entry, 10.1 disclosure, 10.2 questions, 10.3 complete). Next in cluster 10: the recovery and edge states, 10.4 Invite link expired, 10.5 Already submitted this cycle, and 10.6 Submit error, all of which keep the employee flow from ever dead-ending.
