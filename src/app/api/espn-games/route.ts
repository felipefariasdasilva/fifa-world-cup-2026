import { NextRequest, NextResponse } from "next/server";

interface ESPNCompetitor {
  homeAway: "home" | "away";
  score?: { displayValue: string };
  team?: { displayName: string; abbreviation: string };
}

interface ESPNEvent {
  date: string;
  name: string;
  competitions: Array<{
    status: { type: { completed: boolean; description: string } };
    competitors: ESPNCompetitor[];
    tournament?: { name: string };
  }>;
  season?: { year: number; type: { name: string } };
  links?: Array<{ text: string; href: string }>;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const league = searchParams.get("league");
  const teamId = searchParams.get("teamId");

  if (!league || !teamId) {
    return NextResponse.json({ error: "Missing league or teamId" }, { status: 400 });
  }

  const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/teams/${teamId}/schedule`;

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(6000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible)" },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json({ events: [] }, { status: 200 });
    }

    const data = await res.json();
    const allEvents: ESPNEvent[] = data.events ?? [];

    const completed = allEvents
      .filter((e) => e.competitions?.[0]?.status?.type?.completed === true)
      .slice(-3)
      .map((e) => {
        const comp = e.competitions[0];
        const home = comp.competitors.find((c) => c.homeAway === "home");
        const away = comp.competitors.find((c) => c.homeAway === "away");
        return {
          date: e.date,
          homeTeam: home?.team?.displayName ?? "?",
          awayTeam: away?.team?.displayName ?? "?",
          homeScore: home?.score?.displayValue ?? "-",
          awayScore: away?.score?.displayValue ?? "-",
          status: comp.status.type.description,
        };
      });

    return NextResponse.json({ events: completed });
  } catch {
    return NextResponse.json({ events: [] }, { status: 200 });
  }
}
