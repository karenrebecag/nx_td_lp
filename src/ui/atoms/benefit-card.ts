// Benefit card — card de "Lo que encontrarás": slot de icono (placeholder hasta declarar
// los SVG como constantes) + título + descripción. Dos variantes por contraste (light /
// dark) y un tono de sombra apilada (offset duro). Estilo en benefits.css. Tokens --aa-*.

import {
  ICON_HONEYCOMB,
  ICON_CARD_SHAPE_1,
  ICON_CARD_SHAPE_2,
  ICON_CARD_SHAPE_3,
} from '../../constants/icons';

export interface BenefitCardData {
  title: string;
  desc: string;
  variant?: 'light' | 'dark';
  shadow?: 'teal' | 'warm' | 'cool';
}

// Shapes top-left alternadas por posición de card.
const CARD_SHAPES = [ICON_CARD_SHAPE_1, ICON_CARD_SHAPE_2, ICON_CARD_SHAPE_3];

export function renderBenefitCard(data: BenefitCardData, index = 0): HTMLElement {
  const { title, desc, variant = 'dark', shadow = 'warm' } = data;

  const card = document.createElement('article');
  card.className = `aa-bcard aa-bcard--${variant} aa-bcard--shadow-${shadow}`;

  // Honeycomb decorativo top-right; color vía currentColor según variante (CSS).
  const honeycomb = document.createElement('div');
  honeycomb.className = 'aa-bcard__honeycomb';
  honeycomb.setAttribute('aria-hidden', 'true');
  honeycomb.innerHTML = ICON_HONEYCOMB;

  // Shape decorativa top-left; alterna 1/2/3 por índice; color por variante (CSS).
  const shape = document.createElement('div');
  shape.className = 'aa-bcard__shape';
  shape.setAttribute('aria-hidden', 'true');
  shape.innerHTML = CARD_SHAPES[index % CARD_SHAPES.length];

  // Slot de icono: reserva el espacio del glifo; se rellena al declarar los SVG.
  const icon = document.createElement('div');
  icon.className = 'aa-bcard__icon';
  icon.setAttribute('aria-hidden', 'true');

  const body = document.createElement('div');
  body.className = 'aa-bcard__body';

  const heading = document.createElement('h3');
  heading.className = 'aa-bcard__title';
  heading.textContent = title;

  const text = document.createElement('p');
  text.className = 'aa-bcard__desc';
  text.textContent = desc;

  body.append(heading, text);
  card.append(honeycomb, shape, icon, body);
  return card;
}
