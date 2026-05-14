const CLUB_NAME_MAP: Record<string, string> = {
  "Inter de Milão": "Inter Milan",
  "Fenerbahçe": "Fenerbahce",
  "Grêmio": "Gremio",
  "PSG": "Paris Saint-Germain",
  "Betis": "Real Betis",
  "Al-Nassr": "Al Nassr",
  "Al-Ahli": "Al Ahli Saudi",
  "Al-Ittihad": "Al-Ittihad Club",
  "Vasco": "Vasco da Gama",
  "Newcastle": "Newcastle United",
  "Wolverhampton": "Wolverhampton Wanderers",
  "Tottenham": "Tottenham Hotspur",
  "Nottingham Forest": "Nottingham Forest",
  "Manchester United": "Manchester United",
  "Zenit": "Zenit Saint Petersburg",
};

async function getTeamBadge(clubName: string): Promise<string | null> {
  const searchName = CLUB_NAME_MAP[clubName] ?? clubName;
  try {
    const res = await fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(searchName)}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return (data.teams?.[0]?.strTeamBadge as string) ?? null;
  } catch {
    return null;
  }
}

export async function getClubLogos(clubs: string[]): Promise<Record<string, string>> {
  const uniqueClubs = [...new Set(clubs)];
  const entries = await Promise.all(
    uniqueClubs.map(async (club) => {
      const logo = await getTeamBadge(club);
      return [club, logo ?? ""] as [string, string];
    })
  );
  return Object.fromEntries(entries);
}
