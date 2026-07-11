# Information Architecture - Base Layer (Sitemap)

*Phase: IA (Basic). Built from user-research/docs/personas.md and jtbd.md, and the traced backlog in user-research/docs/cjm-to-be.md. Cross-cutting rule: every screen serves a job. A screen with no job is an [ORPHAN]. A job with no screen is a hole. Structure is derived from jobs, not copied from a competitor menu.*

---

## Entities

*Product objects the person deals with to close their jobs. Screens only display objects, and objects grow from jobs. Each entity cites the job that generates it. An object no job requires goes to "Under question," not the main list.*

| # | Entity | Parts / fields | Job that generates it | Related to |
|---|--------|----------------|-----------------------|------------|
| 1 | **Company workspace & operator account** | company name, company size (drives the pre-selected first program), operator login + settings, current plan | Main (a place to run wellbeing) + backlog item 1 (self-serve signup). Priya is the account holder | Plan, Program, Team roster, Owner |
| 2 | **Program library** (curated catalog) | categories (mental health, physical, financial, social), program cards, "recommended for your size" tag | Main + J6 ("tells me what to run") + item 2 | Program |
| 3 | **Program** (a chosen, running program) | title, category, cadence / duration, status (draft / active / ended), the check-in questions it carries | Main (run wellbeing) + J6 (do not invent the process) + item 2 | Program library, Check-in cycle, Team roster |
| 4 | **Team roster** (invited members) | invited employees (identity used for the invite only), join link / join code, team size, aggregate participation rate | Main (invite the team) + J4 (no-account first check-in) + item 3 | Company, Employee participant, Check-in cycle |
| 5 | **Check-in cycle** (pulse) | 1 to 3 questions (emoji / slider), cadence (weekly), open / closed state, minimum-N=5 gate, no live count while open | J2 (pulse / early warning) + J4 (under 30s) + item 3 | Program, Check-in response, Team pulse result |
| 6 | **Check-in response** (individual) | one emoji / slider value, timestamp | J3 (private before responding) + J4 + E2 + item 3 / 4 | Check-in cycle (aggregates into), Employee participant |
| 7 | **Team pulse result** (aggregate) | plain-language score + number, trend over time, participation rate, minimum-N state (hidden until N>=5), interpretation + suggested next action | J1 (prove it works) + J2 + J5 + E1 + items 5, 6 | Check-in cycle, Owner, Notifications |
| 8 | **Privacy disclosure / trust surface** | pre-Q1 disclosure sentence, minimum-N=5 statement, "no live count" behavior, subscription-as-privacy statement, "what the owner can and cannot see" panel | J3 (certainty before responding) + E2 (supported not monitored) + item 4 | Check-in cycle, Team pulse result, Owner |
| 9 | **Owner** (invited stakeholder) | name / email, read-only aggregate-only access, monthly digest subscription | J1 (honest signal) + J5 (budget decision) + S2 (share with owner) + item 8 | Team pulse result, Company, Plan |
| 10 | **Plan / subscription** | tier (free up to 10 / Starter / Growth), seats, price, what each unlocks (owner dashboard = paid) | item 1 (free tier) + item 8 (owner dashboard paid); underpins subscription-as-privacy (item 4) | Company, Owner, Privacy disclosure |
| 11 | **Notifications** (alert / digests / reminder) | threshold alert (aggregate drop), weekly operator digest, monthly owner digest, basic check-in reminder; each has type, trigger / cadence, recipient | J2 (threshold alert, item 7) + retention (weekly digest, item 9) + S2 (owner digest, item 8) + J4 (basic reminder, item 10) | Team pulse result, Program, Check-in cycle, Owner |
| 12 | **Employee participant** (thin) | arrives via join link / code, no account for the first check-in, optional light identity only to return for later cycles | J3 + J4 + E2 + item 3 | Team roster, Check-in response |

**Privacy spine (two honest flags):**
- **#6 Check-in response** exists in the system but is never surfaced individually, it only feeds the aggregate (the structural boundary). **#8 Privacy disclosure** is a UI / trust surface (content + rules), not stored user data, but it is the product's differentiator, so it is inventoried as a first-class object and must be visible to the operator as proof, not only to the employee (cjm-to-be.md Step 9 note).
- **#4 Team roster** vs **#12 Employee participant**: the operator knows who was invited (she sent the invites) but never which invitee answered what. Kept separate on purpose, because that split is the whole privacy story.

### Under question (no confirmed job requires them, or hypothesis-only)

| Entity | Why it is parked | Marker |
|--------|------------------|--------|
| **Employee team-result view** (reciprocity: employee sees the team aggregate after answering) | Traces only to HJ2, a hypothesis in jtbd.md; backlog item 12 (LATER) | [?] |
| **Referral / share-to-network surface** | Operator-to-peer (S1) and owner peer-sharing (E3) are both [?] hypotheses; the confirmed sharing job S2 (operator-to-owner) is already covered by Owner + Notifications. No cash-referral object (Stage 2 cut) | [?] |
| **Custom nudge schedule** | Traces to J4 but is LATER / paid (backlog item 11), not MVP | deferred |

**Deliberately NOT invented** (from competitor menus, no job generates them, on the Stage 2 cut list): individual leaderboards / rankings, drill-down analytics object, custom program builder.

---

## Screen map (detailed nodes)

*Detailed node map derived from the Entities and jobs above. This replaces the Base Layer screen tree, it does not duplicate it. Each node is a card: number X.Y (X = cluster, Y = node or state within it), name, type (page | dialog | state | flow | section), INCLUDES (blocks and components on it), transitions (arrows to the next nodes), and the persona or job it serves. Dialogs and states are first-class nodes, not footnotes. The map grows as the phase proceeds: the footer (0.2, Step 3) and the system cluster (11, Step 6) register more nodes. Surface tags: [pub] public, [P] operator (Priya, primary), [O] owner (Marcus, secondary), [E] employee (Yemi, third-party). Full per-node specs live in ia/docs/pages/. Flow references F1..F4 point at ia/docs/flows.md.*

### Cluster 0 - Global shell and home  [pub / all]

**0.0 Home (marketing home)** · page · Main + item 1; the per-page template exemplar
INCLUDES: 0.1 nav · hero (privacy-first H1 + state-dependent CTA) · how-it-works (3 steps, mirrors F1) · privacy proof (0.3 public variant) · programs preview (0.6 categories) · pricing teaser (1.0) · FAQ teaser (1.4) · final CTA · 0.2 footer. States: guest / logged-in operator / owner. Full A-E SEO (indexed). Full spec: ia/docs/pages/home.md
→ 2.0 Sign up (F1) · 4.0 Dashboard (returning operator) · 1.0 Pricing · 1.1 Security and privacy · 2.1 Log in

**0.1 Navigation (header + mobile tabs)** · section (global) · structural, gates every operator job [Step 2]
INCLUDES: brand · 4 job tabs (Dashboard, Programs, Team, Owner) · Settings utility · auth and role variants (guest / operator / owner-view / employee-none) · mobile bottom tabs (base 360px)
→ 4.0 Dashboard · 5.0 Programs · 6.0 Team · 7.0 Owner · 8.0 Settings

**0.2 Footer** · section (global) · structural, second internal-linking plane
INCLUDES: trust strip (aggregate-only privacy line) · columns (Product, Company, Resources, Legal) · SEO popular-links block · bottom row (copyright, cookie settings, social). Mobile: columns and SEO block collapse into accordions, present in the DOM (crawlable). Full spec: ia/docs/pages/footer.md
→ 1.0 Pricing · 1.1 Security and privacy · 1.2 About · 1.3 Contact · 1.4 Help · 1.5 Category or segment landing · 1.6 Legal · 11.3 Cookie settings

**0.3 Privacy-disclosure component** · section (global, canonical) · J3 + E2 + item 4; the differentiator made into UI
INCLUDES: canonical privacy spine (aggregate only · minimum-N=5 · no live count, D1 · subscription-as-privacy · what the owner can and cannot see) · role variants (employee pre-Q1 / operator proof / owner comfort / public explainer) · "see what your manager sees" expander (employee) · below-minimum-N state. Full spec: ia/docs/pages/privacy-disclosure.md
→ rendered by 10.1, 8.2, 3.1, 4.0, 9.1, 1.1 (variants, not copies)
[global component discovered at Step 3; 0.4 Program card, 0.5 Dialog shell, 0.6 Canonical lists follow]

**0.4 Program card** · section (global, canonical element) · Main + J6 + item 2
INCLUDES: title · category (from 0.6) · cadence and duration · short description · "recommended for your size" tag · status badge (draft / active / ended, manage only) · questions count · primary action (Select / Confirm / Manage). States: default, recommended, active, draft, ended, skeleton. Full spec: ia/docs/pages/program-card.md
→ 5.1 Program detail (the whole card is one link); rendered by 3.1, 5.0, 5.1 (copies, propagate on change)

**0.5 Dialog / modal shell** · dialog (global, canonical shell) · supporting; one accessible modal contract
INCLUDES: overlay (inert, dimmed backdrop) · container (role="dialog", aria-modal) · header (title = accessible name, close X) · body slot · footer (primary + secondary or cancel) · dismiss (X / Esc / backdrop). Variants: form (6.1), decision (7.2), destructive confirm, non-modal banner (11.3). States: default, loading, error, success. Full spec: ia/docs/pages/dialog.md
→ reused by 6.1, 7.2, 11.3, and every confirmation; focus trap, focus returns to opener on close

**0.6 Canonical lists** · section (global reference) · supporting; single source for repeated values
INCLUDES: program categories (mental health / physical / financial / social) · plan tiers (Free / Starter / Growth, prices [?]) · company-size buckets (cut points [?]) · input types (emoji / slider) · cadence (weekly) · statuses (program draft/active/ended, cycle open/closed). Full spec: ia/docs/pages/canonical-lists.md
→ consumed by 0.4, 5.0, 1.5 (categories); 1.0, 7.2, 8.1 (tiers); 3.0, 0.4 (sizes); 5.2, 10.2 (inputs). Change here, propagate to consumers
[global components exhausted at Step 3; pages begin at Step 4 with Home 0.0]

### Cluster 1 - Public marketing and acquisition  [pub]

**1.0 Pricing** · page · item 1 (transparent price, no demo)
INCLUDES: 0.1 nav · tier table (Free / Starter / Growth) · "owner dashboard = paid" callout · subscription-as-privacy note · FAQ teaser · CTA "Start free" · 0.2 footer
→ 2.0 Sign up · 0.0 Landing

**1.1 Security and privacy** (public explainer) · page · Main + benchmark differentiator + J3 and E2 trust
INCLUDES: 0.1 nav · how the aggregate-only model works · minimum-N=5 · no live count · what the owner can and cannot see · subscription-as-privacy · FAQ · CTA "Start free" · 0.2 footer
→ 2.0 Sign up · 1.6 Legal (Privacy Policy)
[registered from the footer at Step 3; this is Brio's differentiator made public]

**1.2 About** · page · supporting (marketing)
INCLUDES: 0.1 nav · mission (wellbeing without surveillance) · team · contact link · 0.2 footer
→ 1.3 Contact

**1.3 Contact / Support** · page · supporting
INCLUDES: 0.1 nav · support email or form · help link · response-time note · 0.2 footer
→ 1.4 Help

**1.4 Help / FAQ** · page · supporting (also an SEO surface)
INCLUDES: 0.1 nav · FAQ groups (setup, privacy, billing) · search within help [?] · contact fallback · 0.2 footer
→ 1.3 Contact

**1.5 Category / segment landing** (SEO template) · page (listing template) · Main (acquisition)
INCLUDES: 0.1 nav · canonical landing template · H1 per target · program-category or segment copy · CTA "Start free" · internal links · 0.2 footer
→ 2.0 Sign up
[SEO block structure is fixed; the exact list of categories and segments is [?] pending keyword research. One canonical template, not N hand-built pages. Serves the existing Main job; it is an IA mechanism, not a new job.]

**1.6 Legal documents** (Privacy Policy, Terms of Service, Cookie Policy) · page (shared legal template) · compliance
INCLUDES: one legal-document template rendering each doc · last-updated · "cookie settings" re-opens 11.3
→ 11.3 Cookie consent (settings)
[shared template, handled as a TEMPLATE MAP at Step 5; content is legal copy, [?] pending legal review]

*Nodes 1.1 to 1.6 were registered from the footer (0.2) at Step 3, per discover-as-you-go. Social links (LinkedIn) are [?], not yet a node. Compliance badges (SOC 2, GDPR) are [?] pending legal review, deliberately not shown.*

### Cluster 2 - Authentication  [pub to P]

**2.0 Sign up** · page · item 1 (self-serve, no credit card)
INCLUDES: email + password · magic-link option · privacy and terms links · CTA "Create account"
→ 3.0 Company setup (F1) · 2.2 Magic-link sent · 2.1 Log in

**2.1 Log in** (email + magic link) · page · supporting (return access, gates Main / J1 / J2 / E1)
INCLUDES: email + password · magic-link option · forgot-password
→ 4.0 Dashboard · 2.2 Magic-link sent · 2.3 Invalid or expired link

**2.2 Magic-link sent** · state · supporting
INCLUDES: "check your email" confirmation · resend · open-mail hint
→ 4.0 Dashboard (on valid link) · 2.3 (if expired)

**2.3 Invalid or expired link** · state (error) · supporting, never a dead-end
INCLUDES: explanation · "request a new link" CTA
→ 2.1 Log in

### Cluster 3 - Onboarding, guided first-run wizard  [P]

*Linear, time-budgeted under 5 minutes. Sequential flow depth, not navigational depth. Runs once, not reachable from global nav afterward.*

**3.0 Company setup** (name, size) · page (wizard step 1) · J6 (size drives the pre-selected program)
INCLUDES: company name · company-size selector · progress "step 1 of 3"
→ 3.1 First program confirm (F1)

**3.1 First program confirm** (pre-selected by size) · page (wizard step 2) · Main + J6 + item 2
INCLUDES: loading (pre-select by size, F1 Load1) · recommended program card (canonical program card, Step 3) · what it runs · interpretive line · "confirm" or "pick another (to 5.0)" · progress "step 2 of 3"
→ 3.2 Invite team · 5.0 Program library (change choice)

**3.2 Invite team** (join link / code) · page (wizard step 3) · Main + item 3
INCLUDES: join link + copy · join code · email-invite field · privacy note (roster is not linked to answers) · progress "step 3 of 3" · "finish, go to Dashboard"
→ 4.0 Dashboard · 3.3 (on send failure)

**3.3 Invite-send error** · state (error) · never a dead-end (F1 MS3)
INCLUDES: which invites failed · retry · skip for now (link and code still work)
→ 3.2 Invite team

### Cluster 4 - Dashboard and pulse, operator home  [P]

**4.0 Dashboard** (operator home) · page · E1 + J1 + J2 (the aha, 1 tap from login)
INCLUDES: 0.1 nav · plain-language pulse score + interpretation + suggested next action · trend spark · participation rate (share, not who) · threshold-alert banner (contextual, DX1) · privacy-proof mini element (DX2) · states 4.3 empty and 4.4 loading
→ 4.1 Team pulse detail · 4.2 Threshold alert detail · 7.0 Share with owner (contextual on a positive milestone, F3)

**4.1 Team pulse detail** · page · J1 + J2 + E1
INCLUDES: score + number · trend over time · participation rate · interpretation + next action · minimum-N state
→ 7.0 Share with owner · 5.2 Check-in setup

**4.2 Threshold alert detail** · page · J2 (early warning, reached 1-tap contextual and via notification deep-link, DX1)
INCLUDES: what dropped · plain-language reading · suggested next action · link to the relevant program
→ 5.1 Program detail · 4.1 Team pulse detail

**4.3 Pre-minimum-N empty** (score not ready) · state (empty) · J3 and E2 privacy math
INCLUDES: "waiting for at least 5 responses" · no live count · nudge-team CTA (to 6.0)
→ 6.0 Team roster

**4.4 Cycle open, no live count** · state (loading) · J3 (no timing inference)
INCLUDES: "cycle open, results appear after it closes" · no running tally
→ 4.0 Dashboard

### Cluster 5 - Programs  [P]

**5.0 Program library** (browse + pick) · page (listing) · Main + J6 + item 2
INCLUDES: 0.1 nav · facet set (category: mental health, physical, financial, social) (defined in-node, Step 5) · "recommended for your size" tag · canonical program-card grid (0.4) · loading skeleton (0.4) · state 5.3 first-run empty
→ 5.1 Program detail

**5.1 Program detail / manage** · page · Main + item 2
INCLUDES: title · category · cadence and duration · status (draft / active / ended) · the check-in questions it carries · manage actions (activate / end) · "set up check-in (to 5.2)"
→ 5.2 Check-in setup

**5.2 Check-in setup** (questions, cadence) · page · J2 + J4 + item 3
INCLUDES: pick 1 to 3 questions · emoji or slider type · cadence (weekly) · minimum-N=5 note · no-live-count note · save
→ 4.1 Team pulse detail

**5.3 Library first-run empty** (no active program) · state (empty) · never a dead-end (MS4)
INCLUDES: "no active program yet, pick one" · recommended-for-size shortcut
→ 5.1 Program detail

### Cluster 6 - Team  [P]

**6.0 Team roster** (members, join link / code, participation aggregate) · page · Main + item 3 + item 10
INCLUDES: 0.1 nav · invited-members list (invite identity only, never linked to answers) · join link + code · team size · aggregate participation rate (share, not who) · resend or manage (to 6.1)
→ 6.1 Resend or manage invite · 4.0 Dashboard

**6.1 Resend or manage invite** · dialog
INCLUDES: resend to selected · revoke or regenerate code · copy link
→ 6.0 Team roster

### Cluster 7 - Owner share and upgrade, operator-facing  [P]

**7.0 Share with owner** · page / section · J1 + J5 + S2 (fires from a positive milestone, F3)
INCLUDES: what the owner will see (aggregate-only preview) · "invite owner" · gate: on a paid plan? to 7.1
→ 7.1 Invite owner + upgrade · 9.0 Owner dashboard (once live)

**7.1 Invite owner + upgrade** · page · S2 + item 8 (paid unlock)
INCLUDES: owner email · plan comparison (owner dashboard = paid) · 7.2 upgrade dialog · confirmation "invite sent"
→ 7.2 Upgrade or paywall · 9.2 Monthly owner digest

**7.2 Upgrade / paywall** · dialog · item 8 and business model
INCLUDES: tier · seats · price · payment · "stay free" (back)
→ 7.3 (on failure) · 7.0 (recoverable exit, F3 DE3)

**7.3 Payment failed** · state (error) · recoverable, not a trap (F3 DE3)
INCLUDES: reason · retry · "stay on the free tier, retry later"
→ 7.2 Upgrade · 4.0 Dashboard

### Cluster 8 - Settings, operator utility  [P] (noindex)

**8.0 Settings (shell)** · page (shell) · supporting, one shell whose section list mirrors nav
INCLUDES: 0.1 nav · section list (Plan, Privacy center, Notifications, Account)
→ 8.1 · 8.2 · 8.3 · 8.4

**8.1 Plan / subscription** · section · item 1 + item 8
INCLUDES: current tier · seats and usage · change plan (to 7.2) · invoices
→ 7.2 Upgrade or paywall

**8.2 Privacy center** ("what the owner can and cannot see") · section · J3 + E2 + item 4 (operator-facing proof)
INCLUDES: canonical privacy-disclosure component (Step 3) · minimum-N=5 statement · no-live-count · owner can and cannot see panel · subscription-as-privacy statement
→ 8.0 Settings

**8.3 Notifications** (reminders, digest cadence) · section · J4 + items 9, 10
INCLUDES: check-in reminder toggle and cadence · weekly operator digest · monthly owner digest · threshold-alert delivery
→ 8.0 Settings

**8.4 Account settings** · section · supporting (identity and password)
INCLUDES: name · email · password · magic-link · sign out · delete account (GDPR erasure)
→ 8.0 Settings

### Cluster 9 - Owner surface, aggregate-only, secondary  [O] (under 2 min, one read)

**9.0 Owner dashboard** (one number, trend, plain-language) · page · J1 + J5 + item 8
INCLUDES: single pulse number · trend · plain-language reading · 9.1 "what I can and cannot see" · state 9.3 empty · no nav tabs by design
→ 9.1 · re-entry from 9.2 digest

**9.1 "What I can and cannot see"** · section (on 9.0) · E2 owner comfort + item 4
INCLUDES: canonical privacy-disclosure component (Step 3), owner variant (aggregate-only, no individuals, no drill-down)
→ 9.0 Owner dashboard

**9.2 Monthly owner digest** (email to view) · page · S2 + item 8 + W1 (under 2 min)
INCLUDES: month score + trend · one-line reading · link to 9.0
→ 9.0 Owner dashboard

**9.3 Owner score-not-ready empty** · state (empty) · MS2
INCLUDES: "score not available yet, the privacy minimum of 5 is not met" · no individual data
→ 9.0 Owner dashboard

### Cluster 10 - Employee check-in, near-anonymous, third-party, mobile  [E] (linear, under 30s, no account for the first check-in)

**10.0 Check-in entry** (via invite link / join code) · flow entry · J3 + J4
INCLUDES: minimal top bar (no nav) · "your answers are anonymous" pre-header · link validity check
→ 10.1 Pre-Q1 disclosure (F2) · 10.4 (expired) · 10.5 (already submitted)

**10.1 Pre-Q1 privacy disclosure** · section (persistent, before Question 1) · J3 + E2 + item 4
INCLUDES: canonical privacy-disclosure component (Step 3), employee variant · "no named responses, no individual timeline" · "see exactly what your manager sees" expander (F2 DE2 recovery) · continue
→ 10.2 Questions · back (leave)

**10.2 Questions** (1 to 3, emoji / slider) · page · J4 + item 3
INCLUDES: 1 to 3 questions · emoji or slider · progress · submit · loading (F2 Submit)
→ 10.3 Check-in complete · 10.6 (submit error)

**10.3 Check-in complete / thank-you** · page · J4 + E2 (closure, no individual data)
INCLUDES: thank-you · reassurance (the answer joined the aggregate) · no score shown to the employee (unless HJ2 [?], parked)
→ end

**10.4 Invite link expired** · state (error) · never a dead-end (F2)
INCLUDES: "link expired, ask your operator to resend" · no personal data
→ operator resend path

**10.5 Already submitted this cycle** · state · MS1
INCLUDES: "you have already checked in this cycle, thank-you" · no duplicate, no individual data
→ end

**10.6 Submit error** · state (error) · never a dead-end (F2)
INCLUDES: "submit failed, retry" · answers preserved
→ 10.2 Questions

### Cluster 11 - System and global nodes  [all] (fleshed at Step 6, grounded in law)

**11.0 404 Not found** · page · full page (nav + footer) with search and quick links, HTTP 404 + noindex, never a soft-404 [Step 6]
**11.1 500 Server error** · page · minimal, backend-independent [Step 6]
**11.2 Maintenance** (503 + Retry-After) · page [Step 6]
**11.3 Cookie consent** · dialog (banner component) · grounded in real law via web fetch [Step 6]
**11.4 Toast / inline notification** · section (component) · aria-live, no SEO impact [Step 6]
**11.5 Global search** · likely N/A for Brio [?] · the small curated library uses browse + facets (in 5.0), not a search index; confirmed or closed at Step 6

### Map notes

**Orphan and supporting (full audit in Traceability):** two nodes close no job of their own but gate every operator job, kept as supporting infrastructure: 2.1 Log in and 8.4 Account. One orphan job, S1 (tell network), has no node and is parked to backlog [?]. No other orphan.

**Parked (deliberately NOT nodes yet):** employee "see team result" after check-in (HJ2 [?], backlog item 12, LATER); referral or share-to-network (S1 / E3 [?]); custom nudge scheduling (LATER / paid, item 11).

**Depth stays within budget:** the recurring main-job value (pulse + next action) is 1 tap from login (4.0 is home); the deepest core action (5.2 Check-in setup) is 3 taps (Programs, Program detail, Check-in setup). Detail in the Navigation section.

**Global components discovered at Step 3** (cluster 0, each defined once and referenced, never re-specified per page): 0.3 Privacy-disclosure component (rendered by 10.1, 8.2, 3.1, 4.0, 9.1, 1.1), 0.4 Program card (3.1, 5.0, 5.1), 0.5 Dialog / modal shell (6.1, 7.2, 11.3), 0.6 Canonical lists (program categories, plan tiers, company-size buckets). The library facet set is NOT a standalone global (thin, used mainly by 5.0); it is defined inside 5.0 and cross-referenced. Brio has no catalog tree, so there is no taxonomy or category-matrix node.

**Numbering bridge to Traceability** (base-layer screen numbers 1..26 stay unchanged): 1=0.0, 2=1.0, 3=2.0, 4=2.1, 5=3.0, 6=3.1, 7=3.2, 8=4.0, 9=4.1, 10=4.2, 11=5.0, 12=5.1, 13=5.2, 14=6.0, 15=7.0, 16=7.1, 17=8.1, 18=8.2, 19=8.3, 20=8.4, 21=9.0, 22=9.2, 23=10.0, 24=10.1, 25=10.2, 26=10.3. The new sub-nodes (2.2, 2.3, 3.3, 4.3, 4.4, 5.3, 6.1, 7.2, 7.3, 8.0, 9.1, 9.3, 10.4, 10.5, 10.6, and cluster 11) are states, dialogs, and global components introduced by the Detail Layer; each inherits its parent's job coverage. Cluster 1 also grew: 1.1 to 1.6 are public pages registered from the footer (0.2) at Step 3, serving the existing Main and trust jobs, not new jobs.

---

## Navigation

*How the person moves between screens. Global navigation is the shortest path for the primary persona to her main job, not "what to put in a menu." Each global item is an entry into a job-cluster.*

### Global navigation (operator app, Priya primary)

4 job tabs plus Settings as a utility entry (corner, not a job tab).

| Global item | Job-cluster behind it | Why global (not contextual) |
|-------------|-----------------------|------------------------------|
| **Dashboard** (home) | E1 + J1 + J2, the pulse signal: score + interpretation + next action | The recurring aha and the reason she logs in. Post-login home |
| **Programs** | Main + J6, run wellbeing: library, pick, manage | The core "what do I run" job; entered repeatedly (monthly setup) |
| **Team** | Main + item 3, invite + participation (aggregate) | Entered on every new hire; the invite / roster surface |
| **Owner** | J1 + J5 + S2 + item 8, prove it works + upgrade | Top-3 operator job by importance and the paid-conversion path (trade-off below) |
| **Settings** (utility, top-right) | supporting + item 4: Plan, Privacy center, Notifications, Account | Utility cluster, not a job tab; corner entry, always reachable |

**Trade-off on "Owner":** it is only ~monthly-frequency, so it could instead be a contextual "Share this result" action on the Dashboard. It is kept global because the owner dashboard is the paid feature and J1 / J5 / S2 score 3 for Priya, so a permanent "invite your owner" surface both serves the job and drives conversion. Reversible to contextual if usage shows it is rarely a fresh entry.

**Other surfaces have no multi-tab nav by design:** the owner surface is a single aggregate dashboard (secondary, under 2 min, one read); the employee check-in is a linear near-anonymous flow (third-party, under 30s). Nav on either would work against the persona.

### Depth: taps to the main job for Priya

Main job = "a guided system that tells me what to run and when." Both realizations are within the 3-tap budget.

| Path to a job-cluster | Taps | Within 3? |
|-----------------------|------|-----------|
| Returning operator, pulse signal + next action (recurring main-job value) | 1 (Dashboard is the post-login home) | yes |
| Run / adjust a program (Main + J6) | Programs (1), Program detail (2), Check-in setup (3) | yes (3 at the deepest) |
| Invite team / roster (item 3) | Team (1), roster on the same screen | yes |
| Prove it works / invite owner (J1 + J5 + S2) | Owner (1), Invite owner + upgrade (2) | yes |

**One intentional exception (not a violation):** the first-run guided onboarding is a linear wizard (company setup, first program confirm, invite team, ~3 sequential steps after signup). This is sequential flow depth, not navigational depth. The 3-tap rule governs how far a job-cluster is buried in the menu; onboarding is J6 itself ("tells me exactly what to do and in what order"), budgeted by time (under 5 minutes), not taps. It runs once and is not reachable from global nav afterward.

### Global / contextual / deep

- **Global (always visible):** the 4 job tabs (Dashboard, Programs, Team, Owner) + Settings utility. Owner surface = single dashboard; employee surface = no nav.
- **Contextual (appears inside a flow):** "Share this result with your owner" (fires on a positive pulse milestone), "Set up check-in" (inside a program), "Resend invite" (inside roster), threshold-alert banner (on Dashboard when it fires), pre-Q1 privacy disclosure (inside the check-in flow), upgrade prompt (on a free-tier limit or owner-invite tap).
- **Deep (rare, tucked away):** Plan / subscription change, Privacy center detail, Notification cadence, Account settings, and the one-time onboarding wizard.

### Step 6 depth fixes

- **DX1 (threshold alert reach):** the threshold alert detail is reached in 1 tap as a contextual Dashboard banner and a notification deep-link, not only 3-deep via Dashboard, pulse detail, alert. The urgent early-warning job (J2) is not buried in navigation.
- **DX2 (privacy proof visibility):** the operator-facing privacy proof is not only the 2-taps-deep Privacy center. A privacy summary is also surfaced contextually at the onboarding confirmation and as a small Dashboard element, so item 4 ("visible to the operator as proof") is met without a deep hunt.

---

## Traceability

*Coverage matrix: screens (rows) by jobs (columns). A tick means the screen participates in closing that job. An empty row is an orphan screen (screen with no job). An empty column is an orphan job (job with no screen). Both are defects. Matrix transposed to 12 job columns for readability.*

**Screen legend:** 1 Landing, 2 Pricing, 3 Sign up, 4 Log in, 5 Company setup, 6 First program confirm, 7 Invite team, 8 Dashboard, 9 Team pulse detail, 10 Threshold alert detail, 11 Program library, 12 Program detail / manage, 13 Check-in setup, 14 Team roster, 15 Share with owner, 16 Invite owner + upgrade, 17 Plan / subscription, 18 Privacy center, 19 Notifications, 20 Account, 21 Owner dashboard, 22 Monthly owner digest, 23 Check-in, 24 Pre-Q1 disclosure, 25 Questions, 26 Check-in complete.

| Screen | Main | J1 | J2 | J3 | J4 | J5 | J6 | E1 | E2 | E3 | S1 | S2 |
|--------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 Landing | x | | | | | | | | | | | |
| 2 Pricing | x | | | | | | | | | | | |
| 3 Sign up | x | | | | | | | | | | | |
| 4 Log in | | | | | | | | | | | | |
| 5 Company setup | x | | | | | | x | | | | | |
| 6 First program confirm | x | | | | | | x | x | | | | |
| 7 Invite team | x | | | | x | | x | | | | | |
| 8 Dashboard | x | x | x | | | | | x | | | | |
| 9 Team pulse detail | | x | x | | | | | x | | | | |
| 10 Threshold alert detail | | | x | | | | | | | | | |
| 11 Program library | x | | | | | | x | | | | | |
| 12 Program detail / manage | x | | | | | | x | | | | | |
| 13 Check-in setup | | | x | | x | | | x | | | | |
| 14 Team roster | x | | | | x | | | | | | | |
| 15 Share with owner | | x | | | | x | | | | | | x |
| 16 Invite owner + upgrade | | x | | | | | | | | | | x |
| 17 Plan / subscription | | | | x | | | | | | | | x |
| 18 Privacy center | | | | x | | | | | x | | | |
| 19 Notifications | | | x | | x | | | | | | | |
| 20 Account | | | | | | | | | | | | |
| 21 Owner dashboard | | x | | x | | x | | | | x | | x |
| 22 Monthly owner digest | | x | | | | x | | | | x | | x |
| 23 Check-in | | | | x | x | | | | x | | | |
| 24 Pre-Q1 disclosure | | | | x | | | | | x | | | |
| 25 Questions | | | | | x | | | | | | | |
| 26 Check-in complete | | | | | x | | | | x | | | |

### Orphan screens (empty rows)

| Screen | Defect | Resolution |
|--------|--------|------------|
| 4 Log in | Closes no job on its own | Keep, reclassify as supporting infrastructure. It gates every operator job (Main, J1, J2, E1); removing it removes access to all job-closing screens. Honest exception to "no empty row." |
| 20 Account | Closes no job on its own | Keep, supporting infrastructure (identity / password). Same justification. Not cut. |

No screen is deleted: every other row closes at least one job, and the two blanks are auth / identity preconditions, not orphans-to-cut.

### Orphan jobs (empty columns)

| Job | Defect | Resolution |
|-----|--------|------------|
| S1 - tell network what works | No MVP screen | Backlog / [?]. S1 is a [?] hypothesis in jtbd.md; the referral surface was parked (Stage 2 cut list bans cash referral, organic operator-to-peer is out of MVP scope). Do not add a screen now, validate S1 first, then a lightweight share surface post-MVP. This hole is intentional. |

**Thin coverage (not a hole to fill in MVP):** E3 (caring leader) is covered only by Owner dashboard / digest as the shareable proof; it is a [?] hypothesis with no dedicated peer-share surface, acceptable as-is. Hypothesis jobs HJ1 (close the loop) and HJ2 (employee sees team result, backlog item 12 LATER) are deliberately unmapped / parked, not orphans-to-fix.

**Net:** one real orphan job (S1, to backlog), zero orphan screens to cut (two supporting-infrastructure rows kept), no MVP job left uncovered.

---

## Critique (Step 6)

*Audit of sitemap.md and flows.md across four defect classes, dangerous ones first. Dead-ends and missing states were fixed in flows.md; depth was addressed by contextual placement (Navigation, Step 6 depth fixes); orphans stay resolved in Traceability.*

### Class 1 - Dead-ends (fixed)

| # | Where | Defect | Fix applied |
|---|-------|--------|-------------|
| DE1 | Flow 1, sub-minimum-N team | Hard stop with no fallback, tied to the riskiest assumption | Added a "Team below minimum-N" explainer with an invite-more path; only an unreachable-5 team is a dead-end |
| DE2 | Flow 2, skeptical employee | Straight to trust-lost with zero recovery, the participation-killer | Added a "see exactly what your manager sees" recovery detour back to the decision |
| DE3 | Flow 3, abandons upgrade | Risked trapping the operator on a red screen | Made it a recoverable "stay on free tier, retry later" back to the Dashboard; the real dead-end is now owner-never-opens |
| DE4 | Flow 4, ignored alert | A single ignore equalled a resignation | Added a weekly-digest re-surface loop; only repeated ignoring is the dead-end |

### Class 2 - Missing states (fixed)

| # | Where | Defect | Fix applied |
|---|-------|--------|-------------|
| MS1 | Check-in (Flow 2) | No "already submitted this cycle" state on re-entry | Added an already-submitted thank-you state |
| MS2 | Owner dashboard (Flow 3) | No empty state when the score is not ready (minimum-N not met) | Added an owner "score not available yet" empty state |
| MS3 | Invite team (Flow 1) | No error state for invite send failure | Added an invite-send error with retry |
| MS4 | Program library / detail / check-in setup | No empty / loading / error documented | Added a first-run empty note; full states deferred to Stage 3b (flagged in Screens) |

### Class 3 - Excessive depth (addressed)

| # | Where | Defect | Fix applied |
|---|-------|--------|-------------|
| DX1 | Threshold alert detail | Up to 3 taps via nav for an urgent job | Made 1-tap contextual (Dashboard banner + notification deep-link) |
| DX2 | Privacy center placement | Operator privacy proof 2 taps deep in Settings | Also surfaced at onboarding confirmation and on the Dashboard |

### Class 4 - Orphans (resolved in Traceability)

- Orphan screens: Log in, Account are supporting infrastructure (gate every operator job), kept, not cut.
- Orphan job: S1 (tell network) has no MVP screen, sent to backlog / [?] (referral surface parked). Intentional hole.
- No new orphan beyond the matrix.
