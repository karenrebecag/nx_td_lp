// 10 · Footer oficial de ATFX — logo + columnas (Legal / Sobre Nosotros / Redes) +
// disclaimer legal. Trasladado del footer de marca de ATFX. Strip dark.

import { renderContainer } from '../ui/layout';
import { renderBadge } from '../ui/atoms/badge';
import { renderButton } from '../ui/atoms/button';
import { FOOTER_LEGAL, TRADECO_SOCIALS } from '../constants/footer';
import { TELEGRAM_URL } from '../constants/assets';
import { TESTIMONIALS } from '../constants/testimonials';
import { ICON_HONEYCOMB, TRADECO_LOGO, ICON_CHEVRON } from '../constants/icons';

// Bloque "La comunidad habla": badge + heading + slider de testimonios (line-reveal,
// init en ui/testimonials.ts) + contador/controles.
function renderCommunity(): HTMLElement {
  const block = document.createElement('div');
  block.className = 'aa-footer__community';

  const badge = renderBadge({ label: 'La comunidad habla', variant: 'light' });
  badge.setAttribute('data-aa-fade', '');

  const title = document.createElement('h2');
  title.className = 'aa-h-xl aa-footer__community-title';
  const em = document.createElement('span');
  em.className = 'aa-footer__community-title-em';
  em.textContent = 'Cambios reales';
  title.append(em, document.createTextNode(' en el proceso'));

  // Slider (OSMO line-reveal)
  const wrap = document.createElement('div');
  wrap.className = 'aa-tm';
  wrap.setAttribute('data-testimonial-wrap', '');
  wrap.setAttribute('data-autoplay', 'true');
  wrap.setAttribute('data-autoplay-duration', '5000');

  const card = document.createElement('div');
  card.className = 'aa-tm__card';

  const listEl = document.createElement('div');
  listEl.className = 'aa-tm__list';
  listEl.setAttribute('role', 'list');
  listEl.setAttribute('data-testimonial-list', '');

  TESTIMONIALS.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = i === 0 ? 'aa-tm__item is--active' : 'aa-tm__item';
    item.setAttribute('role', 'listitem');
    item.setAttribute('data-testimonial-item', '');
    item.setAttribute('aria-hidden', String(i !== 0));

    const quote = document.createElement('p');
    quote.className = 'aa-tm__quote';
    quote.setAttribute('data-testimonial-text', '');
    quote.textContent = t.quote;

    const author = document.createElement('div');
    author.className = 'aa-tm__author';
    const name = document.createElement('p');
    name.className = 'aa-tm__name';
    name.setAttribute('data-testimonial-split', '');
    name.textContent = t.name;
    const loc = document.createElement('p');
    loc.className = 'aa-tm__loc';
    loc.setAttribute('data-testimonial-split', '');
    loc.textContent = t.location;
    author.append(name, loc);

    item.append(quote, author);
    listEl.appendChild(item);
  });

  card.appendChild(listEl);

  // Contador + controles
  const nav = document.createElement('div');
  nav.className = 'aa-tm__nav';

  const counter = document.createElement('p');
  counter.className = 'aa-tm__counter';
  counter.innerHTML =
    '<span data-current>1</span><span class="aa-tm__counter-sep"> / </span><span data-total>5</span>';

  const controls = document.createElement('div');
  controls.className = 'aa-tm__controls';
  (['prev', 'next'] as const).forEach((dir) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `aa-tm__btn aa-tm__btn--${dir}`;
    btn.setAttribute(`data-${dir}`, '');
    btn.setAttribute('aria-label', dir === 'prev' ? 'Reseña anterior' : 'Reseña siguiente');
    btn.innerHTML = ICON_CHEVRON;
    controls.appendChild(btn);
  });

  nav.append(counter, controls);
  wrap.append(card, nav);

  block.append(badge, title, wrap);
  return block;
}

// CTA final: card oscura con heading + copy + botón a Telegram.
function renderFinalCta(): HTMLElement {
  const cta = document.createElement('div');
  cta.className = 'aa-footer__cta';

  const title = document.createElement('h2');
  title.className = 'aa-h-xl aa-footer__cta-title';
  title.append(document.createTextNode('El grupo gratuito está abierto,'), document.createElement('br'));
  const em = document.createElement('span');
  em.className = 'aa-footer__cta-title-em';
  em.textContent = 'por ahora.';
  title.appendChild(em);

  const copy = document.createElement('p');
  copy.className = 'aa-p-l aa-footer__cta-copy';
  copy.textContent =
    'Los cupos del grupo gratuito se ajustan según la capacidad de soporte del equipo. Únete hoy y empieza a aprender el método.';

  const button = renderButton({
    href: TELEGRAM_URL,
    label: 'Unirme gratis al canal',
    variant: 'primary',
    target: '_blank',
  });

  cta.append(title, copy, button);
  return cta;
}

export function renderFooterSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-footer';
  section.id = 'footer';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  // Honeycomb decorativo top-right, detrás del contenido (mismo patrón que el hero).
  const honeycomb = document.createElement('div');
  honeycomb.className = 'aa-footer__honeycomb';
  honeycomb.setAttribute('aria-hidden', 'true');
  honeycomb.innerHTML = ICON_HONEYCOMB;

  // Logo Tradeco (footer dark → versión white inlineada).
  const top = document.createElement('div');
  top.className = 'aa-footer__top';

  const logo = document.createElement('div');
  logo.className = 'aa-footer__logo aa-footer__logo--tradeco';
  logo.setAttribute('aria-label', 'Tradeco Capital');
  logo.innerHTML = TRADECO_LOGO;

  // Redes de Tradeco
  const socials = document.createElement('div');
  socials.className = 'aa-footer__socials';
  TRADECO_SOCIALS.forEach((s) => {
    const link = document.createElement('a');
    link.className = 'aa-footer__social';
    link.href = s.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', s.label);
    link.innerHTML = `<svg viewBox="0 0 24 24" fill="${s.fill ? 'currentColor' : 'none'}" stroke="${s.fill ? 'none' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">${s.icon}</svg>`;
    socials.appendChild(link);
  });

  top.append(logo, socials);

  // Disclaimer legal
  const legal = document.createElement('div');
  legal.className = 'aa-footer__legal';
  const legalText = document.createElement('p');
  legalText.textContent = FOOTER_LEGAL;
  legal.appendChild(legalText);

  const inner = document.createElement('div');
  inner.className = 'aa-footer__inner';
  inner.append(renderCommunity(), renderFinalCta(), top, legal);

  section.append(honeycomb, renderContainer({ children: [inner] }));
  root.appendChild(section);
}
