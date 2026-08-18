# Block bank by page type

*Where the composition of a page comes from. Written 5 August 2026, retroactively: the Detail Layer was rolled out without it, so the block lists in `ia/docs/pages/` were reasoned per node rather than per type. This file is the missing rule of origin. From here on, a node of a known type takes its blocks from the bank; a node that needs a block the bank does not have adds it here first, with its parent.*

**Why a bank at all.** Asked for "the blocks of a pricing page" with no source, a model returns the median of everything it has seen: hero, cards, comparison table, FAQ, CTA. That median is not wrong, it is just not ours, and it is invisible as a defect until the wireframes are already built. So composition is read out of two sources rather than recalled.

**Two sources, two different questions, and neither is enough alone.**

- **Competitors** (`research/docs/competitors.md`, re-opened live in this session) answer the domain question: what a company in *our* category actually puts on this page and what keeps a person there. Alone they give the median of the category we set out to beat.
- **Refero** (`refero_search_screens`, searched by page type and job rather than by industry) answers the craft question: how a page of this type is built in best-in-class products outside our category. Alone it gives beautiful patterns that know nothing about our people.

**Four filling rules.**

1. A block with no tracing to a job, an As-Is barrier (`research/docs/cjm-as-is.md`) or an SEO requirement is **not taken**. Same rule as features in the To-Be: an orphan is cut.
2. The **"where we are better"** column is filled, not skipped. Empty on every row means we collected someone else's median, and that is said out loud rather than hidden.
3. **A reference is an input, not an output.** A composition that matches one source one for one is a copy.
4. Every block carries **MVP or LATER**, or a denser IA quietly doubles the work of stages 07 and 08.

**Sources opened in this session (5 August 2026), not recalled from memory:**

| Source | What it gave | Kind |
|--------|--------------|------|
| `wellable.co/pricing/subscriptions` | Pricing: H1, expected-user selector, three plan cards (Essentials / Pro / Enterprise), Compare Features split into five named groups, FAQ, closing demo CTA | domain |
| `organizations.headspace.com/small-business` | SMB landing: outcome-led H1, "Inside the app" proof, "Getting started with your benefit", adjacent-offer block, FAQ, closing CTA. No price anywhere on the page | domain |
| `help.workleap.com/.../workleap-officevibe-anonymity` | The anonymity mechanism stated with real numbers: minimum of 3 answers for scores, minimum of 5 members for written feedback, answers aggregated then converted to scores | domain |
| Refero `pricing page with tiers and transparent per-seat price` | Airtable, Linear, RevenueCat, Shuttle: heading, plan grid, comparison table, FAQ accordion, CTA band, footer. Shuttle shows the two-plan variant that fits a free-plus-one-paid product | craft |
| Refero `team analytics dashboard with score, trend and participation` | Pop Site, Typefully, Contra, Slite: title, time-range control, a row of summary metrics, then a grid of breakdown cards; upgrade prompts live inline as a card | craft |
| Refero `onboarding wizard step with progress and one action` | GlossGenius, Typeform: one question per step, radio options, step indicator, Back and Next in a footer bar, an explicit skip link ("Change later") | craft |
| Refero `survey one question at a time anonymous response` | Hers, Typeform, Navan: progress bar at the very top, one question, stacked option cards, no navigation chrome at all | craft |
| Refero `privacy and security trust page explaining what admins can and cannot see` | around.co/security is the only true product-level trust page: heading, plain paragraph, two-column feature grid, an explicit admin note. Everything else returned was a legal privacy policy | craft |

**Honest gap, named rather than papered over.** Refero has **no** screen of the type "what your employer can and cannot see" as a product surface, and no pre-question privacy disclosure. The closest craft reference is `around.co/security`, which is a marketing security page rather than an in-flow disclosure. The competitor half is worse: the one competitor with a genuinely specific anonymity model (Officevibe) explains it in a **help-centre article**, outside the product. So for node types T3 and T9 the craft half is thin, and the composition is carried by our own research instead: `research/docs/benchmark.md` Mechanism 2 (privacy visible in the UI, not promised in policy) and the mined phase-5 barrier. This is the one place in the bank where "where we are better" is not a comparison but a hole in the category.

---

## T1 - Marketing landing

**Nodes:** 0.0 Home (MVP), 1.5 Category / segment landing (LATER).

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | Outcome headline plus one-sentence subhead | MVP | Main job; As-Is phase 1 "why me, where do I start" | The promise is the operator's competence, not the employee's happiness. Headspace opens on "Invest in a happier, healthier team", which is the owner's language for a product the operator has to run |
| 2 | Primary action: start free, with the free limit stated beside it | MVP | GZ2 demo wall (As-Is phase 3, -4) | The action starts the product. Every hard competitor's primary action books a demo |
| 3 | The privacy mechanism, above the fold, in one sentence | MVP | GZ1; E2; benchmark Mechanism 2 | Nobody in the category puts the anonymity rule on the landing page. Officevibe has the best rule in the category and keeps it in a help article |
| 4 | How it works in three steps, product visual per step | MVP | J6 do not invent the process; SEO H2 | Steps are the operator's actual week, not feature names |
| 5 | What the owner sees and does not see | MVP | J1, J5, E2 | A category first: the limit is shown as a feature |
| 6 | Proof strip: plain-language score example | MVP | E1; O3 barrier "67 percent, is that good?" | We show the interpretation, competitors show the chart |
| 7 | Pricing teaser with the real number | MVP | GZ2 | Headspace, Woliba and Nivati show no price on the landing page at all |
| 8 | FAQ, four questions, privacy first | LATER | SEO; As-Is phases 2 and 5 | Ordered by the reader's fear, not by our sales funnel |
| 9 | Closing action, repeated | MVP | conversion | - |

**Deliberately not taken:** logo wall (an SMB with no HR does not recognise the logos and we have none), testimonial carousel (no customers yet, and a fabricated one would poison the trust the whole product is built on), countdown or urgency band (contradicts principle 5).

## T2 - Pricing

**Nodes:** 1.0 Pricing (MVP).

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | H1 plus a line stating that the price is on this page | MVP | GZ2 | Wellable puts an expected-user selector before any number; the number arrives after work |
| 2 | Three plan cards: Free, Starter, Growth, with per-seat price and the seat limit | MVP | business model; H1 activation | A published number for the SMB band. Woliba requires a calculator, Nivati and Officevibe a demo |
| 3 | One line naming what makes the plan honest: the owner dashboard is the paid feature | MVP | J1, J5, upgrade driver | We say what you are paying for in one sentence rather than in a matrix |
| 4 | Feature comparison, grouped, privacy row first | MVP | E2, J3 | Wellable groups by module (Wellness, Rewards, User, Admin, Support). We group by what the operator has to decide, and privacy leads because it is identical on every plan |
| 5 | The privacy statement that never changes with the plan | MVP | GZ1; subscription-as-privacy (backlog 4) | Nowhere in the category. Aggregation is not a paid feature and saying so is the point |
| 6 | FAQ accordion, four questions | LATER | SEO; objection handling | - |
| 7 | Closing action: start free, no card | MVP | GZ2 | - |

**Deliberately not taken:** monthly / annual toggle (one billing period at MVP; the toggle is a LATER block), enterprise "contact sales" column (there is no sales team and pretending otherwise reintroduces the demo wall we exist to remove).

## T3 - Trust and content page

**Nodes:** 1.1 Security and privacy (MVP), 1.6 Legal (MVP), 1.2 About (LATER).

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | H1 plus one plain paragraph, no legal register | MVP | E2; benchmark Mechanism 2 | around.co/security opens plainly; every other reference returned was a legal policy |
| 2 | The mechanism in four named parts: aggregate only, minimum of 5, no live count, subscription as privacy | MVP | backlog 4; founder decision D1 | The whole differentiator. Officevibe states its numbers only in a help article; Wellable states a 10-response threshold in a support doc |
| 3 | A two-column "what the owner sees / what the owner never sees" table | MVP | J3, E2, J1 | The category states what is protected. We state what is visible, which is the harder and more convincing half |
| 4 | What an employee can do: skip, stop, delete | MVP | GDPR erasure; J3 | - |
| 5 | Compliance note, honest about what is not claimed | MVP | ADA, GINA, HIPAA-adjacent boundaries | We name the boundary rather than badge-dropping SOC 2 |
| 6 | Link out to the legal documents, once | MVP | legal | The mechanism is on the page; the policy is the footnote. The category does the reverse |

## T4 - Auth form

**Nodes:** 2.0 Sign up, 2.1 Log in, 2.2 Magic-link sent, 2.3 Invalid or expired link, 2.4 Reset password (all MVP).

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | One-line context: what this account is for | MVP | As-Is phase 3 friction | - |
| 2 | The form: the fewest fields that can work, no credit card | MVP | GZ2; H1 activation | - |
| 3 | Primary action, one only | MVP | conventions: one main action | - |
| 4 | The alternative route (magic link, or the other of log in / sign up) | MVP | J4 low effort | - |
| 5 | Grey brand panel carrying the privacy sentence | MVP | GZ1 | The reassurance sits where the decision is made, not one click away |
| 6 | Error, loading and sent states as their own pages | MVP | IA States | - |

## T5 - Guided wizard step

**Nodes:** 3.0 Company setup, 3.1 First program confirm, 3.2 Invite team, 3.3 Invite-send error (all MVP).

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | Step indicator with the real count | MVP | E1; under-5-minute budget | GlossGenius and Typeform both show progress; we also state the time budget, because the barrier is "how long will this take me" |
| 2 | One question or one action per step | MVP | J6; GZ4 | Same as the craft references, and it is the right answer |
| 3 | The reason this step exists, one line under the question | MVP | E1 competence | The references ask; they do not explain why. For a first-time operator the reason is the product |
| 4 | Options as radio cards, never a bare select | MVP | Priya low confidence | - |
| 5 | A pre-selected default with its rationale ("chosen for a team of your size") | MVP | backlog 2, opinionated onboarding | The whole guided-engine promise. Every craft reference leaves the user to choose unaided |
| 6 | Footer bar: Back, primary Next, and an honest skip | MVP | J4 | "Change later" from GlossGenius, kept because it removes the fear of a wrong permanent choice |
| 7 | Confirmation of what was just done, on the next step | MVP | E1 | - |

## T6 - Read surface (the aggregate pulse)

**Nodes:** 4.0 Dashboard, 4.1 Team pulse detail, 4.2 Threshold alert detail, 9.0 Owner dashboard, 9.2 Monthly digest (all MVP).

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | The reading in plain words, as the largest element | MVP | E1; GZ3 "67 percent, is that good?" | Every craft reference leads with the number: Pop Site, Typefully and Contra all open on a metric row. We lead with its meaning and demote the number |
| 2 | The number, second, with its period | MVP | J1 | - |
| 3 | One suggested next action | MVP | E1; backlog 5 | Nothing in the reference set proposes an action. This is the interpretive layer made visible |
| 4 | Trend over time, compact | MVP | J1, J2 | - |
| 5 | Participation as a share, never as a list of names | MVP | J3, E2 | The structural difference: the reference dashboards drill into individuals by design |
| 6 | The privacy mini: aggregate only, minimum of 5 | MVP | GZ1 | Present on the operator's own screen, so the mechanism is proof for the buyer too, not only for the employee |
| 7 | Alert banner when the threshold fired | MVP | J2; DX1 one-tap fix | - |
| 8 | Pre-minimum-N state that explains rather than shows an empty chart | MVP | minimum-N; DE1 | The reference set treats an empty state as a missing chart. Ours is the mechanism working as promised, and it says so |
| 9 | Upgrade prompt, inline as a card, never as a modal | LATER | H5 conversion | Taken from RevenueCat and Contra, which keep the prompt inside the content instead of blocking the read |

## T7 - List and detail

**Nodes:** 5.0 Program library, 5.1 Program detail / manage, 5.2 Check-in setup, 6.0 Team roster, 6.1 Resend or manage invite (all MVP).

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | Title plus one line stating what this list decides | MVP | E1 | - |
| 2 | The items as cards, each with the one fact that drives the choice | MVP | Main job, J6 | Programs are described by what the team will be asked to do, not by a category badge |
| 3 | Curation note: why these and not a catalogue of two hundred | MVP | J6; backlog 2 | The category sells breadth (Wellable lists 40+ challenge types). We sell that someone already chose |
| 4 | Filter or search only when the list is long enough to need it | LATER | - | Not taken at MVP: a curated library of 3 to 5 does not need a filter, and adding one advertises a catalogue we deliberately do not have |
| 5 | Empty, loading and error states as their own pages | MVP | IA States; MS4 | - |
| 6 | On detail: what happens next and when, before any settings | MVP | E1 | - |
| 7 | On roster: participation as a count, with no per-person answer column ever | MVP | J3, E2, D1 | The block that cannot exist in a competitor built on manager drill-down |

## T8 - Settings section

**Nodes:** 8.0 Settings shell, 8.1 Plan, 8.2 Privacy center, 8.3 Notifications, 8.4 Account, plus 7.0 to 7.3 for the share and upgrade surfaces (all MVP).

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | Section nav, flat, no nesting | MVP | three-tap rule | - |
| 2 | One group of settings per screen, each with its consequence stated | MVP | E1 | A setting says what changes for the team, not only what it toggles |
| 3 | Privacy center repeats the mechanism verbatim, not a summary of it | MVP | GZ1; DX2 | One wording everywhere. A paraphrase would be a second edition of the promise |
| 4 | Destructive actions isolated, with what is deleted named | MVP | GDPR erasure | - |
| 5 | Plan block states the seat count and what the next plan adds | MVP | H5 | - |

## T9 - Linear task flow (the employee check-in)

**Nodes:** 10.0 to 10.6 (all MVP). The one flow with no product navigation at all.

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | Progress at the very top, before anything else | MVP | J4 under 30 seconds | Straight from Hers and Typeform: the reader's first question is how long this takes |
| 2 | The pre-question disclosure, its own screen, every cycle | MVP | GZ1, low point -4; backlog 4 | **The block the category does not have.** Officevibe explains anonymity in a help article; Wellable in a support doc. Nobody puts it in front of question one |
| 3 | One question per screen, options as large cards | MVP | J4 | - |
| 4 | No live count, anywhere in the flow | MVP | founder decision D1 | Deliberately an absent block, and it is recorded here so that nobody adds it back as a nicety |
| 5 | No global navigation, no tab bar, no footer links | MVP | J4; conventions | - |
| 6 | Thank-you that states what happens to the answer, not gratitude | MVP | E2; voice P3 | The reference set thanks the respondent. We tell them where the answer went |
| 7 | Expired, already-submitted and submit-error as their own pages | MVP | MS1; IA States | - |

## T10 - System state

**Nodes:** 11.0 404, 11.1 500, 11.2 Maintenance (LATER), 11.3 Cookie consent, 11.4 Toast.

| # | Block | MVP | Traces to | Where we are better |
|---|-------|-----|-----------|---------------------|
| 1 | What happened, in one plain sentence | MVP | voice P1 | - |
| 2 | The one way back that is actually useful from here | MVP | DE3 no red dead-ends | - |
| 3 | No apology theatre, no illustration of a broken robot | MVP | voice P5 forbidden | - |
| 4 | Cookie consent: reject is as easy as accept | MVP | GDPR; E2 | Consistent with a product whose whole claim is that it does not harvest |

---

## Coverage check

Every one of the 54 nodes belongs to exactly one type: T1 has 2 nodes, T2 has 1, T3 has 3, T4 has 5, T5 has 4, T6 has 5, T7 has 5, T8 has 9, T9 has 7, T10 has 5, and the 6 global components (0.1 Navigation, 0.2 Footer, 0.3 Privacy disclosure, 0.4 Program card, 0.5 Dialog shell, 0.6 Canonical lists) are the shared parts those types compose from, not a type of their own. Two nodes sit across types and take the union: 0.0 Home is T1 and 7.0 Share with owner is T8 with one block borrowed from T6 (the reading, so the operator shares meaning rather than a number).

**What this bank changes if it is used again.** Nine of the ten types carry at least one block that no source proposed and that our own research required: the privacy mechanism above the fold (T1), the plan-invariant privacy statement (T2), the "what the owner never sees" table (T3), the reason line and the justified default (T5), the reading before the number and the explaining empty state (T6), the participation count with no name column (T7), the verbatim repeat rather than a paraphrase (T8), and the pre-question disclosure plus the absent live count (T9). That list is the answer to whether the bank was worth building: without it those blocks are the ones a median composition drops first, because no competitor has them to copy.
