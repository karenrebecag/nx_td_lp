# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.1.0/).
Versionado: el CI de release etiqueta `vX.Y.Z` por push a `main` (cuando se conecte el repo).

## [Unreleased]

### Added
- Bootstrap: duplicado de `ATFX_PeruLP` como base (stack vanilla TS + esbuild + GSAP,
  Mount Point Pattern). Git desconectado.
- `RELUME-BRIEF.md`: directrices de marca para Relume (primitivos, semánticos, prompts
  de sitemap, patrones, copys declarativos).
- Strip **Ecosistema Nexus** (`#ecosistema`): header + 2 cards Live/Copy Trading con
  listas de beneficios (referencia Relume Layout 360 + Pricing 10).
- Strip **Final CTA** (`#join`): sección independiente con CTA a Telegram (referencia
  Relume CTA 25). Navbar apunta a `#join`.

### Changed
- Rebrand a **Tradeco/Norman** desde la marca dictada por el HTML de la agencia:
  - Tokens (`tokens.css`): primitivos `--aa-ink-*` (layering dark), `--aa-cream`,
    cluster highlight (gold) y support (teal). Semánticos dark-first.
  - `section-theme.css`: sets dark (ink) y light ("papel" cream).
  - `fonts.css`: Fraunces / Inter / IBM Plex Mono vía Google Fonts.
  - Default theme del mount → `dark`.
  - Refs de identidad (`package.json`, `loader.js`, `index.ts`, `preview.html`, `CLAUDE.md`)
    de `TC_NLP` → `TC_NLP`.
- Footer: CTA final movido a strip `#join`; el footer queda testimonios + logo + legal.
- Navbar CTA: ancla `#join` con label "Unirme gratis".

### Pending
- Tracking Meta Pixel + Conversion API: archivo de la agencia no recibido; cablear con
  placeholders en la fase de integración.
- Mapear el diseño aprobado de Relume sobre los `--aa-*` (secciones en `src/sections/`).
