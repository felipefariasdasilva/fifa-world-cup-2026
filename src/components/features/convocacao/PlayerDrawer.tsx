"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Player } from "@/data/players";
import { PlayerDetail, calcAge, formatDate, yearsAtClub } from "@/data/playerDetails";

const LEAGUE_INFO: Record<string, { label: string; flag: string }> = {
  "eng.1": { label: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  "ita.1": { label: "Serie A", flag: "🇮🇹" },
  "esp.1": { label: "La Liga", flag: "🇪🇸" },
  "fra.1": { label: "Ligue 1", flag: "🇫🇷" },
  "bra.1": { label: "Brasileirão", flag: "🇧🇷" },
  "por.1": { label: "Primeira Liga", flag: "🇵🇹" },
  "tur.1": { label: "Süper Lig", flag: "🇹🇷" },
  "ksa.1": { label: "Saudi Pro League", flag: "🇸🇦" },
  "rus.1": { label: "Premier League Russa", flag: "🇷🇺" },
};

interface RecentGame {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  status: string;
}

interface Props {
  player: Player | null;
  detail: PlayerDetail | null;
  clubLogo: string | null;
  playerPhoto: string | null;
  onClose: () => void;
}

function StatBox({ label, value }: { label: string; value: string | number | null }) {
  return (
    <div className="bg-gray-800/60 rounded-lg p-3 text-center">
      <p className="text-gray-400 text-xs mb-1">{label}</p>
      <p className="text-white font-bold text-base">{value ?? "—"}</p>
    </div>
  );
}

function GameRow({ game, clubName }: { game: RecentGame; clubName: string }) {
  const date = new Date(game.date);
  const dateStr = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

  const isHome = game.homeTeam.toLowerCase().includes(clubName.toLowerCase().split(" ")[0]);
  const ourScore = isHome ? Number(game.homeScore) : Number(game.awayScore);
  const theirScore = isHome ? Number(game.awayScore) : Number(game.homeScore);
  const opponent = isHome ? game.awayTeam : game.homeTeam;

  let result = "E";
  let resultColor = "text-yellow-400";
  if (!isNaN(ourScore) && !isNaN(theirScore)) {
    if (ourScore > theirScore) { result = "V"; resultColor = "text-green-400"; }
    else if (ourScore < theirScore) { result = "D"; resultColor = "text-red-400"; }
  }

  return (
    <div className="flex items-center gap-2 bg-gray-800/40 rounded-lg px-3 py-2">
      <span className={`text-xs font-bold w-4 ${resultColor}`}>{result}</span>
      <span className="text-gray-500 text-xs w-10 shrink-0">{dateStr}</span>
      <span className="text-gray-300 text-xs flex-1 truncate">{isHome ? "x" : "@"} {opponent}</span>
      <span className="text-white text-xs font-mono font-semibold shrink-0">
        {game.homeScore}–{game.awayScore}
      </span>
    </div>
  );
}

export default function PlayerDrawer({ player, detail, clubLogo, playerPhoto, onClose }: Props) {
  const [recentGames, setRecentGames] = useState<RecentGame[]>([]);
  const [loadingGames, setLoadingGames] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const isOpen = !!player;

  useEffect(() => {
    if (!detail) { setRecentGames([]); return; }
    setRecentGames([]);
    setLoadingGames(true);
    fetch(`/api/espn-games?league=${detail.espnLeague}&teamId=${detail.espnTeamId}`)
      .then((r) => r.json())
      .then((data) => setRecentGames(data.events ?? []))
      .catch(() => setRecentGames([]))
      .finally(() => setLoadingGames(false));
  }, [detail]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const avatarUrl = player
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=111827&color=facc15&size=256&bold=true&format=png`
    : null;
  const photoSrc = playerPhoto ?? avatarUrl;
  const leagueInfo = detail ? LEAGUE_INFO[detail.espnLeague] : null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-gray-950 border-l border-white/10 z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
          <span className="text-xs font-semibold text-yellow-500 uppercase tracking-widest">🇧🇷 Ficha do Jogador</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-xl leading-none w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {player && detail && (
            <div className="p-5 space-y-5">
              {/* Player hero */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-yellow-500/40 shrink-0 bg-gray-800">
                  {photoSrc && (
                    <Image
                      src={photoSrc}
                      alt={player.name}
                      fill
                      className="object-cover object-top"
                      unoptimized={!playerPhoto}
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-white font-black text-xl leading-tight">{player.name}</h2>
                  <p className="text-gray-400 text-sm mt-0.5 leading-snug">{detail.fullName}</p>
                  <span className="inline-block mt-1.5 text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full px-2 py-0.5 font-medium">
                    {detail.positionDetail}
                  </span>
                </div>
              </div>

              {/* DOB / Age */}
              <div className="bg-gray-900/60 rounded-xl p-4 space-y-2">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Dados Pessoais</p>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div>
                    <p className="text-gray-400 text-xs">Nascimento</p>
                    <p className="text-white text-sm font-semibold mt-0.5">{formatDate(detail.dateOfBirth)}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Idade</p>
                    <p className="text-white text-sm font-semibold mt-0.5">{calcAge(detail.dateOfBirth)} anos</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Altura</p>
                    <p className="text-white text-sm font-semibold mt-0.5">{detail.height ? `${detail.height} cm` : "—"}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Peso</p>
                    <p className="text-white text-sm font-semibold mt-0.5">{detail.weight ? `${detail.weight} kg` : "—"}</p>
                  </div>
                </div>
              </div>

              {/* Club */}
              <div className="bg-gray-900/60 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Clube Atual</p>
                <div className="flex items-center gap-3">
                  {clubLogo ? (
                    <div className="relative w-10 h-10 shrink-0">
                      <Image src={clubLogo} alt={player.club} fill className="object-contain" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-300 shrink-0">
                      {player.club.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-white font-bold text-sm">{player.club}</p>
                    {leagueInfo && (
                      <p className="text-gray-400 text-xs mt-0.5">
                        {leagueInfo.flag} {leagueInfo.label}
                      </p>
                    )}
                  </div>
                </div>
                {detail.clubJoinYear && (
                  <div className="flex gap-4 mt-3 pt-3 border-t border-white/5">
                    <div>
                      <p className="text-gray-500 text-xs">No clube desde</p>
                      <p className="text-white text-sm font-semibold mt-0.5">{detail.clubJoinYear}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Tempo de clube</p>
                      <p className="text-white text-sm font-semibold mt-0.5">{yearsAtClub(detail.clubJoinYear)}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Estatísticas</p>
                <div className="grid grid-cols-2 gap-3">
                  <StatBox label="Convocações" value={detail.caps} />
                  <StatBox label="Gols (24/25)" value={detail.seasonGoals} />
                </div>
              </div>

              {/* Recent games */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Últimas Partidas pelo Clube</p>
                {loadingGames && (
                  <div className="flex items-center justify-center py-6">
                    <div className="w-5 h-5 border-2 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin" />
                  </div>
                )}
                {!loadingGames && recentGames.length === 0 && (
                  <p className="text-gray-600 text-xs text-center py-4">Nenhuma partida recente disponível</p>
                )}
                {!loadingGames && recentGames.length > 0 && (
                  <div className="space-y-2">
                    {recentGames.map((g, i) => (
                      <GameRow key={i} game={g} clubName={player.club} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
