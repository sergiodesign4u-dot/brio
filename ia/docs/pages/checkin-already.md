# Node 10.5 - Already submitted this cycle

*State node, part of the employee check-in. Source of truth for ia/checkin-already.html. Cluster 10 Employee check-in, type: state, surface [E] employee (third-party, near-anonymous, mobile), on the check-in chrome from 10.0 (no navigation, no account). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is a valid-link, success-adjacent state (not an error): the employee opened a good link but has already answered this cycle, so it reads as a calm confirmation, not a wall.*

## State: Already submitted this cycle (10.5)

**Purpose:** when the employee returns to a valid check-in link they have already used this cycle, confirm plainly that they are done, reassure that their earlier answer is already in the aggregate and no one is counted twice, and end calmly. It prevents a duplicate submission (MS1) without making the employee feel they did something wrong. **Jobs:** J4 (the task is done, no more effort) and E2 (supported, not monitored). Persona: Yemi (employee). Design Principle 5 (low effort) and Principle 3 (keep trust to the end).

**URL / slug:** `/c/{invite-token}` (the valid token resolves to already-submitted, so this state renders); the token is the access, there is no login. **Breadcrumbs:** none. **No navigation, by design:** this is a linear near-anonymous flow, not an app. **Reached from:** 10.0 Check-in entry (or any check-in link click) when the employee has already submitted for the open cycle. **Forward:** none, this is a terminal node; the natural end is to close the tab, with an optional quiet link to the public 1.1 page.

### Content blocks (mobile-first priority)

1. **Minimal check-in top bar with the persistent anonymity anchor**: the Brio mark, the company name, and the small "Anonymous" reminder.
2. **Confirmation**: the same solid check badge as 10.3 (this is success-adjacent, not an error), with "You have already checked in" and "for this cycle". Reads as reassurance, not a block.
3. **No-duplicate reassurance**: one line that the earlier answer is already in the team's aggregate, that no one is counted twice, and that nothing individual is shown (MS1, no double-count, no individual data).
4. **Next-cycle note (optional, quiet)**: a light "you will be invited again next cycle", so the employee knows this is expected, not a failure.
5. **Calm end**: a quiet "you can close this" hint; no account prompt, no upsell. An optional "how your privacy is protected" link to the public 1.1 page is the only outbound path.

### Components used

The 10.0 check-in chrome (minimal top bar, no nav, no account) and the 10.3 confirmation badge and layout (the solid check, the aggregate reassurance line), reused because this is a success-adjacent state. No new global component is invented; the privacy content itself is not repeated (that is 10.1), only the short reassurance line and the persistent anchor remain.

### States

- **Already submitted (default):** the confirmation, the no-duplicate reassurance, the calm end. This is the same for every team size, because the employee is never shown a score, so minimum-N does not change this screen.

There is no error variant here: this is a valid link handled gracefully. A genuinely broken or expired link is 10.4, and a failure at submit is 10.6; this node is only the case where the answer already landed.

### Primary CTA

None, by design, like 10.3. The task is already done; the natural end is to close the tab. The only affordance is an optional quiet link to the public 1.1 Security and privacy page. No account step, no upsell, no forward button, and no way to submit again, which is the point of the state (MS1, no duplicate).

### Adaptive (mobile-first)

- **Mobile, base 360px:** the confirmation badge, the "already checked in" heading, the no-duplicate reassurance, and the calm end, centered in a single column. This is the primary and expected form, since the employee opened the link on a phone.
- **Desktop / wide:** the same content centered in a narrow card; the surface never becomes an app, even on a large screen.

### SEO block (noindex)

Already submitted is a private, token-gated employee surface. It is not indexed and carries no schema. It is a transactional zone, per the platform SEO stance.

- **robots:** `noindex, nofollow`. Token-gated and personal; never indexed.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 (the confirmation heading) for the accessible document outline; the confirmation is conveyed by text and a mark, not by color alone; the optional privacy link is a labelled control; tap targets at least 44px; the flow works without an account.

## Canonical reuse and next

Already submitted turns a repeat visit into a calm confirmation rather than a wall or a duplicate: the earlier answer is in the aggregate, no one is counted twice, and nothing individual is shown (MS1). It reuses the 10.0 chrome and the 10.3 confirmation layout, and invents nothing global; there is no forward step, by design. Next in cluster 10, and the last state of the whole detail rollout so far, is 10.6 Submit error, the failure-at-submit case that preserves the answers and routes back into the flow, never a dead-end.
