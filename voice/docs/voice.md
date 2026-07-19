# Brio voice (Stage 05)

*The rules by which Brio speaks. Voice is rules, not a mood: an adjective like "friendly" cannot write a button, so every rule below carries a one-sentence rule, an example line, an anti-example line, and the source line it follows from in `personas.md`, `research.md`, `ux-patterns.md`, or `competitors.md`. This document, once complete, is what every screen is written against.*

*Language: the product ships in English, so all example and anti-example lines are real English interface strings; the internal rubric is English too. No em dash anywhere: commas, periods, or a spaced hyphen. Sources are cited by file and section so any rule can be traced back to data.*

---

## Tone orientation

Brio sells into wellbeing, privacy, and unfamiliar people-work, three places where trust matters more than cleverness. The whole product is a privacy boundary standing in for the HR layer a small company does not have, so the voice has to earn belief, not applause.

So Brio speaks like **a calm, plain-spoken colleague who has done this before**: it hands the non-expert operator a clear next step, it reports team health honestly even when the news is a dip, and it proves privacy by naming the mechanism rather than promising to care. Proof over promises, honesty over cheer, brevity over buzzwords.

The single load-bearing line from the research: *"The product acts as a knowledgeable peer, not a data terminal."* (`ux-patterns.md`, Pattern B4). Everything below is that sentence, made operable.

---

## Principles

### P1. Plain language, and carry the meaning

**Rule.** Say it in everyday words and put the interpretation right next to the number, so a non-expert always knows what a reading means without HR training.

**Example.**
- "The team is holding steady this week, in line with last."
- "72% of the team answered. Above the minimum of 5, so a score can be shown."

**Anti-example.**
- "Engagement index 7.4 (participation quotient 72%)."
- "Leverage your team wellbeing analytics to action key drivers."

**Source.** `ux-patterns.md` B4: "the operator needs the product to tell them 'this is normal' or 'this is worth noticing' ... Scores are not shown without context. The product acts as a knowledgeable peer, not a data terminal." `personas.md`, Priya, What scares her off: "A dashboard full of numbers without interpretation" and "A product that assumes she knows HR terminology." `research.md`, Gap (f): "makes a non-expert operator the hero of the interface."

---

### P2. Privacy as mechanism, not marketing

**Rule.** Every privacy line names the concrete mechanism (aggregate only, minimum of 5, no live count) in one specific sentence, never a soft reassurance and never just a link to a policy.

**Example.**
- "No one sees your individual response. Not your manager, not the owner, no one."
- "No score appears until at least 5 people have answered, and there is no live count."

**Anti-example.**
- "Your privacy matters to us. Read our Privacy Policy to learn more."
- "Rest assured, your data is safe and secure with Brio."

**Source.** `personas.md`, Marcus, What scares him off: "Privacy language that sounds like marketing copy rather than a structural guarantee," and Trust triggers: "He trusts architecture over policy." `personas.md`, Yemi, Trust triggers: "One specific sentence before Question 1 ... Not a link to a privacy policy. A sentence." `ux-patterns.md` B5: "one sentence, in plain language, specific ... The repetition is the trust."

---

### P3. Honest signals, never flattering ones

**Rule.** Report team health as it is: a dip is called a dip, plainly and early; success states just state the fact and the next step, they never congratulate.

**Example.**
- "Wellbeing dipped this week."
- "The team is down from last week. It is worth a look now, before it settles into a pattern."
- Success: "Answers saved. You can close this tab."

**Anti-example.**
- "Great news, your team is thriving!"
- "Check-in submitted successfully. Way to go!"

**Source.** `research.md`, Objectives: "Signal must be honest, not vanity." `research.md` Benchmark C6 tone target: "honest, useful, and non-judgmental, rather than clinical, corporate, or surveillance-flavored." `personas.md`, Yemi: she has seen "wellness theater ... 'we heard you' but nothing changed," so hollow cheer reads as the thing she distrusts. CLAUDE.md Design Principle 4: "If things are trending down, the product says so plainly."

---

### P4. Always a next step, and a confirmation

**Rule.** Speak so the operator always has one clear next action and, after they act, a plain confirmation it was done, because they were handed this role without training and need competence more than praise.

**Example.**
- "Suggested next step: Share this with your owner."
- "Waiting for at least 5 responses. Nudge the team."
- Error: "Your team data is safe. Try again, or head to your programs in the meantime."

**Anti-example.**
- A bare score with no next action ("7.4 out of 10." and nothing else).
- "You are a wellbeing pro now!" (praise instead of the next step).

**Source.** `personas.md`, Priya, Trust triggers: "Product tells her what to do next, not just what happened," and "Gets a confirmation moment: 'you launched a program correctly, here is what the team saw.'" `ux-patterns.md` B1: "Every screen should have one clear next action, not a menu of options." `ux-patterns.md` B4: "The operator needs confirmation, not just data." `jtbd.md` E1: "feel like a competent 'people person'."

---

### P5. Quiet and concrete, against a loud category

**Rule.** Cut the wellbeing-industry abstractions and hype the whole category leans on; use concrete words, keep it short, and never reach for superlatives, exclamation marks, or emoji. Where everyone else sounds the same, plain is the differentiator.

**Example.**
- "Pick a program. Brio runs it and reads the team pulse for you."
- "Programs" (a tab named for the thing, not "Insights").
- "Start free."

**Anti-example.**
- "Empower your people with AI-powered insights that drive engagement across your all-in-one wellbeing platform."
- "Unlock actionable insights to fuel a healthier, happier culture!"

**Source.** `research.md`, Competitor language (Stage 05 crawl): 12 competitors converge on one voice built from "insights," "drive engagement," "key drivers," "all-in-one," "empower," "thrive," "AI-powered," and "healthier people, better business," almost always sold to the buyer with a "Request a demo" wall. `ux-patterns.md` B1: the operator dashboard "must be scannable in under 30 seconds." `personas.md`, Priya, What scares her off: "A product that assumes she knows HR terminology" (category buzzwords are that jargon in a friendlier coat). CLAUDE.md Design Principle 5: "Low effort for everyone."

*The competitor crawl also reinforces P2: no competitor puts the privacy mechanism above the fold. Officevibe's real rule (aggregate only, minimum-N) lives in a help article while its marketing says the vague "shown only when privacy rules are met," and even "anonymous" is sold to the manager ("Anonymous feedback to know how employees really feel"). Saying the mechanism plainly, to the employee, is open territory Brio takes.*

---

## Dictionary

*One concept, one word. Every pair below resolves a divergence already marked in `microcopy.md` Section C, so this is a set of decisions, not a new search. Terms are taken from the language of the personas and the research, not invented. Where two labels turned out to be two genuinely different actions, both are kept and the boundary is stated.*

### How Brio addresses people

- **The reader is "you."** One address form on every surface: the operator, the owner, and the employee are each spoken to as "you." Describe other roles in the third person ("what the owner sees"), never switch the reader to first person. Fix: owner dashboard "What I can and cannot see" becomes "What you can and cannot see." Why: `ux-patterns.md` B4, a knowledgeable peer speaks to a person, and one address form keeps the voice steady across the three audiences.
- **No contractions.** Write "do not," "cannot," "you are," "did not," not "don't," "can't," "you're," "didn't." Why: the product already spells out on almost every screen; holding it makes the voice calm and consistent rather than chatty (P3, P5). Fix: "Thanks, you're done" and "Didn't get it?" carry the only slips.
- **Brio names itself "Brio."** In product UI the subject is "Brio" ("Brio runs it for you"). "We" and "us" belong only to marketing and support voice ("we reply to your email"), where a human team is speaking. Never "we" inside the app chrome.
- **Register: plain, calm, specific.** Warm is allowed; cute, hype, and jokey are not (P3, P5). No exclamation marks, no emoji, no superlatives. See Forbidden.

### One concept, one word

| Concept | Use this | Not this | Why (source) |
|---------|----------|----------|--------------|
| The whole signal surface | **team pulse** / **pulse** | signal (in-app), reading | the chosen pattern is the Pulse Loop; the etalon H1 is "Your team pulse" (`ux-patterns.md` sec 6). "signal" stays for owner and marketing framing only ("a team-level signal") |
| The number out of 10 | **score** | team number, rating, index | plain-language, `ux-patterns.md` B4 ("a 7.2/10 team score") |
| The plain-language interpretation | **read** (a read, you read) | reading, insight | "insight" is the category buzzword Brio drops (P5); "read" is concrete |
| Share of the team who responded | verb **answered**; heading **Participation** | took part, taking part | one verb; "72% of the team answered" is the concrete form. `research.md` uses "participation rate" for the metric, "answered" for the act |
| Movement over time | **Trend** | Trend over time | brevity (P5); owner surfaces already say "Trend" |
| The boss, to an employee | **your manager** (who cannot see) and **the owner** | your operator, your admin | employees do not know the word "operator"; `personas.md` Yemi asks "Can my manager see my answer?" For the resend action say "whoever set up this check-in," never "operator" |
| The person who runs Brio, to themselves | **operator** (operator-facing and internal only) | admin, coordinator, manager | Brio's own term; never shown to employees |
| The paid tiers | **Free**, **Starter**, **Growth** (proper nouns); "the Free plan" | free tier, the free tier | one naming; ban "tier" in user copy. Fix: "Stay on the free tier" becomes "Stay on Free" |
| Sign-in verb | **log in** / **log out** | sign in, sign out, signing you in | one verb pair; nav and login already use "Log in." Fix: "Sign out," "Sign in with a magic link," "Signing you in" |
| The recurring employee check | **check-in** (noun and the act) | survey, pulse survey, questionnaire | `research.md` and personas use "check-in"; "survey" is the category word employees distrust ("wellness theater") |
| The privacy floor | **minimum of 5** | threshold, minimum-N (in UI), N=5 | plain number; "minimum-N" is internal only |
| A running total during an open cycle | **live count** | running tally, live tally | one term. Fix: "no running tally" becomes "no live count" |
| The employee-facing question | **How has work felt this week?** | How has this week felt for you? | one wording, used identically in program setup and in the employee check-in |
| Aggregate-only tail (operator) | **Aggregate only. You never see who answered.** (full) / **never who** (short) | never individual data, never any individual's answers | sanctioned variants only; marketing keeps "Brio never shows any individual's answers" |

### One action, one label

| Action | Label | Not this | Note |
|--------|-------|----------|------|
| Recover from an error | **Try again** | Retry | the single biggest split in the inventory; "Try again" is the plainer human word (P1). Ban "Retry" everywhere, including the toast |
| Open the program library | **Browse programs** | See your programs, Go to Programs, Browse the library | the tab is "Programs"; the action is "Browse programs" |
| Choose a first program | **Pick a program** | Start with Steady Weeks (as a generic label) | "Start with {Program}" is fine only when it starts that named program |
| Go back to the app dashboard | **Back to dashboard** | Back to your dashboard, Dashboard (bare) | "Go to homepage" is a different place (the public 500 page) and stays |
| Edit the check-in | **Edit check-in** | Adjust check-in | one label; fix team-pulse "Adjust check-in" |
| Email invites to teammates | **Send invites** (many) / **Send invite** (one owner) | Send | ban bare "Send"; singular only when there is one recipient |
| Go to the owner-share surface | **Share with your owner** | Share this with your owner | |
| Send the owner their access | **Invite your owner** | (kept distinct from Share) | Share opens the surface; Invite sends the actual owner access. Two acts, two labels |
| Open the full pulse | **View full pulse** | Review the full pulse, See the current pulse | one label |
| Reminder to already-invited members | **Nudge the team** | (kept distinct) | used only when waiting on responses from people already invited |
| Add new members | **Invite the team** | (kept distinct) | used only first-run, when there are no members yet |
| Resend one pending invite | **Resend** | (kept distinct) | one member, one pending invite |
| Reach support (help action) | **Contact support** | Contact us | fix not-found "Contact us" |
| Warm marketing invitation | **Get in touch** | (kept distinct) | about and contact hero only, not an error-page support link |
| Marketing / nav call to action | **Start free** | (kept distinct) | navigates to signup; the signup submit button stays **Create account** (the actual act) |

### Allowed and banned words

- **Allowed plain product terms:** pulse, score, read, check-in, program, cycle, aggregate, participation, nudge, minimum of 5, live count, owner, operator (operator-facing), team.
- **Banned category jargon** (see Forbidden for was/should-be): insights, drivers, engagement (as a buzzword noun), all-in-one, empower, thrive, leverage, unlock, actionable, seamless, holistic, solutions, "drive" as in "drive engagement." Why: `research.md` Competitor language, all 12 competitors converge on these; plain words are Brio's differentiation (P5).

## Forbidden

*What Brio never writes. Without this list, the model default (enthusiasm, exclamation, emoji, buzzwords) comes back with every new prompt. Each row pairs the ban with a concrete was / should-be, drawn from `microcopy.md` Section C and `research.md` Competitor language. The prototype is already clean of most of these; the list keeps it that way through the rewrite.*

| Never | Was (or the risk) | Should be | Why |
|-------|-------------------|-----------|-----|
| Exclamation marks in copy | "Great news, your team is thriving!" | "The team is holding steady this week." | P3, honest not flattering; calm register |
| Emoji in any product or system text | "Answers saved ✅" | "Answers saved." | P5; the word "Emoji" as an answer-type label is not an emoji and stays |
| The word "successfully" | "Check-in submitted successfully" | "Answers saved." | states the fact, not the achievement (P3) |
| Celebration on success | "Thanks, you're done" | "You are done. Your answer is in your team's aggregate." | success states the fact and the next step, no gushing (P3, P4) |
| Effusive thanks | "Thanks for reaching out." | "Message sent. We reply to your email, usually within one business day." | plain acknowledgement over warmth theatre |
| Casual filler and interjections | "No problem. Choose your first program." / "Oops" / "Uh oh" | "Choose your first program from the library." | P1, plain; filler adds nothing |
| Cute or jokey lines | "Ready when you are" | "Your dashboard is one tap away." | P5, quiet not cute |
| Idioms where a plain word exists | "Give your owner the big picture" / "loop in your owner" | "Give your owner the team read" / "share this with your owner" | P1, concrete over idiom |
| Motivational or aspirational tone | "Start your wellbeing journey" / "Build a thriving culture" | "Run your first program in about five minutes." | P3, P5; this is `personas.md` Yemi's "wellness theater" |
| Category buzzwords | "Actionable insights that drive engagement" / "empower your people" / "all-in-one platform" | "See what to do next." / "help your team" / "one place to run wellbeing" | P5; `research.md` Competitor language, the sea of sameness |
| Contractions | "you're," "don't," "can't," "didn't" | "you are," "do not," "cannot," "did not" | one consistent register |
| Vague privacy reassurance | "Your privacy matters to us." / "Rest assured your data is safe." | "No one sees your individual response. Not your manager, not the owner, no one." | P2, mechanism not marketing |
| HR or admin jargon to the operator or employee | "program administrator," "utilization," "your operator" (to an employee) | "you," "how much of the team took part," "whoever set up this check-in" | `personas.md` Priya scare-off, HR terminology; `research.md` gap (f) |
| Prototype stubs and hypothesis markers shipping as copy | "Pricing is a working figure [?]" / "Download is not wired up in this prototype" | final copy, or the line removed | the "[?]" marker and prototype notes must never reach a user |
| Superlatives and hype proof | "industry-leading," "#1," "market-leading" | a plain, specific claim or nothing | P5; the competitor crutch Brio does not need |

## Microcopy

*Rules per element type and per state, each with a real Brio line. Every rule is checked against the Principles and the Dictionary above. After this section the voice document is complete: any line in the product is written from here.*

### By element type

**Button.** A verb plus its object, so the result is visible before the tap. Never a bare "OK," "Next," "Submit," or "Retry."
- Yes: "Send invites," "Browse programs," "View full pulse," "Nudge the team," "Try again."
- No: "Submit," "OK," "Continue" (when a specific result is known), "Retry."
- The canonical label for each shared action is fixed in the Dictionary, one action one label.

**Screen heading (H1).** Names the place in Dictionary words, not a slogan. It stays stable across a screen's states unless the state genuinely is a different place.
- Yes: "Your team pulse," "Programs," "Set up the check-in," "Privacy center," "Program not found."
- Fix: node 3.1 drifts across "Your recommended program" / "Finding your program" / "Choose your first program"; pick one H1 for the resolved page and let the loading and error states keep it.

**Eyebrow and breadcrumb.** The location or context, short. "Welcome back, Priya," "Programs / Steady Weeks," "Step 1 of 3." No sentence, no promise.

**Form field.** The label says what to enter; the placeholder shows the format; the validation error says the one thing to fix.
- Label: "Work email," "Company name," "Owner email."
- Placeholder (a format hint, never a repeat of the label): "you@company.com."
- Validation: "Use at least 8 characters." / "Enter a valid email so the invite reaches your owner." Never "Invalid input" or "This field is required."

**Link.** Describes the destination, never "click here" or "learn more." "What your owner can and cannot see," "how privacy works," "Preview the employee check-in."

**Helper and micro text.** One plain sentence, often the privacy mechanism or a concrete reassurance. "The roster is who you invited. It is never linked to who answered what."

**Privacy strip (a Brio-specific element, on nearly every screen).** One specific mechanism sentence (P2), phrased for the audience, never a soft reassurance.
- Operator: "Aggregate only. You never see who answered."
- Employee: "Your answers are anonymous. No named responses, no individual timeline."
- Owner: "You only ever see the team aggregate, never individual data."

### By state (the tone a state carries)

**Base.** The page the user acts from. The operator pulse card carries score, then read, then one suggested next step, in that order (P4): "Steady. The team is holding steady this week, in line with last. Suggested next step: Share with your owner."

**Empty and pre-minimum-N.** Say why it is empty and give the one way out; never a dead end. "Waiting for at least 5 responses. No score yet, and no live count while the cycle is open ... Nudge the team." The empty state is also a privacy moment: it explains the minimum of 5 as protection, not a limitation.

**Cycle open (domain state).** Explain that results come after the cycle closes, and why there is nothing to show now: the no-live-count rule. "This cycle is open. Results appear after it closes. There is no live count, for anyone, so no one can work out who answered or when."

**Loading.** Silent (a skeleton) or one line naming what is loading. "Saving...," "Sending your answer." No chatter, no "Please wait while we work our magic."

**Error.** Three beats: what happened, that the data is safe, what to do. No apology theatre, no joke, no blaming the user. "Could not load your pulse. Something went wrong on our side. Your team data is safe. Try again, or head to your programs in the meantime." On the employee submit error, reassuring the person is right and stays plain: "It was not anything you did."

**Success.** Name the fact and the next step; do not celebrate (P3). "Answers saved. You can close this tab." "Invite sent." Never "successfully," never an exclamation.

**Alert and dip (the honest-signal state).** Name the dip plainly, calmly, early, with one step, and never as a read on any individual (P2, P3). "Wellbeing dipped this week. See what changed." The detail view holds the line: "a team-level move, not a read on any one person ... it is not a diagnosis of anyone."

**Danger action.** Before the press, say exactly what happens and what cannot be undone, and require a deliberate confirmation. Where a privacy fact reassures, state it. "This permanently erases your account and your company's data. It cannot be undone (GDPR erasure). No individual responses to erase, they were never stored by person. Type DELETE to confirm." The confirm button names the act ("Delete account"), never "OK."

---

*Voice document complete: Tone orientation, five Principles, Dictionary, Forbidden, and Microcopy. From Step 6 on, every screen is rewritten against this file, and `microcopy.md` records each line as was / now.*
