# Node 8.3 - Notifications

*Section node, inside the 8.0 Settings shell. Source of truth for ia/settings-notifications.html. Cluster 8 Settings, type: section, surface [P] operator app (desktop-first in daily use, specified from the 360px baseline up). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is where the operator controls reminders and digest cadence: unlike the read-only 8.2 Privacy center, these are real toggles.*

## Section: Notifications (8.3)

**Purpose:** let the operator decide what Brio sends and how often: the check-in reminders that keep participation up, the weekly team digest for the operator, the monthly digest for the owner, and how the threshold alert is delivered. It keeps the product's gentle nudges under the operator's control. **Jobs:** J4 (low effort, the right nudges keep the check-in quick and timely), item 9 (operator digest), and item 10 (owner digest). Persona: Priya (operator). Design Principle 5 (low effort) and Principle 2 (the operator stays in control without jargon).

**URL / slug:** `/app/settings/notifications`, operator app, rendered as the active section of the 8.0 shell. **Breadcrumbs:** `Settings / Notifications`. **Reached from:** 8.0 Settings (the Notifications row). **Forward:** back to 8.0. Related surfaces: 9.2 Monthly owner digest (the owner email this controls), 4.2 Threshold alert (the alert this delivers).

### Content blocks (mobile-first priority)

1. **Section context**: inside the app chrome, "Settings / Notifications"; on mobile a back to the Settings index.
2. **Check-in reminders**: a toggle plus a cadence (weekly by default, with an optional send day). The gentle nudge that keeps participation up (J4); email in the MVP.
3. **Weekly team digest (to you)**: a toggle for the operator's weekly summary of the team pulse (item 9).
4. **Monthly owner digest**: a toggle for the owner's monthly email (item 10), the same digest as 9.2; on for a paid account where the owner is invited.
5. **Threshold alert delivery**: a toggle for how the early-warning alert (4.2) reaches the operator (email in the MVP), so a meaningful drop is not missed.
6. **Channel and privacy note**: email is the MVP channel; Slack is a later phase, shown as deferred. A short note that notifications never include individual data, only aggregate signals.

### Components used

The 8.0 Settings shell chrome (app chrome and the section pane), a toggle-row pattern (a label, a description, and an on or off switch, with state shown by position and text, not color), and cadence selects. These are section-specific form controls, thin, not globals. The digests and the alert this controls are 9.2 and 4.2. No new global component is invented; the toggle-row may be promoted to a global if a second settings surface needs it.

### States

- **Default:** reminders on with a weekly cadence; the operator digest on; the owner digest on for a paid account with an invited owner; the threshold alert on.
- **Owner not invited / free plan:** the monthly owner digest toggle is present but disabled with a short reason and a link to 7.1 or 8.1 (the owner dashboard is the paid unlock).
- **Reminders off:** the cadence control is hidden or disabled; a gentle note that participation may drop without nudges.
- **Slack (deferred):** the Slack channel is shown as a later phase, not switchable in the MVP.
- **Saving / saved:** a lightweight saved confirmation on change; errors keep the prior state, never a dead-end.
- **Guest / Owner:** redirect to 2.1 Log in / 9.0 Owner dashboard.

### Primary CTA

None single; the toggles and cadence selects are the controls, and changes save in place. The most consequential control is the check-in reminder cadence, because it drives participation (H2), and the owner digest, because it is the owner's recurring touch (item 10).

### Adaptive (mobile-first)

- **Mobile, base 360px:** a back to the Settings index, then each notification as a stacked row with its toggle and, where relevant, a cadence control. Single column.
- **Desktop, 900px and up:** rendered in the 8.0 two-pane, the Notifications section in the pane beside the settings section list.

### SEO block (noindex)

Notifications is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 ("Notifications" within the settings outline) for the accessible document outline; each toggle is a labelled switch whose on or off state is conveyed by position and text, not color alone; cadence selects are labelled; the deferred Slack channel is marked in text; tap targets at least 44px.

## Canonical reuse and next

Notifications is the operator's control over the product's nudges: reminders and cadence, the weekly operator digest, the monthly owner digest (9.2), and the threshold alert delivery (4.2), all inside the 8.0 shell and, unlike the read-only 8.2, actually switchable. It reuses the shell chrome and a thin toggle-row pattern, and invents nothing global; email is the MVP channel and Slack is deferred. Notifications never include individual data. Next in cluster 8: 8.4 Account settings (identity, email, password, magic link, sign out, and delete account for GDPR erasure), which closes cluster 8; then cluster 1 Public pages.
