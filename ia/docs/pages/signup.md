# Node 2.0 - Sign up

*Page node, the self-serve front door. Source of truth for ia/signup.html. Cluster 2 Authentication, type: page, surface [pub to P] public / pre-auth crossing into the private app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the first node of the main flow F1 and the first public / pre-auth page specified in the Detail Layer after Home.*

## Page: Sign up (2.0)

**Purpose:** the self-serve start. An operator who arrived from the Landing, Pricing, or a segment landing page creates a Brio account in seconds, with no credit card, and is taken straight into onboarding. This is the moment Priya first commits, so the page is a focused conversion surface: minimal chrome, one clear action, and one honest trust cue. **Jobs:** item 1 (self-serve start, no credit card) and Main (this is the gateway to running wellbeing). It starts the main flow F1. Persona: Priya (operator, first contact).

**URL / slug:** `/signup` (public). **Breadcrumbs:** none; this is a focused conversion page, not a browse surface. **Reached from:** 1.0 Landing, 1.x Pricing and segment landings ("Start free" / "Create account" CTAs), and the pre-auth header on other public pages. **Forward:** 3.0 Company setup (password path, F1 begins), 2.2 Magic-link sent (magic-link path), 2.1 Log in (returning user).

### Content blocks (mobile-first priority)

1. **Pre-auth header**: the Brio mark and a single "Log in" link (a reduced 0.1 variant, not the four job tabs, which are post-auth). Focused conversion, minimal exits.
2. **Heading and value line**: "Create your Brio account" plus one honest benefit line ("Start free. No credit card. Set up your first program in minutes."). Reinforces item 1.
3. **Sign-up form**: a labelled email field and a labelled password field, with the primary CTA "Create account". The shortest credible form.
4. **Magic-link option**: "Email me a link instead" (passwordless), which routes to 2.2 Magic-link sent. Given equal-weight visibility, since low-friction passwordless suits a non-technical operator.
5. **Legal microcopy**: "By creating an account you agree to our Terms and Privacy Policy", linking to 1.6 Legal documents. Compliance requirement at the point of account creation.
6. **Privacy trust cue**: one condensed 0.3 line stating the product promise where it first matters ("Brio only ever shows team-level, aggregate signals, never individual data"). The differentiator, present at the first commitment, one line, not a wall.
7. **Log-in link**: "Already have an account? Log in", to 2.1. Keeps a returning operator from dead-ending on the wrong page.
8. **Footer**: the 0.2 footer, public variant (condensed to legal and trust links).

**Note on SSO:** SSO (Google, Microsoft) is a paid feature per the tech-stack hypothesis, so it is deliberately absent from the self-serve sign-up. MVP sign-up is email + password or magic link only.

### Components used

A reduced 0.1 Navigation (pre-auth header variant: mark + Log in, no job tabs), 0.2 Footer (public variant), 0.3 Privacy-disclosure (condensed to a single trust line), and links to 1.6 Legal documents. The form controls are standard inputs, not a new global component. No new global is invented.

### States

- **Default:** empty email and password fields, Create account, the magic-link option, legal microcopy, and the trust line.
- **Field validation:** inline, field-level messages for an invalid email or a password below the minimum, conveyed in text (not color alone).
- **Email already registered:** a message that the email already has an account, with a direct "Log in" action (to 2.1). Never a dead-end.
- **Submitting:** the Create account control shows an in-progress state; fields are locked to prevent a double submit.
- **Success (password path):** account created, forward to 3.0 Company setup; the main flow F1 begins.
- **Magic-link path:** "Email me a link instead" sends the link and forwards to 2.2 Magic-link sent.
- **Already authenticated:** redirect to 4.0 Dashboard if onboarded, or to 3.0 Company setup if the account exists but onboarding is incomplete.

### Primary CTA

Create account, to 3.0 Company setup (F1). The magic-link option and the Log in link are supporting actions. There is no credit-card step and no paywall before value, which is the concrete expression of item 1 (self-serve start).

### Adaptive (mobile-first)

- **Mobile, base 360px:** pre-auth header, heading and value line, the email and password fields, Create account, the magic-link option, legal microcopy, the trust line, then the log-in link. Single column, full-width fields, nothing horizontally scrolls.
- **Desktop, 900px and up:** the same form in a centered, narrow card (about 400px) on a plain page, so the eye goes to the single action; the pre-auth header and the public footer bracket it.

### SEO block (noindex, follow)

Sign up sits in the public funnel, but the form itself is not indexed. This is a deliberate decision, not an oversight, and it differs from the deep app zones (which are `noindex, nofollow`).

- **robots:** `noindex, follow`. The form is thin, transactional, and duplicated in intent by the marketing pages, so it is kept out of the index; `follow` is retained so link equity flows through to the Privacy Policy, Terms, and Log in.
- **Where acquisition SEO actually lives:** on the indexed marketing pages that funnel here (1.0 Landing, 1.x Pricing, 1.5 segment / category landings), each with its own H1, schema, and target queries. Branded queries ("Brio sign up") are captured by the Landing / Home page, which then links to this form.
- **schema.org / hreflang / OG:** none on the form itself.
- **In-app findability (still specified):** exactly one H1 (the heading) for the accessible document outline; email and password are labelled inputs with visible labels; errors are conveyed in text, not by color alone; the primary and secondary actions are labelled buttons; tap targets at least 44px.

## Canonical reuse and next

Sign up reuses a reduced 0.1 (pre-auth header), 0.2 (public footer), and a condensed 0.3 trust line, and it links to 1.6 Legal documents; it invents nothing global. It is the entry of the main flow F1 and the self-serve expression of item 1: no credit card, straight into onboarding. Next in cluster 2: 2.1 Log in (return access), then the 2.2 Magic-link sent and 2.3 Invalid or expired link states.
