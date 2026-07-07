import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';
import { ABOUT } from '../constants/about';

export function renderAboutSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-about';
  section.id = 'sobre-nexus';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  const card = document.createElement('div');
  card.className = 'aa-about__card';

  const row = document.createElement('div');
  row.className = 'aa-about__row';

  const textCol = document.createElement('div');
  textCol.className = 'aa-about__text';

  const badge = renderBadge({ label: ABOUT.badge, variant: 'ink' });
  badge.setAttribute('data-aa-fade', '');

  const title = document.createElement('h2');
  title.className = 'aa-h-xl aa-about__title';
  title.setAttribute('data-aa-fade', '');
  title.appendChild(document.createTextNode(`${ABOUT.title} `));
  const em = document.createElement('span');
  em.className = 'aa-about__title-em';
  em.textContent = ABOUT.titleEm;
  title.appendChild(em);

  ABOUT.paragraphs.forEach((paragraph) => {
    const bio = document.createElement('p');
    bio.className = 'aa-p-l aa-about__bio';
    bio.setAttribute('data-aa-fade', '');
    bio.textContent = paragraph;
    textCol.appendChild(bio);
  });

  textCol.prepend(badge, title);

  row.appendChild(textCol);
  card.appendChild(row);

  section.appendChild(renderContainer({ children: [card] }));
  root.appendChild(section);
}