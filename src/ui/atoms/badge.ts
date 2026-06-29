// Badge — eyebrow sólido con punto, en neutros. Dos variantes por contraste de strip:
// `ink` (oscuro, sobre fondos claros) y `light` (claro neutro, sobre fondos oscuros).
// El texto hereda .aa-eyebrow.

export interface BadgeOptions {
  label: string;
  variant?: 'ink' | 'light';
}

export function renderBadge(opts: BadgeOptions): HTMLElement {
  const { label, variant = 'ink' } = opts;

  const el = document.createElement('div');
  el.className = `aa-badge aa-badge--${variant}`;

  const dot = document.createElement('span');
  dot.className = 'aa-badge__dot';
  dot.setAttribute('aria-hidden', 'true');

  const text = document.createElement('span');
  text.className = 'aa-badge__text aa-eyebrow';
  text.textContent = label;

  el.append(dot, text);
  return el;
}
