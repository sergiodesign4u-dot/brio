# Node 3.2 - Invite team (join link / code)

*Page node, wizard step 3 (final). Source of truth for ia/onboarding-invite.html. Cluster 3 Onboarding, type: page (wizard step), surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). Uses the wizard shell from 3.0. This step closes the main flow F1 and hands the operator to the Dashboard.*

## Page: Invite team (3.2)

**Purpose:** the last onboarding step, invite the team so the program has people to hear from, then finish into the Dashboard. Inviting is encouraged but not required to finish, so the operator is never blocked. **Jobs:** Main (run wellbeing without HR training), and inviting the team. Persona: Priya (operator, brand-new).

**URL / slug:** `/app/onboarding/invite` (operator app, wizard). **Breadcrumbs:** none; the wizard shows "Step 3 of 3". **Reached from:** 3.1 First program confirm (Confirm). **Forward:** 4.0 Dashboard (Finish), 3.3 Invite-send error (on send failure).

### Content blocks (mobile-first priority)

1. **Wizard header**: the Brio mark and "Step 3 of 3". First screen on mobile.
2. **Heading**: a warm, final-step line ("Invite your team").
3. **Invite block**: the join link with a copy control, the join code, and an email-invite field. The same in-node invite element as 6.0 Team roster.
4. **Privacy note**: the roster wall, condensed, "The people you invite are never linked to who answered a check-in" (0.3 condensed). This is the trust message right where the operator first shares Brio with the team.
5. **Finish action**: Finish and go to your dashboard (to 4.0), the primary. Inviting is not required to finish.
6. **Invite later**: a secondary way to finish without inviting now (still to 4.0); the team can be invited from 6.0 any time.

### Components used

0.3 Privacy-disclosure (condensed, the roster wall note), the in-node invite element (join link, code, email) shared with 6.0, and the wizard shell from 3.0. No new global component is invented.

### States

- **Default (step 3):** invite block, privacy note, finish.
- **Sending invites:** the send control shows a sending state; the finish action stays available.
- **Send failure:** to 3.3 Invite-send error (which invites failed, retry, skip for now); the join link and code still work, so it is never a dead-end (F1 MS3).
- **Finish (with or without invites):** to 4.0 Dashboard; this completes onboarding, and the wizard is not reachable from nav afterward.
- **Back:** to 3.1 First program confirm.
- **Already onboarded:** redirect to 4.0 Dashboard. **Guest:** redirect to 2.1 Log in.

### Primary CTA

Finish and go to your dashboard, to 4.0. Sending email invites and Copy link are supporting actions; Invite later is the low-friction way to finish.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the wizard header, heading, invite block (link and copy, code, email field), the privacy note, then Finish and the invite-later link. Single column; copy-link within the first screen.
- **Desktop, 900px and up:** the same content in a centered, narrow wizard card.

### SEO block (noindex)

Invite team is a transactional, authenticated wizard step. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 (the heading) for the accessible document outline; the join code and link are selectable text with labelled copy controls; the email field is a labelled input; the progress indicator states "Step 3 of 3" in text; tap targets at least 44px.

## Canonical reuse and next

Invite team reuses 0.3, the in-node invite element from 6.0, and the wizard shell; it invents nothing global. Finishing here completes the main flow F1 and hands off to the Dashboard. Next: 3.3 Invite-send error (the state behind a failed send), which closes cluster 3.
