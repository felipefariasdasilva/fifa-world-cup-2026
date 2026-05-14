"use client";

import { useState } from "react";
import { groups, games, type WorldCupGame } from "@/data/worldcup";

function GameCard({ game }: { game: WorldCupGame }) {
  return (
    <div className="bg-gray-900/60 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/20 transition-colors">
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-white/10">
        <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase">
          Grupo {game.group} · Rodada {game.matchday}
        </span>
      </div>
      <div className="px-4 py-5 flex items-center justify-between gap-3">
        <div className="flex-1 flex flex-col items-center gap-2">
          <span className="text-4xl">{game.homeFlag}</span>
          <p className="text-white font-bold text-xs text-center leading-tight">{game.homeTeam}</p>
        </div>
        <span className="text-gray-600 font-black text-lg tracking-widest">VS</span>
        <div className="flex-1 flex flex-col items-center gap-2">
          <span className="text-4xl">{game.awayFlag}</span>
          <p className="text-white font-bold text-xs text-center leading-tight">{game.awayTeam}</p>
        </div>
      </div>
      <div className="px-4 pb-4 space-y-1.5 border-t border-white/10 pt-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-yellow-500">📅</span>
          <span className="text-gray-300">{game.displayDate}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-yellow-500">🕐</span>
          <span className="text-gray-300">{game.displayTime}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-yellow-500">🏟️</span>
          <span className="text-gray-300">{game.stadium}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-yellow-500">📍</span>
          <span className="text-gray-300">{game.city} — {game.country}</span>
        </div>
      </div>
    </div>
  );
}

export default function GamesClient() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const filteredGames = selectedTeam
    ? games.filter((g) => g.homeTeam === selectedTeam || g.awayTeam === selectedTeam)
    : games;

  const groupsToShow = selectedTeam
    ? groups.filter((grp) => grp.teams.some((t) => t.name === selectedTeam))
    : groups;

  function toggleTeam(name: string) {
    setSelectedTeam((prev) => (prev === name ? null : name));
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white">Jogos</h1>
        <p className="text-gray-400 mt-1 text-sm">
          Copa do Mundo FIFA 2026 · 48 seleções · 72 jogos · 11 jun – 27 jun 2026
        </p>
      </div>

      {/* Team filter */}
      <div className="bg-gray-900/40 border border-white/10 rounded-2xl p-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-bold text-sm">Filtrar por seleção</h2>
          {selectedTeam && (
            <button
              onClick={() => setSelectedTeam(null)}
              className="text-xs text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1 rounded-full transition-colors"
            >
              Limpar filtro
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {groups.map((grp) =>
            grp.teams.map((team) => {
              const isSelected = selectedTeam === team.name;
              return (
                <button
                  key={team.code}
                  onClick={() => toggleTeam(team.name)}
                  title={team.name}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-yellow-500/20 border border-yellow-500/40 text-yellow-300"
                      : "bg-gray-800/60 border border-white/5 text-gray-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className="text-base">{team.flag}</span>
                  <span className="hidden sm:inline">{team.name}</span>
                </button>
              );
            })
          )}
        </div>
        {selectedTeam && (
          <p className="mt-3 text-xs text-yellow-400">
            Mostrando {filteredGames.length} jogos de <strong>{selectedTeam}</strong>
          </p>
        )}
      </div>

      {/* Groups overview (hidden when a team is selected and it only has 1 group) */}
      {!selectedTeam && (
        <div className="mb-8">
          <h2 className="text-white font-bold mb-4">Grupos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {groups.map((grp) => (
              <div key={grp.id} className="bg-gray-900/40 border border-white/10 rounded-xl p-3">
                <p className="text-yellow-500 font-bold text-xs mb-2">Grupo {grp.id}</p>
                <div className="space-y-1.5">
                  {grp.teams.map((team) => (
                    <button
                      key={team.code}
                      onClick={() => toggleTeam(team.name)}
                      className="flex items-center gap-2 w-full text-left hover:text-yellow-300 transition-colors group"
                    >
                      <span className="text-lg">{team.flag}</span>
                      <span className="text-gray-300 text-xs group-hover:text-yellow-300 truncate">{team.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Games */}
      {groupsToShow.map((grp) => {
        const grpGames = filteredGames.filter((g) => g.group === grp.id);
        if (grpGames.length === 0) return null;
        return (
          <section key={grp.id} className="mb-10">
            <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
              <span className="text-yellow-500">Grupo {grp.id}</span>
              <span className="flex gap-2">
                {grp.teams.map((t) => (
                  <span key={t.code} title={t.name} className="text-xl">{t.flag}</span>
                ))}
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grpGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        );
      })}

      <p className="mt-6 text-center text-gray-600 text-xs">
        Horários em BRT (Brasília) · Fase de grupos: 11 – 27 jun 2026
      </p>
    </div>
  );
}
