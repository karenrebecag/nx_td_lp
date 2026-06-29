// Testimonios de la comunidad ("La comunidad habla"). Contenido del diseño (Figma).
// Estructura para el line-reveal slider.

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Antes operaba sin un plan claro. Ahora entiendo el proceso y eso cambió cómo tomo decisiones.',
    name: 'María G.',
    location: 'México',
  },
  {
    quote: 'Aprendí a gestionar el riesgo antes de pensar en las ganancias. Eso lo cambió todo.',
    name: 'Carlos R.',
    location: 'Colombia',
  },
  {
    quote: 'Las sesiones en vivo me ayudan a entender el mercado en tiempo real, no solo en teoría.',
    name: 'Andrea P.',
    location: 'Perú',
  },
  {
    quote: 'Por fin una comunidad que enseña proceso y disciplina, sin promesas vacías.',
    name: 'Diego M.',
    location: 'Argentina',
  },
  {
    quote: 'El acompañamiento dentro del grupo hace la diferencia cuando empiezas desde cero.',
    name: 'Lucía F.',
    location: 'Chile',
  },
  {
    quote: 'Norman comparte lo que realmente funciona, sin vender "señales mágicas".',
    name: 'Juan S.',
    location: 'España',
  },
];
