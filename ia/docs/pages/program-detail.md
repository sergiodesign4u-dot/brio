# Node 5.1 - Program detail / manage

*Page node. Source of truth for ia/program-detail.html. Cluster 5 Programs, type: page, surface [op] operator app. Language: English (US). Mockups are black and white, wireframe level (color arrives at Concept, stage 06).*

## Page: Program detail / manage (5.1)

**Purpose:** the single program opened into a full page, where the operator reads what it runs and manages its lifecycle (finish setup, activate, end). The 0.4 card becomes the page header, then expands into management. **Jobs:** Main (run wellbeing without HR training) + item 2 (self-serve start and manage). Persona: Priya (operator).

**URL / slug:** `/app/programs/:slug` (for example `/app/programs/weekly-mood-check-in`), operator app. **Breadcrumbs:** `Programs / [program name]`, one level under the Programs tab; a back affordance returns to 5.0.

**Reached from:** 5.0 library card, 5.3 empty shortcut, 3.1 onboarding "pick another / manage". **Forward:** 5.2 Check-in setup; 4.1 Team pulse detail (when ended, View results).

### Content blocks (mobile-first priority)

1. **Nav + header card** (0.1 operator, Programs active; 0.4 card in its header-summary form): category, title, cadence and duration, status badge (draft / active / ended). Back to 5.0. First screen on mobile.
2. **Status and primary action band**: the one clear next step, which changes by status (see States and CTA). Kept high so the non-expert always sees what to do.
3. **Overview / what it runs**: one short paragraph, cadence, duration, category. Plain language, no HR jargon.
4. **Check-in questions it carries**: the 1 to 3 questions shown read-only here, each with its type (emoji or slider). Editing them is 5.2, not here; this block is a summary with an "Edit check-in (to 5.2)" link.
5. **Privacy reminder** (0.3 operator variant, condensed): "You see aggregate only, never who answered." Reinforced at the manage surface because this is where the operator configures data collection. Reuse of the canonical component, not a new one.
6. **Manage actions**: activate (draft to active), end (active to ended, a destructive action that opens the 0.5 confirm dialog), edit check-in (to 5.2). Reuse of 0.5 Dialog for the End confirm.
7. **App shell footer** (minimal): privacy link (1.1) and help, not the public marketing footer (0.2).

### Components used

0.1 Navigation (operator logged-in, Programs active), 0.4 Program card (header-summary form, status variants), 0.3 Privacy-disclosure (operator variant, condensed reminder), 0.5 Dialog / modal shell (End program confirm), 0.6 Canonical lists (category, statuses). No new component is invented.

### States

- **Guest (not authed):** redirect to 2.1 Log in, return here after.
- **Draft:** check-in not finished; the primary action is Finish setup (to 5.2); Activate is disabled until the check-in is configured.
- **Active (running):** shows the next cycle date; manage actions are Edit check-in (to 5.2) and End program (0.5 confirm). Per-program participation and results are read on the dashboard, never a per-person view here.
- **Ended:** shows it completed; actions are View results (to 4.1) and Reactivate.
- **Loading:** skeleton header and body until the program resolves.
- **Error:** "Could not load this program, retry" plus a link back to 5.0, never a dead-end (MS4).
- **Not found (bad slug):** "Program not found" plus back to 5.0, never a dead-end.
- **Owner role:** Programs is an operator surface; an owner who lands here is sent to 9.0 Owner dashboard.

### Primary CTA (varies by status)

The through-line action is Set up check-in to 5.2 (the node's forward transition). By status: draft = Finish setup (to 5.2); active = Edit check-in (to 5.2), with End program as the destructive secondary; ended = View results (to 4.1). One clear next step per status.

### Adaptive (mobile-first)

- **Mobile, base 360px:** header card, then the status and action band, then overview, questions, and manage stacked in one column. The primary action is within the first screen.
- **Desktop, 900px and up:** the header card spans full width; below it a two-column split, overview and questions on the left, a manage panel (status, primary action, activate / end) on the right.

### SEO block (noindex)

Program detail is inside the operator app, an authenticated per-account view. It is not indexed and carries no schema.

- **robots:** `noindex, nofollow`. No canonical for search, no hreflang, no Open Graph, no schema.org. Reason: authenticated, per-account application view.
- **In-app findability (not SEO, still specified):** exactly one H1 (the program name) for the accessible document outline; the status badge and questions are text, not color-only; manage actions are labeled controls; the End confirm follows the 0.5 dialog a11y contract (focus trap, Esc, inert background); tap targets at least 44px.

## Canonical reuse and next

Program detail reuses 0.1, 0.4, 0.3, 0.5, and 0.6 and invents nothing. It adds 5.1 as a new consumer of the 0.5 dialog (End program confirm); recorded so a change to 0.5 propagates here. Next page: 5.2 Check-in setup (pick 1 to 3 questions, cadence, the minimum-N and no-live-count notes), per the persona-priority order.
