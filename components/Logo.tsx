import type { CSSProperties } from "react";

/**
 * 담담스튜디오 심볼 — 마주 보는 두 ㄷ('담담淡淡') + 중앙 점토색 점.
 * 출처: logo/damdam-mark.svg (brand mark guide). 색은 prop으로 변형.
 */
export function Mark({
  className,
  stroke = "#211e1a",
  dot = "#b0573c",
  style,
}: {
  className?: string;
  stroke?: string;
  dot?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      role="img"
      aria-label="담담스튜디오 심볼"
    >
      <g
        fill="none"
        stroke={stroke}
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M44 28 H26 V72 H44" />
        <path d="M56 28 H74 V72 H56" />
      </g>
      <circle cx="50" cy="50" r="5.5" fill={dot} />
    </svg>
  );
}

/**
 * 앱 아이콘형 — 둥근 사각 안에 심볼. variant로 먹색/한지/점토.
 */
export function IconBadge({
  variant = "ink",
  className,
}: {
  variant?: "ink" | "paper" | "clay";
  className?: string;
}) {
  const map = {
    ink: { bg: "#211e1a", stroke: "#f4f0e8", dot: "#c08b6b" },
    paper: { bg: "#f4f0e8", stroke: "#211e1a", dot: "#b0573c" },
    clay: { bg: "#b0573c", stroke: "#f4f0e8", dot: "#f4f0e8" },
  }[variant];

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="담담스튜디오 앱 아이콘">
      <rect width="200" height="200" rx="46" fill={map.bg} />
      <g
        transform="translate(50 50)"
        fill="none"
        stroke={map.stroke}
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M44 28 H26 V72 H44" />
        <path d="M56 28 H74 V72 H56" />
      </g>
      <circle cx="100" cy="100" r="5.5" fill={map.dot} />
    </svg>
  );
}

/**
 * 가로 로크업(Primary): 심볼 + 담담스튜디오 / DAMDAM STUDIO.
 */
export function Lockup({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Mark className="h-7 w-7" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-base font-semibold tracking-tight text-ink">
          담담스튜디오
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
          DamDam Studio
        </span>
      </span>
    </span>
  );
}
