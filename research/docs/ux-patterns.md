# UX Patterns

*Phase 5 - drawn from validated audience behavior and competitive research.*

---

## 1. Behavioral Patterns from the Validated Audience

### Pattern B1 - The Operator Works in Bursts, Not Continuously

The operator runs wellbeing alongside another full-time job. They engage with Brio in short, purposeful sessions: a Monday morning 10-minute check of last week's results, a 5-minute program setup on the first of the month, a quick team invite after a new hire joins. They do not "use" Brio daily - they rely on it to work quietly in the background and surface when something needs attention.

**Design implication:** The operator dashboard must be scannable in under 30 seconds. Every screen should have one clear next action, not a menu of options. Email digests are the primary engagement surface, not the in-app dashboard.

### Pattern B2 - The Owner Checks In, Does Not Operate

The owner sees Brio when the operator sends them a link, or when they receive the monthly digest. They are not curious about the product mechanics - they want reassurance or a signal to act on. Their attention span for the dashboard is under 2 minutes. They need one number, a trend, and a plain-language interpretation ("the team is doing well" / "something may be off - consider checking in").

**Design implication:** Owner view is a read-only, single-screen experience. No navigation, no drill-down. Designed for mobile reading (they will check the digest on their phone).

### Pattern B3 - Employees Participate Once, Then Decide Whether to Continue

The first check-in experience is the trust-forming moment. If it feels invasive (too many questions, unclear who sees what, feels like surveillance), employees opt out mentally and never engage honestly again. If it feels safe and fast (under 30 seconds, clear privacy statement, optional), a participation habit forms over 3 to 4 weeks.

**Design implication:** The first check-in must be radically simple: one question, one emoji-scale response, one line of privacy context. No account creation. No email required. Participation habit is formed through consistency of timing (same day, same time each week) not through product feature depth.

### Pattern B4 - The Operator Needs Confirmation, Not Just Data

Unlike a data analyst who wants raw numbers to interpret, the operator needs the product to tell them "this is normal" or "this is worth noticing." They do not have the HR background to contextualize a 67% participation rate or a 7.2/10 team score. They need the product to carry interpretive load.

**Design implication:** Every metric in the operator dashboard should have a plain-language interpretation next to it. Scores are not shown without context ("this is similar to last month" / "this is lower than your usual range"). The product acts as a knowledgeable peer, not a data terminal.

### Pattern B5 - **[MOST CRITICAL] Privacy Doubt Kills Participation Before the First Session**

*This is the entry point behavioral pattern - the one that determines whether the product has any data to show at all.*

Before employees answer their first check-in, they will ask themselves: "Can my manager see my answer?" If the answer is uncertain, they will not respond honestly - or will not respond at all. This doubt must be resolved before the first question appears, not after. The privacy model is not a feature employees discover - it is the permission slip that makes everything else possible.

**Why this is the entry point:** Without employee participation, there is no aggregate signal. Without a signal, the owner has nothing to look at. Without owner value, there is no renewal. Without renewal, there is no product. The entire value chain starts with employee trust, and employee trust starts with one credible privacy statement before the first check-in.

**Design implication:** Privacy disclosure must appear before Question 1, not after. It must be one sentence, in plain language, specific ("your team's score will show once 5 or more people respond - your individual answer is never visible to anyone at [company]"). It must be repeated at the same moment in every subsequent check-in, not just at onboarding. The repetition is the trust.

---

## 2. Five Fundamentally Different UX Patterns

### UX Pattern 1 - The Guided Program Flow

**How it works:** The product pre-selects a recommended program based on company size or a simple onboarding question. The operator confirms or swaps it. The program runs on a defined cadence (4-week, 8-week cycles). Each week, the system automatically sends nudges to employees, collects check-in responses, and surfaces the aggregate result to the operator. The operator's job is to launch the program and review results, not to build it.

**Where it is used:** Wellable (curated challenge library, auto-send mechanics), Headspace Core (content auto-delivery by schedule). Source: wellable.co, organizations.headspace.com/small-business

**When it fits:** When the operator has low HR knowledge and needs the product to carry most of the program management load. Works best when the operator's confidence driver is "I set it up correctly and it is running."

**When it breaks:** When company culture is highly specific and the curated program library does not match (e.g. a construction company with shift workers vs. a remote-first tech startup). Also breaks when the operator wants to feel creative control over program design - the guided flow can feel constraining.

---

### UX Pattern 2 - The Pulse + Insight Loop

**How it works:** Employees receive short, recurring check-ins (1 to 3 questions, weekly or biweekly). Responses are aggregated and presented to the operator as a rolling score and trend. The product generates an AI-assisted interpretation: "This week's engagement dipped 8 points - your last program ended 2 weeks ago. Consider launching a new challenge." The operator reacts to signals, does not initiate programs from scratch.

**Where it is used:** Officevibe / Workleap (automated weekly pulse, AI-recommended actions). Source: workleap.com/officevibe

**When it fits:** When the operator's primary job is to stay aware of team health and respond to signals. Suits companies where the operator checks in frequently and values early-warning capability over structured program execution.

**When it breaks:** When the team is small enough (under 15 people) that even aggregate scores feel personally attributed. Also breaks when the operator is too time-poor to interpret signals and make reactive decisions - they want the system to act, not just alert.

---

### UX Pattern 3 - The Benefit Marketplace

**How it works:** Employees choose their own wellness resources from a curated library: meditation, financial coaching, sleep content, therapy sessions. The employer funds access; the employee selects what is relevant to them. Participation is tracked by content type and volume (not by individual), and the employer sees overall utilization rates.

**Where it is used:** Calm for Business / Calm Health (content library), Nivati (therapy + coaching on demand), Headspace Core (1,000+ hours of guided content). Source: health.calm.com, organizations.headspace.com/small-business

**When it fits:** When employee autonomy is high and the employer does not want to prescribe a wellbeing program. Works for diverse workforces where a one-size program would feel generic. Low operator overhead - just fund access, review utilization.

**When it breaks:** When the owner needs a team-level wellbeing signal (not just "hours of meditation watched"). Benefit marketplace usage rates are not the same as team health. An operator who needs to say "the team is doing well" cannot point to Calm usage data and call it evidence.

---

### UX Pattern 4 - The Gamified Challenge

**How it works:** Employees join time-bound challenges (step count, hydration, sleep). Leaderboards or team aggregates track progress. Points are earned and redeemed for rewards. Social proof mechanics ("7 of your colleagues joined") drive participation. Admin sets the challenge, the system gamifies completion.

**Where it is used:** Vantage Fit (step challenges, virtual marathons), Woliba (challenges + recognition), Wellable (40+ challenge types). Source: vantagefit.io, woliba.io, wellable.co

**When it fits:** When team culture is competitive or activity-focused. Physical wellness challenges naturally suit mixed office/field workforces. Short participation windows (4-6 weeks) reduce commitment anxiety.

**When it breaks:** For Brio's specific audience, this pattern has a structural conflict: leaderboards require individual ranking, which is individual visibility. The privacy architecture needed for the aggregate-only owner signal cannot coexist with a leaderboard without a careful design boundary. Also breaks for sedentary office workers who feel excluded by step-count mechanics, or for employees without wearables.

---

### UX Pattern 5 - The Contextual Nudge System

**How it works:** The product sends lightweight, well-timed prompts to employees based on schedule and context: a Monday morning "how was your weekend?" check-in, a Friday "one thing you want to do for yourself this weekend" nudge, a monthly "how supported do you feel?" question. No programs, no challenges - just consistent, habitual micro-moments of engagement. The operator sets the cadence and tone; the product executes.

**Where it is used:** Partially in Officevibe (automated weekly pulse), partially in Woliba (nudge system). No product does this as a pure, standalone experience. Source: workleap.com/officevibe, woliba.io

**When it fits:** When the employer wants to build a long-term culture of psychological safety through repeated, low-stakes signals rather than structured programs. Suits operators who want the product to "just keep going" without their active involvement each cycle.

**When it breaks:** When employees feel the nudges are performative rather than genuine ("the company cares about how I feel but won't actually change anything"). Nudge systems require the operator to demonstrate follow-through - the nudge alone is not the product, it is the entry point to a conversation. Without visible response to what the nudges surface, they become noise.

---

## 3. Pattern Selection for Brio

### Primary choice: Hybrid of Pattern 1 (Guided Program Flow) + Pattern 2 (Pulse + Insight Loop)

**Why this combination:**

**Reason 1 - Ties to the operator's JTBD.** The operator needs to feel competent without HR knowledge (Pattern 1 gives them structure to lean on) AND needs to know if something is off before it becomes a crisis (Pattern 2 gives them the signal). The two patterns address different parts of the same job. Pattern 1 alone gives structure but no awareness. Pattern 2 alone gives awareness but no structure to act on it. Together they are complete.
Source: JTBD J1 and J3 from validated product model.

**Reason 2 - Fills the competitor gap.** No competitor combines a guided program engine (Wellable, Headspace) with a genuine aggregate pulse signal (Officevibe) in a self-serve, no-HR-required package. Wellable has programs but requires HR setup. Officevibe has pulse but no programs. The combination is unclaimed.
Source: Phase 3 competitive analysis gap section.

**Reason 3 - Serves both stakeholders from one architecture.** Pattern 1 gives the operator weekly activity (program management). Pattern 2 gives the owner periodic insight (aggregate score trend). The same data flow serves both needs - employee check-ins are the input to both the program feedback loop and the owner pulse. One participation mechanic, two output layers.
Source: Validated audience model, Segment A and Segment B.

---

### Alternative under condition X

**Pattern 3 (Benefit Marketplace) as a Phase 2 layer** - if Brio's Phase 1 data shows that operators in specific verticals (tech startups, creative agencies) want employee autonomy over program selection rather than a guided recommendation. The marketplace layer would be additive, not replacing the program engine. Condition: operator NPS on guided program selection is below 40 after 90 days of live data.

---

### Pattern that does NOT fit Brio: Pattern 4 (Gamified Challenge with Leaderboards)

**Why it does not fit:**

The leaderboard mechanic requires individual ranking to function - it is the core participation driver. Individual ranking means individual visibility. This is architecturally incompatible with Brio's non-negotiable privacy model: the product must never surface named individuals to the operator or owner.

Additionally, the competitive research shows that leaderboard-centric designs create participation inequality: employees who are already active (and already healthy) dominate the board, while the employees most likely to need wellbeing support are the least likely to participate. The product optimizes for visible participation, not actual wellbeing improvement.

Vantage Fit's published pricing (250-employee minimum) and India/enterprise positioning confirm that this pattern's natural market is large, HR-managed enterprises where gamification can be administered with nuance. Brio's 10-50 employee target has no such administration layer.

Pattern 4 could be introduced as a team-aggregate mechanic (not individual leaderboard) in a later phase - for example, "the team collectively walked 50,000 steps this week" - but this requires a redesign that removes the individual visibility that makes the gamification work.
