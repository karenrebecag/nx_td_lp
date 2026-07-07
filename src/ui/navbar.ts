// Navbar simple — conjunto de logos (ATFX · separador · Blue Makers) a la izquierda y un
// CTA a la derecha, en space-between. Fijo bajo el topbar, fondo transparente. Los logos
// cambian de versión según el tema de la sección detrás: white sobre dark, dark sobre
// light (initNavbar detecta la sección bajo la barra y setea data-nav-theme).

import { renderButton } from './atoms/button';
import { renderNexusNavLogo } from './atoms/logo';
import { NAV_CTA } from '../constants/nav';

export function renderNavbar(root: Element): void {
  const nav = document.createElement('nav');
  nav.className = 'aa-nav';
  nav.setAttribute('aria-label', 'Marca');
  nav.setAttribute('data-nav-theme', 'dark'); // el hero arranca dark
  nav.setAttribute('data-nav-logo', 'gold'); // top0 → logo gold

  const logos = document.createElement('div');
  logos.className = 'aa-nav__logos';
  logos.appendChild(renderNexusNavLogo());

  const cta = document.createElement('div');
  cta.className = 'aa-nav__cta';
  cta.appendChild(
    renderButton({ href: NAV_CTA.href, label: NAV_CTA.label, variant: 'primary', size: 'sm' }),
  );

  nav.append(logos, cta);
  root.appendChild(nav);
}

export function initNavbar(root: Element): void {
  const nav = root.querySelector<HTMLElement>('.aa-nav');
  if (!nav) return;
  const topbar = document.querySelector<HTMLElement>('[data-aa-topbar]');

  let raf = 0;
  let lastY = window.scrollY;

  const update = (): void => {
    raf = 0;

    // Tema según la sección detrás. Probe bajo el topbar (referencia fija, no depende del
    // transform del nav al ocultarse); los logos son pointer-events:none → el hit-test pasa.
    const topbarBottom = topbar ? topbar.getBoundingClientRect().bottom : 0;
    // Probe al centro: capta las cards centradas con tema propio (FAQ navy) además de
    // los strips full-width. closest() sube hasta el ancestro con data-aa-section-theme.
    const el = document.elementFromPoint(window.innerWidth / 2, topbarBottom + 18);
    const section = el?.closest<HTMLElement>('[data-aa-section-theme]');
    const theme = section?.getAttribute('data-aa-section-theme') ?? 'light';
    nav.setAttribute('data-nav-theme', theme);

    // Hide on scroll down (y no-top) · show en top y scroll up.
    const y = window.scrollY;

    // Logo: gold en top0; white sobre dark; black sobre light.
    const atTop = y <= 80 || section?.id === 'top';
    nav.setAttribute('data-nav-logo', atTop ? 'gold' : theme === 'dark' ? 'white' : 'black');
    if (y <= 4) nav.classList.remove('aa-nav--hidden');
    else if (y > lastY + 2 && y > 80) nav.classList.add('aa-nav--hidden');
    else if (y < lastY - 2) nav.classList.remove('aa-nav--hidden');
    lastY = y;
  };
  const onScroll = (): void => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  requestAnimationFrame(update);
}
