# Brio - Project Brief

## What it is

Brio is a responsive web SaaS that gives a small business with no HR team a simple way to run real employee wellbeing. It is operated by whoever got handed "people stuff" - an office manager, ops lead, EA, or the founder - and gives the business owner honest proof it is working at the team level, without ever surveilling any individual.

**Platform:** Responsive web. The operator dashboard is desktop-first. The employee experience is mobile-friendly. A native app is a later decision, out of scope for now.

**Core differentiator:** The product is the privacy boundary. In an SMB there is no HR layer between the boss and personal data. Brio is designed so the owner sees only aggregate, team-level signals - never named individuals. This is the make-or-break design constraint.

---

## People and Jobs

*Condensed context for downstream stages. Full detail: user-research/docs/personas.md and user-research/docs/jtbd.md.*

**Primary persona - Priya (Operator, hero user).** Office manager, ops coordinator, EA, or founder at a 10 to 200 person company with no HR. Low-to-medium confidence: knows the people, not the methodology. She is the buyer, the daily driver, and the activation bottleneck. Age 26 to 45 [? no data]. Secondary persona: Marcus (Owner), approver and ROI judge, drives renewal. End user: Yemi (Employee), not the buyer but the engine; without honest participation there is no signal.

**Main job of the product:** When I am handed responsibility for employee wellbeing with no HR training, I want a guided system that tells me what to run and when, so that I feel competent and the team actually benefits.

**MVP core - the 3 jobs to build first** (important for Priya AND not closed by any self-serve competitor; from the JTBD matrix):
1. Main job - run wellbeing without HR training (guided program engine, curated library, opinionated onboarding).
2. J2 - know if the team is struggling early (pulse loop, threshold trend alert). The retention driver.
3. E1 - feel competent as a people person (every operator touchpoint carries an interpretive layer: plain-language score, setup confirmation, suggested next action).

Supporting architecture (serve Yemi; preconditions for the above; in MVP scope but not primary design surfaces): J3 - certainty of privacy before responding; J4 - check-in under 30 seconds.

**Riskiest assumption (value risk, kills the idea if false):** an SMB operator believes a self-serve, aggregate-only tool (no HR, no individual data ever visible) delivers real team-level value worth paying for, AND employees trust the privacy promise enough to answer honestly. Post-persona re-research strengthened it, did not kill it. Detail: research/docs/lean-ux-canvas.md block 7.

**Strategic dimension we must win (benchmark):** employee trust in the aggregate-only privacy model, made visible in the product UI rather than promised in a policy. Detail: research/docs/benchmark.md.

**Chosen UX pattern:** Guided Program Flow + Pulse Loop (hybrid) - one data flow serves the operator's need for structure and the owner's need for signal. Detail: research/docs/ux-patterns.md.

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

*Narrowed to the MVP core jobs above (Main, J2, E1) plus their supporting architecture (J3, J4). Items that close no core job are deferred, per the cut list in user-research/docs/jtbd.md.*

### Programs and check-in engine (serves Main, J6, and Yemi)

- Curated wellbeing program library (mental health, physical, financial, social) - operator picks, system runs
- Guided, opinionated onboarding: first program pre-selected by company size, setup under 5 minutes
- Gentle nudges (scheduled reminders, optional check-in prompts)
- Low-effort employee check-in (1 to 3 questions, emoji/slider, under 30 seconds, no account for the first check-in)

### Pulse layer, aggregate only (serves J2, J1, J5)

- Team-level wellbeing score (rolling aggregate, never per-individual)
- Trend over time and participation rate (what share of the team completed something - not who)
- Threshold alert when the aggregate drops meaningfully (the early-warning job)
- Owner dashboard (aggregate only) is the primary paid feature; the operator upgrades to give the owner visibility

### Privacy mechanism (structural, non-negotiable; serves J3, E2)

- Minimum-N aggregate: no score shown until N >= 5 (MVP default; legal validation deferred)
- No live response count during an open cycle, for operator or employee, to close the small-team timing-inference vector (founder decision D1, June 2026, research/strategy.md Section 5)
- Persistent pre-check-in privacy disclosure before Question 1, every cycle. No named responses, no individual timeline, no drill-down
- Clear UI statement of what the owner can and cannot see

### Deferred to V2 (close no core job)

Individual leaderboards and rankings (incompatible with J3), drill-down analytics, Slack and calendar integrations, formal referral program with cash incentives, custom program builder, team challenges. Source: user-research/docs/jtbd.md cut list.

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

*All pricing figures are hypotheses, benchmarked against competitor pricing in research/docs/competitors.md and the Lean UX Canvas (research/docs/lean-ux-canvas.md).*

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

| Stage | Deliverable | Status |
|-------|-------------|--------|
| Foundation Research | research/docs/ (competitors, benchmark, lean-ux-canvas, aarrr, ux-patterns, research) + research/research.html | Done |
| User Research (Personas + JTBD) | user-research/docs/ (personas, jtbd) + user-research/personas.html + user-research/jtbd.html | Done |
| CJM (As-Is + To-Be) | cjm/ | Not started |
| Information Architecture (Basic + Detailed) | ia/ | Not started |
| Wireframes | wireframes/ | Not started |
| Voice | voice/ | Not started |
| Concept | concept/ | Not started |
| UI + Visual | ui-visual/ | Not started |
| Tokens + Components | tokens-components/ | Not started |
| Design System | design-system/ | Not started |
| Responsive | responsive/ | Not started |
| Animation | animation/ | Not started |
| Handoff | handoff/ | Not started |

*Supporting history (not canonical deliverables): research/strategy.md, research/product-model.md, research/quality-check.md, research/live-research.md.*
