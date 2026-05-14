"use client";

import { useEffect, useState } from "react";
import { getCountdown, padZero } from "@/lib/utils";
import { CountdownTime } from "@/types";

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [time, setTime] = useState<CountdownTime>(getCountdown(targetDate));
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getCountdown(targetDate);
      setTime(remaining);

      if (
        remaining.days === 0 &&
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        setIsOver(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (isOver) {
    return (
      <div className="text-center">
        <p className="text-4xl md:text-6xl font-bold text-yellow-400 animate-pulse">
          🇧🇷 A CONVOCAÇÃO JÁ ACONTECEU! 🇧🇷
        </p>
      </div>
    );
  }

  const units = [
    { label: "DIAS", value: time.days },
    { label: "HORAS", value: time.hours },
    { label: "MINUTOS", value: time.minutes },
    { label: "SEGUNDOS", value: time.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {units.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl px-6 py-4 md:px-10 md:py-6 shadow-2xl shadow-yellow-500/10">
                <span className="text-6xl md:text-8xl lg:text-9xl font-black text-white tabular-nums leading-none tracking-tight">
                  {padZero(unit.value)}
                </span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            </div>
            <span className="mt-3 text-xs md:text-sm font-semibold tracking-[0.2em] text-yellow-500/80 uppercase">
              {unit.label}
            </span>
          </div>
          {index < units.length - 1 && (
            <span className="text-4xl md:text-6xl lg:text-7xl font-black text-yellow-500 mb-6 animate-pulse">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
