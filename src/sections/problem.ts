// El Problema — strip claro: badge + diagnóstico a la izquierda, fila de stats de prueba
// social a la derecha. Maquetación de referencia (Figma) llevada a tokens --aa-*.
// Container estándar (.aa-container) para acotar el inner al ancho de contenido del DS.

import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';

interface Stat {
  sign: string;
  figure: string;
  label: string;
}

const STATS: Stat[] = [
  { sign: '+', figure: '5k', label: 'Traders en la comunidad' },
  { sign: '+', figure: '18', label: 'Países' },
  { sign: '+', figure: '7', label: 'Años de experiencia' },
];

function renderStat(stat: Stat): HTMLElement {
  const card = document.createElement('div');
  card.className = 'aa-stat';
  card.setAttribute('data-aa-fade', '');

  const num = document.createElement('div');
  num.className = 'aa-stat__num';
  const sign = document.createElement('span');
  sign.className = 'aa-stat__sign';
  sign.textContent = stat.sign;
  const figure = document.createElement('span');
  figure.className = 'aa-stat__figure';
  figure.setAttribute('data-odometer-element', '');
  figure.setAttribute('data-odometer-start', '0');
  figure.textContent = stat.figure;
  num.append(sign, figure);

  const label = document.createElement('div');
  label.className = 'aa-stat__label';
  label.textContent = stat.label;

  card.append(num, label);
  return card;
}

export function renderProblemSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-problem';
  section.id = 'problema';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  const row = document.createElement('div');
  row.className = 'aa-problem__row';

  // Columna izquierda: badge + diagnóstico
  const lead = document.createElement('div');
  lead.className = 'aa-problem__lead';

  const badge = renderBadge({ label: 'El problema', variant: 'ink' });
  badge.setAttribute('data-aa-fade', '');

  const text = document.createElement('p');
  text.className = 'aa-p-l aa-problem__text';
  text.setAttribute('data-aa-fade', '');
  text.textContent =
    'Entras al mercado por una señal que viste en internet, operas con la emoción del momento, y cuando pierdes buscas otra señal. Y otra. Así se va una cuenta completa en semanas. El problema nunca fue la estrategia: era no tener estructura.';

  lead.append(badge, text);

  // Columna derecha: stats de prueba social
  const stats = document.createElement('div');
  stats.className = 'aa-problem__stats';
  stats.setAttribute('data-odometer-group', '');
  stats.setAttribute('data-odometer-stagger-order', 'left');
  STATS.forEach((s) => stats.appendChild(renderStat(s)));

  row.append(lead, stats);

  // Hairline de cierre (acento editorial, decorativo)
  const rule = document.createElement('div');
  rule.className = 'aa-problem__rule';
  rule.setAttribute('aria-hidden', 'true');

  section.appendChild(renderContainer({ children: [row, rule] }));
  root.appendChild(section);
}
