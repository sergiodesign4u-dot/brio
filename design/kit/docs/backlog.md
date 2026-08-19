# Backlog

*What the system deliberately does not carry yet, why, and which stage closes it. A row here is a decision, not a forgotten task: everything on this page was found, looked at, and left out on purpose.*

---

## Found by the dry run over the still grey product (step 9)

*Four of the densest screens that have no coloured copy were read against the inventory: `team-roster-pending`, `share-owner`, `settings-account-delete`, `check-in-setup`. Then the same question was put to all 75 still grey screens mechanically: which classes do they wear that the system does not declare. Nothing was built in answer, which is the rule for this instrument.*

**Result in numbers.** 4 screens read by hand, 75 swept mechanically. **Five classes stand on two or more grey screens and are missing from the system**, which means the stage 07 inventory missed five rows. 70 more classes stand on exactly one screen each and are correctly absent. One class, `.wf-panel`, looked like the largest hole in the product and is not one.

| What is missing | Where it stands | Why it was left out | Who closes it |
|---|---|---|---|
| **`.wf-mark`**, a 46px round outline mark with a check glyph | `invite-owner-sent`, `payment-failed` | It is almost certainly an **outline variant of the Outcome badge** rather than a new component: same size family, same job, no fill. Deciding that from two grey screens with no coloured instance would be guessing at a variant rather than reading one. It becomes a row of the badge's axis matrix the moment either screen is coloured | Stage 12, roll-out |
| **`.wf-req`**, a list of password requirements with a tick per row | `reset-password`, `reset-password-loading` | Anatomy close to the Claims list, but with a state per row, which the claims list does not have. A second anatomy or a variant, and the difference is a state that only exists in a flow nobody has coloured yet | Stage 12, roll-out |
| **`.wf-claim`** (singular, not the `.wf-claims` list) | 2 screens | Looks like one row of the claims list used on its own. If that is what it is, it is not a component at all but a use of an existing one | Stage 12, roll-out |
| **`.wf-see-row`** | `settings-account-delete`, `settings-privacy` | A row inside the proof disclosure. Probably a content variant of Proof disclosure | Stage 12, roll-out |
| **`.wf-danger`** | `settings-account`, `settings-account-delete` | The destructive zone of the settings screen. The Dialog already has a danger variant; whether this is the same emphasis applied to a section or a separate component cannot be told from grey markup | Stage 12, roll-out |

**Why all five are deferred rather than built.** Every one of them is a **variant question, not a missing component**: in each case the system already has the family, and what is unknown is whether the grey screen is showing a new value on an existing axis or a new anatomy. That question is answered by colouring the screen, which is stage 12. Building five components now to be safe would put five rows in the registry that the roll-out then has to merge back, and the merge is more expensive than the gap.

**What this changes for stage 12.** The roll-out starts with these five, not with a blank sheet, and its first act on each is to decide variant against component. That decision belongs in `inventory.md` before any css is written.

**`.wf-panel`, and why 97 of 99 screens is not a hole.** It is the grey prototype's own navigator panel, with `.wf-panel-head`, `-back`, `-badge`, `-sub` and `-here` under it. It is chrome of `wireframes/`, and the coloured screens replace it with `.dz-strip` in `design/_proto.css`. It is not product markup and it does not belong in the system. Recorded because a class on 97 of 99 screens looks like the biggest gap in the product until somebody opens the file.

---

## Deferred by decision, not by oversight

| What | Why | Who closes it |
|---|---|---|
| **Breakpoints as tokens.** Fourteen media queries read 520, 640, 700, 720, 760 and 900 as plain numbers | Naming a breakpoint means deciding it, and responsive is stage 10. They are counted and listed on `geometry.html` so stage 10 finds them in one place rather than hunting | Stage 10, Responsive |
| **Motion tokens.** No duration, no easing, no `transition` anywhere; the one animation in the product is the disclosure chevron | Motion attaches to a state, and the states were only tokenised at this stage. Building a motion layer before that would have meant collecting states first | Stage 11, Animation |
| **A component token layer.** `--button-bg`, `--card-radius` and the like | Nothing needed one. Every state landed on a semantic role, so the point by point rule produced zero component tokens. An empty third level is a third set of names to rename through, without any flexibility in return | Only when a state fails to land on a role |
| **Photography inside the product.** The media slot only carries images on the public surfaces and the sign up panel | Attribute A5 was amended at stage 07 with the reason: a photograph of strangers on the screen where a person reports a hard week is decoration, and decoration is what A3 forbids | Not planned |
| **The remaining 75 screens in colour** | The sample is 24 of 99 by design. A screen is built once, when everything is ready, and everything is ready after stage 11 | Stage 12, Roll-out |

---

## Not deferred, decided against

| What | Why |
|---|---|
| A hover fill role (`--bg-hover`) | This product has no hover fill anywhere. Its hover language is a link darkening its ink and a bordered control darkening its line. A fill role nothing reads is the empty role trap |
| A success colour | Decided at stage 06, D-16. Principle 4: a dip is called a dip, and a success states the fact without celebrating. There is nothing for a green to do |
| A text role in the action colour | The action blue measures 4.27 against the page and would fail as text. It is never used as a label anywhere, and a role named for it would be an invitation to try |
| `.wf-media.tall` | Declared in the stage 07 kit, worn by no screen in either corpus, shown on no page. Deleted at step 2 rather than kept as a variant waiting for a use |
