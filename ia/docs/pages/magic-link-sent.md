# Node 2.2 - Magic-link sent

*State node, a "check your email" confirmation. Source of truth for ia/magic-link-sent.html. Cluster 2 Authentication, type: state (supporting), surface [pub to P] public / pre-auth. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). Reuses the auth-page shell built in 2.0 Sign up. This one state serves three request paths: the magic-link option on 2.0 Sign up, the magic-link option on 2.1 Log in, and the forgot-password reset on 2.1.*

## State: Magic-link sent (2.2)

**Purpose:** confirm that a link is on its way and hold the operator calmly while they go to their inbox. This is a waiting state, so the on-screen job is small: reassure, show where the link went (so a mistyped address is caught), and offer a low-friction resend. The real forward action happens when the operator clicks the link in their email. **Jobs:** supporting (return / first access), inheriting the job coverage of whichever path requested the link. Persona: Priya (operator), or the owner on the owner-surface sign-in.

**URL / slug:** `/auth/check-email` (public, but reached only after a request, not a browse target). **Breadcrumbs:** none. **Reached from:** 2.0 Sign up (magic-link option), 2.1 Log in (magic-link option), 2.1 Forgot password (reset request). **Forward:** 4.0 Dashboard when a valid magic link is clicked (or 3.0 Company setup if onboarding is incomplete; for the reset path, the reset-password-entry screen, which is [?] not yet a node, flagged for Step 6), and 2.3 Invalid or expired link when the link is stale or already used.

### Content blocks (mobile-first priority)

1. **Pre-auth header**: the Brio mark and a "Back to log in" link (a reduced 0.1 variant, no job tabs).
2. **Confirmation mark and heading**: a simple black-and-white confirmation badge and "Check your email". Calm, done, not alarming.
3. **Body with the target address**: "We sent a link to you@company.com. Open it to continue." Showing the address lets the operator catch a typo immediately.
4. **Open-mail hint**: a helper line or button to open the mail app, plus the link's expiry ("The link expires in about 15 minutes"), so expectations are set before it lapses to 2.3.
5. **Resend**: "Didn't get it? Resend", with a short cooldown to prevent spamming, and a "Use a different email" path back to the requesting page (2.0 or 2.1).

**Adaptive copy:** the same structure serves the reset path; only the verb changes ("Open it to log in" versus "Open it to reset your password"). The layout, states, and controls are identical.

### Components used

A reduced 0.1 Navigation (pre-auth header variant) and the auth-page shell from 2.0 (centered card, headings, block button, alt link), plus a simple confirmation badge. No new global is invented.

### States

- **Default (link sent):** confirmation, the target address, the open-mail hint with expiry, Resend, and Use a different email.
- **Resend cooldown:** immediately after sending, Resend is disabled with a short countdown, to prevent repeated sends.
- **Resent:** a brief "sent again" acknowledgement; the cooldown restarts.
- **Valid link clicked (elsewhere):** the operator lands authenticated, to 4.0 Dashboard (or 3.0 if onboarding is incomplete; or, on the reset path, the reset-password-entry screen [?]).
- **Expired or used link:** to 2.3 Invalid or expired link, which offers a fresh request.
- **Already authenticated:** if the operator is somehow already signed in, redirect to 4.0 Dashboard.

### Primary CTA

There is no forward button on this screen by design; the primary action lives in the email. On-screen, the meaningful controls are the open-mail hint (help the operator get to the link) and Resend (recover a lost email). Use a different email is the escape back to the form. This keeps the waiting state honest: it does not pretend to advance the flow itself.

### Adaptive (mobile-first)

- **Mobile, base 360px:** header, confirmation mark and heading, the body with the target address, the open-mail hint and expiry, then Resend and Use a different email. Single column, centered, nothing horizontally scrolls. On mobile the open-mail hint is most useful, since the inbox is one tap away.
- **Desktop, 900px and up:** the same content in the centered, narrow card, matching 2.0 and 2.1.

### SEO block (noindex, nofollow)

Magic-link sent is a transient, transactional state reached only after a request. It is not indexed and has nothing to crawl.

- **robots:** `noindex, nofollow`. Unlike the 2.0 and 2.1 forms (which keep `follow` for their outbound equity), this is a dead-end waiting state with no meaningful links to pass equity to.
- **schema.org / hreflang / OG:** none.
- **In-app findability (still specified):** exactly one H1 (the heading) for the accessible document outline; the target email address is selectable text; the expiry is stated in text, not implied by color; Resend and Use a different email are labelled controls; the disabled/cooldown state of Resend is conveyed in text; tap targets at least 44px.

## Canonical reuse and next

Magic-link sent reuses the auth-page shell from 2.0 and a reduced 0.1; it invents nothing global, and one state serves all three request paths (sign-up magic link, log-in magic link, password reset). It is deliberately a small, honest waiting screen: the forward action is the email link, and an expired link routes cleanly to 2.3. Next in cluster 2: 2.3 Invalid or expired link (the error partner of this state), which closes cluster 2.
