import { BrazilGame } from "@/data/games";

interface GameCardProps {
  game: BrazilGame;
  gameNumber: number;
}

export default function GameCard({ game, gameNumber }: GameCardProps) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/20 transition-colors">
      {/* Header */}
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-white/10">
        <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase">
          {game.phase}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">{game.group}</span>
          <span className="text-xs text-gray-600">Jogo {gameNumber}</span>
        </div>
      </div>

      {/* Teams */}
      <div className="px-4 py-6 flex items-center justify-between gap-3">
        <div className="flex-1 flex flex-col items-center gap-2">
          <span className="text-5xl">{game.homeFlag}</span>
          <p className="text-white font-bold text-sm text-center leading-tight">{game.homeTeam}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-gray-600 font-black text-lg tracking-widest">VS</span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-2">
          <span className="text-5xl">{game.awayFlag}</span>
          <p className="text-white font-bold text-sm text-center leading-tight">{game.awayTeam}</p>
        </div>
      </div>

      {/* Details */}
      <div className="px-4 pb-4 space-y-2 border-t border-white/10 pt-4">
        <div className="flex items-start gap-2 text-sm">
          <span className="text-yellow-500 flex-shrink-0">📅</span>
          <span className="text-gray-300">{game.displayDate}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <span className="text-yellow-500 flex-shrink-0">🕐</span>
          <span className="text-gray-300">{game.displayTime}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <span className="text-yellow-500 flex-shrink-0">🏟️</span>
          <span className="text-gray-300">{game.stadium}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <span className="text-yellow-500 flex-shrink-0">📍</span>
          <span className="text-gray-300">{game.city}, {game.state} — {game.country} 🇺🇸</span>
        </div>
      </div>
    </div>
  );
}
