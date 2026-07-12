# Node 8.0 - Settings (shell)

*Page node (shell / container). Source of truth for ia/settings.html. Cluster 8 Settings, type: page (shell), surface [P] operator app (desktop-first in daily use, specified from the 360px baseline up). Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06). This is the operator utility shell: one container whose section list mirrors the settings areas, opening cluster 8 back in the operator app zone after the employee surface (cluster 10).*

## Page: Settings shell (8.0)

**Purpose:** give the operator one predictable place for account and configuration, as a shell whose section list mirrors the four settings areas (Plan, Privacy center, Notifications, Account). It is a utility, reached from a settings entry in the app chrome, not one of the four job tabs, so it never competes with the main-job navigation. **Jobs:** supporting; it is the container that holds item 1 (plan), item 4 and J3 and E2 (privacy center proof), items 9 and 10 (notifications), and account identity. Persona: Priya (operator). Design Principle 2 (make the non-expert operator feel competent, with a clear, low-jargon place for everything).

**URL / slug:** `/app/settings`, operator app. **Breadcrumbs:** `Settings` (the sections are `/app/settings/plan`, `/privacy`, `/notifications`, `/account`). **Reached from:** a Settings entry in the app chrome (a settings icon or link, a utility beside the four job tabs, not a tab itself). **Forward:** 8.1 Plan / subscription, 8.2 Privacy center, 8.3 Notifications, 8.4 Account settings. On desktop the selected section renders in a pane beside the list; on mobile each list row drills into its section.

### Content blocks (mobile-first priority)

1. **Nav + header** (0.1 operator app chrome): the Brio mark and the four job tabs (Dashboard, Programs, Team, Owner), none active, plus the Settings utility marked active. This makes clear Settings is a utility, not a job tab. H1 "Settings".
2. **Section list (mirrors the settings areas)**: Plan, Privacy center, Notifications, Account, each a row with a one-line description. This is the whole point of the shell, the map of what can be configured.
   - **Plan**: your tier, seats, and invoices (to 8.1).
   - **Privacy center**: what the owner can and cannot see (to 8.2). The operator-facing proof surface; lightly emphasized because it is the differentiator.
   - **Notifications**: reminders and digests (to 8.3).
   - **Account**: name, email, password, sign out (to 8.4).
3. **Account context (quiet)**: a small chip showing who is signed in (the operator email), for orientation; the full account controls live in 8.4.
4. **Section pane (desktop) or drill-in (mobile)**: on desktop the selected section renders in a pane beside the list (Plan shown by default); on mobile the list is full width and each row opens its section.

### Components used

0.1 Navigation (operator app chrome, the same wf-appbar and job tabs used from 7.0, with the Settings utility active rather than a job tab). The section list and the section pane are shell-specific layout, thin, not globals. The sections themselves (8.1 to 8.4) render their own components, including the canonical 0.3 privacy-disclosure (operator variant) inside 8.2. No new global component is invented here.

### States

- **Default (desktop):** the section list on the left with the first section (Plan) selected, its pane on the right.
- **Default (mobile):** the section list stacked full width; tapping a row drills into 8.1 to 8.4.
- **Active section:** the selected row is marked in the list; the pane (desktop) reflects it.
- **Guest / Owner:** redirect to 2.1 Log in / 9.0 Owner dashboard (the owner has no operator settings).

### Primary CTA

None of its own; the shell routes into 8.1 to 8.4. The section list is the primary affordance. Settings is deliberately a utility, one tap from the app chrome and out of the four-job-tab flow, so the main job stays uncluttered.

### Adaptive (mobile-first)

- **Mobile, base 360px:** the app chrome condenses, then the section list is a single stacked column, each row a label, a one-line description, and a chevron that drills into the section. This is a settings index that navigates, not a two-pane layout.
- **Desktop, 900px and up:** a two-pane layout, the section list as a left sub-nav and the selected section rendered in a pane beside it, so the operator can move between sections without losing context.

### SEO block (noindex)

Settings is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org.
- **In-app findability (not SEO, still specified):** exactly one H1 ("Settings") for the accessible document outline; the section list is a labelled navigation list; the active section is conveyed by text and state, not color alone; the account chip is text; tap targets at least 44px.

## Canonical reuse and next

Settings is the operator utility shell: one predictable container whose section list mirrors the four settings areas, reached as a utility beside the job tabs, never competing with the main job. It reuses the 0.1 app chrome and invents nothing global; the sections render their own content, including the 0.3 privacy-disclosure inside 8.2. Next in cluster 8: 8.1 Plan / subscription (tier, seats, invoices, change plan to 7.2), then 8.2 Privacy center (the operator-facing proof, 0.3 operator variant), 8.3 Notifications (reminders and digests, items 9 and 10), and 8.4 Account settings (identity, password, sign out, and delete account for GDPR erasure).
