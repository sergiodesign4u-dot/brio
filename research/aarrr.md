# AARRR Model

*Pre-research hypotheses. Validated figures will be added in Phase 4.5.*

---

## Acquisition

**Channels and mechanics**

- SEO / content: target long-tail queries from operators ("how to run employee wellness program small business", "office manager wellbeing ideas"). Low cost, slow burn, compound value.
- LinkedIn: paid targeting by job title (office manager, operations coordinator, EA) at companies 10-200 employees. Direct-to-operator message.
- Founder / owner word of mouth: owners who see ROI tell other owners. Referral loop starts from the outcome side.
- Product Hunt / SaaS communities: for early adopters and early feedback loops.
- Free tier as acquisition: the free plan is a permanent top-of-funnel tool, not just a trial.

**Hypotheses**

1. The operator is reachable by job title on LinkedIn at a cost-effective CPL for a SaaS product in this price range. [? validate CPL benchmark - estimate $40-80 CPL for B2B SaaS at this segment size]
2. Long-tail SEO around "no HR" and "small business wellbeing" has low competition and high intent. [? to verify with keyword research]
3. The free tier will be the primary acquisition driver in the first 12 months.

**Unknowns**

- Whether the operator or owner is the first person to discover Brio (discovery persona vs. decision persona may differ)
- Exact LinkedIn CPL for this job title + company size combination
- Which content formats convert best for this audience (listicles, templates, calculators)

**Primary metric:** New account signups per month
**Target (hypothesis):** 200 signups/month by month 6, 500/month by month 12

**MVP product decision:** Launch with a free tier that requires no credit card. Reduce signup friction to a single email field. Optimize first for top-of-funnel volume, then for activation quality.

---

## Activation

**Channels and mechanics**

- Guided onboarding: operator enters company name, invites team, picks first program - all in one flow under 5 minutes.
- "Aha moment" design: first program is live and first team invite is sent before the operator leaves the first session.
- Employee onboarding: frictionless - no account required for first check-in, magic link or simple code.
- Owner invite: operator sends owner a view-only dashboard link during or immediately after setup.

**Hypotheses**

1. The operator's "aha moment" is seeing their first check-in results aggregate in real time - the moment the data becomes a signal.
2. Requiring the operator to invite at least 3 employees before they can see any dashboard will improve downstream data quality (enforces minimum N for aggregation).
3. Time-to-first-program under 5 minutes is achievable and is the critical activation threshold.

**Unknowns**

- Whether the operator or the owner is more motivated by the activation moment
- What the right minimum team size is to enforce before showing aggregate data (privacy threshold)
- Whether requiring employee participation before showing owner dashboard will frustrate or delight the operator

**Primary metric:** % of signups who complete setup and send at least one team invite within 48 hours
**Target (hypothesis):** 55%

**MVP product decision:** Build a linear, opinionated onboarding flow. No blank-slate setup. Operator is guided step by step. First program is pre-selected based on company size, operator can change it.

---

## Retention

**Channels and mechanics**

- Operator habit: weekly email digest summarizing team participation and aggregate score. Keeps operator engaged even if they do not log in daily.
- Employee habit: consistent check-in schedule (same day, same time each week). Routine reduces friction.
- Owner digest: monthly email with team health trend and program highlights. Keeps the owner aware without overwhelming them.
- In-product nudges: when participation drops below threshold, operator gets a gentle prompt ("Only 3 responses this week - try sending a reminder").

**Hypotheses**

1. Operator retention is driven by the weekly digest email more than by daily in-app use. They are time-poor and log in when prompted.
2. Employee participation rates above 60% correlate with operator retention. If employees stop responding, operators lose faith in the product.
3. Owner monthly digest is the primary driver of paid plan renewal decisions.

**Unknowns**

- What the natural cadence of operator engagement looks like (daily? weekly? monthly?)
- Whether a lower participation rate (40-50%) is acceptable to operators who see improving trends
- How long until the "novelty effect" wears off for employees and participation naturally drops

**Primary metric:** 90-day operator retention rate (% of accounts still active at 90 days)
**Target (hypothesis):** 65%

**MVP product decision:** Build the weekly operator digest email before the in-app notification system. Email is higher reach and lower build cost. Do not build a notification center in V1.

---

## Revenue

**Channels and mechanics**

- Free-to-paid conversion: triggered when account hits free tier limits (>10 employees, or >1 active program, or operator wants owner dashboard access).
- In-app upgrade prompts: surfaced naturally at the moment of hitting a limit, not randomly.
- Annual vs. monthly billing: offer a discount for annual (assumption: 15-20% off) to improve cash flow and reduce churn.
- Expansion revenue: as company grows past 50 employees, move to Growth tier automatically with upgrade prompt.

**Hypotheses**

1. The owner dashboard (aggregate team signal) is the primary paid feature - operators will upgrade to give the owner visibility.
2. Per-seat pricing works better than flat-fee for this segment because it scales naturally with company growth and aligns cost to value.
3. A free tier with a real team-size limit (10 employees) will convert meaningfully at a higher rate than a time-limited trial.

**Unknowns**

- Whether operators convert before or after their first program cycle completes (first 4 weeks?)
- Optimal price point: $4, $5, or $6 per seat per month for Starter? [? validate against competitor pricing in Phase 3]
- Whether annual billing is meaningful for this audience given cash flow concerns of small businesses

**Primary metric:** Free-to-paid conversion rate
**Target (hypothesis):** 8-12% of free accounts convert within 60 days

**MVP product decision:** Gate the owner dashboard (aggregate view) behind the paid tier. This is the clearest value driver for upgrade. Keep the operator dashboard and one program on the free tier to demonstrate value.

---

## Referral

**Channels and mechanics**

- Operator-to-peer: operators talk to other ops/office managers in professional communities (Slack groups, LinkedIn). Word of mouth is organic.
- Owner-to-owner: owners who see ROI mention it at peer groups, EO chapters, YPO, or investor circles.
- Case studies: with permission, publish anonymized aggregate results ("teams using Brio saw participation rates of X% and self-reported wellbeing scores improve by Y points"). [? real figures only - to be added after beta]
- In-product referral: simple "share Brio with a colleague" prompt after a positive milestone (first month complete, team score improved).

**Hypotheses**

1. The operator-to-peer referral loop will be stronger than any paid channel in the first year.
2. Owners who share are motivated by wanting to look like good leaders, not by financial incentives. No cash referral program needed.
3. An in-product referral prompt at the right moment (positive milestone, not randomly) will generate a meaningful share rate.

**Unknowns**

- Whether to build a formal referral program in V1 or rely on organic word of mouth
- What the right milestone trigger is for a referral prompt
- Whether operator communities (Slack groups, LinkedIn groups) are reachable for content distribution

**Primary metric:** % of new signups that cite referral as acquisition source (self-reported at signup)
**Target (hypothesis):** 20% of signups by month 9

**MVP product decision:** Do not build a formal referral program in V1. Add a single "share with a colleague" prompt at the 30-day mark if participation rate is above 50%. Track referral source at signup with a simple dropdown. Build referral infrastructure in V2 once patterns are clear.

---

## Summary Metrics Table

| Stage | Primary Metric | Target (hypothesis) | Confidence |
|-------|---------------|---------------------|------------|
| Acquisition | New signups / month | 200 by month 6 | Low |
| Activation | % completing setup + first invite in 48h | 55% | Low |
| Retention | 90-day operator retention | 65% | Low |
| Revenue | Free-to-paid conversion rate | 8-12% in 60 days | Low |
| Referral | % signups from referral | 20% by month 9 | Low |

*All targets are hypotheses. Confidence is low until validated with real user data.*

---

## Key Takeaways

1. **Activation is the critical lever.** If the operator does not get to "first program live, team invited" in session one, they likely never will. Every product decision in V1 should optimize for this milestone.

2. **The owner dashboard is the paid feature, but the operator is the buyer.** The operator upgrades because they want to give the owner visibility. Design the upgrade moment around that emotional job, not around feature lists.

3. **Employee participation rate is a leading indicator for everything.** If employees stop responding, aggregate signals degrade, operators lose faith, and churn follows. Protecting employee trust (through privacy design) is the retention strategy.

4. **The free tier is the acquisition channel.** Do not time-limit it or cripple it so badly it cannot demonstrate value. The team-size limit (10 employees) is the natural, non-punitive conversion trigger.
