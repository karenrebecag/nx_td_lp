// Assets externos (CDN).

const CDN = 'https://pub-62c41549a44642efbcd3f775bdb039b3.r2.dev';

export const ASSETS = {
  heroVideo: `${CDN}/stock-market-exchange-and-forex-candles-chart-back-2026-01-28-03-22-46-utc.mp4`,
  // Vacío = el hero usa el <video> bg (loop muted) en vez de la escena Spline.
  splineScene: '',
  stepsBanner: `${CDN}/stock-investor-with-stock-market-graph-screen-sto-2026-01-07-01-01-14-utc%201_0153682f48f2cb02adf013ee428567388c869b6778ce09803a0f996871f6481d.webp`,
};

// Runtime de Spline vía CDN (no npm). Se inyecta solo si hay una <spline-viewer> montada.
export const SPLINE_RUNTIME = 'https://unpkg.com/@splinetool/viewer@1.12.97/build/spline-viewer.js';

// Assets Tradeco/Norman. En local se sirven desde /public; al publicar se migran a CDN
// o se referencian por la ruta raw del repo en jsDelivr.
export const TRADECO = {
  logoFull: '/public/tradeco/logo-full.jpg',
  logoMark: '/public/tradeco/logo-mark.png',
  norman1: `${CDN}/norman_5c9113acca77d41c29e112116d1f8d3929bf55959e191e8da8485d8eaa025c7f.webp`,
  norman2: '/public/tradeco/norman-2.jpg',
};

// CTA único del funnel: Ads → LP → Telegram.
export const TELEGRAM_URL = 'https://t.me/TradecoCapital_Free';
