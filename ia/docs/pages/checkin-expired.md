# Node 10.4 - Invite link expired

*State node (error), part of the employee check-in. Source of truth for ia/checkin-expired.html. Cluster 10 Employee check-in, type: state (error), surface [E] employee (third-party, near-anonymous, mobile), on the check-in chrome from 10.0 (no navigation, no account). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the employee-flow twin of 2.3 Invalid or expired link (the auth version): a stale or broken check-in link, made a recovery rather than a wall, so the employee flow F2 never dead-ends.*

## State: Invite link expired (10.4)

**Purpose:** when a clicked check-in link is expired (the cycle closed, or the link aged out) or invalid (broken or mistyped), explain it plainly and without blame, reassure that nothing personal is exposed, and route to a recovery, never a dead-end. **Jobs:** it protects J4 and E2 by keeping the experience calm and low-effort even when something went wrong, and it upholds the F2 no-dead-end rule. Persona: Yemi (employee). Design Principle 3 (earn and keep trust) and Principle 5 (low effort).

**URL / slug:** `/c/{invite-token}` (the token resolves to expired or invalid, so this state renders); the token is the access, there is no login. **Breadcrumbs:** none. **No navigation, by design:** this is a linear near-anonymous flow, not an app. **Reached from:** 10.0 Check-in entry (or any check-in link click) when the token is expired or invalid. **Forward / recovery:** the operator resend path (the employee cannot self-serve a new token, because the operator controls invites), plus an optional join-code entry, to 10.1 if the operator has shared a fresh code.

### Content blocks (mobile-first priority)

1. **Minimal check-in top bar with the persistent anonymity anchor**: the Brio mark, the company name if known, and the small "Anonymous" reminder, kept even on the error so trust holds.
2. **Attention mark**: the same treatment as 2.3, a dashed badge with an "!" (not a check), so the error reads as different from success without relying on color.
3. **Plain, non-blaming explanation**: "This check-in link has expired" or "we could not open this link", with a one-line reason (links are per cycle and expire; used-once). Adaptive copy for expired vs invalid.
4. **Reassurance**: nothing personal is exposed and nothing was recorded; the privacy promise is unaffected. No personal data appears on this screen.
5. **Recovery (never a dead-end)**: "Ask your operator to resend the check-in link" is the primary path, since the employee cannot mint a new token. An optional "have a fresh code?" join-code field lets an employee who was given a new code continue straight to 10.1. A quiet "who is my operator?" hint helps the employee know who to ask.

### Components used

The 10.0 check-in chrome (minimal top bar, no nav, no account), the 2.3 attention treatment (the dashed "!" badge, error read without color), and the 10.0 join-code field (label, code input, Continue) for the optional recovery. No new global component is invented; the privacy content itself is not repeated, only the persistent anchor and the reassurance line remain.

### States

- **Expired link:** the cycle closed or the link aged out; "this check-in link has expired", ask the operator to resend.
- **Invalid link:** the link is broken or mistyped; "we could not open this link", same recovery.
- **Join-code recovery:** the employee enters a fresh code the operator shared; a valid code goes to 10.1, an invalid code shows an inline message (it does not become a new dead-end).

There is no "request a new link" self-serve button, unlike the auth twin 2.3, because the employee does not control invites; the recovery is the operator resend path plus the optional code.

### Primary CTA

Ask the operator to resend (guidance, since the employee cannot self-serve a token), with the optional join-code Continue as the in-screen recovery to 10.1. No account step and no other navigation, by design: even the error keeps the surface a calm near-anonymous line, never a wall.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the attention mark, the explanation, the reassurance, then the resend guidance and the optional code field, in a single column. This is the primary and expected form, since the employee opened the link on a phone.
- **Desktop / wide:** the same content centered in a narrow card; the surface never becomes an app, even on a large screen.

### SEO block (noindex)

Invite link expired is a private, token-gated employee surface. It is not indexed and carries no schema. It is a transactional zone, per the platform SEO stance.

- **robots:** `noindex, nofollow`. Token-gated and personal; never indexed.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 (the explanation heading) for the accessible document outline; the error is conveyed by text and the "!" mark, never by color alone; the join-code field is a labelled input and Continue is a labelled control; tap targets at least 44px; the flow works without an account.

## Canonical reuse and next

Invite link expired is the employee-flow version of the no-dead-end rule that 2.3 applies in auth: a stale or broken link becomes a plain explanation plus a real recovery (ask the operator to resend, or enter a fresh code), never a wall. It reuses the 10.0 chrome, the 2.3 attention treatment, and the 10.0 join-code field, and invents nothing global; no personal data is shown. Next in cluster 10: 10.5 Already submitted this cycle (a valid link, but the employee has already answered) and 10.6 Submit error (a failure at submit, answers preserved), the last two states that keep the employee flow from ever dead-ending.
