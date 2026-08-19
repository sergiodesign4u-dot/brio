# Control census (stage 08)

*What the component inventory says is **which** components exist. This file says how many real **forms** each interactive control actually has, measured rather than read. It is taken twice with the same instrument: once here at step 1, before the system exists, and once again at step 6, after it does. The second measurement has one job, to prove that every row of the first one was closed.*

**Method.** Playwright over all 24 coloured screens in `design/`, in two fixed viewports, 360px and 1280px. A control is any `a`, `button`, `label`, `input`, `select`, `textarea`, `[role=button]` or `[onclick]`, plus any element that introduces `cursor: pointer` its parent does not have. The prototype strip (`#dz-strip`) is excluded: it is the navigator of the coloured prototype, not the product. For every control the census takes **the computed style**, not the rule: font size and weight, both paddings, radius, border width and colour, fill, ink, min height, transform and box shadow, plus the measured box. Everything was collected in full first and folded afterwards, so the decision about what counts as the same form was taken on complete data and not baked into the collection key.

**Two viewports, and the reason is in the result.** Two families exist at exactly one width: the app bar tabs are only present at 1280 and the bottom tab bar is only present at 360. A census at one width would have missed 44 controls either way, and both are navigation, which is the last thing a system can afford to guess at.

**360 was measured, not intended.** Before every pass the census read `document.documentElement.clientWidth` and required exactly 360, because a 360 window with a scrollbar reports 345 and silently moves the whole measurement to the wrong width. **24 screens, 0 mismatches.** It also read `scrollWidth` against `clientWidth` on every screen: **0 horizontal overflow**.

---

## Measurement before the system (step 1)

**459 controls** on 24 screens: 225 at 360px, 234 at 1280px. They fold into **17 families** and **23 distinct forms**.

### Forms by family

*One row per family. Where a column holds two values, the family has more than one form and the reason is named in the notes below. A value written as a role name (action, ink, muted, line-strong, surface, accent-soft) is the variable that resolved to it, so a drift would show as a raw value with no name.*

| Family | Count | Screens | Type | Padding Y | Padding X | Radius | Border | Fill | Ink | Distinct forms |
|---|---|---|---|---|---|---|---|---|---|---|
| **Button** | 100 | 21 | 15px | 12/12 + 8/8 | 20/20 + 16/16 | 8px | 1px action + line-strong | action + surface | surface + ink | **3** |
| **Footer link, public** | 48 | 3 | 14px | 0/0 | 0/0 | 0px | 0px muted | none | muted | **1** |
| **Footer link, app** | 44 | 11 | 13px | 0/0 | 0/0 | 0px | 0px muted | none | muted | **1** |
| **Tab, bottom bar** | 44 | 11 | 12px | 12/12 | 4/4 | 0px | 0px muted + ink | none | muted + ink | **2** |
| **Tab, app bar** | 44 | 11 | 14px | 12/8 | 0/0 | 0px | 0px muted + ink | none | muted + ink | **2** |
| **Micro link** | 34 | 12 | 13px | 0/0 | 0/0 | 0px | 0px ink | none | ink | **1** |
| **Settings link** | 26 | 13 | 14px | 12/12 | 0/0 | 0px | 0px muted | none | muted | **1** |
| **Input** | 22 | 7 | 15px | 12/12 | 12/12 | 8px | 1px line-strong | surface | ink | **2** |
| **Chip** | 20 | 2 | 11px | 4/4 | 12/12 | 999px | 1px line-strong + none | surface + accent-soft | muted + ink | **2** |
| **Field label** | 18 | 5 | 16px | 0/0 | 0/0 | 0px | 0px ink | none | ink | **1** |
| **Row link** | 18 | 3 | 13px | 8/8 | 0/0 | 0px | 0px ink | none | ink | **1** |
| **Nav link** | 15 | 3 | 14px | 12/12 | 0/0 | 0px | 0px muted | none | muted | **1** |
| **Text link** | 10 | 2 | 15px | 0/0 | 0/0 | 0px | 0px ink | none | ink | **1** |
| **Radio option** | 6 | 1 | 15px | 16/16 | 16/16 | 8px | 1px line-strong | surface | ink | **1** |
| **Radio input** | 6 | 1 | 13.3333px | 0/0 | 0/0 | 0px | 0px ua default | none | ua default | **1** |
| **Disclosure summary** | 2 | 1 | 15px | 16/16 | 16/16 | 0px | 0px ink | none | ink | **1** |
| **Textarea** | 2 | 1 | 15px | 12/12 | 12/12 | 8px | 1px line-strong | surface | ink | **1** |
### 1. Drift inside a family

*More than one value on one property is a candidate for drift until an axis from the inventory is named that produces it. Eleven of the seventeen families have exactly one form and need no argument. Six have more than one, and every one of them is named.*

| Family | Property with more than one value | The axis that produces it | Verdict |
|---|---|---|---|
| **Button** | padding, border colour, fill, ink, min height | emphasis (solid against outline) and the `compact` size declared at stage 07 step 6 | **Not drift.** Three forms, three declared variants. The border colour and fill move together, and so do the ink and the border: solid is `action` on all three, outline is `line-strong` with a `surface` fill and `ink` label |
| **Tab, app bar** | weight, ink, border colour | current against not current | **Not drift.** One state, and it is the only state the component has |
| **Tab, bottom bar** | weight, ink, border colour | current against not current | **Not drift, and it is the same answer as the app bar**: 400 to 600, muted to ink. Two navigation families that answer identically is worth one line of text, not a second set of screenshots |
| **Chip** | border colour, fill, ink | selected against not selected | **Not drift.** Selected takes the soft accent fill and drops its border to transparent, which is the one place in the product where a border disappears on a state change. It does not move the layout: the border stays 1px and turns transparent rather than being removed |
| **Input** | min height, `0px` against `auto` | none | **Withdrawn at verification.** All six `auto` inputs sit inside `.wf-copy`, where the input is a flex item, and `auto` is the initial computed min height of a flex item rather than anything declared. The measured height is 49px in every one of the 22 cases. Not a form, not a difference, nothing to consolidate |
| **Radio input** | ink and border read as `rgb(0, 0, 0)` | none | **Not a form.** That is the user agent's own value for a native radio; the visible colour comes from `accent-color: var(--color-action)`, which the computed `color` property does not report. Recorded so step 5 does not try to consolidate a value nobody set |

**The most expensive property, and what it says here.** The pack names the border colour as the one that matters most, because three different lines on the same role of the same component is always drift. In this product the border colour has **two** values across 459 controls: `action` on a solid button and `line-strong` on every outlined control. There is no third. The system arrives at step 2 with its lines already coherent, which is a result of the kit, not of luck.

**The one number the census cannot pass on.** `line-strong` is the entire visual boundary of five families (button outline, input, radio option, chip, status pill) and it measures **1.5:1** against the surface it sits on. WCAG 1.4.11 asks 3:1 of a boundary that has to identify a control. It is measured, it is recorded in `tokens-audit.md`, and the decision belongs to the review of the foundations at step 4.

### 2. One job, several forms

*The same action text carried by different emphasis. On the whole grey product the inventory found twenty such labels; on the 24 screens in colour there are five. The list is shorter because the sample is smaller, not because anything was fixed.*

| Label | Forms | Where each stands | What it needs |
|---|---|---|---|
| **See what changed** | outline **and** solid, on the same screen | `dashboard-alert`, once in the alert banner and once in the pulse card | **The sharpest row.** One screen tells the operator two different things about how urgent the same link is. Decided at step 2 |
| **Browse programs** | outline on 4 screens, solid on 1 | outline: `dashboard`, `dashboard-alert`, `dashboard-error`, `dashboard-open`. solid: `dashboard-noprogram` | Arguable and probably right: on the screen with no program it is the only thing to do, so it is the main action there and secondary everywhere else. Needs to be a rule, not a coincidence |
| **Continue** | outline on 1, solid on 2 | outline: `checkin-entry`. solid: `checkin-privacy`, `checkin-expired` | Same shape of argument, opposite direction: on the entry screen Continue is the whole point of the screen and is the one that is outlined |
| **Select** | outline on 2, solid on 1 | `program-library`, `program-library-empty` | Two forms inside one screen pair |
| **Start free** | solid and solid `compact` | `compact` in the app bar on `index`, `contact`, `contact-sent`; solid in the page body | **Not this list.** `compact` is a declared size variant and the app bar is a different container. Recorded so it is not counted twice |

All five come from the frozen wireframes: the coloured copy is faithful to its grey original class for class, which is exactly what the stage-07 contract required of it. That means the fix, when it is decided at step 2, lands in `design/` and never in `wireframes/`.

### 3. Control without a form

*The inventory was read out of all 99 grey screens; only 24 are in colour. Everything the inventory declares and the coloured sample does not draw is a form that the next person to build a screen would otherwise invent from scratch, differently each time: first step 5, then the roll-out at stage 12. The list is long, and at 24 screens out of 100 that is the expected shape, not a failure.*

**Components with no coloured instance at all: 4.**

| Component | Level | Where it stands in the grey product | Where its form comes from |
|---|---|---|---|
| **Document switch** `.wf-switch` | 1 | `legal.html`, a row of pill links between the three legal documents | The stage 07 kit already carried a full rule for it, including `.on` and hover. Step 5 built the page and the states from that rule, not from imagination |
| **System block** `.wf-sys` | 3 | two maintenance and system screens | The stage 07 kit already carried its rule, head and body |
| **Checkbox** | 1 | `check-in-setup`, `check-in-setup-error`, `cookie-consent-manage` | Only `accent-color` exists today. It is a form control and enters the system by the exception, so step 5 gives it a real rest, checked, focus and disabled |
| **Select** | 1 | `check-in-setup`, `check-in-setup-error` | `select.wf-input` exists with the chevron mask; the open state and the disabled state do not |

**States and variants declared and never drawn in colour: 6.**

| Missing form | Declared in | Grey screens that have it |
|---|---|---|
| Input, disabled | inventory, Input states | 6 |
| Radio option, checked | inventory, Radio option states | 5 |
| List row, pending | inventory, List row states | 1 |
| Document switch, current | the `.on` rule the stage 07 kit carried | 1 |
| Select, any state | inventory, form-control exception | 2 |
| Checkbox, checked | inventory, form-control exception | 3 |

**A form that is declared, has a rule, and is worn by nobody: 1.** `.wf-media.tall` stood at `kit.css:570` and read `--size-media-tall: 340px`. No screen wears it, in colour or in grey, and the showcase does not show it either. The inventory row for the media slot lists "default, `shot`, `tall`" and the third one is a variant that never existed. Codex correctly reported zero orphan variables, because the variable **is** used, by a rule nobody wears: the deadness is one level up, at the class. This is the first entry of the third list of step 6, found early, and step 2 decides whether it goes or whether the roll-out has a real use for it.

**Verification before believing the census.** The pass does not see what a state switches on, so anything absent was checked in the source before it was called missing. Two rows did not survive: the min-height difference on inputs (flex context, not a declaration) and the black on a native radio (user agent, not a value anyone set). Both stay above with the reason rather than disappearing quietly. The six rows that did survive were each confirmed by finding the grey screen that carries the state.

### A difference that is deliberate and must not be read as drift

The stage-07 census in `inventory.md` was measured on the **grey** prototype, which runs on its own `_wf.css`; this one is measured on the **coloured** kit. The type sizes therefore do not match, and they do not match in one direction:

| Family | Grey, stage 07 | Colour, now |
|---|---|---|
| Button | 13px | 15px |
| App bar tab | 13px | 14px |
| Bottom tab bar | 11px | 12px |
| Public footer link | 13px | 14px |
| App footer link | 12px | 13px |
| Row link | 12px | 13px |
| Chip | 10px | 11px |

Every family moved up by one or two pixels, and it moved as a ramp rather than one at a time. That is the type scale published on the concept stand at stage 06 replacing the prototype's own, which is a decision with a record, not a drift. It is written here because a reader comparing the two census tables would otherwise find seven contradictions and would be right to ask.

---

## Measurement after the system (step 6)

*The same walk, the same instrument, the same two viewports, taken again once the 24 screens were running on `design/system/index.css`. Its one job is to prove that the first measurement is closed.*

### The two measurements side by side

| | Before the system (step 1) | After the system (step 6) |
|---|---|---|
| Controls found | 459 | **459** |
| Families | 17 | **17** |
| Distinct forms after folding | 23 | **23** |
| Screens where 360 measured exactly 360 | 24 of 24 | **24 of 24** |
| Screens with horizontal overflow | 0 | **0** |
| Border colours across every bordered control | 2 | **2** |

**Identical, and that is the result being looked for.** A refactor that changed the number of forms would mean the split had invented or lost one. The two values behind the border colour did move, and both are named: `rgba(91, 97, 113, .28)` became `.70`, and the selected chip's transparent border became the action colour. Both are rows in the foundation review list of `tokens-audit.md`, and both are visible in the pixel comparison.

### 1. Missing from the system

**Nothing, inside the coloured sample.** Every control on the 24 screens is drawn by a class that has a file, a page, a registry row and an `@import`. The gaps found are outside the sample, in the still grey product, and the dry run at step 9 lists them by name in `backlog.md`: five classes that stand on two or more grey screens and that the stage 07 inventory never recorded.

### 2. Screens drawing past the system

**Nothing.** Zero `style` attributes and zero `<style>` blocks across the 24 screens; the one `<style>` block in `design/` is on `overview.html`, which is a stand. The rename map of step 2 had four rows and all four are executed: the app bar button is a declared `compact` variant, the embedded pulse card is a declared context, the flex rule on the input inside a copy field moved into `copy-field.css`, and `.wf-media.tall` is deleted.

### 3. Classes nobody wears

*Counted against both corpora separately, because zero in the sample and five in the grey product means "waiting for the roll-out", not "dead".*

| Component | In the coloured sample | In the whole grey product | Verdict |
|---|---|---|---|
| Select | 0 | 2 | Waiting for stage 12. Built here from the rule that already existed and from the screen it stands on |
| Checkbox | 0 | 3 | Waiting for stage 12 |
| Error code | 0 | 2 | Waiting for stage 12 |
| System block | 0 | 2 | Waiting for stage 12 |
| `.wf-media.tall` | 0 | **0** | **Dead. Deleted at step 2**, together with `--size-media-tall` |

**One row, and one only, was genuinely dead.** Four components have no coloured instance and are not dead: the product has 99 screens and 24 of them are in colour, so a component that stands on two grey screens is exactly where it should be. Proposing to delete one of those would be reading the sample as if it were the product.
