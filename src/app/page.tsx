import CountdownTimer from "@/components/features/countdown/CountdownTimer";
import { ConvocacaoInfo } from "@/types";

// Convocação da Seleção Brasileira - 20 de maio de 2026, 11:00 BRT (UTC-3)
const CONVOCACAO_DATE = new Date("2026-05-20T14:00:00Z");

const convocacao: ConvocacaoInfo = {
  date: CONVOCACAO_DATE,
  displayDate: "20 de maio de 2026",
  displayTime: "11h00 (horário de Brasília)",
  location: "Sede da CBF — Rio de Janeiro, RJ",
  channels: [
    { name: "TV Globo", url: "https://www.globo.com/esporte" },
    { name: "SporTV", url: "https://sportv.globo.com" },
    { name: "Globoplay", url: "https://globoplay.globo.com" },
    { name: "CBF TV (YouTube)", url: "https://www.youtube.com/@CBFfutebol" },
    { name: "ge.globo.com", url: "https://ge.globo.com" },
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Flag strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500" />

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center gap-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-4xl">🇧🇷</span>
            <span className="text-sm font-semibold tracking-[0.3em] text-yellow-500 uppercase">
              Seleção Brasileira
            </span>
            <span className="text-4xl">🇧🇷</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            CONVOCAÇÃO PARA A
          </h1>
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent leading-tight">
            COPA DO MUNDO 2026
          </h2>
          <p className="text-gray-400 text-lg mt-2">Faltam apenas...</p>
        </div>

        {/* Countdown */}
        <CountdownTimer targetDate={CONVOCACAO_DATE} />

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
          {/* Date & Time */}
          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📅</span>
              <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase">
                Data &amp; Horário
              </span>
            </div>
            <p className="text-white font-bold text-lg">{convocacao.displayDate}</p>
            <p className="text-gray-300 text-sm mt-1">{convocacao.displayTime}</p>
          </div>

          {/* Location */}
          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📍</span>
              <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase">
                Local
              </span>
            </div>
            <p className="text-white font-bold text-lg">Sede da CBF</p>
            <p className="text-gray-300 text-sm mt-1">Rio de Janeiro, RJ — Brasil</p>
          </div>

          {/* Where to watch */}
          <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📺</span>
              <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase">
                Onde assistir
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {convocacao.channels.map((channel) =>
                channel.url ? (
                  <a
                    key={channel.name}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block flex-shrink-0" />
                    {channel.name}
                  </a>
                ) : (
                  <span
                    key={channel.name}
                    className="text-sm text-gray-300 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block flex-shrink-0" />
                    {channel.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* World Cup info */}
        <div className="text-center space-y-2 text-gray-500 text-sm">
          <p>
            🏆 Copa do Mundo FIFA 2026 &nbsp;·&nbsp; 11 de junho a 19 de julho de 2026
          </p>
          <p>EUA 🇺🇸 · Canadá 🇨🇦 · México 🇲🇽</p>
        </div>
      </div>

      {/* Bottom flag strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500" />
    </main>
  );
}
