export interface ProblemStat {
  sign: string;
  figure: string;
  label: string;
}

export const PROBLEM = {
  badge: 'El mercado no espera',
  text:
    'Operas Oro y US30 por impulso, persigues entradas sueltas y terminas tomando decisiones sin un marco claro. El problema no es el mercado: es improvisar sin método ni acompañamiento. El primer paso es entrar a un espacio donde aprendes estrategia, mentalidad y operativa real.',
  stats: [
    { sign: '+', figure: '5', label: 'Días de operativa en vivo (Lun a Vie)' },
    { sign: '', figure: '2', label: 'Mercados foco: XAUUSD y US30' },
    { sign: '$', figure: '0', label: 'Costo del grupo gratuito' },
  ] satisfies ProblemStat[],
};