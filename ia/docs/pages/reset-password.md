# Node 2.4 - Reset password

*Page node, cluster 2 (Authentication). Source of truth for ia/reset-password.html. Type: page (transactional, tokened). Surface: Public / pre-auth. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the screen reached by clicking the reset link in the password-reset email; it closes the forgot-password loop opened at 2.1. It is the last discover-as-you-go [?] and finishing it completes Step 6.*

## Page: Reset password (2.4)

**Purpose:** let a user who forgot their password set a new one, safely and without a dead-end, after proving control of their email by clicking the reset link. Reset is a supporting page, not an acquisition surface, but it gates every recurring job (Main, read the pulse, catch a decline early, feel competent), so it must be fast, forgiving, and secure. **Jobs:** supporting (return access; gates Main, J1, J2, E1). Persona: Priya (operator) primarily; any returning user secondarily. Design Principle 2 (make the operator feel competent, no dead-ends) and Principle 3 (earn trust: a reset invalidates other sessions and says so plainly).

**Reached from:** the reset-password email link, which is the only entry. The request half of the loop lives on 2.1 Log in (the "Forgot password?" control enters an email and sends the reset email, its confirmation reusing the 2.2 pattern); 2.4 is the screen after the click. **Forward:** 2.1 Log in on success (sign in with the new password); 2.3 Invalid or expired link when the token is stale or already used.

### URL and token

- **URL:** `/reset-password?token=...` (a single-use, short-lived secret token in the query string).
- Because the URL carries a secret, the page is `noindex, nofollow` (stricter than 2.0 and 2.1, which are `noindex, follow`), and the referrer policy is `no-referrer` so the token is never leaked to any outbound resource. The token is validated server-side before the form is shown.

### Content blocks (mobile-first priority)

Block 1 is the first screen on mobile. Order reasoned from the 360px baseline up. The chrome mirrors 2.0, 2.1, and 2.3 so the auth pages read as one system.

1. **Pre-auth header**: the Brio mark and a single "Log in" link (the mirror used on 2.3), no job tabs. A person who lands here by mistake can always leave to 2.1.
2. **Heading**: a short, direct line ("Set a new password").
3. **New-password form**: a labelled "New password" field with a Show or Hide affordance, a labelled "Confirm password" field, a requirements hint (length first, NIST-aligned: at least 12 characters, checked against known-breached passwords, no forced composition or rotation), and the primary CTA "Set new password". Requirement state is shown by shape and text (a met item is a filled circle with a check, an unmet item is an outline circle), never by color alone.
4. **Security reassurance line**: a plain note that setting a new password signs out other devices, so the reset is honest about its effect.
5. **Footer**: 0.2 footer, public variant (condensed).

**Components used:** the auth-page shell from 2.0 and 2.1 (wf-authpage, wf-topbar, wf-auth, wf-lbl, wf-lblrow, wf-input, wf-b), the 2.2 and 2.3 confirmation layout (wf-confirm, the solid wf-check) for the success state, and 2.3 itself for the stale-link path. The requirements checklist (wf-req) is thin, node-specific layout; no new global component is invented. There is no magic-link or SSO option here; this page has one job.

### States and primary CTA

Forgiveness and security are the theme: a weak or mismatched password is corrected in place with the form still filled, and a stale link routes to the existing twin rather than dead-ending.

- **Default (valid token):** two empty password fields, the requirements hint, and Set new password. CTA: Set new password.
- **Typing, requirements met:** the checklist marks fill by shape and text as each requirement is satisfied (length reached, passwords match).
- **Mismatch:** inline text "passwords do not match" by the confirm field; the form stays filled. CTA: correct in place.
- **Too weak or breached:** inline text ("choose a longer password" or "this password has appeared in a data breach, pick another"); the form stays filled. CTA: correct in place.
- **Submitting:** Set new password shows in-progress; fields lock to prevent a double submit.
- **Success:** a brief confirmation (the solid 2.2 check) "Password updated", with the note that other devices were signed out, and a primary "Log in". CTA: Log in (to 2.1) with the new password. *Alternative, deferred as a product decision:* auto-sign-in straight to 4.0 Dashboard; the confirm-then-log-in path is chosen here because a reset should invalidate other sessions and exercising the new password aids recall.
- **Invalid, expired, or already-used link:** the token fails validation before the form is shown; route to 2.3 Invalid or expired link (the twin), whose "Request a new link" returns to the reset request. Never a dead-end.

**Primary CTA:** Set new password, then Log in (to 2.1).

### Adaptive

The same centered card and shell as 2.0, 2.1, and 2.3. On desktop it is a centered card; at the 360px baseline the same blocks stack full width, fields full width, tap targets at least 44px, the requirements hint directly under the fields.

### SEO block (noindex, nofollow)

Reset password is a tokened, transactional page with no acquisition value and a secret in the URL, so it is not indexed and, unlike 2.0 and 2.1, not followed either.

- **robots:** `noindex, nofollow` (the URL carries a single-use secret token; nothing to index, no equity to pass).
- **referrer-policy:** `no-referrer` so the token is never leaked to any outbound resource.
- **schema.org:** none.
- **hreflang / OG:** none.
- **In-app findability (still specified):** exactly one H1 (the heading) for the accessible document outline; New password and Confirm password are labelled inputs with visible labels; the requirements, mismatch, and weak-password messages are conveyed in text, not by color alone; Show or Hide, Set new password, and Log in are labelled controls with tap targets at least 44px.

## Canonical reuse and next

Reset password is the closing half of the forgot-password loop opened at 2.1: a tokened, `noindex, nofollow` page that validates the reset token, takes a new and a confirm password with a length-first NIST-aligned requirements hint (state by shape and text, never color), sets the password, signs out other devices, and routes to 2.1 Log in on success or to 2.3 on a stale link. It reuses the 2.0 and 2.1 auth-page shell, the 2.2 and 2.3 confirmation layout, and 2.3 for bad links, inventing nothing global. This closes the last discover-as-you-go [?] and finishes Step 6; next is Step 7 (full audit) and Step 8 (sitemap.html reconcile, adding cluster 1 pages, cluster 11 system nodes, and this 2.4 card, plus the CLAUDE and README IA row).
