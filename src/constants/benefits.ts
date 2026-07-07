import type { BenefitCardData } from '../ui/atoms/benefit-card';

export const BENEFITS_HEADER = {
  badge: 'Grupo Gratuito de Telegram',
  title: '¿Qué encuentras en el',
  titleEm: 'grupo gratuito de Nexus?',
  description:
    'El grupo de Telegram es tu puerta de entrada al ecosistema Nexus. Sin costo y sin compromiso.',
};

export const BENEFITS_CARDS: BenefitCardData[] = [
  {
    variant: 'light',
    shadow: 'teal',
    title: 'Análisis de mercado',
    desc: 'Lecturas y escenarios diarios sobre Oro y US30 para que entiendas qué está haciendo el mercado y por qué.',
  },
  {
    variant: 'dark',
    shadow: 'warm',
    title: 'Psicotrading y mentalidad',
    desc: 'Contenido sobre la parte más ignorada del trading: la mente. Porque operar bien empieza por pensar bien.',
  },
  {
    variant: 'light',
    shadow: 'teal',
    title: 'Educación continua',
    desc: 'Metodología y formación accesible para todos los niveles, desde cero hasta trader en desarrollo.',
  },
  {
    variant: 'dark',
    shadow: 'cool',
    title: 'Webinars y sesiones en vivo',
    desc: 'Eventos abiertos donde Fernanda y el equipo Nexus comparten estrategias y responden preguntas en tiempo real.',
  },
  {
    variant: 'light',
    shadow: 'teal',
    title: 'Comunidad activa',
    desc: 'Un espacio de traders reales que aprenden juntos, se apoyan y avanzan en el mismo camino.',
  },
];