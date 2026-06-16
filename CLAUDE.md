# Brio - Project Brief

## What it is

Brio is a responsive web SaaS that gives a small business with no HR team a simple way to run real employee wellbeing. It is operated by whoever got handed "people stuff" - an office manager, ops lead, EA, or the founder - and gives the business owner honest proof it is working at the team level, without ever surveilling any individual.

**Platform:** Responsive web. The operator dashboard is desktop-first. The employee experience is mobile-friendly. A native app is a later decision, out of scope for now.

**Core differentiator:** The product is the privacy boundary. In an SMB there is no HR layer between the boss and personal data. Brio is designed so the owner sees only aggregate, team-level signals - never named individuals. This is the make-or-break design constraint.

---

## Jobs to be Done

### Candidate jobs scored

| # | Job | Frequency | Intensity | WTP | Score | Role |
|---|-----|-----------|-----------|-----|-------|------|
| J1 | Run structured wellbeing programs without HR knowledge | High | High | High | 9/9 | Operator |
| J2 | Prove to the owner that people investment is paying off | Medium | High | High | 8/9 | Operator + Owner |
| J3 | Know if the team is struggling before it becomes a crisis | Medium | High | High | 8/9 | Owner |
| J4 | Give employees a low-friction way to signal how they feel | High | Medium | Medium | 7/9 | Operator |
| J5 | Stay compliant and not accidentally expose employee data | Low | High | High | 7/9 | Owner |
| J6 | Feel like a competent "people person" without a title or training | High | High | Medium | 7/9 | Operator |

### Primary job

**J1 - Run structured wellbeing programs without HR knowledge**
"When I am handed responsibility for employee wellbeing with no training or title, I want a guided system that tells me what to run and when, so that I can feel competent and actually improve how the team feels at work."

### Secondary jobs

**J2 - Prove the investment is paying off**
"When the owner asks me whether our wellbeing efforts are working, I want a clear, honest team-level signal I can show them, so that the program gets continued funding and I feel confident in my work."

**J3 - Know if the team is struggling before it becomes a crisis**
"When I am responsible for a team of people I care about, I want an early warning that something is off at the team level, so that I can act before a good person walks out the door."

---

## Target Audience

### Operator (hero user - primary)

The person who got handed people work with no title or training. Typically an office manager, operations coordinator, executive assistant, or a founder in a company small enough that HR does not exist yet.

- **Role:** Day-to-day runner of wellbeing programs. The daily driver of the product.
- **Confidence level:** Low to medium. They know the people but not the methodology. They want to do right by the team and feel uncertain they are doing it well.
- **Primary driver:** Competence and clarity. They want to know what to do next, that they did it right, and that it mattered.
- **Company size:** 10 to 200 employees, no dedicated HR.

### Owner (second stakeholder)

The founder or CEO who cares about the team and is paying for the tool. Not a daily driver - they check in occasionally for a high-level read.

- **Role:** Approves spend, wants proof of value at the business level.
- **Confidence level:** High on business, zero appetite for HR process detail. They want a number, a trend, and reassurance.
- **Primary driver:** ROI and risk. Is the investment working? Is anyone about to leave?

### Employee (third party - privacy is a hard constraint)

Participates in programs and check-ins. Their individual responses must never be surfaced to the operator or owner. They are users of the product but not buyers.

- **Role:** Participant. Their trust determines data quality.
- **Privacy stance:** Aggregate only. No named individual data ever surfaces up the chain. This is a product design requirement, not a preference.

---

## MVP Feature Scope

### Programs and habits engine

- Curated wellbeing program library (mental health, physical, financial, social) - operator picks, system runs
- Light challenges (team-level, opt-in, non-competitive or gently competitive)
- Gentle nudges (scheduled reminders, optional check-in prompts)
- Low-effort check-ins (1 to 3 questions, emoji/slider response, takes under 30 seconds)

### Pulse layer (aggregate only)

- Team-level wellbeing score (rolling aggregate, never per-individual)
- Trend over time (week over week, month over month)
- Participation rate (what share of the team completed something - not who)
- Simple alert if aggregate score drops meaningfully (threshold-based)

### Privacy mechanism (non-negotiable)

- Minimum anonymity threshold: aggregate scores only shown when N >= defined minimum (assumption: N >= 5, to be validated with a legal/privacy review)
- No named responses, no individual timeline, no drill-down
- Clear UI communication of what the owner can and cannot see

---

## Business Model Hypothesis

**Model:** SaaS subscription, per-seat pricing with tiered plans.

**Assumption - Free tier (to feel the value first):**
- Up to 10 employees
- 1 active program at a time
- Basic pulse check-in (weekly, 1 question)
- Aggregate score visible to operator only (not owner dashboard)
- Limited program library (3 to 5 programs)

**Assumption - Paid tier (Starter ~$4-6/seat/month):**
- Up to 50 employees
- Full program library
- Full pulse layer with trends
- Owner dashboard (aggregate only)
- Custom nudge scheduling

**Assumption - Growth tier (~$8-10/seat/month):**
- 50 to 200+ employees
- Multi-team aggregation
- Advanced trend analytics
- Integrations (Slack, calendar)
- Priority support

*All pricing figures are hypotheses. Validation against competitor pricing is in Phase 3.*

---

## Geo and Compliance Constraints

**Primary market:** United States. **Secondary:** Europe (UK + EU).

### US regulatory boundary conditions

Employee wellbeing programs in the US operate near several regulatory areas. This is not legal advice - these are design boundary conditions that flag where a real legal review is needed before launch.

- **ADA (Americans with Disabilities Act):** Programs must not create outcomes that disadvantage employees with disabilities. Wellness incentives connected to health status can trigger ADA scrutiny. Design boundary: Brio programs are voluntary and participation-based, not health-outcome-based.
- **GINA (Genetic Information Nondiscrimination Act):** Prohibits collecting genetic information as part of wellness programs. Design boundary: Brio does not ask health or medical questions. [? exact boundary between emotional wellbeing check-ins and health data needs legal review]
- **HIPAA-adjacent:** If Brio ever integrates with health benefit providers or collects identifiable health-related data, HIPAA may apply. Design boundary: Brio does not collect clinical health data. Emotional/mood check-ins are not clinical. [? where the line falls needs legal confirmation before launch]
- **EEOC wellness program rules:** Voluntary wellness programs have specific rules about incentive size, reasonable alternatives, and disclosure. [? applies if Brio programs include any incentive or reward mechanic]

### Europe (secondary)

- **GDPR:** Applies to any EU employee data. Core requirements: lawful basis for processing, data minimization, right to erasure, data residency considerations. Design boundary: aggregate-only architecture naturally supports data minimization. Individual responses must be deletable. [? data residency - EU data stored in EU? Needs infrastructure decision]
- **UK GDPR:** Post-Brexit equivalent. Similar requirements.

**Product stance:** Aggregate-only insight. No individual surveillance. The architecture is the compliance posture.

---

## Design Principles

1. **Privacy is the product, not a feature.** The operator and owner never see named individuals. Aggregation is not a setting you can turn off - it is structural.

2. **Make the non-expert operator feel competent.** Every interaction gives them what to do next, confirms they did it right, and shows them it mattered. No HR jargon, no ambiguous dashboards.

3. **Earn trust before asking for data.** Employees share more when they believe it stays private. Communicate the privacy model clearly and repeatedly, especially at onboarding and at each check-in moment.

4. **Honest signals over flattering ones.** The owner gets a real team health signal, not a vanity metric. If things are trending down, the product says so plainly.

5. **Low effort for everyone.** Employee check-ins take under 30 seconds. Operator program setup takes under 5 minutes. Owner review takes under 2 minutes.

---

## Tech Stack Hypothesis

- **Frontend:** React + TypeScript, Tailwind CSS. Responsive, desktop-first for operator, mobile-friendly for employee.
- **Backend:** Node.js / TypeScript, REST or tRPC API.
- **Database:** PostgreSQL. Aggregate computation happens server-side - raw individual responses are never exposed via API to the owner-facing surface.
- **Auth:** Email + password with magic link option. SSO (Google, Microsoft) as a paid feature.
- **Infrastructure:** Vercel (frontend), Railway or Render (backend), managed Postgres. US region primary.
- **Notifications:** Email (Resend or Postmark), Slack integration (later phase).

*All stack choices are hypotheses, subject to revision.*

---

## Timeline

| Phase | Deliverable | Status |
|-------|-------------|--------|
| 0 - Brief | CLAUDE.md, repo, folder structure | Done |
| 1 - Product Model | research/strategy.md | Done |
| 2 - AARRR | research/aarrr.md | Done |
| 3 - Competitive Analysis | research/competitive-analysis.md | Done |
| 4 - Benchmark | research/benchmark.md | Done |
| 4.5 - Revisit Model | research/strategy.md v2 | Done |
| 5 - UX Patterns | research/ux-patterns.md | Done |
| 6 - Master Synthesis | research/master-research.md | Done |
| 6.5 - Quality Gate | research/quality-check.md | Done |
| 7 - Research HTML | research.html + GitHub Pages | Done |
| 8 - People and JTBD | research/personas.md, research/jtbd.md, research/live-research.md, personas.html, jtbd.html | Done |
| 9 - Wireframes | wireframes/ | Not started |
