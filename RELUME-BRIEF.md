# Relume Brief — Tradeco Capital / Norman LP

Directrices de **marca, primitivos y copy** para construir la LP en Relume.
**El layout lo decide Relume** (ese es el valor de su producto). Aquí no se prescribe
maquetación: se entregan tokens declarativos, capas semánticas superficiales y copys.
Relume tiene libertad creativa sobre estas directrices.

Flujo: Sitemap → Wireframe → Style Guide → Design → Export a Figma → aprobación cliente.

---

## 0. Lo no negociable

- **Una sola landing page.** Sin páginas extra (borra About/Pricing si Relume las inventa).
- **Sin formulario.** Ningún input, ningún email-capture. La conversión ocurre en Telegram.
- **CTA único, repetido:** "Unirme gratis" → `https://t.me/TradecoCapital_Free`
  (target `_blank`, `rel="noopener"`). Puede aparecer en navbar, hero, mid y footer, pero
  siempre el mismo destino y la misma promesa.
- **Mobile-first** (el tráfico viene de ads).
- **Tono:** autoridad honesta, sin hype. Nada de "hazte rico", "señales ganadoras",
  promesas de rentabilidad ni emojis. Enseñar > prometer.

---

## 1. Sitemap — prompt para Relume (Site Builder)

Paste this block as-is into the Site Builder description field. Structured by the fields
Relume expects: what it is, who it's for, goal, tone, pages and sections.

> **Company name:** Tradeco Capital
>
> **Industry:** Trading / financial education (Forex)
>
> **What it is:** A free trading community led by the trader Norman. People learn to trade
> Forex with a real method — technical analysis, risk management and discipline — through a
> free Telegram channel where Norman shares daily market analysis and live sessions.
>
> **Target audience:** People in Latin America who want to learn to trade Forex, at any
> level. From complete beginners starting from scratch to traders who keep losing because
> they improvise and chase random signals.
>
> **Primary goal:** A single landing page whose only objective is to get the visitor to join
> the free Telegram channel. **There is no form.** One single, repeated CTA: "Join free",
> opening `https://t.me/TradecoCapital_Free`. The conversion happens inside Telegram.
>
> **Tone & style:** Professional, honest, authority without hype. No profit promises, no
> "get rich" claims, no emojis. Dark, editorial, premium aesthetic. Teach before you promise.
>
> **Pages:** 1 (single landing page — do not generate additional pages).
>
> **Sections (layout is up to your creative judgment):**
> 1. Navbar with "Tradeco Capital" logo and a "Join free" button
> 2. Hero: value proposition + Telegram CTA + trust signals (5,000+ traders · 18+ countries · 7+ years)
> 3. Problem: why most traders lose (it's not the strategy, it's the lack of process)
> 4. Community benefits (6)
> 5. How it works in 3 steps
> 6. Member testimonials
> 7. About Norman (photo + story, 7+ years of experience)
> 8. Final CTA to Telegram
> 9. Footer with risk disclaimer

> **Note:** Generate the draft copy in English. The final Spanish copy lives in Section 5 of
> this brief — swap it in after generating the wireframe/design.

---

## 2. Style Guide — primitivos (declarativos)

Pega estos valores tal cual en el Style Guide de Relume. Son la fuente de verdad; en el
repo viven como tokens `--aa-*` (no inventar valores nuevos).

### Color — primitivos

```
Ink (superficie dark, de page a overlay)
  ink-850  #11151C   ← fondo base (page)
  ink-800  #161B24   ← surface (cards, strips)
  ink-700  #1B212B   ← elevated (card sobre surface)
  ink-600  #222A35   ← overlay (navbar blur, popovers)
  ink-900  #0C0F15   ← negativo / sombra

Cream (tinta)
  cream    #F3EFE6

Gold — HIGHLIGHT (único color de acción)
  gold-500 #C99B4A   ← base (CTA, links, números, eyebrow)
  gold-400 #D6AA5B   ← hover
  gold-weak rgba(201,155,74,.14)  ← chips, glow, borde activo

Teal — SUPPORT (señales, no acción)
  teal-500 #4FA89B   ← live dot, vela alcista, check de éxito

Error  #F84131  (funcional, fuera de marca)
```

### Tipografía — primitivos

```
Display (headings)  Fraunces        500 / 600 / 700   serif editorial
Body / UI           Inter           400 / 500 / 600 / 700
Labels / eyebrow    IBM Plex Mono   400 / 500 / 600   uppercase, tracking +0.12em
```

Escala: fluida (clamp), mobile-first. En Relume usa su escala tipográfica por defecto;
en el repo la rige `typography.css` (no requiere réplica exacta de tamaños).

---

## 3. Style Guide — semánticos (superficiales)

Mapea roles, no pixeles. Relume decide cómo y dónde aplicarlos.

| Rol | Valor | Uso |
|---|---|---|
| `bg` | ink-850 | fondo de página |
| `surface` | ink-800 | tarjetas, strips alternos |
| `elevated` | ink-700 | tarjeta sobre surface, hovers |
| `fg` | cream | texto principal |
| `fg-muted` | cream @ 62% | texto secundario, párrafos |
| `fg-subtle` | cream @ 40% | captions, metadatos |
| `border` | cream @ 8% | hairlines; @ 14% para bordes marcados |
| `highlight` | gold-500 | **CTA, links, números clave, eyebrow** |
| `highlight-hover` | gold-400 | hover del CTA |
| `support` | teal-500 | dot "en vivo", vela alcista, check |

**Regla de oro de jerarquía:** gold solo para acción/énfasis; teal solo para señales
vivas. Nunca dos acentos compitiendo en el mismo bloque. CTA siempre gold sobre ink, texto
del botón ink-850 (`on-highlight`).

**Contraste:** cualquier texto sobre dark = cream o gold (nunca teal como texto largo,
contraste insuficiente). Verificar AA (≥4.5:1).

---

## 4. Patrones de marca (descritos, no maquetados)

Relume puede interpretarlos libremente:

- **Eyebrow mono** — etiqueta corta en IBM Plex Mono, uppercase, gold, sobre cada header.
- **Botón highlight** — gold sólido, texto ink, radio 4px (crisp), hover sube a gold-400.
- **Motivo de velas** — campo sutil de velas japonesas (gold/teal) como acento visual,
  decorativo, nunca como "señal de entrada".
- **Live dot** — punto teal pulsante junto a "análisis en vivo".
- **Stat inline** — números en cream/gold con separador gold "·" (ej. +5.000 · +18 · +7).
- **Card surface** — superficie ink-800/700 con border hairline; elevación por token, no
  por sombra dura.

---

## 5. Copys (declarativos)

Voz de Norman: directa, honesta, de proceso. Español LATAM neutro.

### Navbar
- Marca: **Tradeco Capital**
- CTA: **Unirme gratis**

### Hero
- Eyebrow: **COMUNIDAD GRATUITA · TELEGRAM**
- Headline — opciones:
  - **A (recomendada):** "Deja de perseguir señales. Aprende a leer el mercado."
    — ataca el dolor real (improvisar) y promete una habilidad, no una ganancia.
  - **B:** "El método que usan los traders profesionales, explicado todos los días."
    — autoridad + consistencia.
  - **C:** "Aprende a operar Forex con proceso, no con suerte."
    — eco directo de la voz de Norman.
- Subheadline: "Únete gratis a la comunidad de Norman en Telegram: análisis real, gestión
  de riesgo y el proceso para operar con criterio. Sin importar tu nivel, empezamos desde
  la base."
- CTA: **Unirme gratis al canal** → Telegram
- Microcopy bajo el CTA: "100% gratis. Sin tarjeta. Solo Telegram."
- Señales de confianza: **+5.000 traders · +18 países · +7 años de experiencia**

### Problema
- Header: "La mayoría no pierde por la estrategia. Pierde por no tener un proceso."
- Body: "Entras al mercado por una señal que viste en internet, operas con la emoción del
  momento, y cuando pierdes buscas otra señal. Y otra. Así se va una cuenta completa en
  semanas. El problema nunca fue la estrategia: era no tener estructura."

### Beneficios (6)
1. **Análisis en tiempo real** — "Lecturas del mercado actualizadas, directo del análisis diario de Norman."
2. **Comunidad activa** — "Traders de toda Latinoamérica compartiendo ideas y experiencias reales."
3. **Metodología institucional** — "El mismo enfoque de los traders profesionales, traído al día a día."
4. **Gestión de riesgo** — "El pilar del método: proteger el capital antes de buscar ganancias."
5. **Sesiones en vivo** — "Norman analiza el mercado en tiempo real, contigo."
6. **Soporte directo** — "Resuelve tus dudas dentro del grupo, paso a paso."

### Cómo funciona (3 pasos)
1. **Únete al canal gratuito de Telegram.**
2. **Recibe análisis, contenido y sesiones en vivo.**
3. **Aplica lo aprendido operando con ATFX, el bróker aliado de la comunidad.**

### Testimonios
- "Antes operaba sin un plan claro. Ahora entiendo el proceso y eso cambió cómo tomo decisiones." — María G., México
- "Aprendí a gestionar el riesgo antes de pensar en las ganancias. Eso lo cambió todo." — Carlos R., Colombia
- "Las sesiones en vivo me ayudan a entender el mercado en tiempo real, no solo en teoría." — Andrea P., Perú
- "Por fin una comunidad que enseña proceso y disciplina, sin promesas vacías." — Diego M., Argentina
- "El acompañamiento dentro del grupo hace la diferencia cuando empiezas desde cero." — Lucía F., Chile

### Sobre Norman
- Eyebrow: **SOBRE NORMAN**
- Header: "+7 años operando los mismos mercados que vas a aprender a leer."
- Body: "Hace años perdí casi toda mi cuenta en una sola semana. No fue mala suerte: fue no
  tener un proceso, ni gestión de riesgo, ni la disciplina para parar a tiempo. Tuve que
  reconstruir todo desde cero. Hoy comparto exactamente ese proceso, gratis, todos los
  días, en mi canal de Telegram. No para que repitas mis errores, sino para que los evites."
- Foto: retrato real de Norman (assets provistos).

### CTA final
- Header: "Empieza a construir un proceso real. Hoy."
- Subheadline: "El canal es gratis y está abierto. Te espero del otro lado."
- CTA: **Unirme gratis al canal** → Telegram

### Footer
- Disclaimer (compliance, obligatorio): "Operar con productos apalancados conlleva un alto
  riesgo y puede no ser adecuado para todos los inversionistas. Existe la posibilidad de
  perder la totalidad del capital invertido. El contenido de esta página es educativo y no
  constituye asesoría de inversión."
- Marca: Tradeco Capital · enlace a Telegram.

### Meta (SEO)
- Title: "Tradeco Capital — Comunidad de trading de Norman | Telegram gratis"
- Description: "Únete gratis a la comunidad de Norman: análisis de mercado, gestión de
  riesgo y el proceso para operar Forex con criterio. Sin importar tu nivel."

