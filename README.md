# Colors (`@genbuhase/own-colors`)

長谷 玄武 (Genbu Hase) のカラーパレット。誕生色の**鴇色**（`#f4b3c2`）をベースとしています。

Web / プロダクト向けのトークン（CSS・TypeScript）と、一枚のショーケース（Vue 3 + Vite）を同梱しています。

## Dev

```bash
npm install
npm run dev
```

トークンは `src/tokens/` にあり、フレームワーク非依存です。

## Deploy (GitHub Pages)

`master` への push で GitHub Actions がビルドし、`gh-pages` ブランチへデプロイします。

リポジトリの Settings → Pages で Source を **Deploy from a branch**、Branch を **gh-pages / (root)** に設定してください。

公開 URL: https://genbuhase.github.io/Colors/
## Tokens

| Family | Name | Use |
|--------|------|-----|
| `primary` | 鴇 (toki) | Anchor / Fills / Primary button |
| `accent` | 青磁 (celadon) | Links / Accent button |
| `neutral` | 墨 (ink) | Text / Borders |
| `semantic` | success / warning / danger / info | Status |

`data-theme="light|dark"`でテーマを切り替えられます。

### Print set

名刺・印刷向けの3色です（常にLightテーマ）。

| Color | HEX | Token |
|-------|-----|-------|
| 鴇 | `#F4B3C2` | `primary-300` |
| 墨 | `#2A2628` | `neutral-900` |
| 青磁 | `#316C66` | `accent-600` |

## Import

```css
@import "@genbuhase/own-colors/tokens.css";
```

```ts
import { colors, printSet } from "@genbuhase/own-colors/tokens";
```

| Path | Contents |
|------|----------|
| `tokens.css` | Colors + Theme |
| `colors.css` / `theme.css` | Split |
| `tokens` | TypeScript |

## License

[MIT License](./LICENSE)