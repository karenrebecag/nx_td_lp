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

// Logos Nexus. En local se sirven desde /public; al publicar se migran a CDN o jsDelivr.
export const NEXUS = {
  logoGold: '/public/nexus/logo-gold.webp',
  logoBlack: '/public/nexus/logo-black.webp',
  logoWhite: '/public/nexus/logo-white.webp',
  founderPortrait:
    '/public/nexus/sadasdsa_66eb0112b04ac88f2f1ec30cc3a3b09be6db7da4bb1701c0c40df1bc30502486.webp',
  heroMedia:
    `${CDN}/image00001_6d7811285ccf764ff510b3aa068546c68e933873dbf912e8898cd14dc5ea32cc.webp`,
  liveTradingMedia:
    `${CDN}/image00002_b7ea065e60372793214f7cd86ef8b10dd3796981da39dd4a6cc4058d198e320f.webp`,
  copyTradingMedia:
    `${CDN}/image00055_8e8bbfac5a8340ab5ba8b5c48a05fd9193c8895d73fdf20a7ada205b2edf78f0.webp`,
};

// Assets legacy Tradeco/Norman (reemplazar al migrar secciones de contenido).
export const TRADECO = {
  logoFull: '/public/tradeco/logo-full.jpg',
  logoMark: '/public/tradeco/logo-mark.png',
  norman1: `${CDN}/norman_5c9113acca77d41c29e112116d1f8d3929bf55959e191e8da8485d8eaa025c7f.webp`,
  norman2: '/public/tradeco/norman-2.jpg',
};

// CTA único del funnel: Ads → LP → Telegram.
export const TELEGRAM_URL = 'https://t.me/+W_27SjQrwvlmNGNh';
