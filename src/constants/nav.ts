// Navegación — labels + anclas. Las secciones destino se irán creando por fase;
// el indicador del navbar se activa solo cuando el ancla existe en el DOM.

import { TELEGRAM_URL } from './assets';

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Por qué asistir', href: '#beneficios' },
  { label: 'Para quién', href: '#problema' },
];

export const NAV_CTA = {
  label: 'Reservar lugar',
  href: TELEGRAM_URL,
};
