import type { Lang } from "./i18n";
import type { PrivacyConfig } from "./privacy";

export type AppStatus = "live" | "soon";

type L = Record<Lang, string>;
type LList = Record<Lang, string[]>;

export type AppItem = {
  id: string;
  /** Path under /public to the real app icon. */
  iconImage?: string;
  /** True when iconImage is a transparent logo — render padded on a white tile. */
  iconContain?: boolean;
  /** Emoji fallback used when no iconImage is set. */
  icon?: string;
  name: L;
  tagline: L;
  category: L;
  /** Short blurb shown on the card. */
  summary: L;
  rating?: number;
  free?: boolean;
  status: AppStatus;
  appStoreUrl?: string;
  googlePlayUrl?: string;

  // ── 상세 페이지(/apps/[id]) 용 ──
  /** Phone screenshots under /public. */
  screenshots?: string[];
  /** Intro paragraphs (split on \n\n when rendering). */
  overview?: L;
  /** "이런 분께 잘 맞아요" bullet list. */
  forWhom?: LList;
  /** "주요 기능" bullet list. */
  features?: LList;
  /** Closing line. */
  closing?: L;
  /** Info table. */
  developer?: string;
  requires?: L;
  languages?: L;
  price?: L;
  /** 개인정보 처리방침 설정 — 있으면 /apps/[id]/privacy 페이지가 생성됩니다. */
  privacy?: PrivacyConfig;
};

/**
 * Real catalog. Add new apps here — cards render from the list, and each "live"
 * app gets a detail page at /apps/<id> (see app/apps/[id]/page.tsx).
 */
export const apps: AppItem[] = [
  {
    id: "yeoro",
    iconImage: "/apps/yeoro.png",
    name: { ko: "여로", en: "Yeoro" },
    tagline: {
      ko: "일정·지출·환율을 한곳에",
      en: "Itinerary, spending & exchange in one place",
    },
    category: { ko: "여행 기록", en: "Travel" },
    summary: {
      ko: "여행 일정·환율·지출·회고를 하나의 여행 안에서 이어주는 기록 앱.",
      en: "A travel journal that threads itinerary, exchange, spending, and reflection into one trip.",
    },
    rating: 5.0,
    free: true,
    status: "live",
    appStoreUrl:
      "https://apps.apple.com/kr/app/%EC%97%AC%EB%A1%9C-%EC%97%AC%ED%96%89-%EA%B8%B0%EB%A1%9D/id6762110177",
    screenshots: [
      "/apps/yeoro/01.png",
      "/apps/yeoro/02.png",
      "/apps/yeoro/03.png",
      "/apps/yeoro/04.png",
      "/apps/yeoro/05.png",
      "/apps/yeoro/06.png",
    ],
    overview: {
      ko: "여로는 여행 일정, 환율, 지출 기록, 여행 회고를 하나의 여행 안에서 이어주는 여행 기록 앱입니다.\n\n여행을 준비할 때는 날짜별 일정을 정리하고, 여행 중에는 현지 금액을 기준 통화로 이해하며 지출을 남기고, 여행이 끝난 뒤에는 일정과 소비를 같은 흐름 안에서 다시 돌아볼 수 있습니다.\n\n여러 앱에 흩어져 있던 여행 정보를 한곳에 모아, 한 번의 여행이 어떻게 흘렀는지 차분하게 정리해보세요.",
      en: "Yeoro is a travel journal that threads your itinerary, exchange rates, spending, and reflection into a single trip.\n\nWhile preparing, organize your plans day by day; while traveling, log spending and read local prices in your home currency; and once the trip ends, look back on the schedule and spending in one continuous flow.\n\nBring travel details scattered across many apps into one place, and calmly capture how a single journey unfolded.",
    },
    forWhom: {
      ko: [
        "일정과 지출을 여러 앱에 나눠 관리하고 싶지 않은 개인 여행자",
        "해외여행 중 현지 금액을 빠르게 이해하고 싶은 사용자",
        "여행 후에도 다시 열어볼 수 있는 기록을 남기고 싶은 사용자",
      ],
      en: [
        "Solo travelers who don't want plans and spending split across apps",
        "Anyone who wants to grasp local prices quickly while abroad",
        "People who want a record they can reopen long after the trip",
      ],
    },
    features: {
      ko: [
        "여행 생성과 여행별 관리",
        "날짜별 일정 정리와 수정",
        "기준 통화 설정과 환율 확인",
        "여행 지출 기록과 예산 흐름 확인",
        "영수증 또는 사진 첨부",
        "여행 종료 후 일정과 지출을 함께 돌아보는 리뷰",
      ],
      en: [
        "Create and manage trips one by one",
        "Organize and edit day-by-day itineraries",
        "Set a base currency and check exchange rates",
        "Log spending and watch your budget flow",
        "Attach receipts or photos",
        "Review schedule and spending together after the trip",
      ],
    },
    closing: {
      ko: "여로는 화려한 기능보다 여행의 흐름을 놓치지 않는 기록 경험을 중요하게 생각합니다. 준비부터 기록, 회고까지 한 번의 여행을 한곳에서 이어보세요.",
      en: "Yeoro values a recording experience that follows the flow of a journey over flashy features. From planning to logging to looking back — keep one trip together, in one place.",
    },
    developer: "JinBae Jung",
    requires: { ko: "iOS 17.0 이상", en: "iOS 17.0 or later" },
    languages: { ko: "한국어 · English", en: "Korean · English" },
    price: { ko: "무료", en: "Free" },
    privacy: {
      email: "jjb8382@gmail.com",
      updated: "2026-06-18",
      storage: "device",
      ads: true,
      analytics: false,
    },
  },
  {
    // 출시 대기 중 — 출시되면 appStoreUrl·screenshots·overview·privacy 등을 채우고 status를 "live"로.
    id: "dayin",
    iconImage: "/apps/dayin.png",
    iconContain: true,
    name: { ko: "Day-In", en: "Day-In" },
    tagline: {
      ko: "습관·할 일·감정 기록 — 하루 회고 올인원 플래너",
      en: "Habits, to-dos & moods — an all-in-one daily reflection planner",
    },
    category: { ko: "생산성 · 라이프스타일", en: "Productivity · Lifestyle" },
    summary: {
      ko: "Day-In 하나로, 하루를 돌아보는 가장 다정한 방법.",
      en: "The kindest way to look back on your day — all in one.",
    },
    requires: { ko: "iOS", en: "iOS" },
    status: "soon",
    screenshots: [
      "/apps/dayin/01.png",
      "/apps/dayin/02.png",
      "/apps/dayin/03.png",
      "/apps/dayin/04.png",
      "/apps/dayin/05.png",
      "/apps/dayin/06.png",
    ],
    overview: {
      ko: "Day-In은 습관, 할 일, 그리고 하루의 감정까지 한 곳에서 기록하는 하루 회고 올인원 플래너입니다.\n\n매일 한 줄 회고와 함께 오늘의 감정을 색으로 남기면, 그 하루하루가 모여 ‘1년의 감정의 색’이 됩니다. 습관과 할 일은 밀어서 빠르게 체크하고, 캘린더와 아이젠하워 매트릭스로 일정과 우선순위를 한눈에 정리하세요.\n\n잠금화면·배경화면 위젯으로 앱을 열지 않고도 오늘의 할 일과 습관, 회고를 바로 확인할 수 있습니다.",
      en: "Day-In is an all-in-one daily reflection planner that keeps your habits, to-dos, and the day's mood in one place.\n\nLeave a one-line reflection and a color for each day's mood, and those days gather into a “year in colors.” Swipe to check off habits and tasks quickly, and see your schedule and priorities at a glance with a calendar and an Eisenhower matrix.\n\nWith lock-screen and home-screen widgets, you can check today's tasks, habits, and reflection without even opening the app.",
    },
    forWhom: {
      ko: [
        "하루를 가볍게 돌아보고 감정을 기록하고 싶은 분",
        "습관과 할 일을 한 앱에서 함께 관리하고 싶은 분",
        "일정과 우선순위를 한눈에 정리하고 싶은 분",
      ],
      en: [
        "Anyone who wants to look back on the day and log how it felt",
        "People who want habits and to-dos managed in one app",
        "Those who like to see schedule and priorities at a glance",
      ],
    },
    features: {
      ko: [
        "하루 한 줄 회고와 감정 색 기록",
        "1년의 감정을 색으로 보는 회고 히트맵 · 연속 기록",
        "밀어서 빠르게 체크하는 습관·할 일 관리",
        "일정과 습관을 함께 보는 캘린더",
        "아이젠하워 매트릭스로 우선순위 정리",
        "잠금화면·배경화면 위젯 지원",
      ],
      en: [
        "One-line daily reflection with a mood color",
        "A year of moods as a color heatmap, with streaks",
        "Swipe to quickly check off habits and to-dos",
        "A calendar that shows schedule and habits together",
        "Prioritize with an Eisenhower matrix",
        "Lock-screen and home-screen widgets",
      ],
    },
    closing: {
      ko: "Day-In 하나로, 하루를 돌아보는 가장 다정한 방법. 곧 App Store에서 만나요.",
      en: "The kindest way to look back on your day, all in Day-In. Coming soon to the App Store.",
    },
  },
];

/** Placeholder shown after the real apps to signal the studio is still building. */
export const moreComing = {
  title: { ko: "더 많은 앱을 준비하고 있어요", en: "More apps in the making" },
  body: {
    ko: "담담스튜디오의 다음 앱을 차분히 만들고 있습니다.",
    en: "We're calmly crafting what comes next.",
  },
} satisfies Record<string, L>;

export function getApp(id: string): AppItem | undefined {
  return apps.find((a) => a.id === id);
}
