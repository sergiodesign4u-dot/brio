# Benchmark - Trust and Privacy (Aggregate Insight Without Surveilling the Individual)

*Phase 4 - this is the single most strategically important dimension for Brio.*

---

## 1. Evaluation Criteria (scale 1 to 5)

| # | Criterion | Description |
|---|-----------|-------------|
| C1 | **Clarity of what the owner/employer can and cannot see** | Does the product clearly and visibly state - on a product or help page, not just in a privacy policy - exactly what aggregated data the employer sees and what individual data they never see? |
| C2 | **Anonymity threshold: communicated and specific** | Is there a specific minimum-N rule before aggregate data is shown (e.g. "scores only appear when 5+ people have responded")? Is this communicated to employees, not just configured by admins? |
| C3 | **Small-team edge case honesty** | Does the product acknowledge that anonymization can still expose individuals in small groups (e.g. 3 people in a team, 2 respond - the third is identifiable by absence)? Does it have a mechanism to address this? |
| C4 | **Transparency of data use and consent** | Is the data use explained in plain language before participation? Is consent opt-in (not implied through service use)? Is the purpose of data collection clearly stated? |
| C5 | **Individual experience stays private** | Is individual participation (who responded vs. who didn't) hidden from admins? Are individual scores, responses, or trends inaccessible to anyone above the employee? |
| C6 | **Tone of team wellbeing reporting** | Does the product report team health in a way that feels honest, useful, and non-judgmental - rather than clinical, corporate, or surveillance-flavored? |
| C7 | **Opt-in vs. opt-out framing** | Is data sharing and participation actively chosen by the employee, or is it the default that employees must actively resist? |
| C8 | **Privacy visible in the product UI** | Does privacy appear as a visible product element (a persistent indicator, a pre-survey disclosure, a dashboard label) - or does it exist only in a policy document employees never read? |

---

## 2. Products Evaluated

Five best-in-class products from outside the direct competitor set, chosen because they each handle sensitive aggregate-vs-individual data in a meaningful way.

| Product | Category | Why chosen |
|---------|----------|------------|
| Culture Amp | Employee survey platform (enterprise) | Most detailed publicly documented anonymity threshold architecture in the category. Three-tier indirect identification protection. |
| Oura Ring (for Organizations) | Wearable health tracking (B2B tier) | Explicitly opt-in employer data layer, business-model-as-privacy-argument, DoD isolation case study. Source: ouraring.com, organizations.ouraring.com |
| Apple Health | Consumer health data platform | Gold standard for privacy-as-product-identity. Privacy Nutrition Labels, on-device processing, "not even Apple can access" framing. Source: apple.com/health, apple.com/privacy |
| Typeform | Anonymous survey tool (SMB/enterprise) | Widely used for "anonymous" surveys - but privacy is configuration, not architecture. Included as a cautionary case. Source: typeform.com |
| Limeade (now WebMD Health Services) | Employee wellbeing platform | Employer-as-data-controller model. Represents the anti-pattern Brio is designed to replace. Source: limeade.com |

---

## 3. Scores

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
| **Total (of 40)** | **33** | **32** | **35*** | **14** | **11** |

*Apple Health scored N/A on C2 and C3 because it has no employer/group aggregation layer - it is individual-only. Scores for those criteria excluded from total (max 30 for Apple).*

---

## 4. Key Observations Per Product

**Culture Amp (33/40)**
The most directly applicable model for Brio. Distinguishes between "confidential" (attributed to an employee record but not shown individually) and "anonymous" (not linked to any identity) - and tells employees which type a survey is before they start. The three-tier indirect identification protection (hiding the "next smallest group" to prevent inference attacks) is the most sophisticated small-team protection in the category. The gap: the employer can configure the minimum threshold, which means a low-trust employer could set it to 2. Brio should make the threshold non-configurable.
Source: support.cultureamp.com/en/articles/7048386-confidentiality-protections-in-reporting

**Oura Ring (32/40)**
The business-model-as-privacy-argument is the key differentiator. "We are subscription-funded - we have no financial incentive to monetize your health data" is a structural trust signal, not a promise. The employer-buys-ring-but-cannot-see-data model directly maps to Brio's challenge: the owner pays but does not receive individual data. The gap: enterprise de-identification threshold rules are not publicly documented, which leaves a transparency question for sophisticated buyers.
Source: ouraring.com/blog/health-data-privacy, organizations.ouraring.com

**Apple Health (35/30 - N/A on group criteria)**
The benchmark for privacy-as-product-identity. Privacy is visible in the UI (Privacy Nutrition Labels, App Tracking Transparency prompts, Privacy Reports dashboards) not only in policy documents. The "not even Apple can access your information" framing is the trust ceiling Brio should aspire to: "not even Brio can see individual responses." The individual-only architecture means Apple does not face the small-group inference problem - but the UI mechanisms (visible indicators, granular permission prompts, Safety Check for auditing all permissions) translate directly to Brio's design.
Source: apple.com/privacy/features, apple.com/legal/privacy/data/en/health-app

**Typeform (14/40)**
The cautionary case. Surveys are described as "anonymous by default" but IP addresses are collected unless the admin manually disables them. Individual responses are viewable by account holders. No minimum-N threshold, no small-group protection, no respondent-facing privacy indicator. Privacy is a configuration option left entirely to the employer - exactly the failure mode Brio must architecturally prevent. Naming something "anonymous" while the admin can see individual responses is a trust breach when employees discover it.
Source: typeform.com/guides/anonymous-survey

**Limeade / WebMD Health Services (11/40)**
The anti-pattern. The employer is legally defined as the "data controller," which means the employer - not the product - decides what data flows where. The privacy policy explicitly states that employee data (including sensitive health information) can be disclosed to health plans "at the employer's direction." A 20-person group minimum exists in analytics but is not communicated to employees on any public-facing surface. This is the trust model that erodes employee participation: employees who suspect surveillance stop giving honest responses, which destroys the signal quality the employer was trying to obtain.
Source: limeade.com/privacy.aspx

---

## 5. Top 3 Mechanisms to Carry Into Brio's MVP

### Mechanism 1 - The Indirect Identification Protection Rule (from Culture Amp)

**What it is exactly:** When a group has fewer than the minimum-N respondents, their data is hidden. Additionally, the "next smallest group" in the same reporting slice is also hidden - to prevent an admin from inferring the hidden group's answer by deduction. Documented publicly at support.cultureamp.com/en/articles/7048386-confidentiality-protections-in-reporting.

**Where to use it in Brio:** Every pulse check-in aggregation and every program participation rate. The owner dashboard never shows data for a team segment below the threshold. The next-smallest-group rule applies when a company has sub-teams (e.g. engineering has 4 people, marketing has 6 - if the threshold is 5, marketing data hides to prevent inference about engineering).

**Why it works (the psychological mechanism):** Employees who trust that their individual answer cannot be inferred - even by mathematical deduction - participate more honestly. The mechanism addresses the "I'm the only woman on this team, so my 'women in the team' aggregate is just my answer" problem, which is the most common reason minority-group employees distrust anonymous surveys. Demonstrating awareness of this problem, in plain language, builds more trust than any privacy policy.

**Non-configurable in Brio:** Culture Amp allows employers to set the threshold. Brio should not. The minimum threshold (assumption: 5, to be validated with legal counsel) is fixed by the product, not by the employer. This removes the trust vector.

---

### Mechanism 2 - Privacy Visible in the Product UI, Not Just in a Policy (from Apple Health)

**What it is exactly:** Apple surfaces privacy as a visible, interactive element in the product UI: Privacy Nutrition Labels appear before app download, App Tracking Transparency prompts appear before any cross-app tracking begins, Privacy Reports in Safari show a live dashboard of blocked trackers. Privacy is a thing you can see and interact with, not a document you are expected to have read.
Source: apple.com/privacy/features

**Where to use it in Brio:**
- On the owner dashboard: a persistent, visible label stating "Scores shown only when 5+ team members have responded. Individual responses are never visible here." Not in a tooltip - in the UI itself, near every data visualization.
- Before each employee check-in: a one-line pre-check-in disclosure (not a modal, not a policy link) stating "Your answer joins the team's anonymous score. [Company name] sees only the team total, never your response."
- On the operator setup screen: a "what your owner can see" explainer showing the exact view the owner will have, demonstrating the privacy boundary through the product itself.

**Why it works (the psychological mechanism):** Repeated, contextual privacy communication trains trust over time. Seeing the same honest statement in the same place every week builds a behavioral expectation: "this is how it works, consistently." One-time consent flows are forgotten. Persistent UI indicators are not.

---

### Mechanism 3 - Business Model as Privacy Architecture (from Oura Ring)

**What it is exactly:** Oura publicly states that their subscription revenue model is a structural privacy guarantee - not a promise, but a financial architecture. "Our subscription model allows us to make significant investments in data security and privacy without the financial pressure to monetize your data." Employer data access requires employee opt-in; provision of the ring does not grant data access.
Source: ouraring.com/blog/health-data-privacy

**Where to use it in Brio:** On the homepage and pricing page, in one sentence: "Brio earns revenue from subscriptions only. We have no financial reason to sell or analyze individual employee data - and architecturally, we cannot." This is a first-principles trust argument that pre-empts the question sophisticated buyers (and skeptical employees) will ask. It is more credible than a promise because it explains the incentive structure.

**Why it works:** Trust arguments based on aligned incentives are more durable than trust arguments based on goodwill. "We won't do X because we promise not to" is weaker than "we won't do X because doing X would hurt our business model." Employees and owners who understand the business model understand why the privacy is real.

---

## 6. One Mechanism That Will Not Work for Brio's Context

### Opt-out Privacy Consent (Typeform / Limeade pattern)

**What it is:** Privacy protection that requires the employee to actively refuse participation, or requires the admin to manually configure anonymity settings. In Typeform: IP collection is on by default, the admin must turn it off. In Limeade: consent is granted through service use, employees must actively opt out of tracking they may not know exists.

**Why it will not work for Brio:** Brio's employee base is the weakest power position in the product ecosystem. They did not choose Brio, their employer did. They may not feel able to opt out of employer-run wellbeing programs without signaling disengagement. An opt-out privacy model in this power dynamic is not meaningful consent - it is coercion with extra steps. Beyond ethics, it is strategically counterproductive: employees who feel monitored rather than supported give dishonest check-in responses, which corrupts the aggregate signal the owner is paying for. The whole product fails. Brio's privacy model must be opt-in for sharing (not for participation), always-on for protections, and non-configurable by the employer.

---

## Screens Captured

- research/screens/cultureamp-homepage.png
- research/screens/oura-homepage.png
- research/screens/apple-health.png
- research/screens/typeform-homepage.png

*[? behind login] - Culture Amp dashboard, Oura for Organizations platform admin view, Limeade platform.*

---

## Sources

- https://support.cultureamp.com/en/articles/7048386-confidentiality-protections-in-reporting (visited June 2026)
- https://support.cultureamp.com/en/articles/8278553-unattributed-survey-guide-for-participants (visited June 2026)
- https://www.cultureamp.com/data-privacy (visited June 2026)
- https://ouraring.com/blog/health-data-privacy/ (visited June 2026)
- https://organizations.ouraring.com/ (visited June 2026)
- https://ouraring.com/privacy-policy (visited June 2026)
- https://www.apple.com/privacy/features/ (visited June 2026)
- https://www.apple.com/legal/privacy/data/en/health-app/ (visited June 2026)
- https://www.typeform.com/guides/anonymous-survey (visited June 2026)
- https://limeade.com/privacy.aspx (visited June 2026)
