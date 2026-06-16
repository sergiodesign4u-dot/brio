# Live Research - Post-Persona Verification

*Phase: People and JTBD, Step 6. All claims sourced from live web fetches conducted June 2026. No memory used.*

---

## Stat Line

| Claims tested | Sources used | CONFIRMED | KILLED | UNRESOLVED |
|--------------|-------------|-----------|--------|------------|
| 6 | 10 | 4 | 1 | 3 |

Sources: Gallup Workplace (gallup.com), SHRM x2 (shrm.org), Wellhub SMB Report (wellhub.com), RAND wellness program study (cited via multiple aggregators), Perceptyx survey guide (perceptyx.com), Social desirability bias research (multiple aggregators), Business Group on Health (businessgrouphealth.org), SSR/Electroiq wellness statistics aggregators, Darwinbox (darwinbox.com).

---

## Confirmed Findings

**[C1] Self-censorship in employer-run surveys is a real documented problem, especially in small teams.**
Confidence: MEDIUM

WHAT: SHRM documented that when employees distrust anonymity, "they tend to answer dishonestly - lying about their title, salary level or years of service" or paint experiences "much rosier than they really are." The cause in small teams: demographic data in surveys (department, title, tenure) enables identification even when names are removed. Expert quote: "the more identifiable variables a company collects, the more likely they will not receive frank answers." Separate social desirability bias research confirms employees systematically over-report positive experiences when they suspect observation. Source: shrm.org/topics-tools/news/employee-relations/employee-engagement-surveys-workers-distrust; shrm.org/topics-tools/news/employee-relations/how-anonymous-employee-satisfaction-survey.

IMPACT: The riskiest assumption is directionally confirmed as a real risk, not an invented one. Employees DO self-censor. The question for Brio is whether the privacy architecture (minimum-N, visible disclosure, no demographic collection) adequately addresses the specific triggers of self-censorship documented here.

---

**[C2] SMB employees with a formal wellness program have meaningfully better self-reported wellbeing outcomes.**
Confidence: MEDIUM

WHAT: Wellhub's 2026 State of Work-Life Wellness survey (3,773 SMB employees): 66% of SMB employees with a formal wellness program say they feel good or thriving overall vs. 40% without. 63% rate their mental health as good or thriving with wellbeing support vs. 43% without. Source: wellhub.com/en-us/resources/work-life-wellness-report-2026-smb/

IMPACT: Confirms there is a real outcome gap between SMBs with and without wellness programs. The market opportunity (serving the 58% of small businesses that now have programs, and the remainder that do not) is real. Note: this data is from a Wellhub-commissioned study; methodology not independently verifiable.

---

**[C3] Pre-check-in disclosure plus minimum-response threshold are documented best practices that increase honest participation.**
Confidence: MEDIUM

WHAT: SHRM identified two specific interventions that increase survey trust: (1) third-party administration with aggregation rules requiring 5-6+ responses before revealing any data, and (2) multiple touchpoints throughout the year rather than annual surveys. "Frequent check-ins" combined with "manager credibility through visible follow-through" are the two most cited trust-building mechanisms. Separately, 70-75% of employees report being more likely to answer honestly when explicitly assured of total anonymity. Source: shrm.org/topics-tools/news/employee-relations/employee-engagement-surveys-workers-distrust; vantagecircle.com/en/blog/anonymous-employee-survey/

IMPACT: CONFIRMS the mechanism direction Brio is pursuing: minimum-N threshold before showing any data, explicit disclosure before every check-in, and a repeated disclosure cadence (not just at onboarding). The SHRM recommendation of 5-6 responses minimum supports the assumption of N=5. The weekly pulse cadence also aligns with "multiple touchpoints."

---

**[C4] Baseline wellness program participation in physical challenges is 20-40% without executive involvement (RAND).**
Confidence: MEDIUM

WHAT: RAND study (cited across SHRM, select software reviewers, and multiple wellness statistics aggregators) found 20-40% employee participation in wellness programs depending on size and scope. Executive involvement can drive this from 44% to 80%. Only 13% of small businesses offer financial incentives vs. 40% of large companies. Source: RAND study cited in selectsoftwarereviews.com/blog/employee-wellness-statistics and multiple aggregators.

IMPACT: The 65% participation rate target in strategy.md O3 is aspirational and should be treated as a steady-state goal, not a launch expectation. RAND's baseline applies to physical wellness challenges (step counts, biometric screenings), which are different from Brio's simpler pulse check-ins (1-3 questions). The gap between the two formats is UNRESOLVED. Initial participation target should be set lower (aim for 40%, celebrate 65%) to avoid the operator feeling the product failed.

---

## Killed Claims

**[K1] Pre-check-in disclosure and minimum-N threshold alone are sufficient to address the small-team identification risk.**
Killed by: SHRM on timing-based inference; multiple sources on small-team identifiability.

WHAT: SHRM specifically documented that "supervisors could cross-reference survey timing with employee rosters to identify respondents" even without demographic data. In a 12-person team that meets in the same office, a manager who knows that exactly 5 people responded on Tuesday at 2pm can potentially narrow down who those 5 were. The minimum-N threshold prevents the score from showing until 5 respond, but it does not prevent inference from: (a) response timing if the manager can observe when employees are on their phones, (b) knowing that certain employees are "types" who would participate, (c) patterns across multiple check-in cycles that narrow identity over time. This is a distinct risk layer not addressed by the threshold alone. Source: shrm.org/topics-tools/news/employee-relations/how-anonymous-employee-satisfaction-survey.

NOTE: This does NOT kill the core premise (architecture-based privacy is better than policy-based privacy). It adds a nuance: the threshold is a necessary but not sufficient element. The product needs to also: (a) never show managers the response timing or count of who has responded until after the cycle closes, (b) communicate that response timing and individual check-in status are never shared with managers - not just the score.

Flag status: See Step 7 - this affects a specific MVP architecture decision.

---

## What We Still Do Not Know (UNRESOLVED)

**[U1] Whether the operator or the owner discovers Brio first.**
No direct research found on discovery patterns for SMB wellbeing tools specifically. General B2B data: CEOs have final approval in small businesses, but operators often initiate the search. The "who discovers" question determines whether the landing page leads with competence/ease (operator-first) or ROI/risk-reduction (owner-first). Still [?] - this is Open Question Q2 from master-research.md. Remains open.

**[U2] Whether structural/architectural privacy (subscription = no data monetization incentive) outperforms policy-based privacy in actual employee behavior, in a measurable way.**
No controlled study found. The Oura Ring and Apple Health precedents support the concept directionally, but no research compared participation rates or honest response rates in matched groups receiving structural vs. policy-based trust arguments. This remains a hypothesis. It is credible and well-reasoned (aligned incentives are more durable than promises) but not empirically verified for employee surveys.

**[U3] Whether Brio's pulse check-in format (1-3 questions, emoji/slider, no demographic data) experiences the same self-censorship patterns as the traditional engagement surveys studied in the research.**
All self-censorship research is from traditional engagement surveys (10-50 questions, demographic data collection). A shorter format with no demographic questions and a weekly cadence might have meaningfully different trust dynamics. The data pattern could be better (less friction, less identifiability from question set) or worse (more frequent asks feel more like surveillance). No direct data found.

---

## Key Implication

The employee participation premise is neither fully confirmed nor killed. It is REAL and requires active design response: employees do self-censor in employer-run surveys, and the risk is amplified in small teams. But the specific mechanisms that address this (explicit disclosure, minimum-N threshold, no demographic collection, visible architecture) are all well-supported by the literature as directions that help. The net picture is: the premise is sound, the design is on the right path, and the specific concern of timing-based inference in very small teams (under 20 people) is a new nuance that the MVP architecture needs to address explicitly. The 65% participation rate target should be treated as a 90-day steady-state goal, not a launch-day expectation - a 40% initial rate is a more realistic benchmark, and the design should tell operators what to expect so they do not feel the product failed.
