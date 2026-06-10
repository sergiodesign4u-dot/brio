# Master Research - Brio

*Single source of truth. Built from validated v2 product model.*

---

## 1. Introduction

### Purpose
This document synthesizes all research phases into a single, citable source of truth for the Brio product design process. It is the foundation for wireframes, concept, and design system work.

### Problem
Small businesses (10 to 200 employees) with no HR team have no credible tool to run employee wellbeing. The person handed "people stuff" - an office manager, ops lead, or founder - has no training, no framework, and no way to know if their efforts are working. The business owner needs proof the investment is worthwhile but has no HR layer to filter individual data. In this context, the product itself must be the privacy boundary between what the owner can see and what employees share.

### Approach
7 research phases: product brief, product model (v1 and v2), AARRR model, competitive analysis (8 companies, 3 groups), trust and privacy benchmark (5 products), UX pattern analysis (5 patterns, 5 behavioral patterns). Web research conducted June 2026. Public pages only; no accounts created, no logins.

### 5 Key Conclusions

1. **There is a real gap in the market.** No competitor combines self-serve SMB pricing, a guided program engine for non-HR operators, AND a genuine aggregate-only team signal. The segment is underserved because everyone else assumes an HR team exists.

2. **Privacy is not a feature - it is the product.** The benchmark (Phase 4) shows that products treating privacy as a policy (Limeade, Typeform) erode the employee trust that generates signal quality. Products treating privacy as architecture (Culture Amp, Apple, Oura) earn participation. For Brio, the privacy design is the product design.

3. **The operator is the hero, but the employee is the engine.** Without employee participation, there is no signal. Without a signal, the owner sees nothing. Without owner conviction, there is no renewal. The product serves three stakeholders in a chain: the employee's trust must be earned first, before anything else in the chain functions.

4. **Self-serve and transparent pricing are table-stakes for this audience.** Nivati, Woliba, and Wellable all require demos. This friction self-selects against the exact buyer Brio needs - a solo operator who will try the product before they can justify a sales conversation. Gusto and Headspace Core prove that transparent pricing and self-serve activation convert the SMB buyer.

5. **The UX pattern is a hybrid.** Guided Program Flow + Pulse Loop, serving the operator's need for structure (what do I run?) and the owner's need for signal (is the team OK?). No competitor holds this combination in a self-serve, no-HR-required package.

---

## 2. Product Model (v2 - validated)

### Objectives

| Objective | Metric | Target | Verdict |
|-----------|--------|--------|---------|
| Operator feels competent without HR training | % completing setup + first program in 7 days | 70% (hypothesis) | CONFIRMED - Gusto pattern (gusto.com), Headspace Core self-serve model (organizations.headspace.com/small-business) |
| Owner sees credible team-level signal | % viewing dashboard without 30s bounce | 60% (hypothesis) | CONFIRMED - Officevibe score visualization (workleap.com/officevibe) |
| Employee trust drives participation | Team check-in participation rate | 65% average | CONFIRMED + mechanism - Culture Amp pre-survey disclosure (support.cultureamp.com/en/articles/7048386) |
| Measurable business retention | Monthly churn past 90 days | Below 4% | UNCHANGED - Officevibe's SMB abandonment confirms retention is sticky when value is clear |

### Segments

**Operator (Primary):** Office manager, ops coordinator, EA, or founder at 10 to 200 person company with no HR. 26 to 45. Organized, empathetic, over-extended. JTBD: "When I am responsible for employee wellbeing with no training, I want a guided system that tells me what to do and when, so that I feel competent and the team benefits." Pain sharpened: no self-serve path exists (Nivati, Woliba, Wellable all require demos).

**Owner (Secondary):** Founder, CEO, or managing partner. Business-minded, time-poor, approves budget. JTBD: "When I need to know if my team investment is working, I want a clear honest team-level signal without individual data, so that I can make confident budget decisions." Checks in monthly, views dashboard in under 2 minutes.

**Employee (Third party - privacy hard constraint):** Does not choose Brio. Must be given a credible reason to participate honestly. Privacy model must be visible before the first question, not in a policy document. Individual data never surfaces up the chain - this is architectural, not configurable.

### Business Model

SaaS subscription, per-seat pricing. Free tier up to 10 employees (1 program, basic pulse, operator-only view). Paid Starter ~$5/seat/month up to 50 employees (full program library, owner dashboard, trend analytics). Growth tier ~$9/seat/month for 50 to 200+ employees (multi-team, integrations, priority support). Pricing based on: Headspace Core $3.75 to $5.83/user/month (organizations.headspace.com/small-business), Officevibe's former $5/user/month (workleap.com/pricing), Woliba $2/MAU/month + $100/month floor (woliba.io/pricing).

---

## 3. AARRR Funnel

| Stage | Channel / Mechanic | Key Hypothesis | Unknown | Primary Metric | Target | MVP Decision |
|-------|-------------------|----------------|---------|----------------|--------|--------------|
| Acquisition | SEO (operator how-to queries), LinkedIn (job title targeting), free tier | Free tier is primary top-of-funnel driver | Whether operator or owner discovers first | New signups/month | 200 by month 6 | No credit card at signup; single email field |
| Activation | Guided linear onboarding, first program live in session, employee invite in session | Aha moment = first aggregate check-in result visible | Right minimum team size before showing data | % completing setup + first invite in 48h | 55% | Opinionated flow: pre-select first program by company size |
| Retention | Weekly operator digest email, consistent check-in schedule, owner monthly digest | Operator retention driven by email digest more than in-app | Natural operator engagement cadence | 90-day operator retention | 65% | Build weekly email digest before in-app notifications |
| Revenue | Upgrade triggered by team-size limit or owner dashboard access | Owner dashboard is the primary upgrade driver | Whether operators convert before or after first cycle | Free-to-paid conversion rate | 8-12% in 60 days | Gate owner dashboard behind paid tier |
| Referral | Operator-to-peer organic, owner peer groups, in-product prompt at 30-day milestone | Operator-to-peer referral is strongest channel year 1 | Whether formal referral program is needed | % signups from referral (self-reported) | 20% by month 9 | No formal referral program in V1; track source at signup |

---

## 4. Competitors

### Comparison Matrix

| Competitor | Audience | Product Foundation | Key Mechanism | Trust / Privacy | Monetization |
|------------|----------|--------------------|---------------|-----------------|--------------|
| Woliba | 20-200+ employees (explicit SMB) | 8 integrated modules: wellness, surveys, recognition, AI burnout | MAU pricing, AI burnout detection by manager | Claims anonymous surveys; admin burnout signals by manager create individual inference risk. No threshold rule public. | $2/MAU/month, $100/month min, demo required |
| Wellable | 25-10,000 employees, HR assumed | Programs + rewards + recognition + content library | 40+ challenge types, points to gift cards | Health assessment data aggregate only (10-response threshold). Activity participation admin-visible. | $1.25 PUPM, demo required |
| Headspace Core | 10-1,000 employees, self-serve | Mindfulness content library, 1,000+ hours | Content access, admin sees aggregate enrollment only | "No PII in utilization data" - clearest public statement. | $3.75-5.83/user/month, transparent |
| Officevibe / Workleap | Was SMB; now $4,999/year flat (abandoned SMB) | Continuous pulse surveys + AI analysis + recommendations | 3-respondent threshold, AI-recommended actions | 3-respondent threshold in public help docs; individual participation invisible to admins | Old: $5/user/month. New: $4,999/year |
| Gusto | 500K+ US SMBs, owner as buyer | Payroll + HR + benefits, all-in-one | "Even if you're not an expert" guided setup, AI assistant | Privacy is payroll compliance, no wellbeing-specific wall | $49+$6/person/month to $180+$22/person/month, fully transparent |

### 3 Common Patterns

1. **Privacy is claimed, not designed.** Wellable, Woliba, and Nivati all mention anonymity; none specifies the mechanism on a public product page. Only Culture Amp (support docs) and Headspace Core (product page) state the specific architecture.

2. **The product assumes an HR sponsor exists.** All hard competitors use language ("dedicated account manager," "program administrator") that assumes an HR professional on the buyer side. The no-HR small business is not designed for - it is tolerated.

3. **Individual benefit and team signal are separate products, not two sides of one design.** Calm/Headspace deliver individual benefits with no team signal. Woliba/Wellable deliver team analytics with blurry privacy lines. No competitor has resolved both in one coherent design.

### 3 Key Differences

1. **Pricing transparency splits the market.** Gusto, Vantage Fit, Headspace Core publish real prices. Everyone else requires a demo. This correlates exactly with audience: SMB-first products publish prices because their buyers will not enter a sales process.

2. **The aggregate signal is always a reporting add-on, never the core value.** No competitor frames the team-level pulse as the product - it is always a dashboard attached to a program or survey tool.

3. **Sales motion self-selects.** Demo-required products (Nivati, Woliba) automatically filter out the solo operator who cannot justify a sales call before seeing a price. Self-serve products (Headspace Core, Gusto) convert before any human contact.

### What Is Missing (Our Gap)

No product: (a) prices transparently for 10 to 50 employees, (b) is self-serve with no demo required, (c) gives the owner an aggregate team signal as the primary value proposition, (d) explicitly designs for the absence of an HR team, (e) states the privacy architecture plainly on the product page (not in a policy), (f) makes a non-expert operator the hero of the interface.

---

## 5. Benchmark

### Scores

| Criterion | Culture Amp | Oura Ring | Apple Health | Typeform | Limeade |
|-----------|-------------|-----------|--------------|----------|---------|
| C1 - Employer visibility clarity | 4 | 4 | 5 | 2 | 1 |
| C2 - Anonymity threshold communicated | 5 | 3 | N/A | 1 | 2 |
| C3 - Small-team edge case honesty | 5 | 3 | N/A | 1 | 1 |
| C4 - Data use transparency + consent | 4 | 5 | 5 | 2 | 1 |
| C5 - Individual experience stays private | 4 | 5 | 5 | 2 | 2 |
| C6 - Tone of team reporting | 4 | 4 | 5 | 3 | 2 |
| C7 - Opt-in vs. opt-out framing | 3 | 5 | 5 | 2 | 1 |
| C8 - Privacy visible in product UI | 4 | 3 | 5 | 1 | 1 |
| **Total** | **33/40** | **32/35** | **35/30*** | **14/40** | **11/40** |

*Apple Health N/A on C2 and C3 (no group aggregation layer).*

### Top 3 Mechanisms to Carry Into MVP

**1. Indirect Identification Protection (Culture Amp)**
When a group is below the minimum threshold, hide that group's data AND the next-smallest group's data. Prevents inference attacks in small teams ("if I know 4 of 5 people in engineering, I can deduce the 5th"). In Brio: fixed minimum-N (assumption: 5), non-configurable by employer. Source: support.cultureamp.com/en/articles/7048386-confidentiality-protections-in-reporting

**2. Privacy Visible in the Product UI (Apple Health)**
Privacy is a visible UI element, not a policy document. In Brio: (a) persistent label on owner dashboard stating what they cannot see; (b) one-sentence pre-check-in disclosure before every employee check-in; (c) operator setup screen showing the exact owner view as part of setup. Source: apple.com/privacy/features

**3. Business Model as Privacy Architecture (Oura Ring)**
Subscription-only revenue removes the financial incentive to monetize individual data. State this explicitly: "Brio earns revenue from subscriptions only. We have no financial reason to sell or analyze individual employee data - and architecturally, we cannot." Source: ouraring.com/blog/health-data-privacy

### 1 Mechanism That Will Not Work

**Opt-out privacy consent (Typeform / Limeade pattern).** Employees in an employer-funded product are not in a free consent context. Opt-out mechanisms in this power dynamic are not meaningful consent. Beyond ethics: employees who suspect monitoring respond dishonestly, which corrupts the aggregate signal the owner is paying for. The product fails. Privacy must be always-on, non-configurable, and opt-in for sharing.

---

## 6. UX Patterns

### Primary Pattern: Guided Program Flow + Pulse Loop (Hybrid)

**How it works:** The operator launches curated programs from a library (Guided Program Flow). Simultaneously, a lightweight weekly check-in runs automatically and aggregates into a rolling team score (Pulse Loop). The operator sees both the program status and the pulse signal in one dashboard. The owner sees only the pulse signal.

**Why chosen:**

- Ties to operator JTBD J1 (structured programs without HR knowledge) and J3 (early warning before crisis). One pattern would address only one job.
- Fills the competitor gap: Wellable has programs but no aggregate pulse. Officevibe has pulse but no programs. The combination is unclaimed.
- One data flow serves both stakeholders: employee check-ins feed program feedback AND owner pulse from the same participation event.

Source: Phase 3 competitive gap analysis, validated product model v2.

**Alternative under condition X:** Benefit Marketplace (Pattern 3) as a Phase 2 layer, if operator NPS on guided program selection falls below 40 after 90 days - suggesting operators in specific verticals want employee autonomy over program choice rather than a curated recommendation.

**Pattern that does NOT fit:** Gamified Challenge with Leaderboards (Pattern 4). Leaderboards require individual ranking - architecturally incompatible with the aggregate-only privacy model. Also creates participation inequality (already-healthy employees dominate). Could be reintroduced as a team-aggregate mechanic (no individual ranking) in a later phase.

---

## 7. Conclusions

### Gaps Table

| Gap | Evidence | Source | Severity |
|-----|----------|--------|----------|
| No self-serve, no-demo-required wellbeing tool for 10-50 employees | Nivati, Woliba, Wellable all require demos or account managers | Phase 3: nivati.com/sign-up, woliba.io/pricing | Critical |
| No product makes the privacy architecture visible on the product page | Wellable, Woliba state privacy claims without mechanism. Only Headspace Core and Officevibe state specifics. | Phase 3, Phase 4 | Critical |
| No product explicitly designs for the absence of an HR team | All competitors assume an HR sponsor in their language and onboarding | Phase 3 competitor group analysis | Critical |
| Officevibe's repricing abandoned the 10-200 employee segment | Workleap repriced from $5/user/month to $4,999/year flat | Phase 3: workleap.com/pricing | High (opportunity) |
| The aggregate team signal is always a reporting add-on, never the core value | Pulse/survey features are secondary to program or content delivery in all competitors | Phase 3 comparison matrix | High |
| No competitor addresses the small-group inference problem publicly | Culture Amp's 3-tier protection is the only documented solution; not used by any direct competitor | Phase 4: support.cultureamp.com/en/articles/7048386 | Medium |

### 6 Hypotheses

| # | If | Then | Because |
|---|----|----|---------|
| H1 | Brio shows the exact privacy mechanism (minimum-N threshold, what the owner cannot see) on the product page before signup | Employee participation rates will exceed 65% at steady state | Employees who have certainty about privacy limits before their first interaction are more likely to respond honestly. Culture Amp's pre-survey disclosure confirms this. Source: support.cultureamp.com/en/articles/7048386 |
| H2 | Brio offers transparent pricing starting at $5/seat/month with no demo required | The operator will convert without a sales call in over 50% of trial-to-paid paths | Headspace Core's self-serve small business page and Gusto's no-contact conversion model both prove this audience converts without human sales touch when pricing is clear. Source: organizations.headspace.com/small-business, gusto.com/pricing |
| H3 | The operator's aha moment is seeing the first aggregated check-in score alongside a plain-language interpretation | 90-day retention will exceed 65% | Officevibe's AI-recommended-action model shows that operators who understand what to do next stay engaged. Seeing a score without context produces no action and no habit. Source: workleap.com/officevibe |
| H4 | Gating the owner dashboard (aggregate view) behind the paid tier drives free-to-paid conversion better than any other feature gate | Free-to-paid conversion will reach 8-12% within 60 days of activation | The owner wanting proof the investment is working is the renewal driver (confirmed in JTBD analysis). The operator upgrades to give the owner access. Source: validated product model v2 |
| H5 | Making the business model's subscription-only nature an explicit part of the privacy story | Employee trust and participation rates will be measurably higher than a control group that sees only a privacy policy link | Oura's "subscription model = no data monetization incentive" argument is the structural version of this claim. It works because it explains the incentive, not just the promise. Source: ouraring.com/blog/health-data-privacy |
| H6 | A non-configurable minimum-N threshold (assumption: 5 respondents) applied to all aggregate views | Operators and owners accept the data limitation without significant churn | Culture Amp's fixed-threshold model is accepted by enterprise buyers. The number is not the issue - the clarity and consistency are. The risk is a 5-person company that cannot see any data at all; this must be addressed in the free tier design. Source: support.cultureamp.com/en/articles/7048386 |

### Open Questions Table

| # | Question | Why it matters | Where to answer |
|---|----------|----------------|----------------|
| Q1 | What is the legally defensible minimum-N threshold for aggregate display in the US market? Is 5 correct? | The wrong threshold either exposes individuals (too low) or makes the product useless for very small teams (too high) | Legal counsel before launch. Note: Culture Amp uses 5 as default (configurable); Wellable uses 10 for health assessment data; Officevibe uses 3 for scores. |
| Q2 | Does the operator discover Brio, or does the owner? | Determines primary acquisition channel and landing page message | User research or paid acquisition test: run operator-targeted and owner-targeted ads to the same page, measure which converts. |
| Q3 | What is the right cadence for the employee check-in - weekly, biweekly, or monthly? | Cadence determines habit formation and data freshness | A/B test in beta: 3 cohorts at different cadences, measure participation rate and retention at 90 days |
| Q4 | Does a 10-employee free tier create meaningful conversion, or does it enable permanent free usage that never upgrades? | Defines whether the free tier is an acquisition channel or a churn pool | Instrument the free tier carefully: track what % of 10-employee companies actually have fewer than 10 employees at signup vs. are gaming the limit. |
| Q5 | How does Brio handle a company that grows past the anonymity threshold during a check-in cycle? | Edge case: a 4-person team answers; a 5th person is hired mid-cycle. Do historic responses become visible? | Architecture decision before launch: rolling N or snapshot N. |
| Q6 | What regulatory review is needed before launch in the US for wellness check-in data? | ADA, GINA, and HIPAA-adjacent rules may apply. Brio does not collect clinical data but emotional/mood check-ins are a grey area. | Legal counsel. Do not launch without a written opinion on the check-in question format. |
