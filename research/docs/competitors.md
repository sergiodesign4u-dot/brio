# Competitive Analysis

*Phase 3 - Research. Public pages only. No accounts created, no logins.*

---

## Competitor Groups

### Group 1 - HARD (same product, same audience)

| Name | Type | Why in this group | What to study |
|------|------|-------------------|---------------|
| Wellable | Employee wellness platform | Curated programs, challenges, rewards for SMB-to-enterprise. Direct overlap with Brio's program engine. 25-user minimum. | Privacy architecture (explicit documentation), pricing model, operator vs. owner dashboard split |
| Nivati | Mental health + EAP replacement | Expanded to <100-employee small businesses (Sept 2024). Therapy + content dual track. Closest audience overlap. | SMB pivot execution, privacy handling (HIPAA context), sales motion friction |
| Vantage Fit | Gamified activity challenge platform | Step challenges, leaderboards, point rewards. Global enterprise but published pricing and direct feature overlap with challenge mechanic. | Leaderboard vs. privacy tension, pricing structure, wearable dependency problem |
| Woliba | All-in-one wellness + recognition + surveys | Explicitly targets 20+ employee SMBs. MAU pricing model. AI burnout detection. Closest to Brio's aggregate signal concept - but with privacy gaps. | Burnout-signal admin visibility (privacy gap), consolidation pitch, MAU pricing mechanics |

### Group 2 - SOFT (different product, same JTBD)

| Name | Type | Why in this group | What to study |
|------|------|-------------------|---------------|
| Calm for Business / Calm Health | Consumer mindfulness app with B2B tier | Strongest brand recognition. Employees already know Calm. Now pivoting toward clinical/enterprise. | Product-market clarity problem (business.calm.com redirect), per-user pricing, adoption dynamics |
| Headspace for Work | Mindfulness content library with B2B tier | Most SMB-accessible soft competitor. Explicit small-business pricing page, 10-seat minimum. Clear public privacy commitment. | Privacy statement language (model for Brio), transparent pricing pattern, dependent access mechanic |

### Group 3 - ASPIRATIONAL (best-in-class SaaS for small teams)

| Name | Type | Why in this group | What to study |
|------|------|-------------------|---------------|
| Gusto | HR / payroll SaaS for SMBs | Gold standard for "built for owners, not departments." 500K+ SMB customers. Highest UX craft in the HR SaaS category. | Transparent pricing pattern, outcome-framed non-expert language, modular architecture |
| Officevibe (now Workleap) | Continuous pulse survey + AI insights | Best-documented anonymity threshold model in the category (3-respondent rule, in public help docs). Just repriced out of SMB. | Anonymity threshold documentation, AI-insight-to-action mechanic, score visualization |

---

## Comparison Matrix - 5 Most Relevant Competitors

*Ranked by relevance to Brio's core design problem.*

| Competitor | Audience | Product Foundation | Key Mechanism | Trust / Privacy | Monetization |
|------------|----------|--------------------|---------------|-----------------|--------------|
| **Woliba** | 20-200+ employees (explicit SMB), enterprise | Modular platform: wellness challenges, surveys, recognition, AI burnout detection | 8 integrated modules. MAU pricing - pay only for active users | Claims "anonymous surveys" but admin-visible burnout signals by manager create individual-inference risk. No public threshold rule. SOC 2, HIPAA, GDPR. | $2/MAU/month, $100/month minimum. Four tiers, pricing requires calculator/demo. |
| **Wellable** | 25-10,000 employees. HR-team assumed. | Wellness challenges + rewards + recognition + content library | Employee earns points through 40+ challenge types, redeems at gift cards | Explicit public doc: individual health assessment data never visible to admin. Admin sees aggregate only. 10-response threshold before showing aggregate. Activity participation (did they join?) IS admin-visible. | $1.25 PUPM. Essentials and Pro same price (confusing). Add-ons for coaching, biometrics. |
| **Headspace Core** | 10-1,000 employees. Self-serve, no HR required. | Mindfulness content library (meditation, sleep, focus, movement). 1,000+ hours. | Content access. Admin sees enrollment and engagement by content type only. | Clearest public privacy statement: "No PII in utilization data." Aggregate only. No drill-down. | $69.99/user/year (10 seats) to $30.80/user/year (500+ seats). Transparent published pricing. |
| **Officevibe / Workleap** | Was SMB ($5/user/month). Now repriced to $4,999/year flat (abandoned SMB). | Continuous automated pulse surveys + AI analysis + recommendations | Survey sent weekly → AI surfaces themes → manager gets recommended actions + reply assist | Most granular public anonymity model: 3-respondent threshold for scores, 5-respondent for written feedback. Managers cannot see who has/hasn't answered. | Old: $5/user/month free plan + paid. New: $4,999/year flat. SMB segment abandoned. |
| **Gusto** | 500K+ US small businesses. Owner as buyer. | Payroll + HR + benefits + time + performance | "Even if you're not a payroll expert." Guided setup, auto tax filing, AI assistant (Gus) | Privacy is a compliance table-stake (payroll needs SSNs), not a design feature. No wellbeing-specific privacy wall. | $49 base + $6/person/month (Simple) to $180 base + $22/person/month (Premium). Fully transparent. |

---

## Patterns, Differences, and Gaps

### 3 Common Patterns

**1. Privacy is claimed, not designed.**
Every competitor mentions privacy, anonymity, or data protection on their public pages. But most don't specify the exact mechanism - what threshold triggers anonymization, whether participation data (did this person complete the survey?) is admin-visible, or how small-team edge cases are handled. Wellable and Officevibe are the only two with specific thresholds documented publicly (10-response and 3-response rules respectively). The others rely on trust-me language without architectural specifics.

**2. The product assumes an HR sponsor exists.**
Wellable, Woliba, and Nivati all use language like "dedicated account manager," "program administrator," and "wellness coordinator" that assumes an HR professional on the buyer side. Their onboarding flows, pricing models, and support tiers all point to a company with an HR department. The no-HR small business is not designed for - it is tolerated.

**3. Individual benefit vs. team signal are not reconciled.**
Calm and Headspace deliver individual employee benefits (content, meditation) with minimal team signal - the owner learns almost nothing about team health. Woliba and Wellable deliver team signal (aggregate scores, trend data) but the individual/aggregate privacy line is blurry or inconsistent. No competitor has clearly resolved both: a genuine team signal for the owner AND a genuinely private individual experience. The two are treated as separate products rather than two sides of the same design problem.

### 3 Key Differences

**1. Pricing transparency splits the market.**
Gusto, Vantage Fit, and Headspace Core publish real prices. Everyone else requires a demo. This is not a coincidence - it correlates with audience: SMB-first products publish prices because their buyers will not enter a sales process. Enterprise-first products hide prices because their deals are custom. Brio's audience demands transparent pricing.

**2. The mechanism varies from content to signal to clinical.**
Calm/Headspace: content library. Wellable/Vantage Fit: activity challenge + points. Woliba: modular platform with AI inference. Nivati: clinical therapy access. Each solves a different version of the wellbeing problem. None of them have a dedicated "aggregate team signal" layer that is the product, not just a report. The pulse/signal layer is always an analytics add-on, not the core value proposition.

**3. Sales motion self-selects the audience.**
Products that require a demo to see pricing (Nivati, Woliba) automatically filter out the solo office manager or founder who doesn't have authority to schedule a sales call without internal buy-in. Products that are self-serve (Headspace Core, Gusto) convert the buyer who gets to "aha" before talking to anyone. Brio's operator persona will not book a demo - they will try the product or they will not buy.

### What Is Missing Across All (Our Gap)

No competitor has built a product where:
- The absence of an HR team is the explicit design premise (not a market segment note)
- The privacy architecture is the product's primary trust story on page one (not a policy or docs page)
- The aggregate team signal is the central outcome, not a reporting add-on
- The operator (non-HR, non-expert) is the hero of the interface - not a power user who needs training
- Self-serve with published pricing down to 10 employees
- A specific, communicated anonymity threshold (like Officevibe's 3-person rule) is front-and-center in the product's value proposition

This gap is Brio's wedge.

### 3 Open Questions

1. **Woliba's MAU pricing model** - does paying-per-active-user genuinely reduce cost for low-participation periods, or does the $100/month floor negate the benefit for teams under 50? Would this model work for Brio?

2. **Headspace Core's content-only approach** generates high adoption (employees already use Calm/Headspace personally) but no team signal. Could Brio integrate lightweight content access as an employee engagement layer while keeping the team signal as the core operator/owner value? Or does this create scope creep?

3. **The Officevibe anonymity threshold (3-respondents)** - is this the right number for small teams? A 10-person company where 3 people respond in one department could still expose individuals. What is the right threshold for Brio's 10-50 person audience? [? Requires user research and possibly legal guidance]

---

## How Each Competitor Handles the Owner vs. Individual Privacy Boundary

This is the central tension for Brio. Summary:

| Competitor | Admin sees individual data? | Threshold rule | Public documentation? |
|------------|----------------------------|----------------|-----------------------|
| Wellable | Activity participation: YES. Health assessment: NO | 10 responses for health data | Yes - explicit support doc |
| Nivati | [? behind login / demo] | Not stated publicly | No |
| Vantage Fit | Leaderboard rankings: YES (by design). Biomarker data: NO | Not stated publicly | Partial |
| Woliba | Burnout signals by manager: probably YES (inferred). Survey responses: claimed NO | Not stated publicly | No |
| Calm Health | [? behind login / partner agreement] | Not stated publicly | No |
| Headspace Core | Enrollment + content type engagement: YES. Individual identity: NO | Not stated | Yes - product page |
| Gusto | Full individual data (payroll context): YES | N/A | N/A - different model |
| Officevibe | Participation identity: NO. Scores/themes: aggregate only | 3 for scores, 5 for written | Yes - public help article |

**Brio's position:** The product is the boundary. The threshold rule, what the owner can and cannot see, and the fact that no individual data ever surfaces must be communicated as clearly as Officevibe's help article - and more visibly, on the product page itself.

---

## Screens Captured

See research/screens/ folder.

- wellable-homepage.png
- wellable-pricing.png
- nivati-homepage.png
- vantagefit-homepage.png
- vantagefit-pricing.png
- woliba-homepage.png
- woliba-pricing.png
- calm-health-homepage.png
- headspace-smallbiz.png
- gusto-homepage.png
- gusto-pricing.png
- workleap-officevibe.png
- workleap-pricing.png

*[? motion-heavy] - Vantage Fit homepage uses heavy animation; static screenshot captures hero section only.*
*[? behind login] - Woliba admin dashboard, Nivati platform, all admin analytics views.*

---

## Sources

- https://www.wellable.co/ (visited June 2026)
- https://www.wellable.co/pricing/wellness-platform (visited June 2026)
- https://support.wellable.co/hc/en-us/articles/360045639592-Overview (visited June 2026)
- https://www.nivati.com/ (visited June 2026)
- https://www.nivati.com/blog/nivati-now-supports-smb (visited June 2026)
- https://www.vantagefit.io/ (visited June 2026)
- https://www.vantagefit.io/pricing/ (visited June 2026)
- https://woliba.io/ (visited June 2026)
- https://woliba.io/pricing/ (visited June 2026)
- https://health.calm.com/ (visited June 2026)
- https://organizations.headspace.com/small-business (visited June 2026)
- https://gusto.com/ (visited June 2026)
- https://gusto.com/pricing (visited June 2026)
- https://workleap.com/officevibe/ (visited June 2026)
- https://workleap.com/pricing (visited June 2026)
- https://help.officevibe.com/hc/en-us/articles/360028520452 (visited June 2026)
