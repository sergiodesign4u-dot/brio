# Strategy

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| v1 | Phase 1 | Pre-research product model. All items marked as assumptions. Included AIDA tables. |
| v2 | Phase 4.5 | Validated against Phase 3 competitive analysis and Phase 4 benchmark. AIDA tables updated but retained. |
| v_refresh | Phase 7 re-run | Migrated from research/product-model.md (kept in place for history). Restructured: Objectives, Segments, Business Model, Riskiest Assumption. AIDA retired - AARRR is the single funnel (see research/aarrr.md). Diverge-then-converge trace added for riskiest assumption. All items re-validated against research/competitive-analysis.md and research/benchmark.md with cited sources. |

---

## 1. Objectives

| # | Objective | Metric | Target | Research verdict |
|---|-----------|--------|--------|-----------------|
| O1 | Operator feels competent running wellbeing without HR training | % of operators completing setup and launching first program within 7 days of signup | 70% (hypothesis) | CONFIRMED - No competitor provides a guided, non-HR-expert experience. Gusto's "even if you're not an expert" positioning (gusto.com) and Headspace Core's self-serve small-business page (organizations.headspace.com/small-business) prove this activation posture is achievable. Source: research/competitive-analysis.md, Aspirational group |
| O2 | Owner sees credible team-level signal | % of owner sessions where they view the aggregate dashboard and do not bounce in 30 seconds | 60% (hypothesis) | CONFIRMED - Signal must be honest, not a vanity metric. Woliba's burnout-signal feature (woliba.io) shows demand for team-level insight. Officevibe's numeric score visualization (workleap.com/officevibe) shows owners respond to numeric clarity with context. Source: research/competitive-analysis.md, Hard group |
| O3 | Employee trust in the privacy model drives participation | Team participation rate in check-ins | 65% average (hypothesis) | CONFIRMED with mechanism - Culture Amp's confidentiality protections (support.cultureamp.com/en/articles/7048386) show that pre-survey disclosure and a minimum-N threshold directly increase participation quality. Source: research/benchmark.md |
| O4 | Product delivers measurable business retention | Monthly churn rate past 90 days | Below 4% (hypothesis) | UNCHANGED - No competitive data contradicts this. Officevibe's repricing to $4,999/year flat (workleap.com/pricing) confirms SMB retention is sticky when value is clear. Source: research/competitive-analysis.md |

---

## 2. Audience Segments

### Segment A - Operator (Primary - buyer and daily user)

| Attribute | Detail | Research verdict |
|-----------|--------|-----------------|
| Age | 26 to 45 | Hypothesis - no competitive data contradicts |
| Role | Office manager, ops coordinator, EA, or founder at a 10 to 200 person company with no dedicated HR | CONFIRMED as unserved - no competitor explicitly designs for the absence of an HR team. Source: research/competitive-analysis.md, Phase 3 gap analysis |
| Motivation | Competence and clarity. Wants to know what to do next, that they did it right, and that it mattered. | CONFIRMED |
| Pain | No self-serve path exists. Nivati, Woliba, and Wellable all require demos or account managers. The operator cannot get started without a sales conversation they cannot yet justify. | CONFIRMED and sharpened. Source: research/competitive-analysis.md - nivati.com/sign-up, woliba.io/pricing |
| JTBD | When I am responsible for employee wellbeing with no training, I want a guided system that tells me what to do and when, so that I feel competent and the team benefits | CONFIRMED as primary job |
| Priority | Primary. The operator is the buyer, the daily driver, and the activation bottleneck. All V1 product decisions serve this person first. | |

### Segment B - Owner (Secondary - approver and ROI judge)

| Attribute | Detail | Research verdict |
|-----------|--------|-----------------|
| Age | [?] |  |
| Role | Founder, CEO, or managing partner. Business-minded, time-poor. Approves budget, checks in monthly. | |
| Motivation | Retention, productivity, proof of ROI at the business level | CONFIRMED |
| Pain | No simple, credible team-level view without asking the operator directly. Woliba's admin dashboard surfaces burnout signals by manager - too invasive and legally risky. Officevibe's numeric score was the closest analog but repriced out of SMB. | CONFIRMED and sharpened. Source: research/competitive-analysis.md |
| JTBD | When I need to know if my team investment is working, I want a clear honest team-level signal without individual data, so that I can make confident budget decisions | CONFIRMED as secondary job |
| Priority | Secondary. Does not drive daily use but drives renewal. The operator upgrades Brio specifically to give the owner visibility. The owner dashboard is the paid feature. | |

### Segment C - Employee (End user - not the buyer, but the engine)

| Attribute | Detail | Research verdict |
|-----------|--------|-----------------|
| Role | Participant. Did not choose Brio. Employer enrolled them. Must be given a credible reason to participate honestly. | |
| Privacy stance | Individual data never surfaces up the chain. Non-configurable, architectural, not a setting the employer can change. Minimum threshold of 5 respondents before any aggregate is shown (assumption - to be validated with legal counsel). Next-smallest-group rule prevents inference attacks in small teams. | ELEVATED to architectural requirement. Source: research/benchmark.md - support.cultureamp.com/en/articles/7048386 |
| Trust driver | Pre-check-in disclosure ("your answer joins the team's anonymous score - [company name] sees only the team total, never your response") must appear before Question 1, not after. It must be repeated at the same moment in every subsequent check-in. | MECHANISM IDENTIFIED. Source: research/benchmark.md - Apple Health UI pattern (apple.com/privacy/features) |
| Priority | Third party, but the critical engine. Without employee participation, there is no signal. Without a signal, the owner sees nothing. Without owner conviction, there is no renewal. The value chain starts here. | |

---

## 3. Business Model

**Value exchange:** Operators and owners pay a subscription to run a structured wellbeing system for their team. Employees receive a low-friction, genuinely private check-in experience at no cost to them. Brio earns revenue from subscriptions only. No data monetization. No per-data-event revenue. This subscription-only model is structural: Brio has no financial incentive to sell or analyze individual employee data. This is communicated explicitly to employees as part of the trust story. Source: research/benchmark.md, Mechanism 3 - Oura Ring (ouraring.com/blog/health-data-privacy).

**Free vs. paid split:** The free tier is the acquisition channel, not a crippled product. The team-size limit (up to 10 employees) is the natural, non-punitive conversion trigger. Gating the owner dashboard behind the paid tier is the primary upgrade driver - the operator upgrades to give the owner access, not because they hit an arbitrary feature wall. Source: research/competitive-analysis.md, Key Differences section; Headspace Core self-serve model; Officevibe SMB gap.

| Tier | Audience | Price | Key limits and upgrade drivers |
|------|----------|-------|-------------------------------|
| Free | Up to 10 employees | $0 | 1 active program. Operator view only. No owner dashboard. Demonstrates value before asking for payment. |
| Starter | Up to 50 employees | ~$5/seat/month (hypothesis) | Full program library. Owner dashboard (aggregate only). Trend analytics. |
| Growth | 50 to 200+ employees | ~$9/seat/month (hypothesis) | Multi-team aggregation. Integrations (Slack, calendar). Priority support. |

Pricing benchmarked against Headspace Core $3.75 to $5.83/user/month (organizations.headspace.com/small-business) and Officevibe's former $5/user/month (workleap.com/pricing). Both confirmed as the right range for this audience. Source: research/competitive-analysis.md, Key Differences - Pricing transparency.

CONFIRMED: Transparent, published pricing is a non-negotiable differentiator for this audience. Gusto, Vantage Fit, and Headspace Core publish prices because their SMB buyers will not enter a sales process. Hiding pricing auto-filters out the solo operator who is Brio's primary buyer. Source: research/competitive-analysis.md.

---

## 4. Riskiest Assumption

### Options considered (diverge)

**Option A - Self-serve adoption risk:** Operators will find and activate Brio without a sales conversation and without needing HR validation. Risk type: acquisition and activation friction. Not the deepest risk - Headspace Core and Gusto already prove the pattern works for adjacent products. Rejected: this is a risk to growth, not to existence.

**Option B - Owner willingness to pay for aggregate-only:** The owner will approve and renew a subscription for a tool that shows no individual employee data. Risk type: monetization. Downstream of the product working at all. Rejected: if the product generates any credible signal, an owner who cares about retention will pay. The willingness-to-pay risk is smaller than the signal-generation risk.

**Option C - Employee trust and participation:** Employees in an SMB will trust an aggregate-only privacy model enough to respond honestly when enrolled by their employer. Risk type: foundational participation engine. Strong candidate - without participation, the product has nothing. Narrowly rejected as standalone: it is one half of the real risk, not the whole.

**Option D - Combined operator belief and employee participation (chosen):** An SMB operator believes that a self-serve, aggregate-only wellbeing tool (no HR required, no individual data ever visible) delivers real, payable team-level value - AND employees trust the privacy model enough to respond honestly. If either half is false, the product fails.

### Chosen assumption (converge): Option D

**The riskiest assumption:**
An SMB operator who has never run a formal wellbeing program believes that an aggregate-only, self-serve tool (no HR expertise required, no individual employee data ever visible to anyone) is capable of delivering real team-level wellbeing improvement worth paying for - AND employees in that company trust the aggregate-only privacy promise enough to respond honestly to regular check-ins without feeling monitored.

**Why this is the riskiest:**
Options A and B are risks to growth. Option D is a risk to existence. If the operator does not believe this (or cannot get employee participation to generate any signal at all), there is nothing for the owner to see, nothing to renew, and no product. Every other hypothesis depends on this one being true. The product solves a problem that none of the competitors have solved - which is also why there is no validated proof of concept to point to. The absence of a proven model in the market is both the opportunity and the risk.

The two halves are linked: operator belief is tested first (at signup and setup), but it is only confirmed when employees actually participate. An operator who activates and sees zero employee responses has their belief broken immediately.

**What would prove it:**
- Operators completing a 30-day free trial with at least 5 employee responses and not churning.
- Employee participation rates above 50% in the first 4-week check-in cycle (signaling sufficient trust in the privacy model).
- Operator qualitative feedback citing "useful" or "made a difference" without prompting, within 60 days.

**What would break it:**
- Free tier accounts where the operator activated but zero employees responded after 14 days.
- Operators canceling and citing "not enough data" or "didn't work" without ever having seen an aggregate result.
- Employee feedback (focus group or support message) showing persistent belief that their responses were visible to management.

**The smallest test:**
Run a no-product prototype test: manually send a 1-question wellbeing check-in to a 10 to 15 person team via a plain email (no Brio branding, just a simple Google Form or Typeform), tell employees explicitly that only the aggregate score will be shared with their manager, and measure actual participation rate vs. stated intent. If participation is below 40% even with a direct human invitation and a clear privacy statement, the assumption is broken and the product premise needs rethinking before building anything.

Source validation: research/benchmark.md confirms privacy by promise fails (Limeade anti-pattern, Typeform cautionary case, 11/40 and 14/40 respectively). research/competitive-analysis.md confirms no competitor has resolved both the operator belief problem (self-serve, no HR) and the employee participation problem (genuine privacy architecture) in one product. The assumption sits at the intersection of both unresolved problems.

**Post-persona verification update (June 2026):** Adversarial verification (research/live-research.md, Step 6) did not kill the riskiest assumption. It strengthened it. Self-censorship in employer-run surveys is real and documented (SHRM). The mechanisms Brio is pursuing - minimum-N threshold, explicit pre-check-in disclosure, no demographic data collection, weekly cadence - all align with documented best practices for building honest participation. The one new architectural implication from the verification (timing-based inference in very small teams) was resolved by founder decision in June 2026. See Section 5 below.

---

## 5. Decisions, Phase People and JTBD, June 2026

*Founder decisions made after adversarial verification in Step 6 (research/live-research.md). These close the open product decisions surfaced in Step 7 and are now locked for MVP.*

---

### Unified Privacy Principle - No Live Count During Open Cycles (Decisions D1, D4, and D5 combined)

**Decision:** Nobody sees a live participation count while a check-in cycle is open. The operator sees an explicit active state ("your check-in is running and collecting responses - results appear after it closes"), designed to be reassuring, not silent. The score, trend, and response count are revealed only after the cycle closes and minimum-N is met. The employee check-in shows zero information about how many others have responded: no "X of Y" and no "X responses received." The minimum-N threshold is set at 5 flat for MVP - not raised for very small teams.

**Rationale:** The live-research.md adversarial verification (Step 6) found that the timing-inference vector in small teams is the key unaddressed risk in the privacy architecture - not the threshold number itself. A manager in a 12-person office who sees "5 of 12 responses received at 2:41pm" can narrow down who responded by cross-referencing with who was on their phone at that time. Removing the live count eliminates this vector entirely. This is cleaner and less punishing than raising the threshold: a higher threshold breaks activation on the free tier (a 10-person team needing 7 responses would need 70% participation just to see any score, which likely never happens in early weeks). The employee-side applies the same principle: any response count visible to employees is an inference vector in a small team and undermines the privacy promise for a weak social-proof gain.

**Product design note for wireframes:** The active-cycle state on the operator dashboard must be a first-class, explicitly designed state. A reassuring message with a visual indicator that the cycle is running, plus a time and date for when results will appear. A blank or empty state reads as a product error and degrades into the "fully blind" experience.

**Copy note for very small teams:** For teams of roughly 12 or fewer, show the operator an honest setup message: "Brio works best from about 8 participants and up. Below that, we hold the result until enough responses come in to keep it anonymous." Sets expectations without changing the threshold.

**CLOSES:** Flag F1 - timing-based inference in small teams (research/live-research.md K1). CLOSES: [?] minimum-N threshold (research/personas.md E8, research/jtbd.md critique table).

**Legal deferral:** The minimum-N threshold of 5 is the MVP default. Whether a higher threshold is legally required in the US market (Open Question Q1 in master-research.md) is deferred to legal counsel before launch. N=5 is operationally standard (cited in SHRM best practices, used by Culture Amp) but not yet legally validated for Brio's specific check-in format.

---

### D2 - Participation Benchmark Communication

**Decision (Option A, with framing correction):** Set the expectation with operators that a strong early start is in the range of comparable wellness programs (adjacent-category reference, not a Brio metric), and frame 65% as the healthy steady state after roughly 90 days. The RAND study baseline of 20 to 40% is NOT a measured Brio benchmark and is not like-for-like with Brio's pulse format (that figure covers physical wellness challenges - step challenges and biometric screenings). It must be presented to operators as an adjacent-category reference with explicit labeling: "comparable wellness programs often start in this range (RAND, cited in research/live-research.md C4)." Do not present it as a Brio metric.

**Aha-moment message shift:** The operator's first-result message changes from "here is your team's score" to "you are building the habit - here is your team's score, and here is how an early month typically compares to a comparable program." This prevents operator churn when initial participation is realistic rather than aspirational.

**CLOSES:** Participation benchmark communication framing is now locked. The 65% steady-state target in O3 remains a hypothesis - unchanged. The aha-moment message design is now set.

---

### D3 - Landing Page Lead

**Decision (Option A, operator-led, reversible):** The landing page hero speaks the operator's language: competence and ease, the ability to run real wellbeing without an HR team. This is the default because the operator is the only persona who self-activates without a sales call. The page includes a secondary block answering the owner's question ("what does the owner see? the aggregate-only dashboard") so the owner can evaluate it when the operator forwards the link.

**This decision is reversible.** If an early paid A/B test of operator-facing vs. owner-facing ad creative shows owner-led conversions outperforming operator-led, switch the hero to owner language. This is the design default, not a permanent position.

**CLOSES (as default):** [?] "Does the operator or owner discover Brio first?" (research/personas.md Unknown table, research/jtbd.md critique table). Operator-first is the design default. Open to revision by acquisition test data. Marked CLOSED as a working decision, not a validated fact.

---

### Deferred Items - Legal and Compliance Scope

Not blockers for MVP design. Blockers before launch.

| Item | Reason for deferral |
|------|-------------------|
| Minimum-N threshold legal validation | Whether N=5 is legally defensible in the US under ADA, GINA, and EEOC wellness rules requires legal counsel. MVP defaults to N=5 as operationally standard. Do not launch without legal confirmation. Open Question Q1 from master-research.md. |
| Regulatory review for emotional and mood check-in data | ADA, GINA, HIPAA-adjacent rules may apply. Open Question Q6. Not a design blocker but a launch blocker. |
