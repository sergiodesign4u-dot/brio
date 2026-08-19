# design/system - rules

1. **Two levels of token, not three.** primitive holds values, semantic holds roles. A component token is created point by point and argued for, never as a blanket layer.
2. **Colour only through a role.** A component that reads `--blue-600` or `--slate-600` directly is the hole the first theme finds.
3. **Geometry straight from primitive.** `--space-*`, `--radius-*`, `--size-*`, `--text-*`, `--line-*`, `--weight-*`, `--leading-*` are read as they are: they have nothing to override.
4. **Two roles are two tokens even at the same value**, if they can ever diverge. One single usage is not yet a role: it stays a primitive.
5. **A new component is five things:** css here, a page in `design/kit/`, a row in `design/kit/_nav.js` in the group of its own level, a row in `design/kit/docs/inventory.md` with the level, and an `@import` in `index.css` **in the group of its own level, never at the end**.
6. **Every role and every state token exists in `:root` and in `[data-theme="dark"]`**, or it does not exist. The pair is not a mirror: it takes another step of the ramp.
7. **A state is a token.** `:hover` reads `--text-hover` or `--line-hover`, `:focus-visible` reads `--color-focus`, `:disabled` reads `--opacity-disabled`. No new hex and no new number in a class.
8. **No html here and no stand styles here.** The showcase lives in `design/kit/`, the prototype chrome in `design/_proto.css`.

Detail and reasoning: `design/kit/docs/architecture.md`.
