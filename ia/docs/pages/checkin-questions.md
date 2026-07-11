# Node 10.2 - Questions

*Page node, the body of the employee check-in. Source of truth for ia/checkin-questions.html. Cluster 10 Employee check-in, type: page, surface [E] employee (third-party, near-anonymous, mobile), on the check-in chrome from 10.0 / 10.1 (no navigation, no account). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the actual answering step, the render of what the operator configured in 5.2 Check-in setup.*

## Page: Questions (10.2)

**Purpose:** the employee answers the 1 to 3 questions the operator configured, in under 30 seconds, with quick emoji or slider inputs and nothing to type. It is the render, on the employee side, of 5.2 Check-in setup: the same 1 to 3 curated questions and the same answer types. **Jobs:** J4 (a check-in under 30 seconds) and item 3 (low-effort check-in). It also feeds J2 for the operator (the answers become the aggregate pulse), but the employee experience is pure low-effort answering. Persona: Yemi (employee). Design Principle 5 (low effort for everyone).

**URL / slug:** `/c/{invite-token}` (the questions step of the check-in flow, after 10.1); the token is the access, there is no login. **Breadcrumbs:** none. **No navigation, by design:** this is a linear near-anonymous flow, not an app. **Reached from:** 10.1 Pre-Q1 privacy disclosure (Continue). **Forward:** 10.3 Check-in complete (on a successful submit); **on failure:** 10.6 Submit error (answers preserved, never a dead-end, F2).

### Content blocks (mobile-first priority)

1. **Minimal check-in top bar with a persistent anonymity anchor**: the Brio mark and the company name, plus a small "Anonymous" reminder (the full disclosure was 10.1; here it is only a quiet anchor so trust carries through every question).
2. **Progress**: "Question 1 of 3" (or dots), so effort is bounded and the end is visible (J4). A one-question free-tier check-in shows a single step.
3. **The question**: one question per screen, its text the focus of the screen. One question at a time keeps each screen tiny and each answer considered.
4. **The answer input**: emoji scale or slider, whichever the operator chose in 5.2. Emoji is a row of options from struggling to great; slider is a track with end labels and a readout. Quick taps, nothing to type.
5. **Move on**: Next to the following question; Back to the previous one within the flow; on the last question the primary becomes Submit.

### Components used

The 10.0 / 10.1 check-in chrome (minimal top bar, no nav, no account). The emoji scale and the slider are page-specific form controls, thin, not globals; their types come from 0.6 Canonical lists (answer types) and mirror 5.2. No new global component is invented. The privacy content itself is not repeated here (it is 10.1); only the small persistent anchor remains.

### States

- **Question (emoji type):** the question, a row of emoji options, Next (or Submit on the last).
- **Question (slider type):** the question, a slider with end labels and a live value, Next (or Submit).
- **One-question check-in (free tier):** a single question, Submit directly, no multi-step progress.
- **In progress:** progress indicator advances; Back returns to the prior answer without losing it.
- **Submitting (loading):** after Submit, a brief sending state; this is the F2 Submit transition, no double submit.
- **Submit error:** to 10.6 Submit error, with the answers preserved so the employee retries, never re-enters (F2, never a dead-end).
- **Success:** to 10.3 Check-in complete.

### Primary CTA

Next while there are more questions; Submit on the last (or the only) question, to 10.3 on success and 10.6 on failure. Back is the in-flow secondary. There is no account step and no other navigation, by design: the check-in stays a short linear line from disclosure to thank-you.

### Adaptive (mobile-first)

- **Mobile, base 360px:** one question per screen, the input large and thumb-reachable, progress at the top, Next or Submit at the bottom. Single column; this is the primary and expected form, since the employee answers on a phone.
- **Desktop / wide:** the same one-question card centered in a narrow column; the surface never becomes an app, even on a large screen.

### SEO block (noindex)

Questions is a private, token-gated employee surface. It is not indexed and carries no schema. It is a transactional zone, per the platform SEO stance.

- **robots:** `noindex, nofollow`. Token-gated and personal; never indexed.
- **schema.org / hreflang / OG:** none.
- **In-app findability (not SEO, still specified):** exactly one H1 per screen (the current question) for the accessible document outline; the emoji options and the slider are labelled form controls with a group label, never carried by color alone; the progress is a live region ("Question 2 of 3"); Next, Back, and Submit are labelled controls; tap targets at least 44px; the flow works without an account.

## Canonical reuse and next

Questions renders, on the employee side, exactly what the operator set up in 5.2 (the same 1 to 3 curated questions and answer types), keeping the employee's job to quick taps under 30 seconds (Principle 5). It reuses the 10.0 / 10.1 check-in chrome and invents nothing global; the privacy promise is not repeated (it is 10.1), only a small persistent anchor remains. A failed submit routes to 10.6 with answers preserved, never a dead-end. Next in cluster 10: 10.3 Check-in complete (the thank-you and closure, no individual score shown to the employee), then the 10.4 expired / 10.5 already-submitted / 10.6 submit-error states.
