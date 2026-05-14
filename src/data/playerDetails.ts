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
  Bento: {
    name: "Bento", fullName: "Arthur Henrique Alves Marques de Lima",
    dateOfBirth: "2000-11-07", height: 188, weight: 88,
    nationality: "Brasileiro", positionDetail: "Goleiro",
    clubJoinYear: 2024, caps: 14, seasonGoals: 0,
    espnTeamId: "817", espnLeague: "ksa.1",
  },
  "Ederson_Fenerbahçe": {
    name: "Ederson", fullName: "Ederson Santana de Moraes",
    dateOfBirth: "1993-08-17", height: 188, weight: 86,
    nationality: "Brasileiro", positionDetail: "Goleiro",
    clubJoinYear: 2024, caps: 24, seasonGoals: 0,
    espnTeamId: "436", espnLeague: "tur.1",
  },
  "Hugo Souza": {
    name: "Hugo Souza", fullName: "Hugo Fernandes Souza",
    dateOfBirth: "1999-02-25", height: 192, weight: 88,
    nationality: "Brasileiro", positionDetail: "Goleiro",
    clubJoinYear: 2019, caps: 4, seasonGoals: 0,
    espnTeamId: "874", espnLeague: "bra.1",
  },
  John: {
    name: "John", fullName: "John Victor Alves Nobrega",
    dateOfBirth: "1999-10-11", height: 193, weight: 87,
    nationality: "Brasileiro", positionDetail: "Goleiro",
    clubJoinYear: 2022, caps: 2, seasonGoals: 0,
    espnTeamId: "393", espnLeague: "eng.1",
  },
  Weverton: {
    name: "Weverton", fullName: "Weverton Pereira Alves",
    dateOfBirth: "1987-12-13", height: 185, weight: 83,
    nationality: "Brasileiro", positionDetail: "Goleiro",
    clubJoinYear: 2025, caps: 21, seasonGoals: 0,
    espnTeamId: "6273", espnLeague: "bra.1",
  },
  // ── DEFENSORES ───────────────────────────────────────────────────────────
  "Alex Sandro": {
    name: "Alex Sandro", fullName: "Alex Sandro Lobo Silva",
    dateOfBirth: "1991-01-26", height: 181, weight: 75,
    nationality: "Brasileiro", positionDetail: "Lateral-esquerdo",
    clubJoinYear: 2025, caps: 50, seasonGoals: 1,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  "Alexsandro Ribeiro": {
    name: "Alexsandro Ribeiro", fullName: "Alexsandro Ribeiro",
    dateOfBirth: "2001-01-15", height: 186, weight: 78,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2024, caps: 1, seasonGoals: 0,
    espnTeamId: "166", espnLeague: "fra.1",
  },
  Bremer: {
    name: "Bremer", fullName: "Gleison Bremer Silva Nascimento",
    dateOfBirth: "1997-03-18", height: 188, weight: 83,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2022, caps: 13, seasonGoals: 1,
    espnTeamId: "111", espnLeague: "ita.1",
  },
  "Carlos Augusto": {
    name: "Carlos Augusto", fullName: "Carlos Augusto da Silva Marques",
    dateOfBirth: "1999-04-23", height: 185, weight: 78,
    nationality: "Brasileiro", positionDetail: "Lateral-esquerdo",
    clubJoinYear: 2023, caps: 8, seasonGoals: 3,
    espnTeamId: "110", espnLeague: "ita.1",
  },
  Danilo: {
    name: "Danilo", fullName: "Danilo Luiz da Silva",
    dateOfBirth: "1991-07-15", height: 183, weight: 82,
    nationality: "Brasileiro", positionDetail: "Lateral-direito",
    clubJoinYear: 2023, caps: 48, seasonGoals: 1,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  "Douglas Santos": {
    name: "Douglas Santos", fullName: "Douglas Willian Santos de Oliveira",
    dateOfBirth: "1994-01-07", height: 175, weight: 72,
    nationality: "Brasileiro", positionDetail: "Lateral-esquerdo",
    clubJoinYear: 2022, caps: 4, seasonGoals: 1,
    espnTeamId: "2533", espnLeague: "rus.1",
  },
  "Fabricio Bruno": {
    name: "Fabricio Bruno", fullName: "Fabrício Rodrigues Bruno",
    dateOfBirth: "1996-03-25", height: 189, weight: 83,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2023, caps: 5, seasonGoals: 2,
    espnTeamId: "2022", espnLeague: "bra.1",
  },
  "Gabriel Magalhães": {
    name: "Gabriel Magalhães", fullName: "Gabriel dos Santos Magalhães",
    dateOfBirth: "1997-12-19", height: 191, weight: 83,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2020, caps: 20, seasonGoals: 4,
    espnTeamId: "359", espnLeague: "eng.1",
  },
  "Ibañez": {
    name: "Ibañez", fullName: "Arthur Cabral Ibanez",
    dateOfBirth: "1998-02-01", height: 185, weight: 80,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2023, caps: 6, seasonGoals: 1,
    espnTeamId: "8346", espnLeague: "ksa.1",
  },
  "Kaiki Bruno": {
    name: "Kaiki Bruno", fullName: "Kaiki Bruno Gomes de Souza",
    dateOfBirth: "2003-11-16", height: 180, weight: 71,
    nationality: "Brasileiro", positionDetail: "Lateral-direito",
    clubJoinYear: 2024, caps: 1, seasonGoals: 0,
    espnTeamId: "2022", espnLeague: "bra.1",
  },
  "Leo Ortiz": {
    name: "Leo Ortiz", fullName: "Leonardo dos Santos Ortiz",
    dateOfBirth: "1996-01-23", height: 186, weight: 80,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2024, caps: 2, seasonGoals: 2,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  "Leo Pereira": {
    name: "Leo Pereira", fullName: "Leonardo Pereira da Silva",
    dateOfBirth: "1996-08-30", height: 188, weight: 84,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2022, caps: 3, seasonGoals: 2,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  "Luciano Juba": {
    name: "Luciano Juba", fullName: "Luciano Pereira Juba",
    dateOfBirth: "1998-10-01", height: 180, weight: 73,
    nationality: "Brasileiro", positionDetail: "Lateral-esquerdo",
    clubJoinYear: 2024, caps: 1, seasonGoals: 2,
    espnTeamId: "9967", espnLeague: "bra.1",
  },
  Marquinhos: {
    name: "Marquinhos", fullName: "Marcos Aoás Corrêa",
    dateOfBirth: "1994-05-14", height: 183, weight: 75,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2013, caps: 80, seasonGoals: 2,
    espnTeamId: "160", espnLeague: "fra.1",
  },
  Natan: {
    name: "Natan", fullName: "Natan Bernardo de Souza",
    dateOfBirth: "2001-12-27", height: 185, weight: 78,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2024, caps: 3, seasonGoals: 1,
    espnTeamId: "244", espnLeague: "esp.1",
  },
  "Paulo Henrique": {
    name: "Paulo Henrique", fullName: "Paulo Henrique Sampaio Filho",
    dateOfBirth: "2003-09-24", height: 178, weight: 70,
    nationality: "Brasileiro", positionDetail: "Lateral-esquerdo",
    clubJoinYear: 2023, caps: 1, seasonGoals: 1,
    espnTeamId: "3454", espnLeague: "bra.1",
  },
  "Thiago Silva": {
    name: "Thiago Silva", fullName: "Thiago Emiliano da Silva",
    dateOfBirth: "1984-09-22", height: 183, weight: 79,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2024, caps: 113, seasonGoals: 1,
    espnTeamId: "437", espnLeague: "por.1",
  },
  Vitinho: {
    name: "Vitinho", fullName: "Victor Sá Rodrigues",
    dateOfBirth: "2000-12-10", height: 177, weight: 70,
    nationality: "Brasileiro", positionDetail: "Lateral-direito",
    clubJoinYear: 2024, caps: 2, seasonGoals: 3,
    espnTeamId: "6086", espnLeague: "bra.1",
  },
  "Vitor Reis": {
    name: "Vitor Reis", fullName: "Vitor Reis de Carvalho",
    dateOfBirth: "2004-12-01", height: 186, weight: 78,
    nationality: "Brasileiro", positionDetail: "Zagueiro",
    clubJoinYear: 2025, caps: 1, seasonGoals: 0,
    espnTeamId: "9812", espnLeague: "esp.1",
  },
  Wesley: {
    name: "Wesley", fullName: "Wesley Andrade Gassova",
    dateOfBirth: "2003-11-26", height: 181, weight: 72,
    nationality: "Brasileiro", positionDetail: "Lateral-direito",
    clubJoinYear: 2024, caps: 3, seasonGoals: 2,
    espnTeamId: "104", espnLeague: "ita.1",
  },
  // ── MEIO-CAMPO ──────────────────────────────────────────────────────────
  "Andreas Pereira": {
    name: "Andreas Pereira", fullName: "Andreas Maximiliano Pereira",
    dateOfBirth: "1996-01-01", height: 178, weight: 71,
    nationality: "Brasileiro", positionDetail: "Meia",
    clubJoinYear: 2024, caps: 24, seasonGoals: 5,
    espnTeamId: "2029", espnLeague: "bra.1",
  },
  "Andrey Santos": {
    name: "Andrey Santos", fullName: "Andrey Santos",
    dateOfBirth: "2004-07-01", height: 179, weight: 71,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2023, caps: 4, seasonGoals: 2,
    espnTeamId: "363", espnLeague: "eng.1",
  },
  "Bruno Guimarães": {
    name: "Bruno Guimarães", fullName: "Bruno Guimarães Rodriguez Moura",
    dateOfBirth: "1997-11-16", height: 183, weight: 80,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2022, caps: 46, seasonGoals: 7,
    espnTeamId: "361", espnLeague: "eng.1",
  },
  Casemiro: {
    name: "Casemiro", fullName: "Carlos Henrique Casimiro",
    dateOfBirth: "1992-02-23", height: 185, weight: 84,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2022, caps: 82, seasonGoals: 3,
    espnTeamId: "360", espnLeague: "eng.1",
  },
  "Danilo_Botafogo": {
    name: "Danilo", fullName: "Danilo Barbosa da Silva",
    dateOfBirth: "1996-07-28", height: 188, weight: 78,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2024, caps: 8, seasonGoals: 2,
    espnTeamId: "6086", espnLeague: "bra.1",
  },
  "Ederson_Atalanta": {
    name: "Ederson", fullName: "Éderson Lourenço da Silva",
    dateOfBirth: "1999-07-07", height: 175, weight: 68,
    nationality: "Brasileiro", positionDetail: "Meia",
    clubJoinYear: 2024, caps: 10, seasonGoals: 6,
    espnTeamId: "105", espnLeague: "ita.1",
  },
  Fabinho: {
    name: "Fabinho", fullName: "Fábio Henrique Tavares",
    dateOfBirth: "1993-10-23", height: 188, weight: 78,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2023, caps: 40, seasonGoals: 2,
    espnTeamId: "2276", espnLeague: "ksa.1",
  },
  "Gabriel Sara": {
    name: "Gabriel Sara", fullName: "Gabriel Henrique Sara",
    dateOfBirth: "1999-10-08", height: 178, weight: 73,
    nationality: "Brasileiro", positionDetail: "Meia",
    clubJoinYear: 2023, caps: 5, seasonGoals: 4,
    espnTeamId: "432", espnLeague: "tur.1",
  },
  Gerson: {
    name: "Gerson", fullName: "Gerson Santos da Silva",
    dateOfBirth: "1997-05-20", height: 187, weight: 77,
    nationality: "Brasileiro", positionDetail: "Meia",
    clubJoinYear: 2025, caps: 15, seasonGoals: 3,
    espnTeamId: "2022", espnLeague: "bra.1",
  },
  "João Gomes": {
    name: "João Gomes", fullName: "João Gomes de Oliveira",
    dateOfBirth: "2001-02-17", height: 183, weight: 76,
    nationality: "Brasileiro", positionDetail: "Volante",
    clubJoinYear: 2023, caps: 18, seasonGoals: 2,
    espnTeamId: "380", espnLeague: "eng.1",
  },
  "Lucas Paquetá": {
    name: "Lucas Paquetá", fullName: "Lucas Tolentino Coelho de Lima",
    dateOfBirth: "1997-08-27", height: 180, weight: 72,
    nationality: "Brasileiro", positionDetail: "Meia",
    clubJoinYear: 2025, caps: 55, seasonGoals: 4,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  "Matheus Pereira": {
    name: "Matheus Pereira", fullName: "Matheus Pereira da Costa",
    dateOfBirth: "1996-05-05", height: 174, weight: 66,
    nationality: "Brasileiro", positionDetail: "Meia",
    clubJoinYear: 2024, caps: 3, seasonGoals: 8,
    espnTeamId: "2022", espnLeague: "bra.1",
  },
  // ── ATACANTES ────────────────────────────────────────────────────────────
  Antony: {
    name: "Antony", fullName: "Antony Matheus dos Santos",
    dateOfBirth: "2000-02-24", height: 169, weight: 65,
    nationality: "Brasileiro", positionDetail: "Ponta-direita",
    clubJoinYear: 2024, caps: 22, seasonGoals: 5,
    espnTeamId: "244", espnLeague: "esp.1",
  },
  Endrick: {
    name: "Endrick", fullName: "Endrick Felipe Moreira de Sousa",
    dateOfBirth: "2006-07-21", height: 174, weight: 76,
    nationality: "Brasileiro", positionDetail: "Centroavante",
    clubJoinYear: 2025, caps: 12, seasonGoals: 4,
    espnTeamId: "167", espnLeague: "fra.1",
  },
  "Gabriel Martinelli": {
    name: "Gabriel Martinelli", fullName: "Gabriel Silva Martinelli",
    dateOfBirth: "2001-06-18", height: 177, weight: 75,
    nationality: "Brasileiro", positionDetail: "Ponta-esquerda",
    clubJoinYear: 2019, caps: 33, seasonGoals: 9,
    espnTeamId: "359", espnLeague: "eng.1",
  },
  "Gabriel Jesus": {
    name: "Gabriel Jesus", fullName: "Gabriel Fernando de Jesus",
    dateOfBirth: "1997-04-03", height: 175, weight: 73,
    nationality: "Brasileiro", positionDetail: "Centroavante",
    clubJoinYear: 2022, caps: 62, seasonGoals: 7,
    espnTeamId: "359", espnLeague: "eng.1",
  },
  "Igor Jesus": {
    name: "Igor Jesus", fullName: "Igor de Jesus Salles",
    dateOfBirth: "2001-09-24", height: 186, weight: 79,
    nationality: "Brasileiro", positionDetail: "Centroavante",
    clubJoinYear: 2024, caps: 6, seasonGoals: 5,
    espnTeamId: "393", espnLeague: "eng.1",
  },
  "Igor Thiago": {
    name: "Igor Thiago", fullName: "Igor Thiago Oliveira Monteiro",
    dateOfBirth: "2001-02-01", height: 185, weight: 80,
    nationality: "Brasileiro", positionDetail: "Centroavante",
    clubJoinYear: 2024, caps: 3, seasonGoals: 7,
    espnTeamId: "337", espnLeague: "eng.1",
  },
  "João Pedro": {
    name: "João Pedro", fullName: "João Pedro Junqueira de Jesus",
    dateOfBirth: "2001-09-26", height: 188, weight: 83,
    nationality: "Brasileiro", positionDetail: "Centroavante",
    clubJoinYear: 2023, caps: 12, seasonGoals: 8,
    espnTeamId: "363", espnLeague: "eng.1",
  },
  "Kaio Jorge": {
    name: "Kaio Jorge", fullName: "Kaio Jorge Pinto Roque",
    dateOfBirth: "2002-01-24", height: 181, weight: 74,
    nationality: "Brasileiro", positionDetail: "Centroavante",
    clubJoinYear: 2024, caps: 3, seasonGoals: 6,
    espnTeamId: "2022", espnLeague: "bra.1",
  },
  "Luiz Henrique": {
    name: "Luiz Henrique", fullName: "Luiz Henrique Moreira Castilho",
    dateOfBirth: "2001-08-14", height: 177, weight: 68,
    nationality: "Brasileiro", positionDetail: "Ponta-esquerda",
    clubJoinYear: 2023, caps: 7, seasonGoals: 8,
    espnTeamId: "2533", espnLeague: "rus.1",
  },
  "Matheus Cunha": {
    name: "Matheus Cunha", fullName: "Matheus Santos Carneiro da Cunha",
    dateOfBirth: "1999-06-27", height: 181, weight: 76,
    nationality: "Brasileiro", positionDetail: "Atacante",
    clubJoinYear: 2023, caps: 21, seasonGoals: 16,
    espnTeamId: "360", espnLeague: "eng.1",
  },
  Neymar: {
    name: "Neymar", fullName: "Neymar da Silva Santos Júnior",
    dateOfBirth: "1992-02-05", height: 175, weight: 68,
    nationality: "Brasileiro", positionDetail: "Atacante",
    clubJoinYear: 2024, caps: 128, seasonGoals: 3,
    espnTeamId: "2674", espnLeague: "bra.1",
  },
  Pedro: {
    name: "Pedro", fullName: "Pedro Guilherme Abreu dos Santos",
    dateOfBirth: "1997-10-22", height: 186, weight: 82,
    nationality: "Brasileiro", positionDetail: "Centroavante",
    clubJoinYear: 2020, caps: 20, seasonGoals: 12,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  Raphinha: {
    name: "Raphinha", fullName: "Raphael Dias Belloli",
    dateOfBirth: "1996-12-14", height: 176, weight: 67,
    nationality: "Brasileiro", positionDetail: "Ponta-direita",
    clubJoinYear: 2022, caps: 51, seasonGoals: 18,
    espnTeamId: "83", espnLeague: "esp.1",
  },
  Rayan: {
    name: "Rayan", fullName: "Rayan Luiz de Jesus Ferreira",
    dateOfBirth: "2005-02-14", height: 175, weight: 66,
    nationality: "Brasileiro", positionDetail: "Ponta",
    clubJoinYear: 2024, caps: 1, seasonGoals: 3,
    espnTeamId: "349", espnLeague: "eng.1",
  },
  Richarlison: {
    name: "Richarlison", fullName: "Richarlison de Andrade",
    dateOfBirth: "1997-05-10", height: 181, weight: 80,
    nationality: "Brasileiro", positionDetail: "Atacante",
    clubJoinYear: 2022, caps: 50, seasonGoals: 5,
    espnTeamId: "367", espnLeague: "eng.1",
  },
  "Samuel Lino": {
    name: "Samuel Lino", fullName: "Samuel Lino da Silva Campos",
    dateOfBirth: "2000-05-21", height: 173, weight: 66,
    nationality: "Brasileiro", positionDetail: "Ponta-esquerda",
    clubJoinYear: 2025, caps: 3, seasonGoals: 4,
    espnTeamId: "819", espnLeague: "bra.1",
  },
  "Vini Jr": {
    name: "Vini Jr", fullName: "Vinícius José Paixão de Oliveira Júnior",
    dateOfBirth: "2000-07-12", height: 176, weight: 73,
    nationality: "Brasileiro", positionDetail: "Ponta-esquerda",
    clubJoinYear: 2018, caps: 102, seasonGoals: 22,
    espnTeamId: "86", espnLeague: "esp.1",
  },
};

// Some players share the same name — resolve by club
export function getPlayerDetail(name: string, club: string): PlayerDetail | null {
  if (name === "Danilo" && club === "Botafogo") return playerDetails["Danilo_Botafogo"] ?? null;
  if (name === "Ederson" && club === "Fenerbahçe") return playerDetails["Ederson_Fenerbahçe"] ?? null;
  if (name === "Ederson" && club === "Atalanta") return playerDetails["Ederson_Atalanta"] ?? null;
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
