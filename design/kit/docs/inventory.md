# Component inventory

*Read out of all 99 wireframe screens at stage 07, consolidated into units of a system at stage 08 step 2. The wireframes cover 100% of the product, so the composition of the system is a fact rather than a guess: a list written from the head would have offered a hero, a carousel and an accordion, and would have missed the privacy strip, which is the thing this product is actually made of.*

**Corpus.** 99 grey screens for "how often it occurs in the product", 24 coloured screens for "what already exists in colour". `design/` holds a sample, not the product, and every count below says which corpus it came from.

**Rules of entry.** A component enters the kit when it appears on **two or more screens**. A single appearance goes to "One-off" at the bottom. **One exception: form controls** (field, textarea, checkbox, radio, select) enter with a single appearance, because they are interaction primitives, they will end up in the system anyway, and while they sit in "One-off" their styles live on a screen and drift with every next one.

**Merge rule.** Two entries with the same anatomy that differ only in content are one component with variants. Anatomy means the set of zones and their order, not how many elements sit inside a zone: a dialog for log in, a dialog for "how this works" and a confirm dialog are one component. A zone that exists in one entry and is missing in the other is a different anatomy and a second row.

**Level is counted mechanically:** level = 1 + the highest level of what the component contains. Level 3 is the ceiling; inside it, organisms that contain no other organism load first. The level is not decoration: stage 08 derives the css split, the `@import` order and the build rounds from this column, and a composite loaded before its parts steals their rules.

---

## What consolidation changed

| | Before step 2 | After step 2 |
|---|---|---|
| Rows in the inventory | 37 | **37** |
| Atoms / molecules / organisms | 16 / 9 / 12 | **16 / 9 / 12** |
| Rows merged into another row | | 1 (Textarea into Input) |
| Rows added | | 1 (Error code, found at 2 screens in the One-off list) |
| Rows renamed | | 1 (Switch to Document switch) |
| Classes deleted as dead | | 1 (`.wf-media.tall`) |
| Rows in the rename map | | 4 |

**The count did not fall, and that is the honest result.** Consolidation is supposed to turn a list of occurrences into a set of units, and on most products it removes rows. Here it removed one and added one, because the merging work had already been done at stage 07: six dialogs were already one row, the app bar already carried six shells as variants, and the control census had already folded 459 occurrences into 17 families. What step 2 found instead was two rows that were **wrong** rather than duplicated, and one class that nobody wears. Reporting 37 to 37 is the result; reporting a reduction would have meant inventing one.

**37 components is above the 25 the pack calls a signal.** The signal is real and it is worth saying plainly: this product is drawn wider than an MVP. 47 screens plus 99 state pages was decided at stage 01 (D-11) and the scope question belongs upstream, in `cjm-to-be.md` and `sitemap.md`, not here. Nothing is cut at this stage: a system missing a component that stands on a screen is incomplete by definition, and the roll-out at stage 12 would hit the gap when it costs ten times more.

---

## Level 1, atoms

*Contain no other kit component. 16 components.*

| # | Component | Axes and values | Grey screens | Colour screens | Photo |
|---|---|---|---|---|---|
| 1 | **Button** `.wf-btn` | **emphasis**: solid, outline. **size**: default, `compact` (app bar only). **content**: label, one value only, because no control in this product carries an icon. Width, full against auto, is layout and not an axis | 85 | 21 | no |
| 2 | **Input** `.wf-input` | **content**: text, email, password, code, and **textarea** (merged in at step 2). **state**: rest, focus, error, disabled | 32 | 7 | no |
| 3 | **Select** `select.wf-input` | one form. Anatomy differs from Input by one zone, the chevron, so it is a second row and not a variant | 2 | 0 | no |
| 4 | **Checkbox** `input[type=checkbox]` | one form | 3 | 0 | no |
| 5 | **Radio option** `.wf-radio` | **state**: rest, checked, focus-within. The checked option takes the action colour and nothing else changes | 6 | 1 | no |
| 6 | **Chip** `.wf-tag` | **emphasis**: outline, and `on` which fills with the soft accent and drops its border to transparent | 8 | 2 | no |
| 7 | **Status pill** `.wf-status` | **emphasis**: outline, and `on` for the live one | 16 | 3 | no |
| 8 | **Outcome badge** `.wf-badge` | **emphasis**: `ok` soft accent fill, `warn` alert outline. **size**: full, and a smaller step under 520px | 8 | 4 | no |
| 9 | **Metric** `.wf-metric` | **content**: number plus unit | 17 | 5 | no |
| 10 | **Spark** `.wf-spark` | **content**: five bars, the last two emphasised | 10 | 3 | no |
| 11 | **Skeleton** `.wf-skel` | **size**: line, `tall` block, `act` action-sized. **content**: three widths | 9 | 2 | no |
| 12 | **Icon slot** `.wf-ico` | **size**: default, `sm`. **shape**: square, `round` | 6 | 2 | no, it carries a Solar glyph |
| 13 | **Media slot** `.wf-media` | **size**: default, `shot`. The third value `tall` is deleted, see below | 6 | 2 | **yes**, this is where a photograph lands |
| 14 | **Error text** `.wf-err` | one form. Stands inside a field and also on its own, on five screens, so it is not folded into Field | 7 | 1 | no |
| 15 | **Error code** `.wf-errcode` | one form. **Added at step 2**, see below | 2 | 0 | no |
| 16 | **Document switch** `.wf-switch` | **state**: rest, hover, `on`. **Renamed at step 2**, see below | 1 | 0 | no |

**Textarea is a variant of Input, not a component.** The markup is `class="wf-input wf-textarea"` on every occurrence: it is the input box with a resting height and vertical resize. Same anatomy, same zones, one added property. It was a separate row at stage 07 because the form-control exception listed it by name, and the exception is about **entering the kit with one appearance**, not about being a component of its own.

**Error code is added.** `.wf-errcode` stands on `not-found.html` and `server-error.html`, two screens, which is the entry rule exactly. Stage 07 put it in the One-off list by a miscount. It carried no rule in the stage 07 kit, only a local declaration on each grey screen, which is precisely the state the One-off list is supposed to make visible. It now has `design/system/components/error-code.css` and a page. Its form is taken from the product, not invented: `clamp(56px, 12vw, 96px)`, from the two grey screens. **One value is not carried across:** the grey prototype sets weight 800, and the coloured language tops out at 600. The error code joins the coloured scale rather than reintroducing a weight the system does not have. Recorded as a decision, and it is free of risk because neither screen exists in colour yet, so there is no "before" for it to differ from.

**Switch is renamed to Document switch, and the exception it entered under does not apply to it.** Stage 07 listed it as a form control with states "on, off". The product has no toggle switch anywhere. `.wf-switch` is the row of pill links on `legal.html` that navigates between the three legal documents, with `.on` marking the current one. It is a real interactive component and it stays, as a segmented navigation. The row is corrected rather than deleted, and the reason is recorded rather than edited away.

## Level 2, molecules

*Contain atoms and no molecules. 9 components.*

| # | Component | Axes and values | Grey | Colour | Photo |
|---|---|---|---|---|---|
| 17 | **Field** `.wf-field` | **content**: label plus control, with hint, with error. **state**: rest, focus, error, disabled, all inherited from the control it holds | 30 | 7 | no |
| 18 | **Copy field** `.wf-copy` | **content**: input plus button. **state**: rest, copied | 11 | 2 | no |
| 19 | **Card** `.wf-card` | **content**: with heading `.wf-card-h`, without | 49 | 12 | no |
| 20 | **Privacy strip** `.wf-strip2` | **content**: sentence, sentence plus link | 42 | 16 | no |
| 21 | **Alert banner** `.wf-alert` | **content**: tag plus sentence plus action | 3 | 1 | no |
| 22 | **Pulse card** `.wf-pulse` | **state**: ready, loading, dipping. **context**: default, and embedded inside the proof disclosure | 9 | 4 | no |
| 23 | **Program card** `.wf-progcard` | **content**: with badge row, without | 9 | 2 | **yes**, at stage 12 the library gets imagery |
| 24 | **List row** `.wf-list-row` | **content**: name plus status, name plus status plus row link. **state**: default, pending, active | 19 | 3 | no |
| 25 | **Claims list** `.wf-claims` | **content**: five rows, lead plus body | 2 | 1 | no |

The privacy strip on 42 of 99 screens is the most repeated component in the product after the button and the card. That is the mechanism made visible, and it is why it is a component rather than a paragraph.

## Level 3, organisms

*Contain molecules, or are the frame a screen stands in. Inside the level, the ones that contain no other organism come first. 12 components.*

| # | Component | Axes and values | Grey | Colour | Photo |
|---|---|---|---|---|---|
| 26 | **List** `.wf-list` | **state**: default, empty | 19 | 3 | no |
| 27 | **State block** `.wf-state` | **content**: title, sentence, action. **emphasis**: default, error, which carries a mark | 17 | 6 | no |
| 28 | **System block** `.wf-sys` | one form | 2 | 0 | no |
| 29 | **Proof disclosure** `.wf-see` | **state**: closed, open | 4 | 1 | no |
| 30 | **Dialog** `.wf-overlay` plus `.wf-dialog` | **emphasis**: default, danger. Merged at stage 07 from six: log in, upgrade, end program, delete account, manage roster, cookie consent | 7 | 1 | no |
| 31 | **Hero** `.wf-hero` | **content**: copy only, copy plus visual `.wf-hero-grid` | 12 | 2 | **yes** |
| 32 | **Split auth** `.wf-auth-grid` | one form: the form beside a brand panel with three proof lines. The panel disappears under 760px so signing up stays one fast column | 2 | 1 | **yes** |
| 33 | **App bar** `.wf-appbar` | **shell**: operator, employee, wizard, auth, public, owner. **state**: current tab | 97 | 24 | no |
| 34 | **Bottom tab bar** `.wf-tabbar` | one form, mobile only. **state**: current tab | 49 | 11 | no |
| 35 | **App footer** `.wf-appfoot` | one form | 49 | 11 | no |
| 36 | **Public footer** `.wf-pubfoot` | **content**: trust line plus four columns | 16 | 3 | no |
| 37 | **Content grid** `.wf-grid` | **layout**: main plus rail, single column under 720px. The only organism that holds other organisms, so it loads last | 33 | 10 | no |

**Form is a composition, not a styled component.** It is on 30 screens and it carries no rules of its own: a form in this product is a stack of fields plus one action, and every value in it belongs to the field, the input and the button.

---

## Axis values that occur exactly once in the whole product

*The pack asks for these separately: an axis value that occurs once is either a genuine one-off or a defect nobody noticed.*

| Component | Axis | Value that occurs once | Verdict |
|---|---|---|---|
| Document switch | the component itself | `legal.html` only | **Genuine one-off that still enters the kit**, because it is interactive navigation with three states and a rule already written. If it were left on the screen its states would be invented again at stage 12 |
| Split auth | the component itself | sign up and log in, so twice, not once | Fine, it meets the entry rule |
| System block | the component itself | maintenance and server error, twice | Fine |
| Alert banner | the component itself | three screens | Fine |
| Media slot | size `tall` | **zero occurrences** | **Defect. Deleted**, see below |

---

## The rename map

*Decided here, executed at step 6. Four rows. It is short for one reason, and the reason is a decision rather than an oversight: **the system keeps the `wf-` class names**, extending D-18. The coloured copy shares one vocabulary with its frozen grey original, and that shared vocabulary is the only thing that makes "the copy owns the visual layer and nothing else" provable by diff. Renaming every class would buy a tidier prefix and spend the proof.*

| Old selector | New class and variant | Screens in `design/` | Screens in `wireframes/` (for stage 12) |
|---|---|---|---|
| `.wf-appbar-inner .wf-btn` | `.wf-btn.compact` | `index`, `contact`, `contact-sent` | all 16 public screens |
| `.wf-see .see-body .wf-pulse` | `.wf-pulse` with the embedded context, declared and named, markup unchanged | `checkin-privacy` | `check-in-privacy`, `security-privacy` |
| `.wf-input` inside `.wf-copy` | unchanged class, the flex rule moves into `copy-field.css` as composition | `team-roster`, `team-roster-manage` | 11 screens |
| `.wf-media.tall` | deleted, no replacement | none | none |

**Why three of the four rows change no markup.** They are context overrides that stage 07 already argued about and kept as compositions: they change where a thing sits, not what it is. What step 2 changes is not the markup but the **address**: each one moves out of a shared kit file and into the css of the component that owns the composition, so the override stops being invisible.

---

## What is deleted

| What | Proof | Verdict |
|---|---|---|
| `.wf-media.tall` and `--size-media-tall: 340px` | stood at `kit.css:570` and `kit.css:504` in the stage 07 kit, worn by no screen in either corpus, and shown on no page | **Delete.** A rule nobody wears is not a variant waiting for a use, it is a decision nobody made. The media slot keeps two sizes, default and `shot` |
| the inventory row "Media slot: default, shot, tall" | the third value never existed | **Corrected** |
| `.wf-textarea` as a component row | markup is always `wf-input wf-textarea` | **Merged** into Input as a content variant. The class stays, the row goes |

**Nothing else is deleted, and one candidate was deliberately spared.** Six classes have a rule and stand on exactly one screen each: `.wf-avatar`, `.wf-quote`, `.wf-quote-by`, `.wf-quote-t`, `.wf-logos`, `.wf-logo`. Every one is on the home page, in colour and in grey, so they are used, not dead. They do not become components (one screen), and they do not go on a screen (a screen carries no styles). They go to `design/system/oneoff.css`, a named holding pen with the screen written beside each rule and the promotion rule above them, and they are listed on `architecture.html` so they are visible. The moment a second screen picks one up it moves into the kit as a component.

---

## One-off, not going into the kit

Each of these appears on exactly one screen. They stay where they are until stage 12 proves otherwise.

`.wf-person` (about), `.wf-plans` and `.wf-plan` (pricing), `.wf-faq`, `.wf-faqrow`, `.wf-faqq`, `.wf-faqa` (security and privacy), `.wf-toc`, `.wf-doc`, `.wf-legal`, `.wf-updated`, `.wf-pending` (legal), `.wf-flow` (security and privacy), `.wf-team` (about), `.wf-search` (help), `.wf-pill` and `.wf-eta` (maintenance), `.wf-quick` (not found), `.wf-rec` and `.wf-hyp` (pricing), `.wf-show` and `.wf-showrow` (reset password), `.wf-usebar` (settings plan), `.wf-saved` (check-in submit error), `.wf-cannot` (check-in privacy), `.wf-contact` (contact), plus the six home page classes named above.

**Counted again at step 2, against the whole 99 screen corpus.** One row left this list (`.wf-errcode`, two screens, promoted to a component). Everything else measured exactly one, so the list is not carrying a component in disguise. Three entries are worth watching, because they are one-offs today and patterns tomorrow: `.wf-cannot` ("what they never see"), `.wf-saved` ("answers saved") and `.wf-pending`. All three carry the trust argument, and if a second screen picks any of them up it moves into the kit rather than being copied.

## Layout helpers, in the system but not components

*Compositions rather than components: they arrange things and carry no identity of their own. No colour, no type, no radius. They go to `design/system/layout.css` and are shown on `geometry.html`.*

`.wf-grid3` and `.wf-grid4` (three and four up card rows on the marketing pages), `.wf-tags` (a row of chips), `.wf-cta-final` (the closing call to action band), `.pg-facets` and `.pg-grid` (the program library filter row and its reflowing grid), `.wf-contact` (the contact page's two column split). `.wf-hero-grid` is **not** in this list: it is the hero's own composition and moves into `hero.css` with it.

---

# Control census

*What the table above says is **which** components exist. The census says how many real **forms** each interactive component has and along which axes they differ. Both measurements live in `census.md`: the stage-07 pass over the grey product, and the stage-08 pass over the coloured screens, taken before the system and again after it.*

**Result of the second pass, in one line.** 459 controls on 24 coloured screens fold into **17 families and 23 forms**; eleven families have exactly one form; the border colour, which is the property that drifts first, has **two** values across the whole sample. The full tables, the drift verdicts and the three counter-lists are in `census.md`.

## Counter-list 1: one job, several forms

*The same action text carried by different emphasis. Twenty labels across the grey product, five inside the coloured sample. Read together with the voice dictionary: `voice.md` fixed **one action, one label**, and this is the visual half of the same rule, **one action, one form**.*

| Label | Forms | Decision at step 2 |
|---|---|---|
| **Try again** | solid, solid block, outline | The error state block owns it and its action is the only one on the screen, so it is **solid**. Outline occurrences are the ones to move |
| **See what changed** | outline and solid **on one screen** | **Outline in the alert banner, solid in the pulse card.** The alert banner already carries the whole urgency of the screen in its colour bar and its tag; a second solid button beside it would compete with the pulse card's own action. This is the rule the axis needed: **one solid action per zone**, and the banner and the card are two zones |
| **View full pulse**, **Edit check-in**, **End program**, **Browse programs**, **Send invites**, **Select**, **Save**, **Search**, **Back to programs**, **Continue** | solid and outline | **One solid action per zone** decides every one of them: the action that the screen exists for is solid, everything beside it is outline. Where a screen exists for that action alone (no program, expired link), the same label is correctly solid there and outline elsewhere |
| **Start free** | solid and solid `compact` | **Not this list.** `compact` is a declared size variant and the app bar is a different container |
| **View results**, **Finish setup**, **Saving...**, **Sending...**, **Activate**, **Reactivate**, **Back to dashboard** | one emphasis, two widths | **Not this list either.** Width is layout: full inside a one column container, auto beside a sibling. Recorded so stage 12 does not read them as a variant |

**The axis this produces, and it is the rule the button page will carry:** emphasis is not a property of a label, it is a property of a **zone**. One solid action per zone, everything else outline. That single sentence closes 19 of the 20 rows without a table of exceptions.

## Counter-list 2: control without a family

**Empty**, in both passes. Every control found in all four viewport walks fell into a family.

## Counter-list 3: control without a form

*Declared in the inventory, not drawn in colour. Closed by name at step 2, and every row has a decision rather than a hope.*

| Row | Decision |
|---|---|
| Document switch, System block, Checkbox, Select, all with zero coloured instances | **Built at step 5 from the rule the stage 07 kit already carried**, and for Checkbox and Select from the grey screen they stand on. Not invented: the form is taken from the product |
| Input disabled, Radio checked, List row pending, Document switch current, Select states, Checkbox checked | **Built at step 5 as states**, from the nearest relative in the family. Disabled is `--opacity-disabled` on every control that has it, checked is `--color-action`, pending is the muted ink already used by the list row's status |
| Error code | **Built at step 5** from the two grey screens, with the weight snapped to 600 |
| `.wf-media.tall` | **Deleted**, see above |

Nothing is deferred to the backlog from this list. The backlog at step 6 collects what the reconciliation decides not to build; everything the census found is buildable now, because every one of these has a real place in the product it can be copied from.

---

## What this means for the system

- 37 components: **16 atoms, 9 molecules, 12 organisms**. The coloured sample carries 33 of them; four have no coloured instance and are built from the grey product.
- The `@import` order, the build rounds at step 5 and the stand groups all read the level column of this file, in this order, and nothing reads it by purpose.
- Two components need photography: the media slot and the hero. Both are in the coloured sample.
- The privacy strip, the state block and the pulse card carry the product's argument and repeat across clusters. A drift in those three would cost the most.

## Every component, its file and its page

*Filled at step 5, one row at a time, as each component was closed. The same table is rendered on `design/kit/overview.html` under Inventory.*

| Component | Level | css | Page | Grey | Colour |
|---|---|---|---|---|---|
| Button | 1 | `components/button.css` | `button.html` | 85 | 21 |
| Checkbox | 1 | `components/checkbox.css` | `checkbox.html` | 3 | 0 |
| Chip | 1 | `components/chip.css` | `chip.html` | 8 | 2 |
| Document switch | 1 | `components/switch.css` | `switch.html` | 1 | 0 |
| Error code | 1 | `components/error-code.css` | `error-code.html` | 2 | 0 |
| Error text | 1 | `components/error-text.css` | `error-text.html` | 7 | 1 |
| Icon slot | 1 | `components/icon-slot.css` | `icon-slot.html` | 6 | 2 |
| Input | 1 | `components/input.css` | `input.html` | 32 | 7 |
| Media slot | 1 | `components/media.css` | `media.html` | 6 | 2 |
| Metric | 1 | `components/metric.css` | `metric.html` | 17 | 5 |
| Outcome badge | 1 | `components/badge.css` | `badge.html` | 8 | 4 |
| Radio option | 1 | `components/radio.css` | `radio.html` | 6 | 1 |
| Select | 1 | `components/select.css` | `select.html` | 2 | 0 |
| Skeleton | 1 | `components/skeleton.css` | `skeleton.html` | 9 | 2 |
| Spark | 1 | `components/spark.css` | `spark.html` | 10 | 3 |
| Status pill | 1 | `components/status.css` | `status.html` | 16 | 3 |
| Alert banner | 2 | `components/alert.css` | `alert.html` | 3 | 1 |
| Card | 2 | `components/card.css` | `card.html` | 49 | 12 |
| Claims list | 2 | `components/claims.css` | `claims.html` | 2 | 1 |
| Copy field | 2 | `components/copy-field.css` | `copy-field.html` | 11 | 2 |
| Field | 2 | `components/field.css` | `field.html` | 30 | 7 |
| List row | 2 | `components/list-row.css` | `list-row.html` | 19 | 3 |
| Privacy strip | 2 | `components/privacy-strip.css` | `privacy-strip.html` | 42 | 16 |
| Program card | 2 | `components/program-card.css` | `program-card.html` | 9 | 2 |
| Pulse card | 2 | `components/pulse.css` | `pulse.html` | 9 | 4 |
| App bar | 3 | `components/appbar.css` | `appbar.html` | 97 | 24 |
| App footer | 3 | `components/app-footer.css` | `app-footer.html` | 49 | 11 |
| Bottom tab bar | 3 | `components/tabbar.css` | `tabbar.html` | 49 | 11 |
| Content grid | 3 | `components/content-grid.css` | `content-grid.html` | 33 | 10 |
| Dialog | 3 | `components/dialog.css` | `dialog.html` | 7 | 1 |
| Hero | 3 | `components/hero.css` | `hero.html` | 12 | 2 |
| List | 3 | `components/list.css` | `list.html` | 19 | 3 |
| Proof disclosure | 3 | `components/disclosure.css` | `disclosure.html` | 4 | 1 |
| Public footer | 3 | `components/public-footer.css` | `public-footer.html` | 16 | 3 |
| Split auth | 3 | `components/auth.css` | `auth.html` | 2 | 1 |
| State block | 3 | `components/state.css` | `state.html` | 17 | 6 |
| System block | 3 | `components/system-block.css` | `system-block.html` | 2 | 0 |

**The rename map is executed.** All four rows were carried out at step 6 and are recorded in the third list of `tokens-audit.md`.
