# CJM - To-Be (Future Experience)

*Phase: CJM. Focus: one primary persona x one main job. To-Be honesty rule: every step and feature traces to a specific As-Is barrier or job. A feature with no parent pain is cut. This backlog refines the existing MVP core, it does not fork a second one.*

---

## Focus

**Persona:** Priya, the Handed-It Operator (primary). Source: user-research/docs/personas.md.

**Main job:** When I am handed responsibility for employee wellbeing with no HR training, I want a guided system that tells me what to run and when, so that I feel competent and the team actually benefits. Source: user-research/docs/jtbd.md, Main Job.

This is the ideal path Priya walks to do the same job inside Brio (not yet built). Each step must close an As-Is barrier from cjm-as-is.md or serve a job from JTBD.

---

## To-Be Ideal Path (with tracing)

*Same focus (Priya x main job), now inside Brio. Every step pays its ticket by tracing to an As-Is barrier / growth zone or a job. No feature "because it looks good."*

| # | Step in the product | Goal (job) | Closes barrier (tracing) | Required capability / feature | Target emotion (vs As-Is) |
|---|---------------------|-----------|--------------------------|-------------------------------|---------------------------|
| 1 | Self-serve start: transparent price, signup with no demo and no credit card | Main precondition (start in an afternoon) | GZ2 / As-Is phase 3 (demo wall, -4) | Self-serve signup, transparent pricing, free tier up to 10 | blocked -4 to relief / control |
| 2 | Guided onboarding: first program pre-selected by company size, setup under 5 minutes | J6 (do not invent the process) + Main | GZ4 / As-Is phases 1, 2, 4 ("terrified... no idea," invent-the-process) | Guided program engine, curated library, opinionated onboarding | terrified / lost -3 to competent / guided |
| 3 | Privacy-visible check-in: persistent pre-Q1 line "team sees only the total, never your response," under 30 seconds, no account for the first check-in | J3 + J4 (precondition of honest participation) | GZ1 / As-Is phase 5 (low point -4: "my dept only has 3 of us," "harvest and sell health info") | Pre-Q1 disclosure sentence, minimum-N=5 non-configurable, no live count during open cycle (founder decision D1), subscription-as-privacy statement, gentle nudges | distrust -4 to safe, supported not monitored (employee); reassured that people will answer (operator) |
| 4 | Score plus interpretation plus next action: team score in plain language, setup confirmation, suggested action | E1 (feel competent) | GZ3 / As-Is phase 6 ("67 percent, is that good? what do I do?") | Interpretive layer on every operator touchpoint (plain-language score, setup confirmation, suggested next action) | confused -3 to clear, "I know what to do" |
| 5 | Early-warning alert: threshold fires when the aggregate drops meaningfully | J2 (know early) | As-Is Marcus trigger ("3 departures, caught off guard") + J2 | Pulse loop, threshold trend alert (aggregate only) | reactive to ahead of it |
| 6 | Owner dashboard / share: operator upgrades to give the owner an aggregate-only view plus a monthly digest, read in under 2 minutes | J1 / J5 (prove it is working) | GZ5 / As-Is phase 7 (no honest signal, ROI [?]) | Owner dashboard (aggregate only, paid), operator-to-owner share, monthly digest, clear UI of what the owner can and cannot see | anxious / no number -3 to proud / validated (operator), reassured (owner) |

### Tracing notes

- The 6 To-Be steps collapse the 7 As-Is phases (self-education folds into guided onboarding). Every step has a parent: 5 of 6 close a specific growth zone / barrier; step 5 serves job J2 and closes the Marcus "caught off guard" trigger.
- No orphan features: every capability is tied. "No live count" and "subscription-as-privacy" trace directly to the mined phase-5 barrier ("traceable back to me," "harvest and sell").
- Candidate [?] (NOT a core step): an employee "see the team-level result" moment (reciprocity) would trace to HJ2, a hypothesis [?] in jtbd.md, so it stays out of the core path and goes to the backlog as LATER / [?] in Step 8, to avoid inflating the MVP on an unvalidated job.
- Multi-driver nuance (Q1): step 3 honestly hits time (under 30 seconds) and trust (architecture); interest and awareness are separate levers, not closed by privacy alone.

---

## Backlog and MVP Basis (Step 8)

*Assembled from the To-Be "required capability" column, then reconciled against the existing MVP core (research/docs/lean-ux-canvas.md Solutions, user-research/docs/jtbd.md matrix core, CLAUDE.md MVP). This refines the one list; it does not fork a second.*

### Backlog

| # | Feature / capability | Parent (barrier / job) | Priority | Success signal (hypothesis) |
|---|----------------------|------------------------|----------|-----------------------------|
| 1 | Self-serve signup + transparent pricing + free tier up to 10 | GZ2 / acquisition (H1 precondition) | MVP | O1: 55% setup + invite within 48h |
| 2 | Guided onboarding + curated library + first program pre-selected by size | GZ4 / Main + J6 | MVP | O1: 70% setup + first program within 7 days |
| 3 | Low-effort check-in (1 to 3 questions, under 30s, no account, magic link / join code) | J4 (GZ1 trust is closed by item 4) | MVP | check-in completion, participation |
| 4 | Privacy bundle (one mechanism, four parts): pre-Q1 disclosure sentence; minimum-N=5 non-configurable; no live count during open cycle (D1); subscription-as-privacy UI statement | GZ1 / J3, E2 (mined: "traceable back to me," "harvest and sell") | MVP | O3: participation at or above 65% steady state. H2 (riskiest) is still [?], closed by the First Test (kill below 40%); the bundle must also be visible to the operator as proof, not only to the employee (Q3) |
| 5 | Interpretive layer on every operator touchpoint: plain-language score + setup confirmation + suggested next action | GZ3 / E1 | MVP | O4: 90-day retention 65% (H3) |
| 6 | Team score + trend + participation rate (aggregate only) | GZ5 / J1 | MVP | O2: owner dashboard views |
| 7 | Threshold trend alert (aggregate drops meaningfully) | J2 + Marcus "caught off guard" trigger | MVP-supporting | J2: operator acts before a resignation |
| 8 | Owner dashboard (aggregate only, paid) + operator-to-owner share + monthly digest | GZ5 / J1 + J5 | MVP | free-to-paid 8 to 12% (H5), O2 60% no-bounce |
| 9 | Weekly operator digest email | retention (H4) | MVP-supporting (fast-follow-safe) | O4 retention |
| 10 | Basic scheduled reminder | J4 / participation | MVP-light | participation |
| 11 | Custom nudge scheduling | J4 | LATER (paid tier) | n/a |
| 12 | Employee "see the team-level result" (reciprocity) | HJ2, a hypothesis [?] | LATER / [?] | validate HJ2 first |

### Reconciliation with the existing MVP core (refine, do not fork)

- **Confirmed by To-Be** (already in lean-ux-canvas Solutions + jtbd core; the map validated them): guided onboarding + library, low-effort check-in, minimum-N=5 + no live count + pre-check-in disclosure, team score + trend + participation, owner dashboard, threshold alert. One list, not a second.
- **Sharpened by To-Be:**
  - subscription-as-privacy lifted from a business-model note to a concrete UI statement, because the mined barrier "harvest and sell" requires showing it, not just having it.
  - interpretive layer (E1) sharpened from one screen to a cross-cutting requirement on every operator touchpoint (score + setup confirmation + next action).
  - Participation nuance: privacy addresses trust and time, not interest or awareness, so privacy is not treated as the single lever for O3.
  - Nudges split: basic reminder is MVP, custom scheduling is LATER (matches the paid tier in the business model).
- **Orphans (in the old list but mapping to no To-Be step):** none new. The Stage 2 cut list (leaderboards, drill-down, integrations, cash referral, custom builder) stays cut, and no To-Be step reintroduces it. The only deliberately non-core candidate, employee "see result," is parked as LATER / [?] (HJ2), not in the MVP.

MVP is 7 core items (path-breaking: 1, 2, 3, 4, 5, 6, 8) plus 3 supporting (7 alert, 9 digest, 10 reminder), each tracing to the jtbd core (Main, J2, E1, with J3 / J4 as supporting architecture) and none broader than the riskiest assumption (H2 participation + H1 activation + H3 owner value for conversion).

---

## Critique of To-Be (Step 9)

*Persisted so the html "Critique and risks" section reads from an artifact.*

### Feature parent audit

Every backlog item has a parent; no orphan to cut. Two tags were corrected: item 3 (low-effort check-in) traces to J4, not GZ1 (trust is closed by item 4); item 9 (weekly digest) has a weak parent - it is a retention mechanism (H4 / O4), not a jtbd job or an As-Is barrier, so it is reclassified MVP-supporting and is fast-follow-safe.

### Refine, not fork

No discrepancy with lean-ux-canvas.md Solutions or jtbd.md. The backlog sharpens the one list (subscription-as-privacy lifted to a UI statement; interpretive layer made cross-cutting; nudges split into basic MVP plus custom LATER). No new feature forks a second list; the Stage 2 cut list stays cut.

### MVP consistency

By the strict "remove it and the To-Be path breaks" test: MVP-core = 7 items (1, 2, 3, 4, 5, 6, 8). MVP-supporting = 3 items that serve a core job or retention but do not break the path (7 threshold alert / J2; 9 weekly digest / retention; 10 basic reminder / participation). Nothing is broader than the riskiest assumption: 1-2 serve H1 (activation), 3-4 serve H2 (participation, the riskiest), 5-6-8 serve H3 (owner value and conversion).

### Danger questions (ordered)

1. Kill-condition: the privacy bundle (item 4) is MVP and its success signal is H2 (participation at or above 65%), the riskiest assumption and still unproven. The Q1 nuance shows participation is multi-driver, so a RAND-adjacent 40% is a more defensible floor. Open: does the bundle move SMB participation to 65%, and if it is closer to 40%, does a ~15-person team reliably clear minimum-N=5? This is the Lean UX Canvas First Test. Status: [?], closed by the no-product prototype test, not by this map.
2. Padding: threshold alert (7) and weekly digest (9) are MVP but do not break the path. Reclassified MVP-supporting to avoid over-building before H2 is validated.
3. Tracing precision: the bundle (item 4) traces to employee voice ("harvest and sell," "traceable"), but the operator is the buyer. The bundle drives participation (H2), not activation (H1), so it must be shown to the operator as proof, not only to the employee.

### Assumptions and open risks (carried into the html critique)

- H2 participation at or above 65% is unproven [?]; RAND-adjacent floor is 40%. Closed by the First Test, not by CJM.
- Wellbeing-specific first-person operator voice and phase 7 ROI voice remain [?] (As-Is D1 residual); for user interviews.
- HJ2 (employee "see result" reciprocity) is a hypothesis [?]; parked LATER, not in MVP.
- Minimum-N=5 legal validation deferred (research.md Q1); founder decision D1 for MVP.


