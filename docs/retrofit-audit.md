# Retrofit audit, 5 August 2026

*The full log. The pages show a summary by class; this file keeps every row, including the ones withdrawn at verification, so a false finding cannot come back next time in the same words.*

**Two instruments, sets taken independently.** Claude read the sources and the rendered pages in a browser; Codex ran read-only over the same working folder, entered through `AGENTS.md`, and never saw Claude's table before returning its own. Deduplication happened afterwards, on complete data. The **who found it** column is the point of running two: after a few stages it shows which classes one instrument misses systematically, and whether the second is still paying for itself. It cannot be guessed, only accumulated.

**Radius.** Codex owns what is falsifiable in text: contradictions, orphans, stale names, drifted numbers. What breaks at 360px, what breaks a layout, and anything about how a page renders stayed with Claude, who has a browser. Codex was not asked about those, because it would answer confidently and be wrong.

---

## Summary by class

| Class | Found | Who found | Fixed | Withdrawn at verification | Deferred |
|-------|-------|-----------|-------|---------------------------|----------|
| Stale path after the restructure | 5 | Claude (script) | 4 | 1 | 0 |
| Stale file name behind markdown backticks | 5 | **Codex** | 5 | 0 | 0 |
| Contradiction inside one document | 1 | **Codex** | 0, clarified instead | 1 | 0 |
| Markdown with no visible place on any page | 7 | Claude (script) | 2 | 4 | 1 |
| More than one H1 on a page | 12 | Claude (script) | 12 | 0 | 0 |
| Unbalanced inline script after scripted surgery | 1 | Claude (script) | 1 | 0 | 0 |
| Em dash in an output file | 11 | Claude (script) | 11 | 0 | 0 |
| Broken internal link | 0 | Claude (script) | - | - | - |
| Breaks at 360px | 0 | Claude (browser) | - | - | - |
| **Total** | **42** | | **35** | **6** | **1** |

**What the who-found-it column already says.** Codex contributed 6 of the 42 rows, and all 6 sit in one class that Claude's own instrument missed **systematically, not by chance**: a filename written inside markdown backticks. The rewrite script that renamed `home.html` to `index.html` matched a filename preceded by a quote, a bracket, whitespace or `>`, and a backtick is none of those, so every `` `home.html` `` in prose survived and `docs/decisions.md` went on to claim that all 15 references had been rewritten. A second pass by the same instrument would have reproduced the same blind spot, because the blind spot is in the pattern, not in the effort.

---

## Rows

### Stale path after the restructure

| # | Where | Was | Now | Who | Status |
|---|-------|-----|-----|-----|--------|
| 1 | `wireframes/_wf.css:6` | "Stages 06 to 08 grow COLORED copies in ui-visual/" | "in design/" | Claude | fixed |
| 2 | `wireframes/_wf.css:268` | "fills them with real imagery on the ui-visual copies" | "on the design/ copies" | Claude | fixed |
| 3 | `wireframes/_wf.css:5` | "the roadmap sidebar (used only by the index hub)" | the hub is `overview.html`, and its sidebar comes from the root registry | Claude | fixed |
| 4 | `wireframes/docs/conventions.md:18` | "applied to COPIES in ui-visual/" | "in design/" | Claude | fixed |
| 5 | `README.md:19` | "Wireframes - Product home: .../wireframes/index.html" | - | Claude | **withdrawn at verification.** The pattern flagged any line pairing `wireframes/index.html` with the word hub or home. This line is correct as written: `index.html` **is** the product home. The instrument was too broad, the file was right. |

### Stale file name behind markdown backticks

| # | Where | Was | Now | Who | Status |
|---|-------|-----|-----|-----|--------|
| 6 | `wireframes/docs/screens.md:21` | "**0.0 Home** (`home.html`)" | "(`index.html`)" | Codex | fixed |
| 7 | `wireframes/docs/screens.md:55` | "**0.0 Home:** `home.html` (guest base)" | "`index.html` (guest base)" | Codex | fixed |
| 8-10 | `voice/docs/microcopy.md`, 32 table rows | "home.html" as the state key | "index.html" | Codex | fixed |
| 11 | `voice/docs/microcopy.md:1315, 1495` | prose naming the Home base state "home.html" | "index.html (node 0.0 Home)" | Codex, found while fixing 8-10 | fixed |

### Contradiction inside one document

| # | Where | The claim | Verdict | Who | Status |
|---|-------|-----------|---------|-----|--------|
| 12 | `wireframes/docs/conventions.md:33` | The naming rule lists `home.html` among the IA basenames while line 29 says `index.html` is the product home, so the rule points at a file that does not exist | **Withdrawn at verification.** The sentence is about the **IA** basenames, and `ia/home.html` does exist, so the quoted example is factually right. But the reading was fair: in a document about wireframe naming the example is ambiguous. A clarifying sentence was added naming the one exception, rather than changing a correct fact. | Codex | withdrawn, clarified |

### Markdown with no visible place on any page

| # | File | Verdict | Who | Status |
|---|------|---------|-----|--------|
| 13 | `wireframes/docs/conventions.md` | Real: a stage artefact with no visible place | Claude | fixed - "The grey contract" section on `wireframes/overview.html`, registered in `NAV_SECTIONS` |
| 14 | `wireframes/docs/critique.md` | Real: the defect log had no visible place | Claude | fixed - the "was to now" section on `wireframes/overview.html` |
| 15 | `research/docs/lean-ux-canvas.md` | **Withdrawn.** The instrument searched for the filename; the canvas is shown as its own section on `research.html` (`id="canvas"`), which is legal form 2. The file was fine, the check was naive. | Claude | withdrawn |
| 16-17 | `research/product-model.md`, `research/quality-check.md` | **Withdrawn.** Not stage artefacts: superseded working history, listed as such in `README.md`. The visibility rule covers what a stage produces, not what it discarded. | Claude | withdrawn |
| 18 | `design/concept/docs/concept.md`, `references.md` | Real but not yet due: their page is `design/concept/concept.html`, which stage 06 builds. Recorded as an open obligation of that stage. | Claude | deferred to stage 06 |

### More than one H1 on a page

| # | Where | Was | Now | Who | Status |
|---|-------|-----|-----|-----|--------|
| 19-25 | `research/research.html` | 8 H1 elements: the page title plus 7 section titles | 1 H1; section titles are `h2.h1-size`, pixel-identical | Claude (script) | fixed |
| 26-30 | `voice/voice.html` | 6 H1 elements | 1 H1, same treatment | Claude (script) | fixed |

Only these two pages were affected: all 162 other pages already carried exactly one H1, which is why the pattern reads as a habit of the showcase template rather than a one-off slip.

### Unbalanced inline script after scripted surgery

| # | Where | Was | Now | Who | Status |
|---|-------|-----|-----|-----|--------|
| 31 | `wireframes/overview.html` | The converter cut inline JS from `var toggle = ...sidebarToggle` to the end of its `<script>` block. Here the toggle sat **inside** a wrapping IIFE, so the cut removed `})();` too, and the counter and the coverage map died silently while the page still looked fine | closing line restored; counter and coverage map render again (47 of 47 screens, 99 state pages) | Claude (brace-balance check over every inline script) | fixed |

**Kept as a rule, not just a fix:** after any scripted surgery on html, run a brace and parenthesis balance check over every inline script. The page did not throw anything visible; it simply stopped rendering two sections.

### Em dash in an output file

| # | Where | Was | Now | Who | Status |
|---|-------|-----|-----|-----|--------|
| 32-42 | `design/concept/docs/concept.md` (3), `design/concept/docs/references.md` (7), `research/quality-check.md` (1) | em dash | spaced hyphen | Claude (script) | fixed |

The three files were written before the rule was mechanically checked. The project is now clean: zero em dashes in any `.md`, `.html`, `.js` or `.css` file.

---

## What was verified and found clean

- **661 internal links** across every html file resolve. Both registries (`wireframes/_nav.js`, `ia/_nav.js`) point only at files that exist.
- **No horizontal scroll at 360px** on any page touched this session. Wide tables scroll inside their own container, which is the correct behaviour, not a defect.
- **Sidebar renders from one source** on all 65 converted pages: the accordion opens only the active stage, Next sits on Concept, and off-registry pages appear as satellites under their nearest registry page.
