// OSMO "Button 018" (portado de The Vault): calcula la escala del fondo a partir del
// tamaño real del botón + un incremento en px (ancho/alto), y la expone como variables
// CSS. La animación (hover/active) vive en el CSS. Adaptado al boot de ATFX: recibe el
// scope y se vuelve a llamar en resize (el tamaño cambia con el viewport).

export function initButton018(scope: Element): void {
  scope.querySelectorAll<HTMLElement>('[data-aa-btn018]').forEach((el) => {
    const widthIncrease = Number(el.getAttribute('data-aa-btn018-width-increase')) || 8;
    const heightIncrease = Number(el.getAttribute('data-aa-btn018-height-increase')) || 4;

    const w = el.offsetWidth;
    const h = el.offsetHeight;
    if (!w || !h) return;

    el.style.setProperty('--aa-btn-scale-x', String((w + widthIncrease) / w));
    el.style.setProperty('--aa-btn-scale-y', String((h + heightIncrease) / h));
  });
}
