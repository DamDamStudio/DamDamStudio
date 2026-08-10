// App Store 메타데이터(평점·버전 등) 자동 동기화.
// 빌드 전(prebuild)에 실행되어 lib/appstore-live.json 을 갱신한다.
// 실패해도 기존 값을 유지하고 정상 종료 → 빌드를 절대 깨지 않는다.
// 스크린샷·아이콘은 여기서 다루지 않음(수동 큐레이션 유지).

import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "lib", "appstore-live.json");

// 사이트 앱 id → App Store 숫자 id
const APPS = {
  yeoro: 6762110177,
  dayin: 6780700085,
  savvy: 6795720506,
};

async function lookup(id) {
  const url = `https://itunes.apple.com/lookup?id=${id}&country=kr`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const d = json.results?.[0];
  if (!d) throw new Error("no result");
  return {
    rating:
      typeof d.averageUserRating === "number"
        ? Math.round(d.averageUserRating * 10) / 10
        : null,
    ratingCount: d.userRatingCount ?? 0,
    version: d.version ?? null,
    minOS: d.minimumOsVersion ?? null,
    releasedAt: d.currentVersionReleaseDate ?? null,
  };
}

async function main() {
  // 기존값 로드 (개별 fetch 실패 시 그 앱은 기존값 유지)
  let prev = {};
  if (existsSync(OUT)) {
    try {
      prev = JSON.parse(readFileSync(OUT, "utf8"));
    } catch {}
  }
  const out = { ...prev };

  for (const [key, id] of Object.entries(APPS)) {
    try {
      out[key] = await lookup(id);
      const l = out[key];
      console.log(
        `[sync] ${key}: ★${l.rating ?? "-"} (${l.ratingCount}) · v${l.version ?? "-"}`,
      );
    } catch (e) {
      console.warn(`[sync] ${key} 실패 — 기존값 유지: ${e.message}`);
    }
  }

  writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
  console.log(`[sync] wrote ${OUT}`);
}

main().catch((e) => {
  console.warn("[sync] 전체 실패 — 기존값 사용:", e.message);
  process.exit(0); // 빌드를 깨지 않음
});
