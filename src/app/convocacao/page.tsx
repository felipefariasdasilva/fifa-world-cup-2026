import { Metadata } from "next";
import { players, POSITIONS, POSITION_LABELS, POSITION_ICONS } from "@/data/players";
import { getClubLogos } from "@/lib/sportsdb";
import PlayerCard from "@/components/features/convocacao/PlayerCard";

export const metadata: Metadata = {
  title: "Convocação — Copa do Mundo 2026",
  description: "Pré-lista de 55 jogadores da Seleção Brasileira para a Copa do Mundo FIFA 2026.",
};

export default async function ConvocacaoPage() {
  const clubLogos = await getClubLogos(players.map((p) => p.club));

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-8 md:py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase">
              🇧🇷 Seleção Brasileira
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white">Pré-lista de Convocados</h1>
          <p className="text-gray-400 mt-1 text-sm">
            55 jogadores pré-selecionados · Convocação oficial em 18/05/2026
          </p>
        </div>

        {/* Players by position */}
        <div className="space-y-10">
          {POSITIONS.map((position) => {
            const positionPlayers = players.filter((p) => p.position === position);
            return (
              <section key={position}>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <span className="text-2xl">{POSITION_ICONS[position]}</span>
                  <h2 className="text-lg font-bold text-white">{POSITION_LABELS[position]}</h2>
                  <span className="ml-auto text-sm text-gray-500 bg-gray-900 px-2 py-0.5 rounded-full">
                    {positionPlayers.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {positionPlayers.map((player) => (
                    <PlayerCard
                      key={player.id}
                      player={player}
                      clubLogo={clubLogos[player.club] || null}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center text-gray-600 text-xs">
          * Lista preliminar vazada. A convocação oficial de 26 jogadores será anunciada por Ancelotti no Museu do Amanhã, Rio de Janeiro.
        </p>
      </div>
    </main>
  );
}
