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

**Refined by CJM (Stage 3) into a traced backlog (one version, not a fork):** 7 MVP-core features - self-serve start, guided onboarding, low-effort check-in, privacy bundle (pre-check-in disclosure + minimum-N of 5 + no live count + subscription-as-privacy statement), interpretive layer, aggregate score and trend, owner dashboard and share - plus 3 supporting (threshold alert, weekly digest, basic reminder). Every feature traces to an As-Is barrier or a job; no orphan; the Stage 2 cut list stays cut. The privacy bundle's success signal is H2 (participation at or above 65%), still [?] - the riskiest assumption, closed by the First Test, not by design. In the roadmap CJM is a separate status row, but its two pages live under the User Research group (now 4 pages: Personas, JTBD, CJM As-Is, CJM To-Be). Detail: user-research/docs/cjm-as-is.md and cjm-to-be.md.

**Structured by IA (Stage 4, Base Layer) into a screen map traced to jobs.** Top-level sitemap: three surfaces. (1) Public / pre-auth (Landing, Pricing, Sign up, Log in) for operator acquisition. (2) Operator app (primary, desktop-first) with four job tabs - Dashboard (the pulse aha: score + interpretation + next action), Programs (library, pick, manage, check-in setup), Team (invite + roster + participation), Owner (share + upgrade) - plus a Settings utility (Plan, Privacy center, Notifications, Account). (3) Owner surface (aggregate-only dashboard + monthly digest, under 2 min) and (4) Employee surface (a linear near-anonymous check-in: invite link, pre-Q1 disclosure, 1 to 3 questions, thank-you, under 30s). Main flow: Sign up, guided onboarding (company size pre-selects the first program), invite team, then read the aggregate pulse once minimum-N of 5 is met. Global navigation is 4 job tabs + Settings; the recurring main-job value (pulse + next action) is 1 tap from login (Dashboard is home), the deepest core action (check-in setup) is 3 taps, so the main job stays within three taps. The guided onboarding is a one-time linear wizard (time-budgeted under 5 min), not navigational depth. Every screen traces to a job; the only orphan job is S1 (tell network), parked to backlog. Detail: ia/docs/sitemap.md (entities, screens, navigation, traceability, critique) and ia/docs/flows.md (four user flows in Mermaid). Base Layer and the Detail Layer are both done: every node has a per-page spec (ia/docs/pages/) and a black-and-white wireframe (ia/<node>.html) with blocks, states, and SEO defined; next stage is Wireframes.

**Riskiest assumption (value risk, kills the idea if false):** an SMB operator believes a self-serve, aggregate-only tool (no HR, no individual data ever visible) delivers real team-level value worth paying for, AND employees trust the privacy promise enough to answer honestly. Post-persona re-research strengthened it, did not kill it. Detail: research/docs/lean-ux-canvas.md block 7.

**Strategic dimension we must win (benchmark):** employee trust in the aggregate-only privacy model, made visible in the product UI rather than promised in a policy. Detail: research/docs/benchmark.md.

**Chosen UX pattern:** Guided Program Flow + Pulse Loop (hybrid) - one data flow serves the operator's need for structure and the owner's need for signal. Detail: research/docs/ux-patterns.md.

---

## Information Architecture

*Standing decisions for the IA Detail Layer (course part 03b) and every stage after. Full detail: ia/docs/sitemap.md, ia/docs/flows.md, and the per-page sources in ia/docs/pages/.*

**Platform stance (fixed): mobile-first, fully responsive desktop to mobile, mobile base 360px.** Block priority and the first screen are reasoned from mobile first; desktop is designed deliberately, not as an afterthought. The operator dashboard stays desktop-first in daily use, but every node is specified from the 360px baseline up.

**Two IA layers.** Global layer (part a, Base Layer, done): user flows (ia/flows.html) plus a concept map of screens grouped by intent, the navigation model, and the traceability matrix (ia/concept.html) that answer "where can the user go." Per-page layer (part b, Detail Layer): the full site map as a cluster tree with per-node cards (ia/sitemap.html), plus each screen gets a full specification of blocks, states, components, and SEO that answers "what is on each page and how it behaves." Nothing appears for the first time inside a wireframe; the wireframe renders a finished structure, it does not invent one.

**SEO ahead, three layers, one per phase.** The structural SEO layer (URL/slug, H1/H2, breadcrumbs, schema.org, index vs noindex, internal linking, target and segment landing pages) is defined here, now, because it IS information architecture. On the wireframe (stage 04) we only validate that each SEO block has a visible place. In production we finalize copy and real query volumes. Private and transactional zones (auth, account, the employee check-in) are noindex, no schema. All mockups this stage are black and white, wireframe level; color, brand, and imagery arrive at Concept (stage 06).

---

## Wireframes

*Stage 04 (in progress). A grey clickable prototype of the whole product in HTML, built from the IA Detail Layer. Nothing is invented here: text comes from each node's A-E SEO block, components from IA nodes, states from the node's IA "States" section, flow links from ia/docs/flows.md. A hole found while building is fixed in the IA first, then rendered. Grey contract only: no color, type, brand, icons, or shadows until Concept (stage 06), which colors COPIES in ui-visual/, never these source files. Full detail: wireframes/docs/screens.md (matrix), wireframes/docs/conventions.md (contract), wireframes/docs/critique.md (defect log).*

**Etalon (working horse, locked Step 1): 4.0 Dashboard (wireframes/dashboard.html).** Maximum reuse: it sets the operator app shell (global nav + page frame, present on every operator screen) and the pulse card (score + interpretation + next action, reused on 4.1, 4.2, 9.0, 9.2), and carries the richest state set, so it fixes the state pattern for the whole product. Voice (05) and Concept (06) take the etalon from this file, they do not re-derive it.

**First flow assembled (locked Step 1): Flow 1 (MAIN JOB, Priya) - run wellbeing without HR training:** Home, Sign up, onboarding wizard (Company setup, First program confirm, Invite team, Invite-send error), Dashboard, Team pulse, with Team roster as the recovery detour. The etalon is built first (Step 4), then its states (Step 5), then the rest of Flow 1 (Step 6); Flows 2 to 4 and the remaining sitemap roll out by subagent fan-out (Step 8).

**Navigation is flow-first, from one source (wireframes/_nav.js):** a wireframe screen page is a clean prototype screen with no portfolio sidebar; its only chrome is a sticky top strip (node number and name, current state, sibling-state chips, and an All screens button back to the hub). Each screen is one responsive grey page with no device frames: it reflows from 360 to desktop (resize to see mobile), and the product job tabs move to a bottom bar on mobile. The hub wireframes/index.html holds the flow entries and the coverage map (built vs in-spec) and keeps the roadmap sidebar as the bridge back to the rest of the project; on all non-wireframe stage pages, Wireframes is one collapsed roadmap link to that hub. The shared grey stylesheet is wireframes/_wf.css, which inherits the IA B/W tokens and kit; stages 06 to 08 grow their own colored copies in ui-visual/, not this file.

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
| CJM (As-Is + To-Be) | user-research/docs/ (cjm-as-is, cjm-to-be) + user-research/cjm-as-is.html + cjm-to-be.html | Done |
| Information Architecture (Basic + Detailed) | ia/docs/ (sitemap, flows) + ia/flows.html + ia/concept.html + ia/sitemap.html + ia/docs/pages/ (all node specs) + ia/<node>.html wireframes | Done (Base Layer: Flows + Concept map; Detail Layer: Sitemap + all 41 page nodes + cluster 11 system + globals, per-node specs and B/W wireframes) |
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
