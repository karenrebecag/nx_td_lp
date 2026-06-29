// Footer oficial de ATFX — links, redes y disclaimer legal extraídos del proyecto de
// referencia. Contenido real de marca (no placeholder).

export interface FooterLink {
  label: string;
  href: string;
}
export interface FooterGroup {
  title: string;
  links: FooterLink[];
}
export interface FooterSocial {
  label: string;
  href: string;
  icon: string; // inner SVG markup
  fill: boolean;
}

export const ATFX_HOME = 'https://www.atfx.com/es/';
export const ATFX_LOGO_SRC = 'https://www.atfx.com/wp-content/uploads/2023/06/ATFX_logo.svg';

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: 'Legal',
    links: [
      { label: 'Legal', href: 'https://www.atfx.com/es/condiciones-legales' },
      { label: 'Términos comerciales', href: 'https://www.atfx.com/wp-content/uploads/2024/04/AT-Global-Markets-MU_EN_Standard-Terms-of-Business.pdf' },
      { label: 'Privacidad', href: 'https://www.atfx.com/wp-content/uploads/2024/04/AT-Global-Markets-MU_EN_Privacy-and-Internal-Privacy-Controls-Policy.pdf' },
      { label: 'Cookies', href: 'https://www.atfx.com/wp-content/uploads/2025/03/ES-ATFX-GM-Cookies-Policy-EN-V20200605.pdf' },
      { label: 'Boletines', href: 'https://notice.atfx.com/es/notice' },
    ],
  },
  {
    title: 'Sobre Nosotros',
    links: [
      { label: 'Nuestra visión', href: 'https://www.atfx.com/es/sobre-nosotros/nuestra-vision' },
      { label: '¿Por qué elegir ATFX?', href: 'https://www.atfx.com/es/sobre-nosotros/por-que-elegir-atfx' },
      { label: 'Licencias ATFX', href: 'https://www.atfx.com/es/sobre-nosotros/atfx-reguladores' },
      { label: 'Premios y reconocimientos', href: 'https://www.atfx.com/es/sobre-nosotros/premios-y-reconocimientos' },
      { label: 'Responsabilidad social corporativa', href: 'https://www.atfx.com/es/duke-of-edinburgh-cup-sponsorship' },
      { label: 'Noticias de la compañía', href: 'https://www.atfx.com/es/sobre-nosotros/noticias-de-la-compania' },
    ],
  },
];

export const FOOTER_SOCIALS: FooterSocial[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/ATFXLatam', fill: true, icon: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
  { label: 'Instagram', href: 'https://www.instagram.com/atfxlatinoamerica', fill: false, icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
  { label: 'X', href: 'https://x.com/ATFX_Latam', fill: true, icon: '<path d="M13.71 10.59L20.41 2.8H18.82L13 9.56L8.35 2.8H3L10.03 13.03L3 21.2H4.59L10.73 14.06L15.64 21.2H21L13.71 10.59ZM11.54 13.12L10.83 12.1L5.16 4H7.6L12.17 10.54L12.88 11.56L18.82 20.06H16.38L11.53 13.12H11.54Z"/>' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/atfx-latam/', fill: true, icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>' },
  { label: 'YouTube', href: 'https://www.youtube.com/@atfxlatam', fill: true, icon: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#08101d"/>' },
];

// Redes propias de Tradeco Capital (footer de la LP de Norman)
export const TRADECO_SOCIALS: FooterSocial[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/tradeco_capital/',
    fill: true,
    icon:
      '<path d="M21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2283 4.78181 20.8322 4.17742 20.32 3.68C19.8226 3.16776 19.2182 2.77166 18.55 2.52C17.7706 2.23484 16.9497 2.07945 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.0503 2.07945 6.2294 2.23484 5.45 2.52C4.78181 2.77166 4.17742 3.16776 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17742 20.8322 4.78181 21.2283 5.45 21.48C6.2294 21.7652 7.0503 21.9206 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9497 21.9206 17.7706 21.7652 18.55 21.48C19.2134 21.219 19.816 20.8242 20.3201 20.3201C20.8242 19.816 21.219 19.2134 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6327 18.2913 19.3773 18.683 19.0501 19.0101C18.723 19.3373 18.3313 19.5927 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38073 20.1148 6.72401 20.0132 6.1 19.8C5.66869 19.6327 5.27698 19.3773 4.94985 19.0501C4.62272 18.723 4.36734 18.3313 4.2 17.9C3.97775 17.2911 3.86271 16.6482 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86271 7.35178 3.97775 6.70893 4.2 6.1C4.36734 5.66869 4.62272 5.27698 4.94985 4.94985C5.27698 4.62272 5.66869 4.36734 6.1 4.2C6.70893 3.97775 7.35178 3.86271 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.2913 4.36734 18.683 4.62272 19.0101 4.94985C19.3373 5.27698 19.5927 5.66869 19.76 6.1C19.9959 6.7065 20.1245 7.34942 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16Z" fill="currentColor"/>' +
      '<path d="M12 6.86C10.9834 6.86 9.98964 7.16146 9.14437 7.72625C8.2991 8.29104 7.64029 9.0938 7.25126 10.033C6.86222 10.9722 6.76044 12.0057 6.95876 13.0028C7.15709 13.9998 7.64663 14.9157 8.36547 15.6345C9.08431 16.3534 10.0002 16.8429 10.9972 17.0412C11.9943 17.2396 13.0278 17.1378 13.967 16.7487C14.9062 16.3597 15.709 15.7009 16.2738 14.8556C16.8385 14.0104 17.14 13.0166 17.14 12C17.14 10.6368 16.5985 9.32941 15.6345 8.36547C14.6706 7.40153 13.3632 6.86 12 6.86ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73399 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73399C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" fill="currentColor"/>' +
      '<path d="M17.34 5.46001C17.1027 5.46001 16.8707 5.53039 16.6733 5.66224C16.476 5.7941 16.3222 5.98152 16.2313 6.20079C16.1405 6.42006 16.1168 6.66134 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67636 16.8731 7.79065 17.1059 7.83695C17.3387 7.88325 17.5799 7.85949 17.7992 7.76866C18.0185 7.67784 18.2059 7.52403 18.3378 7.32669C18.4696 7.12935 18.54 6.89734 18.54 6.66001C18.54 6.34175 18.4136 6.03652 18.1885 5.81148C17.9635 5.58643 17.6583 5.46001 17.34 5.46001Z" fill="currentColor"/>',
  },
];

// Redes del aliado Blue Makers (co-brand)
export const BLUEMAKERS_SOCIALS: FooterSocial[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/blue.makers_', fill: false, icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@bluemakers0', fill: true, icon: '<path d="M16.5 5.6a4.4 4.4 0 0 1-2.7-2.1h-2.6v11.4a2 2 0 1 1-1.6-2v-2.6a4.6 4.6 0 1 0 4.2 4.6V9.5a6.9 6.9 0 0 0 3.5 1V7.9a4.4 4.4 0 0 1-0.8-0.1z"/>' },
  { label: 'YouTube', href: 'https://www.youtube.com/@BLUEMAKERS-z5f', fill: true, icon: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111b30"/>' },
];

export const FOOTER_LEGAL =
  'El trading de Forex y CFDs implica un alto riesgo y puede no ser adecuado para todos los inversores. Los resultados pasados no garantizan resultados futuros. Todo el contenido compartido tiene fines educativos y no constituye asesoría financiera.';
