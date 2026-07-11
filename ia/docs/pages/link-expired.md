# Node 2.3 - Invalid or expired link

*State node (error), the error partner of 2.2 Magic-link sent. Source of truth for ia/link-expired.html. Cluster 2 Authentication, type: state (error, supporting), surface [pub to P] public / pre-auth. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). Reuses the auth-page shell (2.0) and the confirmation layout (2.2), with an attention mark instead of a check. This state closes cluster 2. It is never a dead-end.*

## State: Invalid or expired link (2.3)

**Purpose:** when an operator clicks a magic link or a password-reset link that has expired or was already used, explain plainly what happened, reassure that nothing is wrong with the account, and offer a one-tap way to get a fresh link. The whole point of this state is that a stale link is never a wall. **Jobs:** supporting (recover access), inheriting the coverage of whichever path issued the link. Persona: Priya (operator), or the owner on the owner-surface sign-in.

**URL / slug:** `/auth/link-expired` (public, reached only by clicking a stale link). **Breadcrumbs:** none. **Reached from:** a clicked magic or reset link that is expired or already used (issued via 2.2 Magic-link sent). **Forward:** 2.1 Log in (Request a new link returns to the log-in page, where a fresh magic link or reset can be requested, which then shows 2.2 again).

### Content blocks (mobile-first priority)

1. **Pre-auth header**: the Brio mark and a "Back to log in" link (a reduced 0.1 variant, no job tabs).
2. **Attention mark and heading**: a simple black-and-white attention badge (an exclamation, not a check, so success and error are told apart without color) and a plain heading ("This link has expired").
3. **Explanation**: a short, non-blaming reason ("For your security, sign-in links expire after about 15 minutes and can be used only once") plus reassurance that the account is fine and nothing was lost.
4. **Primary action**: "Request a new link", to 2.1 Log in, where a fresh link can be requested. One tap out of the error.
5. **Secondary help**: a quiet line for the rare case ("Still stuck? Contact support"), so even the edge case has somewhere to go.

**Adaptive copy:** the same structure serves the reset path; only the noun changes ("sign-in link" versus "password-reset link"). The layout, mark, and primary action are identical.

### Components used

A reduced 0.1 Navigation (pre-auth header variant), the auth-page shell from 2.0, and the confirmation layout from 2.2 (centered badge, heading, block button) with an attention mark in place of the check. No new global is invented.

### States

- **Default (expired or used):** the attention mark, the explanation, Request a new link, and the support line.
- **Requesting:** the Request a new link control shows an in-progress state.
- **New link requested:** to 2.1 Log in, where the operator re-enters their email and receives a fresh link, which returns them to 2.2 Magic-link sent.
- **Already authenticated:** if the operator is in fact already signed in (for example the link was consumed in another tab), redirect to 4.0 Dashboard rather than showing an error.

### Primary CTA

Request a new link, to 2.1 Log in. This is the single, obvious recovery, and it is the concrete expression of the never-a-dead-end rule for the auth cluster: an expired link always has a one-tap way forward. The support line is a quiet fallback, not a competing action.

### Adaptive (mobile-first)

- **Mobile, base 360px:** header, the attention mark and heading, the explanation, Request a new link, then the support line. Single column, centered, nothing horizontally scrolls.
- **Desktop, 900px and up:** the same content in the centered, narrow card, matching 2.0, 2.1, and 2.2, so the whole auth cluster reads as one system.

### SEO block (noindex, nofollow)

Invalid or expired link is a transient error state reached only by clicking a stale link. It is not indexed and has nothing to crawl.

- **robots:** `noindex, nofollow`. The same treatment as 2.2, and unlike the 2.0 and 2.1 forms (which keep `follow` for outbound equity).
- **schema.org / hreflang / OG:** none.
- **In-app findability (still specified):** exactly one H1 (the heading) for the accessible document outline; the error is conveyed in text and an attention mark, not by color alone; Request a new link and the support line are labelled controls; tap targets at least 44px.

## Canonical reuse and next

Invalid or expired link reuses the auth-page shell from 2.0 and the confirmation layout from 2.2 (with an attention mark), and a reduced 0.1; it invents nothing global. It is the error partner of 2.2 and the guarantee that the auth cluster never dead-ends: any stale link has a one-tap route to a fresh one. This state closes cluster 2 Authentication (2.0 Sign up, 2.1 Log in, 2.2 Magic-link sent, 2.3 Invalid or expired link all complete). Next cluster in the Step 5 build order: cluster 7 Owner share (7.0 Share with owner, then 7.1, 7.2, 7.3).
