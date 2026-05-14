import { Metadata } from "next";
import GamesClient from "@/components/features/jogos/GamesClient";

export const metadata: Metadata = {
  title: "Jogos — Copa do Mundo 2026",
  description: "Calendário completo com todos os grupos, seleções e jogos da Copa do Mundo FIFA 2026.",
};

export default function JogosPage() {
  return (
    <main className="min-h-screen bg-gray-950 px-4 py-8 md:py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500" />
      <GamesClient />
    </main>
  );
}
