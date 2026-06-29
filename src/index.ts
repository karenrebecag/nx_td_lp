// Entry point. Cada punto de montaje declara su configuración por atributos:
//   <div data-aa-mount
//        data-aa-theme="light|dark"
//        data-aa-lang="es|en"></div>
//
//   <script data-cfasync="false"
//     src="https://cdn.jsdelivr.net/gh/karenrebecag/TC_NLP@latest/loader.js"></script>
const _v = document.querySelector<HTMLScriptElement>('script[src*="TC_NLP@"]')?.src.match(/TC_NLP@([^/]+)/)?.[1] ?? 'dev';
console.log(`[tradeco-norman-lp] v${_v} loaded`);

import { type Theme, type Lang } from './core/types';
import { initMotion } from './ui/motion';
import { renderNavbar, initNavbar } from './ui/navbar';
import { renderScrollProgress, initScrollProgress } from './ui/scroll-progress';
import { initSpline } from './ui/spline';
import { initParallax } from './ui/parallax';
import { initDirectionalHover } from './ui/directional-hover';
import { renderHero } from './sections/hero';
import { initHeroGallery } from './ui/hero-gallery';
import { renderProblemSection } from './sections/problem';
// import { renderLearnSection } from './sections/learn'; // "Cómo funciona" fuera del layout (sección conservada)
import { renderAboutSection } from './sections/about';
import { renderBenefitsSection } from './sections/benefits';
import { renderFooterSection } from './sections/footer';
import { initAccordion } from './ui/accordion';
import { initPillarSlider } from './ui/pillar-slider';
import { initRotatingText } from './ui/rotating-text';
import { initBenefitsScroll } from './ui/benefits-scroll';
import { initMomentumHover } from './ui/momentum-hover';
import { initButton018 } from './ui/button018';
import { initDriftGallery } from './ui/drift-gallery';
import { initNumberOdometer } from './ui/odometer';
import { initGsapSlider } from './ui/gsap-slider';
import { initTestimonials } from './ui/testimonials';
import { initMetaPixel } from './ui/meta-pixel';

// Scroll suave para anclas internas (#id) sin tocar CSS global de Elementor.
function initAnchorScroll(root: HTMLElement): void {
  root.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href')?.slice(1);
    if (!id) return;
    const target = root.querySelector(`#${CSS.escape(id)}`);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function resolveTheme(raw: string | undefined): Theme {
  // LP dark-first (marca de la agencia): default dark salvo override explícito a light.
  return raw === 'light' ? 'light' : 'dark';
}

function resolveLang(raw: string | undefined): Lang {
  return raw === 'en' ? 'en' : 'es';
}

function boot(): void {
  initMetaPixel(); // una vez por carga, independiente de los mounts

  const mounts = document.querySelectorAll<HTMLElement>('[data-aa-mount]');
  mounts.forEach((mount) => {
    const theme = resolveTheme(mount.dataset.aaTheme);
    const lang = resolveLang(mount.dataset.aaLang);

    // Root wrapper — todo el CSS está scopeado a .aa-landing
    const root = document.createElement('div');
    root.className = 'aa-landing';
    root.setAttribute('data-aa-theme', theme);
    root.setAttribute('data-aa-lang', lang);

    // Navbar (fixed) + cada sección como módulo, recibiendo `root` como contenedor.
    renderScrollProgress(root);
    renderNavbar(root);
    renderHero(root);
    renderProblemSection(root);
    renderBenefitsSection(root);
    // renderLearnSection(root); // "Cómo funciona" fuera del layout (sección conservada)
    renderAboutSection(root);
    renderFooterSection(root);

    mount.replaceChildren(root);
    initAnchorScroll(root);
    // Pines primero: crean sus pin-spacers (~200vh) para que initMotion mida los triggers
    // de reveal con la altura real. Si no, en el layout colapsado las secciones de abajo
    // caen dentro del viewport y sus reveals once:true disparan antes de tiempo (el texto
    // ya está visible cuando llegas, sin animación).
    initBenefitsScroll(root);
    initDriftGallery(root);
    initMotion(root);
    initNavbar(root);
    initScrollProgress(root);
    initSpline();
    initParallax(root);
    initDirectionalHover(root);
    initAccordion(root);
    initPillarSlider(root);
    initRotatingText(root);
    initMomentumHover(root);
    initButton018(root);
    initNumberOdometer();
    initHeroGallery(root);
    initGsapSlider(root);
    initTestimonials(root);

    // Re-mide el slider (slides-per-view/bounds dependen del ancho) al cambiar el viewport.
    let sliderResize: number | undefined;
    window.addEventListener('resize', () => {
      window.clearTimeout(sliderResize);
      sliderResize = window.setTimeout(() => {
        initGsapSlider(root);
        initButton018(root); // la escala depende del tamaño real del botón
      }, 200);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
