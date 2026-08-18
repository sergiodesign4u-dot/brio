# Component inventory (stage 07, step 2)

*Read out of all 99 wireframe screens, not imagined and not collected from the two screens that already have colour. The wireframes cover 100% of the product, so the composition of the system is a fact rather than a guess: a list written from the head would have offered a hero, a carousel and an accordion, and would have missed the privacy strip, which is the thing this product is actually made of.*

**How this was built.** Class usage counted across every file in `wireframes/`. The control census walked the browser over all 99 screens **in two viewports, 360px and 1280px**, because part of the product exists at exactly one width: the app bar tabs are hidden under 720px and the bottom tab bar is hidden above it, so a census in one width would have missed 196 controls either way.

**Rules of entry.** A component enters the kit when it appears on **two or more screens**. A single appearance goes to "One-off" at the bottom. **One exception: form controls** (field, textarea, checkbox, radio, select, switch) enter with a single appearance, because they are interaction primitives, they will end up in the system anyway, and while they sit in "One-off" their styles live on a screen and drift with every next one.

**Merge rule.** Two entries with the same anatomy that differ only in content are one component with variants. Anatomy means the set of zones and their order, not how many elements sit inside a zone: a dialog for log in, a dialog for "how this works" and a confirm dialog are one component. A zone that exists in one entry and is missing in the other is a different anatomy and a second row.

**Level is counted mechanically:** level = 1 + the highest level of what the component contains. Level 3 is the ceiling; inside it, organisms that contain no other organism load first. The level is not decoration: stage 08 derives the css split, the `@import` order and the build rounds from this column, and a composite loaded before its parts steals their rules.

---

## Level 1, atoms

*Contain no other kit component.*

| Component | Variants | Screens | States | Photo |
|---|---|---|---|---|
| **Button** `.wf-btn` | emphasis: solid / outline. content: label (every occurrence). size: one in the product, plus `compact` in the app bar, declared at stage 07 step 6 so the bar stops bending the component from a context. width: full or auto, which is layout and not a variant | 85 of 99 | default, hover, disabled, plus the pending label ("Sending...", "Saving...") | no |
| **Chip** `.wf-tag` | emphasis: outline, and solid when selected | 8 | default, selected | no |
| **Icon slot** `.wf-ico` | size: 42px, 30px small; shape: square, round | 6 | one | no, it becomes a Solar glyph |
| **Input** `.wf-input` | content: text, email, code | 32 | default, focus, error, disabled | no |
| **Media slot** `.wf-media` | size: default, `shot`, `tall` | 6 | one | **yes**, this is where a photograph lands |
| **Metric** `.wf-metric` | content: number plus unit | 17 | one | no |
| **Outcome badge** `.wf-badge` | emphasis: ok (soft accent), warn (alert outline) | 8 | two, and they are the variants | no |
| **Radio option** `.wf-radio` | emphasis: outline; selected takes the action colour | 6 | default, selected | no |
| **Skeleton** `.wf-skel` | size: line, `tall` block, action-sized | 9 | one, it is itself a state | no |
| **Spark** `.wf-spark` | content: five bars, last two emphasised | 10 | one | no |
| **Status pill** `.wf-status` | emphasis: outline, and `on` for the live one | 16 | default, active | no |
| **Switch** `.wf-switch` | one | 1 | on, off | no |
| **Textarea** `.wf-textarea` | one | 2 | default, focus, error | no |
| **Checkbox** (bare `input[type=checkbox]`) | one | 3 | unchecked, checked | no |
| **Select** (bare `select`) | one | 2 | default, focus | no |
| **Error text** `.wf-err` | one | 7 | one | no |

Switch, checkbox and select are here under the form-control exception: one or two appearances each, and all three are level 1, which is exactly why the exception exists. The ladder stands on the atoms, and level 2 has nothing to be made of while they are missing.

## Level 2, molecules

*Contain atoms and no molecules.*

| Component | Variants | Screens | States | Photo |
|---|---|---|---|---|
| **Alert banner** `.wf-alert` | content: tag plus sentence plus action | 3 | one | no |
| **Card** `.wf-card` | content: with heading `.wf-card-h`, without | 49 of 99 | one | no |
| **Claims list** `.wf-claims` | content: five rows, lead plus body | 2 | one | no |
| **Copy field** `.wf-copy` | content: input plus button | 11 | default, copied | no |
| **Field** `.wf-field` | content: label plus control, with hint, with error | 30 | default, focus, error, disabled | no |
| **List row** `.wf-list-row` | content: name plus status, name plus status plus row link | 19 | default, pending, active | no |
| **Program card** `.wf-progcard` | content: category, title, meta, description, action; with badge row, without | 9 | default, active, recommended | **yes**, at stage 12 the library gets imagery |
| **Pulse card** `.wf-pulse` | content: read, interpretation, next step; loading skeleton variant | 9 | ready, loading, dipping | no |
| **Privacy strip** `.wf-strip2` | content: sentence, and sentence plus link | 42 of 99 | one | no |

The privacy strip on 42 of 99 screens is the most repeated component in the product after the button and the card. That is the mechanism made visible, and it is why it is a component rather than a paragraph.

## Level 3, organisms

*Contain molecules, or are the frame a screen stands in. Inside the level, the ones that contain no other organism come first.*

| Component | Variants | Screens | States | Photo |
|---|---|---|---|---|
| **App bar** `.wf-appbar` | shell: operator (brand, tabs, settings), employee (brand, privacy line), wizard, auth, public, owner | 97 of 99 | current tab | no |
| **App footer** `.wf-appfoot` | one | 49 | one | no |
| **Bottom tab bar** `.wf-tabbar` | one, mobile only | 49 | current tab | no |
| **Content grid** `.wf-grid` | layout: main plus rail, single column under 720px | 33 | one | no |
| **Hero** `.wf-hero` | content: copy only, copy plus visual `.wf-hero-grid` | 12 | one | **yes** |
| **List** `.wf-list` | content: rows | 19 | default, empty | no |
| **Proof disclosure** `.wf-see` | one | 2 | closed, open | no |
| **Public footer** `.wf-pubfoot` | content: trust line plus four columns | 16 | one | no |
| **State block** `.wf-state` | content: title, sentence, action; error variant carries a mark | 17 | empty, error, waiting, no program, expired, already done | no |
| **System block** `.wf-sys` | content: head plus body | 2 | one | no |
| **Split auth** `.wf-auth-grid` | content: the form beside a brand panel that carries three proof lines; the panel disappears under 760px so signing up stays one fast column | 2 | one | **yes** |
| **Dialog** `.wf-overlay` plus `.wf-dialog` | content: title, body, action row. Merged from six: log in, upgrade, end program, delete account, manage roster, cookie consent | 7 | default, danger | no |

**Form is a composition, not a styled component.** It is on 30 screens and it carries no rules of its own: a form in this product is a stack of fields plus one action, and every value in it belongs to the field, the input and the button. It was listed as a level 3 component in the first pass of this inventory and Codex caught the mismatch at step 6, because the kit has no `form` rule to match the row. The row is corrected rather than the kit: adding a rule to satisfy a table would have been the tail wagging the dog.

The dialog row is the merge rule doing its work: six dialogs across the product share one anatomy (overlay, panel, title, body, action row), so they are one component with variants rather than six rows that stage 08 would honestly give six css files and six showcase pages.

---

## One-off, not going into the kit

Each of these appears on exactly one screen. They stay on their screen until stage 12 proves otherwise.

`.wf-avatar` and `.wf-person` (about), `.wf-quote` and `.wf-quote-by` (one testimonial), `.wf-logos` and `.wf-logo` (one social proof strip), `.wf-plans` and `.wf-plan` (pricing), `.wf-faq`, `.wf-faqrow`, `.wf-faqq`, `.wf-faqa` (help), `.wf-toc`, `.wf-doc`, `.wf-legal`, `.wf-updated` (legal), `.wf-flow` (about), `.wf-team` (about), `.wf-search` (help), `.wf-pill`, `.wf-eta`, `.wf-quick`, `.wf-rec` (single screens), `.wf-show`, `.wf-showrow` (one screen), `.wf-usebar` (settings), `.wf-hyp` (one screen), `.wf-pending` (six occurrences, all on one screen), `.wf-saved`, `.wf-cannot`, `.wf-contact`.

Three of these are worth watching, because they are one-offs today and patterns tomorrow: `.wf-cannot` ("what they never see"), `.wf-saved` ("answers saved") and `.wf-pending`. All three carry the trust argument, and if a second screen picks any of them up, it moves into the kit rather than being copied.

## Layout helpers, in the kit but not components

*Compositions rather than components: they arrange things and carry no identity of their own. They are listed because a selector in the kit that appears in no list is an unrecorded decision, which is how a system grows parts nobody chose.*

`.wf-grid3` and `.wf-grid4` (three and four up card rows on the marketing pages), `.wf-tags` (a row of chips), `.wf-cta-final` (the closing call to action band), `.pg-facets` and `.pg-grid` (the program library filter row and its reflowing grid), `.wf-contact` (the contact page's two column split), `.wf-hero-grid` (copy beside a visual). Each one is layout only: no colour, no type, no radius.

---

# Control census

*What the table above says is **which** components exist. The census says how many real **forms** each interactive component has and along which axes they differ. Without it the kit comes out flat: the button that stands on the five screens we colour gets into the kit, and every other difference in the product settles later as a context patch nobody ever called a variant.*

**Division of labour, and it is not arbitrary.** This half, taken from the wireframes, records the **jobs**: which clickable things exist in the product at all. Stage 08 will walk the assembled coloured screens and record the **forms**: which of them are already decided in colour and where they have drifted. The difference between the two lists is the brief for the roll-out at stage 12.

**Method.** Every `a`, `button`, `label`, `[role=button]`, `[onclick]`, plus any element that introduces `cursor: pointer` its parent does not have. All 99 screens, both viewports. Occurrences were collected in full first and folded afterwards, so the decision about sameness was taken on complete data.

## Forms by family

| Family | Emphasis | Content | Size | Width | Count | Screens |
|---|---|---|---|---|---|---|
| Button, action | solid | label | 13px | full | 88 | 71 |
| Button, action | outline | label | 13px | full | 82 | 52 |
| Button, action | solid | label | 13px | auto | 15 | 15 |
| Button, action | outline | label | 13px | auto | 5 | 5 |
| Button, bare | outline | label | 11px | full | 6 | 3 |
| Button, bare | bare | label | 16px | full | 3 | 1 |
| Button, bare | bare | label | 12px | auto | 1 | 1 |
| Tab, app bar (desktop only) | bare | label | 13px | full | 196 | 49 |
| Tab, bottom bar (mobile only) | bare | label | 11px | full | 196 | 49 |
| Nav link | bare | label | 13px | full | 125 desktop, 77 mobile | 77 |
| Footer link | bare | label | 13px | full | 128 | 16 |
| Footer link | bare | label | 12px | full | 98 | 49 |
| Text link | bare | label | 15px / 14px / 13px / 12px / 11px | auto and full | 108 | 49 |
| Row link | bare | label | 12px | full | 23 | 7 |
| Chip | solid when selected, outline otherwise | label | 10px | auto | 10 | 2 |
| Radio option | outline | label | 14px | full and auto | 15 | 6 |

**What the axes actually show.** Emphasis has two values in this product, solid and outline; there is no inverse form, because there is no dark surface to invert on. Content has exactly one value everywhere, label: **the wireframes carry no icon inside a control at all**, so "icon plus label", "label plus arrow" and "icon only" are combinations the product does not have, and they are not invented here. Size is set by the container and comes out as one step for buttons; the four sizes visible in text links are typographic context, not four link components. Width, full against auto, is layout and deliberately not an axis: the same button sits in a card and in a wizard footer.

## Counter-list 1: one job, several forms

*The same action text carried by different classes or different emphasis. This is not a variant, it is an inconsistency, and it eats the coherence of a product faster than any colour choice. Twenty labels, and every one of them is a decision waiting to be made at stage 12.*

| Label | Forms it appears in |
|---|---|
| Try again | solid, solid block, outline |
| View full pulse | solid, outline, outline block |
| Edit check-in | solid, outline, outline block |
| End program | solid, outline, outline block |
| Start free | solid, solid block, outline block |
| Continue | solid block, outline block |
| Browse programs | solid, outline |
| Send invites | solid, outline |
| Select | solid, outline |
| Save | solid, outline |
| Search | solid, outline |
| See what changed | solid, outline |
| Back to programs | solid, outline |
| View results | solid, solid block |
| Finish setup | solid, solid block |
| Saving... | solid, solid block |
| Sending... | solid block, outline |
| Activate | outline, outline block |
| Reactivate | outline, outline block |
| Back to dashboard | outline, outline block |

Read this together with the voice dictionary: `voice.md` already fixed **one action, one label**, and this list is the visual half of the same rule, **one action, one form**. Where the same label is solid on one screen and outline on another, the product is telling the operator two different things about how important that action is.

## Counter-list 2: control without a family

**Empty.** Every control found in both viewport passes fell into one of the families above. Nothing needs a family assigned and nothing goes to "One-off" for want of one.

---

## What this means for the kit

- The kit needs **16 atoms, 9 molecules and 12 organisms**, and the coloured screens of stage 06 already carry 14 of them.
- Two components need photography: the media slot and the hero. Neither of them is on the two screens coloured at stage 06, which is why attribute A5 is still proven only on the stand. **The sample at step 5 has to include a screen with a media slot**, or the stage ends with the same gap.
- The privacy strip, the state block and the pulse card are the three components that carry the product's argument, and all three repeat across clusters. They are the ones a drift would cost the most.
