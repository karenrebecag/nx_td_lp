// Hero — split 2 columnas (maquetación de referencia Figma llevada a tokens --aa-*):
// panel de texto sobre gradiente de marca (izq) + media full-bleed (der). Reconstruido
// sobre nuestros átomos (eyebrow, button) y la escala de headings del DS. CTA único a
// Telegram. La imagen es placeholder hasta declarar la constante en R2.

import { renderBadge } from '../ui/atoms/badge';
import { renderButton } from '../ui/atoms/button';
import { TELEGRAM_URL } from '../constants/assets';
import { ICON_HONEYCOMB, ICON_DIAMONDS } from '../constants/icons';

// Media del hero (gráfico de mercado sobre fondo navy) servida desde R2.
const HERO_MEDIA =
  'https://pub-62c41549a44642efbcd3f775bdb039b3.r2.dev/relaxed-trader-reviews-stock-charts-on-computers-2026-03-24-23-35-40-utc_98121d11f26b4678af11545274fc13645583aabf9c895cb67a4999cab2b26efd.webp';

export function renderHero(root: Element): void {
  const hero = document.createElement('section');
  hero.className = 'aa-hero';
  hero.id = 'top';
  hero.setAttribute('data-aa-section-theme', 'dark');
  hero.setAttribute('data-aa-nav-anchor', '');
  hero.setAttribute('data-aa-intro', ''); // los hijos del intro animan al montar

  const split = document.createElement('div');
  split.className = 'aa-hero__split';

  // ── Panel de texto (gradiente) ──────────────────────────────────────────────
  const panel = document.createElement('div');
  panel.className = 'aa-hero__panel';

  const inner = document.createElement('div');
  inner.className = 'aa-hero__intro-inner';

  const badge = renderBadge({ label: 'Comunidad gratuita · Telegram', variant: 'light' });
  badge.setAttribute('data-aa-fade', '');
  inner.appendChild(badge);

  // Título: editorial uppercase, peso base ligero con remate bold (énfasis manual →
  // reveal por fade, no split, para no romper el clip con el span anidado).
  const title = document.createElement('h1');
  title.className = 'aa-h-xl aa-hero__title';
  title.setAttribute('data-aa-fade', '');
  title.appendChild(document.createTextNode('Aprende a operar Forex con el método que usan los '));
  const em = document.createElement('span');
  em.className = 'aa-hero__title-em';
  em.textContent = 'traders profesionales';
  title.appendChild(em);
  inner.appendChild(title);

  const sub = document.createElement('p');
  sub.className = 'aa-p-l aa-hero__sub';
  sub.setAttribute('data-aa-fade', '');
  sub.textContent =
    'Únete gratis a la comunidad de Tradeco Capital y aprende análisis técnico, gestión de riesgo y disciplina operativa paso a paso, sin promesas vacías.';
  inner.appendChild(sub);

  const actions = document.createElement('div');
  actions.className = 'aa-hero__actions';
  actions.setAttribute('data-aa-fade', '');
  actions.appendChild(
    renderButton({
      href: TELEGRAM_URL,
      label: 'Quiero unirme gratis',
      variant: 'primary',
      target: '_blank',
    }),
  );
  inner.appendChild(actions);

  const honeycomb = document.createElement('div');
  honeycomb.className = 'aa-hero__honeycomb';
  honeycomb.setAttribute('aria-hidden', 'true');
  honeycomb.innerHTML = ICON_HONEYCOMB;

  const diamonds = document.createElement('div');
  diamonds.className = 'aa-hero__diamonds';
  diamonds.setAttribute('aria-hidden', 'true');
  diamonds.innerHTML = ICON_DIAMONDS;

  panel.append(honeycomb, diamonds, inner);

  // ── Media (placeholder full-bleed) ──────────────────────────────────────────
  const media = document.createElement('div');
  media.className = 'aa-hero__media';
  const img = document.createElement('img');
  img.className = 'aa-hero__media-img';
  img.src = HERO_MEDIA;
  img.alt = 'Norman, comunidad Tradeco Capital';
  img.loading = 'eager';
  img.decoding = 'async';
  media.appendChild(img);

  split.append(panel, media);
  hero.appendChild(split);
  root.appendChild(hero);
}
