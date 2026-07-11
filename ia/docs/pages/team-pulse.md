# Node 4.1 - Team pulse detail

*Page node. Source of truth for ia/team-pulse.html. Cluster 4 Dashboard and pulse, type: page, surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the full read behind the Dashboard pulse card (4.0); it shows the number, not only the word, and carries the same interpretive layer (E1).*

## Page: Team pulse detail (4.1)

**Purpose:** the full team wellbeing read behind the dashboard card, where the operator sees the score and its number, the trend over time, and the participation rate, always aggregate, and gets the same plain-language interpretation and next action. **Jobs:** J1 (see the team signal), J2 (catch a struggle early via the trend), E1 (feel competent via the interpretive layer). Persona: Priya (operator).

**URL / slug:** `/app/pulse` (operator app). **Breadcrumbs:** `Dashboard / Team pulse`; back returns to 4.0.

**Reached from:** 4.0 Dashboard (View full pulse), 4.2 Threshold alert detail (link to the pulse). **Forward:** 7.0 Share with owner, 5.2 Check-in setup (adjust the check-in).

### Content blocks (mobile-first priority)

1. **Nav + header** (0.1 operator, Dashboard active): H1 "Team pulse", subhead naming the program and period. Back to 4.0. First screen on mobile.
2. **Score, number, and reading**: the full interpretive layer, the plain-language reading plus the number behind it (a team wellbeing index [? exact scale deferred]), one line of interpretation, and one suggested next action. Unlike the dashboard card, the number is shown here.
3. **Trend over time**: a larger chart than the dashboard spark, the aggregate across recent closed cycles, so a decline is visible early (J2). Aggregate only, one value per cycle, never per person.
4. **Participation rate**: the share of the team who answered this cycle (and its trend), never who. Feeds trust in the reading.
5. **Minimum-N state**: when fewer than 5 have answered, the score area is replaced by "Waiting for at least 5 responses," with no live count; past cycles that met the threshold still render in the trend. This is the same D1 math as 4.3, shown here in the detail.
6. **Actions**: Share with your owner (to 7.0), the primary forward, and Adjust check-in (to 5.2). The interpretive next action from block 2 may point at either.
7. **Privacy-proof mini** (0.3 condensed): "Aggregate only. You never see who answered," linking to 1.1.
8. **App shell footer** (minimal): privacy link (1.1) and help.

### Components used

0.1 Navigation (operator, Dashboard active), 0.3 Privacy-disclosure (condensed). The score read, trend chart, and participation metric are the same thin in-node dashboard elements introduced at 4.0, shown here in fuller form; no new global component is invented.

### States

- **Default (N of 5 or more met):** score, number, interpretation, and next action; trend and participation render.
- **Minimum-N not met:** the score area shows "Waiting for at least 5 responses," no live count; the trend still shows past cycles that met the threshold; the action becomes Nudge the team (to 6.0). Never a dead-end.
- **Cycle open (4.4 logic):** the current cycle reads "results appear after it closes," no running tally; closed cycles still show.
- **No data yet (first run):** guidance to set up or invite, rather than an empty chart (to 5.0 or 6.0).
- **Loading:** skeleton read and chart.
- **Error:** "Could not load the pulse, retry" plus a link to 4.0, never a dead-end (MS4).
- **Guest / Owner:** redirect to 2.1 Log in / 9.0 Owner dashboard (the owner has an aggregate-only surface).

### Primary CTA

Share with your owner (to 7.0), the point where the operator turns the read into owner value; Adjust check-in (to 5.2) is the secondary path.

### Adaptive (mobile-first)

- **Mobile, base 360px:** header, then the score, number, and reading as the first screen, then the trend chart (fits the width), participation, and the two actions. Single column.
- **Desktop, 900px and up:** the score and reading lead at the left, the trend chart is prominent on the right, participation sits under the reading, and the actions are grouped under the score.

### SEO block (noindex)

Team pulse detail is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 ("Team pulse") for the accessible document outline; the score reading and number are text, not color-only; the trend chart has a text equivalent (direction and the latest values); tap targets at least 44px.

## Canonical reuse and next

Team pulse detail reuses 0.1 and 0.3 and invents nothing global; the score read, trend, and participation are the same in-node elements as 4.0, shown in full. It carries the minimum-N state (D1) in the detail view. Next: 4.2 Threshold alert detail (what dropped, a plain-language reading, a suggested next action, and a link to the relevant program), which closes cluster 4.
