// Sobre Norman — strip claro: panel flotante (sombra suave) con texto a la izquierda
// (badge + heading + bio) y retrato a la derecha. Maquetación de referencia (Figma)
// llevada a tokens --aa-*. La imagen es placeholder hasta declarar la constante en R2.

import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';
import { TRADECO } from '../constants/assets';

export function renderAboutSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-about';
  section.id = 'sobre-norman';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  // Panel flotante (mismo color que el strip + sombra suave + radio)
  const card = document.createElement('div');
  card.className = 'aa-about__card';

  const row = document.createElement('div');
  row.className = 'aa-about__row';

  // Columna de texto
  const textCol = document.createElement('div');
  textCol.className = 'aa-about__text';

  const badge = renderBadge({ label: 'Sobre Norman', variant: 'ink' });
  badge.setAttribute('data-aa-fade', '');

  const title = document.createElement('h2');
  title.className = 'aa-h-xl aa-about__title';
  title.setAttribute('data-aa-fade', '');
  title.appendChild(document.createTextNode('Fundador de '));
  const em = document.createElement('span');
  em.className = 'aa-about__title-em';
  em.textContent = 'Tradeco Capital';
  title.appendChild(em);

  const bio = document.createElement('p');
  bio.className = 'aa-p-l aa-about__bio';
  bio.setAttribute('data-aa-fade', '');
  bio.textContent =
    'Norman es trader y fundador de Tradeco Capital, una comunidad dedicada a enseñar Forex con un enfoque en proceso, disciplina y gestión de riesgo, no en promesas de resultados garantizados. A través de su experiencia, ayuda a cientos de personas en Latinoamérica a dar sus primeros pasos en el trading de forma estructurada.';

  textCol.append(badge, title, bio);

  // Retrato (placeholder)
  const portrait = document.createElement('img');
  portrait.className = 'aa-about__media';
  portrait.src = TRADECO.norman1;
  portrait.alt = 'Norman, fundador de Tradeco Capital';
  portrait.loading = 'lazy';
  portrait.decoding = 'async';
  portrait.setAttribute('data-aa-fade', '');

  row.append(textCol, portrait);
  card.appendChild(row);

  section.appendChild(renderContainer({ children: [card] }));
  root.appendChild(section);
}
