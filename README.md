# TC_NLP

Landing page de **Influencer Boost (Tradeco Capital / Norman)**. Funnel **Ads → LP →
Telegram**, sin formulario. La lógica y los estilos se sirven vía **jsDelivr**; **el host
(Hostinger/Elementor) solo aporta un punto de montaje**.

Build: esbuild + TypeScript + GSAP. Marca dictada por el HTML de la agencia, corregida y
tokenizada (ver `RELUME-BRIEF.md` y `CLAUDE.md`). El layout lo diseña Relume.

## Uso en el host (widget HTML)

Pega esto en un widget **HTML** (no en un widget Form):

```html
<div data-aa-mount data-aa-theme="dark" data-aa-lang="es"></div>

<script data-cfasync="false" data-wpmeteor-nooptimize="true"
  src="https://cdn.jsdelivr.net/gh/karenrebecag/TC_NLP@latest/loader.js"></script>
```

Atributos del mount:
- `data-aa-theme` → `light` | `dark` (default `dark`)
- `data-aa-lang`  → `es` | `en` (default `es`)

## Distribución

```
push main → CI (.github/workflows/release.yml): typecheck + build + tag patch +
            regenera loader.js + commitea dist + purga jsDelivr @latest
loader.js @latest → inyecta el tag inmutable @vX.Y.Z (CSS + JS)
```

El repo **debe ser público** (requisito de jsDelivr `/gh/`).

## Desarrollo

```bash
npm install
npm run typecheck   # tsc --noEmit
npm run build       # genera dist/
npm run dev         # build + watch + server en :8766 (sirve preview.html)
```

Ver `CLAUDE.md` para arquitectura, tokens y sistema de animación.
