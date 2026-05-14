import { Metadata } from "next";
import ConvocacaoClient from "@/components/features/convocacao/ConvocacaoClient";
import manifest from "@/data/assets-manifest.json";

export const metadata: Metadata = {
  title: "Convocação — Copa do Mundo 2026",
  description: "Pré-lista de 55 jogadores da Seleção Brasileira para a Copa do Mundo FIFA 2026.",
};

export default function ConvocacaoPage() {
  const clubLogos: Record<string, string> = manifest.clubs;
  const playerPhotos: Record<string, string> = manifest.players;

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
            55 jogadores pré-selecionados · Convocação oficial em 18/05/2026 · Clique no jogador para ver detalhes
          </p>
        </div>

        <ConvocacaoClient clubLogos={clubLogos} playerPhotos={playerPhotos} />

        <p className="mt-12 text-center text-gray-600 text-xs">
          * Lista preliminar vazada. A convocação oficial de 26 jogadores será anunciada por Ancelotti no Museu do Amanhã, Rio de Janeiro.
        </p>
      </div>
    </main>
  );
}
