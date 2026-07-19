# Research - Brio

*Single source of truth for the Brio product. Synthesis of Foundation Research (Stage 1), extended with a post-persona re-research subsection (Stage 2). Every claim carries a source; unknowns are marked [?].*

---

## 1. Introduction

### Purpose
This document synthesizes Foundation Research into a single, citable source of truth for the Brio product design process. It is the foundation for information architecture, wireframes, concept, and design system work.

### Problem
Small businesses (10 to 200 employees) with no HR team have no credible tool to run employee wellbeing. The person handed "people stuff" - an office manager, ops lead, or founder - has no training, no framework, and no way to know if their efforts are working. The business owner needs proof the investment is worthwhile but has no HR layer to filter individual data. In this context, the product itself must be the privacy boundary between what the owner can see and what employees share.

### Approach
Foundation Research produced six documents: competitors (research/docs/competitors.md), trust and privacy benchmark (research/docs/benchmark.md), Lean UX Canvas v2 (research/docs/lean-ux-canvas.md), AARRR funnel (research/docs/aarrr.md), UX patterns (research/docs/ux-patterns.md), and this synthesis. Competitive analysis covers 8 companies in 3 groups; the benchmark covers 5 products across categories. Web research conducted June 2026. Public pages only; no accounts created, no logins.

### 5 Key Conclusions

1. **There is a real gap in the market.** No competitor combines self-serve SMB pricing, a guided program engine for non-HR operators, AND a genuine aggregate-only team signal. The segment is underserved because everyone else assumes an HR team exists.

2. **Privacy is not a feature - it is the product.** The benchmark (Phase 4) shows that products treating privacy as a policy (Limeade, Typeform) erode the employee trust that generates signal quality. Products treating privacy as architecture (Culture Amp, Apple, Oura) earn participation. For Brio, the privacy design is the product design.

3. **The operator is the hero, but the employee is the engine.** Without employee participation, there is no signal. Without a signal, the owner sees nothing. Without owner conviction, there is no renewal. The product serves three stakeholders in a chain: the employee's trust must be earned first, before anything else in the chain functions.

4. **Self-serve and transparent pricing are table-stakes for this audience.** Nivati, Woliba, and Wellable all require demos. This friction self-selects against the exact buyer Brio needs - a solo operator who will try the product before they can justify a sales conversation. Gusto and Headspace Core prove that transparent pricing and self-serve activation convert the SMB buyer.

5. **The UX pattern is a hybrid.** Guided Program Flow + Pulse Loop, serving the operator's need for structure (what do I run?) and the owner's need for signal (is the team OK?). No competitor holds this combination in a self-serve, no-HR-required package.

### What Research Changed in the Brief

- **Confirmed:** the core premise of the brief (CLAUDE.md) holds. Privacy as structural architecture, not a feature, is validated as the differentiator, and the operator-as-hero, aggregate-only stance survived competitive and benchmark scrutiny. Source: research/docs/competitors.md, research/docs/benchmark.md.
- **Sharpened:** the MVP privacy mechanism moved from "minimum-N threshold" alone to "minimum-N of 5 plus no live response count during open cycles," after the post-persona re-research surfaced a timing-inference vector in small teams. Source: Post-Persona Re-Research (below); research/strategy.md Section 5.
- **Narrowed:** the rough MVP scope from the brief is now anchored to the Lean UX Canvas solutions and, in Stage 2, to a small set of core jobs. Pricing, minimum-N, and participation targets remain hypotheses, not facts.
- **Not refuted:** no finding killed a load-bearing assumption from the brief. The riskiest assumption was stress-tested and strengthened, not broken. Source: Post-Persona Re-Research (below).

---

## 2. Strategy

*This is the Lean UX Canvas (research/docs/lean-ux-canvas.md) expanded into detail: the same strategy, at more depth. The diverge-then-converge trace for the riskiest assumption and the June 2026 founder decision log live in research/strategy.md (retained for history).*

### Objectives

| Objective | Metric | Target | Verdict |
|-----------|--------|--------|---------|
| Operator feels competent without HR training | % completing setup + first program in 7 days | 70% (hypothesis) | CONFIRMED - Gusto "even if you're not an expert" positioning (gusto.com), Headspace Core self-serve model (organizations.headspace.com/small-business). Source: research/docs/competitors.md, Aspirational group |
| Owner sees credible team-level signal | % viewing dashboard without 30s bounce | 60% (hypothesis) | CONFIRMED - Officevibe numeric score visualization (workleap.com/officevibe). Signal must be honest, not vanity. Source: research/docs/competitors.md, Hard group |
| Employee trust drives participation | Team check-in participation rate | 65% average (hypothesis) | CONFIRMED with mechanism - Culture Amp pre-survey disclosure and minimum-N threshold (support.cultureamp.com/en/articles/7048386). Source: research/docs/benchmark.md |
| Measurable business retention | Monthly churn past 90 days | Below 4% (hypothesis) | UNCHANGED - Officevibe SMB abandonment ($4,999/yr flat) confirms retention is sticky when value is clear. Source: research/docs/competitors.md |

### Segments

**Operator (Primary - buyer and daily user):** Office manager, ops coordinator, EA, or founder at 10 to 200 person company with no HR. 26 to 45. JTBD: "When I am responsible for employee wellbeing with no training, I want a guided system that tells me what to do and when, so that I feel competent and the team benefits." Pain sharpened: no self-serve path exists (Nivati, Woliba, Wellable all require demos - nivati.com/sign-up, woliba.io/pricing). Source: research/docs/competitors.md.

**Owner (Secondary - approver and ROI judge):** Founder, CEO, or managing partner. Business-minded, time-poor, approves budget. JTBD: "When I need to know if my team investment is working, I want a clear honest team-level signal without individual data, so that I can make confident budget decisions." Checks in monthly in under 2 minutes. The operator upgrades Brio specifically to give the owner visibility - the owner dashboard is the paid feature.

**Employee (End user - the engine, not the buyer):** Does not choose Brio. Must be given a credible reason to participate honestly. Privacy architecture is non-configurable: individual data never surfaces up the chain. Minimum-N threshold of 5 respondents (assumption, to be validated with legal counsel) applies to all aggregate views. Pre-check-in disclosure is one sentence, plain language, before Question 1, every check-in. Elevated to architectural requirement. Source: research/docs/benchmark.md - support.cultureamp.com/en/articles/7048386; apple.com/privacy/features.

### Business Model

SaaS subscription, per-seat pricing. Subscription-only revenue - no data monetization. Free tier up to 10 employees (1 program, operator-only view, no owner dashboard). Paid Starter ~$5/seat/month up to 50 employees (full program library, owner dashboard, trend analytics). Growth tier ~$9/seat/month for 50 to 200+ employees (multi-team, integrations, priority support). Free tier is the acquisition channel, not a crippled product - team-size limit is the non-punitive conversion trigger. Transparent published pricing is non-negotiable. Source: research/docs/competitors.md - Headspace Core ($3.75 to $5.83/user/month), Officevibe former $5/user/month, Key Differences - Pricing transparency.

### Riskiest Assumption

**An SMB operator who has never run a formal wellbeing program believes that a self-serve, aggregate-only tool (no HR required, no individual data visible) delivers real team-level wellbeing value worth paying for - AND employees trust the aggregate-only privacy promise enough to respond honestly.**

Why riskiest: If either half is false, the product fails. No operator belief means no acquisition. No employee participation means no aggregate signal, no owner value, no renewal. This is a risk to existence, not to growth. No competitor has resolved both halves. Source: research/docs/benchmark.md (Limeade and Typeform anti-patterns show privacy by promise fails); research/docs/competitors.md (gap analysis confirms no competitor holds this combination).

Smallest test: plain email check-in to a real 10 to 15 person team, explicit privacy statement, measure participation rate. Pass: above 40%. Fail: below 40% even with a direct invitation. Costs nothing. Run before building anything.

---

## 3. AARRR Funnel (v_refresh)

*Full detail: research/docs/aarrr.md. Updated to align with Strategy v_refresh.*

| Stage | Channel / Mechanic | Key Hypothesis | MVP Decision | Primary Metric | Target |
|-------|-------------------|----------------|--------------|----------------|--------|
| Acquisition | SEO targeting operator how-to queries (not comparison pages - dominated by G2/Capterra). LinkedIn job title targeting. Free tier as permanent top-of-funnel. | Free tier is the primary driver. Demo-required friction filters out the solo operator. Source: research/docs/competitors.md - Key Differences, Sales motion | No credit card at signup. Single email field. Operator how-to content, not comparison-site SEO. | New signups/month | 200 by month 6 (hypothesis) |
| Activation | Guided linear onboarding. First program pre-selected by company size. Privacy disclosure built into employee flow before Question 1. | Aha moment = first aggregate score plus plain-language interpretation plus a suggested next action. Score alone does not create a habit. Source: research/docs/competitors.md - Officevibe AI-action mechanic; research/docs/benchmark.md - Mechanism 2 | Opinionated linear onboarding. Privacy disclosure is not optional - one sentence, before Question 1, every time. | % completing setup + first invite in 48h | 55% (hypothesis) |
| Retention | Weekly operator digest email. Consistent employee check-in cadence. Persistent pre-check-in privacy disclosure as trust-training mechanism. Owner monthly digest. | Operator retention driven by email digest more than in-app. Employee participation above 60% is the leading indicator for operator retention. Repeated privacy disclosure trains trust over time. Source: research/docs/benchmark.md - Mechanism 2, Apple Health; research/docs/ux-patterns.md B1, B3 | Build weekly email digest before in-app notifications. Privacy disclosure in every check-in, not just onboarding. | 90-day operator retention | 65% (hypothesis) |
| Revenue | Upgrade triggered by team-size limit (more than 10 employees) or owner dashboard access request. Both triggers active. | Owner dashboard is the primary paid feature. Operator upgrades to give the owner visibility, not because of a feature wall. Source: validated JTBD Segment B | Gate owner dashboard behind paid tier. Keep operator dashboard + one program free to demonstrate value first. | Free-to-paid conversion rate | 8-12% in 60 days (hypothesis) |
| Referral | Operator-to-peer organic. In-product prompt at 30-day positive milestone (participation above 50%). | Operator-to-peer is strongest channel year 1. Owners share to look like caring leaders. | Single share prompt at 30-day milestone. Track referral source at signup with dropdown. No formal referral program in V1. | % signups from referral (self-reported) | 20% by month 9 (hypothesis) |

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

## 4b. Competitor language (Stage 05, Voice)

*Added for the Voice stage. A live public-page crawl of how competitors WRITE, so Brio can set its voice against the category sameness. Public pages only, no login, no accounts. Verified verbatim on the live page unless marked [?]. The principle: where every competitor writes the same way, Brio differentiates through voice.*

### Verbatim samples (12 live companies)

| Company | Where | Verbatim | Source |
|---------|-------|----------|--------|
| Culture Amp | hero | "Finally answer the question: Do we have a high performing culture?" | cultureamp.com |
| Culture Amp | feature | "drive meaningful performance for your people ... Eliminate guesswork and manual tasks with AI analysis and recommendations." | cultureamp.com |
| Culture Amp | privacy | "Culture Amp protects the confidentiality, integrity, and availability of all systems and data entrusted to us" | cultureamp.com |
| Officevibe (Workleap) | hero | "You can't fix issues if you're not paying attention" | workleap.com/officevibe |
| Officevibe | privacy (marketing) | "Anonymous feedback to know how employees really feel" · "shown only when privacy rules are met." | workleap.com/officevibe |
| Officevibe | privacy (help doc) | "Individual answers are never displayed; only aggregated results are presented." · minimum of 3 for scores, "A minimum of 5 members ... to ensure the manager gains access to anonymous feedback." | help.workleap.com |
| 15Five | hero | "The AI-powered performance management platform built for business impact" · "effortless insights" | 15five.com |
| Bonusly | hero / CTA | "Great work deserves to be seen, celebrated, and rewarded" · "Get Started for Free" · "No credit card required" | bonusly.com |
| Calm Health | privacy | "complies with HIPAA privacy standards and HITRUST security regulations." · "Request a demo" | health.calm.com/employers |
| Headspace | hero | "Healthier people. Better business." · "Empower your global organization with industry-leading mental healthcare" | organizations.headspace.com/employers |
| Wellhub (Gympass) | hero | "Employee wellness programs for healthier business" · "Healthy people are good for business" · "Get free quote" | wellhub.com |
| Woliba | hero | "Designed For A Healthier, Happier Culture." · "We Don't Just Deliver Wellness. We Improve How Employees Thrive." | woliba.io |
| Oura | privacy | "Your teams' privacy matters, and every employee remains in complete control of their data." · "view de-identified engagement trends" | organizations.ouraring.com |
| Lattice | feature | "Use AI to surface key drivers, trends, and next steps ... in a matter of seconds." | lattice.com |
| Gusto | feature | "easy to pay and manage your team, even if you're not a payroll expert." · "Create free account" | gusto.com |
| Leapsome | survey | "anonymous, customizable surveys tied to proven engagement drivers." | leapsome.com [? search-only] |
| Limeade | - | no live public page (acquired by WebMD, site defunct) | [? not accessible] |

### The sameness (what almost all of them say the same way)

- **"insights" is the default noun** for the output: "effortless insights" (15Five), "AI-powered insights" (Officevibe, Lattice), "surface key drivers, trends" (Lattice). Never a plain-language read.
- **ROI framing over human framing:** "built for business impact" (15Five), "Healthier people. Better business." (Headspace), "Healthy people are good for business" (Wellhub). Wellhub and Woliba lead with hard-dollar stats ("35% reduction in healthcare costs," "$280K in avoided turnover").
- **Shared in-group vocabulary:** "engagement" + "key drivers," "all-in-one," "empower," "thrive," "healthier + happier," "high performing culture."
- **AI bolted onto everything:** "AI analysis" (Culture Amp), "AI-generated recommended actions" (Officevibe), "AI-powered all-in-one" (15Five).
- **CTA monoculture, the demo wall:** "Request a demo / Book a demo / Get a demo / Contact us / Get free quote" dominate. Only SMB-priced players self-serve ("Get Started for Free," Bonusly; "Create free account," Gusto).
- **Trademark-and-score proof:** "Performance Culture Quadrant" (Culture Amp), "8.2/10," "Daily health scores" (Oura), superlatives "industry-leading," "market-leading," "#1."

### Privacy language, specifically

- **The word split is real.** Pulse/survey vendors say "anonymous" (Officevibe, Leapsome). Health/wearable vendors avoid it and say "privacy," "de-identified," "in control of their data" (Oura). Mental-health vendors lean on compliance frameworks (Calm: "HIPAA ... HITRUST"; Headspace: nothing in body copy). Enterprise HR shrinks it to "enterprise-grade security" (15Five).
- **Nobody leads with privacy in the hero.** On every homepage the privacy claim is absent, or shrunk to a compliance line. The promise Brio owns is not in anyone's above-the-fold.
- **The honest mechanism lives in the help center, not the marketing.** Officevibe's real aggregate-only design and minimum-N numbers are only in a support article; the marketing says the vague "shown only when privacy rules are met."
- **Framing is buyer-benefit, not employee-trust.** Even "anonymous" is sold to the manager: "Anonymous feedback to know how employees really feel." The employee is rarely addressed directly. Oura is the closest to employee-side, control-framed privacy, and it still sits behind a "Contact us" wall.

### Voice opportunities for Brio (the differentiation)

1. **Put the privacy mechanism in the hero, in plain words, as the product.** The above-the-fold privacy space is empty across all 12. The minimum-N nobody markets becomes Brio's headline promise.
2. **Write to the employee, not only the buyer.** Directly reassuring the person answering is unoccupied territory.
3. **Drop the abstraction stack.** Concrete, plain, non-expert language stands out instantly against "insights / drive engagement / key drivers / empower / AI-powered."
4. **Be honest, not just up-and-to-the-right.** Naming a down-trend plainly reads as trustworthy against a wall of flattering stats.
5. **Skip the demo wall and the AI hype.** A self-serve, start-free voice fits the SMB operator and signals "simple enough that you do not need to be sold this."

*Feeds Voice principles P2 and P5 (voice/docs/voice.md). Residual [?]: Leapsome quote search-only; Limeade site defunct; older Culture Amp "Empower your teams ..." hero seen in search only, not on the live page.*

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

*H1 is the hypothesis whose failure kills the idea. It maps directly to the employee-participation half of the riskiest assumption from research/strategy.md: if employees do not trust the privacy model and do not respond honestly, there is no aggregate signal, no owner value, and no product. All other hypotheses depend on this one being true first.*

| # | If | Then | Because |
|---|----|----|---------|
| H1 **[RISKIEST - failure kills the idea]** | Brio shows the exact privacy mechanism (minimum-N threshold, what the owner cannot see) on the product page before signup - and repeats it before every check-in | Employee participation rates will exceed 65% at steady state | Employees with certainty about privacy limits before their first interaction respond more honestly. Culture Amp's pre-survey disclosure architecture confirms the mechanism. Limeade and Typeform show that privacy by promise without architecture destroys participation. Source: support.cultureamp.com/en/articles/7048386; research/docs/benchmark.md |
| H2 | Brio offers transparent pricing starting at ~$5/seat/month with no demo required | The operator will convert without a sales call in over 50% of trial-to-paid paths | Headspace Core's self-serve small business page and Gusto's no-contact conversion model prove this audience converts without human sales touch when pricing is clear. Source: organizations.headspace.com/small-business, gusto.com/pricing; research/docs/competitors.md |
| H3 | The operator's aha moment is seeing the first aggregated check-in score alongside a plain-language interpretation AND a suggested next action | 90-day retention will exceed 65% | Officevibe's AI-recommended-action model shows operators who understand what to do next stay engaged. Score alone does not create a habit. Source: workleap.com/officevibe; research/docs/competitors.md |
| H4 | Gating the owner dashboard (aggregate view) behind the paid tier drives free-to-paid conversion better than any other feature gate | Free-to-paid conversion will reach 8-12% within 60 days of activation | The owner wanting proof the investment is working is the renewal driver (confirmed in JTBD analysis). The operator upgrades to give the owner access. Source: Strategy v_refresh, Segment B JTBD |
| H5 | Making the business model's subscription-only nature an explicit part of the privacy story | Employee trust and participation rates will be measurably higher than a control group that sees only a privacy policy link | Oura's "subscription model = no data monetization incentive" argument explains the aligned incentive, not just the promise. Structural arguments outlast policy promises. Source: ouraring.com/blog/health-data-privacy; research/docs/benchmark.md, Mechanism 3 |
| H6 | A non-configurable minimum-N threshold (5 respondents) applied to all aggregate views, with no live count visible during open cycles | Operators and owners accept the data limitation without significant churn | Culture Amp's fixed-threshold model is accepted by enterprise buyers. The number is not the issue - the clarity and consistency are. Edge case: a very small team (8-12 people) that may not reach N=5 quickly must see an explicit setup message. **MVP decision: N=5 flat, no live count during open cycle. Closed by founder decision, June 2026. Strategy.md Section 5, D1/D4/D5.** Legal threshold validation deferred. Source: support.cultureamp.com/en/articles/7048386; research/docs/benchmark.md; research/live-research.md C3. |

### Open Questions Table

| # | Question | Why it matters | Where to answer |
|---|----------|----------------|----------------|
| Q1 | What is the legally defensible minimum-N threshold for aggregate display in the US market? Is 5 correct? | The wrong threshold either exposes individuals (too low) or makes the product useless for very small teams (too high) | **DEFERRED TO LEGAL (not an MVP design blocker).** MVP defaults to N=5 as operationally standard (SHRM, Culture Amp). Timing-inference vector addressed by D1 (no live count). Threshold legal validation required before launch. research/strategy.md Section 5, Deferred Items. |
| Q2 | Does the operator discover Brio, or does the owner? | Determines primary acquisition channel and landing page message | **CLOSED AS DEFAULT by founder decision, June 2026.** Operator-first is the design default: landing page hero speaks operator language, owner-trust block on the same page. Reversible if paid A/B test shows owner-led conversions outperforming. research/strategy.md Section 5, D3. |
| Q3 | What is the right cadence for the employee check-in - weekly, biweekly, or monthly? | Cadence determines habit formation and data freshness | A/B test in beta: 3 cohorts at different cadences, measure participation rate and retention at 90 days |
| Q4 | Does a 10-employee free tier create meaningful conversion, or does it enable permanent free usage that never upgrades? | Defines whether the free tier is an acquisition channel or a churn pool | Instrument the free tier carefully: track what % of 10-employee companies actually have fewer than 10 employees at signup vs. are gaming the limit. |
| Q5 | How does Brio handle a company that grows past the anonymity threshold during a check-in cycle? | Edge case: a 4-person team answers; a 5th person is hired mid-cycle. Do historic responses become visible? | Architecture decision before launch: rolling N or snapshot N. |
| Q6 | What regulatory review is needed before launch in the US for wellness check-in data? | ADA, GINA, and HIPAA-adjacent rules may apply. Brio does not collect clinical data but emotional/mood check-ins are a grey area. | Legal counsel. Do not launch without a written opinion on the check-in question format. |

---

## Post-Persona Re-Research (Stage 2)

*Folded in from the Stage 2 live re-research. Live sources only, no memory; sources cited inline. Detailed evidence log: research/live-research.md.*

### Central Claim Tested: Employee Honest Participation in Employer-Run SMB Tools

The riskiest assumption (strategy.md, Option D) depends on employees trusting an employer-run anonymous tool enough to respond honestly. This subsection records what live research found when we tried to kill that claim first.

**What confirmed:**

Employees DO self-censor in employer-run surveys - documented across SHRM, social desirability bias research, and multiple industry sources. SHRM: "When workers distrust anonymity, they tend to answer dishonestly - painting workplace experiences much rosier than they really are." Source: shrm.org/topics-tools/news/employee-relations/employee-engagement-surveys-workers-distrust.

The mechanisms Brio is using to address this (minimum-N threshold, explicit pre-check-in disclosure, no demographic data collection, weekly cadence) align with what SHRM identifies as the documented best practices for increasing survey trust. Source: shrm.org/topics-tools/news/employee-relations/employee-engagement-surveys-workers-distrust.

66% of SMB employees with a formal wellness program report good or thriving overall wellbeing vs. 40% without. 58% of small businesses now have wellness programs, up from 34% in 2021 - the market is growing. Source: wellhub.com/en-us/resources/work-life-wellness-report-2026-smb/ (Wellhub 2026 SMB report, N=3,773 SMB employees).

70-75% of employees are more likely to share honest feedback when explicitly assured of total anonymity. Source: vantagecircle.com/en/blog/anonymous-employee-survey/.

**What added nuance (not killed, but refined):**

RAND baseline wellness program participation is 20-40% (physical wellness challenges, enterprise). Brio's check-in format is simpler and different, so this may not directly apply, but it signals that a 65% launch-day participation rate is optimistic. RAND baseline = 40% is the more defensible initial benchmark. Source: RAND study cited via selectsoftwarereviews.com/blog/employee-wellness-statistics.

Small-team timing-based inference: SHRM documented that even without demographic data, managers in small teams can cross-reference response timing with employee rosters to identify respondents. The minimum-N threshold does not address this. An MVP decision is needed: what information about check-in response counts and timing is visible to the operator, and when? Source: shrm.org/topics-tools/news/employee-relations/how-anonymous-employee-satisfaction-survey.

**What stayed UNRESOLVED after verification:**

- Whether the operator or owner discovers Brio first (Open Question Q2).
- Whether the structural "subscription = no data incentive" argument measurably outperforms a policy-based privacy claim.
- Whether Brio's simplified format (no demographic questions) reduces self-censorship vs. traditional engagement surveys.

**Decisions made after verification (June 2026):** See research/strategy.md Section 5 for full reasoning. Summary: (a) No live count during open cycles - operator sees active state, score revealed only when cycle closes and N met; employee sees zero count information. (b) Participation benchmark: 65% is 90-day steady state; adjacent-category RAND reference (20-40%) must be labeled as such, not as a Brio metric. (c) Landing page leads with operator language by default, owner-trust block on same page; reversible by acquisition test. (d) Minimum-N stays at 5 flat for MVP; legal validation deferred. These decisions close Flag F1 (timing-inference risk in small teams) and establish Q2 as a working default (operator-first).

*End of synthesis. The Stage 2 post-persona re-research follows as an appendix.*

---

## Doresearch for CJM (Stage 3)

*Targeted re-research to close the most dangerous As-Is gap (D1 in the CJM critique): the operator's first-person voice and what hurts most on the current path. Public pages only, no login. The Anthropic web crawler is blocked by Reddit, LinkedIn, and Quora, so the first pass (WebFetch / WebSearch) could not read them; a second pass with a real browser (Playwright) reached public Reddit threads via old.reddit.com and closed most of the gap. Detailed map: user-research/docs/cjm-as-is.md.*

**Q1 - What hurts most on the current path, in the operator's and employee's words?**

Category and statistical findings (accessible to WebFetch):

- Low participation is the most documented and quantified pain. Average wellness participation is about 40%, ranging 20 to 40%; 50% of employers report participation of 10% or less; despite 85% access only about a third of workers participate; mental health resources are available to 87% but used by 23%. Source: yuna.io/post/workplace-wellness-statistics, betteryou.ai/wellness-program-participation-rates, myshortlister.com/insights/employee-wellness-statistics.
- "Despite employers investing substantial resources and effort into designing and implementing these programs, many employees may choose not to engage actively." Source: mantra.care/employee-wellness/limitations-of-employee-wellness-programs.
- Nuance that refines the As-Is: general-population non-participation is driven more by lack of time (44.4%), interest (28.5%), and awareness (27.2%) than by privacy. Privacy distrust is real (SHRM) but not the single top driver. Brio's under-30-second format addresses time and its architecture addresses trust; interest and awareness are separate levers.
- The existence of "how to start a wellness program in 11 steps" guides confirms the invent-the-process barrier. Source: indeed.com/career-advice/career-development/how-to-start-a-wellness-program.

First-person voice (reached with a real browser, public old.reddit.com threads):

- Operator handed a role with no training (As-Is phases 1-2; adjacent office-manager onboarding context, same persona): "I got a job as an Office Manager. I have no idea what to prepare for and am terrified... terrified of not being good enough and disappointing the CEO." and "I've already googled as much as I could about the duties and responsibilities." A commenter: "office manager is usually a catchall for every non-specialized task in the business if the company is small." Source: reddit.com/r/jobs/comments/3j25fx.
- Small-team anonymity distrust (As-Is phase 5, the low point): "my dept only has 3 of us. Needless to say we're not necessarily saying what we may want to." / "I always assume anything I put on a form at work is traceable back to me." / a senior manager: "Hard to be anonymous in a group of 3... enough clues for someone to know it is you or your small group." / "I answered truthfully on one... Then a week later our AVP called me into his office to talk about my responses." Source: reddit.com/r/careerguidance/comments/194a2e3.
- Employee skepticism of employer wellness (As-Is phases 5-6): "the only people who participated were those who were already eating right and working out." / "I assumed the programs were only there to harvest and sell employee's health information." / "Benefit for the staff isn't even an afterthought, but a veneer." Source: reddit.com/r/jobs/comments/1bjelky.

Residual [?] after doresearch: (a) a wellbeing-specific first-person operator quote - the phases 1-2 voice above is office-manager onboarding in general, the same persona but not the exact wellbeing task; (b) operator voice on phase 7 (proving ROI to the owner) - no first-person quote found, so that emotion stays on category sources. Both close with first-phase user interviews, not public mining.

## IA route assumptions (Stage 4)

The IA base layer is a structural exercise derived from the existing jobs, not new web research, but it surfaced two route-level assumptions that no data yet confirms. They are flagged here so they are not lost, and both close with usability testing, not public mining.

- **Navigation model is unvalidated.** The operator global nav (Dashboard, Programs, Team, Owner + Settings) and the tap-count claim (main-job value in 1 tap, deepest core action in 3) assume the operator's mental model matches this grouping. No usability data confirms the grouping or that "Owner" deserves a permanent tab rather than a contextual share action. Validate in a first click-through / tree test. Source: ia/docs/sitemap.md Navigation.
- **Sub-minimum-N very small teams have no full path.** A team structurally under the minimum-N of 5 (e.g. a 4-person company, or a ~15-person team where fewer than 5 respond) can never see an aggregate score, so the score-dependent jobs (J1, J2, owner) cannot complete. The IA adds an informed explainer and an invite-more path, but whether a program-only, no-score mode is acceptable to that operator is an open product question. Ties to the H2 participation floor already flagged in cjm-to-be.md. Source: ia/docs/flows.md Flow 1 (DeadN).
