import { NEXUS } from './assets';

export interface EcosystemOffering {
  tagline: string;
  title: string;
  titleEm?: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

export const ECOSYSTEM_HEADER = {
  badge: 'Ecosistema Nexus',
  title: 'Más que un grupo,',
  titleEm: 'un ecosistema completo de trading.',
  description:
    'Al dar el siguiente paso dentro del ecosistema Nexus, accedes a dos servicios diseñados para llevar tu trading al siguiente nivel.',
};

export const ECOSYSTEM_OFFERINGS: EcosystemOffering[] = [
  {
    tagline: 'Nexus Live Trading',
    title: 'Opera en vivo.',
    titleEm: 'Aprende en tiempo real.',
    description:
      'De lunes a viernes, durante la sesión de Nueva York, Fernanda y el equipo Nexus ejecutan operaciones reales en Oro y US30 frente a la comunidad, explicando cada decisión en el momento en que se toma. No es un curso grabado. No es teoría. Es el mercado real, en vivo, con acompañamiento profesional todos los días.',
    features: [
      'Operativa en vivo de lunes a viernes',
      'Foco en XAUUSD (Oro) y US30',
      'Cada entrada y salida explicada en tiempo real',
      'Acceso a grabaciones diarias',
      'Acompañamiento constante del equipo Nexus',
    ],
    imageSrc: NEXUS.liveTradingMedia,
    imageAlt: 'Nexus Live Trading',
  },
  {
    tagline: 'Nexus Copy Trading',
    title: 'El mercado trabajando por ti.',
    description:
      'El copy trading te permite replicar automáticamente las operaciones de traders profesionales de Nexus desde tu propia cuenta. Sin necesidad de analizar, sin estar pegado a una pantalla: las operaciones se copian en tiempo real mientras tú vives tu vida. La solución para quienes quieren exposición inteligente al mercado, sin depender de su propio análisis para operar.',
    features: [
      'Copia automática de operaciones profesionales',
      'Tu cuenta, tu control: el capital siempre es tuyo',
      'Sin experiencia previa necesaria',
      'Seguimiento y acompañamiento mensual',
    ],
    imageSrc: NEXUS.copyTradingMedia,
    imageAlt: 'Nexus Copy Trading',
  },
];