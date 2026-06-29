# tradeco-norman-lp

Landing page de **Influencer Boost (Tradeco Capital / Norman)**. Lógica + estilos
servidos vía jsDelivr; **el host (Hostinger/Elementor) solo aporta un punto de montaje**.
Build: esbuild + TypeScript + GSAP.

Origen: duplicado de `ATFX_PeruLP` (arquitectura vanilla + Mount Point Pattern), git
desconectado. Conserva el sistema de tokens `--aa-*`, tipografía fluida y el boot del mount.

## Por qué este proyecto existe

Funnel **Ads → LP → Telegram**, **sin formulario**. CTA único "Unirme gratis" →
`https://t.me/TradecoCapital_Free`. La conversión ocurre dentro de Telegram (Ramón), no
en la web.

El **layout lo diseña Relume** (sitemap → wireframe → style guide → design → export a
Figma → aprobación de cliente). Este repo NO maqueta a mano: provee la **base de marca
tokenizada** y, tras la aprobación, **mapea el diseño de Relume sobre los tokens `--aa-*`**
para publicarlo como bundle en jsDelivr y montarlo en el dominio.

- Marca: la **dictada por el HTML de la agencia** (dark editorial), corregida desde DS.
- Brief para Relume: `RELUME-BRIEF.md` (primitivos, semánticos, prompts, copys).

## Identidad

| Campo | Valor |
|---|---|
| Repo | `TC_NLP` (debe ser **público** — requisito de jsDelivr `/gh/`) |
| Owner | `karenrebecag` (confirmar al crear el repo público) |
| Dominio | `atfx.tradecocapital.com` (Hostinger, gestionado por el IB) |
| CDN loader | `https://cdn.jsdelivr.net/gh/karenrebecag/TC_NLP@latest/loader.js` |
| Bundle JS / CSS | `dist/landing.js` · `dist/landing.css` |
| Tema default | **dark** (LP dark-first) · lang `es` |
| Telegram | `https://t.me/TradecoCapital_Free` |
| Tracking | Meta Pixel + Conversion API — **pendiente** (archivo de la agencia no recibido); cablear con placeholders |

## Cómo se usa en el host (widget HTML)

```html
<div data-aa-mount data-aa-theme="dark" data-aa-lang="es"></div>
<script data-cfasync="false" data-wpmeteor-nooptimize="true"
  src="https://cdn.jsdelivr.net/gh/karenrebecag/TC_NLP@latest/loader.js"></script>
```

Atributos: `data-aa-theme` (`light|dark`, default `dark`) · `data-aa-lang` (`es|en`, default `es`).

### Gotcha: plugins de "delay JS" (WP Meteor, WP Rocket, Perfmatters…)

La landing se renderiza 100% con JS: si el loader no corre al cargar, la página queda en
blanco. Los plugins de optimización **retrasan todo el JS hasta la primera interacción** y
reescriben el `<script>` del loader → en mobile no pinta hasta que el usuario hace scroll.

`data-cfasync="false"` **NO** exime de esto (es solo para Cloudflare Rocket Loader). Hay que
eximir el loader del plugin de delay. Para **WP Meteor** basta `data-wpmeteor-nooptimize="true"`.
Para otros (WP Rocket, Perfmatters, Flying Scripts), excluir la URL del loader
(`jsdelivr`/`loader.js`) de su lista de "no retrasar".

> Cache: jsDelivr sirve `@latest` con `max-age` 7 días. Tras publicar versión, hard-refresh
> o incógnito para no quedarse con el loader viejo cacheado.

## Arquitectura

```
src/*.ts  --esbuild-->  dist/landing.js (GSAP inlined, minificado) + dist/landing.css
```

`src/index.ts` lee los atributos del mount, crea el root `.aa-landing` y renderiza cada
sección como módulo. Todo el CSS está scopeado a `.aa-landing` / `--aa-*`.

## Design System (marca corregida — fuente: HTML de la agencia)

Solo se remapearon **valores** de tokens; nombres `--aa-*` y scoping `.aa-*` intactos.

| Capa | Token | Valor | Rol |
|---|---|---|---|
| Superficie (layering) | `--aa-ink-850 / 800 / 700 / 600` | `#11151C / #161B24 / #1B212B / #222A35` | page → surface → elevated → overlay |
| Tinta | `--aa-cream` + `--aa-fg-muted/-subtle` | `#F3EFE6` + alpha | fg cálido; muted/subtle por alpha = armonía |
| Highlight (gold) | `--aa-highlight / -hover / -weak / on-` | `#C99B4A / #D6AA5B / a.14 / ink-850` | **único color de acción**: CTA, links, números |
| Support (teal) | `--aa-support` | `#4FA89B` | señales live/positivo; **no compite con CTA** |
| Tipografía | display / sans / mono | Fraunces / Inter / IBM Plex Mono | hereda escala fluida `clamp` |

`--aa-accent` queda como alias de acción → `--aa-highlight` (gold), por compat con
componentes que ya leen `--aa-accent` como color de CTA.

## Flujo de trabajo

1. Directrices de marca (este repo: tokens + `RELUME-BRIEF.md`). ← estado actual
2. Relume crea el diseño, se itera.
3. Export a Figma, presentación a cliente.
4. Aprobado → mapear el diseño de Relume sobre los `--aa-*` (secciones en `src/sections/`).
5. Build + publicar a jsDelivr + montar en `atfx.tradecocapital.com`.
6. Cablear Pixel + Conversion API cuando llegue el archivo de la agencia.

## Desarrollo

```bash
npm install
npm run typecheck            # tsc --noEmit
npm run build                # genera dist/
PORT=8768 npm run dev        # build + watch + server (sirve preview.html)
```

`PORT` configurable para coexistir con otros proyectos del mismo stack.

## Reglas de edición de secciones (flujo con Figma)

Al maquetar/editar cualquier sección se sigue este flujo, en orden:

1. **Insight de sección** — la usuaria comparte el propósito/contenido de la sección.
2. **Semántica HTML de Figma** — export de referencia. La semántica **no es correcta**:
   sirve solo para entender la **maquetación** (qué va dónde), nunca para copiar medidas.
3. **Validación visual** — se revisa en el preview local y se itera.

Invariantes mientras se maqueta:

- **Tokens siempre.** Nunca medidas fijas ni valores hardcoded (px, hex, etc.).
  Todo sale de `--aa-*` (`tokens.css`); si falta un token, se crea, no se hardcodea.
- **Reusar lo del repo.** Contenido desde `src/constants/`, átomos desde `src/ui/atoms/`,
  patrones de sección existentes. No reinventar lo que ya existe.
- **Imágenes placeholder** para maquetar; al final se declaran sobre constantes en **R2**.
- **Estructura = strips + atomic.** Cada sección es un strip full-width (con su tema
  dark/light); el contenido interno se compone de átomos (`src/ui/atoms/`).

## Reglas de operación

- CSS prefijado `.aa-*` — nunca selectores globales (colisionan con el host).
- Pegar en widget **HTML**, no en un widget Form.
- No meter secretos: el bundle es público en jsDelivr.
- Repo debe ser público (requisito de jsDelivr `/gh/`).
- Comentarios = WHY, no WHAT. Sin emojis.
- Registrar cada cambio relevante en `CHANGELOG.md`.
