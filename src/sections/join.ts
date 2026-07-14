// Final CTA — strip dark centrado (#join). Referencia Relume CTA 25, sin formulario.

import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';
import { renderButton } from '../ui/atoms/button';
import { TELEGRAM_URL } from '../constants/assets';
import { JOIN_SECTION } from '../constants/join';

export function renderJoinSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-join';
  section.id = 'join';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const badge = renderBadge({ label: JOIN_SECTION.badge, variant: 'light' });
  badge.setAttribute('data-aa-fade', '');

  const title = document.createElement('h2');
  title.className = 'aa-h-xl aa-join__title';
  title.setAttribute('data-aa-fade', '');
  title.appendChild(document.createTextNode(`${JOIN_SECTION.title} `));
  const titleEm = document.createElement('span');
  titleEm.className = 'aa-join__title-em';
  titleEm.textContent = JOIN_SECTION.titleEm;
  title.appendChild(titleEm);

  const copy = document.createElement('p');
  copy.className = 'aa-p-l aa-join__copy';
  copy.setAttribute('data-aa-fade', '');
  copy.textContent = JOIN_SECTION.description;

  const actions = document.createElement('div');
  actions.className = 'aa-join__actions';
  actions.setAttribute('data-aa-fade', '');
  actions.appendChild(
    renderButton({
      href: TELEGRAM_URL,
      label: JOIN_SECTION.buttonLabel,
      variant: 'primary',
      className: 'cta-telegram',
    }),
  );

  const note = document.createElement('p');
  note.className = 'aa-p-m aa-join__note';
  note.setAttribute('data-aa-fade', '');
  note.textContent = JOIN_SECTION.note;

  section.appendChild(
    renderContainer({
      className: 'aa-stack-center aa-join__inner',
      children: [badge, title, copy, actions, note],
    }),
  );
  root.appendChild(section);
}
