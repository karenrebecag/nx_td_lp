import { renderBadge } from '../ui/atoms/badge';
import { renderButton } from '../ui/atoms/button';
import { NEXUS } from '../constants/assets';
import { HERO } from '../constants/hero';
import { ICON_HONEYCOMB, ICON_DIAMONDS } from '../constants/icons';

export function renderHero(root: Element): void {
  const hero = document.createElement('section');
  hero.className = 'aa-hero';
  hero.id = 'top';
  hero.setAttribute('data-aa-section-theme', 'dark');
  hero.setAttribute('data-aa-nav-anchor', '');
  hero.setAttribute('data-aa-intro', '');

  const split = document.createElement('div');
  split.className = 'aa-hero__split';

  const panel = document.createElement('div');
  panel.className = 'aa-hero__panel';

  const inner = document.createElement('div');
  inner.className = 'aa-hero__intro-inner';

  const badge = renderBadge({ label: HERO.badge, variant: 'light' });
  badge.setAttribute('data-aa-fade', '');
  inner.appendChild(badge);

  const title = document.createElement('h1');
  title.className = 'aa-h-xl aa-hero__title';
  title.setAttribute('data-aa-fade', '');
  title.appendChild(document.createTextNode(`${HERO.title} `));
  const em = document.createElement('span');
  em.className = 'aa-hero__title-em';
  em.textContent = HERO.titleEm;
  title.appendChild(em);
  inner.appendChild(title);

  const sub = document.createElement('p');
  sub.className = 'aa-p-l aa-hero__sub';
  sub.setAttribute('data-aa-fade', '');
  sub.textContent = HERO.description;
  inner.appendChild(sub);

  const actions = document.createElement('div');
  actions.className = 'aa-hero__actions';
  actions.setAttribute('data-aa-fade', '');
  actions.appendChild(
    renderButton({
      href: HERO.ctaHref,
      label: HERO.ctaLabel,
      variant: 'primary',
    }),
  );
  inner.appendChild(actions);

  const support = document.createElement('p');
  support.className = 'aa-p-m aa-hero__support';
  support.setAttribute('data-aa-fade', '');
  support.textContent = HERO.support;
  inner.appendChild(support);

  const honeycomb = document.createElement('div');
  honeycomb.className = 'aa-hero__honeycomb';
  honeycomb.setAttribute('aria-hidden', 'true');
  honeycomb.innerHTML = ICON_HONEYCOMB;

  const diamonds = document.createElement('div');
  diamonds.className = 'aa-hero__diamonds';
  diamonds.setAttribute('aria-hidden', 'true');
  diamonds.innerHTML = ICON_DIAMONDS;

  panel.append(honeycomb, diamonds, inner);

  const media = document.createElement('div');
  media.className = 'aa-hero__media';
  const img = document.createElement('img');
  img.className = 'aa-hero__media-img';
  img.src = NEXUS.heroMedia;
  img.alt = HERO.mediaAlt;
  img.loading = 'eager';
  img.decoding = 'async';
  media.appendChild(img);

  split.append(panel, media);
  hero.appendChild(split);
  root.appendChild(hero);
}