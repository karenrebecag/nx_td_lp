// Hero gallery — efecto de scroll del header Relume: la galería sticky se expande y las
// columnas laterales convergen mientras se recorre el alto de la sección. Scrub con
// ScrollTrigger. Respeta prefers-reduced-motion (estado final estático).

import { gsap, ScrollTrigger } from './gsap-env';

export function initHeroGallery(scope: Element): void {
  const hero = scope.querySelector<HTMLElement>('.aa-hero');
  const gallery = scope.querySelector<HTMLElement>('.aa-hero__gallery');
  if (!hero || !gallery) return;

  const left = scope.querySelector<HTMLElement>('.aa-hero__col--left');
  const right = scope.querySelector<HTMLElement>('.aa-hero__col--right');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(gallery, { scale: 1 });
    return;
  }

  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  });

  tl.fromTo(gallery, { scale: 0.78 }, { scale: 1.04 }, 0);
  if (left) tl.fromTo(left, { xPercent: 22, autoAlpha: 0.25 }, { xPercent: 0, autoAlpha: 1 }, 0);
  if (right) tl.fromTo(right, { xPercent: -22, autoAlpha: 0.25 }, { xPercent: 0, autoAlpha: 1 }, 0);

  ScrollTrigger.refresh();
}
