# Lean UX Canvas v2 - Brio

*Framework: Lean UX Canvas v2 (Jeff Gothelf). One-sheet strategy synthesized from Foundation Research: research/docs/competitors.md, research/docs/benchmark.md, research/docs/aarrr.md, research/docs/ux-patterns.md, and research/docs/research.md. Every claim carries a source. Unvalidated numbers are targets marked as hypotheses; unknowns are marked [?]. Supersedes research/strategy.md and research/product-model.md, which are retained for history only.*

---

## 1. Business Problem

Small businesses of 10 to 200 employees with no HR team have no credible way to run employee wellbeing. The person handed "people stuff" (an office manager, ops lead, EA, or the founder) has no training, no framework, and no way to know if their effort is working. The owner who pays for it wants proof the investment matters but has no HR layer to sit between them and personal data, so any tool that surfaces individual responses becomes a legal and trust liability.

No competitor resolves this. HARD competitors (Wellable, Nivati, Woliba, Vantage Fit) assume an HR team exists and gate behind a demo, which auto-filters out the solo operator. SOFT competitors (Calm, Headspace) deliver content but no team-level signal. The one product with the closest aggregate signal, Officevibe, just repriced out of SMB. Source: research/docs/competitors.md (group tables + Key Differences); research/docs/research.md (Conclusion 1).

**Reframed as a design problem:** the product itself must be the privacy boundary between what the owner can see (aggregate only) and what the employee shares (individual, never surfaced). Source: research/docs/research.md (Conclusion 2).

---

## 2. Business Outcomes

Measurable signals that the product is working. All targets are hypotheses until validated with real user data (research/docs/aarrr.md, Summary Metrics Table).

| # | Business outcome | Metric | Target | Status |
|---|------------------|--------|--------|--------|
| O1 | Operator activates without HR training | % of signups completing setup + first team invite within 48h | 55% | Hypothesis. Achievability confirmed by Gusto and Headspace Core self-serve patterns. Source: research/docs/competitors.md (Aspirational) |
| O2 | Owner sees a credible team-level signal | % of owner sessions that view the aggregate dashboard and do not bounce in 30s | 60% | Hypothesis. Demand for numeric team signal confirmed by Woliba and Officevibe. Source: research/docs/competitors.md (Hard) |
| O3 | Employee trust drives honest participation | Team check-in participation rate | 65% steady state after ~90 days | Hypothesis. Mechanism confirmed by Culture Amp confidentiality model. Source: research/docs/benchmark.md |
| O4 | Business retains and renews | 90-day operator retention / monthly churn past 90 days | 65% retention / below 4% churn | Hypothesis. SMB stickiness supported by Officevibe repricing behavior. Source: research/docs/competitors.md |

Note on O3 framing: an early-month start below 65% is expected and not a failure. The 20 to 40% RAND figure is an adjacent-category reference (physical wellness challenges), not a like-for-like Brio benchmark, and must be labeled as such to operators. Source: research/docs/research.md (Post-persona re-research, C4); founder decision D2.

---

## 3. Users

Three parties in one value chain. The buyer and the end user are different people, and the end user did not choose the product. Segments are drawn from research/docs/research.md and validated in user-research/docs/personas.md.

- **Operator (primary, hero user, buyer + daily driver).** Office manager, ops coordinator, EA, or founder at a 10 to 200 person company with no dedicated HR. Low-to-medium confidence: knows the people, not the methodology. The activation bottleneck. Age 26 to 45 [? no competitive data]. Source: research/docs/competitors.md (Phase 3 gap analysis).
- **Owner (secondary, approver + ROI judge).** Founder, CEO, or managing partner. Business-minded, time-poor, checks in monthly. Approves budget, drives renewal. Age [?]. Source: research/docs/research.md (Strategy).
- **Employee (end user, not the buyer, the engine).** Participant enrolled by the employer. Their individual response never surfaces up the chain. Without their honest participation there is no signal, and without a signal there is nothing to renew. Source: research/docs/research.md (Conclusion 3).

---

## 4. User Outcomes & Benefits

What each user is trying to get done, in JTBD language. Canonical job statements live in user-research/docs/jtbd.md.

- **Operator:** When I am handed responsibility for wellbeing with no training, I want a guided system that tells me what to run and when, so that I feel competent and the team actually benefits. Benefit sought: certainty about the next step and proof it mattered. Source: research/docs/research.md (Strategy, primary job).
- **Owner:** When I need to know if my people investment is working, I want a clear, honest team-level signal with no individual data, so that I can make a confident budget call. Benefit sought: a number, a trend, and reassurance in under 2 minutes. Source: research/docs/research.md (Strategy, secondary job).
- **Employee:** When my employer asks how I feel at work, I want to answer honestly without fear of being identified, so that the team gets help without exposing me. Benefit sought: a credible guarantee that only the aggregate is ever seen. Source: research/docs/benchmark.md (trust mechanisms).

---

## 5. Solutions

The smallest set of features that could make the outcomes true. This is the MVP scope hypothesis, sharpened on the Lean UX Canvas and narrowed to core jobs in Stage 2. Source: research/docs/aarrr.md (MVP product decisions per stage); research/docs/research.md.

**Programs and check-in engine (serves the operator + employee):**
- Curated program library; system runs the schedule, operator picks. First program pre-selected by company size.
- Guided linear onboarding under 5 minutes, no blank-slate setup.
- Low-effort employee check-in (1 to 3 questions, under 30 seconds, no account, magic link or join code).

**Pulse layer, aggregate only (serves the owner):**
- Team-level wellbeing score, trend over time, participation rate. Never per-individual.
- Owner dashboard showing score + trend + plain-language interpretation. This is the primary paid feature.
- Threshold alert when the aggregate drops meaningfully.

**Privacy mechanism (structural, non-configurable):**
- Minimum-N aggregate: no score shown until at least 5 respondents (assumption, pending legal review). Source: research/docs/benchmark.md (Culture Amp); founder decision D1.
- No live response count during an open cycle, for either operator or employee, to close the timing-inference vector in small teams. Source: research/docs/research.md (Post-persona re-research, K1); founder decision D1.
- Persistent pre-check-in privacy disclosure before Question 1, repeated every cycle, not a one-time consent modal. Source: research/docs/benchmark.md (Apple Health pattern); research/docs/ux-patterns.md.

**Business model:** per-seat SaaS subscription, no data monetization. Free tier (up to 10 employees, 1 program, operator view only) is the acquisition channel; the owner dashboard gated behind paid is the conversion trigger. Starter ~$5/seat/month, Growth ~$9/seat/month, both hypotheses benchmarked against Headspace Core and former Officevibe pricing. Source: research/docs/competitors.md (Key Differences, Pricing); research/docs/aarrr.md (Revenue).

---

## 6. Hypotheses

Format: We believe [business outcome] will be achieved if [user] attains [benefit] with [feature].

- **H1.** We believe operator activation (O1) will be achieved if the non-HR operator attains certainty about what to run first, with a guided linear onboarding that pre-selects the first program by company size. Source: research/docs/aarrr.md (Activation); research/docs/competitors.md (Aspirational).
- **H2.** We believe honest employee participation (O3) will be achieved if the employee attains confidence that no individual answer is ever visible, with a persistent pre-check-in disclosure, a non-configurable minimum-N of 5, and no live response count. Source: research/docs/benchmark.md (Mechanism 2); founder decision D1.
- **H3.** We believe owner conviction and renewal (O2, O4) will be achieved if the owner attains a credible team read in under 2 minutes, with an aggregate-only dashboard showing score, trend, and a plain-language interpretation. Source: research/docs/competitors.md (Officevibe score visualization); research/docs/aarrr.md (Retention, owner digest).
- **H4.** We believe operator retention (O4) will be achieved if the time-poor operator attains a low-effort weekly rhythm, with a weekly digest email rather than a requirement to log in daily. Source: research/docs/aarrr.md (Retention); research/docs/ux-patterns.md (Pattern B1).
- **H5.** We believe free-to-paid conversion will be achieved if the operator attains the ability to share the signal upward, with the owner dashboard gated as the primary paid feature. Source: research/docs/aarrr.md (Revenue).

---

## 7. Riskiest Assumption

The single assumption that the whole idea rests on. This is a value risk (will the user want it and get the promised benefit), not a feasibility risk. Diverge-then-converge trace is in research/strategy.md, Section 4; the chosen assumption is Option D.

**An SMB operator who has never run a formal wellbeing program believes that an aggregate-only, self-serve tool (no HR expertise required, no individual employee data ever visible to anyone) can deliver real team-level wellbeing improvement worth paying for, AND employees in that company trust the aggregate-only privacy promise enough to answer honestly without feeling monitored.**

**Why this is the riskiest:** the two halves are linked and both are load-bearing. If the operator does not believe it, they never activate. If employees do not trust it, there is no participation, no signal, nothing for the owner to see, and no renewal. Self-serve adoption (Option A) and owner willingness-to-pay (Option B) are risks to growth; this is a risk to existence. No competitor has solved both the operator-belief problem and the employee-participation problem in one product, which is the opportunity and also why there is no proven model to point to. Source: research/docs/competitors.md; research/docs/benchmark.md (privacy-by-promise anti-patterns).

**Stress-test status:** adversarial post-persona verification did not kill this assumption; it strengthened it. Self-censorship in employer-run surveys is a real, documented problem (SHRM), and the mechanisms Brio pursues (minimum-N, persistent disclosure, no demographic collection) match documented best practice. Source: research/docs/research.md (Post-persona re-research, C1). This is Hypothesis H2 above, the one whose failure kills the idea.

---

## 8. First Test

The smallest test that could invalidate the riskiest assumption, run before building anything.

Run a no-product prototype. Manually send a single-question wellbeing check-in to a 10 to 15 person team via a plain email (a bare Google Form or Typeform, no Brio branding). Tell employees explicitly that only the aggregate score will be shared with their manager, and nothing else. Measure actual participation rate against stated intent.

**Kill condition:** if participation is below 40% even with a direct human invitation and a clear privacy statement, the assumption is broken and the premise needs rethinking before any build. Source: research/strategy.md, Section 4 (smallest test); validated against research/docs/benchmark.md (privacy-by-promise fails: Limeade and Typeform cautionary cases).
