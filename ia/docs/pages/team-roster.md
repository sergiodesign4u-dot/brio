# Node 6.0 - Team roster (members, invite, participation)

*Page node. Source of truth for ia/team-roster.html. Cluster 6 Team, type: page, surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This page holds a subtle privacy boundary: the roster knows who is on the team, because the operator invited them, but it is never linked to who answered a check-in.*

## Page: Team roster (6.0)

**Purpose:** the operator invites the team, sees who is in, and reads how much of the team is taking part, all without ever learning who answered what. **Jobs:** Main (run wellbeing without HR training), plus inviting the team and reading participation. Persona: Priya (operator).

**URL / slug:** `/app/team` (operator app). **Breadcrumbs:** none. Team is a top-level job tab (0.1). **Reached from:** the Team tab, 4.0 Dashboard (Nudge the team / invite), 3.2 onboarding. **Forward:** 6.1 Resend or manage invite (a 0.5 dialog), 4.0 Dashboard.

### Content blocks (mobile-first priority)

1. **Nav + header** (0.1 operator, Team active): H1 "Your team", subhead with team size. First screen on mobile.
2. **Invite block**: the join link with a copy control, the join code, and an email-invite field. The primary way to grow the roster. Same invite mechanism as 3.2, shown here standalone.
3. **Team size + participation**: the count invited and joined, and the participation rate as a share ("72% answered this cycle"), never who. Participation follows the D1 rule below.
4. **Members list**: the invited members with name or email and a status (invited or joined), each with a resend or manage action (to 6.1). This is invite identity only, the people the operator chose to invite; it is never connected to check-in answers.
5. **Privacy boundary callout**: the wall between roster identity and answer identity, stated plainly (see the dedicated section).
6. **App shell footer** (minimal): privacy link (1.1) and help.

### Components used

0.1 Navigation (operator, Team active), 0.3 Privacy-disclosure (condensed, framed for the roster boundary), 0.5 Dialog (the 6.1 resend or manage dialog). The invite block and members list are thin in-node elements, not new globals. No new global component is invented.

### The wall between roster identity and answer identity

This is the make-or-break boundary of the page. Two kinds of "who" exist, and only one is ever visible:

- **Roster identity (visible):** who is on the team. The operator invited these people, so their names or emails appear here, with an invited or joined status. This is normal team administration.
- **Answer identity (never visible):** who answered a check-in, and what they said. This is never shown, never linked to the roster, and cannot be derived from it. Participation is only ever a share of the whole team, never a list of respondents.

So the members list and the participation rate sit on the same page but are never joined. The operator can see that Yemi is on the team and that 72% of the team answered, but never that Yemi answered, or what Yemi said.

### States

- **Default (has members):** invite block, participation share, members list with statuses.
- **Empty (first run, no members):** just the invite block with "Invite your team to get started"; no list yet. Never a dead-end.
- **Pending invites:** members show an invited status with a resend action (to 6.1).
- **Open cycle (D1, no live count):** while a cycle is open, the participation area shows "results appear after the cycle closes" with no running tally, consistent with 4.4. The share appears only after the cycle closes at minimum-N.
- **Loading:** skeleton invite block and list.
- **Error:** "Could not load your team, retry" plus a link to 4.0, never a dead-end (MS4).
- **Guest / Owner:** redirect to 2.1 Log in / 9.0 Owner dashboard (owners do not manage the roster).

### Primary CTA

Invite the team (copy the join link, or send an email invite); manage an existing invite opens 6.1.

### Adaptive (mobile-first)

- **Mobile, base 360px:** header, the invite block, participation, then the members list stacked as rows. Single column; copy-link within the first screen.
- **Desktop, 900px and up:** the invite block and participation sit in a top panel, the members list is a table below, each row with its status and manage action.

### SEO block (noindex)

Team roster is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 ("Your team") for the accessible document outline; the join code and link are selectable text with labeled copy controls; the members list is a real list or table with a status per row in text, not color-only; the participation share has a text label; tap targets at least 44px.

## Canonical reuse and next

Team roster reuses 0.1, 0.3, and 0.5 (via 6.1) and invents nothing global; the invite block and members list are thin in-node elements. It respects the D1 no-live-count rule for participation and keeps roster identity and answer identity strictly separate. Next: 6.1 Resend or manage invite (the small 0.5 dialog behind the manage action), then cluster 3, the onboarding wizard (3.0 to 3.3).
