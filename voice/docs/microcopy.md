# Microcopy inventory (Voice, Stage 05, Step 1)

*Every string of product text in the wireframe prototype, in one table. This is a transcription of what exists today, not new copy. By the end of the Voice stage this file becomes the source of truth: each rewritten line gets a "was" / "now" pair, and no string ships that is not on this table.*

*Scope of this step: collect all interface text (Step 1), then mark where screens say the same thing in different words, where the same action carries different labels, where AI-cliche or cheerful tone crept in, and which strings are placeholders. Nothing is rewritten here. The rewrite starts at Step 6.*

## How to read this file

- **Language.** The product ships in English (every wireframe is `lang="en"`), so the strings below, the dictionary, and the rewrite are all in English. These are real interface lines, not descriptions of them. Internal rubric and notes are in English too. No em dash anywhere in this file: commas, periods, or a spaced hyphen.
- **Source.** Text was read verbatim from the 99 screen and state files in `wireframes/` (the hub `index.html` is not a product screen and is excluded). The shared app shell (top nav, tab bar, footer, wizard step, role banners) is injected by `wireframes/_nav.js`, so it is captured once in Section A and not repeated under every screen.
- **Type** is one of: heading, subhead, eyebrow, body, button, link, field-label, placeholder, helper, state-message, metric, legal, list-item, nav-pill, status-badge, program-name, program-desc, pulse-read, interpretation, act-label, privacy-strip, privacy-disclosure, question, scale-label, danger-confirm, meta-description.
- **Note** carries: `UGC` (user content or illustrative identity, not rewritten, see Section D), `illustrative` (a stand-in number or record, style is ours but the value is fake), `placeholder-attr` (greyed hint text authored by the product), `pending` (prototype stub awaiting final copy), or a short divergence hint.

---

## Section A. Global shell text (rendered once from `_nav.js`)

*Injected into every matching screen by `BRIO_WF.render()`. Change it here in `_nav.js`, every screen follows. These strings are canon candidates for Step 3.*

| Shell | Zone | Type | Text | Note |
|-------|------|------|------|------|
| all | brand | heading | Brio | wordmark, every shell |
| operator | app tab | nav-pill | Dashboard | job tab 1 |
| operator | app tab | nav-pill | Programs | job tab 2 |
| operator | app tab | nav-pill | Team | job tab 3 |
| operator | app tab | nav-pill | Owner | job tab 4 |
| operator | app bar | link | Settings | utility |
| operator | app footer | link | Privacy | to security-privacy |
| operator | app footer | link | Help | to help |
| public | top nav | nav-pill | Pricing | |
| public | top nav | nav-pill | Security | |
| public | top nav | nav-pill | Help | |
| public | top nav | link | Log in | |
| public | top nav | button | Start free | primary CTA |
| public | footer trust | privacy-strip | Aggregate only. Brio never shows any individual's answers. | |
| public | footer col | subhead | Product | column title |
| public | footer col | link | Pricing | |
| public | footer col | link | Security and privacy | |
| public | footer col | subhead | Company | column title |
| public | footer col | link | About | |
| public | footer col | link | Contact | |
| public | footer col | subhead | Resources | column title |
| public | footer col | link | Help and FAQ | |
| public | footer col | subhead | Legal | column title |
| public | footer col | link | Privacy Policy | |
| public | footer col | link | Terms | |
| public | footer col | link | Cookie settings | |
| wizard | app bar | eyebrow | Step 1 of 3 | injected per step (also present in body, see cluster 3) |
| auth | app bar | link | Log in | default auth-bar label |
| owner | app bar | eyebrow | Owner view, aggregate only | role banner |
| employee | app bar | eyebrow | Your answers are anonymous | role banner |

---

## Section B. Full inventory by cluster

### Cluster 0. Global shell and home

#### 0.0 Home

*Three states of one page: guest, returning operator, owner. The "How Brio works" cards and the Programs tag row repeat verbatim across states; listed once under the guest base, variants noted.*

| State (file) | Zone | Type | Text | Note |
|--------------|------|------|------|------|
| home.html (guest) | Head | meta-description | Run real employee wellbeing at a small company with no HR. Brio gives the owner honest team-level proof and never shows any individual's answers. | |
| home.html | Hero | eyebrow | Employee wellbeing, without surveillance | |
| home.html | Hero | heading | Employee wellbeing for teams with no HR | H1 |
| home.html | Hero | body | Brio is employee wellbeing software for small companies that have no HR team. Whoever got handed people work, an office manager, an ops lead, or the founder, gets a guided way to run real wellbeing programs. The owner gets honest proof it is working at the team level. Individual answers are never shown to anyone, because the privacy boundary is the product, not a setting you can switch off. | |
| home.html | Hero | button | Start free | |
| home.html | Hero | button | See how privacy works | |
| home.html | How Brio works | heading | How Brio works | |
| home.html | Card 1 | subhead | 1. Pick a program | |
| home.html | Card 1 | body | Brio recommends a first program by your team size. You launch it, you do not build it. | |
| home.html | Card 2 | subhead | 2. The team checks in | |
| home.html | Card 2 | body | A weekly check-in takes under 30 seconds. No account is needed for the first one. | |
| home.html | Card 3 | subhead | 3. You read the pulse | |
| home.html | Card 3 | body | A plain-language score, what it means, and one next step. Aggregate only, never who. | |
| home.html | Privacy strip | heading | Your team's privacy is the product | |
| home.html | Privacy strip | body | Aggregate only. Brio never shows any individual's answers, to you or to the owner. No score appears until at least 5 people have answered, and there is no live count. See exactly what the owner can and cannot see. | |
| home.html | Privacy strip | link | See exactly what the owner can and cannot see | |
| home.html | Programs | heading | Programs for every kind of wellbeing | |
| home.html | Programs tags | list-item | Mental health | |
| home.html | Programs tags | list-item | Physical | |
| home.html | Programs tags | list-item | Financial | |
| home.html | Programs tags | list-item | Social | |
| home.html | Pricing teaser | heading | Start free, upgrade when you are ready | |
| home.html | Pricing teaser | body | Free for up to 10 people. Paid plans add the owner dashboard and the full program library. See pricing. | |
| home.html | Pricing teaser | link | See pricing | |
| home.html | FAQ | heading | Questions people ask | |
| home.html | FAQ row 1 | list-item | Can my manager see my answer? | |
| home.html | FAQ row 2 | list-item | Do employees need an account? | |
| home.html | FAQ row 3 | list-item | What does the owner actually see? | |
| home.html | FAQ rows | link | Read | repeated per row |
| home.html | Final CTA | heading | Start in five minutes | |
| home.html | Final CTA | body | No credit card. Free for up to 10 people. | |
| home.html | Final CTA | button | Start free | |
| home-operator.html | Hero | eyebrow | Welcome back, Priya | UGC (injected operator name) |
| home-operator.html | Hero | body | You are signed in. Jump back to your team pulse, or keep reading about how Brio works. Individual answers are never shown to anyone, because the privacy boundary is the product, not a setting you can switch off. | |
| home-operator.html | Hero | button | Go to your dashboard | |
| home-operator.html | Final CTA | heading | Ready when you are | tone: cutesy candidate |
| home-operator.html | Final CTA | body | Your team pulse is one tap away. | |
| home-operator.html | Final CTA | button | Go to your dashboard | |
| home-owner.html | Hero | eyebrow | Welcome back | |
| home-owner.html | Hero | body | You are signed in as an owner. See your team's aggregate read, or keep reading about how Brio works. You see a team-level signal only, never any individual's answers. | |
| home-owner.html | Hero | button | Go to the owner dashboard | |
| home-owner.html | Card 1 | body | Brio recommends a first program by team size. Your operator launches it, no building required. | owner variant |
| home-owner.html | Card 3 | body | One number, a trend, and a plain-language reading. Aggregate only, never who. | owner variant; "reading" vs "pulse" |
| home-owner.html | Privacy strip | body | Aggregate only. Brio never shows any individual's answers, to you or to your operator. No score appears until at least 5 people have answered. See exactly what you can and cannot see. | owner variant |
| home-owner.html | Privacy strip | link | See exactly what you can and cannot see | owner variant of the operator link |
| home-owner.html | Final CTA | heading | See where your team stands | |
| home-owner.html | Final CTA | body | A two-minute read, once a month. | |
| home-owner.html | Final CTA | button | Go to the owner dashboard | |

### Cluster 1. Public marketing and acquisition

#### 1.0 Pricing (pricing.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Head | meta-description | See Brio's simple per-seat pricing for employee wellbeing at a small company with no HR. Start free, upgrade for the owner dashboard, and individual answers stay private. | |
| Hero | eyebrow | Pricing | |
| Hero | heading | Simple pricing for team wellbeing | H1 |
| Hero | body | Brio has simple, transparent pricing for employee wellbeing, with no demo and no sales call. Start free for up to 10 people with one program and a weekly check-in. Upgrade to Starter for the full program library, trends, and the owner dashboard, the honest team-level proof an owner wants. Pricing is per seat, and the subscription pays for aggregate insight: individual answers are never shown or sold, because the privacy boundary is the product. | |
| Hero | button | Start free | |
| Hero | helper | No demo, no card. | |
| Compare | heading | Compare plans | |
| Card Free | subhead | Free | plan-name |
| Card Free | metric | $0 | |
| Card Free | metric | / month | |
| Card Free | eyebrow | Hypothesis | pricing hedge, repeated on every card |
| Card Free | list-item | ✓ Up to 10 people | |
| Card Free | list-item | ✓ One program, weekly check-in | |
| Card Free | list-item | ✓ Aggregate score for the operator | |
| Card Free | list-item | × No owner dashboard | |
| Card Free | button | Start free | |
| Card Starter | subhead | Starter | plan-name |
| Card Starter | eyebrow | Recommended | |
| Card Starter | metric | $5 | |
| Card Starter | metric | / seat / month | |
| Card Starter | list-item | ✓ Up to 50 people | |
| Card Starter | list-item | ✓ Full program library and trends | |
| Card Starter | list-item | ✓ Owner dashboard, aggregate only | |
| Card Starter | list-item | ✓ Custom nudge scheduling | |
| Card Starter | button | Start free | |
| Card Growth | subhead | Growth | plan-name |
| Card Growth | metric | $9 | |
| Card Growth | metric | / seat / month | |
| Card Growth | list-item | ✓ 50 to 200+ people | |
| Card Growth | list-item | ✓ Multi-team aggregation | |
| Card Growth | list-item | ✓ Advanced trend analytics | |
| Card Growth | list-item | ✓ Integrations and priority support | |
| Card Growth | button | Start free | |
| Compare | helper | All prices are hypotheses, benchmarked against competitor pricing. Pricing is per seat and billed monthly. | |
| Owner-paid | heading | Why the owner dashboard is paid | |
| Owner-paid | body | Free gives you, the operator, the team aggregate. The owner dashboard, the honest proof of value your owner wants, is the paid unlock. You upgrade to give the owner an aggregate-only read, never a per-person one. | |
| Privacy strip | heading | Your team's answers stay private | |
| Privacy strip | body | The subscription pays for the aggregate. Individual answers are never shown or sold, because the privacy boundary is the product, not a setting. See exactly what the owner can and cannot see. | |
| Privacy strip | link | See exactly what the owner can and cannot see | |
| FAQ | heading | Pricing questions | |
| FAQ row 1 | list-item | Is there really a free plan? | |
| FAQ row 2 | list-item | What counts as a seat? | |
| FAQ row 3 | list-item | Can I change or cancel anytime? | |
| FAQ rows | link | Read | repeated per row |
| FAQ | helper | More answers in the Help center. | |
| FAQ | link | Help center | |
| Final CTA | heading | Start free in five minutes | |
| Final CTA | body | No credit card. Free for up to 10 people. | |
| Final CTA | button | Start free | |

#### 1.1 Security and privacy (security-privacy.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Head | meta-description | How Brio keeps employee wellbeing private: aggregate-only results, no score until 5 people answer, no live count, and never an individual response. See how it works. | |
| Hero | eyebrow | Security and privacy | |
| Hero | heading | Your team's answers stay private | H1 |
| Hero | body | Brio is built so that no one, not a manager and not the owner, ever sees an individual employee's answer. Every response joins a team aggregate, and no score is shown until at least five people have answered, so a single reply cannot be picked out. While a check-in is open, no one sees a running count. The owner sees a team wellbeing score, its trend, and how many people took part, never who said what. This is the product, not a setting: the subscription pays for the aggregate, and individual data is never shown or sold. | |
| Hero | button | Start free | |
| Hero | button | Read the Privacy Policy | |
| How it works | heading | How the aggregate-only model works | |
| Step 1 | subhead | You answer | |
| Step 1 | body | Your answer is submitted anonymously and joins a team aggregate. | |
| Step 2 | subhead | It aggregates | |
| Step 2 | body | No score appears until at least 5 people have answered, so no one stands out. | |
| Step 3 | subhead | The owner reads | |
| Step 3 | body | The owner sees a team number and a trend, never an individual. | |
| How it works | helper | If fewer than 5 people answer, no results are shown at all. On a small team, that is the point: no one can be singled out. | |
| Five promises | heading | The five things we promise | |
| Promise 1 | list-item | 1 Aggregate only. No one, not a manager and not the owner, ever sees an individual answer. | |
| Promise 2 | list-item | 2 A minimum of 5. No score is shown until at least 5 people have answered. | |
| Promise 3 | list-item | 3 No live count. While a check-in is open, no one sees a running tally. | |
| Promise 4 | list-item | 4 Subscription as privacy. The subscription pays for the aggregate; individual data is never shown or sold. | |
| Promise 5 | list-item | 5 What the owner sees. A team score, a trend, and participation, listed in full below. | |
| Can/cannot | heading | What the owner can and cannot see | |
| Can/cannot | subhead | Can see | |
| Can list | list-item | + The team wellbeing score and its trend | |
| Can list | list-item | + How many people took part | |
| Can/cannot | subhead | Cannot see | |
| Cannot list | list-item | × Any individual response, name, or who answered | |
| Cannot list | list-item | × Any group smaller than 5 | |
| FAQ | heading | Privacy questions | |
| FAQ row 1 | list-item | Can my manager see my answer? | |
| FAQ row 1 | body | No. Answers are only ever shown as a team aggregate of at least 5 people. | |
| FAQ row 2 | list-item | What if my team is small? | |
| FAQ row 2 | body | If fewer than 5 answer, no results are shown at all, so no one can be singled out. | |
| FAQ row 3 | list-item | Do you sell my data? | |
| FAQ row 3 | body | No. Individual data is never shown or sold; the subscription pays for the aggregate. | |
| FAQ | helper | More answers in the Help center. | |
| FAQ | link | Help center | |
| Final CTA | heading | Start free in five minutes | |
| Final CTA | body | No credit card. The full Privacy Policy is in the legal documents. | |
| Final CTA | link | legal documents | |
| Final CTA | button | Start free | |

#### 1.2 About (about.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Head | meta-description | Brio helps small companies with no HR run real employee wellbeing without surveillance. Meet the team and the belief behind aggregate-only, privacy-first wellbeing. | |
| Hero | eyebrow | About Brio | |
| Hero | heading | Wellbeing without surveillance | H1 |
| Hero | body | Brio exists because small companies get handed people work with no HR and no playbook, and because wellbeing should never mean watching people. We build employee wellbeing software that is guided enough for a non-expert to run and private by design: individual answers are never shown to anyone, because the privacy boundary is the product, not a setting. We would rather show an owner an honest team signal than a flattering vanity metric. | |
| Hero | button | Start free | |
| Hero | button | Get in touch | |
| Mission | heading | Our mission | |
| Mission | body | Small companies get handed people work with no HR and no training. Someone becomes responsible for wellbeing overnight, an office manager, an ops lead, or the founder. Brio gives that person a guided way to run real wellbeing, and gives the business honest proof it is working, without ever watching a single individual. The privacy boundary is not a feature we added; it is the belief the whole product is built on. | |
| Believe | heading | What we believe | |
| Believe 1 | subhead | Privacy is the product | |
| Believe 1 | body | The operator and owner never see named individuals. Aggregation is structural, not a setting you can switch off. | |
| Believe 2 | subhead | Make the non-expert competent | |
| Believe 2 | body | Every step says what to do next, confirms it was done right, and shows that it mattered. No HR jargon. | |
| Believe 3 | subhead | Honest signals over flattering ones | |
| Believe 3 | body | The owner gets a real team health signal, not a vanity metric. If things trend down, the product says so plainly. | |
| Team | heading | The team | |
| Team | subhead | Team member | UGC (placeholder person, x4) |
| Team | body | Product / Engineering / Design / Support | placeholder roles |
| Team | helper | Names, roles, and photos are placeholders at this stage; real bios arrive with the brand work. | pending |
| Get in touch | heading | Get in touch | |
| Get in touch | body | Questions about Brio, or about the privacy model? Get in touch, or read how privacy works. | |
| Get in touch | link | Get in touch | |
| Get in touch | link | how privacy works | |
| Final CTA | heading | Start free in five minutes | |
| Final CTA | body | No credit card. Free for up to 10 people. | |
| Final CTA | button | Start free | |

#### 1.3 Contact / Support (contact.html, -error, -sent)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| contact.html | Head | meta-description | Contact Brio support. Check Help for quick answers, or send a message and we will reply to your email, usually within one business day. | |
| contact.html | Hero | eyebrow | Contact and support | |
| contact.html | Hero | heading | Get in touch | H1 |
| contact.html | Hero | body | Have a question about Brio? Many answers are in Help, from setup to privacy to billing, so it is worth a look first. If you still need us, send a message with the form or email support directly, and we will reply to your email, usually within one business day. Messages here are support requests, not wellbeing data; they are handled separately from the private, aggregate-only check-ins. | |
| contact.html | Check Help | heading | Check Help first | |
| contact.html | Check Help | body | Most answers are in Help, and it is faster than waiting on a reply. Browse the Help center. | |
| contact.html | Check Help | link | Browse the Help center | |
| contact.html | Form | heading | Send us a message | |
| contact.html | Form | field-label | Your name | |
| contact.html | Form | placeholder | Jane Doe | placeholder-attr (illustrative name) |
| contact.html | Form | field-label | Email | |
| contact.html | Form | placeholder | you@company.com | placeholder-attr |
| contact.html | Form | field-label | Message | |
| contact.html | Form | placeholder | How can we help? | placeholder-attr |
| contact.html | Form | button | Send message | |
| contact.html | Form | helper | Name, a valid email, and a message are required. | |
| contact.html | Aside 1 | subhead | Email us directly | |
| contact.html | Aside 1 | body | Prefer email? Reach support at support@brio.example. Exact address pending. | pending (support@brio.example) |
| contact.html | Aside 2 | subhead | When we reply | |
| contact.html | Aside 2 | body | We reply to your email, usually within about one business day. | |
| contact.html | Aside 3 | subhead | A note on privacy | |
| contact.html | Aside 3 | body | Messages here are support requests, not wellbeing data. They are never mixed with the private, aggregate-only check-ins. | |
| contact.html | Reply | body | We aim to reply within about one business day. Exact response times are being finalized. | pending |
| contact.html | Final CTA | heading | Start free in five minutes | |
| contact.html | Final CTA | button | Start free | |
| contact-error.html | Error banner | state-message | Could not send. Please try again, or email us directly at support@brio.example. | |
| contact-error.html | Form | button | Try again | divergence: "Try again" vs "Retry" |
| contact-error.html | Form | button | Email us directly | |
| contact-error.html | Form | helper | Your message is kept as you wrote it. | |
| contact-error.html | Form | placeholder | Priya / priya@acme.co / How do I invite my team? | UGC (prefilled example values) |
| contact-sent.html | Head | meta-description | Your message to Brio support has been sent. We will reply to your email, usually within about one business day. | |
| contact-sent.html | Confirm | heading | Message sent | |
| contact-sent.html | Confirm | body | Thanks for reaching out. We will reply to your email, usually within about one business day. | tone: "Thanks for reaching out" |
| contact-sent.html | Confirm | button | Browse Help | |
| contact-sent.html | Confirm | button | Back to home | |
| contact-sent.html | Confirm | helper | Need to add something? Send another message. | |
| contact-sent.html | Confirm | link | Send another message | |

#### 1.4 Help / FAQ (help.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Head | meta-description | Answers to common Brio questions: getting set up, how privacy works, and billing. Search the help center or contact support if you are still stuck. | |
| Hero | eyebrow | Help center | |
| Hero | heading | How can we help? | H1 |
| Hero | body | The Brio help center answers the questions operators ask most: how to set up your first program and invite your team, how the aggregate-only privacy model protects individual answers, and how plans and billing work. Search for a topic, or browse the groups below. If you are still stuck, contact support and we will reply to your email, usually within one business day. | |
| Search | field-label | Search help | |
| Search | placeholder | Search help | placeholder-attr |
| Search | button | Search | |
| Setting up | heading | Setting up Brio | |
| Setting up 1 | list-item | How do I get started with Brio? | |
| Setting up 1 | body | Sign up, tell us your company size, and Brio pre-selects a first program for you; setup takes about five minutes. | |
| Setting up 2 | list-item | How do I invite my team? | |
| Setting up 2 | body | From the Team tab, share an invite link or a join code; people can take their first check-in without creating an account. | |
| Setting up 3 | list-item | How long does a check-in take? | |
| Setting up 3 | body | Under 30 seconds, one to three quick questions, with no account needed the first time. | |
| Privacy | heading | Privacy and your data | |
| Privacy 1 | list-item | Can my manager see my answer? | |
| Privacy 1 | body | No. Answers are only ever shown as a team aggregate of at least 5 people. | |
| Privacy 2 | list-item | What if my team is small? | |
| Privacy 2 | body | If fewer than 5 answer, no results are shown at all, so no one can be singled out. | |
| Privacy 3 | list-item | Do you sell my data? | |
| Privacy 3 | body | No. Individual data is never shown or sold; the subscription pays for the aggregate. | |
| Privacy | helper | Read the full explainer on how privacy works. | |
| Privacy | link | how privacy works | |
| Billing | heading | Plans and billing | |
| Billing 1 | list-item | Is there a free plan? | |
| Billing 1 | body | Yes. The free plan covers up to 10 people with one active program and a basic weekly check-in. | |
| Billing 2 | list-item | What do I get when I upgrade? | |
| Billing 2 | body | Paid plans add the full program library, trends, and the owner dashboard; pricing is per seat. | |
| Billing 3 | list-item | Can I change or cancel anytime? | |
| Billing 3 | body | Yes, from Settings then Plan; changes take effect from the next billing cycle. | |
| Billing | helper | See the full breakdown on pricing. | |
| Billing | link | pricing | |
| Still | heading | Still need a hand? | |
| Still | body | Did not find your answer? Contact support and we will reply to your email, usually within one business day. | |
| Still | link | Contact support | |
| Final CTA | heading | Start free in five minutes | |
| Final CTA | button | Start free | |

#### 1.5 Category / segment landing (segment-landing.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Head | meta-description | Mental health wellbeing programs for small teams with no HR. Brio runs guided, aggregate-only check-ins, private by design. Start free in five minutes. | |
| Hero | eyebrow | Programs / Mental health | breadcrumb |
| Hero | heading | Mental health programs for small teams | H1 |
| Hero | body | Mental health programs for small teams with no HR: Brio gives you a guided set of mental-wellbeing check-ins, runs them for you on a light weekly cadence, and shows an honest team signal that is aggregate-only, so no one ever sees an individual answer. Start free and run your first program in about five minutes. | |
| Hero | button | Start free | |
| Hero | button | See how privacy works | |
| Included | heading | What is included | |
| Included 1 | list-item | Steady Weeks | program-name |
| Included 1 | helper | Mental health, weekly, one question, under 30 seconds | |
| Included 1 | status-badge | Starter program | |
| Included 2 | list-item | Guided check-in cadence | |
| Included 2 | helper | Brio schedules and runs the weekly check-in for you | |
| Included 2 | status-badge | Included | |
| Included 3 | list-item | Aggregate team pulse | |
| Included 3 | helper | A plain-language score and trend, once at least 5 people answer | |
| Included 3 | status-badge | Included | |
| Included | helper | The full program library across mental, physical, financial, and social wellbeing arrives on paid plans. See pricing. | |
| Included | link | See pricing | |
| Why Brio | heading | Why Brio for mental health programs for small teams | |
| Why 1 | subhead | Private by design | |
| Why 1 | body | Individual answers are never shown to anyone, and no score appears until at least 5 people answer. | |
| Why 2 | subhead | Guided for a non-expert | |
| Why 2 | body | Brio tells you what to run and when, so you do not need HR training to run real wellbeing. | |
| Why 3 | subhead | Low effort for everyone | |
| Why 3 | body | A weekly check-in takes under 30 seconds, and setup takes under five minutes. | |
| Private strip | heading | Private by design | |
| Private strip | body | The subscription pays for the aggregate. Individual answers are never shown or sold, because the privacy boundary is the product. See exactly what the owner can and cannot see. | |
| Private strip | link | See exactly what the owner can and cannot see | |
| Explore | heading | Explore more | |
| Explore | link | Physical wellbeing for small teams | |
| Explore | link | Financial wellbeing for small teams | |
| Explore | link | Social wellbeing for small teams | |
| Explore | link | Pricing | |
| Explore | link | Security and privacy | |
| Explore | link | Home | |
| Final CTA | heading | Start free in five minutes | |
| Final CTA | button | Start free | |

#### 1.6 Legal documents (legal.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Head | meta-description | How Brio handles your data: employee wellbeing answers are aggregate-only, never shown per individual. Read Brio's privacy policy. | |
| Header | eyebrow | Legal | |
| Header | heading | Privacy Policy | H1 |
| Switcher | nav-pill | Privacy Policy | |
| Switcher | nav-pill | Terms of Service | |
| Switcher | nav-pill | Cookie Policy | |
| Header | legal | Last updated: pending legal review | pending |
| TOC | subhead | On this page | |
| TOC | link | What information we collect | |
| TOC | link | How wellbeing answers are handled | |
| TOC | link | How we use information | |
| TOC | link | Your rights | |
| TOC | link | Data retention and security | |
| TOC | link | How to contact us | |
| Collect | heading | What information we collect | |
| Collect | legal | This section will describe the account and company information Brio collects to run the service, and the wellbeing check-in responses collected from employees. | pending |
| Answers | heading | How wellbeing answers are handled | |
| Answers | legal | Employee wellbeing answers are aggregate only. No score is shown until at least five people have answered, there is no live count while a check-in is open, and individual data is never shown to a manager or the owner, and is never sold. | |
| Answers | legal | Consistent with the Security and privacy page; final wording is pending legal review. | pending |
| Use | heading | How we use information | |
| Use | legal | This section will describe how Brio uses account and aggregate information to provide the service, and the lawful basis for processing. | pending |
| Rights | heading | Your rights | |
| Rights | legal | This section will describe your rights of access and deletion, including erasure of individual responses, and GDPR and UK GDPR provisions for European users. | pending |
| Retention | heading | Data retention and security | |
| Retention | legal | This section will describe how long data is retained, data residency, and the security measures that protect it. | pending |
| Contact | heading | How to contact us | |
| Contact | legal | Questions about this policy can be sent to Brio support. See the Contact page for how to reach us. | |
| Contact | link | Contact page | |
| Contact | legal | Final contact details are pending. | pending |
| Cookie card | subhead | Cookie settings | |
| Cookie card | body | You can change your cookie choices at any time. | |
| Cookie card | button | Manage cookie settings | |

*Repeated across cluster 1: every page ends with a "Start free in five minutes" / "No credit card. Free for up to 10 people." / "Start free" final CTA. Canon candidate.*

### Cluster 2. Authentication

*Noindex zone. Every auth page carries the same privacy strip "Aggregate only. Brio never shows any individual's answers." Prefilled example emails (priya@acme.co) are UGC.*

#### 2.0 Sign up (signup.html, -error, -loading)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| signup.html | Header | heading | Start free | H1; same words as public CTA |
| signup.html | Header | subhead | Run real wellbeing for your team, even with no HR. No credit card, and no individual answers are ever shown to anyone. | |
| signup.html | Form | field-label | Work email | |
| signup.html | Form | placeholder | you@company.com | placeholder-attr |
| signup.html | Form | field-label | Password | |
| signup.html | Form | placeholder | At least 8 characters | placeholder-attr; cf reset "At least 12 characters" |
| signup.html | Form | button | Create account | divergence: signup submit vs "Start free" CTA |
| signup.html | Below | link | Email me a link instead | |
| signup.html | Below | legal | By continuing you agree to the Terms and Privacy Policy. | Terms, Privacy Policy inline links |
| signup.html | Below | body | Already have an account? Log in | Log in inline link |
| signup.html | Below | privacy-strip | Aggregate only. Brio never shows any individual's answers. | |
| signup-error.html | Error | state-message | This email already has an account. | inline field error |
| signup-error.html | Error | state-message | Use at least 8 characters. | inline field error |
| signup-error.html | Form | button | Log in instead | CTA swaps from "Create account" |
| signup-error.html | Form | body | priya@acme.co | UGC (prefilled) |
| signup-loading.html | Form | button | Creating account... | busy state |
| signup-loading.html | Form | body | priya@acme.co | UGC (prefilled, disabled) |

#### 2.1 Log in (login.html, -error, -loading)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| login.html | Header | heading | Log in to Brio | H1 |
| login.html | Header | subhead | Welcome back. Pick up where you left off with your team. | |
| login.html | Form | field-label | Work email | |
| login.html | Form | placeholder | you@company.com | placeholder-attr |
| login.html | Form | field-label | Password | |
| login.html | Form | placeholder | Your password | placeholder-attr |
| login.html | Form | link | Forgot password? | |
| login.html | Form | button | Log in | |
| login.html | Below | link | Email me a link instead | |
| login.html | Below | body | New to Brio? Create an account | Create an account inline link; cf signup "Already have an account? Log in" |
| login-error.html | Error | state-message | Your email or password is incorrect. Check both and try again. | |
| login-error.html | Form | body | priya@acme.co / incorrect-password | UGC (prefilled) |
| login-loading.html | Form | button | Logging in... | busy state; cf "Signing you in" below |
| login-loading.html | Below | state-message | Signing you in and taking you to your dashboard. | divergence: "Log in" vs "Sign in" for one action |

#### 2.2 Magic-link sent (magic-link-sent.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | heading | Check your email | H1 |
| Header | subhead | We sent a link to priya@acme.co. Open it to continue. | UGC (email) |
| Body | helper | Open your email app to continue. | |
| Body | helper | The link expires in about 15 minutes. | |
| Body | button | Didn't get it? Resend | contraction "Didn't" |
| Below | link | Use a different email | |
| Below | body | Opened the link already? Continue to your dashboard. | dashboard inline link |

#### 2.3 Invalid or expired link (link-expired.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | heading | This link has expired | H1 |
| Header | subhead | For your security, sign-in links expire after about 15 minutes and can be used only once. | |
| Body | body | Your account is fine and nothing was lost. | reassurance pattern, cf error states |
| Body | button | Request a new link | |
| Below | body | Still stuck? Contact support | Contact support inline link |

#### 2.4 Reset password (reset-password.html, -error, -loading, -success)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| reset-password.html | Header | heading | Set a new password | H1 |
| reset-password.html | Header | subhead | Choose a new password to finish getting back into Brio. | |
| reset-password.html | Form | field-label | New password | |
| reset-password.html | Form | button | Show | reveal toggle |
| reset-password.html | Form | placeholder | At least 12 characters | placeholder-attr; cf signup "At least 8 characters" |
| reset-password.html | Form | field-label | Confirm password | |
| reset-password.html | Form | placeholder | Re-enter your new password | placeholder-attr |
| reset-password.html | Requirements | helper | At least 12 characters | |
| reset-password.html | Requirements | helper | Not a commonly breached password | |
| reset-password.html | Requirements | helper | Both entries match | |
| reset-password.html | Form | button | Set new password | |
| reset-password.html | Below | helper | Setting a new password signs you out on all other devices. | |
| reset-password-error.html | Header | heading | This reset link is no longer valid | H1 |
| reset-password-error.html | Header | subhead | For your security, password-reset links expire after about 15 minutes and can be used only once. | near-dup of 2.3 subhead |
| reset-password-error.html | Body | body | Your account is fine and nothing was lost. | dup of 2.3 |
| reset-password-error.html | Body | button | Request a new link | |
| reset-password-error.html | Below | body | Prefer to sign in another way? Back to log in | Back to log in inline link |
| reset-password-loading.html | Form | button | Setting new password... | busy state |
| reset-password-loading.html | Below | state-message | This finishes on its own, then confirms your new password is set. | |
| reset-password-loading.html | Form | body | correcthorsebatterystaple | illustrative (disabled value) |
| reset-password-success.html | Header | heading | Password updated | H1 |
| reset-password-success.html | Header | subhead | Your new password is set. For your security, you have been signed out on all other devices. | |
| reset-password-success.html | Body | button | Log in | |
| reset-password-success.html | Below | helper | Use your new password to log back in. | |

### Cluster 3. Onboarding wizard

*The "Step X of 3" eyebrow appears both in the body and injected into the app bar by `_nav.js`. Typed company name (Acme Co.) and invited emails are UGC.*

#### 3.0 Company setup (onboarding-company.html, -error, -loading)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| onboarding-company.html | Header | eyebrow | Step 1 of 3 | |
| onboarding-company.html | Header | heading | Set up your company | H1 |
| onboarding-company.html | Header | body | This takes about a minute. Your company size lets Brio recommend the right first program, so you do not have to decide alone. | |
| onboarding-company.html | Form | field-label | Company name | |
| onboarding-company.html | Form | placeholder | Acme Co. | placeholder-attr |
| onboarding-company.html | Form | field-label | Company size | |
| onboarding-company.html | Form | field-label | 10 to 24 people | radio; also 25 to 49 / 50 to 99 / 100 to 200 people |
| onboarding-company.html | Form | button | Continue | |
| onboarding-company-error.html | Header | body | This takes about a minute. Your company size lets Brio recommend the right first program. | divergence: shorter lead than base |
| onboarding-company-error.html | Error | state-message | Could not save. Your details are kept, please try again. | |
| onboarding-company-error.html | Form | button | Try again | divergence: "Try again" vs "Retry" |
| onboarding-company-error.html | Form | body | Acme Co. | UGC (typed) |
| onboarding-company-loading.html | Form | button | Saving... | busy state |
| onboarding-company-loading.html | Form | body | Acme Co. | UGC (typed, disabled) |

#### 3.1 First program confirm (onboarding-program.html, -loading, -error)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| onboarding-program.html | Header | eyebrow | Step 2 of 3 | |
| onboarding-program.html | Header | heading | Your recommended program | H1 |
| onboarding-program.html | Header | body | Based on a team of 10 to 24, Brio suggests starting here. Confirm it, or pick another from the library. | |
| onboarding-program.html | Card | status-badge | Recommended for your size | |
| onboarding-program.html | Card | program-name | Mental health | category |
| onboarding-program.html | Card | program-name | Steady Weeks | |
| onboarding-program.html | Card | program-desc | Weekly check-in, 1 question, runs continuously | |
| onboarding-program.html | Card | program-desc | A gentle weekly pulse on how the team is really doing. You get a plain-language read; no individual answers are ever shown to anyone. | |
| onboarding-program.html | Card | helper | What it runs: one short check-in each week. You see an aggregate read, employees answer in under 30 seconds. | |
| onboarding-program.html | Actions | button | Confirm and continue | |
| onboarding-program.html | Actions | button | Pick another | cf library "Select" / "Browse the library" |
| onboarding-program-loading.html | Header | heading | Finding your program | divergence: H1 differs from resolved "Your recommended program" |
| onboarding-program-loading.html | Header | body | Picking a starting program for a team of 10 to 24. | |
| onboarding-program-error.html | Header | heading | Choose your first program | divergence: third H1 for one node |
| onboarding-program-error.html | State | state-message | Could not pick one automatically | |
| onboarding-program-error.html | State | body | No problem. Choose your first program from the library. Brio still marks the ones that fit a team of 10 to 24. | tone: "No problem." casual |
| onboarding-program-error.html | State | button | Browse the library | |

#### 3.2 Invite team (onboarding-invite.html, -loading)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| onboarding-invite.html | Header | eyebrow | Step 3 of 3 | |
| onboarding-invite.html | Header | heading | Invite your team | H1 |
| onboarding-invite.html | Header | body | Share the link or code, or send email invites. You can always invite more later. | |
| onboarding-invite.html | Join link | field-label | Join link | |
| onboarding-invite.html | Join link | body | brio.app/join/steady-otter | illustrative (generated link) |
| onboarding-invite.html | Join link | button | Copy | |
| onboarding-invite.html | Join code | helper | Or share the join code: STEADY-OTTER | illustrative |
| onboarding-invite.html | Email | field-label | Invite by email | |
| onboarding-invite.html | Email | placeholder | name@company.com | placeholder-attr |
| onboarding-invite.html | Email | button | Send invites | divergence: "Send invites" vs roster "Send" |
| onboarding-invite.html | Email | helper | The roster is who you invited. It is never linked to who answered what. | reused on roster |
| onboarding-invite.html | Footer | button | Finish and go to your dashboard | |
| onboarding-invite.html | Footer | link | Invite later | cf home "invite the team" |
| onboarding-invite-loading.html | Email | button | Sending... | busy state |
| onboarding-invite-loading.html | Email | helper | Sending your invites. This finishes on its own; you can go to your dashboard now. | |
| onboarding-invite-loading.html | Email | body | yemi@company.com, sam@company.com | UGC (typed invites, disabled) |

#### 3.3 Invite-send error (invite-send-error.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | eyebrow | Step 3 of 3 | |
| Header | heading | Some invites did not send | H1 |
| Header | body | Two of three email invites failed, usually a mistyped address. Your join link and code still work, so this never blocks you. | |
| Rows | body | dev@company,com / ana@compnay.com | UGC (failed typed invites) |
| Rows | helper | looks mistyped | per-row status |
| Rows | helper | could not deliver | per-row status |
| Rows | button | Retry | per row; cf action "Retry failed" |
| Actions | button | Retry failed | divergence: "Retry" here vs "Try again" elsewhere |
| Actions | button | Skip for now | |
| Fallback | helper | These always work, no email needed: | |
| Fallback | body | brio.app/join/steady-otter | illustrative |
| Fallback | button | Copy | |
| Fallback | helper | Join code: STEADY-OTTER | illustrative; cf "Or share the join code: STEADY-OTTER" |

### Cluster 4. Dashboard and pulse

*The etalon. The eyebrow "Welcome back, Priya" (UGC name) and the privacy strip "Aggregate only. You never see who answered." repeat across all 7 dashboard states; listed once, variants noted. Numbers (Steady, 72%, 7.4) are illustrative.*

#### 4.0 Dashboard (dashboard.html + 6 states)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| dashboard.html | Header | eyebrow | Welcome back, Priya | UGC (injected name); on all states |
| dashboard.html | Header | heading | Your team pulse | H1; on all states |
| dashboard.html | Pulse | pulse-read | Steady | illustrative |
| dashboard.html | Pulse | interpretation | The team is holding steady this week, in line with last. | |
| dashboard.html | Pulse | act-label | Suggested next step | |
| dashboard.html | Pulse | button | Share this with your owner | cf 4.1 "Share with your owner", 7.0 "Invite your owner" |
| dashboard.html | Pulse | button | View full pulse | |
| dashboard.html | Pulse | button | Programs | divergence: bare "Programs" vs "Browse programs" / "See your programs" |
| dashboard.html | Trend | heading | This week | |
| dashboard.html | Trend | metric | 72% of the team answered | illustrative |
| dashboard.html | Trend | helper | Holding steady over the last five cycles. Aggregate only, never who. | |
| dashboard.html | Privacy | privacy-strip | Aggregate only. You never see who answered. | on all states |
| dashboard.html | Privacy | link | What your owner can and cannot see | on all states |
| dashboard-empty.html | State | state-message | Waiting for at least 5 responses | |
| dashboard-empty.html | State | state-message | No score yet, and no live count while the cycle is open. Your team pulse appears once at least 5 people have answered, so no single answer can ever be singled out. | |
| dashboard-empty.html | State | button | Nudge the team | cf "Invite the team" / "Resend" |
| dashboard-open.html | State | state-message | This cycle is open | |
| dashboard-open.html | State | state-message | Results appear after it closes. There is no running tally, for anyone, so no one can work out who answered or when. | |
| dashboard-open.html | State | button | See your programs | divergence: vs "Programs" / "Browse programs" |
| dashboard-error.html | State | state-message | Could not load your pulse | |
| dashboard-error.html | State | state-message | Something went wrong on our side. Your team data is safe. Try again, or head to your programs in the meantime. | reassurance pattern |
| dashboard-error.html | State | button | Retry | divergence: "Retry" vs "Try again" |
| dashboard-error.html | State | button | Go to Programs | divergence: "Go to Programs" vs "See your programs" |
| dashboard-noprogram.html | State | state-message | No active program yet | dup of program-library-empty message |
| dashboard-noprogram.html | State | state-message | Pick a wellbeing program to start your first check-in. Brio recommends one for your team size, so you do not have to decide alone. | |
| dashboard-noprogram.html | State | button | Browse programs | |
| dashboard-alert.html | Banner | status-badge | Alert | banner tag |
| dashboard-alert.html | Banner | state-message | Wellbeing dipped this week. | |
| dashboard-alert.html | Banner | button | See what changed | |
| dashboard-alert.html | Pulse | pulse-read | Dipping | illustrative |
| dashboard-alert.html | Pulse | interpretation | The team is down from last week. It is worth a look now, before it settles into a pattern. | |
| dashboard-alert.html | Trend | helper | Participation held steady; the score is what dipped. Aggregate only, never who. | |

#### 4.1 Team pulse detail (team-pulse.html + 5 states)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| team-pulse.html | Header | eyebrow | Dashboard | breadcrumb |
| team-pulse.html | Header | heading | Team pulse | H1 |
| team-pulse.html | Pulse | pulse-read | Steady | illustrative |
| team-pulse.html | Pulse | metric | 7.4 out of 10, up 0.1 on last week | illustrative |
| team-pulse.html | Pulse | interpretation | The team is holding steady this week, in line with last. Nothing needs your attention right now. | |
| team-pulse.html | Pulse | act-label | Suggested next step | |
| team-pulse.html | Pulse | button | Share with your owner | divergence vs dashboard "Share this with your owner" |
| team-pulse.html | Pulse | button | Adjust check-in | divergence: "Adjust check-in" vs "Edit check-in" |
| team-pulse.html | Trend | heading | Trend over time | |
| team-pulse.html | Trend | helper | Last eight cycles. Aggregate only, never who. | |
| team-pulse.html | Participation | heading | Participation | |
| team-pulse.html | Participation | metric | 72% of the team answered | illustrative |
| team-pulse.html | Participation | helper | Above the minimum of 5, so a score can be shown. You never see who answered. | |
| team-pulse-empty.html | State | state-message | Waiting for at least 5 responses | dup of dashboard-empty |
| team-pulse-empty.html | State | state-message | This cycle does not have enough answers to show a score yet, and there is no live count. A score appears once at least 5 people have answered, so no single answer can be singled out. | near-dup, wording differs from dashboard-empty |
| team-pulse-empty.html | State | button | Nudge the team | |
| team-pulse-empty.html | Trend | helper | Past cycles that met the minimum still show. The current one does not yet. | |
| team-pulse-open.html | State | state-message | This cycle is open | |
| team-pulse-open.html | State | state-message | The current score appears after the cycle closes. There is no running tally, for anyone, so no one can work out who answered or when. | near-dup of dashboard-open |
| team-pulse-open.html | State | button | Adjust check-in | |
| team-pulse-open.html | Trend | helper | Closed cycles still show. The open one appears once it closes. | |
| team-pulse-error.html | State | state-message | Could not load the pulse | cf dashboard "Could not load your pulse" |
| team-pulse-error.html | State | state-message | Something went wrong on our side. Your team data is safe. Try again, or go back to your dashboard. | |
| team-pulse-error.html | State | button | Retry | |
| team-pulse-error.html | State | button | Back to dashboard | divergence: "Back to dashboard" vs "Go to..." |
| team-pulse-nodata.html | State | state-message | No pulse yet | |
| team-pulse-nodata.html | State | state-message | Once a program is running and your team has been invited, the first check-in fills this in. Start with a program, then invite the team. | |
| team-pulse-nodata.html | State | button | Pick a program | divergence: "Pick a program" vs "Browse programs" |
| team-pulse-nodata.html | State | button | Invite the team | divergence: "Invite the team" vs "Nudge the team" |

#### 4.2 Threshold alert detail (threshold-alert.html + 3 states)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| threshold-alert.html | Header | eyebrow | Dashboard / Alert | breadcrumb |
| threshold-alert.html | Header | heading | What changed | H1 |
| threshold-alert.html | Banner | status-badge | Alert | |
| threshold-alert.html | Banner | state-message | The team pulse has dropped. Here is what changed and one step to take. | |
| threshold-alert.html | What dropped | heading | What dropped | |
| threshold-alert.html | What dropped | metric | Steady to Low over the last two cycles | illustrative |
| threshold-alert.html | What dropped | helper | Aggregate only, never who. A team-level move, not a read on any one person. | |
| threshold-alert.html | What means | heading | What this means | |
| threshold-alert.html | What means | interpretation | The team is dipping as a group this fortnight. This is a signal to check in with everyone, not a read on any individual, and it is not a diagnosis of anyone. Acting early is the point: a short, warm message to the whole team usually helps. | |
| threshold-alert.html | Do next | heading | Do this next | |
| threshold-alert.html | Do next | button | See the program that feeds this | |
| threshold-alert.html | Do next | button | Review the full pulse | divergence: "Review the full pulse" vs "View full pulse" |
| threshold-alert.html | Do next | helper | This signal comes from Steady Weeks, your weekly Mental health check-in. | program-name |
| threshold-alert.html | Privacy | privacy-strip | This alert never names or points at an individual. It reports a team-level move only. | |
| threshold-alert.html | Privacy | link | What your owner can and cannot see | |
| threshold-alert-error.html | State | state-message | Could not load this alert | |
| threshold-alert-error.html | State | state-message | Something went wrong on our side, or this alert no longer exists. Your team data is safe. Try again, or go back to your dashboard. | |
| threshold-alert-error.html | State | button | Retry | |
| threshold-alert-error.html | State | button | Back to dashboard | |
| threshold-alert-recovered.html | Banner | status-badge | Recovered | |
| threshold-alert-recovered.html | Banner | state-message | This dip has since recovered. The record is kept, not hidden. | |
| threshold-alert-recovered.html | Card | heading | This has since recovered | |
| threshold-alert-recovered.html | Card | interpretation | The team pulse that set off this alert has come back up. Nothing needs action now. Brio keeps the alert on record so you can see what happened and when, rather than hiding it. | |
| threshold-alert-recovered.html | Card | button | See the current pulse | |
| threshold-alert-recovered.html | Card | button | Back to dashboard | |

### Cluster 5. Programs

*Program names and category labels (Steady Weeks, Move More, Money Calm, Team Ties; Mental health, Physical, Financial, Social) are curated-library content authored by the product, not UGC. Privacy strip "You see aggregate only, never who answered." repeats on program-detail states.*

#### 5.0 Program library (program-library.html + 3 states)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| program-library.html | Header | eyebrow | Programs | |
| program-library.html | Header | heading | Programs | H1 |
| program-library.html | Header | subhead | Pick a program. Brio runs it and reads the team pulse for you. | |
| program-library.html | Recommended | status-badge | Recommended for your size | |
| program-library.html | Recommended | status-badge | Active | |
| program-library.html | Recommended | eyebrow | Mental health | category |
| program-library.html | Recommended | program-name | Steady Weeks | |
| program-library.html | Recommended | program-desc | Weekly check-in, 1 question, runs continuously | |
| program-library.html | Recommended | program-desc | A gentle weekly pulse on how the team is really doing. You get a plain-language read; no individual answers are ever shown to anyone. | |
| program-library.html | Recommended | button | Manage | divergence: "Manage" here vs "Select" on library cards |
| program-library.html | Filters | nav-pill | All | also Mental health / Physical / Financial / Social |
| program-library.html | Grid | eyebrow | Physical | category |
| program-library.html | Grid | program-name | Move More | |
| program-library.html | Grid | program-desc | Weekly check-in, 1 question | |
| program-library.html | Grid | program-desc | Small movement goals the team shares in aggregate. Encouragement, never a leaderboard. | |
| program-library.html | Grid | eyebrow | Financial | category |
| program-library.html | Grid | program-name | Money Calm | |
| program-library.html | Grid | program-desc | A low-pressure read on how settled the team feels about money stress this week. | |
| program-library.html | Grid | eyebrow | Social | category |
| program-library.html | Grid | program-name | Team Ties | |
| program-library.html | Grid | program-desc | A sense of how connected people feel to the team, reported as a share, never as who. | |
| program-library.html | Grid | button | Select | on each library card |
| program-library-empty.html | State | state-message | No active program yet | dup of dashboard-noprogram |
| program-library-empty.html | State | state-message | Start with the one we recommend for your size. You can always browse the four categories and switch later. | |
| program-library-empty.html | State | button | Start with Steady Weeks | divergence: another start-a-program label |
| program-library-error.html | State | state-message | Could not load programs | |
| program-library-error.html | State | state-message | Something went wrong on our side. Your programs are safe. Try again, or go back to your dashboard. | |
| program-library-error.html | State | button | Retry | |
| program-library-error.html | State | button | Back to dashboard | |

#### 5.1 Program detail / manage (program-detail.html + 6 states)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| program-detail.html | Header | eyebrow | Programs / Steady Weeks | breadcrumb |
| program-detail.html | Header | status-badge | Active | |
| program-detail.html | Header | eyebrow | Mental health | category |
| program-detail.html | Header | heading | Steady Weeks | H1 |
| program-detail.html | Header | program-desc | Weekly check-in, 1 question, runs continuously | |
| program-detail.html | Status | subhead | Status | |
| program-detail.html | Status | metric | Active | |
| program-detail.html | Status | helper | next check-in runs on schedule | |
| program-detail.html | Status | button | Edit check-in | divergence: "Edit check-in" vs "Adjust check-in" (4.1) |
| program-detail.html | Status | button | End program | |
| program-detail.html | What runs | subhead | What it runs | |
| program-detail.html | What runs | body | One short check-in each week, in the Mental health category. The team answers in under 30 seconds. You read an aggregate pulse; no individual answers are ever shown to anyone. | |
| program-detail.html | Questions | subhead | Check-in questions | |
| program-detail.html | Questions | body | How has this week felt for you? | question; cf checkin "How has work felt this week?" |
| program-detail.html | Questions | status-badge | Emoji | answer type |
| program-detail.html | Questions | helper | This program carries 1 question. Edit check-in to change the questions or type. | |
| program-detail.html | Manage | subhead | Manage | |
| program-detail.html | Manage | helper | Ending a program stops future check-ins. Past aggregate results stay available. | |
| program-detail.html | Privacy | privacy-strip | You see aggregate only, never who answered. | |
| program-detail.html | Privacy | link | What your owner can and cannot see | |
| program-detail-draft.html | Header | status-badge | Draft | |
| program-detail-draft.html | Header | program-desc | Weekly check-in, 1 question, not started | |
| program-detail-draft.html | Status | metric | Draft | |
| program-detail-draft.html | Status | helper | finish the check-in to activate | |
| program-detail-draft.html | Status | button | Finish setup | |
| program-detail-draft.html | Status | button | Activate | disabled |
| program-detail-draft.html | Status | helper | Activate is available once at least one check-in question is set up. | |
| program-detail-draft.html | Questions | body | Not set up yet. Choose 1 to 3 questions and how the team answers. | |
| program-detail-draft.html | Manage | helper | A draft never sends anything to the team until you activate it. | |
| program-detail-end.html | Dialog | heading | End this program? | danger-confirm; cf toast "End this program?" |
| program-detail-end.html | Dialog | body | Ending Steady Weeks stops all future check-ins. Past aggregate results stay available on the team pulse. This does not change anyone's privacy; no individual answers are ever revealed. | |
| program-detail-end.html | Dialog | button | Keep running | |
| program-detail-end.html | Dialog | button | End program | |
| program-detail-ended.html | Header | status-badge | Ended | |
| program-detail-ended.html | Header | program-desc | Weekly check-in, 1 question, completed | |
| program-detail-ended.html | Status | metric | Ended | |
| program-detail-ended.html | Status | helper | this program has finished | |
| program-detail-ended.html | Status | button | View results | |
| program-detail-ended.html | Status | button | Reactivate | |
| program-detail-ended.html | What ran | subhead | What it ran | past tense variant |
| program-detail-ended.html | What ran | body | A weekly check-in in the Mental health category. Its aggregate results stay available on the team pulse. No individual answers were ever shown to anyone. | |
| program-detail-ended.html | Questions | helper | Reactivate to run this check-in again from the next cycle. | |
| program-detail-error.html | State | heading | Could not load this program | H1 |
| program-detail-error.html | State | state-message | Something went wrong on our side. Your program is safe. Try again, or go back to the library. | |
| program-detail-error.html | State | button | Retry | |
| program-detail-error.html | State | button | Back to programs | |
| program-detail-loading.html | Header | heading | Program | H1 (skeleton) |
| program-detail-notfound.html | State | heading | Program not found | H1 |
| program-detail-notfound.html | State | state-message | This program may have ended or the link may be out of date. Head back to the library to pick one. | |
| program-detail-notfound.html | State | button | Back to programs | |
| program-detail-notfound.html | State | button | Dashboard | divergence: bare "Dashboard" vs "Back to dashboard" |

#### 5.2 Check-in setup (check-in-setup.html + 2 states)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| check-in-setup.html | Header | eyebrow | Programs / Steady Weeks / Check-in | breadcrumb |
| check-in-setup.html | Header | heading | Set up the check-in | H1 |
| check-in-setup.html | Header | subhead | For Steady Weeks. Pick 1 to 3 questions the team answers each week, in under 30 seconds. | |
| check-in-setup.html | Questions | field-label | Questions, pick 1 to 3 | legend |
| check-in-setup.html | Questions | helper | 1 of 3 selected | |
| check-in-setup.html | Questions | field-label | How has this week felt for you? | q1; matches program-detail question |
| check-in-setup.html | Questions | field-label | How manageable was your workload? | q2 |
| check-in-setup.html | Questions | field-label | Did you feel supported this week? | q3 |
| check-in-setup.html | Questions | field-label | How connected did you feel to the team? | q4 |
| check-in-setup.html | Questions | list-item | Emoji / Slider | answer-type options per question |
| check-in-setup.html | Questions | helper | You can pick up to 3. A fourth is blocked to keep the check-in under 30 seconds. | |
| check-in-setup.html | Cadence | field-label | Cadence | legend |
| check-in-setup.html | Cadence | field-label | Weekly | radio |
| check-in-setup.html | Cadence | helper | Weekly in the current plan. Heavier cadences come later. | |
| check-in-setup.html | Cadence | field-label | Send day, optional | Monday to Friday options |
| check-in-setup.html | Privacy aside | subhead | How privacy stays protected | |
| check-in-setup.html | Privacy aside | status-badge | Always on | x2 |
| check-in-setup.html | Privacy aside | body | No score appears until at least 5 people have answered. | |
| check-in-setup.html | Privacy aside | body | While a cycle is open, no one, not you and not the team, sees a running count of who has answered. | |
| check-in-setup.html | Privacy aside | helper | These are built in, not settings. Privacy is not a switch you can turn off. | |
| check-in-setup.html | Preview aside | subhead | What the team sees | |
| check-in-setup.html | Preview aside | body | Your answers are anonymous. 1 question, under 30 seconds, with the privacy note before the first question. | |
| check-in-setup.html | Preview aside | link | Preview the employee check-in | |
| check-in-setup.html | Save bar | button | Save | |
| check-in-setup.html | Save bar | button | Back to program | |
| check-in-setup.html | Save bar | helper | Saving activates the program and applies from the next cycle, not the open one. | |
| check-in-setup-error.html | Error | state-message | Could not save. Your setup is kept, please try again. | cf company "Could not save. Your details are kept, please try again." |
| check-in-setup-error.html | Save bar | button | Try again | divergence: "Try again" vs "Retry" |
| check-in-setup-error.html | Save bar | helper | Your questions and cadence are kept as you left them. | |
| check-in-setup-loading.html | Save bar | button | Saving... | busy state |
| check-in-setup-loading.html | Save bar | helper | Applying your check-in. This takes a moment. | |

### Cluster 6. Team

*Member rows (Yemi O. / Sam K. / Ana R. / Dev P. and their emails) are UGC. Join link, code, and participation numbers are illustrative. The invite panel repeats across states; listed under the base, variants noted.*

#### 6.0 Team roster (team-roster.html + 6 states)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| team-roster.html | Header | eyebrow | Team | |
| team-roster.html | Header | heading | Your team | H1 |
| team-roster.html | Invite | subhead | Invite your team | |
| team-roster.html | Invite | field-label | Join link | |
| team-roster.html | Invite | body | brio.app/join/steady-otter | illustrative |
| team-roster.html | Invite | button | Copy | |
| team-roster.html | Invite | helper | Or share the join code: STEADY-OTTER | illustrative |
| team-roster.html | Invite | field-label | Invite by email | |
| team-roster.html | Invite | placeholder | name@company.com | placeholder-attr |
| team-roster.html | Invite | button | Send | divergence: "Send" vs onboarding "Send invites" |
| team-roster.html | Invite | helper | The roster is who you invited. It is never linked to who answered what. | reused from onboarding |
| team-roster.html | Participation | subhead | Participation | |
| team-roster.html | Participation | metric | 72% | illustrative |
| team-roster.html | Participation | helper | of 18 answered last cycle | illustrative |
| team-roster.html | Participation | helper | A share, never who. You never see individual answers. | cf "A share of the team, never who." |
| team-roster.html | Members | subhead | Members | |
| team-roster.html | Members | list-item | Yemi O. yemi@company.com | UGC (also Sam K., Ana R., Dev P.) |
| team-roster.html | Members | status-badge | Active | |
| team-roster.html | Members | status-badge | Invited | on Dev P. row |
| team-roster.html | Members | link | Manage | on Active rows |
| team-roster.html | Members | link | Resend | on Invited rows |
| team-roster.html | Members | list-item | 14 more team members | illustrative truncation |
| team-roster.html | Members | helper | identity used for the invite only | |
| team-roster-empty.html | Invite | subhead | Invite your team to get started | divergence: vs "Invite your team" |
| team-roster-empty.html | Invite | body | No one has joined yet. Share the join link or code, or send email invites. Your team pulse appears once at least 5 people have answered. | |
| team-roster-pending.html | Participation | metric | Waiting | |
| team-roster-pending.html | Participation | helper | for the first answers | |
| team-roster-pending.html | Participation | helper | Invites are out. A score appears after at least 5 people answer. | |
| team-roster-pending.html | Members | status-badge | Invited | all rows Invited |
| team-roster-open.html | Participation | metric | Cycle open | |
| team-roster-open.html | Participation | helper | The participation share appears after the cycle closes. There is no running tally, for anyone. | |
| team-roster-loading.html | Header | heading | Your team | H1 (skeleton) |
| team-roster-error.html | State | state-message | Could not load your team | |
| team-roster-error.html | State | state-message | Something went wrong on our side. Your roster is safe. Try again, or go back to your dashboard. | |
| team-roster-error.html | State | button | Retry | |
| team-roster-error.html | State | button | Back to dashboard | |
| team-roster-manage.html | Dialog | heading | Manage invite | |
| team-roster-manage.html | Dialog | body | Dev P. - dev@company.com - Invited | UGC |
| team-roster-manage.html | Dialog | button | Resend invite | |
| team-roster-manage.html | Dialog | button | Copy join link | |
| team-roster-manage.html | Dialog | button | Regenerate code | |
| team-roster-manage.html | Dialog | button | Revoke invite | |
| team-roster-manage.html | Dialog | link | Close | |

### Cluster 7. Owner share and upgrade

*Owner email (marcus@acme.co) is UGC. Prices ($5, $9, $90) and seat counts are illustrative and carry hypothesis hedges. Upgrade and payment-failed dialogs sit over a dimmed backdrop that repeats the invite-owner form; backdrop copy not re-listed.*

#### 7.0 Share with owner (share-owner.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | eyebrow | Owner | |
| Header | heading | Give your owner the big picture | H1; idiom "big picture" |
| Header | subhead | Your team's pulse is trending up, a good moment to loop in your owner. | idiom "loop in" |
| Owner-view | subhead | What your owner will see | |
| Owner-view | body | Steady | pulse-read |
| Owner-view | metric | 7.4 out of 10, holding steady | illustrative |
| Owner-view | body | Team wellbeing is steady this month. Your owner sees this reading, the trend, and how much of the team is taking part. | "reading"; "taking part" vs "answered" |
| Owner-view | metric | 72% of the team answered | illustrative |
| Owner-view | helper | This is the owner's view. Aggregate only, never who. | |
| Owner sees | subhead | Your owner sees | |
| Owner sees | body | The team wellbeing score | |
| Owner sees | body | The trend over time | |
| Owner sees | body | Participation as a share of the team | |
| Owner never sees | subhead | Your owner never sees | |
| Owner never sees | body | Any individual's responses | |
| Owner never sees | body | Names, or who answered | |
| Owner never sees | body | Any drill-down into a person | |
| Invite | heading | Invite your owner | |
| Invite | subhead | The owner dashboard is a paid feature. Invite your owner, and if you are on the free plan you can unlock it in a moment. | |
| Invite | privacy-strip | You see a team-level signal only, never any individual's answers. | |
| Invite | button | Invite your owner | |
| Invite | button | Back to dashboard | |
| Invite | helper | On a paid plan already? Inviting takes you straight to the owner email, no upgrade needed. | |

#### 7.1 Invite owner + upgrade (invite-owner.html, -sent)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| invite-owner.html | Header | heading | Invite your owner | H1 |
| invite-owner.html | Header | subhead | Enter your owner's email. The owner dashboard is a paid feature, so on the free plan you will unlock it before the invite sends. | |
| invite-owner.html | Form | field-label | Owner email | |
| invite-owner.html | Form | placeholder | marcus@acme.co | placeholder-attr |
| invite-owner.html | Form | state-message | Enter a valid email so the invite reaches your owner. | validation |
| invite-owner.html | Form | field-label | Owner name (optional) | |
| invite-owner.html | Form | placeholder | Marcus | placeholder-attr |
| invite-owner.html | Form | privacy-strip | Your owner sees aggregate only, never individual data. | |
| invite-owner.html | Form | button | Upgrade and invite | |
| invite-owner.html | Form | button | Back | |
| invite-owner.html | Form | helper | On the Starter plan already? This becomes Send invite, with no upgrade step. | |
| invite-owner.html | Compare | subhead | Owner dashboard = paid | |
| invite-owner.html | Compare Free | status-badge | Current | |
| invite-owner.html | Compare Free | plan-name | Free / Up to 10 people / Aggregate score for you / No owner dashboard | |
| invite-owner.html | Compare Starter | status-badge | Your unlock | |
| invite-owner.html | Compare Starter | plan-name | Starter, $5 / seat / month / Up to 50 people / Full pulse with trends / Owner dashboard included | illustrative price |
| invite-owner.html | Compare | helper | Pricing is a working figure [?], benchmarked against comparable tools. | pending/hypothesis |
| invite-owner-sent.html | Header | heading | Invite sent | H1 |
| invite-owner-sent.html | Header | subhead | Your owner will get a link to their aggregate-only dashboard. They see a team-level signal only, never any individual's answers. | |
| invite-owner-sent.html | Actions | button | Open the owner dashboard | |
| invite-owner-sent.html | Actions | button | Preview the monthly digest they receive | |
| invite-owner-sent.html | Actions | button | Back to your dashboard | |

#### 7.2 Upgrade / paywall (upgrade.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Dialog | heading | Upgrade to Starter | H1 |
| Dialog | link | Close | aria-label "Close, stay on Free" |
| Dialog | helper | Unlocks the owner dashboard. You can leave without being charged. | |
| Dialog plan | plan-name | Starter / $5 / seat / month / Owner dashboard included / Up to 50 people, full pulse with trends | illustrative |
| Dialog | field-label | Seats (your team size) | |
| Dialog total | metric | 18 seats × $5, billed monthly | illustrative |
| Dialog total | metric | $90 / month | illustrative |
| Dialog | helper | Pricing is a working figure [?], benchmarked against comparable tools. | pending/hypothesis |
| Payment | subhead | Payment | |
| Payment | field-label | Card number | |
| Payment | placeholder | 1234 1234 1234 1234 | placeholder-attr |
| Payment | field-label | Expiry | |
| Payment | placeholder | MM / YY | placeholder-attr |
| Payment | field-label | Security code | |
| Payment | placeholder | CVC | placeholder-attr |
| Dialog | button | Upgrade now | |
| Dialog | button | Stay on Free | |
| Dialog | helper | If the card is declined, you will not be charged and can retry. | |
| Backdrop | body | marcus@acme.co | UGC (readonly, dimmed) |

#### 7.3 Payment failed (payment-failed.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Dialog | heading | Payment did not go through | H1 |
| Dialog | link | Close | aria-label "Close, stay on the free tier" |
| Dialog | state-message | Your card was declined. | |
| Dialog | helper | You have not been charged, and your team stays on the free plan. | |
| Dialog | button | Try again | divergence: "Try again" vs "Retry" |
| Dialog | button | Stay on the free tier, retry later | divergence: "free tier" vs "Free plan" / "free plan" |

### Cluster 8. Settings

*Operator identity (Acme Co., Priya Nair, priya@acme.co) and Marcus are UGC/illustrative. Dates, seat counts, invoice amounts are illustrative.*

#### 8.0 Settings shell (settings.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | eyebrow | Acme Co. | UGC (company name) |
| Header | heading | Settings | H1 |
| Header | subhead | Your account and how Brio runs for your team. | |
| Header | helper | Signed in as priya@acme.co | UGC (operator email) |
| Nav | link | Plan | row; helper "Your tier, seats, and invoices" |
| Nav | link | Privacy center | row; helper "What the owner can and cannot see" |
| Nav | link | Notifications | row; helper "Reminders and digests" |
| Nav | link | Account | row; helper "Name, email, password, sign out" |
| Nav | link | Open | per-row link |
| Footer | body | Privacy center is the proof surface. It is where you can check, and show your team, exactly what the owner can and cannot see. | |

#### 8.1 Plan / subscription (settings-plan.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | eyebrow | Settings | breadcrumb |
| Header | heading | Plan | H1 |
| Current | eyebrow | Current plan | |
| Current | plan-name | Starter | |
| Current | status-badge | Hypothesis pricing | |
| Current | plan-name | $5 / seat / month, billed monthly | illustrative |
| Current | helper | Renews Aug 12, 2026. Includes the owner dashboard. | illustrative |
| Seats | heading | Seats and usage | |
| Seats | metric | 18 of 50 | illustrative |
| Seats | metric | seats used | |
| Seats | helper | Tied to your team size. You are not blocked at the limit, we prompt you first. | |
| Seats | button | Change plan | |
| Compare | heading | Compare plans | |
| Compare Free | plan-name | Free | helper "Up to 10 seats. No owner dashboard." |
| Compare Free | link | Downgrade | |
| Compare Starter | plan-name | Starter | helper "$5 / seat, up to 50. Owner dashboard, full pulse." |
| Compare Starter | status-badge | Current | |
| Compare Growth | plan-name | Growth | helper "$9 / seat, 200+. Multi-team, integrations." |
| Compare Growth | link | Upgrade | |
| Compare | helper | All pricing is a hypothesis, benchmarked against competitors. | |
| Invoices | heading | Invoices | |
| Invoices | body | Jul 12, 2026 / Jun 12, 2026 | illustrative |
| Invoices | helper | Starter, 18 seats / Starter, 17 seats | illustrative |
| Invoices | metric | $90.00 / $85.00 | illustrative |
| Invoices | button | Download | |
| Invoices | helper | Amounts are a hypothesis. Download is not wired up in this prototype. | pending |

#### 8.2 Privacy center (settings-privacy.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | eyebrow | Settings | breadcrumb |
| Header | heading | Privacy center | H1 |
| Header | subhead | This is exactly what you and your owner can and cannot see. It is how Brio is built, so it is the same for every plan and team size. | |
| Header | status-badge | Structural, not a setting | |
| Claims | heading | How your team's answers stay private | |
| Claims | body | Aggregate only. You see the team aggregate, never an individual response, and there is no drill-down. | canon: the four privacy pillars |
| Claims | body | Minimum of 5. No score appears until at least 5 people have answered. | |
| Claims | body | No live count. While a cycle is open, no one sees a running tally of who has answered. | |
| Claims | body | Subscription as privacy. The subscription pays for the aggregate; the business never exposes an individual. | |
| Claims | helper | This is the same promise your team sees before they answer (what your team sees) and on the public Security and privacy page. | |
| Can see | subhead | What you and the owner can see | |
| Can see | body | The team wellbeing score and its trend | |
| Can see | body | Participation as a share of the team | |
| Cannot see | subhead | What no one can see | |
| Cannot see | body | Any individual response, name, or who answered | |
| Cannot see | body | Any drill-down to a person | |
| Cannot see | body | Any sub-group below 5 | |
| Cannot see | privacy-strip | Nothing on this page is a setting. The boundary is built into how Brio works. | |

#### 8.3 Notifications (settings-notifications.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | eyebrow | Settings | breadcrumb |
| Header | heading | Notifications | H1 |
| Header | subhead | Decide what Brio sends and how often. | |
| Header | helper | Channel: email. Slack is a later phase. | |
| Toggle | toggle-label | Check-in reminders | helper "A gentle nudge so the team completes the check-in. Weekly, sent Mondays." |
| Toggle | toggle-label | Weekly team digest, to you | helper "Your weekly summary of the team pulse." |
| Toggle | toggle-label | Monthly owner digest | helper "The monthly email Marcus receives, aggregate only." (Marcus illustrative) |
| Toggle | toggle-label | Threshold alert | helper "Emails you when the team pulse drops meaningfully." |
| Toggle | toggle-label | On | switch state, each row |
| Footer | privacy-strip | Notifications never include individual data, only aggregate signals. | |

#### 8.4 Account settings (settings-account.html, -delete)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| settings-account.html | Header | eyebrow | Settings | breadcrumb |
| settings-account.html | Header | heading | Account | H1 |
| settings-account.html | Form | field-label | Name | |
| settings-account.html | Form | body | Priya Nair | UGC (operator name) |
| settings-account.html | Form | button | Save | |
| settings-account.html | Form | field-label | Email | |
| settings-account.html | Form | body | priya@acme.co | UGC |
| settings-account.html | Form | button | Change | on Email and Password |
| settings-account.html | Form | helper | A new email must be confirmed before it takes effect, so a typo cannot lock you out. | |
| settings-account.html | Form | field-label | Password | |
| settings-account.html | Magic link | toggle-label | Sign in with a magic link | divergence: "Sign in" vs "Log in" |
| settings-account.html | Magic link | helper | Passwordless email sign-in. | |
| settings-account.html | Magic link | toggle-label | On | switch state |
| settings-account.html | Sign out | button | Sign out | divergence: "Sign out" vs "Log in" naming |
| settings-account.html | Danger | heading | Delete account | |
| settings-account.html | Danger | helper | Permanently erase your account and your company's data. This cannot be undone (GDPR erasure). | |
| settings-account.html | Danger | button | Delete account | |
| settings-account-delete.html | Dialog | danger-confirm | Delete your account? | |
| settings-account-delete.html | Dialog | danger-confirm | This permanently erases your account and your company's data. It cannot be undone (GDPR erasure). | |
| settings-account-delete.html | Dialog | danger-confirm | Your operator account and login | erased item |
| settings-account-delete.html | Dialog | danger-confirm | Your company's programs and aggregate history | erased item |
| settings-account-delete.html | Dialog | body | No individual responses to erase, they were never stored by person | privacy reassurance |
| settings-account-delete.html | Dialog | field-label | Type DELETE to confirm | |
| settings-account-delete.html | Dialog | placeholder | DELETE | placeholder-attr |
| settings-account-delete.html | Dialog | button | Cancel | |
| settings-account-delete.html | Dialog | danger-confirm | Delete account | confirm button |

### Cluster 9. Owner surface

*Owner shell renders "Owner view, aggregate only". Company name (Acme) is UGC; scores are illustrative.*

#### 9.0 Owner dashboard (owner-dashboard.html, -empty)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| owner-dashboard.html | Header | eyebrow | Acme Co. - Owner view | UGC (company name) |
| owner-dashboard.html | Header | heading | Team wellbeing is steady this month | H1 |
| owner-dashboard.html | Pulse | body | Steady | pulse-read |
| owner-dashboard.html | Pulse | metric | 7.4 out of 10 | illustrative |
| owner-dashboard.html | Pulse | body | No sign anyone is at risk of leaving. This is the whole team read, not any one person. | "read" |
| owner-dashboard.html | Trend | heading | Trend | divergence: "Trend" vs "Trend over time" (4.1) |
| owner-dashboard.html | Trend | helper | Holding steady over recent cycles. | |
| owner-dashboard.html | Participation | heading | Participation | |
| owner-dashboard.html | Participation | metric | 72% of the team took part | illustrative; "took part" vs "answered" |
| owner-dashboard.html | Participation | helper | A share of the team, never who. | |
| owner-dashboard.html | Visibility | subhead | What I can and cannot see | first-person voice (owner) |
| owner-dashboard.html | Visibility | body | Can see | |
| owner-dashboard.html | Visibility | body | The aggregate score, the trend, participation as a share | |
| owner-dashboard.html | Visibility | body | Cannot see | |
| owner-dashboard.html | Visibility | body | Individual responses, names, who answered, any drill-down, or any sub-group below 5 | |
| owner-dashboard.html | Footer | helper | Updated this cycle. This read takes under two minutes. See the latest monthly digest. | |
| owner-dashboard.html | Footer | link | monthly digest | |
| owner-dashboard-empty.html | Header | heading | A score is not available yet | H1 |
| owner-dashboard-empty.html | State | state-message | Waiting for the privacy minimum | |
| owner-dashboard-empty.html | State | state-message | The privacy minimum of 5 responses has not been met, so no score is shown yet. There is no partial number and no individual data. | |

#### 9.2 Monthly owner digest (owner-digest.html)

*An email layout, not an app screen.*

| Zone | Type | Text | Note |
|------|------|------|------|
| Head | body | Brio <wellbeing@brio.app> | sender |
| Head | heading | Your Acme team wellbeing, June | UGC (company); illustrative (month) |
| Pulse | body | Steady | pulse-read |
| Pulse | metric | 7.4 out of 10 | illustrative |
| Pulse | body | Steady this month, no sign anyone is at risk of leaving. | |
| Trend | heading | Trend | |
| Trend | metric | Up from last month | illustrative |
| Participation | heading | Participation | |
| Participation | metric | 72% of the team took part | illustrative |
| Participation | helper | A share of the team, never who. | |
| Privacy | privacy-disclosure | You only ever see the team aggregate, never individual data. | |
| CTA | button | Open your dashboard | |
| Foot | helper | Sent monthly. | |
| Foot | link | Manage email frequency | |
| Foot | link | Unsubscribe | |
| Foot | link | View in browser | |

### Cluster 10. Employee check-in

*Yemi's flow. Employee shell renders "Your answers are anonymous". This is the highest-stakes voice surface: the pre-Q1 disclosure. Company name (Acme Co.) is UGC. Note the boss is called "your manager" here but "your operator" on entry and expired, see divergences.*

#### 10.0 Check-in entry (checkin-entry.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Privacy strip | privacy-disclosure | Your answers are anonymous. No named responses, no individual timeline. | in-body strip |
| Intro | heading | Acme Co. wellbeing check-in | UGC (company); H1 |
| Intro | body | Acme Co. is running a quick wellbeing check-in. It takes under 30 seconds, and no account is needed. | UGC (company) |
| Intro | button | Start | |
| Code form | field-label | Have a code instead? | |
| Code form | field-label | Enter your join code | placeholder |
| Code form | button | Continue | |
| Help | helper | Link not working? If it has expired, ask your operator to resend it. | "operator" (employee-facing) |
| Help | link | ask your operator to resend it | |

#### 10.1 Pre-Q1 privacy disclosure (checkin-privacy.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | heading | Before you answer | H1 |
| Header | body | Here is exactly how your answer is protected. This is how it works, not just a promise. | |
| Claims | privacy-disclosure | No one sees your individual response. | |
| Claims | privacy-disclosure | Not your manager, not the owner, no one. There is no named list and no individual timeline. | "your manager" vs "your operator" (10.0) |
| Claims | privacy-disclosure | Your answer joins an aggregate of at least 5. | |
| Claims | privacy-disclosure | Nothing is shown until at least 5 people have answered, so no single response can be picked out. | |
| Claims | privacy-disclosure | No running count while the check-in is open. | |
| Claims | privacy-disclosure | No one watches answers arrive, so no one can guess who answered when. | |
| Claims | privacy-disclosure | The owner pays for the team view, never for your answers. | |
| Claims | privacy-disclosure | The subscription buys an aggregate read of team wellbeing. The business is built on never exposing an individual. | |
| Claims | privacy-disclosure | Results appear only after the cycle closes, and only as a team number. | |
| Claims | privacy-disclosure | The owner sees the team score, the trend, and what share of the team took part. Never any individual, any answer, or any group smaller than 5. | |
| Toggle | button | See exactly what your manager sees | "your manager" |
| Disclosure | helper | This is the whole of what your manager and the owner ever see: | |
| Disclosure | subhead | Acme Co. team pulse | UGC (company) |
| Disclosure | body | Steady | pulse-read |
| Disclosure | body | The team is holding steady this week. | |
| Disclosure | metric | 72% of the team answered | illustrative |
| Disclosure | privacy-disclosure | They never see: your name, your answer, or any group smaller than 5. | |
| CTA | button | Continue | |
| Opt-out | helper | Rather not answer? Leave, nothing has been recorded. | |
| Opt-out | link | Leave, nothing has been recorded | |

#### 10.2 Questions (checkin-questions.html, -loading)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| checkin-questions.html | Progress | eyebrow | Question 1 of 1 | |
| checkin-questions.html | Question | question | How has work felt this week? | cf program "How has this week felt for you?" |
| checkin-questions.html | Answers | scale-label | Rough | product scale label |
| checkin-questions.html | Answers | scale-label | Okay | |
| checkin-questions.html | Answers | scale-label | Good | |
| checkin-questions.html | Submit | button | Submit | |
| checkin-questions.html | Privacy strip | privacy-disclosure | Your answer joins a team aggregate. A score is shown only after at least 5 people answer, and there is no live count. | |
| checkin-questions-loading.html | Header | heading | Sending your answer | H1 |
| checkin-questions-loading.html | Header | body | This takes a moment. It finishes on its own, and your answer is only recorded once. | |
| checkin-questions-loading.html | Submit | button | Sending... | busy state |
| checkin-questions-loading.html | Helper | helper | On success you go to the confirmation. If it does not go through, your answers are kept so you can retry. | |
| checkin-questions-loading.html | Nav | button | Continue to confirmation | wireframe nav aid, not product copy |
| checkin-questions-loading.html | Nav | button | If sending fails | wireframe nav aid, not product copy |

#### 10.3 Check-in complete (checkin-complete.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | heading | Thanks, you're done | H1; contraction "you're"; cf "Thanks for reaching out" |
| Header | body | Your answer joined your team's aggregate. It is never shown on its own. | |
| Privacy strip | privacy-disclosure | You will not see a personal score. Results are team-level only, and this screen never shows an individual number. | |
| Footer | helper | You can close this tab. Want to read more? How your privacy is protected. | reused on 10.5 |
| Footer | link | How your privacy is protected | |

#### 10.4 Invite link expired (checkin-expired.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | heading | This check-in link has expired | H1; cf 2.3 "This link has expired" |
| Header | body | Check-in links are per cycle and expire when the cycle closes. Nothing personal is exposed, and nothing was recorded. | |
| Privacy strip | privacy-disclosure | Ask your operator to resend the check-in link. You cannot mint a new link yourself, because your operator controls invites. | "operator" |
| Code form | field-label | Have a fresh code? | |
| Code form | field-label | Enter the new join code | placeholder |
| Code form | button | Continue | |
| Footer | helper | Not sure who to ask? Your operator is whoever shared this check-in with your team. | |

#### 10.5 Already submitted (checkin-already.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | heading | You have already checked in | H1 |
| Header | body | You are done for this cycle. | |
| Privacy strip | privacy-disclosure | Your earlier answer is already in your team's aggregate. No one is counted twice, and nothing individual is shown. | |
| Footer | helper | You will be invited again next cycle. | |
| Footer | helper | You can close this tab. Want to read more? How your privacy is protected. | reused from 10.3 |

#### 10.6 Submit error (checkin-submit-error.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | heading | We could not send your answers | H1 |
| Header | body | This looks like a connection problem, or something on our side. It was not anything you did. | |
| Saved strip | state-message | Your answers are saved on this screen. Nothing was lost, and you will not have to answer again. | |
| Saved badge | state-message | Answers saved | cf "successfully" ban |
| CTA | button | Try again | divergence: "Try again" vs "Retry" |
| Footer | helper | Still not working? Give it a moment and try again. Your answers stay saved, so you can come back to this link. | |

### Cluster 11. System and global

*Error, maintenance, cookie, and the toast/notification component reference page. `toast.html` is a component spec surface, not a real product screen; its labels ("Component", "When to use which", "aria-live", "role=dialog") are documentation, flagged accordingly.*

#### 11.0 404 Not found (not-found.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Error | body | 404 | code |
| Error | heading | Page not found | H1 |
| Error | body | The page may have moved, or the link may be wrong. | |
| Search | field-label | Search Brio help | |
| Search | placeholder | Search help and pages | placeholder-attr |
| Search | button | Search | |
| Quick links | button | Home / Help / Pricing / Security and privacy | |
| Footer | helper | Still cannot find it? Contact us. | |
| Footer | link | Contact us | divergence: "Contact us" vs "Contact support" |

#### 11.1 500 Server error (server-error.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Head | body | Brio | wordmark (no shell) |
| Error | body | 500 | code |
| Error | heading | Something went wrong | H1; cf dashboard "Something went wrong on our side." |
| Error | body | This is on our side, not you. | |
| Strip | state-message | Your account and your team's data are safe, nothing was lost. We have been notified and are looking into it. | |
| Actions | button | Try again | divergence: "Try again" vs "Retry" |
| Actions | button | Go to homepage | |
| Footer | helper | Need a hand? Contact support. | cf "Need a hand?" (help.html "Still need a hand?") |
| Footer | link | Contact support | |

#### 11.2 Maintenance (maintenance.html)

| Zone | Type | Text | Note |
|------|------|------|------|
| Head | body | Brio | wordmark |
| Status | eyebrow | Scheduled maintenance | |
| Header | heading | Brio is getting an upgrade | H1 |
| Header | body | We are doing some scheduled maintenance and will be back shortly. | |
| ETA | state-message | Expected back by about 14:00 UTC | illustrative |
| Actions | button | Try again | |
| Footer | helper | Back shortly. Follow live status at status.brio.app. | |

#### 11.3 Cookie consent (cookie-consent.html, -manage)

| State | Zone | Type | Text | Note |
|-------|------|------|------|------|
| cookie-consent.html | Banner | legal | Brio uses essential cookies to run the site. With your consent we also use analytics to improve it. We never sell your data. Read the Cookie Policy. | |
| cookie-consent.html | Banner | link | Read the Cookie Policy | |
| cookie-consent.html | Banner | button | Reject all | |
| cookie-consent.html | Banner | button | Accept all | |
| cookie-consent.html | Banner | button | Manage | |
| cookie-consent.html | Banner | legal | US residents: Do Not Sell or Share My Personal Information. We honor Global Privacy Control (GPC) signals. | |
| cookie-consent.html | Banner | link | Do Not Sell or Share My Personal Information | |
| cookie-consent-manage.html | Dialog | heading | Manage cookie preferences | |
| cookie-consent-manage.html | Dialog | legal | Choose which cookies Brio may use. Essential cookies are always on. Read the Cookie Policy. | |
| cookie-consent-manage.html | Category | field-label | Strictly necessary | body "Required to run the site and keep you signed in. Cannot be switched off." |
| cookie-consent-manage.html | Category | state-message | Always on | |
| cookie-consent-manage.html | Category | field-label | Functional | body "Remembers your preferences, such as language." |
| cookie-consent-manage.html | Category | field-label | Analytics | body "Helps us understand how the site is used, so we can improve it." |
| cookie-consent-manage.html | Category | field-label | Advertising | body "Used for ad measurement. Brio does not sell your data." |
| cookie-consent-manage.html | Category | state-message | Off | on Functional / Analytics / Advertising |
| cookie-consent-manage.html | Dialog | legal | US residents: Do Not Sell or Share My Personal Information. We honor GPC signals. | note: "GPC" vs "Global Privacy Control (GPC)" on the banner |
| cookie-consent-manage.html | Actions | button | Reject all / Save choices / Accept all / Cancel | |

*Note: both cookie states render behind the live marketing hero (eyebrow "Employee wellbeing, without surveillance", H1 "Employee wellbeing for teams with no HR"), which duplicates home.html; captured under 0.0.*

#### 11.4 Toast / inline notification (toast.html) - component reference

| Zone | Type | Text | Note |
|------|------|------|------|
| Header | eyebrow | Component | doc surface, not product copy |
| Header | heading | Feedback and notifications | H1 (doc) |
| Header | body | Three feedback surfaces, one for each job. Each is marked by shape and text, never by color alone. | doc |
| Toast | heading | Toast | doc |
| Toast | helper | Non-blocking, transient, auto-dismisses. For quick confirmations and light, recoverable failures (sent, saved, copied). Announced with aria-live. | doc |
| Toast success | state-message | Invite sent | real example string |
| Toast success | state-message | 3 teammates invited | illustrative |
| Toast | button | Dismiss | |
| Toast error | state-message | Could not send | real example string |
| Toast error | state-message | Check the address and try again. | |
| Toast error | button | Retry | divergence: toast uses "Retry" |
| Toast undo | state-message | Program ended | |
| Toast undo | button | Undo | |
| Inline | heading | Inline message | doc |
| Inline | state-message | Some invites did not send. Your join link and code still work, so this never blocks you. | matches 3.3 body |
| Dialog | heading | Dialog | doc |
| Dialog example | heading | End this program? | matches 5.1 dialog |
| Dialog example | body | The team stops checking in for this program. You can start it again later. | divergence: differs from 5.1 dialog body |
| Dialog example | button | End program | |
| Dialog example | button | Keep running | |
| When to use | heading | When to use which | doc |
| Footer | helper | Back to Dashboard, or see the all screens hub. | prototype nav |

---

## Section C. Divergences to resolve (input to Steps 2 to 4)

*This is what the single-table view reveals that no single screen shows: the same thing named more than one way, the same action wearing different button labels, tone that drifted, and strings that are still stubs. Nothing here is fixed yet. Step 3 (dictionary) resolves the naming, Step 4 (microcopy rules) resolves the action labels and tone, Step 8 audits the result. A pick is proposed only as a starting point for that discussion, not a decision.*

### C1. One thing, many names (resolve in the Dictionary, Step 3)

| Concept | Variants found in the prototype | Where |
|---------|--------------------------------|-------|
| The aggregate result | team pulse, pulse, score, read, reading, team wellbeing score, team number, team-level signal, aggregate read | dashboard, team-pulse, owner-dashboard, share-owner, home, security-privacy |
| Participation | of the team answered, of the team took part, how much of the team is taking part, what share of the team took part, participation as a share | dashboard, team-pulse, owner-dashboard, digest, share-owner |
| The boss, to the employee | your manager, your operator, a manager, the owner | checkin-privacy ("your manager") vs checkin-entry / checkin-expired ("your operator") |
| Trend section title | Trend, Trend over time | owner-dashboard / digest ("Trend") vs team-pulse ("Trend over time") |
| The paid tier state | Free plan, free plan, free tier, Stay on Free | pricing, payment-failed ("free tier"), upgrade ("Stay on Free") |
| Sign-in verb | Log in, Logging in, Signing you in, Sign in with a magic link, Sign out | login vs login-loading ("Signing you in") vs account ("Sign in", "Sign out") |
| Privacy promise phrasing | Aggregate only, never who / never who answered / never any individual's answers / never individual data / A share, never who | recurs on nearly every screen with different tails |
| The check-in question | How has this week felt for you? (program) vs How has work felt this week? (employee check-in) | program-detail / check-in-setup vs checkin-questions |
| GPC | Global Privacy Control (GPC) vs GPC | cookie-consent banner vs manage dialog |

### C2. One action, many button labels (resolve in Microcopy rules, Step 4)

| Action | Labels found | Note |
|--------|--------------|------|
| Recover from an error | **Retry** (dashboard, team-pulse, program, threshold, roster, toast, invite-send) vs **Try again** (onboarding-company, check-in-setup, contact, payment-failed, checkin-submit, server-error, maintenance) | the single biggest inconsistency: the same error action splits almost 50/50 across two words |
| Go to Programs | Programs, Browse programs, See your programs, Go to Programs, Pick a program, Start with Steady Weeks, Browse the library, Pick another | 8 labels for "open the program library" |
| Go back to the dashboard | Back to dashboard, Back to your dashboard, Dashboard (bare), Go to homepage | |
| Edit the check-in | Edit check-in (program-detail) vs Adjust check-in (team-pulse) | same destination |
| Send email invites | Send invites (onboarding) vs Send (roster) vs Send invite (invite-owner helper) | |
| Share with the owner | Share this with your owner (dashboard) vs Share with your owner (team-pulse) vs Invite your owner (share-owner) | |
| Prompt the team | Nudge the team (dashboard, team-pulse) vs Invite the team (team-pulse-nodata) vs Resend (roster) | "nudge" vs "invite" are different acts, worth separating deliberately |
| Open the full pulse | View full pulse (dashboard) vs Review the full pulse (threshold) vs See the current pulse (threshold-recovered) | |
| Reach support | Contact support (help, server-error, link-expired) vs Contact us (not-found) vs Get in touch (about, contact) | |
| Start an account | Start free (public CTA) vs Create account (signup submit) vs Start with Steady Weeks (library) | the CTA and the button it leads to disagree |

### C3. Tone and cliche watch (decide the rule in Steps 3 to 4)

*Good news first: the prototype is already clean of the worst defaults. No exclamation marks in copy, no emoji in system messages (the word "Emoji" is an answer-type label, not a glyph), no "Welcome!", no "successfully", no em dash. The audit below is about the subtler drift.*

| Item | Where | Question for the rule |
|------|-------|-----------------------|
| "Thanks, you're done" | checkin-complete | success that thanks and uses a contraction; does success celebrate or just state the fact? |
| "Thanks for reaching out" | contact-sent | same question on the support surface |
| "No problem." | onboarding-program-error | casual filler on an error; keep or cut? |
| "Ready when you are" | home-operator final CTA | cutesy; does the operator voice allow it? |
| "Give your owner the big picture" / "loop in your owner" | share-owner | idioms; plain-language rule may prefer literal |
| "Need a hand?" / "Still need a hand?" | server-error / help | friendly idiom for "need help" |
| "Give it a moment" | checkin-submit-error | conversational instruction |
| Contractions: you're, Didn't, cannot/do not/you are | checkin-complete, magic-link-sent vs most screens | product mostly spells out (do not, cannot, you are) but a few contract; pick one and hold it |
| Owner voice person | owner-dashboard "What I can and cannot see" (first person) vs everywhere else second person | is the owner surface first person on purpose? |

### C4. Placeholders and stubs (not final copy; flagged, not rewritten)

- **Hypothesis hedges:** "Pricing is a working figure [?]" (invite-owner, upgrade); "Hypothesis" / "Hypothesis pricing" badges (pricing, settings-plan); "All pricing is a hypothesis". The `[?]` marker must not ship.
- **Pending legal / contact:** "Last updated: pending legal review", "Final wording is pending legal review" (x5, legal), "Exact address pending", "support@brio.example", "Exact response times are being finalized" (contact).
- **Prototype notes:** "Amounts are a hypothesis. Download is not wired up in this prototype." (settings-plan).
- **Placeholder people:** "Team member" x4 and "Names, roles, and photos are placeholders at this stage" (about).
- **Wireframe nav aids (not product copy):** "Continue to confirmation", "If sending fails" (checkin-questions-loading); "Back to Dashboard, or see the all screens hub" and the whole `toast.html` component-reference surface ("Component", "When to use which", "aria-live", "role=dialog").

### C5. Near-duplicate state messages worded differently

The empty and cycle-open states say the same thing on Dashboard (4.0) and Team pulse (4.1) but with different sentences (e.g. dashboard-empty "No score yet, and no live count while the cycle is open..." vs team-pulse-empty "This cycle does not have enough answers to show a score yet..."). Same meaning, two drafts. Decide one canonical phrasing per state and reuse.

---

## Section D. User content and illustrative data (never rewritten)

*These strings are content the user or their data supply, or fixed identifiers. The Voice stage does not rewrite them. Three buckets:*

### D1. User content (identities the user enters, never rewritten)

| String(s) | Screens | Kind |
|-----------|---------|------|
| Acme Co., Acme | onboarding-company (typed), settings, owner-dashboard, owner-digest, checkin-entry, checkin-privacy | company name the operator types; injected into headings |
| Priya, Priya Nair, priya@acme.co | home-operator eyebrow, signup/login prefill, settings, account | operator identity |
| Marcus, marcus@acme.co | invite-owner placeholder/typed, upgrade/payment-failed backdrop, notifications helper | owner identity |
| Yemi O. / yemi@company.com, Sam K. / sam@company.com, Ana R. / ana@company.com, Dev P. / dev@company.com | onboarding-invite, team-roster (all states), invite-send-error | invited teammates the operator adds |
| dev@company,com, ana@compnay.com | invite-send-error | deliberately mistyped invites (the error demo) |
| Contact prefill: Priya / priya@acme.co / "How do I invite my team?" | contact-error | the visitor's own message |

*Rule for the rewrite: leave these values untouched. What IS ours is the frame around them: "Welcome back, {name}", "Signed in as {email}", "Your {company} team wellbeing, {month}". The template wording is voice-governed; the substituted value is not.*

### D2. Product-authored placeholders (greyed hint text; style is ours, keep in scope)

These look like user data but are product-written hints inside empty inputs, so the Voice stage MAY standardize their style (format, example domain) even though the specific example is illustrative:
`you@company.com`, `name@company.com`, `marcus@acme.co`, `Marcus`, `Acme Co.`, `Jane Doe`, `At least 8 characters`, `At least 12 characters`, `Your password`, `Re-enter your new password`, `Search help`, `How can we help?`, `1234 1234 1234 1234`, `MM / YY`, `CVC`, `DELETE`, `Enter your join code`.
*Divergence to note: the example email domain drifts (`company.com` vs `acme.co`), and password minimums disagree (8 on signup, 12 on reset).*

### D3. Illustrative data (fixed at wireframe stage; values fake, labels ours)

Scores and numbers are canonical illustrative data threaded through the prototype so neighboring screens agree: **Steady / Dipping / Low** (pulse read), **7.4 out of 10**, **72%**, **18 of 50 seats**, **$5 / $9 / $90**, **Steady Weeks / Move More / Money Calm / Team Ties** (program names), join link **brio.app/join/steady-otter**, code **STEADY-OTTER**, dates (Jul 12 2026, Aug 12 2026, June), **14 more team members**, **14:00 UTC**.
*The Voice stage does not invent new numbers, but it does govern the words wrapped around them ("out of 10", "of the team answered", "seats used", "billed monthly"). Program names and the four category labels (Mental health, Physical, Financial, Social) are curated-library copy and ARE in voice scope.*

---

## Rewrite log (was / now)

*Filled from Step 6 on. Each row is a product line changed to match `voice.md`. User content and illustrative data are never rewritten. Where a screen's text was already voice-compliant, it is listed as confirmed, not changed.*

### Step 6, etalon: 4.0 Dashboard (dashboard.html and 6 states)

*Changed lines:*

| State | Zone | Type | Was | Now | Rule |
|-------|------|------|-----|-----|------|
| dashboard.html | Pulse | button | Share this with your owner | Share with your owner | Dictionary, one action one label |
| dashboard.html | Pulse | button | Programs | Browse programs | Dictionary, open the library = Browse programs |
| dashboard-open.html | Cycle open | state-message | Results appear after it closes. There is no running tally, for anyone, so no one can work out who answered or when. | Results appear after it closes. There is no live count, for anyone, so no one can work out who answered or when. | Dictionary, running tally becomes live count |
| dashboard-open.html | Cycle open | button | See your programs | Browse programs | Dictionary, one action one label |
| dashboard-error.html | Error | button | Retry | Try again | Dictionary, the biggest split; Try again wins |
| dashboard-error.html | Error | button | Go to Programs | Browse programs | Dictionary, one action one label |
| dashboard-alert.html | Pulse | button | Programs | Browse programs | Dictionary, one action one label |

*Confirmed already voice-compliant, no change (the etalon was written carefully at Stage 04):*
- **dashboard.html:** H1 "Your team pulse," pulse read "Steady," interpretation, "Suggested next step," "View full pulse," "This week," "72% of the team answered," the trend helper, the privacy strip "Aggregate only. You never see who answered," and the link "What your owner can and cannot see."
- **dashboard-empty.html:** "Waiting for at least 5 responses," the no-live-count sentence, "Nudge the team." All canon.
- **dashboard-loading.html:** no product text (skeleton).
- **dashboard-noprogram.html:** "No active program yet," the guidance sentence, "Browse programs." All canon.
- **dashboard-alert.html:** "Wellbeing dipped this week," "See what changed," "Dipping," the interpretation, the trend helper. Honest-signal tone already correct (P3).
- **Not touched (user content and frame):** the eyebrow "Welcome back, Priya" (the frame is ours, the name is UGC), and all structure and markup.

*Read on the etalon: the Stage 04 wireframe was already close to the voice, so the rewrite is small and surgical. The whole change is the Dictionary, one action one label. This sets the bar: most screens will need the same handful of label swaps (Retry to Try again, the eight program-library labels to Browse programs, Adjust to Edit check-in, Send to Send invites), not a full rewrite.*

### Step 7, rollout: the rest of the product (56 files rewritten by 7 subagents, plus 2 residual fixes)

*Consolidated by canon rule, since almost every change is the same handful of Dictionary swaps applied across many screens. Total: 60 files changed since Step 6 (including the etalon), 97 lines, each a one-for-one text swap (git diff 97 insertions / 97 deletions, no markup touched).*

| Canon swap (was to now) | Applied on | Rule |
|-------------------------|-----------|------|
| Retry to Try again | team-pulse-error, threshold-alert-error, invite-send-error (2 rows + "Retry failed" to "Try again on the failed ones"), program-library-error, program-detail-error, team-roster-error, upgrade, toast | Dictionary, the biggest split |
| any library-open label to Browse programs | onboarding-program (button + "pick another from the library" to "browse other programs"), onboarding-program-error | Dictionary |
| Adjust check-in to Edit check-in | team-pulse, team-pulse-open | Dictionary |
| bare Send to Send invites | team-roster, team-roster-empty, team-roster-pending, team-roster-open | Dictionary |
| Sign in / Sign out / Signing to Log in / Log out / Logging | login-loading, reset-password, reset-password-error, reset-password-success, link-expired ("sign-in links" to "login links"), home-operator, home-owner, settings (2), settings-account (2), settings-account-delete (2), cookie-consent-manage | Dictionary |
| running tally / running count to live count | team-pulse-open, team-roster-open, security-privacy (2), check-in-setup, settings-privacy, checkin-privacy | Dictionary |
| Trend over time to Trend | team-pulse, team-pulse-empty, team-pulse-open, share-owner | Dictionary (brevity, P5) |
| took part / taking part to answered | security-privacy (2), owner-dashboard, owner-digest, checkin-privacy, share-owner | Dictionary |
| free tier to Free plan; "tier" to "subscription" | payment-failed (3), share-owner, invite-owner, upgrade, settings | Dictionary |
| "we" in app chrome to Brio | program-library-empty ("we recommend" to "Brio recommends"), settings-plan ("we prompt" to "Brio prompts") | Dictionary |
| buzzwords insight / unlock to plain | pricing (insight to "the aggregate", unlock to "what a paid plan adds"), invite-owner (unlock x2 to "turn on" / "Your upgrade"), upgrade (unlock x2 to "turn on"), share-owner (unlock to "turn on") | P5 / Forbidden |
| idioms big picture / loop in to plain | share-owner ("big picture" to "the team read", "loop in" to "share this with") | Forbidden / P1 |
| cheerful and cute to plain | home-operator ("Ready when you are" to "Your dashboard is one tap away."), contact-sent ("Thanks for reaching out." cut), checkin-complete ("Thanks, you're done" to "You are done. Your answer is in your team's aggregate."), help ("Still need a hand?" to "Still need help?") | Forbidden (P3, P5) |
| contractions spelled out | magic-link-sent ("Didn't" to "Did not") | Dictionary |
| "operator" to "whoever set up this check-in" (employee copy) | checkin-entry, checkin-expired (2) | Dictionary (never "operator" to an employee) |
| Contact us to Contact support | not-found | Dictionary |
| bare Dashboard / "Back to your dashboard" to Back to dashboard | program-detail-notfound, invite-owner-sent | Dictionary |
| [?] hypothesis marker removed (hedge kept) | invite-owner, upgrade | Forbidden (stub marker must not ship) |
| reading to read; in-app "signal" to "alert" | share-owner (reading to read), threshold-alert ("This signal comes from" to "This alert comes from") | Dictionary |
| Continue to Save and continue | onboarding-company | Microcopy, button = verb + object |
| H1 stability (node 3.1) | onboarding-program-loading ("Finding your program" to "Your recommended program"), onboarding-program-error ("Choose your first program" to "Pick your first program") | Microcopy, H1 stable across states |

*Already voice-compliant, no change: home.html, about.html, contact.html, contact-error.html, segment-landing.html, legal.html, signup*.html, login.html, login-error.html, reset-password-loading.html, onboarding-company-loading.html, onboarding-invite*.html, team-pulse-nodata.html, loading skeletons, program-detail (base/draft/end/ended/loading), check-in-setup-error/loading, team-roster-loading/manage, checkin-questions/already/submit-error, server-error, maintenance, cookie-consent, settings-notifications, and more. The etalon was close, and the wireframe stage was written carefully, so most screens needed nothing.*

### Residual divergences to resolve in Step 8

| Item | Where | Proposed fix |
|------|-------|--------------|
| Password minimum disagrees | signup.html "At least 8 characters" vs reset-password.html "At least 12 characters" (and its requirements list) | align both to one number (illustrative rule); recommend 12 to keep the stronger requirement |
| Success H1 duplicates the lead below it | checkin-complete.html H1 "You are done. Your answer is in your team's aggregate." vs lead "Your answer joined your team's aggregate. It is never shown on its own." | trim H1 to "You are done." and let the lead carry the aggregate detail |
| "your operator" on an owner surface | home-owner.html privacy strip "to you or to your operator" | kept on purpose (owner-facing; the owner knows what an operator is; the ban is for employee copy). Flag for confirmation |

### Step 8, audit fixes

*An adversarial audit of all 99 screens against `voice.md` surfaced a short defect list (mechanical sweep was already clean: 0 exclamation, emoji, "successfully", contractions, buzzwords; canon labels uniform). The Group A fixes below were applied; the Group B judgment calls were confirmed as deliberate keeps.*

| File | Was | Now | Rule |
|------|-----|-----|------|
| checkin-questions.html | Submit | Send answers | Button = verb + object; ban bare "Submit" |
| home-owner.html | a plain-language reading | a plain-language read | Dictionary: read, not reading |
| server-error.html | Need a hand? | Need help? | Forbidden idiom (consistency with help.html) |
| signup.html, signup-error.html | At least 8 characters (placeholder + "Use at least 8 characters.") | At least 12 characters | align to reset-password (the stronger requirement) |
| checkin-complete.html | H1 "You are done. Your answer is in your team's aggregate." | H1 "You are done." | Screen heading is a place-name, not a two-sentence success line; the lead carries the aggregate detail |
| payment-failed.html | Stay on the Free plan, retry later | Stay on the Free plan and try again later | Dictionary: ban "retry" |
| checkin-submit-error.html | Give it a moment and try again. | Wait a moment, then try again. | Forbidden: conversational filler |
| settings-notifications.html | only aggregate signals | only aggregate results | Dictionary: "signal" reserved for owner/marketing |
| threshold-alert.html | This is a signal to check in with everyone | This is a prompt to check in with everyone | Dictionary: in-app "signal" |
| team-pulse.html | aria-label "Score, reading and next step" | aria-label "Score, read and next step" | Dictionary: read; accessibility copy is voice-governed |
| help.html | aria-label "Still need a hand?" | aria-label "Still need help?" | consistency with the visible H2 |
| owner-dashboard.html, owner-dashboard-empty.html | What I can and cannot see | What you can and cannot see | reader is "you" (Step 7 fix, logged here for the record) |

*Group B, confirmed deliberate (no change): node 3.1 error H1 stays "Pick your first program" (the error is a library fallback, genuinely a different place); "Select" on library cards stays distinct from the "Pick a program" navigate CTA; bare "Save" / "Change" / "Continue" stay in their form and linear-flow contexts; home-owner "to your operator" stays (owner-facing, where the term is understood).*

*aria-labels are now in voice scope. Two were fixed above; the inventory (Section B) captured visible copy only, so aria-label coverage begins here.*

---

## Status

**Voice stage (05) complete.** All 99 product screens speak one voice, written against `voice.md`, audited, and fixed. Global state: 0 em dash, no banned terms, one H1 per page, markup and user content untouched (every wireframe change is a one-for-one text swap). The voice document (Tone, 5 Principles, Dictionary, Forbidden, Microcopy) is the source of truth; this file is the inventory plus the was / now record. `voice.html` is live in the roadmap (active), the Next badge has moved to Concept, and CLAUDE.md and README.md carry the Voice section with Voice = Done.
