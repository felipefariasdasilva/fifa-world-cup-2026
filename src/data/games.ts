export interface BrazilGame {
  id: number;
  phase: string;
  group: string;
  date: string;
  displayDate: string;
  displayTime: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  stadium: string;
  city: string;
  state: string;
  country: string;
}

// All times in UTC. BRT = UTC-3, EDT = UTC-4
// June 13: 6 PM EDT = 22:00 UTC = 19:00 BRT
// June 19: 8:30 PM EDT = 00:30 UTC Jun 20 = 21:30 BRT Jun 19
// June 24: 6 PM EDT = 22:00 UTC = 19:00 BRT
export const brazilGames: BrazilGame[] = [
  {
    id: 1,
    phase: "Fase de Grupos",
    group: "Grupo C",
    date: "2026-06-13T22:00:00Z",
    displayDate: "13 de junho de 2026",
    displayTime: "19h00 (BRT)",
    homeTeam: "Brasil",
    awayTeam: "Marrocos",
    homeFlag: "🇧🇷",
    awayFlag: "🇲🇦",
    stadium: "MetLife Stadium",
    city: "East Rutherford",
    state: "New Jersey",
    country: "EUA",
  },
  {
    id: 2,
    phase: "Fase de Grupos",
    group: "Grupo C",
    date: "2026-06-20T00:30:00Z",
    displayDate: "19 de junho de 2026",
    displayTime: "21h30 (BRT)",
    homeTeam: "Brasil",
    awayTeam: "Haiti",
    homeFlag: "🇧🇷",
    awayFlag: "🇭🇹",
    stadium: "Lincoln Financial Field",
    city: "Philadelphia",
    state: "Pennsylvania",
    country: "EUA",
  },
  {
    id: 3,
    phase: "Fase de Grupos",
    group: "Grupo C",
    date: "2026-06-24T22:00:00Z",
    displayDate: "24 de junho de 2026",
    displayTime: "19h00 (BRT)",
    homeTeam: "Escócia",
    awayTeam: "Brasil",
    homeFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    awayFlag: "🇧🇷",
    stadium: "Hard Rock Stadium",
    city: "Miami Gardens",
    state: "Florida",
    country: "EUA",
  },
];

export const groupCTeams = [
  { name: "Brasil", flag: "🇧🇷" },
  { name: "Marrocos", flag: "🇲🇦" },
  { name: "Escócia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
  { name: "Haiti", flag: "🇭🇹" },
];
