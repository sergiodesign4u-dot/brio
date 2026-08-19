# The rules of the system

*How the Brio design system is put together, and why each decision is the way it is. This file is the source of `design/kit/architecture.html`, which shows the same rules in a browser. Read it before adding anything.*

---

## Two ladders, and both of them use the word "level"

They are different ladders and confusing them is the most expensive mistake available here.

**The token ladder is about where a value comes from.** Two levels, not three.

| Level | What it holds | Example |
|---|---|---|
| **primitive** | raw values, no opinion about purpose | `--blue-600: #346FEC`, `--space-4: 16px`, `--text-15: 15px` |
| **semantic** | roles: why this colour is here and what surface it paints | `--bg-action: var(--blue-600)` |

There is no component level as a layer. A component token is created point by point, only where a state lands on no existing role, and every one of them is argued for in writing. A blanket third level is not flexibility, it is a third set of names to rename through: changing the colour of a button would mean opening three files instead of one.

**Colour goes through a role. Geometry does not.** A theme and a rebrand replace colour, so colour needs somewhere to be replaced. A radius and a spacing step have nothing to override: they simply repeat. A component that reads a primitive colour is the hole the first theme finds.

**The component ladder is about what contains what**, and it is counted mechanically: level = 1 + the highest level of what the component contains.

| Level | Rule | Count in Brio |
|---|---|---|
| **atoms** | contain no other component of the kit | 16 |
| **molecules** | contain atoms | 9 |
| **organisms** | contain molecules, or are the frame a screen stands in | 12 |

**Three is the ceiling.** An organism may contain another organism (the content grid holds a list), and there is no fourth rung for it. Inside the organisms, the ones that contain no other organism load first and the content grid loads last.

**Levels are not purposes, and grouping by purpose is banned.** By purpose a button and a log in dialog are both "forms", and a purpose driven registry puts them side by side although one lives inside the other. Four things read the level column and would all break: the `@import` order in `index.css`, the build rounds, the groups in the stand panel, and the rounds of the roll-out at stage 12.

---

## Why the order of `@import` is not alphabetical

`@import` applies in the order written. Alphabetical order puts `dialog.css` before `field.css` and `alert.css` before `button.css`, which loads the composite above its own parts in the cascade. The first context fix then gets treated with `!important`, and a system carries that for years.

The order in `index.css` is tokens, base, layout, one-offs, then atoms, molecules, organisms. It is the level column of `docs/inventory.md`, in that order, and the two are the same order on purpose.

**This is not theoretical here.** Splitting the flat kit into files brought exactly this to the surface: `.wf-auth-proof .wf-ico` carried a width and a height that were dead in the flat file, because `.wf-ico.sm` had the same specificity and stood later. Under the level order the organism loads after the atom, the dead pair would have come alive, and the icon slot on the sign up panel would have silently shrunk from 40 to 20 pixels. The pair was removed rather than kept: a rule that only worked by accident of position is not a decision.

---

## Two folders, and what may not cross between them

| Folder | What is in it | Who loads it |
|---|---|---|
| `design/system/` | the code of the system: `tokens.css`, `base.css`, `layout.css`, `oneoff.css`, `index.css`, `components/*.css` | the product (`design/*.html`) and the stand |
| `design/kit/` | the showcase: foundation pages, a page per component, the hub, `_nav.js`, `_page.css`, `docs/` | a person in a browser |

`design/system/` can be lifted whole into another project: one `index.css` and the system travels. The stand does not go with it, because the stand exists only for working on the system.

**A stand style inside `design/system/`, or a product class inside `design/kit/_page.css`, is a defect.** So is an html page inside `design/system/`. The prototype's own furniture, the navigator strip and the roadmap rail, is in neither: it sits in `design/_proto.css` beside the screens that carry it, so that anyone taking the package does not get the prototype's furniture along with it.

**The stand loads the product css on purpose.** A page here shows a component with the same file the screen runs on, so the page and the screen cannot drift. That also means the product frame arrives with it. Where the frame fights the stand, the stand is fixed in `_page.css`, never in `base.css`. Bending the product so a document looks right is how a system starts documenting something that does not exist.

---

## Adding a component is five things, and four of them are easy to forget

1. `design/system/components/<name>.css`
2. `design/kit/<name>.html`, the page, with the five blocks
3. a row in `design/kit/_nav.js`, **in the group of its own level**
4. a row in `design/kit/docs/inventory.md`, **with the level**
5. `@import` in `design/system/index.css`, **in the group of its own level, never at the end of the file**

Points 3 to 5 matter most for a component added **after** the build: at the reconciliation of step 6, at a new screen, at the roll-out of stage 12. An `@import` appended to the end looks harmless, and that is exactly how the ladder falls apart.

**A component with no page and no registry row does not exist.** What is not shown is not there: every token is visible on a foundation page, every class of `base.css` on a foundation page, every component class on its own page. A token or a class that is on no page either gets a place or gets deleted.

---

## Where an edit goes

| What you are changing | Where it goes |
|---|---|
| a colour | the semantic role in `tokens.css`, and it reaches every screen by itself |
| a raw value: a step of spacing, a radius, a type step | the primitive in `tokens.css` |
| how a component looks | its file in `design/system/components/` |
| what a component is made of | its page in `design/kit/` and the screens it stands on |

**An edit made on one screen is a divergence, not a fix.** That is the whole reason the system exists.

---

## How the theme works

The theme lives in `tokens.css` and nowhere else. A role is declared twice at the same moment, in `:root` and in `[data-theme="dark"]`, and a component reads the role once and becomes dark by itself.

**A role without a pair does not exist, and a state token without a pair does not exist either.** In the second theme an unpaired focus ring simply disappears, keyboard navigation goes blind, and the only way to notice is to switch the theme, which is to say never.

**The pair is not a mirror.** Contrast is measured against the opposite ground, so the dark half takes a different step of the ramp rather than the same primitive:

- `--color-focus` takes a **lighter** blue in the dark theme, not the same blue.
- `--line-hover` has to move **away** from the resting control line, which means darker on light and lighter on dark.
- `--bg-recessed` is **darker** than its card in the light theme and **lighter** than its card in the dark one, because sinking a surface means moving it away from the ground, and the ground moved.
- `--bg-overlay` goes from an ink alpha to black, because an ink alpha over a dark page is invisible.

**If the theme ever forces an edit inside a component file, that is a hole, not a task.** It means the component reads a primitive directly or has a value written into it.

---

## How states work

**A state is a token, never a value written into a class.** No new hex and no new number appears in a component: `:hover` reads `--line-hover` or `--text-hover`, `:focus-visible` reads `--color-focus`, `:disabled` reads `--opacity-disabled`. Breaking that costs three times: the theme becomes forty edits instead of four lines, twenty components each grow a hover of their own, and stage 11 begins by collecting states before it can animate anything.

**`focus-visible`, never `focus`.** The ring is for the person moving by keyboard and is in the way of the person who just clicked.

**A state does not move the layout.** Hover and active change fill, ink and border colour. They do not shift the element, do not change its size, and do not add a border where there was none: a border appearing on hover pushes the neighbours by a pixel, and that is the interface twitching. Disabled is muted with opacity rather than repainted by hand.

**Only an interactive component gets states.** A badge, a heading and a divider do not, and their pages say so in as many words. A hover on a badge is an invented role.

**This product has no hover fill.** Its hover language is a link that darkens its ink and a bordered control that darkens its line, so there is no `--bg-hover` in the system. Naming a fill role that nothing reads is the empty role trap.

---

## The holding pen

`design/system/oneoff.css` holds rules that stand on exactly one screen: the testimonial, the logo strip, the avatar, the maintenance pill, the "answers saved" pill and the "what they never see" list. None of them is a component, because the entry rule of the kit is two screens. They are not dead either: every one is on a real screen and cannot live there, because a screen carries no styles.

They are listed rather than hidden, and the moment a second screen picks one of them up it leaves the file and becomes a component with the full five. Three are worth watching, because all three carry the trust argument: `.wf-cannot`, `.wf-saved` and `.wf-pending`.
