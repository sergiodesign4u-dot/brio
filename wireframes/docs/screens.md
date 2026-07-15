# Wireframes - Screen x State Matrix (Stage 04)

*Phase: Wireframes. The order for the grey clickable prototype. This file is not a wireframe: no layout here, only screen names, jobs, flow places, and states. Every row traces to a node in ia/docs/sitemap.md, a job in user-research/docs/jtbd.md, and a place in ia/docs/flows.md. States are taken verbatim from the "States" section of each node's spec in ia/docs/pages/. Nothing is invented: a state not in the IA spec is not a column. This step covers the MAIN flow (Flow 1) only; Step 8 extends the matrix to Flows 2 to 4 and the rest of the sitemap.*

---

## Selection (confirmed at Step 1)

- **ETALON (working horse, max reuse): 4.0 Dashboard** (`dashboard.html`). Its template feeds the most screens: it establishes the operator app shell (0.1 global nav + page frame, reused on every operator screen: 4.x, 5.x, 6.x, 7.x, 8.x) and the pulse card (score + interpretation + next action, reused on 4.1, 4.2, 9.0, 9.2). It also carries the richest state set (base, empty, cycle-open, loading, error, no-program, alert), so building it fully sets the state pattern for the whole product. It is the aha home, 1 tap from login. Not the first screen of the flow, by design.
- **FIRST FLOW to assemble: Flow 1 (MAIN JOB, Priya) - Run wellbeing without HR training.** The product spine and the mandated main flow. Its climax (Dashboard to Team pulse) reuses the etalon, and building it first delivers Home, Sign up, the onboarding wizard, Dashboard, and Team pulse, the foundation every other flow hangs on. The etalon (Dashboard) is built first inside Step 4, then its states (Step 5), then the remaining Flow 1 screens (Step 6).
- **Alternative first flow considered:** Flow 4 (J2 early warning: Dashboard to Threshold alert to Team pulse) is the tightest pure-reuse chain (three app-shell + pulse-card screens back to back) but it is a related flow, shorter and less foundational than the mandated main flow, so it is deferred to Step 8.

**Secondary templates** (not the etalon; each is set the first time we build one of its screens in Step 6, then cloned): the thin onboarding wizard card (3.0, 3.1, 3.2, 3.3) and the pre-auth centered form card (2.0 Sign up, and later 2.1 Log in, 2.4 Reset password).

---

## Main-flow screens (Flow 1)

| # | Screen (node) | Job it closes | Place in Flow 1 | Viewports |
|---|---------------|---------------|-----------------|-----------|
| 1 | **0.0 Home** (`home.html`) | Main + item 1 (acquisition) | Entry (Landing) | 360 + desktop |
| 2 | **2.0 Sign up** (`signup.html`) | item 1 (self-serve start) | Landing to Sign up to Company setup | 360 + desktop |
| 3 | **3.0 Company setup** (`onboarding-company.html`) | J6 (size drives the pre-selected program) | Wizard step 1 of 3 | 360 + desktop |
| 4 | **3.1 First program confirm** (`onboarding-program.html`) | Main + J6 + item 2 | Wizard step 2 of 3 | 360 + desktop |
| 5 | **3.2 Invite team** (`onboarding-invite.html`) | Main + item 3 | Wizard step 3 of 3 | 360 + desktop |
| 6 | **3.3 Invite-send error** (`invite-send-error.html`) | Main + item 3 (never a dead-end, MS3) | State behind a failed send in step 3 | 360 + desktop |
| 7 | **4.0 Dashboard** (`dashboard.html`) - ETALON | E1 + J1 + J2 (the aha) | Onboarding finish to Dashboard | 360 + desktop |
| 8 | **4.1 Team pulse detail** (`team-pulse.html`) | J1 + J2 + E1 | Dashboard to Team pulse (success end) | 360 + desktop |
| 9 | **6.0 Team roster** (`team-roster.html`) | Main + item 3 | Recovery detour (nudge to resend to back) | 360 + desktop |

---

## State matrix

*Base = the primary rendered page for the node (the state the user acts from); it always exists. Floor states (Empty / Error / Loading) get a tick only where the node's IA spec lists them. The last column carries the real role, domain, and transient states from the same spec. A tick means the state is real; a dash means the scenario does not produce it. Success is not auto-added everywhere: for form and wizard nodes the primary outcome is a forward redirect, not a distinct success page, so the base page is the ready form and success has no own wireframe.*

| Screen (node) | Base | Empty | Error | Loading | Role / domain / transient states (from IA spec) |
|---------------|:----:|:-----:|:-----:|:-------:|--------------------------------------------------|
| 0.0 Home | yes | - | - | - | Returning operator (hero = Go to your dashboard); logged-in owner (CTA to 9.0). Static marketing, no data states; auth check defaults to guest. |
| 2.0 Sign up | yes | - | yes | yes | Error: field validation and email-already-registered (to 2.1). Loading: submitting. Magic-link path forwards to 2.2 (own node). Guest only. |
| 3.0 Company setup | yes | - | yes | yes | Error: could not save, retry (values kept). Loading: saving on Continue. Inline validation is a variant of base. Already-onboarded and guest redirect. |
| 3.1 First program confirm | yes | - | yes | yes | Loading: F1 pre-select-by-size skeleton (Load1). Error: pre-select failed, fall back to library (to 5.0). Pick-another is a branch to 5.0, not a state. |
| 3.2 Invite team | yes | - | (3.3) | yes | Loading: sending invites. Error is its own node, 3.3. Finish forwards to 4.0. Back to 3.1. |
| 3.3 Invite-send error | yes | - | self | yes | This node is the error state. Loading: retrying rows. Retry-success returns to 3.2; Skip for now returns to 3.2 (link and code still work). Never a dead-end. |
| 4.0 Dashboard (ETALON) | yes | yes | yes | yes | Empty: 4.3 pre-minimum-N (waiting for 5, no live count, nudge to 6.0). Domain: 4.4 cycle-open no-live-count; no-program first run (to 5.0); threshold-alert banner variant. Owner role redirects to 9.0. |
| 4.1 Team pulse detail | yes | yes | yes | yes | Empty: minimum-N not met (nudge to 6.0). Domain: cycle-open no-live-count; no-data first run (to 5.0 or 6.0). Guest to 2.1, owner to 9.0. |
| 6.0 Team roster | yes | yes | yes | yes | Empty: first run, no members. Domain: pending-invites variant (resend); open-cycle no-live-count. Dialog 6.1 (resend or manage). Guest to 2.1, owner to 9.0. |

---

## State to wireframe file (Flow 1)

*Every state is a separate page so the prototype can navigate between states. Base file = the node basename from ia/docs/sitemap.md; state files add a suffix. Counts feed the index.html coverage map at Step 3.*

- **0.0 Home:** `home.html` (guest base), `home-operator.html` (returning operator), `home-owner.html` (owner CTA variant).
- **2.0 Sign up:** `signup.html` (default), `signup-error.html` (validation and email taken), `signup-loading.html` (submitting).
- **3.0 Company setup:** `onboarding-company.html` (default), `onboarding-company-error.html` (save failed), `onboarding-company-loading.html` (saving).
- **3.1 First program confirm:** `onboarding-program.html` (resolved), `onboarding-program-loading.html` (pre-select), `onboarding-program-error.html` (pre-select failed).
- **3.2 Invite team:** `onboarding-invite.html` (default), `onboarding-invite-loading.html` (sending). Error is `invite-send-error.html` (node 3.3).
- **3.3 Invite-send error:** `invite-send-error.html` (error shown, with per-row retry and skip inline).
- **4.0 Dashboard (ETALON):** `dashboard.html` (score ready), `dashboard-empty.html` (4.3 pre-minimum-N), `dashboard-open.html` (4.4 cycle-open no-live-count), `dashboard-loading.html` (skeleton), `dashboard-error.html`, `dashboard-noprogram.html` (first run), `dashboard-alert.html` (threshold banner present).
- **4.1 Team pulse detail:** `team-pulse.html` (default), `team-pulse-empty.html` (minimum-N not met), `team-pulse-open.html` (cycle open), `team-pulse-loading.html`, `team-pulse-error.html`, `team-pulse-nodata.html` (first run).
- **6.0 Team roster:** `team-roster.html` (has members), `team-roster-empty.html` (no members), `team-roster-pending.html` (pending invites), `team-roster-open.html` (open cycle), `team-roster-loading.html`, `team-roster-error.html`. Dialog: `team-roster-manage.html` (6.1).

---

## Notes

- **Canonical illustrative data** (one team, one score, one participation share, one set of programs) is fixed once at Step 8 and threaded through every page so neighboring screens never disagree on the same number. Until then, each screen uses the ready A-E text from its own IA node.
- **Nothing invented:** every state above is quoted from the "States" section of the node's spec in ia/docs/pages/. A state not there is not drawn. A hole found while building is fixed in the IA spec first, then rendered.
- **Success is not universal:** Home has no data states (static marketing); form and wizard nodes forward on success rather than render a success page, so their base file is the ready form.

---

## Full coverage - all flows and the rest of the sitemap (Steps 6 to 9)

*Step 1 above defines the Flow 1 matrix in full. Steps 6 to 8 built the rest; every screen state below is taken from its node IA "States" section (ia/docs/pages/), nothing invented. The live, always-current matrix is the coverage map in index.html (rendered from _nav.js). Totals: 47 of 47 screens built, 99 state pages, 0 in spec.*

| Cluster | Screen (node) | State pages |
|---|---|---|
| **0 Global shell and home** | 0.0 Home | Base (guest), Returning operator, Owner |
| **1 Public marketing and acquisition** | 1.0 Pricing | Default |
|  | 1.1 Security and privacy | Default |
|  | 1.2 About | Default |
|  | 1.3 Contact / Support | Default, Error, Sent |
|  | 1.4 Help / FAQ | Default |
|  | 1.5 Category / segment landing | Default |
|  | 1.6 Legal documents | Default |
| **2 Authentication** | 2.0 Sign up | Default, Error, Submitting |
|  | 2.1 Log in | Default, Error, Loading |
|  | 2.2 Magic-link sent | Link sent |
|  | 2.3 Invalid or expired link | Expired |
|  | 2.4 Reset password | Default, Error, Loading, Success |
| **3 Onboarding wizard** | 3.0 Company setup | Default, Save failed, Saving |
|  | 3.1 First program confirm | Resolved, Pre-select, Pre-select failed |
|  | 3.2 Invite team | Default, Sending |
|  | 3.3 Invite-send error | Error shown |
| **4 Dashboard and pulse** | 4.0 Dashboard | Score ready, Pre-minimum-N, Cycle open, Loading, Error, No program, Threshold alert |
|  | 4.1 Team pulse detail | Default, Minimum-N not met, Cycle open, Loading, Error, First run |
|  | 4.2 Threshold alert detail | Default, Error, Loading, Recovered |
| **5 Programs** | 5.0 Program library | Default, Empty, Error, Loading |
|  | 5.1 Program detail / manage | Default, Draft, End dialog, Ended, Error, Loading, Not found |
|  | 5.2 Check-in setup | Default, Error, Loading |
| **6 Team** | 6.0 Team roster | Has members, No members, Pending invites, Open cycle, Loading, Error, Manage dialog |
| **7 Owner share and upgrade** | 7.0 Share with owner | Default |
|  | 7.1 Invite owner + upgrade | Default, Sent |
|  | 7.2 Upgrade / paywall | Default |
|  | 7.3 Payment failed | Payment failed |
| **8 Settings** | 8.0 Settings shell | Default |
|  | 8.1 Plan / subscription | Default |
|  | 8.2 Privacy center | Default |
|  | 8.3 Notifications | Default |
|  | 8.4 Account settings | Default, Delete |
| **9 Owner surface** | 9.0 Owner dashboard | Default, Empty |
|  | 9.2 Monthly owner digest | Default |
| **10 Employee check-in** | 10.0 Check-in entry | Default |
|  | 10.1 Pre-Q1 privacy disclosure | Default |
|  | 10.2 Questions | Default, Loading |
|  | 10.3 Check-in complete | Default |
|  | 10.4 Invite link expired | Expired |
|  | 10.5 Already submitted | Already |
|  | 10.6 Submit error | Submit error |
| **11 System and global** | 11.0 404 Not found | 404 |
|  | 11.1 500 Server error | 500 |
|  | 11.2 Maintenance | 503 |
|  | 11.3 Cookie consent | Default, Manage |
|  | 11.4 Toast / inline notification | Default |
