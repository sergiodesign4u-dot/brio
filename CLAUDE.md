# Brio - project rules

*This file is loaded whole at the start of every session and re-read after every compact. It is not a journal and not a report: it is the set of rules that must hold next time. Status lives in `README.md` and in the `done` flags of `/_nav.js`. Reasoning and rejected options live in `docs/decisions.md` (never loaded, referenced by path). Budget: 200 lines - a new rule enters by replacing or generalising an existing one, not by being added beside it.*

## What Brio is

A responsive web SaaS that gives a small business with no HR team a simple way to run real employee wellbeing. It is operated by whoever got handed "people stuff" - an office manager, ops lead, EA, or the founder - and gives the owner honest proof it is working at the team level, without ever surveilling any individual.

**Platform:** mobile-first, fully responsive, mobile base 360px. The operator dashboard is desktop-first in daily use, but every screen is reasoned from 360px up. Native app is out of scope.

**Core differentiator:** the product is the privacy boundary. In an SMB there is no HR layer between the boss and personal data, so aggregation is structural, not a setting. This is the make-or-break constraint (`docs/decisions.md` D-01).

**Scope boundary, answered once:** English only, no second language. No existing brand and no existing design system. 47 screens plus 99 state pages, well above the floor where the later stages stop paying for themselves. (D-11.)

## People and jobs

**Primary persona - Priya (Operator, hero user).** Office manager, ops coordinator, EA, or founder at a 10 to 200 person company with no HR. Low-to-medium confidence: knows the people, not the methodology. Buyer, daily driver, and activation bottleneck. Conflicts between decisions are resolved in her favour. **Secondary - Marcus (Owner):** approver and ROI judge, drives renewal, wants a number and a trend in under two minutes. **End user - Yemi (Employee):** not the buyer but the engine; without honest participation there is no signal, and their individual response never surfaces up the chain.

**Main job:** when I am handed responsibility for employee wellbeing with no HR training, I want a guided system that tells me what to run and when, so that I feel competent and the team actually benefits.

**MVP core, three jobs:** the main job (guided program engine, curated library, opinionated onboarding); J2 - know if the team is struggling early (pulse loop, threshold alert), the retention driver; E1 - feel competent (every operator touchpoint carries an interpretive layer: plain-language score, setup confirmation, next action). Supporting architecture, in scope but not primary design surfaces: J3 - certainty of privacy before responding; J4 - check-in under 30 seconds.

**Riskiest assumption (value risk):** that an SMB operator believes a self-serve, aggregate-only tool delivers team-level value worth paying for, AND that employees trust the promise enough to answer honestly. Its success signal is participation at or above 65%, still unproven. It is closed by a real test, never by design.

**Strategic dimension we must win:** employee trust in the aggregate-only model, made visible in the product UI rather than promised in a policy.

Detail: `research/docs/personas.md`, `jtbd.md`, `cjm-as-is.md`, `cjm-to-be.md`, `benchmark.md`. `personas.md` has one writer only: after stage 02, CJM amends it. Every later stage reads it read-only and returns a contradiction as a finding rather than describing people its own way.

## Non-negotiables

The privacy mechanism is structural and cannot be turned off:

- **Minimum-N aggregate:** no score is shown until at least 5 people have answered (MVP default; legal validation deferred).
- **No live response count** during an open cycle, for operator or employee. In a small team a moving count identifies the person who just answered (D-02).
- **Persistent pre-check-in disclosure** before question 1, every cycle. No named responses, no individual timeline, no drill-down.
- **A clear UI statement** of what the owner can and cannot see.
- **Deferred permanently for the MVP:** individual leaderboards and rankings, drill-down analytics. They close no core job and break J3.

**Compliance boundary conditions, not legal advice.** US primary, Europe secondary. Programs are voluntary and participation-based, never health-outcome-based (ADA). No health, medical or genetic questions (GINA). No clinical health data; mood check-ins are not clinical, and where exactly that line falls needs legal confirmation before launch (HIPAA-adjacent). Aggregate-only architecture supports GDPR data minimisation by construction; individual responses must remain deletable, and EU data residency is an open infrastructure decision.

**Business model, still hypothesis:** per-seat SaaS. Free up to 10 employees, one program, operator-only score. Starter around $4-6 per seat for the full library, trends, and the owner dashboard - the owner dashboard is the paid feature, and the operator upgrades in order to give the owner visibility. Growth around $8-10 per seat for 50 to 200+, multi-team, integrations. All figures are benchmarked guesses, not commitments.

## Design principles

1. **Privacy is the product, not a feature.** Aggregation is not a setting you can turn off.
2. **Make the non-expert operator feel competent.** Every interaction says what to do next, confirms it was done right, and shows it mattered. No HR jargon, no ambiguous dashboards.
3. **Earn trust before asking for data.** Communicate the privacy model clearly and repeatedly, especially at onboarding and at each check-in.
4. **Honest signals over flattering ones.** A dip is called a dip. Success states the fact and never celebrates.
5. **Low effort for everyone.** Employee check-in under 30 seconds, operator setup under 5 minutes, owner review under 2 minutes.

## Language and output

- Internal markdown (this file, `*/docs/*.md`) is **English**. The exception is finished product copy embedded in markdown - the A-E SEO text in `ia/docs/pages/`, the dictionary and examples in `voice/docs/` - which is in the product language, also English here. Chat is **Ukrainian**.
- **No em dash** in project output files. Checked, not assumed.
- **No `[?]` marker in shipped product copy.** In research files it is the honest mark of an unknown and must stay.
- Every fact cites its source. A number that cannot be cited is `[?]`, not an invention. Live sources are read in the session, not from memory.

## Structure

**Folder convention.** Each stage: `docs/` for markdown sources, the html page flat in the stage folder, `screens/` where screenshots are needed. Two folders deliberately hold several stages: `research/` (01, 02, 02+) and `design/` (06 onward). No empty folders created ahead of time - a folder appears together with its first file (D-10).

**`index.html` is the entry to the folder you opened; the hub is always `overview.html`.** At the repo root, `index.html` is the entry to the project. In a stage folder it is the product home page. The list of every page in a stage is `overview.html`, never `index.html`. IA is the one exception by name: its hub is `structure.html`, because it shows node chips rather than a list of pages (D-08).

**Navigation has one source and is rendered, not written.** `/_nav.js` holds the registry of all 12 stages and their pages with a `done` flag; `/_nav.css` holds the look. Every page carries an empty `<aside id="sidebar"></aside>`, declares `window.NAV_BASE`, optionally `window.NAV_SECTIONS`, and - if it is not itself a registry row - `window.NAV_ACTIVE` plus `window.NAV_ACTIVE_LABEL`. Active state, Next and Soon badges, the accordion and relative links are computed at render. **The only manual edit is a row in the registry and `done:true` when a page is finished.** A page never declares `nav-*` rules of its own. Per-stage registries (`ia/_nav.js`, `wireframes/_nav.js`, later `design/_nav.js`) are the registry of nodes inside their own hub and use their own namespace, never `window.NAV`.

**Every markdown file gets a visible place, and it is named by the same step that writes the file.** Three legal forms: its own page; a named section on the stage page, registered in that page's `NAV_SECTIONS`; or a satellite page outside the roadmap registry that declares `NAV_ACTIVE`. An artefact nobody can open in a browser does not exist for whoever makes the decision. Service files (`CLAUDE.md`, `README.md`, `AGENTS.md`, `docs/decisions.md`) need no page.

**Critique and audit are shown as "was to now", not as a defect list.** Each stage page carries a closing section summarising by class, with a status on every row, the reason on anything withdrawn during verification, a "who found it" column, and three to five of the most telling before/after pairs. The full log stays in `docs/`; the page shows the picture.

**Markdown is alive, html does not set.** When a later stage amends a published markdown file, the same step rebuilds the affected section of its page. If the page structure cannot hold the new material, put a visible "Updated after publication" block on it and say so out loud. A silent gap between source and page is a defect: the page is deployed, people read it, and it tells yesterday's truth with a confident face.

## Stage contracts that still bind

**Information Architecture.** Nothing appears for the first time in a wireframe: the wireframe renders a finished structure. SEO is structural and decided here - URL and slug, H1 and H2, breadcrumbs, schema.org, index versus noindex, internal linking. Private and transactional zones (auth, account, employee check-in) are noindex with no schema. Mockups here are black and white; colour arrives at Concept.

**Wireframes.** Grey contract, still binding on every copy made from them: one responsive page per screen from 360px up, no device frames, exactly one main action per screen. `wireframes/` is **frozen after Voice** - stage 05 was the last stage to edit it, and every later stage works on copies in `design/`.

**Voice.** Rules, not mood: each rule carries an example, an anti-example and a source line. Brio speaks like a calm, plain-spoken colleague who has done this before. Five principles: plain language that carries the meaning (a number never appears without its interpretation); privacy as mechanism, not marketing (one specific sentence: aggregate only, minimum of 5, no live count; never a policy link); honest signals, never flattering ones; always a next step and a confirmation; quiet and concrete against a loud category. The reader is "you", no contractions, and Brio names itself "Brio" in the app. One concept, one word: team pulse, score, read, answered, Trend, check-in, minimum of 5, live count, Free / Starter / Growth plans, log in and log out. One action, one label: Try again, Browse programs, Edit check-in, Send invites, View full pulse, Back to dashboard, Share with your owner, and the three distinct acts Nudge the team / Invite the team / Resend. To an employee the boss is "your manager", never "operator". Forbidden: exclamations, emoji, "successfully", celebration, effusive thanks, casual filler, idioms, motivational tone, category buzzwords (insights, drive engagement, empower, thrive, all-in-one, unlock, actionable), superlatives, vague privacy reassurance.

**UI and Visual.** A screen is not drawn, it is assembled from `design/kit/`, and a style written on a page is a second copy of a value. What the kit contains is read out of every wireframe, not guessed and not narrowed to the screens being coloured: two or more screens to enter, form controls at one, and identical anatomy merged into one component with variants. Every component carries a level, counted mechanically, because the css split and the load order at stage 08 come from that column and a composite loaded before its parts steals their rules. An interactive component also carries a variant count taken by walking the browser in both viewports, since part of the product exists at exactly one width. A difference bent into a component from a context is an undeclared variant: name it or fold it. Coverage is stated as a number, never implied by a page that looks finished.

**Concept onward.** Colour never lands on the grey wireframes: `design/` holds coloured copies that own the visual layer only, while structure, text and the set of states stay the property of `wireframes/`. A copy that needs to know what kind of screen it is on asks markup that already exists, never a class added for the occasion; icons arrive through CSS, not through a new element. **Every colour, shape and typeface decision has a pair in the attributes or the recorded designer taste, or it is invention,** and a value read off a generated image is taken from its pixels, never from the caption printed on it. A reference is an input, never an output. A palette that can be guessed from the category is a model reflex, not a decision. Values move forward and are never re-derived: plate pixel, then `design/_theme.css`, then the kit, then the token file. **One file holds a value at a time** - at stage 06 that is `design/_theme.css`, and `DESIGN-artifacts.md` plus the concept stand are its written and live records; the three disagreeing is a defect, not a variation.

## Critique in two instruments

Every critique and audit step runs through **Claude and Codex** (plugin `codex`, read-only stated explicitly, reading the local working folder). Sets are taken **independently and in full before any merge** - Codex must not see Claude's table, or it edits instead of searching; deduplication happens afterwards on complete data. Codex owns what is falsifiable in text: contradictions between files, orphans, states not present in the code, drifted values, broken links, violated rules, facts without a source. What breaks at 360px, what breaks a layout, and pixel comparisons stay with the instrument that has a browser. **Verify before editing:** re-read the place in the file first, and a finding that does not survive stays in the log marked "withdrawn at verification" with the reason, rather than disappearing quietly. Disagreement between the two is not put to a vote: it goes to the user as its own row. Codex unavailable means stop and ask, not a quiet single-instrument pass, and the log says which half was missing. It runs from the shell with an explicit `codex exec --sandbox read-only` and stdin closed; inside a plugin subagent it cannot start at all (nested sandbox), which is not the same thing as unavailable.

**"We keep it" is one word, and it means five actions.** When a visual fix is approved: update it in ONE place in the kit, a variable in `design/kit/kit.css` for a value or the showcase markup for a shape; sync the record in `DESIGN.md`; rebuild the affected section of `design/kit/kit.html`; sign the attribute in `design/concept/docs/concept.md`, and if the fix contradicts an attribute change the attribute itself and say so out loud; then check in the browser that it reached every screen and every repeat of the component by itself. A value carried by hand is a second copy, and drift starts from exactly there.

**Acceptance happens on screen, not in a table.** Where a stage produces a screen or text on a screen, open it in a browser, walk every state, narrow to 360px, and only then say it is done. Deliver a fix as a prompt rather than a hand edit: a hand edit does not survive the next clone, and repeatability goes with it.

## Closing a stage

The last step of every stage runs this ritual, in order: gather what changed since the last close; classify each item as rule, status or decision, because the kind determines the address, not the stage; **show what to delete from this file** with a reason, beside the additions, in one table; count the budget, was and will be, against 200 lines; write only after an explicit go-ahead; put status in its own two files - the row in `README.md` and `done:true` in `/_nav.js`.

## Where things live

| What | Where |
|---|---|
| Status of every stage | `README.md` table, `done` flags in `/_nav.js` |
| Reasoning, rejected options | `docs/decisions.md` |
| Entry for the Codex critic | `AGENTS.md` |
| Research, personas, JTBD, CJM | `research/docs/` |
| IA structure, flows, per-node specs | `ia/docs/`, `ia/docs/pages/` |
| Wireframe conventions, screen matrix, critique log | `wireframes/docs/` |
| Voice rules and the microcopy inventory | `voice/docs/` |
| Visual language, brand plates, references | `design/concept/docs/`, `design/concept/assets/` |
