export const POSITIONS = ["Goleiro", "Defensor", "Meio-campo", "Atacante"] as const;
export type Position = (typeof POSITIONS)[number];

export const POSITION_LABELS: Record<Position, string> = {
  Goleiro: "Goleiros",
  Defensor: "Defensores",
  "Meio-campo": "Meio-campistas",
  Atacante: "Atacantes",
};

export const POSITION_ICONS: Record<Position, string> = {
  Goleiro: "🧤",
  Defensor: "🛡️",
  "Meio-campo": "⚙️",
  Atacante: "⚡",
};

export interface Player {
  id: number;
  name: string;
  club: string;
  position: Position;
}

export const players: Player[] = [
  // Goleiros (6)
  { id: 1, name: "Alisson", club: "Liverpool", position: "Goleiro" },
  { id: 2, name: "Bento", club: "Al-Nassr", position: "Goleiro" },
  { id: 3, name: "Ederson", club: "Fenerbahçe", position: "Goleiro" },
  { id: 4, name: "Hugo Souza", club: "Corinthians", position: "Goleiro" },
  { id: 5, name: "John", club: "Nottingham Forest", position: "Goleiro" },
  { id: 6, name: "Weverton", club: "Grêmio", position: "Goleiro" },
  // Defensores (20)
  { id: 7, name: "Alex Sandro", club: "Flamengo", position: "Defensor" },
  { id: 8, name: "Alexsandro Ribeiro", club: "Lille", position: "Defensor" },
  { id: 9, name: "Bremer", club: "Juventus", position: "Defensor" },
  { id: 10, name: "Carlos Augusto", club: "Inter de Milão", position: "Defensor" },
  { id: 11, name: "Danilo", club: "Flamengo", position: "Defensor" },
  { id: 12, name: "Douglas Santos", club: "Zenit", position: "Defensor" },
  { id: 13, name: "Fabricio Bruno", club: "Cruzeiro", position: "Defensor" },
  { id: 14, name: "Gabriel Magalhães", club: "Arsenal", position: "Defensor" },
  { id: 15, name: "Ibañez", club: "Al-Ahli", position: "Defensor" },
  { id: 16, name: "Kaiki Bruno", club: "Cruzeiro", position: "Defensor" },
  { id: 17, name: "Leo Ortiz", club: "Flamengo", position: "Defensor" },
  { id: 18, name: "Leo Pereira", club: "Flamengo", position: "Defensor" },
  { id: 19, name: "Luciano Juba", club: "Bahia", position: "Defensor" },
  { id: 20, name: "Marquinhos", club: "PSG", position: "Defensor" },
  { id: 21, name: "Natan", club: "Betis", position: "Defensor" },
  { id: 22, name: "Paulo Henrique", club: "Vasco", position: "Defensor" },
  { id: 23, name: "Thiago Silva", club: "Porto", position: "Defensor" },
  { id: 24, name: "Vitinho", club: "Botafogo", position: "Defensor" },
  { id: 25, name: "Vitor Reis", club: "Girona", position: "Defensor" },
  { id: 26, name: "Wesley", club: "Roma", position: "Defensor" },
  // Meio-campo (12)
  { id: 27, name: "Andreas Pereira", club: "Palmeiras", position: "Meio-campo" },
  { id: 28, name: "Andrey Santos", club: "Chelsea", position: "Meio-campo" },
  { id: 29, name: "Bruno Guimarães", club: "Newcastle", position: "Meio-campo" },
  { id: 30, name: "Casemiro", club: "Manchester United", position: "Meio-campo" },
  { id: 31, name: "Danilo", club: "Botafogo", position: "Meio-campo" },
  { id: 32, name: "Ederson", club: "Atalanta", position: "Meio-campo" },
  { id: 33, name: "Fabinho", club: "Al-Ittihad", position: "Meio-campo" },
  { id: 34, name: "Gabriel Sara", club: "Galatasaray", position: "Meio-campo" },
  { id: 35, name: "Gerson", club: "Cruzeiro", position: "Meio-campo" },
  { id: 36, name: "João Gomes", club: "Wolverhampton", position: "Meio-campo" },
  { id: 37, name: "Lucas Paquetá", club: "Flamengo", position: "Meio-campo" },
  { id: 38, name: "Matheus Pereira", club: "Cruzeiro", position: "Meio-campo" },
  // Atacantes (17)
  { id: 39, name: "Antony", club: "Betis", position: "Atacante" },
  { id: 40, name: "Endrick", club: "Lyon", position: "Atacante" },
  { id: 41, name: "Gabriel Martinelli", club: "Arsenal", position: "Atacante" },
  { id: 42, name: "Gabriel Jesus", club: "Arsenal", position: "Atacante" },
  { id: 43, name: "Igor Jesus", club: "Nottingham Forest", position: "Atacante" },
  { id: 44, name: "Igor Thiago", club: "Brentford", position: "Atacante" },
  { id: 45, name: "João Pedro", club: "Chelsea", position: "Atacante" },
  { id: 46, name: "Kaio Jorge", club: "Cruzeiro", position: "Atacante" },
  { id: 47, name: "Luiz Henrique", club: "Zenit", position: "Atacante" },
  { id: 48, name: "Matheus Cunha", club: "Manchester United", position: "Atacante" },
  { id: 49, name: "Neymar", club: "Santos", position: "Atacante" },
  { id: 50, name: "Pedro", club: "Flamengo", position: "Atacante" },
  { id: 51, name: "Raphinha", club: "Barcelona", position: "Atacante" },
  { id: 52, name: "Rayan", club: "Bournemouth", position: "Atacante" },
  { id: 53, name: "Richarlison", club: "Tottenham", position: "Atacante" },
  { id: 54, name: "Samuel Lino", club: "Flamengo", position: "Atacante" },
  { id: 55, name: "Vini Jr", club: "Real Madrid", position: "Atacante" },
];
