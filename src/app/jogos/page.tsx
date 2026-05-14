import { Metadata } from "next";
import { brazilGames, groupCTeams } from "@/data/games";
import GameCard from "@/components/features/jogos/GameCard";

export const metadata: Metadata = {
  title: "Jogos do Brasil — Copa do Mundo 2026",
  description: "Calendário completo dos jogos da Seleção Brasileira na Copa do Mundo FIFA 2026.",
};

export default function JogosPage() {
  return (
    <main className="min-h-screen bg-gray-950 px-4 py-8 md:py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase">
              🇧🇷 Seleção Brasileira
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white">Jogos do Brasil</h1>
          <p className="text-gray-400 mt-1 text-sm">
            Copa do Mundo FIFA 2026 · EUA, Canadá e México · 11 jun – 19 jul 2026
          </p>
        </div>

        {/* Group info */}
        <div className="bg-gray-900/40 border border-white/10 rounded-2xl p-5 mb-8">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span>🏆</span> Grupo C
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {groupCTeams.map((team) => (
              <div
                key={team.name}
                className={`flex items-center gap-2 p-3 rounded-xl ${
                  team.name === "Brasil"
                    ? "bg-yellow-500/10 border border-yellow-500/20"
                    : "bg-gray-800/50 border border-white/5"
                }`}
              >
                <span className="text-2xl">{team.flag}</span>
                <span
                  className={`text-sm font-semibold ${
                    team.name === "Brasil" ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  {team.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Games */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brazilGames.map((game, index) => (
            <GameCard key={game.id} game={game} gameNumber={index + 1} />
          ))}
        </div>

        <p className="mt-10 text-center text-gray-600 text-xs">
          Horários em BRT (Horário de Brasília) · EDT + 1h
        </p>
      </div>
    </main>
  );
}
