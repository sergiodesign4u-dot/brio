# Node 10.6 - Submit error

*State node (error), the last node of the employee check-in and of the Detail rollout so far. Source of truth for ia/checkin-submit-error.html. Cluster 10 Employee check-in, type: state (error), surface [E] employee (third-party, near-anonymous, mobile), on the check-in chrome from 10.0 (no navigation, no account). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the failure-at-submit case: the 10.2 submit call did not go through, so it is recovered with the answers preserved, never a dead-end (F2).*

## State: Submit error (10.6)

**Purpose:** when the submit from 10.2 fails (a network drop or a server error), tell the employee plainly and without blame, reassure them that their answers are saved and nothing was lost, and give a one-tap Try again that re-submits without re-entering. It is the employee-side twin of the operator "could not save, the form stays filled" rule at 5.2 and 3.3. **Jobs:** it protects J4 (the effort already spent is not wasted) and upholds the F2 no-dead-end rule. Persona: Yemi (employee). Design Principle 5 (low effort) and Principle 3 (keep trust, even on failure).

**URL / slug:** `/c/{invite-token}` (the submit failed, so this state renders in place); the token is the access, there is no login. **Breadcrumbs:** none. **No navigation, by design:** this is a linear near-anonymous flow, not an app. **Reached from:** 10.2 Questions, when the submit call fails. **Forward / recovery:** 10.2 Questions via Try again, with the answers preserved (re-submit, not re-enter). On success from the retry, 10.3 Check-in complete.

### Content blocks (mobile-first priority)

1. **Minimal check-in top bar with the persistent anonymity anchor**: the Brio mark, the company name, and the small "Anonymous" reminder, kept even on the failure so trust holds.
2. **Attention mark**: the same treatment as 10.4, a dashed badge with an "!" (not a check), so the error reads as different from success without relying on color.
3. **Plain, non-blaming explanation**: "We could not send your answers", with a one-line, honest reason (a connection problem, or something on our side), never blaming the employee.
4. **The key reassurance, answers preserved**: a clear line and a small "answers saved" indicator that the entered answers are held on this screen and nothing was lost. This is the whole point of the state.
5. **Try again**: the primary action, which re-submits the saved answers (back into 10.2, no re-entry). A quiet "still not working? give it a moment and try again" fallback for a persistent failure.

### Components used

The 10.0 check-in chrome (minimal top bar, no nav, no account), the 10.4 attention treatment (the dashed "!" badge, error read without color), and the 10.4 reassurance block, re-pointed to the answers-saved message. No new global component is invented; no personal data appears, only the anchor, the reassurance, and the small answers-saved indicator.

### States

- **Submit failed (default):** the attention mark, the non-blaming explanation, the answers-saved reassurance, and Try again.
- **Retrying:** Try again re-submits; this reuses the 10.2 submitting (loading) state, no double submit.
- **Persistent failure:** the quiet fallback copy ("give it a moment and try again"); the answers stay saved, so the employee can leave and come back to the same link and retry, still never a dead-end.

### Primary CTA

Try again, which re-submits the saved answers (to 10.2, then 10.3 on success). The fallback is to wait and retry; the answers remain preserved either way. No account step and no other navigation, by design: even the failure keeps the surface a calm near-anonymous line, never a wall, and never asks the employee to answer twice.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the attention mark, the explanation, the answers-saved reassurance, and Try again, in a single column. This is the primary and expected form, since the employee answered on a phone.
- **Desktop / wide:** the same content centered in a narrow card; the surface never becomes an app, even on a large screen.

### SEO block (noindex)

Submit error is a private, token-gated employee surface. It is not indexed and carries no schema. It is a transactional zone, per the platform SEO stance.

- **robots:** `noindex, nofollow`. Token-gated and personal; never indexed.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 (the explanation heading) for the accessible document outline; the error is conveyed by text and the "!" mark, never by color alone; the answers-saved reassurance is text, not color; Try again is a labelled control; tap targets at least 44px; the flow works without an account.

## Canonical reuse and next

Submit error is the employee-side version of the "could not save, the form stays filled" no-dead-end rule from 5.2 and 3.3: a failed submit becomes a plain explanation, an answers-saved reassurance, and a one-tap Try again that never asks the employee to answer twice. It reuses the 10.0 chrome, the 10.4 attention treatment, and the 10.4 reassurance block, and invents nothing global; no personal data is shown. This closes cluster 10 and the employee check-in surface (10.0 entry, 10.1 disclosure, 10.2 questions, 10.3 complete, 10.4 expired, 10.5 already submitted, 10.6 submit error). Next in the Detail rollout: cluster 8 Settings (8.0 shell, 8.1 Plan, 8.2 Privacy center, 8.3 Notifications, 8.4 Account), then cluster 1 Public pages (1.0 Pricing, 1.1 to 1.6).
