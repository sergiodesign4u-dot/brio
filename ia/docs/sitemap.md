# Information Architecture - Base Layer (Sitemap)

*Phase: IA (Basic). Built from user-research/docs/personas.md and jtbd.md, and the traced backlog in user-research/docs/cjm-to-be.md. Cross-cutting rule: every screen serves a job. A screen with no job is an [ORPHAN]. A job with no screen is a hole. Structure is derived from jobs, not copied from a competitor menu.*

---

## Entities

*Product objects the person deals with to close their jobs. Screens only display objects, and objects grow from jobs. Each entity cites the job that generates it. An object no job requires goes to "Under question," not the main list.*

| # | Entity | Parts / fields | Job that generates it | Related to |
|---|--------|----------------|-----------------------|------------|
| 1 | **Company workspace & operator account** | company name, company size (drives the pre-selected first program), operator login + settings, current plan | Main (a place to run wellbeing) + backlog item 1 (self-serve signup). Priya is the account holder | Plan, Program, Team roster, Owner |
| 2 | **Program library** (curated catalog) | categories (mental health, physical, financial, social), program cards, "recommended for your size" tag | Main + J6 ("tells me what to run") + item 2 | Program |
| 3 | **Program** (a chosen, running program) | title, category, cadence / duration, status (draft / active / ended), the check-in questions it carries | Main (run wellbeing) + J6 (do not invent the process) + item 2 | Program library, Check-in cycle, Team roster |
| 4 | **Team roster** (invited members) | invited employees (identity used for the invite only), join link / join code, team size, aggregate participation rate | Main (invite the team) + J4 (no-account first check-in) + item 3 | Company, Employee participant, Check-in cycle |
| 5 | **Check-in cycle** (pulse) | 1 to 3 questions (emoji / slider), cadence (weekly), open / closed state, minimum-N=5 gate, no live count while open | J2 (pulse / early warning) + J4 (under 30s) + item 3 | Program, Check-in response, Team pulse result |
| 6 | **Check-in response** (individual) | one emoji / slider value, timestamp | J3 (private before responding) + J4 + E2 + item 3 / 4 | Check-in cycle (aggregates into), Employee participant |
| 7 | **Team pulse result** (aggregate) | plain-language score + number, trend over time, participation rate, minimum-N state (hidden until N>=5), interpretation + suggested next action | J1 (prove it works) + J2 + J5 + E1 + items 5, 6 | Check-in cycle, Owner, Notifications |
| 8 | **Privacy disclosure / trust surface** | pre-Q1 disclosure sentence, minimum-N=5 statement, "no live count" behavior, subscription-as-privacy statement, "what the owner can and cannot see" panel | J3 (certainty before responding) + E2 (supported not monitored) + item 4 | Check-in cycle, Team pulse result, Owner |
| 9 | **Owner** (invited stakeholder) | name / email, read-only aggregate-only access, monthly digest subscription | J1 (honest signal) + J5 (budget decision) + S2 (share with owner) + item 8 | Team pulse result, Company, Plan |
| 10 | **Plan / subscription** | tier (free up to 10 / Starter / Growth), seats, price, what each unlocks (owner dashboard = paid) | item 1 (free tier) + item 8 (owner dashboard paid); underpins subscription-as-privacy (item 4) | Company, Owner, Privacy disclosure |
| 11 | **Notifications** (alert / digests / reminder) | threshold alert (aggregate drop), weekly operator digest, monthly owner digest, basic check-in reminder; each has type, trigger / cadence, recipient | J2 (threshold alert, item 7) + retention (weekly digest, item 9) + S2 (owner digest, item 8) + J4 (basic reminder, item 10) | Team pulse result, Program, Check-in cycle, Owner |
| 12 | **Employee participant** (thin) | arrives via join link / code, no account for the first check-in, optional light identity only to return for later cycles | J3 + J4 + E2 + item 3 | Team roster, Check-in response |

**Privacy spine (two honest flags):**
- **#6 Check-in response** exists in the system but is never surfaced individually, it only feeds the aggregate (the structural boundary). **#8 Privacy disclosure** is a UI / trust surface (content + rules), not stored user data, but it is the product's differentiator, so it is inventoried as a first-class object and must be visible to the operator as proof, not only to the employee (cjm-to-be.md Step 9 note).
- **#4 Team roster** vs **#12 Employee participant**: the operator knows who was invited (she sent the invites) but never which invitee answered what. Kept separate on purpose, because that split is the whole privacy story.

### Under question (no confirmed job requires them, or hypothesis-only)

| Entity | Why it is parked | Marker |
|--------|------------------|--------|
| **Employee team-result view** (reciprocity: employee sees the team aggregate after answering) | Traces only to HJ2, a hypothesis in jtbd.md; backlog item 12 (LATER) | [?] |
| **Referral / share-to-network surface** | Operator-to-peer (S1) and owner peer-sharing (E3) are both [?] hypotheses; the confirmed sharing job S2 (operator-to-owner) is already covered by Owner + Notifications. No cash-referral object (Stage 2 cut) | [?] |
| **Custom nudge schedule** | Traces to J4 but is LATER / paid (backlog item 11), not MVP | deferred |

**Deliberately NOT invented** (from competitor menus, no job generates them, on the Stage 2 cut list): individual leaderboards / rankings, drill-down analytics object, custom program builder.

---

## Screens

*Hierarchy of screens derived from the entities and jobs above, not from a competitor menu. Every node cites the job it serves. A node with no job is an [ORPHAN]. States (empty / error / loading) are states of a screen, not screens, so they live in flows.md, not here. Surface tags: [pub] public, [P] operator (Priya, primary), [O] owner (Marcus, secondary), [E] employee (Yemi, third-party).*

```
Brio
│
├─ PUBLIC / PRE-AUTH                              [pub · operator acquisition, Priya primary]
│  ├─ Landing / home ............ (Main + item 1: self-serve start, operator language)
│  ├─ Pricing .................... (item 1: transparent price, no demo)
│  ├─ Sign up .................... (item 1: self-serve signup, no credit card)
│  └─ Log in (email + magic link)  (supporting: return access, gates Main / J1 / J2 / E1)
│
├─ OPERATOR APP                                   [P · Priya, primary, desktop-first]
│  ├─ Onboarding (guided first-run flow) ......... (J6 + Main + item 2)
│  │  ├─ Company setup (name, size) ..... (J6: size drives the pre-selected program)
│  │  ├─ First program confirm (pre-selected by size) . (Main + J6 + item 2)
│  │  └─ Invite team (join link / code) . (Main + item 3)
│  ├─ Dashboard (home) ........................... (E1 + J1 + J2: score + interpretation + next action, the aha)
│  │  └─ Team pulse detail (score, trend, participation, interpretation, next action) . (J1 + J2 + E1 + items 5, 6)
│  │     └─ Threshold alert detail ...... (J2 + item 7: early warning)
│  ├─ Programs ................................... (Main + J6)
│  │  ├─ Program library (browse + pick) . (Main + J6 + item 2)
│  │  └─ Program detail / manage ......... (Main + item 2)
│  │     └─ Check-in setup (questions, cadence) . (J2 + J4 + item 3)
│  ├─ Team ....................................... (Main + item 3)
│  │  └─ Team roster (invited members, join link / code, participation aggregate) . (Main + item 3 + item 10)
│  ├─ Share with owner ........................... (J1 + J5 + S2 + item 8)
│  │  └─ Invite owner + upgrade .......... (S2 + item 8: paid unlock)
│  └─ Settings ................................... (supporting)
│     ├─ Plan / subscription ............. (item 1 + item 8 + business model)
│     ├─ Privacy center ("what the owner can and cannot see") . (J3 + E2 + item 4: operator-facing proof)
│     ├─ Notifications (reminders, digest cadence) . (J4 + items 9, 10)
│     └─ Account settings ................ (supporting: gates operator jobs)
│
├─ OWNER SURFACE                                  [O · Marcus, secondary, aggregate-only, under 2 min]
│  ├─ Owner dashboard (one number, trend, plain-language) . (J1 + J5 + item 8)
│  │  └─ "What I can and cannot see" ..... (E2 owner comfort + item 4: owner-facing privacy)
│  └─ Monthly owner digest (email → view)  (S2 + item 8 + W1: under 2 min)
│
└─ EMPLOYEE SURFACE                               [E · Yemi, third-party, mobile, near-anonymous, under 30s]
   └─ Check-in (via invite link / join code) ..... (J3 + J4 + E2 + item 3)
      ├─ Pre-Q1 privacy disclosure (persistent, before Question 1) . (J3 + E2 + item 4)
      ├─ Questions (1 to 3, emoji / slider) . (J4 + item 3)
      └─ Check-in complete / thank-you ..... (J4 + E2: closure, no individual data shown)
```

**Orphan check:** every node cites a job, so no [ORPHAN] in the tree. Two nodes are tagged **supporting** rather than orphan because they gate the operator's jobs, not close their own: Log in and Account settings (standard app infrastructure). Flagged openly so the Step 6 critique can re-test them.

**Parked (would be [ORPHAN] / [?] if added now, so deliberately NOT nodes):**
- Employee "see team result" after check-in, traces only to HJ2 [?], backlog item 12 (LATER).
- Referral / share-to-network, S1 / E3 [?].
- Custom nudge scheduling, LATER / paid (item 11).

**Primary vs secondary:** the operator app plus public acquisition is the primary surface (Priya). The owner surface is secondary (Marcus, aggregate-only). The employee surface is third-party (Yemi, near-anonymous, mobile). Depth is kept minimal (deepest branch is 3 levels); the deliberate depth decisions and tap-count to the main job are in the Navigation section.

**Screen states (Step 6 MS4):** the program-management screens (Program library, Program detail, Check-in setup) carry states not drawn in this base layer: Program library has a first-run empty ("no active program yet, pick one"), and each needs loading and error states. The full per-screen state design (empty / error / loading, plus header / footer / SEO) is the job of Stage 3b (Detail layer), flagged here so it is not lost.

---

## Navigation

*How the person moves between screens. Global navigation is the shortest path for the primary persona to her main job, not "what to put in a menu." Each global item is an entry into a job-cluster.*

### Global navigation (operator app, Priya primary)

4 job tabs plus Settings as a utility entry (corner, not a job tab).

| Global item | Job-cluster behind it | Why global (not contextual) |
|-------------|-----------------------|------------------------------|
| **Dashboard** (home) | E1 + J1 + J2, the pulse signal: score + interpretation + next action | The recurring aha and the reason she logs in. Post-login home |
| **Programs** | Main + J6, run wellbeing: library, pick, manage | The core "what do I run" job; entered repeatedly (monthly setup) |
| **Team** | Main + item 3, invite + participation (aggregate) | Entered on every new hire; the invite / roster surface |
| **Owner** | J1 + J5 + S2 + item 8, prove it works + upgrade | Top-3 operator job by importance and the paid-conversion path (trade-off below) |
| **Settings** (utility, top-right) | supporting + item 4: Plan, Privacy center, Notifications, Account | Utility cluster, not a job tab; corner entry, always reachable |

**Trade-off on "Owner":** it is only ~monthly-frequency, so it could instead be a contextual "Share this result" action on the Dashboard. It is kept global because the owner dashboard is the paid feature and J1 / J5 / S2 score 3 for Priya, so a permanent "invite your owner" surface both serves the job and drives conversion. Reversible to contextual if usage shows it is rarely a fresh entry.

**Other surfaces have no multi-tab nav by design:** the owner surface is a single aggregate dashboard (secondary, under 2 min, one read); the employee check-in is a linear near-anonymous flow (third-party, under 30s). Nav on either would work against the persona.

### Depth: taps to the main job for Priya

Main job = "a guided system that tells me what to run and when." Both realizations are within the 3-tap budget.

| Path to a job-cluster | Taps | Within 3? |
|-----------------------|------|-----------|
| Returning operator, pulse signal + next action (recurring main-job value) | 1 (Dashboard is the post-login home) | yes |
| Run / adjust a program (Main + J6) | Programs (1), Program detail (2), Check-in setup (3) | yes (3 at the deepest) |
| Invite team / roster (item 3) | Team (1), roster on the same screen | yes |
| Prove it works / invite owner (J1 + J5 + S2) | Owner (1), Invite owner + upgrade (2) | yes |

**One intentional exception (not a violation):** the first-run guided onboarding is a linear wizard (company setup, first program confirm, invite team, ~3 sequential steps after signup). This is sequential flow depth, not navigational depth. The 3-tap rule governs how far a job-cluster is buried in the menu; onboarding is J6 itself ("tells me exactly what to do and in what order"), budgeted by time (under 5 minutes), not taps. It runs once and is not reachable from global nav afterward.

### Global / contextual / deep

- **Global (always visible):** the 4 job tabs (Dashboard, Programs, Team, Owner) + Settings utility. Owner surface = single dashboard; employee surface = no nav.
- **Contextual (appears inside a flow):** "Share this result with your owner" (fires on a positive pulse milestone), "Set up check-in" (inside a program), "Resend invite" (inside roster), threshold-alert banner (on Dashboard when it fires), pre-Q1 privacy disclosure (inside the check-in flow), upgrade prompt (on a free-tier limit or owner-invite tap).
- **Deep (rare, tucked away):** Plan / subscription change, Privacy center detail, Notification cadence, Account settings, and the one-time onboarding wizard.

### Step 6 depth fixes

- **DX1 (threshold alert reach):** the threshold alert detail is reached in 1 tap as a contextual Dashboard banner and a notification deep-link, not only 3-deep via Dashboard, pulse detail, alert. The urgent early-warning job (J2) is not buried in navigation.
- **DX2 (privacy proof visibility):** the operator-facing privacy proof is not only the 2-taps-deep Privacy center. A privacy summary is also surfaced contextually at the onboarding confirmation and as a small Dashboard element, so item 4 ("visible to the operator as proof") is met without a deep hunt.

---

## Traceability

*Coverage matrix: screens (rows) by jobs (columns). A tick means the screen participates in closing that job. An empty row is an orphan screen (screen with no job). An empty column is an orphan job (job with no screen). Both are defects. Matrix transposed to 12 job columns for readability.*

**Screen legend:** 1 Landing, 2 Pricing, 3 Sign up, 4 Log in, 5 Company setup, 6 First program confirm, 7 Invite team, 8 Dashboard, 9 Team pulse detail, 10 Threshold alert detail, 11 Program library, 12 Program detail / manage, 13 Check-in setup, 14 Team roster, 15 Share with owner, 16 Invite owner + upgrade, 17 Plan / subscription, 18 Privacy center, 19 Notifications, 20 Account, 21 Owner dashboard, 22 Monthly owner digest, 23 Check-in, 24 Pre-Q1 disclosure, 25 Questions, 26 Check-in complete.

| Screen | Main | J1 | J2 | J3 | J4 | J5 | J6 | E1 | E2 | E3 | S1 | S2 |
|--------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 Landing | x | | | | | | | | | | | |
| 2 Pricing | x | | | | | | | | | | | |
| 3 Sign up | x | | | | | | | | | | | |
| 4 Log in | | | | | | | | | | | | |
| 5 Company setup | x | | | | | | x | | | | | |
| 6 First program confirm | x | | | | | | x | x | | | | |
| 7 Invite team | x | | | | x | | x | | | | | |
| 8 Dashboard | x | x | x | | | | | x | | | | |
| 9 Team pulse detail | | x | x | | | | | x | | | | |
| 10 Threshold alert detail | | | x | | | | | | | | | |
| 11 Program library | x | | | | | | x | | | | | |
| 12 Program detail / manage | x | | | | | | x | | | | | |
| 13 Check-in setup | | | x | | x | | | x | | | | |
| 14 Team roster | x | | | | x | | | | | | | |
| 15 Share with owner | | x | | | | x | | | | | | x |
| 16 Invite owner + upgrade | | x | | | | | | | | | | x |
| 17 Plan / subscription | | | | x | | | | | | | | x |
| 18 Privacy center | | | | x | | | | | x | | | |
| 19 Notifications | | | x | | x | | | | | | | |
| 20 Account | | | | | | | | | | | | |
| 21 Owner dashboard | | x | | x | | x | | | | x | | x |
| 22 Monthly owner digest | | x | | | | x | | | | x | | x |
| 23 Check-in | | | | x | x | | | | x | | | |
| 24 Pre-Q1 disclosure | | | | x | | | | | x | | | |
| 25 Questions | | | | | x | | | | | | | |
| 26 Check-in complete | | | | | x | | | | x | | | |

### Orphan screens (empty rows)

| Screen | Defect | Resolution |
|--------|--------|------------|
| 4 Log in | Closes no job on its own | Keep, reclassify as supporting infrastructure. It gates every operator job (Main, J1, J2, E1); removing it removes access to all job-closing screens. Honest exception to "no empty row." |
| 20 Account | Closes no job on its own | Keep, supporting infrastructure (identity / password). Same justification. Not cut. |

No screen is deleted: every other row closes at least one job, and the two blanks are auth / identity preconditions, not orphans-to-cut.

### Orphan jobs (empty columns)

| Job | Defect | Resolution |
|-----|--------|------------|
| S1 - tell network what works | No MVP screen | Backlog / [?]. S1 is a [?] hypothesis in jtbd.md; the referral surface was parked (Stage 2 cut list bans cash referral, organic operator-to-peer is out of MVP scope). Do not add a screen now, validate S1 first, then a lightweight share surface post-MVP. This hole is intentional. |

**Thin coverage (not a hole to fill in MVP):** E3 (caring leader) is covered only by Owner dashboard / digest as the shareable proof; it is a [?] hypothesis with no dedicated peer-share surface, acceptable as-is. Hypothesis jobs HJ1 (close the loop) and HJ2 (employee sees team result, backlog item 12 LATER) are deliberately unmapped / parked, not orphans-to-fix.

**Net:** one real orphan job (S1, to backlog), zero orphan screens to cut (two supporting-infrastructure rows kept), no MVP job left uncovered.

---

## Critique (Step 6)

*Audit of sitemap.md and flows.md across four defect classes, dangerous ones first. Dead-ends and missing states were fixed in flows.md; depth was addressed by contextual placement (Navigation, Step 6 depth fixes); orphans stay resolved in Traceability.*

### Class 1 - Dead-ends (fixed)

| # | Where | Defect | Fix applied |
|---|-------|--------|-------------|
| DE1 | Flow 1, sub-minimum-N team | Hard stop with no fallback, tied to the riskiest assumption | Added a "Team below minimum-N" explainer with an invite-more path; only an unreachable-5 team is a dead-end |
| DE2 | Flow 2, skeptical employee | Straight to trust-lost with zero recovery, the participation-killer | Added a "see exactly what your manager sees" recovery detour back to the decision |
| DE3 | Flow 3, abandons upgrade | Risked trapping the operator on a red screen | Made it a recoverable "stay on free tier, retry later" back to the Dashboard; the real dead-end is now owner-never-opens |
| DE4 | Flow 4, ignored alert | A single ignore equalled a resignation | Added a weekly-digest re-surface loop; only repeated ignoring is the dead-end |

### Class 2 - Missing states (fixed)

| # | Where | Defect | Fix applied |
|---|-------|--------|-------------|
| MS1 | Check-in (Flow 2) | No "already submitted this cycle" state on re-entry | Added an already-submitted thank-you state |
| MS2 | Owner dashboard (Flow 3) | No empty state when the score is not ready (minimum-N not met) | Added an owner "score not available yet" empty state |
| MS3 | Invite team (Flow 1) | No error state for invite send failure | Added an invite-send error with retry |
| MS4 | Program library / detail / check-in setup | No empty / loading / error documented | Added a first-run empty note; full states deferred to Stage 3b (flagged in Screens) |

### Class 3 - Excessive depth (addressed)

| # | Where | Defect | Fix applied |
|---|-------|--------|-------------|
| DX1 | Threshold alert detail | Up to 3 taps via nav for an urgent job | Made 1-tap contextual (Dashboard banner + notification deep-link) |
| DX2 | Privacy center placement | Operator privacy proof 2 taps deep in Settings | Also surfaced at onboarding confirmation and on the Dashboard |

### Class 4 - Orphans (resolved in Traceability)

- Orphan screens: Log in, Account are supporting infrastructure (gate every operator job), kept, not cut.
- Orphan job: S1 (tell network) has no MVP screen, sent to backlog / [?] (referral surface parked). Intentional hole.
- No new orphan beyond the matrix.
