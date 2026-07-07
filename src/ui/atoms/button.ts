// Botón — OSMO "Button 018" (portado de The Vault): el fondo (__bg) se expande sutilmente
// en hover según un incremento en px (ancho/alto), y el label escala 1.025. El cálculo de
// escala lo hace initButton018() leyendo el tamaño real; la animación vive en el CSS.

import { ICON_TELEGRAM } from '../../constants/icons';

export interface ButtonOptions {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'sm';
  target?: '_blank' | '_self';
  icon?: boolean;
}

export function renderButton(opts: ButtonOptions): HTMLElement {
  const { label, href, variant = 'primary', size = 'default', target, icon = true } = opts;

  const tag = href ? 'a' : 'button';
  const el = document.createElement(tag) as HTMLAnchorElement | HTMLButtonElement;
  el.className = `aa-button aa-button--${variant} aa-button--${size}`;
  el.setAttribute('data-aa-btn018', '');
  el.setAttribute('data-aa-btn018-width-increase', '8');
  el.setAttribute('data-aa-btn018-height-increase', '4');

  if (href && el instanceof HTMLAnchorElement) {
    el.href = href;
    if (target) el.target = target;
    if (target === '_blank') el.rel = 'noopener noreferrer';
  }

  // Fondo escalable (debajo del contenido) — su escala la setea initButton018 en hover.
  const bg = document.createElement('span');
  bg.className = 'aa-button__bg';
  bg.setAttribute('data-aa-btn018-bg', '');

  const inner = document.createElement('span');
  inner.className = 'aa-button__inner';

  if (icon) {
    const iconEl = document.createElement('span');
    iconEl.className = 'aa-button__icon';
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.innerHTML = ICON_TELEGRAM;
    inner.appendChild(iconEl);
  }

  const text = document.createElement('span');
  text.className = 'aa-button__text';
  text.textContent = label;
  inner.appendChild(text);

  el.append(bg, inner);
  return el;
}
