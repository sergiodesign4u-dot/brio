# Personas

*Phase: People and JTBD. Built from validated research. Every observation cites its source.*

---

## People Observations from Research

*This is the raw inventory drawn from master-research.md, strategy.md, competitive-analysis.md, ux-patterns.md, and benchmark.md. Personas below grow directly from these observations.*

---

### Operator-Buyer Observations

**O1 - The role is real and unserved.**
No competitor explicitly designs for the operator who has no HR training. Wellable, Woliba, and Nivati all use language ("dedicated account manager," "wellness coordinator," "program administrator") that assumes an HR professional on the buyer side. The no-HR operator is tolerated, not designed for.
Source: research/competitive-analysis.md, "3 Common Patterns" - Pattern 2.

**O2 - Self-serve is the only viable sales motion for this persona.**
Operators who cannot see a price or try a product without scheduling a sales call do not buy. Nivati, Woliba, and Wellable all require demos. Headspace Core and Gusto prove that the SMB buyer self-activates when friction is removed.
Source: research/competitive-analysis.md, "3 Key Differences" - Sales motion.

**O3 - The operator's primary confidence driver is structured guidance.**
They need the product to tell them what to do next, confirm they did it correctly, and show them it mattered. They do not have the HR background to contextualize a 67% participation rate or a 7.2/10 team score.
Source: research/ux-patterns.md, Patterns B1 and B4.

**O4 - The operator works in bursts, not continuously.**
They engage in short purposeful sessions: a Monday morning check of last week's results, a 5-minute program setup once a month, a quick invite after a new hire joins. They do not "use" the product daily - they rely on it to work in the background and alert them when something needs attention.
Source: research/ux-patterns.md, Pattern B1.

**O5 - Activation requires two things: operator belief AND employee participation.**
The operator must believe the product is worth launching AND employees must respond. If zero employees respond after 14 days, the operator's belief breaks immediately. Both must succeed in session one.
Source: research/strategy.md, Riskiest Assumption; research/aarrr.md, Activation section.

**O6 - The aha moment is score plus interpretation plus next action.**
Seeing a number alone does not create a habit. The Officevibe AI-recommended-action model confirms: operators who understand what to do next stay engaged. A score without context produces no action.
Source: research/competitive-analysis.md, Officevibe key mechanism; research/ux-patterns.md, Pattern B4.

**O7 - The operator upgrades to give the owner visibility, not for their own features.**
The owner dashboard (aggregate team signal) is the paid feature. The emotional driver for upgrade is "I want to show the owner this is working" - not a feature checklist or team-size wall.
Source: research/strategy.md, Business Model; research/aarrr.md, Revenue section.

**O8 - Age range 26 to 45.**
[?] Hypothesis - no competitive data confirms or contradicts this. Consistent with the role profile (office manager, EA, ops coordinator, founder in a small company) but unvalidated.
Source: research/strategy.md, Segment A.

---

### Owner Observations

**W1 - The owner checks in, does not operate.**
The owner sees Brio when the operator shares it or when they receive a monthly digest. Their attention span for the dashboard is under 2 minutes. They want one number, a trend, and a plain-language interpretation.
Source: research/ux-patterns.md, Pattern B2.

**W2 - The owner's primary driver is ROI and risk.**
They approve budget, want proof the investment is worthwhile, and want an early warning before someone resigns. They are not curious about product mechanics.
Source: research/strategy.md, Segment B; research/master-research.md, Segments.

**W3 - The owner values the aggregate signal precisely because it does not expose individuals.**
In an SMB with no HR layer, the owner is the boss. If they could see individual data, they would be the surveillance threat. The aggregate-only model protects the product from this structural problem.
Source: research/master-research.md, "Problem" section; research/benchmark.md, Mechanism 2.

**W4 - Owner age range is not known.**
[?] Hypothesis - no research data on age range. Consistent with "founder or CEO" but unvalidated.
Source: research/strategy.md, Segment B - marked [?].

**W5 - Owner-to-owner word of mouth is a late-stage referral channel.**
Owners who see ROI mention it in peer groups (EO, YPO, investor circles). They share to look like caring leaders, not for financial incentives. This is year-1 secondary, not primary.
Source: research/aarrr.md, Referral section.

---

### Employee Observations

**E1 - The employee is the engine, not the buyer.**
Without employee participation, there is no aggregate signal. Without signal, the owner has nothing to see. Without owner value, there is no renewal. The value chain starts with employee trust.
Source: research/master-research.md, Key Conclusion 3; research/strategy.md, Segment C.

**E2 - The employee did not choose Brio.**
They were enrolled by their employer. This is a fundamentally different trust context than a product someone chose to use personally. In an employer-funded tool, employees are not in a free consent context.
Source: research/benchmark.md, "Mechanism That Will Not Work"; research/ux-patterns.md, Pattern B3.

**E3 - Privacy doubt kills participation before the first session.**
Before answering the first check-in, employees ask themselves: "Can my manager see my answer?" If uncertain, they do not respond honestly, or do not respond at all. This doubt must be resolved before Question 1 appears.
Source: research/ux-patterns.md, Pattern B5 [MOST CRITICAL]; research/benchmark.md, Mechanism 2.

**E4 - The first check-in is the trust-forming moment.**
If the first experience feels invasive (too many questions, unclear who sees what), employees opt out mentally and never engage honestly again. If it feels safe and fast (under 30 seconds, clear privacy statement), a participation habit forms over 3 to 4 weeks.
Source: research/ux-patterns.md, Pattern B3.

**E5 - Pre-check-in disclosure must be specific, not general.**
"Your answer joins the team's anonymous score - [company name] sees only the team total, never your response." One sentence. Plain language. Before Question 1. Repeated at the same moment in every subsequent check-in, not just at onboarding. The repetition is the trust.
Source: research/benchmark.md, Mechanism 2; research/ux-patterns.md, Pattern B5.

**E6 - Privacy by promise fails. Privacy by architecture earns participation.**
Limeade (11/40 benchmark score) and Typeform (14/40) show that privacy claimed but not architecturally designed erodes trust. Culture Amp (33/40) and Apple Health (35/30*) earn trust through structural guarantees.
Source: research/benchmark.md, Benchmark Scores and "Mechanism That Will Not Work."

**E7 - Opt-out consent mechanisms do not work in this power dynamic.**
Employees in an employer-funded product are not making free choices about consent. Opt-out framing in this context is not meaningful consent. It also corrupts the aggregate signal because employees who suspect monitoring respond dishonestly.
Source: research/benchmark.md, "Mechanism That Will Not Work."

**E8 - Minimum-N threshold: set at 5 for MVP. Legal validation deferred.**
MVP decision: N=5 flat, non-configurable by employer. No live count is shown to anyone (operator or employee) during an open cycle. The score appears only after the cycle closes and the minimum-N is met. Closed by founder decision, June 2026 - not by re-research. The legally defensible US threshold (ADA, GINA, EEOC) still requires legal counsel before launch and is deferred.
Source: research/strategy.md Section 5 (D1/D4/D5); research/live-research.md K1 (resolution). Legal deferral: research/master-research.md Open Question Q1.

---

### What We Do NOT Know About People

| Unknown | Why It Matters |
|---------|---------------|
| DEFAULT ESTABLISHED - operator-first (closed by founder decision, June 2026, not by re-research). Landing page hero speaks operator language; owner-trust block on same page. Reversible by paid A/B acquisition test. See research/strategy.md D3. | Determines primary acquisition channel and landing page message |
| [?] What percentage of SMB employees honestly participate in anonymous employer surveys? | If the answer is low even with privacy architecture, H1 is broken and the product premise needs revision |
| [?] Does a structural privacy argument (subscription model = no incentive to monetize data) outperform a policy-based one in driving participation? | Affects which message is primary on the product page and in employee onboarding |
| [?] What is the operator's actual daily schedule and digital context when they engage with a wellbeing tool? | Affects notification timing, digest cadence, and whether the product needs a native app |
| [?] How do SMB employees perceive wellbeing programs differently from large-enterprise employees? | Large-company research may not apply: in a 15-person team, everyone knows each other, which changes the inference risk and trust calculus |
| [?] At what point does participation drop naturally (novelty wearing off), and what reverses it? | Affects retention design: when to prompt operators, when to refresh program options |
| [?] Owner age range and digital behavior | Affects dashboard design (mobile vs. desktop) and the format of the owner digest |

---

## Personas

*Built from the observations above. Every persona block cites its source.*

---

### Primary Persona - Priya: The Handed-It Operator

**Primary persona. Chosen by diverge-then-converge below.**

---

**Who she is:**
Priya is 31. She is the operations coordinator at a 22-person marketing consultancy. She has been there three years. When the founder decided the team needed "someone to own the people stuff," Priya got the ask. She did not ask for it. Her actual job is office logistics, vendor management, and onboarding new hires. She now also runs the monthly all-hands, manages the holiday party, and - as of two months ago - is supposed to "run wellbeing programs."

She has no HR background. She has looked at a few tools and either hit a demo wall or found products that assumed she had a team of HR professionals to support her. She is good at figuring things out but she has no framework for this. Her fear is not the work - it is the uncertainty. She does not know if what she is doing is making a real difference, or if she is just going through motions.

**Context she arrives from:**
She Googled "how to run employee wellbeing programs for small businesses" and clicked through a few articles. She tried signing up for one competitor and was asked to schedule a demo. She did not schedule it. She is looking for something she can start in an afternoon without having to justify it to anyone first.

**Her jobs:**
- Run structured wellbeing programs without HR knowledge (primary)
- Know if the team is struggling before someone resigns
- Feel competent and confident in a role she was given, not trained for
- Prove to the founder that the people investment is paying off (she will be asked)

**What hurts most today:**
- No self-serve path: every tool she found either requires a demo call or assumes an HR team she does not have. Source: research/competitive-analysis.md, Woliba/Nivati/Wellable demo requirements.
- No plain-language feedback: she cannot interpret a participation rate of 67% as good or bad without context.
- She does not know if employees are filling in surveys honestly. She suspects they are not.
- She does not know what to do when the score is low. There is no "recommended next action."

**Trust triggers:**
- Sees a price on the page without having to talk to anyone
- Can try it before committing (free tier, no credit card)
- Product tells her what to do next, not just what happened
- Gets a confirmation moment: "you launched a program correctly, here is what the team saw"

**What scares her off:**
- Another demo-required product
- A product that assumes she knows HR terminology
- A dashboard full of numbers without interpretation
- Having to explain to employees why their responses are not private

**Mood quote:**
"I don't have time to become an HR expert. I just need to know what to do and that it's actually working." [?] No direct user quote from research - this is a synthesis from ux-patterns.md B1/B4 observations. Mark as hypothesis.

Source: research/strategy.md Segment A (CONFIRMED role profile), research/competitive-analysis.md (CONFIRMED no-HR gap), research/ux-patterns.md B1/B4 (CONFIRMED operator behavioral patterns).

---

### Primary Persona Choice - Diverge and Converge

**Option A - Operator is primary.** She is the buyer, the daily driver, the activation bottleneck, and the person whose behavior most directly determines whether the product has any data to show. Every V1 design decision serves her first.

**Option B - Owner is primary.** He approves the budget and decides on renewal. Without his conviction, there is no subscription.

**Option C - Employee is primary.** Without their participation, there is no aggregate signal, which means neither the operator nor the owner sees anything worth paying for.

**Chosen: Option A - Operator.** The operator decides to try, activates the product, invites the team, and is the first to experience value (or not). The owner is downstream: they see value only after the operator has set things up. The employee does not choose the product at all. Every design decision that serves the operator's competence and clarity also, indirectly, serves the owner's need for signal - because a competent operator runs programs that generate employee responses. Source: research/master-research.md Key Conclusion 3, research/aarrr.md Activation section.

---

### Secondary Persona - Marcus: The Checking-In Owner

**Secondary persona.**

---

**Who he is:**
Marcus is 43. He founded the same 22-person consultancy Priya works at. He cares deeply about his team - three people left in the past 18 months and each time he was caught off guard. He approved the wellbeing budget because he wants to know if people are happy before they hand in notice. He is not going to learn a new product for this. He wants a number and a trend, once a month, via email.

**Context he arrives from:**
Priya showed him the product. Or he received a monthly digest email with the team score. He is not discovering Brio himself in most scenarios.

[?] Whether the owner or operator discovers Brio first is an open question (Open Question Q2 from master-research.md). This persona assumes operator-led discovery, which is the primary hypothesis. If research shows owners discover first, the landing page messaging must shift substantially.

**His jobs:**
- Know at a glance if the team is doing well or if something is off
- Make a confident budget decision: is the wellbeing investment worth renewing?
- See team health without accessing individual employee data (both for ethics and legal comfort)

**What hurts most today:**
- No simple, credible team-level view without asking the operator directly
- Woliba's burnout signals by manager feel invasive and legally uncomfortable. Source: research/competitive-analysis.md, Woliba privacy note.
- Officevibe was the closest analog but is now $4,999/year flat, pricing him out. Source: research/competitive-analysis.md, Key Differences.
- He does not want a dashboard. He wants the answer to "is the team OK?" in one read.

**Trust triggers:**
- One number. A trend. A plain-language interpretation ("the team is doing well" / "something may be off").
- The product explicitly tells him what he cannot see and why. He trusts architecture over policy.
- The monthly digest lands in his email and takes under 2 minutes to absorb.

**What scares him off:**
- Individual employee data surfacing anywhere in the product
- A complex dashboard that requires training to interpret
- Privacy language that sounds like marketing copy rather than a structural guarantee

**Mood quote:**
"I don't need to know who's unhappy. I need to know if the team is doing OK as a whole before I lose another good person." [?] Synthesis from master-research.md, Segments section and ux-patterns.md B2. Mark as hypothesis, not a real quote.

Source: research/strategy.md Segment B (CONFIRMED role profile), research/ux-patterns.md B2 (CONFIRMED behavioral pattern), research/competitive-analysis.md Officevibe/Woliba notes.

---

### Third-Party Persona - Yemi: The Skeptical Employee

**Third party, not a buyer. The critical engine of the product.**

---

**Who she is:**
Yemi is 27. She is a junior designer at the same consultancy. She has seen "wellness theater" at her previous job: company surveys that appeared in the all-hands with "we heard you" but nothing changed. She is not hostile to Brio, but she is not enthusiastic either. Before she fills in the first check-in, she will ask herself: "Who sees this? What happens with it?"

If she gets a clear, specific answer to that question before she has to respond, she will answer honestly. If she does not, she will either skip it or put in a non-answer.

**Context she arrives from:**
She received an invite from Priya. The invite said it is anonymous. She has heard that before.

**Her jobs:**
- Know with certainty that her response is private before she responds
- Spend under 30 seconds on the check-in or she will feel it is not worth the interruption
- Feel that the company is acting on what she says (otherwise the check-ins are performative)

**What hurts most today:**
- Has been told surveys are "anonymous" before and later noticed that a small-team format meant she was probably identifiable anyway
- Does not trust "anonymous" if the employer controls the platform and the data
- Feels that wellbeing programs often track performance, not wellbeing

**Trust triggers:**
- One specific sentence before Question 1: exactly what is shown to the manager, exactly what is not. Not a link to a privacy policy. A sentence.
- The format protects against inference: her response only appears as part of a team aggregate, never individually.
- The company does something visible in response to aggregate feedback over time.

**What scares her off:**
- Questions that feel like performance review disguised as wellbeing
- Survey invitation that leads with company branding, not the privacy guarantee
- Check-ins that take more than 30 seconds
- Any moment that feels like data collection rather than genuine support

**Mood quote:**
"I'll participate if I actually believe no one can see my answer. But I've been told that before. Show me exactly how it works, not just a promise." [?] Synthesis from research/benchmark.md (Limeade/Typeform anti-pattern analysis) and research/ux-patterns.md B3/B5. Mark as hypothesis, not a real quote.

Source: research/benchmark.md B3/B5 (CONFIRMED behavioral pattern), research/benchmark.md Mechanism 1 and Mechanism 2 (CONFIRMED trust mechanisms), research/benchmark.md "Mechanism That Will Not Work" (CONFIRMED anti-pattern).

---

### Why Three Personas, Not Four

A fourth persona (HR professional or "wellbeing coordinator" at a slightly larger SMB) was considered. Discarded because: the research confirms that designing for an HR professional shifts the product into the territory of all current competitors, each of whom has assumed an HR sponsor. Brio's differentiation is precisely that it does not assume an HR layer. Adding an HR-professional persona would pull design decisions toward features and language that undermine the primary persona's experience. Source: research/competitive-analysis.md, "What Is Missing Across All" - gap 1.
