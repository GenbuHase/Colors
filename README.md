# MyColors

Personal color palette for Genbu Hase. Anchor: birth color **鴇色** `#f4b3c2` (Mar 3).

## Dev

```bash
npm install
npm run dev
```

Vue 3 + Vite. Tokens live under `src/tokens/` and stay framework-agnostic.
## Tokens

| Family | Name | Use |
|--------|------|-----|
| `primary` | 鴇 (toki) | Anchor, fills, primary button |
| `accent` | 青磁 (celadon) | Links, accent button |
| `neutral` | インク (ink) | Text, borders |
| `semantic` | success / warning / danger / info | Status |

Theme via `data-theme="light|dark"`. Primitives stay fixed; only **roles** (`--surface-*`, `--text-*`, `--action-*`, …) switch.

Print triad (light only): 鴇 `#F4B3C2` · ink `#2A2628` · celadon `#316C66`

## Import

```css
@import "@genbuhase/my-colors/tokens.css";
```

```ts
import { colors, printSet } from "@genbuhase/my-colors/tokens";
```

| Path | Contents |
|------|----------|
| `tokens.css` | colors + roles |
| `colors.css` / `roles.css` | split |
| `tokens` | TypeScript |

## License

MIT © 長谷 玄武 (Genbu Hase)
