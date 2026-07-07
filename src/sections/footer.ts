import { renderContainer } from '../ui/layout';
import { renderButton } from '../ui/atoms/button';
import { TELEGRAM_URL } from '../constants/assets';
import { FOOTER_COPYRIGHT, FOOTER_CTA, FOOTER_LEGAL } from '../constants/footer';
import { ICON_HONEYCOMB } from '../constants/icons';
import { renderNexusFooterLogo } from '../ui/atoms/logo';

export function renderFooterSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-footer';
  section.id = 'footer';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const honeycomb = document.createElement('div');
  honeycomb.className = 'aa-footer__honeycomb';
  honeycomb.setAttribute('aria-hidden', 'true');
  honeycomb.innerHTML = ICON_HONEYCOMB;

  const inner = document.createElement('div');
  inner.className = 'aa-footer__inner aa-footer__inner--nexus';

  const logo = renderNexusFooterLogo();
  logo.classList.add('aa-footer__brand');

  const cta = document.createElement('div');
  cta.className = 'aa-footer__cta';
  cta.appendChild(
    renderButton({
      href: TELEGRAM_URL,
      label: FOOTER_CTA.label,
      variant: 'primary',
      size: 'sm',
      target: '_blank',
    }),
  );

  const divider = document.createElement('div');
  divider.className = 'aa-footer__divider';
  divider.setAttribute('aria-hidden', 'true');

  const legal = document.createElement('div');
  legal.className = 'aa-footer__legal';
  const legalText = document.createElement('p');
  legalText.textContent = FOOTER_LEGAL;
  legal.appendChild(legalText);

  const copyright = document.createElement('p');
  copyright.className = 'aa-footer__copyright';
  copyright.textContent = FOOTER_COPYRIGHT;

  inner.append(logo, cta, divider, legal, copyright);

  section.append(honeycomb, renderContainer({ children: [inner] }));
  root.appendChild(section);
}