import Image from "next/image";
import { Player } from "@/data/players";

interface PlayerCardProps {
  player: Player;
  clubLogo: string | null;
  playerPhoto: string | null;
  onClick?: () => void;
}

export default function PlayerCard({ player, clubLogo, playerPhoto, onClick }: PlayerCardProps) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=111827&color=facc15&size=128&bold=true&format=png`;
  const photoSrc = playerPhoto ?? avatarUrl;

  return (
    <div
      className="bg-gray-900/60 border border-white/10 rounded-xl p-3 flex items-center gap-3 hover:border-yellow-500/40 hover:bg-gray-800/60 transition-colors group cursor-pointer"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") onClick(); } : undefined}
    >
      {/* Player photo */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-800 ring-2 ring-white/5">
        <Image
          src={photoSrc}
          alt={player.name}
          fill
          className="object-cover object-top"
          unoptimized={!playerPhoto}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm truncate group-hover:text-yellow-400 transition-colors leading-tight">
          {player.name}
        </p>
        <div className="flex items-center gap-1.5 mt-1">
          {clubLogo ? (
            <div className="relative w-5 h-5 flex-shrink-0">
              <Image
                src={clubLogo}
                alt={player.club}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center text-[7px] font-bold text-gray-300 flex-shrink-0">
              {player.club.slice(0, 2).toUpperCase()}
            </div>
          )}
          <p className="text-gray-400 text-xs truncate">{player.club}</p>
        </div>
      </div>
    </div>
  );
}
