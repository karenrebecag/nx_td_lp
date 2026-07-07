import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';
import { renderBenefitCard } from '../ui/atoms/benefit-card';
import { BENEFITS_CARDS, BENEFITS_HEADER } from '../constants/benefits';

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

  const head = document.createElement('div');
  head.className = 'aa-benefits__head';

  const badge = renderBadge({ label: BENEFITS_HEADER.badge, variant: 'ink' });
  badge.setAttribute('data-aa-fade', '');
  head.appendChild(badge);

  const title = document.createElement('h2');
  title.className = 'aa-h-xl aa-benefits__title';
  title.setAttribute('data-aa-fade', '');
  title.appendChild(document.createTextNode(`${BENEFITS_HEADER.title} `));
  const em = document.createElement('span');
  em.className = 'aa-benefits__title-em';
  em.textContent = BENEFITS_HEADER.titleEm;
  title.appendChild(em);
  head.appendChild(title);

  const intro = document.createElement('p');
  intro.className = 'aa-p-l';
  intro.setAttribute('data-aa-fade', '');
  intro.textContent = BENEFITS_HEADER.description;
  head.appendChild(intro);

  const slider = document.createElement('div');
  slider.className = 'aa-benefits__slider';
  slider.setAttribute('data-gsap-slider-init', '');
  slider.setAttribute('aria-roledescription', 'carousel');
  slider.setAttribute('aria-label', 'Beneficios del grupo gratuito');

  const viewport = document.createElement('div');
  viewport.className = 'aa-benefits__viewport';
  viewport.setAttribute('data-gsap-slider-collection', '');

  const trackEl = document.createElement('div');
  trackEl.className = 'aa-benefits__track';
  trackEl.setAttribute('data-gsap-slider-list', '');

  BENEFITS_CARDS.forEach((data, i) => {
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