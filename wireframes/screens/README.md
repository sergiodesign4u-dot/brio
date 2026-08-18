# wireframes/screens

Screenshot pairs for the "was to now" section on `overview.html`. Captured at 1280px in a browser, not described from memory.

| Pair | Files | What changed |
|------|-------|--------------|
| 4.0 Dashboard, the wireframe navigator | `4.0-dashboard-was.png`, `4.0-dashboard-now.png` | Was: a sticky top strip carrying the node, the current state and chips for the sibling states, with nothing above it. It could answer "which state am I in" and nothing else, so in a product of 47 screens the reader could not tell where this screen sat. Now: a left rail with the IA cluster tree, the screen with its muted node number, an accordion open only on the current node, and a cross-link to the IA specification at the bottom. On mobile the same panel is a top bar that opens downward. Decision D-05. |

The "was" frame was rendered from the pre-retrofit `_nav.js` and `_wf.css` restored out of git, not reconstructed by hand, so the pair compares two real renders of the same screen.
