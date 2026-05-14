"use client";

import { useState } from "react";
import { Player, players, POSITIONS, POSITION_LABELS, POSITION_ICONS } from "@/data/players";
import { getPlayerDetail } from "@/data/playerDetails";
import PlayerCard from "./PlayerCard";
import PlayerDrawer from "./PlayerDrawer";

interface Props {
  clubLogos: Record<string, string>;
  playerPhotos: Record<string, string>;
}

export default function ConvocacaoClient({ clubLogos, playerPhotos }: Props) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const selectedDetail = selectedPlayer
    ? getPlayerDetail(selectedPlayer.name, selectedPlayer.club)
    : null;

  return (
    <>
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
                    clubLogo={clubLogos[player.club] ?? null}
                    playerPhoto={playerPhotos[player.name] ?? null}
                    onClick={() => setSelectedPlayer(player)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <PlayerDrawer
        player={selectedPlayer}
        detail={selectedDetail}
        clubLogo={selectedPlayer ? (clubLogos[selectedPlayer.club] ?? null) : null}
        playerPhoto={selectedPlayer ? (playerPhotos[selectedPlayer.name] ?? null) : null}
        onClose={() => setSelectedPlayer(null)}
      />
    </>
  );
}
