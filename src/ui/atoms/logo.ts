import { NEXUS } from '../../constants/assets';

const BRAND_LABEL = 'Nexus Trading Group';

export function renderNexusNavLogo(): HTMLElement {
  const wrap = document.createElement('span');
  wrap.className = 'aa-nav__logo aa-nav__logo--nexus';
  wrap.setAttribute('aria-label', BRAND_LABEL);

  const variants = {
    gold: NEXUS.logoGold,
    white: NEXUS.logoWhite,
    black: NEXUS.logoBlack,
  } as const;

  (Object.keys(variants) as Array<keyof typeof variants>).forEach((variant) => {
    const img = document.createElement('img');
    img.className = `aa-nav__logo-img aa-nav__logo-img--${variant}`;
    img.src = variants[variant];
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    img.decoding = 'async';
    wrap.appendChild(img);
  });

  return wrap;
}

export function renderNexusFooterLogo(): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'aa-footer__logo aa-footer__logo--nexus';
  wrap.setAttribute('aria-label', BRAND_LABEL);

  const img = document.createElement('img');
  img.className = 'aa-footer__logo-img';
  img.src = NEXUS.logoWhite;
  img.alt = '';
  img.setAttribute('aria-hidden', 'true');
  img.decoding = 'async';
  wrap.appendChild(img);

  return wrap;
}