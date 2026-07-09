# AARRR Model

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| v1 | Phase 2 | Pre-research hypotheses. All targets marked as low confidence. |
| v_refresh | Phase 7 re-run | Refreshed against research/docs/competitors.md and research/docs/benchmark.md. Aligned with Strategy v_refresh (same segments, business model, riskiest assumption). Acquisition SEO sharpened. Activation aha moment sharpened. Privacy disclosure added as Retention mechanism. Sources cited for each adjustment. Targets remain hypotheses. |

---

## Acquisition

**Channels and mechanics**

- SEO / content: target long-tail "operator how-to" queries ("how to run employee wellness program small business", "office manager wellbeing ideas no HR"). NOT product comparison queries - those are dominated by G2 and Capterra review sites where Brio has no footprint yet. Source: research/docs/competitors.md - Awareness channel note, Phase 4.5 update.
- LinkedIn: paid targeting by job title (office manager, operations coordinator, EA, founder) at companies 10 to 200 employees. Direct-to-operator message. Confirmed viable by Gusto's use of this channel for a similar persona. Source: research/docs/competitors.md, Aspirational group - gusto.com.
- Free tier as permanent top-of-funnel: the free plan is not a time-limited trial. It demonstrates real value before asking for a credit card. The team-size limit (10 employees) is the conversion trigger. Source: research/docs/competitors.md - Headspace Core self-serve model.
- Founder / owner word of mouth: owners who see ROI tell other owners at peer groups (EO, YPO, investor circles). Secondary channel, later phase.

**Choices considered for primary channel - diverge then converge:**
Content marketing targeting "operator how-to" queries (chosen) vs. paid LinkedIn from day one vs. Product Hunt launch. Product Hunt is unpredictable and does not target the operator persona reliably. LinkedIn CPL for this job title + company size is unvalidated [?]. Content marketing is lower cost and compounds, but slow. Chosen: content + free tier as co-primary, LinkedIn as secondary after first 90 days. This aligns with the riskiest assumption: the operator needs to discover the product organically and believe it is for them before any sales touch.

**Hypotheses**

1. The free tier will be the primary acquisition driver in the first 12 months. Operators who cannot see a price or try a product without talking to a salesperson will not buy. Headspace Core and Gusto prove this audience self-activates when friction is removed. Source: research/docs/competitors.md, Key Differences - Sales motion.
2. Long-tail SEO around "no HR" and "small business wellbeing" has low competition and high intent from the operator persona. [? to validate with keyword research before launch]
3. The operator is the discovery persona (finds Brio) and the decision persona (signs up without needing internal buy-in at 10-50 person companies). [? whether the owner discovers first - open question Q2 from research/docs/research.md]

**Unknowns**

- Whether the operator or owner is the first person to discover Brio
- LinkedIn CPL for this job title + company size combination [? estimate $40 to 80 CPL for B2B SaaS at this segment - unvalidated]
- Which content formats convert best for this audience (templates, how-to guides, calculators)

**Primary metric:** New account signups per month

**Target (hypothesis):** 200 signups/month by month 6, 500/month by month 12

**MVP product decision:** Launch with a free tier that requires no credit card. Reduce signup to a single email field. Optimize for top-of-funnel volume first, then measure activation quality. Do not gate discovery behind a demo or pricing call.

---

## Activation

**Channels and mechanics**

- Guided linear onboarding: operator enters company name, invites team, picks first program - all in one flow under 5 minutes. No blank-slate setup. No menu of options.
- First program pre-selected based on company size - operator confirms or swaps. Reduces decision paralysis for a non-expert buyer.
- Privacy disclosure built into employee onboarding: before the first check-in question, one sentence in plain language ("your answer joins the team's anonymous score - [company name] sees only the team total, never your response"). This is not optional, not a modal, not a policy link. Source: research/docs/benchmark.md, Mechanism 2 - Apple Health pattern; research/docs/ux-patterns.md, Pattern B5.
- Aha moment design: first aggregate result appears alongside a plain-language interpretation and a suggested next action ("4 people responded. Team score: 7.2/10. This is a strong start - consider launching the next module this week."). Source: research/docs/competitors.md - Officevibe AI-recommended-action mechanic (workleap.com/officevibe).
- Employee onboarding: no account required for the first check-in. Magic link or simple join code.

**Hypotheses**

1. The operator's aha moment is seeing the first aggregated check-in score alongside a plain-language interpretation AND a suggested next action - not just the number. A score without context produces no action and no habit. Source: research/docs/competitors.md - Officevibe pattern; research/docs/ux-patterns.md, Pattern B4.
2. The privacy disclosure before the first check-in is the critical activation gate for employees. If employees feel uncertain about who can see their answer, they will not respond honestly - or will not respond at all. Without employee responses, the aha moment cannot happen. Source: research/docs/benchmark.md, Mechanism 2; research/docs/ux-patterns.md, Pattern B5.
3. Time-to-first-program under 5 minutes is achievable and is the critical activation threshold for operators. Confirmed by Headspace Core's self-serve model and Gusto's guided setup pattern. Source: research/docs/competitors.md.

**Unknowns**

- Whether the operator or the owner is more motivated by the activation moment
- What the right minimum team size is to require before showing aggregate data (legal question - current assumption: 5)
- Whether requiring employee participation before showing the owner dashboard will frustrate or delight the operator during onboarding

**Primary metric:** % of signups who complete setup and send at least one team invite within 48 hours

**Target (hypothesis):** 55%

**MVP product decision:** Build a linear, opinionated onboarding flow. No blank-slate setup. Operator is guided step by step. First program is pre-selected by company size - operator can change it, but does not have to. Include the privacy disclosure moment in the employee invite flow, not just at first check-in.

---

## Retention

**Channels and mechanics**

- Operator habit: weekly email digest summarizing team participation rate and aggregate score with plain-language interpretation. This is the primary operator touchpoint - the operator does not need to log in daily. Source: research/docs/ux-patterns.md, Pattern B1 (operator works in bursts, not continuously).
- Employee habit: consistent check-in schedule (same day, same time each week). Routine reduces friction more than feature depth. Participation habit forms over 3 to 4 weeks if the experience is safe and fast. Source: research/docs/ux-patterns.md, Pattern B3.
- Privacy disclosure as retention mechanism: repeated contextual privacy communication before every check-in trains employee trust over time. One-time consent flows are forgotten. Persistent repetition at the same moment is the mechanism. Source: research/docs/benchmark.md, Mechanism 2 - Apple Health pattern (apple.com/privacy/features).
- Owner digest: monthly email with team health trend and program highlights. Designed for mobile reading. Read-only single-screen experience. Source: research/docs/ux-patterns.md, Pattern B2.
- In-product nudges for operators: when participation drops below the threshold, operator gets a gentle prompt ("Only 3 responses this week - try sending a reminder to the team").

**Hypotheses**

1. Operator retention is driven by the weekly digest email more than by daily in-app sessions. Operators are time-poor and log in when prompted. Source: research/docs/ux-patterns.md, Pattern B1.
2. Employee participation rate above 60% is the leading indicator for operator retention. If employees stop responding, aggregate signals degrade, operators lose faith in the product, and churn follows. The riskiest assumption (employee trust and participation) is the retention lever. Source: research/strategy.md, Riskiest Assumption.
3. The owner monthly digest is the primary driver of paid plan renewal decisions. The owner needs one number, a trend, and a plain-language interpretation - under 2 minutes. Source: research/docs/ux-patterns.md, Pattern B2.

**Unknowns**

- Natural cadence of operator engagement (daily? weekly? monthly?)
- Whether a lower participation rate (40 to 50%) is acceptable to operators who see improving trends
- How long until novelty wears off for employees and participation naturally declines

**Primary metric:** 90-day operator retention rate (% of accounts still active at 90 days)

**Target (hypothesis):** 65%

**MVP product decision:** Build the weekly operator digest email before the in-app notification system. Email is higher reach and lower build cost for V1. Do not build a notification center. Build the persistent pre-check-in privacy disclosure into the check-in flow, not a one-time onboarding step.

---

## Revenue

**Channels and mechanics**

- Free-to-paid conversion: triggered naturally when account hits free tier limits (more than 10 employees, or operator wants owner dashboard access). No random upgrade prompts.
- Owner dashboard gate: the aggregate owner view is the primary paid feature. Operator upgrades to give the owner access - this is the emotional driver of the upgrade decision, not a feature checklist. Source: research/docs/ux-patterns.md; validated JTBD analysis, Segment B.
- Annual vs. monthly billing: offer a discount for annual billing (assumption: 15 to 20% off) to improve cash flow predictability and reduce churn.
- Expansion: as company grows past 50 employees, move to Growth tier automatically with an upgrade prompt framed around team scale, not product features.

**Choices considered for upgrade trigger - diverge then converge:**
Option 1: team-size limit only (more than 10 employees). Option 2: owner dashboard access only (any size, but owner view is paid). Option 3: both triggers, whichever comes first. Chosen: Option 3. Some accounts will hit the team-size limit before needing owner visibility. Others (a 9-person team where the owner checks in monthly) will upgrade purely for owner dashboard access. Both triggers serve different conversion paths without conflicting.

**Hypotheses**

1. The owner dashboard (aggregate team signal) is the primary paid feature. Operators upgrade to give the owner visibility, not because they need more features for themselves. Source: research/docs/competitors.md - Officevibe score visualization as owner value anchor; validated JTBD analysis.
2. Per-seat pricing works better than flat-fee for this segment because it scales naturally with company growth and aligns cost to value delivered. Source: research/docs/competitors.md - Woliba MAU pricing note; Headspace Core per-seat model.
3. A free tier with a real team-size limit (10 employees) will convert at a higher rate than a time-limited trial, because it allows operators to demonstrate value before hitting the wall. Source: research/docs/competitors.md - Headspace Core as closest analog.

**Unknowns**

- Whether operators convert before or after their first program cycle completes (4 weeks)
- Exact optimal price point: $4, $5, or $6 per seat per month for Starter [? validate with pricing test at launch]
- Whether annual billing is meaningful for cash-constrained small businesses

**Primary metric:** Free-to-paid conversion rate

**Target (hypothesis):** 8 to 12% of free accounts convert within 60 days of activation

**MVP product decision:** Gate the owner dashboard (aggregate view) behind the paid tier. Keep the operator dashboard and one active program on the free tier to demonstrate real value. This is the clearest value driver for upgrade and the one with the strongest link to the riskiest assumption: operators who see employee participation and want to share the signal with their owner are the most likely converters.

---

## Referral

**Channels and mechanics**

- Operator-to-peer organic: operators talk to other office managers, ops leads, and EAs in professional communities (Slack groups, LinkedIn groups, professional associations). Word of mouth is the natural channel for a persona that trusts peer recommendations over ads.
- Owner-to-owner: owners who see ROI mention it at peer groups (EO chapters, YPO, investor circles, founder Slack communities). No cash incentive needed - owners share to look like good leaders.
- In-product referral prompt: a single "share Brio with a colleague" prompt triggered at a positive milestone - 30 days completed with participation rate above 50%. Not at a random time. Not on a feature page.
- Case studies: with permission, publish anonymized aggregate results ("teams using Brio saw participation rates of X% and self-reported scores improve by Y points"). [? real figures only - to be added after beta data exists]

**Hypotheses**

1. Operator-to-peer referral will be the strongest acquisition channel in year 1, stronger than any paid channel. The operator persona trusts recommendations from people in the same role more than ads. Source: consistent with Gusto's observed SMB word-of-mouth growth pattern (gusto.com).
2. Owners who share are motivated by wanting to be seen as caring leaders, not by financial incentives. No cash referral program is needed or appropriate for this persona.
3. An in-product referral prompt at a positive milestone (not randomly) will generate a meaningful share rate without feeling extractive.

**Unknowns**

- Whether to build a formal referral program in V1 or rely entirely on organic word of mouth
- What the right milestone trigger is for the referral prompt (30 days? First month of program complete? Participation rate milestone?)
- Whether operator communities (LinkedIn groups, Slack communities for office managers) are reachable for content distribution [? identify specific channels before launch]

**Primary metric:** % of new signups that cite referral as acquisition source (self-reported at signup)

**Target (hypothesis):** 20% of signups by month 9

**MVP product decision:** Do not build a formal referral program in V1. Add a single "share with a colleague" prompt at the 30-day mark if participation rate is above 50%. Track referral source at signup with a simple dropdown (referral / search / social / LinkedIn ad / other). Build referral infrastructure in V2 once patterns are clear.

---

## Summary Metrics Table

| Stage | Primary Metric | Target (hypothesis) | Confidence | Alignment with riskiest assumption |
|-------|---------------|---------------------|------------|------------------------------------|
| Acquisition | New signups / month | 200 by month 6 | Low | Operator discovers product without a sales conversation - first test of self-serve belief |
| Activation | % completing setup + first team invite in 48h | 55% | Low | Operator believes product is worth setting up; employees trust privacy enough to respond |
| Retention | 90-day operator retention | 65% | Low | Employee participation sustains the signal that keeps operators engaged |
| Revenue | Free-to-paid conversion rate | 8 to 12% in 60 days | Low | Operator and owner both believe the aggregate signal justifies payment |
| Referral | % signups from referral (self-reported) | 20% by month 9 | Low | Operators and owners who believe in the product talk about it |

*All targets are hypotheses. Confidence is low until validated with real user data.*

---

## 4 Key Takeaways

1. **Activation is the critical lever - and it depends on two separate trust events.** The operator must believe the product is worth launching (their half of the riskiest assumption), AND employees must trust the privacy model enough to respond (the other half). Both must succeed in session one for the product to function. Every V1 decision should optimize for this double-trust moment.

2. **The owner dashboard is the paid feature, but the operator is the buyer.** The operator upgrades to give the owner visibility. Design the upgrade moment around that emotional job - not around feature lists, storage limits, or arbitrary trial expiry.

3. **Employee participation rate is the leading indicator for everything.** If employees stop responding, aggregate signals degrade, operators lose faith, and churn follows. Privacy design (persistent disclosure, non-configurable minimum-N, business model as trust argument) is not a compliance layer - it is the retention strategy. Source: research/docs/benchmark.md.

4. **The free tier is the acquisition channel.** Do not cripple it so badly it cannot demonstrate real value. The 10-employee limit is the natural, non-punitive conversion trigger - not an artificial feature wall. A free tier that shows nothing meaningful does not convert; it just delays churn.
