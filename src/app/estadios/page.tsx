import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estádios — Copa do Mundo 2026",
  description: "Todos os 16 estádios que sediarão a Copa do Mundo FIFA 2026 no Canadá, México e EUA.",
};

interface Stadium {
  name: string;
  city: string;
  state: string;
  country: "EUA" | "México" | "Canadá";
  capacity: number;
  surface: string;
  opened: number;
  highlight?: string;
  groups: string[];
}

const stadiums: Stadium[] = [
  // ── EUA ──────────────────────────────────────────────────────────────────
  {
    name: "MetLife Stadium",
    city: "East Rutherford", state: "Nova Jersey", country: "EUA",
    capacity: 82_500, surface: "Gramado natural", opened: 2010,
    highlight: "Sede da Final (19 jul 2026)",
    groups: ["C", "E", "I", "L"],
  },
  {
    name: "AT&T Stadium",
    city: "Arlington", state: "Texas", country: "EUA",
    capacity: 94_000, surface: "Gramado sintético", opened: 2009,
    highlight: "Maior estádio do torneio",
    groups: ["F", "J", "L"],
  },
  {
    name: "SoFi Stadium",
    city: "Los Angeles", state: "Califórnia", country: "EUA",
    capacity: 70_240, surface: "Gramado natural", opened: 2020,
    groups: ["B", "D", "G"],
  },
  {
    name: "NRG Stadium",
    city: "Houston", state: "Texas", country: "EUA",
    capacity: 72_220, surface: "Gramado natural", opened: 2002,
    groups: ["E", "F", "K"],
  },
  {
    name: "Hard Rock Stadium",
    city: "Miami Gardens", state: "Flórida", country: "EUA",
    capacity: 65_000, surface: "Gramado natural", opened: 1987,
    groups: ["C", "H", "K"],
  },
  {
    name: "Lincoln Financial Field",
    city: "Philadelphia", state: "Pensilvânia", country: "EUA",
    capacity: 69_000, surface: "Gramado natural", opened: 2003,
    groups: ["C", "E", "I", "L"],
  },
  {
    name: "Mercedes-Benz Stadium",
    city: "Atlanta", state: "Geórgia", country: "EUA",
    capacity: 71_000, surface: "Gramado natural", opened: 2017,
    groups: ["A", "C", "H", "K"],
  },
  {
    name: "Lumen Field",
    city: "Seattle", state: "Washington", country: "EUA",
    capacity: 69_000, surface: "Gramado sintético", opened: 2002,
    groups: ["B", "D", "G", "I"],
  },
  {
    name: "Arrowhead Stadium",
    city: "Kansas City", state: "Missouri", country: "EUA",
    capacity: 76_400, surface: "Gramado natural", opened: 1972,
    groups: ["E", "I", "J"],
  },
  {
    name: "Levi's Stadium",
    city: "Santa Clara", state: "Califórnia", country: "EUA",
    capacity: 68_500, surface: "Gramado natural", opened: 2014,
    groups: ["B", "D", "J"],
  },
  {
    name: "Gillette Stadium",
    city: "Foxborough", state: "Massachusetts", country: "EUA",
    capacity: 65_878, surface: "Gramado natural", opened: 2002,
    groups: ["C", "I", "L"],
  },
  // ── CANADÁ ───────────────────────────────────────────────────────────────
  {
    name: "BC Place",
    city: "Vancouver", state: "Colúmbia Britânica", country: "Canadá",
    capacity: 54_000, surface: "Gramado sintético", opened: 1983,
    groups: ["B", "D", "G"],
  },
  {
    name: "BMO Field",
    city: "Toronto", state: "Ontário", country: "Canadá",
    capacity: 45_000, surface: "Gramado natural", opened: 2007,
    groups: ["B", "E", "I", "L"],
  },
  // ── MÉXICO ───────────────────────────────────────────────────────────────
  {
    name: "Estadio Azteca",
    city: "Cidade do México", state: "Cidade do México", country: "México",
    capacity: 83_000, surface: "Gramado natural", opened: 1966,
    highlight: "1º estádio a sediar 3 Copas do Mundo",
    groups: ["A", "K"],
  },
  {
    name: "Estadio BBVA",
    city: "Monterrey", state: "Nuevo León", country: "México",
    capacity: 53_500, surface: "Gramado natural", opened: 2015,
    groups: ["A", "F"],
  },
  {
    name: "Estadio Akron",
    city: "Guadalajara", state: "Jalisco", country: "México",
    capacity: 48_000, surface: "Gramado natural", opened: 2010,
    groups: ["A", "H", "K"],
  },
];

const countryFlag: Record<Stadium["country"], string> = {
  EUA: "🇺🇸",
  México: "🇲🇽",
  Canadá: "🇨🇦",
};

const countryColor: Record<Stadium["country"], string> = {
  EUA: "from-blue-600/20 to-red-600/20 border-blue-500/20",
  México: "from-green-600/20 to-red-600/20 border-green-500/20",
  Canadá: "from-red-600/20 to-red-600/10 border-red-500/20",
};

function StadiumCard({ stadium }: { stadium: Stadium }) {
  return (
    <div
      className={`bg-gradient-to-br ${countryColor[stadium.country]} border rounded-2xl p-5 flex flex-col gap-3 hover:scale-[1.01] transition-transform`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-white font-bold text-base leading-tight">{stadium.name}</h3>
          <p className="text-gray-400 text-xs mt-0.5">
            {countryFlag[stadium.country]} {stadium.city}, {stadium.state} — {stadium.country}
          </p>
        </div>
        {stadium.highlight && (
          <span className="text-xs bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-2 py-0.5 rounded-full whitespace-nowrap">
            ⭐ {stadium.highlight}
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-black/20 rounded-xl p-2">
          <p className="text-white font-bold text-sm">{stadium.capacity.toLocaleString("pt-BR")}</p>
          <p className="text-gray-500 text-xs">Capacidade</p>
        </div>
        <div className="bg-black/20 rounded-xl p-2">
          <p className="text-white font-bold text-sm">{stadium.opened}</p>
          <p className="text-gray-500 text-xs">Inauguração</p>
        </div>
        <div className="bg-black/20 rounded-xl p-2">
          <p className="text-white font-bold text-sm">{stadium.groups.length}</p>
          <p className="text-gray-500 text-xs">Grupos</p>
        </div>
      </div>

      <div>
        <p className="text-gray-500 text-xs mb-1.5">Grupos que jogam aqui</p>
        <div className="flex flex-wrap gap-1.5">
          {stadium.groups.map((g) => (
            <span
              key={g}
              className="text-xs bg-gray-800/60 border border-white/10 text-gray-300 px-2 py-0.5 rounded-full"
            >
              Grupo {g}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-500 text-xs">{stadium.surface}</p>
    </div>
  );
}

export default function EstadiosPage() {
  const byCountry = (["EUA", "México", "Canadá"] as const).map((country) => ({
    country,
    list: stadiums.filter((s) => s.country === country),
  }));

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-8 md:py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white">Estádios</h1>
          <p className="text-gray-400 mt-1 text-sm">
            16 sedes em 3 países · Copa do Mundo FIFA 2026
          </p>
        </div>

        {/* Summary strip */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {byCountry.map(({ country, list }) => (
            <div key={country} className="bg-gray-900/40 border border-white/10 rounded-2xl p-4 text-center">
              <p className="text-3xl mb-1">{countryFlag[country]}</p>
              <p className="text-white font-bold">{list.length}</p>
              <p className="text-gray-500 text-xs">{country}</p>
            </div>
          ))}
        </div>

        {/* Grouped by country */}
        {byCountry.map(({ country, list }) => (
          <section key={country} className="mb-12">
            <h2 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
              <span>{countryFlag[country]}</span> {country}
              <span className="text-gray-600 text-sm font-normal">({list.length} estádios)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {list.map((stadium) => (
                <StadiumCard key={stadium.name} stadium={stadium} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
