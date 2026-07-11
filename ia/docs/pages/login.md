# Node 2.1 - Log in

*Page node, return access. Source of truth for ia/login.html. Cluster 2 Authentication, type: page, surface [pub to P] public / pre-auth crossing into the private app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). Reuses the auth-page shell built in 2.0 Sign up. This is the recurring gate to the whole operator app.*

## Page: Log in (2.1)

**Purpose:** get a returning operator back into the app quickly. Log in is a supporting node, not an acquisition surface, but it gates every recurring job (Main, J1 read the pulse, J2 catch a decline early, E1 feel competent), so it must be fast, forgiving, and never a dead-end. **Jobs:** supporting (return access) that gates Main, J1, J2, E1. Persona: Priya (operator, returning). Also the return path for the owner surface sign-in.

**URL / slug:** `/login` (public). **Breadcrumbs:** none; a focused access page. **Reached from:** the pre-auth header "Log in" link on public pages and on 2.0 Sign up, a bookmark, or a session-expiry redirect. **Forward:** 4.0 Dashboard (success, onboarded), 3.0 Company setup (success but onboarding incomplete), 2.2 Magic-link sent (magic-link path), 2.3 Invalid or expired link (a stale magic or reset link).

### Content blocks (mobile-first priority)

1. **Pre-auth header**: the Brio mark and a single "Sign up" link (the mirror of 2.0's header), a reduced 0.1 variant, no job tabs.
2. **Heading**: a short welcome-back line ("Log in to Brio").
3. **Log-in form**: a labelled email field and a labelled password field, with "Forgot password?" placed by the password field, and the primary CTA "Log in".
4. **Magic-link option**: "Email me a link instead" (passwordless), to 2.2 Magic-link sent. Equal-weight, since passwordless suits a non-technical operator and sidesteps a forgotten password entirely.
5. **Sign-up link**: "New to Brio? Create an account", to 2.0, so someone on the wrong page is never stuck.
6. **Footer**: the 0.2 footer, public variant (condensed).

**Note on the trust cue:** the condensed 0.3 privacy line from 2.0 is deliberately omitted here. The differentiator is established at first commitment (sign-up); a returning operator does not need re-selling, and a leaner log-in form converts faster. **Note on SSO:** SSO (Google, Microsoft) is a paid feature, so it is absent from the standard log-in; email + password or magic link only.

### Components used

A reduced 0.1 Navigation (pre-auth header variant), 0.2 Footer (public variant), and the auth-page shell from 2.0 (header, centered card, labelled inputs, primary action, "or" divider, magic-link option, alt link). No new global is invented.

### States

- **Default:** empty email and password, Forgot password, Log in, the magic-link option, and the sign-up link.
- **Field validation:** inline text for an invalid email (not color alone).
- **Wrong credentials:** a single generic message ("email or password is incorrect"), which does not reveal which field was wrong (a standard account-safety practice), with Forgot password close by. Never a dead-end.
- **Submitting:** the Log in control shows an in-progress state; fields lock to prevent a double submit.
- **Success:** to 4.0 Dashboard if onboarded, or to 3.0 Company setup if the account exists but onboarding was never finished (resume the wizard).
- **Magic-link path:** "Email me a link instead" sends the link and forwards to 2.2 Magic-link sent.
- **Forgot password:** opens a reset request (enter email, we send a reset link); the "check your email" confirmation reuses the 2.2 pattern. The dedicated reset-password-entry screen reached from that email is not yet a registered node and is flagged [?] for Step 6 discover-as-you-go.
- **Stale magic or reset link:** arriving via an expired or already-used link lands on 2.3 Invalid or expired link.
- **Already authenticated:** redirect to 4.0 Dashboard.

### Primary CTA

Log in, to 4.0 Dashboard. The magic-link option, Forgot password, and the sign-up link are supporting actions. Speed and forgiveness matter more than persuasion here, because the value is on the other side of the gate.

### Adaptive (mobile-first)

- **Mobile, base 360px:** pre-auth header, heading, email and password (with Forgot password by the password), Log in, the magic-link option, then the sign-up link. Single column, full-width fields, nothing horizontally scrolls.
- **Desktop, 900px and up:** the same form in a centered, narrow card (about 400px), matching 2.0 so the two auth pages read as one system.

### SEO block (noindex, follow)

Log in is a public but purely functional return-access page. It carries no acquisition value and is not indexed.

- **robots:** `noindex, follow`. The form is thin and transactional; `follow` is retained so equity flows to the sign-up page and the legal links. Same treatment as 2.0, and different from the deep app zones (`noindex, nofollow`).
- **Branded / navigational queries:** "Brio login" is a navigational query best served by the Home / Landing page, which links here; the form itself does not need to rank.
- **schema.org / hreflang / OG:** none on the form.
- **In-app findability (still specified):** exactly one H1 (the heading) for the accessible document outline; email and password are labelled inputs with visible labels; the wrong-credentials message is conveyed in text, not by color alone; Forgot password, Log in, and the magic-link option are labelled controls; tap targets at least 44px.

## Canonical reuse and next

Log in reuses the auth-page shell from 2.0, a reduced 0.1, and the 0.2 public footer; it invents nothing global. It is the recurring gate to the app: fast, forgiving (wrong credentials and forgotten passwords both have a clear path), and never a dead-end. Next in cluster 2: 2.2 Magic-link sent (the "check your email" state, shared by the magic-link and password-reset paths), then 2.3 Invalid or expired link, which closes cluster 2.
