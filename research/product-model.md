# Product Model

> **Superseded, kept for history.** This is the pre-Lean-UX-Canvas product model (v1 and v2). It was migrated into research/strategy.md and is now carried by research/docs/lean-ux-canvas.md and research/docs/research.md. Retained for history only; not a canonical deliverable.

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| v1 | Phase 1 | Pre-research hypotheses. All items marked as assumptions. |
| v2 | Phase 4.5 | Validated against Phase 3 competitive analysis and Phase 4 benchmark. Items marked CONFIRMED, CHALLENGED, or CHANGED with cited sources. |

---

# v2 - Validated (current)

---

## 1. Product Objectives

| # | Objective | Metric | Target | Research verdict |
|---|-----------|--------|--------|-----------------|
| O1 | Operator feels competent running wellbeing without HR training | % of operators completing setup and launching first program within 7 days of signup | 70% (hypothesis) | **CONFIRMED** - No competitor provides a genuinely guided, non-HR-expert experience. Gusto's design pattern (gusto.com) proves this is achievable: 500K+ SMBs trust a product that says "even if you're not an expert." Headspace Core's self-serve small-business page confirms the segment will self-activate if friction is removed. |
| O2 | Owner sees credible team-level signal | % of owner sessions where they view aggregate dashboard and do not bounce in 30s | 60% (hypothesis) | **CONFIRMED but sharpened** - The signal must be honest, not vanity. Woliba's burnout-signal feature (woliba.io) shows demand for team-level insights. Officevibe's 8.4/10 score visualization (workleap.com/officevibe) shows owners respond to numeric clarity. Target unchanged but now tied to a non-inflatable design principle. |
| O3 | Employee trust in privacy model drives participation | Team participation rate in check-ins | 65% average | **CONFIRMED with mechanism** - Culture Amp's confidentiality protections research (support.cultureamp.com/en/articles/7048386) provides the mechanism: pre-survey disclosure + minimum-N threshold directly increases participation quality. Nivati claims 54% engagement vs 4% EAP average (nivati.com/platform) - showing trust architecture correlates with participation. 65% target remains reasonable. |
| O4 | Product delivers measurable business retention | Monthly churn rate past 90 days | Below 4% | **UNCHANGED** - No competitive data contradicts this. Officevibe's repricing decision (leaving SMB behind at $4,999/year - workleap.com/pricing) confirms SMB retention is sticky when value is clear: they abandoned SMB because they could, suggesting the SMB segment renews predictably once activated. |

---

## 2. Audience Segments

### Segment A - The Operator (Primary) - CONFIRMED

| Attribute | v1 | v2 change | Source |
|-----------|-----|-----------|--------|
| Age | 26 to 45 | Unchanged | Hypothesis |
| Profile | Office manager, ops, EA, or founder at 10-200 person company with no HR | Unchanged | Confirmed: no competitor explicitly designs for the absence of an HR team (Phase 3 gap analysis) |
| Motivation | Competence, clarity, doing right by the team | Unchanged | Confirmed |
| Pain | No training, no framework, guessing, anxious about attrition | **Sharpened**: The "no self-serve path" problem is the key pain point. Nivati, Woliba, and Wellable all require demos or account managers. The operator cannot get started without a sales conversation. | Phase 3: nivati.com/sign-up, woliba.io/pricing |
| JTBD | When I am responsible for employee wellbeing with no training, I want a guided system that tells me what to do and when, so that I feel confident and the team benefits | Unchanged | Confirmed as primary job |
| Priority | Primary | Unchanged | |

### Segment B - The Owner (Secondary) - CONFIRMED

| Attribute | v1 | v2 change | Source |
|-----------|-----|-----------|--------|
| Profile | Founder, CEO, or managing partner. Business-minded, time-poor. | Unchanged | |
| Motivation | Retention, productivity, proof of ROI | Unchanged | |
| Pain | No visibility without asking directly | **Sharpened**: No competitor gives owners a genuinely simple aggregate view. Woliba's admin dashboard shows burnout signals by manager (woliba.io) - which is too invasive and risky. Officevibe's score (8.4/10) is the closest to what owners want. | Phase 3 |
| JTBD | When I need to know if my team investment is working, I want a clear honest team-level signal without individual data, so that I can make confident budget decisions | Unchanged | Confirmed as secondary job |
| Priority | Secondary | Unchanged | |

### Segment C - The Employee (Third party) - CONFIRMED AND ELEVATED

| Attribute | v1 | v2 change | Source |
|-----------|-----|-----------|--------|
| Privacy as hard constraint | Individual data never surfaces up the chain | **Elevated to architectural requirement**: The benchmark (Phase 4) reveals that "privacy by promise" fails. Culture Amp's indirect ID protection, Oura's opt-in architecture, and Apple's UI-visible privacy mechanisms are the design benchmarks. The constraint is now specific: minimum threshold of 5 (to be validated with legal counsel), next-smallest-group rule, non-configurable by employer. | Phase 4: support.cultureamp.com/en/articles/7048386, ouraring.com/blog/health-data-privacy, apple.com/privacy/features |
| Trust driver for participation | Believe it is private, respond honestly | **Mechanism identified**: Pre-check-in disclosure ("your answer joins the team's anonymous score - [company] sees only the team total") must be persistent and contextual, not a one-time consent modal. | Phase 4: Apple Health UI pattern |

---

## 3. JTBD - Updated Priorities

| Job | v1 score | v2 verdict | Source |
|-----|----------|------------|--------|
| J1 - Run structured programs without HR knowledge | 9/9 - Primary | **CONFIRMED** - Gap confirmed: no competitor self-serve path for non-HR operators. Headspace Core closest but content-only, no program engine. | Phase 3 |
| J2 - Prove investment is paying off | 8/9 - Secondary | **CONFIRMED** - Owners want a number and a trend. Officevibe's numeric score is the closest analog. Needs honest, non-inflatable design. | Phase 3: workleap.com/officevibe |
| J3 - Know if team is struggling before it becomes a crisis | 8/9 - Secondary | **CONFIRMED** - Woliba's burnout signal feature shows demand. But Woliba's implementation (admin-visible individual inference) is the wrong execution. The right version is an honest aggregate trend, not individual-level inference. | Phase 3: woliba.io |
| J4 - Give employees a low-friction way to signal how they feel | 7/9 | **CONFIRMED** - Culture Amp's unattributed survey guide (support.cultureamp.com) shows employees want to respond when privacy is credible. 30-second check-in framing validated. | Phase 4 |
| J5 - Stay compliant and not expose employee data | 7/9 | **ELEVATED** - Limeade's employer-as-data-controller model and Woliba's burnout-signal feature show this is an active risk, not a theoretical one. Compliance framing should appear in operator onboarding. | Phase 4: limeade.com/privacy.aspx |
| J6 - Feel like a competent "people person" without title or training | 7/9 | **CONFIRMED AND RENAMED** - Renaming to "Feel set up to succeed" to capture both competence and confidence. Gusto's "even if you're not an expert" language is the tone model. | Phase 3: gusto.com |

---

## 4. AIDA per Segment - Updated

### Changes from v1

**Awareness channels - CHALLENGED for Segment A:**
LinkedIn targeting confirmed as viable (gusto.com does this for a similar persona). SEO confirmed valid but competitive analysis reveals the search space is dominated by HR software reviews sites (G2, Capterra) rather than "how to" content. Revised: content marketing should target "operator how-to" queries, not product comparison queries.

**Interest mechanic - CONFIRMED for all segments:**
Interactive product tour (show before signup) is confirmed by Gusto's pattern and Headspace Core's self-serve calculator page (organizations.headspace.com/small-business). Operators and owners both need to see the product before committing to a demo or trial.

**Desire/Activation - SHARPENED:**
The "aha moment" hypothesis (first check-in results aggregate in real time) is confirmed as the right direction. Officevibe's AI-recommended action after survey results (workleap.com/officevibe) adds a layer: the aha moment is not just "I can see the score" but "I know what to do next." Brio should generate a suggested next action alongside the first aggregate result.

**Owner - CONFIRMED:**
Monthly digest email remains the right channel. Officevibe's score visualization (numeric + trend) is the confirmed format. Ensure design is defensible: score cannot be gamed or artificially inflated.

### Updated AIDA tables

*(Tables unchanged from v1 except awareness channel note above and aha moment sharpening. Full AIDA tables from v1 remain valid.)*

---

## 5. Summary - What Research Confirmed, Challenged, and Changed

| Element | Status | Key source |
|---------|--------|------------|
| Operator as primary segment | CONFIRMED | Phase 3 gap analysis - no competitor designs for the no-HR premise |
| Owner as secondary, outcome-focused | CONFIRMED | Phase 3 - Officevibe score visualization, Woliba admin dashboard |
| Employee privacy as architectural constraint | ELEVATED | Phase 4 - Culture Amp threshold model, Limeade anti-pattern |
| Self-serve, no demo required | CONFIRMED as critical differentiator | Phase 3 - Nivati, Woliba, Wellable all require demos |
| Published pricing | CONFIRMED as critical differentiator | Phase 3 - Gusto, Headspace Core are the only ones with transparent SMB pricing |
| 5-respondent anonymity threshold | CONFIRMED as mechanism | Phase 4 - Culture Amp 5-response rule, but must be non-configurable |
| Free tier as acquisition channel | CONFIRMED | Phase 3 - Headspace Core self-serve model is the closest analog |
| $4-6/seat/month price range | CONFIRMED | Phase 3 - Headspace Core $3.75-5.83/user/month, Officevibe old $5/user/month. Range is appropriate. |
| LinkedIn as primary paid acquisition | CONFIRMED viable | Phase 3 - Gusto uses this channel effectively for owner-persona |
| Programs engine as core mechanism | CONFIRMED gap | Phase 3 - No competitor combines programs + aggregate signal + no-HR design |
