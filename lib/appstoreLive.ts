// 빌드 시 scripts/sync-appstore.mjs 가 갱신하는 App Store 라이브 메타데이터.
// 평점·버전은 여기서(자동), 스크린샷·아이콘·가격 등은 lib/apps.ts(수동 큐레이션).
import data from "./appstore-live.json";

export type LiveInfo = {
  rating: number | null;
  ratingCount: number;
  version: string | null;
  minOS: string | null;
  releasedAt: string | null;
};

const map = data as Record<string, LiveInfo>;

export function getLive(id: string): LiveInfo | undefined {
  return map[id];
}

/** 표시용 평점: 리뷰가 1개 이상일 때만 라이브 평점, 없으면 정적 fallback. */
export function displayRating(id: string, fallback?: number): number | undefined {
  const l = map[id];
  if (l && l.ratingCount > 0 && typeof l.rating === "number") return l.rating;
  return fallback;
}

/** 표시용 버전 (없으면 undefined). */
export function liveVersion(id: string): string | undefined {
  return map[id]?.version ?? undefined;
}
