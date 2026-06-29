// Step card — paso de "Cómo funciona": fila siempre visible (icono + número + título) y
// un reveal en hover que suma una descripción. En mobile/touch el reveal queda abierto.
// Estilo en steps.css.

export interface StepData {
  n: string;
  title: string;
  desc: string;
}

export function renderStepCard(data: StepData): HTMLElement {
  const { n, title, desc } = data;

  const card = document.createElement('article');
  card.className = 'aa-step';
  card.setAttribute('data-aa-fade', '');

  const row = document.createElement('div');
  row.className = 'aa-step__row';

  const num = document.createElement('span');
  num.className = 'aa-step__n';
  num.textContent = n;

  const titleEl = document.createElement('p');
  titleEl.className = 'aa-step__title';
  titleEl.textContent = title;

  row.append(num, titleEl);

  // Reveal: grid 0fr→1fr en hover (steps.css). Inner con la descripción.
  const reveal = document.createElement('div');
  reveal.className = 'aa-step__reveal';

  const inner = document.createElement('div');
  inner.className = 'aa-step__reveal-inner';

  const descEl = document.createElement('p');
  descEl.className = 'aa-step__desc';
  descEl.textContent = desc;

  inner.appendChild(descEl);
  reveal.appendChild(inner);

  card.append(row, reveal);
  return card;
}
