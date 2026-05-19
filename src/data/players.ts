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
  // Goleiros (3)
  { id: 1, name: "Alisson", club: "Liverpool", position: "Goleiro" },
  { id: 2, name: "Ederson", club: "Fenerbahçe", position: "Goleiro" },
  { id: 3, name: "Weverton", club: "Grêmio", position: "Goleiro" },
  // Defensores (9)
  { id: 4, name: "Marquinhos", club: "PSG", position: "Defensor" },
  { id: 5, name: "Gabriel Magalhães", club: "Arsenal", position: "Defensor" },
  { id: 6, name: "Bremer", club: "Juventus", position: "Defensor" },
  { id: 7, name: "Ibañez", club: "Al-Ahli", position: "Defensor" },
  { id: 8, name: "Leo Pereira", club: "Flamengo", position: "Defensor" },
  { id: 9, name: "Wesley", club: "Roma", position: "Defensor" },
  { id: 10, name: "Alex Sandro", club: "Flamengo", position: "Defensor" },
  { id: 11, name: "Douglas Santos", club: "Zenit", position: "Defensor" },
  { id: 12, name: "Danilo", club: "Flamengo", position: "Defensor" },
  // Meio-campo (5)
  { id: 13, name: "Casemiro", club: "Manchester United", position: "Meio-campo" },
  { id: 14, name: "Bruno Guimarães", club: "Newcastle", position: "Meio-campo" },
  { id: 15, name: "Danilo", club: "Botafogo", position: "Meio-campo" },
  { id: 16, name: "Lucas Paquetá", club: "Flamengo", position: "Meio-campo" },
  { id: 17, name: "Fabinho", club: "Al-Ittihad", position: "Meio-campo" },
  // Atacantes (9)
  { id: 18, name: "Raphinha", club: "Barcelona", position: "Atacante" },
  { id: 19, name: "Vini Jr", club: "Real Madrid", position: "Atacante" },
  { id: 20, name: "Luiz Henrique", club: "Zenit", position: "Atacante" },
  { id: 21, name: "Gabriel Martinelli", club: "Arsenal", position: "Atacante" },
  { id: 22, name: "Neymar", club: "Santos", position: "Atacante" },
  { id: 23, name: "Endrick", club: "Lyon", position: "Atacante" },
  { id: 24, name: "Matheus Cunha", club: "Manchester United", position: "Atacante" },
  { id: 25, name: "Rayan", club: "Bournemouth", position: "Atacante" },
  { id: 26, name: "Igor Thiago", club: "Brentford", position: "Atacante" },
];
