import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';
import { PROBLEM, type ProblemStat } from '../constants/problem';

function renderStat(stat: ProblemStat): HTMLElement {
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

  const lead = document.createElement('div');
  lead.className = 'aa-problem__lead';

  const badge = renderBadge({ label: PROBLEM.badge, variant: 'ink' });
  badge.setAttribute('data-aa-fade', '');

  const text = document.createElement('p');
  text.className = 'aa-p-l aa-problem__text';
  text.setAttribute('data-aa-fade', '');
  text.textContent = PROBLEM.text;

  lead.append(badge, text);

  const stats = document.createElement('div');
  stats.className = 'aa-problem__stats';
  stats.setAttribute('data-odometer-group', '');
  stats.setAttribute('data-odometer-stagger-order', 'left');
  PROBLEM.stats.forEach((s) => stats.appendChild(renderStat(s)));

  row.append(lead, stats);

  const rule = document.createElement('div');
  rule.className = 'aa-problem__rule';
  rule.setAttribute('aria-hidden', 'true');

  section.appendChild(renderContainer({ children: [row, rule] }));
  root.appendChild(section);
}