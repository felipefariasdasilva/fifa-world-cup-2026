export interface PlayerDetail {
  name: string;
  fullName: string;
  dateOfBirth: string; // YYYY-MM-DD
  height: number | null; // cm
  weight: number | null; // kg
  nationality: string;
  positionDetail: string;
  clubJoinYear: number | null;
  caps: number | null; // convocações pela Seleção
  seasonGoals: number | null; // gols na temporada 24/25
  espnTeamId: string;
  espnLeague: string;
}

export const playerDetails: Record<string, PlayerDetail> = {
  // ── GOLEIROS ────────────────────────────────────────────────────────────
  Alisson: {
    name: "Alisson", fullName: "Alisson Ramses Becker",
    dateOfBirth: "1992-10-02", height: 191, weight: 91,
    nationality: "Brasileiro", positionDetail: "Goleiro",
    clubJoinYear: 2018, caps: 73, seasonGoals: 0,
    espnTeamId: "364", espnLeague: "eng.1",
  },
  "Ederson_Fenerbahçe": {
    name: "Ederson", fullName: "Ederson Santana de Moraes",
    dateOfBirth: "1993-08-17", height: 188, weight: 86,
    nationality: "Brasileiro", positionDetail: "Goleiro",
    clubJoinYear: 2024, caps: 24, seasonGoals: 0,
    espnTeamId: "436", espnLeague: "tur.1",
  },
  Weverton: {
    name: "Weverton", fullName: "Weverton Pereira Alves",
    dateOfBirth: "1987-12-13", height: 185, weight: 83,
    nationality: "Brasileiro", positionDetail: "Goleiro",
    clubJoinYear: 2025, caps: 21, seasonGoals: 0,
    espnTeamId: "6273", espnLeague: "bra.1",
  },
  // ── DEFENSORES ───────────────────────────────────────────────────────────
  Marquinhos: {
    name: "Marquinhos", fullName: "Marcos Aoás Corrêa",
    dateOfBirth: "1994-05-14", height: 183, weight: 75,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2013, caps: 80, seasonGoals: 2,
    espnTeamId: "160", espnLeague: "fra.1",
  },
  "Gabriel Magalhães": {
    name: "Gabriel Magalhães", fullName: "Gabriel dos Santos Magalhães",
    dateOfBirth: "1997-12-19", height: 191, weight: 83,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2020, caps: 20, seasonGoals: 4,
    espnTeamId: "359", espnLeague: "eng.1",
  },
  Bremer: {
    name: "Bremer", fullName: "Gleison Bremer Silva Nascimento",
    dateOfBirth: "1997-03-18", height: 188, weight: 83,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2022, caps: 13, seasonGoals: 1,
    espnTeamId: "111", espnLeague: "ita.1",
  },
  "Ibañez": {
    name: "Ibañez", fullName: "Arthur Cabral Ibanez",
    dateOfBirth: "1998-02-01", height: 185, weight: 80,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2023, caps: 6, seasonGoals: 1,
    espnTeamId: "8346", espnLeague: "ksa.1",
  },
  "Leo Pereira": {
    name: "Leo Pereira", fullName: "Leonardo Pereira da Silva",
    dateOfBirth: "1996-08-30", height: 188, weight: 84,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2022, caps: 3, seasonGoals: 2,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  Wesley: {
    name: "Wesley", fullName: "Wesley Andrade Gassova",
    dateOfBirth: "2003-11-26", height: 181, weight: 72,
    nationality: "Brasileiro", positionDetail: "Lateral-direito",
    clubJoinYear: 2024, caps: 3, seasonGoals: 2,
    espnTeamId: "104", espnLeague: "ita.1",
  },
  "Alex Sandro": {
    name: "Alex Sandro", fullName: "Alex Sandro Lobo Silva",
    dateOfBirth: "1991-01-26", height: 181, weight: 75,
    nationality: "Brasileiro", positionDetail: "Lateral-esquerdo",
    clubJoinYear: 2025, caps: 50, seasonGoals: 1,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  "Douglas Santos": {
    name: "Douglas Santos", fullName: "Douglas Willian Santos de Oliveira",
    dateOfBirth: "1994-01-07", height: 175, weight: 72,
    nationality: "Brasileiro", positionDetail: "Lateral-esquerdo",
    clubJoinYear: 2022, caps: 4, seasonGoals: 1,
    espnTeamId: "2533", espnLeague: "rus.1",
  },
  Danilo: {
    name: "Danilo", fullName: "Danilo Luiz da Silva",
    dateOfBirth: "1991-07-15", height: 183, weight: 82,
    nationality: "Brasileiro", positionDetail: "Lateral-direito",
    clubJoinYear: 2023, caps: 48, seasonGoals: 1,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  // ── MEIO-CAMPO ──────────────────────────────────────────────────────────
  Casemiro: {
    name: "Casemiro", fullName: "Carlos Henrique Casimiro",
    dateOfBirth: "1992-02-23", height: 185, weight: 84,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2022, caps: 82, seasonGoals: 3,
    espnTeamId: "360", espnLeague: "eng.1",
  },
  "Bruno Guimarães": {
    name: "Bruno Guimarães", fullName: "Bruno Guimarães Rodriguez Moura",
    dateOfBirth: "1997-11-16", height: 183, weight: 80,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2022, caps: 46, seasonGoals: 7,
    espnTeamId: "361", espnLeague: "eng.1",
  },
  "Danilo_Botafogo": {
    name: "Danilo", fullName: "Danilo Barbosa da Silva",
    dateOfBirth: "1996-07-28", height: 188, weight: 78,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2024, caps: 8, seasonGoals: 2,
    espnTeamId: "6086", espnLeague: "bra.1",
  },
  "Lucas Paquetá": {
    name: "Lucas Paquetá", fullName: "Lucas Tolentino Coelho de Lima",
    dateOfBirth: "1997-08-27", height: 180, weight: 72,
    nationality: "Brasileiro", positionDetail: "Meia",
    clubJoinYear: 2025, caps: 55, seasonGoals: 4,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  Fabinho: {
    name: "Fabinho", fullName: "Fábio Henrique Tavares",
    dateOfBirth: "1993-10-23", height: 188, weight: 78,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2023, caps: 40, seasonGoals: 2,
    espnTeamId: "2276", espnLeague: "ksa.1",
  },
  // ── ATACANTES ────────────────────────────────────────────────────────────
  Raphinha: {
    name: "Raphinha", fullName: "Raphael Dias Belloli",
    dateOfBirth: "1996-12-14", height: 176, weight: 67,
    nationality: "Brasileiro", positionDetail: "Ponta-direita",
    clubJoinYear: 2022, caps: 51, seasonGoals: 18,
    espnTeamId: "83", espnLeague: "esp.1",
  },
  "Vini Jr": {
    name: "Vini Jr", fullName: "Vinícius José Paixão de Oliveira Júnior",
    dateOfBirth: "2000-07-12", height: 176, weight: 73,
    nationality: "Brasileiro", positionDetail: "Ponta-esquerda",
    clubJoinYear: 2018, caps: 102, seasonGoals: 22,
    espnTeamId: "86", espnLeague: "esp.1",
  },
  "Luiz Henrique": {
    name: "Luiz Henrique", fullName: "Luiz Henrique Moreira Castilho",
    dateOfBirth: "2001-08-14", height: 177, weight: 68,
    nationality: "Brasileiro", positionDetail: "Ponta-esquerda",
    clubJoinYear: 2023, caps: 7, seasonGoals: 8,
    espnTeamId: "2533", espnLeague: "rus.1",
  },
  "Gabriel Martinelli": {
    name: "Gabriel Martinelli", fullName: "Gabriel Silva Martinelli",
    dateOfBirth: "2001-06-18", height: 177, weight: 75,
    nationality: "Brasileiro", positionDetail: "Ponta-esquerda",
    clubJoinYear: 2019, caps: 33, seasonGoals: 9,
    espnTeamId: "359", espnLeague: "eng.1",
  },
  Neymar: {
    name: "Neymar", fullName: "Neymar da Silva Santos Júnior",
    dateOfBirth: "1992-02-05", height: 175, weight: 68,
    nationality: "Brasileiro", positionDetail: "Atacante",
    clubJoinYear: 2024, caps: 128, seasonGoals: 3,
    espnTeamId: "2674", espnLeague: "bra.1",
  },
  Endrick: {
    name: "Endrick", fullName: "Endrick Felipe Moreira de Sousa",
    dateOfBirth: "2006-07-21", height: 174, weight: 76,
    nationality: "Brasileiro", positionDetail: "Centroavante",
    clubJoinYear: 2025, caps: 12, seasonGoals: 4,
    espnTeamId: "167", espnLeague: "fra.1",
  },
  "Matheus Cunha": {
    name: "Matheus Cunha", fullName: "Matheus Santos Carneiro da Cunha",
    dateOfBirth: "1999-06-27", height: 181, weight: 76,
    nationality: "Brasileiro", positionDetail: "Atacante",
    clubJoinYear: 2023, caps: 21, seasonGoals: 16,
    espnTeamId: "360", espnLeague: "eng.1",
  },
  Rayan: {
    name: "Rayan", fullName: "Rayan Luiz de Jesus Ferreira",
    dateOfBirth: "2005-02-14", height: 175, weight: 66,
    nationality: "Brasileiro", positionDetail: "Ponta",
    clubJoinYear: 2024, caps: 1, seasonGoals: 3,
    espnTeamId: "349", espnLeague: "eng.1",
  },
  "Igor Thiago": {
    name: "Igor Thiago", fullName: "Igor Thiago Oliveira Monteiro",
    dateOfBirth: "2001-02-01", height: 185, weight: 80,
    nationality: "Brasileiro", positionDetail: "Centroavante",
    clubJoinYear: 2024, caps: 3, seasonGoals: 7,
    espnTeamId: "337", espnLeague: "eng.1",
  },
};

// Some players share the same name — resolve by club
export function getPlayerDetail(name: string, club: string): PlayerDetail | null {
  if (name === "Danilo" && club === "Botafogo") return playerDetails["Danilo_Botafogo"] ?? null;
  if (name === "Ederson" && club === "Fenerbahçe") return playerDetails["Ederson_Fenerbahçe"] ?? null;
  return playerDetails[name] ?? null;
}

export function calcAge(dob: string): number {
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

export function formatDate(dob: string): string {
  const [y, m, d] = dob.split("-");
  return `${d}/${m}/${y}`;
}

export function yearsAtClub(joinYear: number): string {
  const years = new Date().getFullYear() - joinYear;
  if (years === 0) return "menos de 1 ano";
  if (years === 1) return "1 ano";
  return `${years} anos`;
}
