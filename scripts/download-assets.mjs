import { writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CLUBS_DIR = join(ROOT, "public/images/clubs");
const PLAYERS_DIR = join(ROOT, "public/images/players");

// ── Club mappings ──────────────────────────────────────────────────────────
// Maps project club name → ESPN API display name
const CLUB_ESPN_NAMES = {
  "Liverpool": "Liverpool",
  "Al-Nassr": "Al Nassr",
  "Fenerbahçe": "Fenerbahce",
  "Corinthians": "Corinthians",
  "Nottingham Forest": "Nottingham Forest",
  "Grêmio": "Grêmio",
  "Flamengo": "Flamengo",
  "Lille": "Lille",
  "Juventus": "Juventus",
  "Inter de Milão": "Internazionale",
  "Zenit": "Zenit St Petersburg",
  "Cruzeiro": "Cruzeiro",
  "Arsenal": "Arsenal",
  "Al-Ahli": "Al Ahli",
  "Bahia": "Bahia",
  "PSG": "Paris Saint-Germain",
  "Betis": "Real Betis",
  "Vasco": "Vasco da Gama",
  "Porto": "FC Porto",
  "Botafogo": "Botafogo",
  "Girona": "Girona",
  "Roma": "AS Roma",
  "Palmeiras": "Palmeiras",
  "Chelsea": "Chelsea",
  "Newcastle": "Newcastle United",
  "Manchester United": "Manchester United",
  "Atalanta": "Atalanta",
  "Al-Ittihad": "Al Ittihad",
  "Galatasaray": "Galatasaray",
  "Wolverhampton": "Wolverhampton Wanderers",
  "Lyon": "Lyon",
  "Brentford": "Brentford",
  "Santos": "Santos",
  "Barcelona": "Barcelona",
  "Bournemouth": "AFC Bournemouth",
  "Tottenham": "Tottenham Hotspur",
  "Real Madrid": "Real Madrid",
};

// ── Player Wikipedia titles: [enTitle, ptTitle?] ──────────────────────────
const PLAYER_WIKI = {
  "Alisson":           ["Alisson Becker"],
  "Bento":             ["Bento (footballer, born 1997)", "Bento (futebolista)"],
  "Ederson":           ["Ederson Moraes", "Ederson (goleiro)"],
  "Hugo Souza":        ["Hugo Souza", "Hugo Souza (futebolista)"],
  "John":              ["John (goalkeeper)"],
  "Weverton":          ["Weverton", "Weverton Pereira Alves"],
  "Alex Sandro":       ["Alex Sandro"],
  "Alexsandro Ribeiro":["Alexsandro Ribeiro"],
  "Bremer":            ["Gleison Bremer", "Bremer (futebolista)"],
  "Carlos Augusto":    ["Carlos Augusto (footballer, born 1999)", "Carlos Augusto (futebolista nascido em 1999)"],
  "Danilo":            ["Danilo (footballer, born 1991)", "Danilo Luiz"],
  "Douglas Santos":    ["Douglas Santos (footballer)", "Douglas Santos (futebolista)"],
  "Fabricio Bruno":    ["Fabrício Bruno", "Fabrício Bruno (futebolista)"],
  "Gabriel Magalhães": ["Gabriel Magalhães"],
  "Ibañez":            ["Arthur Ibanéz", "Arthur Ibanez"],
  "Kaiki Bruno":       ["Kaiki Bruno"],
  "Leo Ortiz":         ["Léo Ortiz", "Léo Ortiz (futebolista)"],
  "Leo Pereira":       ["Léo Pereira", "Léo Pereira (futebolista)"],
  "Luciano Juba":      ["Luciano Juba"],
  "Marquinhos":        ["Marquinhos (footballer)", "Marcos Aoás Corrêa"],
  "Natan":             ["Natan (footballer)", "Natan Bernardo"],
  "Paulo Henrique":    ["Paulo Henrique (footballer, born 2003)", "Paulo Henrique Sampaio Filho"],
  "Thiago Silva":      ["Thiago Silva"],
  "Vitinho":           ["Vitinho (born 2000)", "Vitinho (futebolista nascido em 2000)"],
  "Vitor Reis":        ["Vitor Reis (footballer)", "Vitor Reis (futebolista)"],
  "Wesley":            ["Wesley Gassova"],
  "Andreas Pereira":   ["Andreas Pereira"],
  "Andrey Santos":     ["Andrey Santos"],
  "Bruno Guimarães":   ["Bruno Guimarães"],
  "Casemiro":          ["Casemiro"],
  "Fabinho":           ["Fabinho (footballer, born 1993)", "Fabinho (futebolista nascido em 1993)"],
  "Gabriel Sara":      ["Gabriel Sara"],
  "Gerson":            ["Gerson (footballer, born 1997)", "Gerson (futebolista nascido em 1997)"],
  "João Gomes":        ["João Gomes (footballer, born 2001)", "João Gomes (futebolista nascido em 2001)"],
  "Lucas Paquetá":     ["Lucas Paquetá"],
  "Matheus Pereira":   ["Matheus Pereira", "Matheus Pereira (futebolista nascido em 1996)"],
  "Antony":            ["Antony Matheus dos Santos"],
  "Endrick":           ["Endrick (footballer)", "Endrick"],
  "Gabriel Martinelli":["Gabriel Martinelli"],
  "Gabriel Jesus":     ["Gabriel Jesus"],
  "Igor Jesus":        ["Igor Jesus", "Igor Jesus (futebolista)"],
  "Igor Thiago":       ["Igor Thiago"],
  "João Pedro":        ["João Pedro (footballer, born 2001)", "João Pedro (futebolista nascido em 2001)"],
  "Kaio Jorge":        ["Kaio Jorge"],
  "Luiz Henrique":     ["Luiz Henrique (footballer, born 2001)", "Luiz Henrique (futebolista)"],
  "Matheus Cunha":     ["Matheus Cunha"],
  "Neymar":            ["Neymar"],
  "Pedro":             ["Pedro Guilherme Abreu dos Santos", "Pedro Guilherme"],
  "Raphinha":          ["Raphinha"],
  "Rayan":             ["Rayan (footballer)", "Rayan (futebolista)"],
  "Richarlison":       ["Richarlison"],
  "Samuel Lino":       ["Samuel Lino"],
  "Vini Jr":           ["Vinicius Júnior"],
};

// Danilo (Botafogo) and Danilo (Flamengo) share same wiki — use same title
// Ederson goalkeeper vs midfielder — differentiated above

const PLAYERS = [
  { name: "Alisson", club: "Liverpool" },
  { name: "Bento", club: "Al-Nassr" },
  { name: "Ederson", club: "Fenerbahçe" },
  { name: "Hugo Souza", club: "Corinthians" },
  { name: "John", club: "Nottingham Forest" },
  { name: "Weverton", club: "Grêmio" },
  { name: "Alex Sandro", club: "Flamengo" },
  { name: "Alexsandro Ribeiro", club: "Lille" },
  { name: "Bremer", club: "Juventus" },
  { name: "Carlos Augusto", club: "Inter de Milão" },
  { name: "Danilo", club: "Flamengo" },
  { name: "Douglas Santos", club: "Zenit" },
  { name: "Fabricio Bruno", club: "Cruzeiro" },
  { name: "Gabriel Magalhães", club: "Arsenal" },
  { name: "Ibañez", club: "Al-Ahli" },
  { name: "Kaiki Bruno", club: "Cruzeiro" },
  { name: "Leo Ortiz", club: "Flamengo" },
  { name: "Leo Pereira", club: "Flamengo" },
  { name: "Luciano Juba", club: "Bahia" },
  { name: "Marquinhos", club: "PSG" },
  { name: "Natan", club: "Betis" },
  { name: "Paulo Henrique", club: "Vasco" },
  { name: "Thiago Silva", club: "Porto" },
  { name: "Vitinho", club: "Botafogo" },
  { name: "Vitor Reis", club: "Girona" },
  { name: "Wesley", club: "Roma" },
  { name: "Andreas Pereira", club: "Palmeiras" },
  { name: "Andrey Santos", club: "Chelsea" },
  { name: "Bruno Guimarães", club: "Newcastle" },
  { name: "Casemiro", club: "Manchester United" },
  { name: "Danilo", club: "Botafogo" },
  { name: "Ederson", club: "Atalanta" },
  { name: "Fabinho", club: "Al-Ittihad" },
  { name: "Gabriel Sara", club: "Galatasaray" },
  { name: "Gerson", club: "Cruzeiro" },
  { name: "João Gomes", club: "Wolverhampton" },
  { name: "Lucas Paquetá", club: "Flamengo" },
  { name: "Matheus Pereira", club: "Cruzeiro" },
  { name: "Antony", club: "Betis" },
  { name: "Endrick", club: "Lyon" },
  { name: "Gabriel Martinelli", club: "Arsenal" },
  { name: "Gabriel Jesus", club: "Arsenal" },
  { name: "Igor Jesus", club: "Nottingham Forest" },
  { name: "Igor Thiago", club: "Brentford" },
  { name: "João Pedro", club: "Chelsea" },
  { name: "Kaio Jorge", club: "Cruzeiro" },
  { name: "Luiz Henrique", club: "Zenit" },
  { name: "Matheus Cunha", club: "Manchester United" },
  { name: "Neymar", club: "Santos" },
  { name: "Pedro", club: "Flamengo" },
  { name: "Raphinha", club: "Barcelona" },
  { name: "Rayan", club: "Bournemouth" },
  { name: "Richarlison", club: "Tottenham" },
  { name: "Samuel Lino", club: "Flamengo" },
  { name: "Vini Jr", club: "Real Madrid" },
];

function slugify(name) {
  return name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!res.ok) return false;
    const buf = await res.arrayBuffer();
    if (buf.byteLength < 300) return false;
    writeFileSync(destPath, Buffer.from(buf));
    return true;
  } catch {
    return false;
  }
}

async function buildEspnClubMap() {
  const leagues = ["eng.1","ita.1","esp.1","fra.1","bra.1","por.1","tur.1","ger.1","ksa.1","sco.1","ned.1","rus.1","arg.1"];
  const map = {};
  for (const league of leagues) {
    try {
      const res = await fetch(
        `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/teams?limit=50`,
        { headers: { "User-Agent": "Mozilla/5.0" }, signal: AbortSignal.timeout(8000) }
      );
      const d = await res.json();
      const teams = d.sports?.[0]?.leagues?.[0]?.teams ?? [];
      for (const t of teams) {
        const name = t.team.displayName;
        const logo = t.team.logos?.[0]?.href ?? "";
        if (logo) map[name] = logo;
      }
    } catch {}
  }
  return map;
}

async function fetchWikiSummary(lang, title) {
  const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Copa2026/1.0)" },
      signal: AbortSignal.timeout(12000),
    });
    if (!res.ok) return null;
    const text = await res.text();
    if (!text.startsWith("{")) return null;
    const d = JSON.parse(text);
    return d.thumbnail?.source ?? d.originalimage?.source ?? null;
  } catch {
    return null;
  }
}

async function getWikiPhoto(wikiTitle, ptTitle = null) {
  // Try English Wikipedia first
  const enResult = await fetchWikiSummary("en", wikiTitle);
  if (enResult) return enResult;
  // Fallback to Portuguese Wikipedia
  if (ptTitle) {
    await new Promise((r) => setTimeout(r, 500));
    return fetchWikiSummary("pt", ptTitle);
  }
  return null;
}

async function main() {
  const manifest = { clubs: {}, players: {} };

  // ── CLUB LOGOS ─────────────────────────────────────────────────────────
  console.log("📦 Carregando mapa de times da ESPN...");
  const espnMap = await buildEspnClubMap();
  console.log(`   ${Object.keys(espnMap).length} times carregados.\n`);

  const uniqueClubs = [...new Set(PLAYERS.map((p) => p.club))];
  console.log(`📦 Baixando escudos de ${uniqueClubs.length} clubes...\n`);
  let clubOk = 0, clubFail = 0;

  for (const club of uniqueClubs) {
    const slug = slugify(club);
    const destPath = join(CLUBS_DIR, `${slug}.png`);

    if (existsSync(destPath)) {
      manifest.clubs[club] = `/images/clubs/${slug}.png`;
      clubOk++; continue;
    }

    const espnName = CLUB_ESPN_NAMES[club] ?? club;
    const logoUrl = espnMap[espnName];
    if (!logoUrl) { console.log(`  ✗ ${club} (ESPN: "${espnName}" não encontrado)`); clubFail++; continue; }

    const ok = await downloadImage(logoUrl, destPath);
    if (ok) {
      console.log(`  ✓ ${club}`);
      manifest.clubs[club] = `/images/clubs/${slug}.png`;
      clubOk++;
    } else {
      console.log(`  ✗ ${club} — falha no download`);
      clubFail++;
    }
    await new Promise((r) => setTimeout(r, 150));
  }

  // ── PLAYER PHOTOS ──────────────────────────────────────────────────────
  console.log(`\n👤 Baixando fotos de jogadores via Wikipedia...\n`);
  let playerOk = 0, playerFail = 0;
  const seen = new Set();

  for (const player of PLAYERS) {
    const slug = slugify(player.name);
    if (seen.has(slug)) {
      // duplicate name (Danilo x2, Ederson x2) — reuse same file
      manifest.players[`${player.name}__${player.club}`] = `/images/players/${slug}.png`;
      if (existsSync(join(PLAYERS_DIR, `${slug}.png`))) playerOk++;
      continue;
    }
    seen.add(slug);

    const destPath = join(PLAYERS_DIR, `${slug}.png`);
    if (existsSync(destPath)) {
      console.log(`  ✓ ${player.name} (já existe)`);
      manifest.players[player.name] = `/images/players/${slug}.png`;
      playerOk++; continue;
    }

    const wikiEntry = PLAYER_WIKI[player.name] ?? [player.name];
    const photoUrl = await getWikiPhoto(wikiEntry[0], wikiEntry[1]);

    if (!photoUrl) {
      console.log(`  ✗ ${player.name} (wiki: "${wikiEntry[0]}") — sem foto`);
      playerFail++; continue;
    }

    const ok = await downloadImage(photoUrl, destPath);
    if (ok) {
      console.log(`  ✓ ${player.name}`);
      manifest.players[player.name] = `/images/players/${slug}.png`;
      playerOk++;
    } else {
      console.log(`  ✗ ${player.name} — falha no download`);
      playerFail++;
    }
    await new Promise((r) => setTimeout(r, 1500));
  }

  writeFileSync(join(ROOT, "src/data/assets-manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`
╔══════════════════════════════════════╗
║           DOWNLOAD CONCLUÍDO         ║
╠══════════════════════════════════════╣
║  Escudos:   ${String(clubOk).padStart(2)} ok  /  ${String(clubFail).padStart(2)} falha            ║
║  Jogadores: ${String(playerOk).padStart(2)} ok  /  ${String(playerFail).padStart(2)} falha            ║
╚══════════════════════════════════════╝
  `);
}

main().catch(console.error);
