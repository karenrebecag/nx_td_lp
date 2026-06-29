// Line Reveal Testimonials — port del slider de OSMO: al cambiar de reseña, las líneas
// del texto (SplitText, máscara) suben/entran con stagger. Autoplay con pausa fuera de
// viewport (ScrollTrigger) y controles prev/next + contador. Respeta reduced-motion
// (crossfade). Scoped a [data-testimonial-wrap].

import { gsap, SplitText, ScrollTrigger } from './gsap-env';

interface Slide {
  item: HTMLElement;
  lines: HTMLElement[];
}

export function initTestimonials(scope: Element): void {
  scope.querySelectorAll<HTMLElement>('[data-testimonial-wrap]').forEach((wrap) => {
    const list = wrap.querySelector<HTMLElement>('[data-testimonial-list]');
    if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>('[data-testimonial-item]'));
    if (!items.length) return;

    const btnPrev = wrap.querySelector<HTMLElement>('[data-prev]');
    const btnNext = wrap.querySelector<HTMLElement>('[data-next]');
    const elCurrent = wrap.querySelector<HTMLElement>('[data-current]');
    const elTotal = wrap.querySelector<HTMLElement>('[data-total]');
    if (elTotal) elTotal.textContent = String(items.length);

    let activeIndex = items.findIndex((el) => el.classList.contains('is--active'));
    if (activeIndex < 0) activeIndex = 0;

    let isAnimating = false;
    let isInView = true;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const autoplay = wrap.getAttribute('data-autoplay') === 'true';
    const duration = (parseInt(wrap.getAttribute('data-autoplay-duration') || '5000', 10) || 5000) / 1000;
    let autoplayCall: ReturnType<typeof gsap.delayedCall> | null = null;

    // Estado inicial + split por slide (líneas enmascaradas para el reveal).
    const slides: Slide[] = items.map((item, i) => {
      const targets = [
        item.querySelector<HTMLElement>('[data-testimonial-text]'),
        ...Array.from(item.querySelectorAll<HTMLElement>('[data-testimonial-split]')),
      ].filter((el): el is HTMLElement => el !== null);

      const lines: HTMLElement[] = [];
      if (!reduce) {
        targets.forEach((el) => {
          const split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'aa-tm-line' });
          lines.push(...(split.lines as HTMLElement[]));
        });
      }

      const active = i === activeIndex;
      item.classList.toggle('is--active', active);
      item.setAttribute('aria-hidden', String(!active));
      gsap.set(item, { autoAlpha: active ? 1 : 0, pointerEvents: active ? 'auto' : 'none' });
      if (!reduce) gsap.set(lines, { yPercent: active ? 0 : 110 });
      return { item, lines };
    });

    const updateCounter = (): void => {
      if (elCurrent) elCurrent.textContent = String(activeIndex + 1);
    };
    updateCounter();

    const setState = (i: number, active: boolean): void => {
      const { item } = slides[i];
      item.classList.toggle('is--active', active);
      item.setAttribute('aria-hidden', String(!active));
      gsap.set(item, { autoAlpha: active ? 1 : 0, pointerEvents: active ? 'auto' : 'none' });
    };

    const goTo = (next: number): void => {
      if (isAnimating || next === activeIndex) return;
      isAnimating = true;
      const out = slides[activeIndex];
      const inc = slides[next];

      const tl = gsap.timeline({
        onComplete: () => {
          setState(activeIndex, false);
          setState(next, true);
          activeIndex = next;
          updateCounter();
          isAnimating = false;
        },
      });

      if (reduce) {
        tl.to(out.item, { autoAlpha: 0, duration: 0.4 }, 0).fromTo(
          inc.item,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.4 },
          0,
        );
        return;
      }

      gsap.set(inc.item, { autoAlpha: 1, pointerEvents: 'auto' });
      gsap.set(inc.lines, { yPercent: 110 });

      tl.to(out.lines, { yPercent: -110, duration: 0.6, ease: 'power4.inOut', stagger: { amount: 0.25 } }, 0)
        .to(inc.lines, { yPercent: 0, duration: 0.7, ease: 'power4.inOut', stagger: { amount: 0.4 } }, '>-=0.3')
        .set(out.item, { autoAlpha: 0 }, '>');
    };

    const startAutoplay = (): void => {
      if (!autoplay) return;
      autoplayCall?.kill();
      autoplayCall = gsap.delayedCall(duration, () => {
        if (!isInView || isAnimating) {
          startAutoplay();
          return;
        }
        goTo((activeIndex + 1) % slides.length);
        startAutoplay();
      });
    };
    startAutoplay();

    btnNext?.addEventListener('click', () => {
      startAutoplay();
      goTo((activeIndex + 1) % slides.length);
    });
    btnPrev?.addEventListener('click', () => {
      startAutoplay();
      goTo((activeIndex - 1 + slides.length) % slides.length);
    });

    // Pausa el autoplay cuando el slider sale del viewport.
    ScrollTrigger.create({
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => { isInView = true; },
      onEnterBack: () => { isInView = true; },
      onLeave: () => { isInView = false; },
      onLeaveBack: () => { isInView = false; },
    });
  });
}
