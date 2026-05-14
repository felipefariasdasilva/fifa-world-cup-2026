export interface WorldCupTeam {
  code: string;
  name: string;
  flag: string;
  group: string;
}

export interface WorldCupGroup {
  id: string;
  teams: WorldCupTeam[];
}

export interface WorldCupGame {
  id: number;
  group: string;
  matchday: number;
  dateUTC: string;
  displayDate: string;
  displayTime: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  stadium: string;
  city: string;
  country: string;
}

export const groups: WorldCupGroup[] = [
  {
    id: "A",
    teams: [
      { code: "MEX", name: "México", flag: "🇲🇽", group: "A" },
      { code: "RSA", name: "África do Sul", flag: "🇿🇦", group: "A" },
      { code: "KOR", name: "Coreia do Sul", flag: "🇰🇷", group: "A" },
      { code: "CZE", name: "Rep. Tcheca", flag: "🇨🇿", group: "A" },
    ],
  },
  {
    id: "B",
    teams: [
      { code: "CAN", name: "Canadá", flag: "🇨🇦", group: "B" },
      { code: "BIH", name: "Bósnia e Herzegovina", flag: "🇧🇦", group: "B" },
      { code: "QAT", name: "Catar", flag: "🇶🇦", group: "B" },
      { code: "SUI", name: "Suíça", flag: "🇨🇭", group: "B" },
    ],
  },
  {
    id: "C",
    teams: [
      { code: "BRA", name: "Brasil", flag: "🇧🇷", group: "C" },
      { code: "MAR", name: "Marrocos", flag: "🇲🇦", group: "C" },
      { code: "HAI", name: "Haiti", flag: "🇭🇹", group: "C" },
      { code: "SCO", name: "Escócia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "C" },
    ],
  },
  {
    id: "D",
    teams: [
      { code: "USA", name: "Estados Unidos", flag: "🇺🇸", group: "D" },
      { code: "PAR", name: "Paraguai", flag: "🇵🇾", group: "D" },
      { code: "AUS", name: "Austrália", flag: "🇦🇺", group: "D" },
      { code: "TUR", name: "Turquia", flag: "🇹🇷", group: "D" },
    ],
  },
  {
    id: "E",
    teams: [
      { code: "GER", name: "Alemanha", flag: "🇩🇪", group: "E" },
      { code: "CUW", name: "Curaçao", flag: "🇨🇼", group: "E" },
      { code: "CIV", name: "Costa do Marfim", flag: "🇨🇮", group: "E" },
      { code: "ECU", name: "Equador", flag: "🇪🇨", group: "E" },
    ],
  },
  {
    id: "F",
    teams: [
      { code: "NED", name: "Holanda", flag: "🇳🇱", group: "F" },
      { code: "JPN", name: "Japão", flag: "🇯🇵", group: "F" },
      { code: "SWE", name: "Suécia", flag: "🇸🇪", group: "F" },
      { code: "TUN", name: "Tunísia", flag: "🇹🇳", group: "F" },
    ],
  },
  {
    id: "G",
    teams: [
      { code: "BEL", name: "Bélgica", flag: "🇧🇪", group: "G" },
      { code: "EGY", name: "Egito", flag: "🇪🇬", group: "G" },
      { code: "IRN", name: "Irã", flag: "🇮🇷", group: "G" },
      { code: "NZL", name: "Nova Zelândia", flag: "🇳🇿", group: "G" },
    ],
  },
  {
    id: "H",
    teams: [
      { code: "ESP", name: "Espanha", flag: "🇪🇸", group: "H" },
      { code: "CPV", name: "Cabo Verde", flag: "🇨🇻", group: "H" },
      { code: "KSA", name: "Arábia Saudita", flag: "🇸🇦", group: "H" },
      { code: "URU", name: "Uruguai", flag: "🇺🇾", group: "H" },
    ],
  },
  {
    id: "I",
    teams: [
      { code: "FRA", name: "França", flag: "🇫🇷", group: "I" },
      { code: "SEN", name: "Senegal", flag: "🇸🇳", group: "I" },
      { code: "IRQ", name: "Iraque", flag: "🇮🇶", group: "I" },
      { code: "NOR", name: "Noruega", flag: "🇳🇴", group: "I" },
    ],
  },
  {
    id: "J",
    teams: [
      { code: "ARG", name: "Argentina", flag: "🇦🇷", group: "J" },
      { code: "ALG", name: "Argélia", flag: "🇩🇿", group: "J" },
      { code: "AUT", name: "Áustria", flag: "🇦🇹", group: "J" },
      { code: "JOR", name: "Jordânia", flag: "🇯🇴", group: "J" },
    ],
  },
  {
    id: "K",
    teams: [
      { code: "POR", name: "Portugal", flag: "🇵🇹", group: "K" },
      { code: "COD", name: "Rep. Dem. do Congo", flag: "🇨🇩", group: "K" },
      { code: "UZB", name: "Uzbequistão", flag: "🇺🇿", group: "K" },
      { code: "COL", name: "Colômbia", flag: "🇨🇴", group: "K" },
    ],
  },
  {
    id: "L",
    teams: [
      { code: "ENG", name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "L" },
      { code: "CRO", name: "Croácia", flag: "🇭🇷", group: "L" },
      { code: "GHA", name: "Gana", flag: "🇬🇭", group: "L" },
      { code: "PAN", name: "Panamá", flag: "🇵🇦", group: "L" },
    ],
  },
];

export const allTeams: WorldCupTeam[] = groups.flatMap((g) => g.teams);

export const teamByCode = Object.fromEntries(
  allTeams.map((t) => [t.code, t])
);

export const games: WorldCupGame[] = [
  // ── GRUPO A ─────────────────────────────────────────────────────────────
  {
    id: 1, group: "A", matchday: 1,
    dateUTC: "2026-06-11T19:00:00Z",
    displayDate: "11 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "México", awayTeam: "África do Sul",
    homeFlag: "🇲🇽", awayFlag: "🇿🇦",
    stadium: "Estadio Azteca", city: "Cidade do México", country: "México",
  },
  {
    id: 2, group: "A", matchday: 1,
    dateUTC: "2026-06-12T02:00:00Z",
    displayDate: "11 de junho de 2026", displayTime: "23h00 (BRT)",
    homeTeam: "Coreia do Sul", awayTeam: "Rep. Tcheca",
    homeFlag: "🇰🇷", awayFlag: "🇨🇿",
    stadium: "Estadio Akron", city: "Guadalajara", country: "México",
  },
  {
    id: 3, group: "A", matchday: 2,
    dateUTC: "2026-06-18T16:00:00Z",
    displayDate: "18 de junho de 2026", displayTime: "13h00 (BRT)",
    homeTeam: "Rep. Tcheca", awayTeam: "África do Sul",
    homeFlag: "🇨🇿", awayFlag: "🇿🇦",
    stadium: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA",
  },
  {
    id: 4, group: "A", matchday: 2,
    dateUTC: "2026-06-19T01:00:00Z",
    displayDate: "18 de junho de 2026", displayTime: "22h00 (BRT)",
    homeTeam: "México", awayTeam: "Coreia do Sul",
    homeFlag: "🇲🇽", awayFlag: "🇰🇷",
    stadium: "Estadio Akron", city: "Guadalajara", country: "México",
  },
  {
    id: 5, group: "A", matchday: 3,
    dateUTC: "2026-06-25T01:00:00Z",
    displayDate: "24 de junho de 2026", displayTime: "22h00 (BRT)",
    homeTeam: "Rep. Tcheca", awayTeam: "México",
    homeFlag: "🇨🇿", awayFlag: "🇲🇽",
    stadium: "Estadio Azteca", city: "Cidade do México", country: "México",
  },
  {
    id: 6, group: "A", matchday: 3,
    dateUTC: "2026-06-25T01:00:00Z",
    displayDate: "24 de junho de 2026", displayTime: "22h00 (BRT)",
    homeTeam: "África do Sul", awayTeam: "Coreia do Sul",
    homeFlag: "🇿🇦", awayFlag: "🇰🇷",
    stadium: "Estadio BBVA", city: "Monterrey", country: "México",
  },

  // ── GRUPO B ─────────────────────────────────────────────────────────────
  {
    id: 7, group: "B", matchday: 1,
    dateUTC: "2026-06-12T19:00:00Z",
    displayDate: "12 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Canadá", awayTeam: "Bósnia e Herzegovina",
    homeFlag: "🇨🇦", awayFlag: "🇧🇦",
    stadium: "BMO Field", city: "Toronto", country: "Canadá",
  },
  {
    id: 8, group: "B", matchday: 1,
    dateUTC: "2026-06-13T19:00:00Z",
    displayDate: "13 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Catar", awayTeam: "Suíça",
    homeFlag: "🇶🇦", awayFlag: "🇨🇭",
    stadium: "Levi's Stadium", city: "Santa Clara", country: "EUA",
  },
  {
    id: 9, group: "B", matchday: 2,
    dateUTC: "2026-06-18T19:00:00Z",
    displayDate: "18 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Suíça", awayTeam: "Bósnia e Herzegovina",
    homeFlag: "🇨🇭", awayFlag: "🇧🇦",
    stadium: "SoFi Stadium", city: "Los Angeles", country: "EUA",
  },
  {
    id: 10, group: "B", matchday: 2,
    dateUTC: "2026-06-18T22:00:00Z",
    displayDate: "18 de junho de 2026", displayTime: "19h00 (BRT)",
    homeTeam: "Canadá", awayTeam: "Catar",
    homeFlag: "🇨🇦", awayFlag: "🇶🇦",
    stadium: "BC Place", city: "Vancouver", country: "Canadá",
  },
  {
    id: 11, group: "B", matchday: 3,
    dateUTC: "2026-06-24T19:00:00Z",
    displayDate: "24 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Suíça", awayTeam: "Canadá",
    homeFlag: "🇨🇭", awayFlag: "🇨🇦",
    stadium: "BC Place", city: "Vancouver", country: "Canadá",
  },
  {
    id: 12, group: "B", matchday: 3,
    dateUTC: "2026-06-24T19:00:00Z",
    displayDate: "24 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Bósnia e Herzegovina", awayTeam: "Catar",
    homeFlag: "🇧🇦", awayFlag: "🇶🇦",
    stadium: "Lumen Field", city: "Seattle", country: "EUA",
  },

  // ── GRUPO C ─────────────────────────────────────────────────────────────
  {
    id: 13, group: "C", matchday: 1,
    dateUTC: "2026-06-13T22:00:00Z",
    displayDate: "13 de junho de 2026", displayTime: "19h00 (BRT)",
    homeTeam: "Brasil", awayTeam: "Marrocos",
    homeFlag: "🇧🇷", awayFlag: "🇲🇦",
    stadium: "MetLife Stadium", city: "East Rutherford", country: "EUA",
  },
  {
    id: 14, group: "C", matchday: 1,
    dateUTC: "2026-06-14T01:00:00Z",
    displayDate: "13 de junho de 2026", displayTime: "22h00 (BRT)",
    homeTeam: "Haiti", awayTeam: "Escócia",
    homeFlag: "🇭🇹", awayFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    stadium: "Gillette Stadium", city: "Foxborough", country: "EUA",
  },
  {
    id: 15, group: "C", matchday: 2,
    dateUTC: "2026-06-20T00:30:00Z",
    displayDate: "19 de junho de 2026", displayTime: "21h30 (BRT)",
    homeTeam: "Brasil", awayTeam: "Haiti",
    homeFlag: "🇧🇷", awayFlag: "🇭🇹",
    stadium: "Lincoln Financial Field", city: "Philadelphia", country: "EUA",
  },
  {
    id: 16, group: "C", matchday: 2,
    dateUTC: "2026-06-19T22:00:00Z",
    displayDate: "19 de junho de 2026", displayTime: "19h00 (BRT)",
    homeTeam: "Escócia", awayTeam: "Marrocos",
    homeFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", awayFlag: "🇲🇦",
    stadium: "Gillette Stadium", city: "Foxborough", country: "EUA",
  },
  {
    id: 17, group: "C", matchday: 3,
    dateUTC: "2026-06-24T22:00:00Z",
    displayDate: "24 de junho de 2026", displayTime: "19h00 (BRT)",
    homeTeam: "Escócia", awayTeam: "Brasil",
    homeFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", awayFlag: "🇧🇷",
    stadium: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA",
  },
  {
    id: 18, group: "C", matchday: 3,
    dateUTC: "2026-06-24T22:00:00Z",
    displayDate: "24 de junho de 2026", displayTime: "19h00 (BRT)",
    homeTeam: "Marrocos", awayTeam: "Haiti",
    homeFlag: "🇲🇦", awayFlag: "🇭🇹",
    stadium: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA",
  },

  // ── GRUPO D ─────────────────────────────────────────────────────────────
  {
    id: 19, group: "D", matchday: 1,
    dateUTC: "2026-06-13T01:00:00Z",
    displayDate: "12 de junho de 2026", displayTime: "22h00 (BRT)",
    homeTeam: "Estados Unidos", awayTeam: "Paraguai",
    homeFlag: "🇺🇸", awayFlag: "🇵🇾",
    stadium: "SoFi Stadium", city: "Los Angeles", country: "EUA",
  },
  {
    id: 20, group: "D", matchday: 1,
    dateUTC: "2026-06-13T04:00:00Z",
    displayDate: "13 de junho de 2026", displayTime: "01h00 (BRT)",
    homeTeam: "Austrália", awayTeam: "Turquia",
    homeFlag: "🇦🇺", awayFlag: "🇹🇷",
    stadium: "BC Place", city: "Vancouver", country: "Canadá",
  },
  {
    id: 21, group: "D", matchday: 2,
    dateUTC: "2026-06-19T19:00:00Z",
    displayDate: "19 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Estados Unidos", awayTeam: "Austrália",
    homeFlag: "🇺🇸", awayFlag: "🇦🇺",
    stadium: "Lumen Field", city: "Seattle", country: "EUA",
  },
  {
    id: 22, group: "D", matchday: 2,
    dateUTC: "2026-06-20T03:00:00Z",
    displayDate: "20 de junho de 2026", displayTime: "00h00 (BRT)",
    homeTeam: "Turquia", awayTeam: "Paraguai",
    homeFlag: "🇹🇷", awayFlag: "🇵🇾",
    stadium: "Levi's Stadium", city: "Santa Clara", country: "EUA",
  },
  {
    id: 23, group: "D", matchday: 3,
    dateUTC: "2026-06-26T02:00:00Z",
    displayDate: "25 de junho de 2026", displayTime: "23h00 (BRT)",
    homeTeam: "Turquia", awayTeam: "Estados Unidos",
    homeFlag: "🇹🇷", awayFlag: "🇺🇸",
    stadium: "SoFi Stadium", city: "Los Angeles", country: "EUA",
  },
  {
    id: 24, group: "D", matchday: 3,
    dateUTC: "2026-06-26T02:00:00Z",
    displayDate: "25 de junho de 2026", displayTime: "23h00 (BRT)",
    homeTeam: "Paraguai", awayTeam: "Austrália",
    homeFlag: "🇵🇾", awayFlag: "🇦🇺",
    stadium: "Levi's Stadium", city: "Santa Clara", country: "EUA",
  },

  // ── GRUPO E ─────────────────────────────────────────────────────────────
  {
    id: 25, group: "E", matchday: 1,
    dateUTC: "2026-06-14T17:00:00Z",
    displayDate: "14 de junho de 2026", displayTime: "14h00 (BRT)",
    homeTeam: "Alemanha", awayTeam: "Curaçao",
    homeFlag: "🇩🇪", awayFlag: "🇨🇼",
    stadium: "NRG Stadium", city: "Houston", country: "EUA",
  },
  {
    id: 26, group: "E", matchday: 1,
    dateUTC: "2026-06-14T23:00:00Z",
    displayDate: "14 de junho de 2026", displayTime: "20h00 (BRT)",
    homeTeam: "Costa do Marfim", awayTeam: "Equador",
    homeFlag: "🇨🇮", awayFlag: "🇪🇨",
    stadium: "Lincoln Financial Field", city: "Philadelphia", country: "EUA",
  },
  {
    id: 27, group: "E", matchday: 2,
    dateUTC: "2026-06-20T20:00:00Z",
    displayDate: "20 de junho de 2026", displayTime: "17h00 (BRT)",
    homeTeam: "Alemanha", awayTeam: "Costa do Marfim",
    homeFlag: "🇩🇪", awayFlag: "🇨🇮",
    stadium: "BMO Field", city: "Toronto", country: "Canadá",
  },
  {
    id: 28, group: "E", matchday: 2,
    dateUTC: "2026-06-21T00:00:00Z",
    displayDate: "20 de junho de 2026", displayTime: "21h00 (BRT)",
    homeTeam: "Equador", awayTeam: "Curaçao",
    homeFlag: "🇪🇨", awayFlag: "🇨🇼",
    stadium: "Arrowhead Stadium", city: "Kansas City", country: "EUA",
  },
  {
    id: 29, group: "E", matchday: 3,
    dateUTC: "2026-06-25T20:00:00Z",
    displayDate: "25 de junho de 2026", displayTime: "17h00 (BRT)",
    homeTeam: "Curaçao", awayTeam: "Costa do Marfim",
    homeFlag: "🇨🇼", awayFlag: "🇨🇮",
    stadium: "Lincoln Financial Field", city: "Philadelphia", country: "EUA",
  },
  {
    id: 30, group: "E", matchday: 3,
    dateUTC: "2026-06-25T20:00:00Z",
    displayDate: "25 de junho de 2026", displayTime: "17h00 (BRT)",
    homeTeam: "Equador", awayTeam: "Alemanha",
    homeFlag: "🇪🇨", awayFlag: "🇩🇪",
    stadium: "MetLife Stadium", city: "East Rutherford", country: "EUA",
  },

  // ── GRUPO F ─────────────────────────────────────────────────────────────
  {
    id: 31, group: "F", matchday: 1,
    dateUTC: "2026-06-14T20:00:00Z",
    displayDate: "14 de junho de 2026", displayTime: "17h00 (BRT)",
    homeTeam: "Holanda", awayTeam: "Japão",
    homeFlag: "🇳🇱", awayFlag: "🇯🇵",
    stadium: "AT&T Stadium", city: "Arlington", country: "EUA",
  },
  {
    id: 32, group: "F", matchday: 1,
    dateUTC: "2026-06-15T02:00:00Z",
    displayDate: "14 de junho de 2026", displayTime: "23h00 (BRT)",
    homeTeam: "Suécia", awayTeam: "Tunísia",
    homeFlag: "🇸🇪", awayFlag: "🇹🇳",
    stadium: "Estadio BBVA", city: "Monterrey", country: "México",
  },
  {
    id: 33, group: "F", matchday: 2,
    dateUTC: "2026-06-20T17:00:00Z",
    displayDate: "20 de junho de 2026", displayTime: "14h00 (BRT)",
    homeTeam: "Holanda", awayTeam: "Suécia",
    homeFlag: "🇳🇱", awayFlag: "🇸🇪",
    stadium: "NRG Stadium", city: "Houston", country: "EUA",
  },
  {
    id: 34, group: "F", matchday: 2,
    dateUTC: "2026-06-20T04:00:00Z",
    displayDate: "20 de junho de 2026", displayTime: "01h00 (BRT)",
    homeTeam: "Tunísia", awayTeam: "Japão",
    homeFlag: "🇹🇳", awayFlag: "🇯🇵",
    stadium: "Estadio BBVA", city: "Monterrey", country: "México",
  },
  {
    id: 35, group: "F", matchday: 3,
    dateUTC: "2026-06-25T23:00:00Z",
    displayDate: "25 de junho de 2026", displayTime: "20h00 (BRT)",
    homeTeam: "Japão", awayTeam: "Suécia",
    homeFlag: "🇯🇵", awayFlag: "🇸🇪",
    stadium: "AT&T Stadium", city: "Arlington", country: "EUA",
  },
  {
    id: 36, group: "F", matchday: 3,
    dateUTC: "2026-06-25T23:00:00Z",
    displayDate: "25 de junho de 2026", displayTime: "20h00 (BRT)",
    homeTeam: "Tunísia", awayTeam: "Holanda",
    homeFlag: "🇹🇳", awayFlag: "🇳🇱",
    stadium: "Arrowhead Stadium", city: "Kansas City", country: "EUA",
  },

  // ── GRUPO G ─────────────────────────────────────────────────────────────
  {
    id: 37, group: "G", matchday: 1,
    dateUTC: "2026-06-15T19:00:00Z",
    displayDate: "15 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Bélgica", awayTeam: "Egito",
    homeFlag: "🇧🇪", awayFlag: "🇪🇬",
    stadium: "Lumen Field", city: "Seattle", country: "EUA",
  },
  {
    id: 38, group: "G", matchday: 1,
    dateUTC: "2026-06-16T01:00:00Z",
    displayDate: "15 de junho de 2026", displayTime: "22h00 (BRT)",
    homeTeam: "Irã", awayTeam: "Nova Zelândia",
    homeFlag: "🇮🇷", awayFlag: "🇳🇿",
    stadium: "SoFi Stadium", city: "Los Angeles", country: "EUA",
  },
  {
    id: 39, group: "G", matchday: 2,
    dateUTC: "2026-06-21T19:00:00Z",
    displayDate: "21 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Bélgica", awayTeam: "Irã",
    homeFlag: "🇧🇪", awayFlag: "🇮🇷",
    stadium: "SoFi Stadium", city: "Los Angeles", country: "EUA",
  },
  {
    id: 40, group: "G", matchday: 2,
    dateUTC: "2026-06-22T01:00:00Z",
    displayDate: "21 de junho de 2026", displayTime: "22h00 (BRT)",
    homeTeam: "Nova Zelândia", awayTeam: "Egito",
    homeFlag: "🇳🇿", awayFlag: "🇪🇬",
    stadium: "BC Place", city: "Vancouver", country: "Canadá",
  },
  {
    id: 41, group: "G", matchday: 3,
    dateUTC: "2026-06-27T03:00:00Z",
    displayDate: "27 de junho de 2026", displayTime: "00h00 (BRT)",
    homeTeam: "Egito", awayTeam: "Irã",
    homeFlag: "🇪🇬", awayFlag: "🇮🇷",
    stadium: "Lumen Field", city: "Seattle", country: "EUA",
  },
  {
    id: 42, group: "G", matchday: 3,
    dateUTC: "2026-06-27T03:00:00Z",
    displayDate: "27 de junho de 2026", displayTime: "00h00 (BRT)",
    homeTeam: "Nova Zelândia", awayTeam: "Bélgica",
    homeFlag: "🇳🇿", awayFlag: "🇧🇪",
    stadium: "BC Place", city: "Vancouver", country: "Canadá",
  },

  // ── GRUPO H ─────────────────────────────────────────────────────────────
  {
    id: 43, group: "H", matchday: 1,
    dateUTC: "2026-06-15T16:00:00Z",
    displayDate: "15 de junho de 2026", displayTime: "13h00 (BRT)",
    homeTeam: "Espanha", awayTeam: "Cabo Verde",
    homeFlag: "🇪🇸", awayFlag: "🇨🇻",
    stadium: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA",
  },
  {
    id: 44, group: "H", matchday: 1,
    dateUTC: "2026-06-15T22:00:00Z",
    displayDate: "15 de junho de 2026", displayTime: "19h00 (BRT)",
    homeTeam: "Arábia Saudita", awayTeam: "Uruguai",
    homeFlag: "🇸🇦", awayFlag: "🇺🇾",
    stadium: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA",
  },
  {
    id: 45, group: "H", matchday: 2,
    dateUTC: "2026-06-21T16:00:00Z",
    displayDate: "21 de junho de 2026", displayTime: "13h00 (BRT)",
    homeTeam: "Espanha", awayTeam: "Arábia Saudita",
    homeFlag: "🇪🇸", awayFlag: "🇸🇦",
    stadium: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA",
  },
  {
    id: 46, group: "H", matchday: 2,
    dateUTC: "2026-06-21T22:00:00Z",
    displayDate: "21 de junho de 2026", displayTime: "19h00 (BRT)",
    homeTeam: "Uruguai", awayTeam: "Cabo Verde",
    homeFlag: "🇺🇾", awayFlag: "🇨🇻",
    stadium: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA",
  },
  {
    id: 47, group: "H", matchday: 3,
    dateUTC: "2026-06-27T00:00:00Z",
    displayDate: "26 de junho de 2026", displayTime: "21h00 (BRT)",
    homeTeam: "Uruguai", awayTeam: "Espanha",
    homeFlag: "🇺🇾", awayFlag: "🇪🇸",
    stadium: "Estadio Akron", city: "Guadalajara", country: "México",
  },
  {
    id: 48, group: "H", matchday: 3,
    dateUTC: "2026-06-27T00:00:00Z",
    displayDate: "26 de junho de 2026", displayTime: "21h00 (BRT)",
    homeTeam: "Cabo Verde", awayTeam: "Arábia Saudita",
    homeFlag: "🇨🇻", awayFlag: "🇸🇦",
    stadium: "NRG Stadium", city: "Houston", country: "EUA",
  },

  // ── GRUPO I ─────────────────────────────────────────────────────────────
  {
    id: 49, group: "I", matchday: 1,
    dateUTC: "2026-06-16T19:00:00Z",
    displayDate: "16 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "França", awayTeam: "Senegal",
    homeFlag: "🇫🇷", awayFlag: "🇸🇳",
    stadium: "MetLife Stadium", city: "East Rutherford", country: "EUA",
  },
  {
    id: 50, group: "I", matchday: 1,
    dateUTC: "2026-06-16T22:00:00Z",
    displayDate: "16 de junho de 2026", displayTime: "19h00 (BRT)",
    homeTeam: "Iraque", awayTeam: "Noruega",
    homeFlag: "🇮🇶", awayFlag: "🇳🇴",
    stadium: "Gillette Stadium", city: "Foxborough", country: "EUA",
  },
  {
    id: 51, group: "I", matchday: 2,
    dateUTC: "2026-06-22T21:00:00Z",
    displayDate: "22 de junho de 2026", displayTime: "18h00 (BRT)",
    homeTeam: "França", awayTeam: "Iraque",
    homeFlag: "🇫🇷", awayFlag: "🇮🇶",
    stadium: "Lincoln Financial Field", city: "Philadelphia", country: "EUA",
  },
  {
    id: 52, group: "I", matchday: 2,
    dateUTC: "2026-06-23T00:00:00Z",
    displayDate: "22 de junho de 2026", displayTime: "21h00 (BRT)",
    homeTeam: "Noruega", awayTeam: "Senegal",
    homeFlag: "🇳🇴", awayFlag: "🇸🇳",
    stadium: "MetLife Stadium", city: "East Rutherford", country: "EUA",
  },
  {
    id: 53, group: "I", matchday: 3,
    dateUTC: "2026-06-26T19:00:00Z",
    displayDate: "26 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Noruega", awayTeam: "França",
    homeFlag: "🇳🇴", awayFlag: "🇫🇷",
    stadium: "Gillette Stadium", city: "Foxborough", country: "EUA",
  },
  {
    id: 54, group: "I", matchday: 3,
    dateUTC: "2026-06-26T19:00:00Z",
    displayDate: "26 de junho de 2026", displayTime: "16h00 (BRT)",
    homeTeam: "Senegal", awayTeam: "Iraque",
    homeFlag: "🇸🇳", awayFlag: "🇮🇶",
    stadium: "BMO Field", city: "Toronto", country: "Canadá",
  },

  // ── GRUPO J ─────────────────────────────────────────────────────────────
  {
    id: 55, group: "J", matchday: 1,
    dateUTC: "2026-06-17T01:00:00Z",
    displayDate: "16 de junho de 2026", displayTime: "22h00 (BRT)",
    homeTeam: "Argentina", awayTeam: "Argélia",
    homeFlag: "🇦🇷", awayFlag: "🇩🇿",
    stadium: "Arrowhead Stadium", city: "Kansas City", country: "EUA",
  },
  {
    id: 56, group: "J", matchday: 1,
    dateUTC: "2026-06-16T04:00:00Z",
    displayDate: "16 de junho de 2026", displayTime: "01h00 (BRT)",
    homeTeam: "Áustria", awayTeam: "Jordânia",
    homeFlag: "🇦🇹", awayFlag: "🇯🇴",
    stadium: "Levi's Stadium", city: "Santa Clara", country: "EUA",
  },
  {
    id: 57, group: "J", matchday: 2,
    dateUTC: "2026-06-22T17:00:00Z",
    displayDate: "22 de junho de 2026", displayTime: "14h00 (BRT)",
    homeTeam: "Argentina", awayTeam: "Áustria",
    homeFlag: "🇦🇷", awayFlag: "🇦🇹",
    stadium: "AT&T Stadium", city: "Arlington", country: "EUA",
  },
  {
    id: 58, group: "J", matchday: 2,
    dateUTC: "2026-06-23T03:00:00Z",
    displayDate: "23 de junho de 2026", displayTime: "00h00 (BRT)",
    homeTeam: "Jordânia", awayTeam: "Argélia",
    homeFlag: "🇯🇴", awayFlag: "🇩🇿",
    stadium: "Levi's Stadium", city: "Santa Clara", country: "EUA",
  },
  {
    id: 59, group: "J", matchday: 3,
    dateUTC: "2026-06-28T02:00:00Z",
    displayDate: "27 de junho de 2026", displayTime: "23h00 (BRT)",
    homeTeam: "Argélia", awayTeam: "Áustria",
    homeFlag: "🇩🇿", awayFlag: "🇦🇹",
    stadium: "Arrowhead Stadium", city: "Kansas City", country: "EUA",
  },
  {
    id: 60, group: "J", matchday: 3,
    dateUTC: "2026-06-28T02:00:00Z",
    displayDate: "27 de junho de 2026", displayTime: "23h00 (BRT)",
    homeTeam: "Jordânia", awayTeam: "Argentina",
    homeFlag: "🇯🇴", awayFlag: "🇦🇷",
    stadium: "AT&T Stadium", city: "Arlington", country: "EUA",
  },

  // ── GRUPO K ─────────────────────────────────────────────────────────────
  {
    id: 61, group: "K", matchday: 1,
    dateUTC: "2026-06-17T17:00:00Z",
    displayDate: "17 de junho de 2026", displayTime: "14h00 (BRT)",
    homeTeam: "Portugal", awayTeam: "Rep. Dem. do Congo",
    homeFlag: "🇵🇹", awayFlag: "🇨🇩",
    stadium: "NRG Stadium", city: "Houston", country: "EUA",
  },
  {
    id: 62, group: "K", matchday: 1,
    dateUTC: "2026-06-18T02:00:00Z",
    displayDate: "17 de junho de 2026", displayTime: "23h00 (BRT)",
    homeTeam: "Uzbequistão", awayTeam: "Colômbia",
    homeFlag: "🇺🇿", awayFlag: "🇨🇴",
    stadium: "Estadio Azteca", city: "Cidade do México", country: "México",
  },
  {
    id: 63, group: "K", matchday: 2,
    dateUTC: "2026-06-23T17:00:00Z",
    displayDate: "23 de junho de 2026", displayTime: "14h00 (BRT)",
    homeTeam: "Portugal", awayTeam: "Uzbequistão",
    homeFlag: "🇵🇹", awayFlag: "🇺🇿",
    stadium: "NRG Stadium", city: "Houston", country: "EUA",
  },
  {
    id: 64, group: "K", matchday: 2,
    dateUTC: "2026-06-24T02:00:00Z",
    displayDate: "23 de junho de 2026", displayTime: "23h00 (BRT)",
    homeTeam: "Colômbia", awayTeam: "Rep. Dem. do Congo",
    homeFlag: "🇨🇴", awayFlag: "🇨🇩",
    stadium: "Estadio Akron", city: "Guadalajara", country: "México",
  },
  {
    id: 65, group: "K", matchday: 3,
    dateUTC: "2026-06-27T23:30:00Z",
    displayDate: "27 de junho de 2026", displayTime: "20h30 (BRT)",
    homeTeam: "Colômbia", awayTeam: "Portugal",
    homeFlag: "🇨🇴", awayFlag: "🇵🇹",
    stadium: "Hard Rock Stadium", city: "Miami Gardens", country: "EUA",
  },
  {
    id: 66, group: "K", matchday: 3,
    dateUTC: "2026-06-27T23:30:00Z",
    displayDate: "27 de junho de 2026", displayTime: "20h30 (BRT)",
    homeTeam: "Rep. Dem. do Congo", awayTeam: "Uzbequistão",
    homeFlag: "🇨🇩", awayFlag: "🇺🇿",
    stadium: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA",
  },

  // ── GRUPO L ─────────────────────────────────────────────────────────────
  {
    id: 67, group: "L", matchday: 1,
    dateUTC: "2026-06-17T20:00:00Z",
    displayDate: "17 de junho de 2026", displayTime: "17h00 (BRT)",
    homeTeam: "Inglaterra", awayTeam: "Croácia",
    homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayFlag: "🇭🇷",
    stadium: "AT&T Stadium", city: "Arlington", country: "EUA",
  },
  {
    id: 68, group: "L", matchday: 1,
    dateUTC: "2026-06-17T23:00:00Z",
    displayDate: "17 de junho de 2026", displayTime: "20h00 (BRT)",
    homeTeam: "Gana", awayTeam: "Panamá",
    homeFlag: "🇬🇭", awayFlag: "🇵🇦",
    stadium: "BMO Field", city: "Toronto", country: "Canadá",
  },
  {
    id: 69, group: "L", matchday: 2,
    dateUTC: "2026-06-23T20:00:00Z",
    displayDate: "23 de junho de 2026", displayTime: "17h00 (BRT)",
    homeTeam: "Inglaterra", awayTeam: "Gana",
    homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayFlag: "🇬🇭",
    stadium: "Gillette Stadium", city: "Foxborough", country: "EUA",
  },
  {
    id: 70, group: "L", matchday: 2,
    dateUTC: "2026-06-23T23:00:00Z",
    displayDate: "23 de junho de 2026", displayTime: "20h00 (BRT)",
    homeTeam: "Panamá", awayTeam: "Croácia",
    homeFlag: "🇵🇦", awayFlag: "🇭🇷",
    stadium: "BMO Field", city: "Toronto", country: "Canadá",
  },
  {
    id: 71, group: "L", matchday: 3,
    dateUTC: "2026-06-27T21:00:00Z",
    displayDate: "27 de junho de 2026", displayTime: "18h00 (BRT)",
    homeTeam: "Panamá", awayTeam: "Inglaterra",
    homeFlag: "🇵🇦", awayFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    stadium: "MetLife Stadium", city: "East Rutherford", country: "EUA",
  },
  {
    id: 72, group: "L", matchday: 3,
    dateUTC: "2026-06-27T21:00:00Z",
    displayDate: "27 de junho de 2026", displayTime: "18h00 (BRT)",
    homeTeam: "Croácia", awayTeam: "Gana",
    homeFlag: "🇭🇷", awayFlag: "🇬🇭",
    stadium: "Lincoln Financial Field", city: "Philadelphia", country: "EUA",
  },
];

export function getGamesByTeam(teamName: string): WorldCupGame[] {
  return games.filter(
    (g) => g.homeTeam === teamName || g.awayTeam === teamName
  );
}

export function getGamesByGroup(groupId: string): WorldCupGame[] {
  return games.filter((g) => g.group === groupId);
}
