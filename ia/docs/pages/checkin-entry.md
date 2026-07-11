# Node 10.0 - Check-in entry

*Flow-entry node, the employee's first screen. Source of truth for ia/checkin-entry.html. Cluster 10 Employee check-in, type: flow entry, surface [E] employee (third-party, near-anonymous, mobile). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the entry of the employee flow F2: a linear, under-30-second check-in with no account for the first response. The employee is Yemi, a different, third-party persona; this surface is trust-critical, because it is where the riskiest assumption (H2, honest participation) is won or lost.*

## Page: Check-in entry (10.0)

**Purpose:** open the check-in from an invite link or a join code, and earn trust before asking for anything. The first thing the employee sees is that their answers are anonymous; the entry validates the link and routes onward. It is deliberately tiny and calm: no account, no navigation, no app. **Jobs:** J3 (certainty of privacy before responding) and J4 (a check-in under 30 seconds). Persona: Yemi (employee). Design Principle 3 (earn trust before asking for data) and Principle 5 (low effort).

**URL / slug:** `/c/{invite-token}` (per-cycle token link) or `/c` with a join-code field. The token is the access; there is no login. **Breadcrumbs:** none. **No navigation, by design:** this is a linear near-anonymous flow, not an app. **Reached from:** an invite link (email, Slack, poster QR) or a join code the operator shared. **Forward:** 10.1 Pre-Q1 privacy disclosure (valid link, F2), 10.4 Invite link expired (expired or invalid), 10.5 Already submitted this cycle.

### Content blocks (mobile-first priority)

1. **Minimal top bar**: the Brio mark and the company name ("for Acme"), no navigation and no account controls.
2. **Anonymity pre-header**: "Your answers are anonymous", shown first and prominently, before anything is asked. The trust anchor (J3), earned before data (Principle 3).
3. **Invitation context**: one line that sets the expectation ("Acme is running a quick wellbeing check-in, it takes under 30 seconds"), so effort is understood up front (J4).
4. **Start**: the primary action, to 10.1 Pre-Q1 disclosure.
5. **Join-code alternative**: for an employee who arrived without a link, a small "have a code?" field and Continue, the same forward path.

### Components used

A minimal check-in top bar (no nav, distinct from both the operator app and the owner surface), and standard inputs for the join-code field. The full privacy disclosure is the next screen (10.1), not here; this screen carries only the short anonymity pre-header. No new global is invented.

### States

- **Valid link:** the anonymity pre-header, the invitation context, and Start, forward to 10.1.
- **Join-code entry:** the code field and Continue; a valid code goes to 10.1, an invalid code shows an inline message.
- **Expired or invalid link:** to 10.4 Invite link expired ("ask your operator to resend"), never a dead-end (F2).
- **Already submitted this cycle:** to 10.5 Already submitted ("you have already checked in this cycle, thank you"), no duplicate, no individual data.
- **Loading (validity check):** a brief checking state while the token is validated, before routing.

### Primary CTA

Start, to 10.1 Pre-Q1 disclosure. The join-code Continue is the alternative entry. There is no account step, by design: the link or code is the access, which keeps the first check-in under 30 seconds and near-anonymous.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the top bar, the anonymity pre-header, the invitation line, Start, then the join-code alternative. Single column, large tap targets; this is the primary and expected form, since the employee opens the link on a phone.
- **Desktop / wide:** the same content centered in a narrow card; the surface never becomes an app, even on a large screen.

### SEO block (noindex)

Check-in entry is a private, token-gated employee surface. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. Token-gated and personal; never indexed. This is a transactional zone, per the platform SEO stance.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 (the invitation heading) for the accessible document outline; the anonymity statement is text, not an image, and is not carried by color alone; the join-code field is a labelled input; Start and Continue are labelled controls; tap targets at least 44px; the flow works without an account.

## Canonical reuse and next

Check-in entry opens the employee flow F2 and puts the anonymity promise first, before any question, which is the concrete expression of Principle 3 (earn trust before asking for data). It reuses nothing new and invents nothing global; the full disclosure is the next screen. The whole cluster is the trust-critical surface where H2 (honest participation at or above 65%) is won. Next in cluster 10: 10.1 Pre-Q1 privacy disclosure (the persistent, employee-variant 0.3 disclosure shown before Question 1, with the "see exactly what your manager sees" recovery), then the questions, thank-you, and the expired / already-submitted / submit-error states.
