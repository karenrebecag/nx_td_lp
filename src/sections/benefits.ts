// Lo que encontrarás — strip claro: header (badge + heading) + slider GSAP de cards de
// beneficio. Slides-per-view dirigidas por CSS (3 / 2.25 / 1.15). Mecánica del slider en
// ui/gsap-slider.ts. Maquetación de referencia (Figma) llevada a tokens --aa-*.

import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';
import { renderBenefitCard, type BenefitCardData } from '../ui/atoms/benefit-card';

const CARDS: BenefitCardData[] = [
  {
    variant: 'light',
    shadow: 'teal',
    title: 'Análisis en tiempo real',
    desc: 'Lecturas del mercado actualizadas, directo del análisis diario de Norman.',
  },
  {
    variant: 'dark',
    shadow: 'warm',
    title: 'Comunidad activa',
    desc: 'Traders de toda Latinoamérica compartiendo ideas y experiencias reales.',
  },
  {
    variant: 'light',
    shadow: 'teal',
    title: 'Metodología institucional',
    desc: 'El mismo enfoque de los traders profesionales, traído al día a día.',
  },
  {
    variant: 'dark',
    shadow: 'cool',
    title: 'Sesiones en vivo',
    desc: 'Norman analiza el mercado en tiempo real, contigo.',
  },
  {
    variant: 'light',
    shadow: 'teal',
    title: 'Soporte directo',
    desc: 'Resuelve tus dudas dentro del grupo, paso a paso.',
  },
];

function renderControl(dir: 'prev' | 'next'): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'aa-benefits__control';
  btn.setAttribute('data-gsap-slider-control', dir);
  btn.setAttribute('aria-label', dir === 'prev' ? 'Anterior' : 'Siguiente');
  btn.textContent = dir === 'prev' ? '←' : '→';
  return btn;
}

export function renderBenefitsSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-benefits';
  section.id = 'beneficios';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  // ── Header: badge + heading ─────────────────────────────────────────────────
  const head = document.createElement('div');
  head.className = 'aa-benefits__head';

  const badge = renderBadge({ label: 'Lo que encontrarás', variant: 'ink' });
  badge.setAttribute('data-aa-fade', '');
  head.appendChild(badge);

  const title = document.createElement('h2');
  title.className = 'aa-h-xl aa-benefits__title';
  title.setAttribute('data-aa-fade', '');
  title.appendChild(document.createTextNode('Una comunidad que enseña proceso, '));
  const em = document.createElement('span');
  em.className = 'aa-benefits__title-em';
  em.textContent = 'no atajos';
  title.appendChild(em);
  head.appendChild(title);

  // ── Slider (OSMO): collection (viewport) → list (track) → items ──────────────
  const slider = document.createElement('div');
  slider.className = 'aa-benefits__slider';
  slider.setAttribute('data-gsap-slider-init', '');
  slider.setAttribute('aria-roledescription', 'carousel');
  slider.setAttribute('aria-label', 'Beneficios');

  const viewport = document.createElement('div');
  viewport.className = 'aa-benefits__viewport';
  viewport.setAttribute('data-gsap-slider-collection', '');

  const trackEl = document.createElement('div');
  trackEl.className = 'aa-benefits__track';
  trackEl.setAttribute('data-gsap-slider-list', '');

  CARDS.forEach((data, i) => {
    const slide = document.createElement('div');
    slide.className = 'aa-benefits__slide';
    slide.setAttribute('data-gsap-slider-item', '');
    slide.appendChild(renderBenefitCard(data, i));
    trackEl.appendChild(slide);
  });

  viewport.appendChild(trackEl);

  const controls = document.createElement('div');
  controls.className = 'aa-benefits__controls';
  controls.setAttribute('data-gsap-slider-controls', '');
  controls.append(renderControl('prev'), renderControl('next'));

  slider.append(viewport, controls);

  section.append(renderContainer({ children: [head] }), slider);
  root.appendChild(section);
}
