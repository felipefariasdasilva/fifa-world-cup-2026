const timelineEvents = [
  {
    date: "18/05/2026",
    title: "Convocação oficial",
    description: "Carlo Ancelotti anuncia os 26 convocados no Museu do Amanhã, Rio de Janeiro.",
    icon: "📋",
    type: "convocacao",
  },
  {
    date: "26/05/2026",
    title: "Início da concentração",
    description: "Jogadores se apresentam na Granja Comary, em Teresópolis (RJ), para iniciar a preparação.",
    icon: "🏕️",
    type: "preparacao",
  },
  {
    date: "31/05/2026",
    title: "Amistoso — Brasil × Panamá",
    description: "Último amistoso em casa antes da Copa. Maracanã, Rio de Janeiro, às 18h30 (BRT).",
    icon: "⚽",
    type: "amistoso",
  },
  {
    date: "06/06/2026",
    title: "Amistoso — Brasil × Egito",
    description: "Último teste antes da estreia no Mundial. Jogo nos EUA.",
    icon: "⚽",
    type: "amistoso",
  },
  {
    date: "13/06/2026",
    title: "Estreia — Brasil × Marrocos",
    description: "Fase de Grupos — Grupo C. MetLife Stadium, East Rutherford (NJ). 19h00 BRT.",
    icon: "🇧🇷",
    type: "copa",
  },
  {
    date: "19/06/2026",
    title: "Brasil × Haiti",
    description: "Fase de Grupos — Grupo C. Lincoln Financial Field, Philadelphia (PA). 21h30 BRT.",
    icon: "🇧🇷",
    type: "copa",
  },
  {
    date: "24/06/2026",
    title: "Escócia × Brasil",
    description: "Fase de Grupos — Grupo C. Hard Rock Stadium, Miami Gardens (FL). 19h00 BRT.",
    icon: "🇧🇷",
    type: "copa",
  },
];

const typeColors: Record<string, string> = {
  convocacao: "border-yellow-500 bg-yellow-500/10 text-yellow-400",
  preparacao: "border-blue-500 bg-blue-500/10 text-blue-400",
  amistoso: "border-gray-500 bg-gray-500/10 text-gray-400",
  copa: "border-green-500 bg-green-500/10 text-green-400",
};

const dotColors: Record<string, string> = {
  convocacao: "bg-yellow-500",
  preparacao: "bg-blue-500",
  amistoso: "bg-gray-500",
  copa: "bg-green-500",
};

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-gray-950 px-4 py-24 lg:py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold tracking-[0.3em] text-yellow-500 uppercase">
              Seleção Brasileira
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white">Timeline</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Da convocação à Copa do Mundo 2026
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { type: "convocacao", label: "Convocação" },
            { type: "preparacao", label: "Preparação" },
            { type: "amistoso", label: "Amistoso" },
            { type: "copa", label: "Copa do Mundo" },
          ].map(({ type, label }) => (
            <span
              key={type}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${typeColors[type]}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${dotColors[type]}`} />
              {label}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />

          <div className="flex flex-col gap-0">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex gap-6 pb-8 last:pb-0">
                {/* Dot */}
                <div className="relative flex-shrink-0 flex items-start pt-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg z-10 border-2 ${
                      event.type === "copa"
                        ? "border-green-500 bg-green-500/20"
                        : event.type === "convocacao"
                        ? "border-yellow-500 bg-yellow-500/20"
                        : event.type === "amistoso"
                        ? "border-gray-500 bg-gray-500/20"
                        : "border-blue-500 bg-blue-500/20"
                    }`}
                  >
                    {event.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5">
                  <p className="text-xs text-gray-500 font-mono mb-1">{event.date}</p>
                  <h3 className="text-white font-bold text-base leading-tight mb-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
