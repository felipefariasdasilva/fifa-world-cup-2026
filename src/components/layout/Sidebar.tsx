"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Countdown", icon: "⏱️" },
  { href: "/convocacao", label: "Convocação", icon: "👕" },
  { href: "/jogos", label: "Jogos", icon: "⚽" },
  { href: "/estadios", label: "Estádios", icon: "🏟️" },
  { href: "/timeline", label: "Timeline", icon: "📅" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive
                ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-60 bg-gray-950 border-r border-white/10 flex-col z-40">
        <div className="px-5 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚽</span>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Copa do Mundo</p>
              <p className="text-yellow-500 text-xs font-semibold tracking-wide">FIFA 2026</p>
            </div>
          </div>
        </div>
        <NavLinks />
        <div className="px-5 py-4 border-t border-white/10">
          <p className="text-gray-600 text-xs">🇧🇷 Seleção Brasileira</p>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚽</span>
            <span className="text-white font-bold text-sm">Copa 2026</span>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="lg:hidden fixed top-0 left-0 h-full w-72 bg-gray-950 border-r border-white/10 z-50 flex flex-col animate-in slide-in-from-left">
            <div className="px-5 py-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚽</span>
                <div>
                  <p className="text-white font-bold text-sm">Copa do Mundo</p>
                  <p className="text-yellow-500 text-xs font-semibold">FIFA 2026</p>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Fechar menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <NavLinks onClick={() => setMobileOpen(false)} />
            <div className="px-5 py-4 border-t border-white/10">
              <p className="text-gray-600 text-xs">🇧🇷 Seleção Brasileira</p>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
