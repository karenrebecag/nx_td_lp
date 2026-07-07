// Ecosistema Nexus — strip dark: header centrado + 2 cards (Layout 360 + bullets Pricing 10).
// Maquetación de referencia Relume llevada a tokens --aa-*.

import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';
import { ECOSYSTEM_HEADER, ECOSYSTEM_OFFERINGS, type EcosystemOffering } from '../constants/ecosystem';
import { ICON_CHECK } from '../constants/icons';

function renderFeatureList(features: string[]): HTMLUListElement {
  const list = document.createElement('ul');
  list.className = 'aa-eco__features';

  features.forEach((text) => {
    const item = document.createElement('li');
    item.className = 'aa-eco__feature';

    const icon = document.createElement('span');
    icon.className = 'aa-eco__check';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = ICON_CHECK;

    const copy = document.createElement('span');
    copy.className = 'aa-eco__feature-text';
    copy.textContent = text;

    item.append(icon, copy);
    list.appendChild(item);
  });

  return list;
}

function renderOfferingCard(offering: EcosystemOffering): HTMLElement {
  const card = document.createElement('article');
  card.className = 'aa-eco__card';
  card.setAttribute('data-aa-fade', '');

  const body = document.createElement('div');
  body.className = 'aa-eco__card-body';

  const tagline = document.createElement('p');
  tagline.className = 'aa-eco__tagline';
  tagline.textContent = offering.tagline;

  const title = document.createElement('h3');
  title.className = 'aa-h-l aa-eco__title';
  title.appendChild(document.createTextNode(`${offering.title} `));
  if (offering.titleEm) {
    const em = document.createElement('span');
    em.className = 'aa-eco__title-em';
    em.textContent = offering.titleEm;
    title.appendChild(em);
  }

  const desc = document.createElement('p');
  desc.className = 'aa-p-m aa-eco__desc';
  desc.textContent = offering.description;

  body.append(tagline, title, desc, renderFeatureList(offering.features));

  const media = document.createElement('div');
  media.className = 'aa-eco__media';
  const img = document.createElement('img');
  img.className = 'aa-eco__media-img';
  img.src = offering.imageSrc;
  img.alt = offering.imageAlt;
  img.loading = 'lazy';
  img.decoding = 'async';
  media.appendChild(img);

  card.append(body, media);
  return card;
}

export function renderEcosystemSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-eco';
  section.id = 'ecosistema';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const head = document.createElement('div');
  head.className = 'aa-eco__head aa-stack-center';

  const badge = renderBadge({ label: ECOSYSTEM_HEADER.badge, variant: 'light' });
  badge.setAttribute('data-aa-fade', '');

  const title = document.createElement('h2');
  title.className = 'aa-h-xl aa-eco__head-title';
  title.setAttribute('data-aa-fade', '');
  title.appendChild(document.createTextNode(`${ECOSYSTEM_HEADER.title} `));
  const titleEm = document.createElement('span');
  titleEm.className = 'aa-eco__head-title-em';
  titleEm.textContent = ECOSYSTEM_HEADER.titleEm;
  title.appendChild(titleEm);

  const intro = document.createElement('p');
  intro.className = 'aa-p-l aa-eco__head-desc';
  intro.setAttribute('data-aa-fade', '');
  intro.textContent = ECOSYSTEM_HEADER.description;

  head.append(badge, title, intro);

  const grid = document.createElement('div');
  grid.className = 'aa-eco__grid';
  ECOSYSTEM_OFFERINGS.forEach((offering) => grid.appendChild(renderOfferingCard(offering)));

  section.appendChild(renderContainer({ children: [head, grid] }));
  root.appendChild(section);
}
