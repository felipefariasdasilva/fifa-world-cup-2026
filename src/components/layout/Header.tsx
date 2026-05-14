export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚽</span>
          <span className="text-white font-bold text-lg tracking-wide">
            Copa do Mundo 2026
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">FIFA World Cup</span>
          <span className="text-lg">🌎</span>
        </div>
      </div>
    </header>
  );
}
