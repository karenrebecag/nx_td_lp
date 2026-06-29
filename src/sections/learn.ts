// Cómo funciona — strip claro: header (badge + heading) + tres pasos en cards. Cada paso
// revela en hover una descripción + imagen (placeholder). Maquetación de referencia
// (Figma) llevada a tokens --aa-*. Átomo step-card.

import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';
import { renderStepCard, type StepData } from '../ui/atoms/step-card';
import { ASSETS } from '../constants/assets';

const STEPS: StepData[] = [
  {
    n: '1',
    title: 'Únete al canal gratuito de Telegram.',
    desc: 'Sin formularios ni pagos: un solo clic y ya estás dentro de la comunidad.',
  },
  {
    n: '2',
    title: 'Recibe análisis, contenido y sesiones en vivo.',
    desc: 'Aprende a leer el mercado y a tomar decisiones con criterio.',
  },
  {
    n: '3',
    title: 'Aplica lo aprendido operando con ATFX, el bróker aliado de la comunidad.',
    desc: 'Pon en práctica el método en un entorno regulado, con condiciones pensadas para la comunidad.',
  },
];

export function renderLearnSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-steps';
  section.id = 'como-funciona';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  // ── Header: badge + heading (énfasis bold en "Tres", resto ligero) ──────────
  const head = document.createElement('div');
  head.className = 'aa-steps__head';

  const badge = renderBadge({ label: 'Cómo funciona', variant: 'ink' });
  badge.setAttribute('data-aa-fade', '');
  head.appendChild(badge);

  const title = document.createElement('h2');
  title.className = 'aa-h-xl aa-steps__title';
  title.setAttribute('data-aa-fade', '');
  const em = document.createElement('span');
  em.className = 'aa-steps__title-em';
  em.textContent = 'Tres ';
  title.appendChild(em);
  title.appendChild(document.createTextNode('pasos para empezar'));
  head.appendChild(title);

  // ── Banner (placeholder; se pierde en mobile) ───────────────────────────────
  const banner = document.createElement('img');
  banner.className = 'aa-steps__banner';
  banner.src = ASSETS.stepsBanner;
  banner.alt = 'Cómo funciona la comunidad Tradeco';
  banner.loading = 'lazy';
  banner.decoding = 'async';
  banner.setAttribute('data-aa-fade', '');

  // ── Lista de pasos (fila de 3 en desktop) ───────────────────────────────────
  const list = document.createElement('div');
  list.className = 'aa-steps__list';
  STEPS.forEach((step) => list.appendChild(renderStepCard(step)));

  // Hairline de cierre (acento editorial, decorativo)
  const rule = document.createElement('div');
  rule.className = 'aa-steps__rule';
  rule.setAttribute('aria-hidden', 'true');

  section.appendChild(renderContainer({ children: [head, banner, list, rule] }));
  root.appendChild(section);
}
