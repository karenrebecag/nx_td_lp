// GSAP slider — port del "Basic GSAP Slider" de OSMO: track arrastrable con inercia,
// snap por slide, y slides-per-view / gap dirigidos por CSS (--slider-spv / --slider-gap,
// "watch CSS"), con controles prev/next. Scoped a [data-gsap-slider-init]. El estilo y
// las medidas viven en CSS (tokens --aa-*); aquí solo va la mecánica.

import { gsap, Draggable } from './gsap-env';

type DraggableInstance = ReturnType<typeof Draggable.create>[number];

// Re-inicializable: guarda la instancia por root para matarla antes de recrearla (resize).
const instances = new WeakMap<HTMLElement, DraggableInstance>();

export function initGsapSlider(scope: Element): void {
  scope.querySelectorAll<HTMLElement>('[data-gsap-slider-init]').forEach((root) => {
    instances.get(root)?.kill();

    const collection = root.querySelector<HTMLElement>('[data-gsap-slider-collection]');
    const track = root.querySelector<HTMLElement>('[data-gsap-slider-list]');
    if (!collection || !track) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-gsap-slider-item]'));
    const controls = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-gsap-slider-control]'));
    if (!items.length) return;

    items.forEach((slide, i) => {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'Slide');
      slide.setAttribute('aria-label', `${i + 1} de ${items.length}`);
    });

    // ¿Corre el slider? Lo decide el CSS: --slider-status y cuántas slides-per-view caben.
    const styles = getComputedStyle(root);
    const statusOff = styles.getPropertyValue('--slider-status').trim() === 'off';
    let spvVar = parseFloat(styles.getPropertyValue('--slider-spv'));
    const marginRight = parseFloat(getComputedStyle(items[0]).marginRight) || 0;
    const slideW = items[0].getBoundingClientRect().width + marginRight;
    if (Number.isNaN(spvVar)) spvVar = collection.clientWidth / slideW;
    const spv = Math.max(1, Math.min(spvVar, items.length));
    const enabled = !statusOff && spv < items.length;
    root.setAttribute('data-gsap-slider-status', enabled ? 'active' : 'not-active');

    if (!enabled) {
      gsap.set(track, { x: 0 });
      controls.forEach((b) => {
        b.disabled = false;
        b.removeAttribute('data-gsap-slider-control-status');
      });
      return;
    }

    // Bounds + puntos de snap (uno por slide hasta el final del overflow).
    const maxScroll = Math.max(track.scrollWidth - collection.clientWidth, 0);
    const minX = -maxScroll;
    const maxX = 0;
    const maxIndex = maxScroll / slideW;
    const full = Math.floor(maxIndex);
    const snapPoints: number[] = [];
    for (let i = 0; i <= full; i++) snapPoints.push(-i * slideW);
    if (full < maxIndex) snapPoints.push(-maxIndex * slideW);

    let activeIndex = 0;
    let collectionRect = collection.getBoundingClientRect();
    const currentX = (): number => Number(gsap.getProperty(track, 'x'));

    const updateStatus = (x: number): void => {
      const calcX = Math.min(maxX, Math.max(minX, x));
      let closest = snapPoints[0];
      snapPoints.forEach((pt) => {
        if (Math.abs(pt - calcX) < Math.abs(closest - calcX)) closest = pt;
      });
      activeIndex = snapPoints.indexOf(closest);

      items.forEach((slide) => {
        const r = slide.getBoundingClientRect();
        const center = r.left - collectionRect.left + r.width / 2;
        const inView = center > 0 && center < collectionRect.width;
        slide.setAttribute('data-gsap-slider-item-status', inView ? 'active' : 'not-active');
      });

      controls.forEach((btn) => {
        const dir = btn.getAttribute('data-gsap-slider-control');
        const can = dir === 'prev' ? activeIndex > 0 : activeIndex < snapPoints.length - 1;
        btn.disabled = !can;
        btn.setAttribute('aria-disabled', can ? 'false' : 'true');
        btn.setAttribute('data-gsap-slider-control-status', can ? 'active' : 'not-active');
      });
    };

    controls.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        const dir = btn.getAttribute('data-gsap-slider-control');
        const target = Math.max(0, Math.min(activeIndex + (dir === 'next' ? 1 : -1), snapPoints.length - 1));
        gsap.to(track, { duration: 0.4, x: snapPoints[target], onUpdate: () => updateStatus(currentX()) });
      });
    });

    const inst = Draggable.create(track, {
      type: 'x',
      inertia: true,
      bounds: { minX, maxX },
      edgeResistance: 0.75,
      dragResistance: 0.05,
      cursor: 'grab',
      activeCursor: 'grabbing',
      allowNativeTouchScrolling: true, // no bloquea el scroll vertical en móvil
      snap: snapPoints,
      onPress: () => { collectionRect = collection.getBoundingClientRect(); },
      onDrag: () => updateStatus(currentX()),
      onThrowUpdate: () => updateStatus(currentX()),
      onThrowComplete: () => updateStatus(currentX()),
      onRelease: () => updateStatus(currentX()),
    })[0];
    instances.set(root, inst);

    gsap.set(track, { x: 0 });
    updateStatus(0);
  });
}
