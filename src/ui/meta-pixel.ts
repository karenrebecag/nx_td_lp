// Meta Pixel (client-side) — funnel Ads → LP → Telegram. Solo el Pixel ID, que es
// público por naturaleza (viaja en el cliente). El token de la Conversions API es un
// SECRETO y NO va aquí: el bundle es público en jsDelivr y no hay servidor para CAPI.

const META_PIXEL_ID = '893138089766206';

// fbq mínimo (snippet oficial de Meta portado a TS, idempotente).
function loadFbevents(): void {
  const w = window as unknown as { fbq?: FbqFn; _fbq?: FbqFn };
  if (w.fbq) return;

  const fbq: FbqFn = function (...args: unknown[]) {
    fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args);
  } as FbqFn;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = '2.0';
  w.fbq = fbq;
  w._fbq = w._fbq || fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const first = document.getElementsByTagName('script')[0];
  first?.parentNode?.insertBefore(script, first);
}

interface FbqFn {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded?: boolean;
  version?: string;
}

function track(event: string): void {
  const fbq = (window as unknown as { fbq?: FbqFn }).fbq;
  fbq?.('track', event);
}

// Lead = clic al CTA del funnel (unirse al canal de Telegram). Listener delegado en
// document: cubre todos los links a t.me (hero, footer, navbar, topbar) sin acoplar el
// tracking a cada botón, y sirve aunque se monten después del boot.
function initLeadTracking(): void {
  document.addEventListener('click', (e) => {
    const link = (e.target as Element | null)?.closest('a[href^="https://t.me/"]');
    if (link) track('Lead');
  });
}

export function initMetaPixel(): void {
  loadFbevents();
  const fbq = (window as unknown as { fbq: FbqFn }).fbq;
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
  initLeadTracking();
}
