import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Copa do Mundo 2026 — Seleção Brasileira",
  description: "Acompanhe as informações da Seleção Brasileira na Copa do Mundo FIFA 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-gray-950">
        <Sidebar />
        <div className="lg:pl-60 pt-14 lg:pt-0 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
