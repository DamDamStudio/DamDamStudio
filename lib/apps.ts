import type { Lang } from "./i18n";
import type { PrivacyConfig } from "./privacy";
import type { TermsConfig } from "./terms";

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
  /** Phone screenshots under /public, optionally localized with alt text. */
  screenshots?: (string | { src: L; alt: L })[];
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
  /** 이용약관 설정 — 있으면 /apps/[id]/terms 페이지가 생성됩니다. */
  terms?: TermsConfig;
  /** 개인정보/약관을 외부 정적 HTML 등으로 직접 서빙할 때의 링크(있으면 링크만 노출). */
  privacyHref?: string;
  termsHref?: string;
  /** Optional app-specific support page. */
  supportHref?: string;
};

/**
 * Real catalog. Add new apps here — cards render from the list, and apps with
 * detail content can be introduced before launch at /apps/<id>.
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
    developer: "DamDam Studio",
    requires: { ko: "iOS 17.0 이상", en: "iOS 17.0 or later" },
    languages: { ko: "한국어 · English", en: "Korean · English" },
    price: { ko: "무료", en: "Free" },
    // 실제 페이지는 lib/privacyContent.ts의 공식 방침(customPrivacy.yeoro)이 우선 렌더됨.
    privacy: {
      email: "studio.damdam2@gmail.com",
      updated: "2026-04-13",
      storage: "server", // 광고·분석·크래시 리포팅으로 일부 데이터 외부 전송
      ads: true,
      analytics: true,
    },
    terms: {
      email: "studio.damdam2@gmail.com",
      updated: "2026-06-18",
      free: true,
    },
  },
  {
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
    free: true,
    status: "live",
    appStoreUrl: "https://apps.apple.com/kr/app/day-in/id6780700085",
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
      ko: "Day-In 하나로, 하루를 돌아보는 가장 다정한 방법. 준비부터 기록, 회고까지 하루를 한곳에 담아보세요.",
      en: "The kindest way to look back on your day, all in Day-In. Capture your day — from planning to logging to reflection — in one place.",
    },
    developer: "DamDam Studio",
    requires: { ko: "iOS 17.0 이상", en: "iOS 17.0 or later" },
    languages: { ko: "한국어 · English", en: "Korean · English" },
    price: { ko: "무료 (앱 내 구입)", en: "Free (In-App Purchases)" },
    privacy: {
      email: "studio.damdam2@gmail.com",
      updated: "2026-06-18",
      storage: "icloud", // 기기 저장 + iCloud 동기화를 모두 포함
      ads: true,      // 광고 SDK 사용 시 true
      analytics: true, // 분석 SDK 사용 시 true
    },
    terms: {
      email: "studio.damdam2@gmail.com",
      updated: "2026-06-23",
      free: false, // Day In Pro 유료 기능 제공
      payments: {
        paragraphs: {
          ko: ["Day-In은 일부 기능(Day In Pro)을 유료로 제공합니다."],
          en: ["Day-In offers some features (Day In Pro) as paid options."],
        },
        bullets: {
          ko: [
            "자동 갱신 구독: 연간 구독, 월간 구독으로 제공되며, 7일 무료체험 후 자동으로 결제됩니다. 가격은 App Store에 표시된 금액을 따릅니다.",
            "평생 이용: 1회 결제로 영구 이용하는 비구독 상품입니다.",
            "구독은 현재 기간 종료 24시간 전까지 해지하지 않으면 자동으로 갱신되며, 갱신 요금이 청구됩니다.",
            "결제는 구매 확정 시 사용자의 Apple 계정으로 청구됩니다.",
            "구독 관리·해지는 기기의 설정 → Apple 계정 → 구독에서 언제든 할 수 있습니다.",
            "무료체험 중 남은 기간은 유료 구독 구매 시 소멸됩니다.",
            "환불은 Apple App Store 정책에 따릅니다.",
          ],
          en: [
            "Auto-renewable subscription: Offered as annual and monthly plans, billed automatically after a 7-day free trial. Prices follow the amount shown on the App Store.",
            "Lifetime access: A non-subscription product for permanent use with a single, one-time payment.",
            "A subscription renews automatically and the renewal fee is charged unless it is cancelled at least 24 hours before the end of the current period.",
            "Payment is charged to your Apple Account upon confirmation of purchase.",
            "You can manage or cancel your subscription anytime in your device's Settings → Apple Account → Subscriptions.",
            "Any unused portion of a free trial is forfeited when you purchase a paid subscription.",
            "Refunds are subject to the Apple App Store policy.",
          ],
        },
      },
    },
  },
  {
    id: "savvy",
    iconImage: "/apps/savvy.png",
    iconContain: true,
    name: { ko: "세이비", en: "Savvy" },
    tagline: {
      ko: "한마디면 충분해. 기록부터 함께 쓰는 가계부까지.",
      en: "A few words are all it takes. For your money, and the money you share.",
    },
    category: { ko: "금융", en: "Finance" },
    summary: {
      ko: "한 줄 입력과 영수증 인식으로 기록은 가볍게. 개인·공유 가계부부터 자산, 예산, 정산까지 한곳에서 관리해요.",
      en: "Log with a sentence or a receipt photo. Keep personal and shared spending, assets, budgets, and split expenses together.",
    },
    free: true,
    status: "live",
    appStoreUrl: "https://apps.apple.com/kr/app/id6795720506",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.damdamstudio.savvy",
    requires: {
      ko: "iOS 17.0 이상 · Android 8.0 이상",
      en: "iOS 17.0+ · Android 8.0+",
    },
    price: { ko: "무료 (앱 내 구입)", en: "Free (In-App Purchases)" },
    screenshots: [
      "/apps/savvy/01-intro-left.png",
      "/apps/savvy/02-intro-right.png",
      "/apps/savvy/03-coach.png",
      "/apps/savvy/04-asset.png",
      "/apps/savvy/05-budget.png",
      "/apps/savvy/06-settle.png",
      "/apps/savvy/07-widget.png",
    ],
    overview: {
      ko: "‘어제 커피 5천원’처럼 적거나 말하고, 영수증은 사진으로 보내세요. 세이비가 금액·날짜·카테고리를 정리해줘요. 자동 입력에서 고친 분류는 같은 가계부의 다음 기록에도 적용할 수 있어요.\n\n혼자 쓰는 가계부와 함께 쓰는 생활비를 나눠 관리하세요. 공유 가계부에서는 누가 쓴 돈인지, 개인 지출인지 공통 비용인지 구분하고 함께 확인할 수 있어요. 자산과 예산을 살펴보고, 나눠 낸 비용은 정산으로 마무리해요.\n\n월별 차트와 소분류로 어디에 얼마나 썼는지 살펴보세요. AI 코칭에서 받은 조언은 관련 내역과 예산으로 이어져, 확인하고 바로 관리할 수 있어요.\n\n개인 가계부의 거래 기록은 기기에 저장해요. 공유 가계부를 이용하면 공유 기록을 서버로 동기화하고, AI 입력·코칭을 이용할 때는 처리에 필요한 내용을 서버로 전송해요.",
      en: "Type or say “coffee ₩5,000 yesterday,” or send a receipt photo. Savvy sorts out the amount, date, and category. Category corrections you make during automatic entry can be remembered for future entries in the same wallet.\n\nKeep your personal spending and shared household money in separate wallets. In a shared wallet, see who spent the money and whether it was a personal or shared expense. Track assets and budgets, and settle costs you have split.\n\nMonthly charts and subcategories help you see where your money went. AI coaching links to the relevant entries and budgets, so you can follow up on its suggestions.\n\nPersonal transaction records are stored on your device. Shared wallets sync their shared records through a server. When you use AI entry or coaching, the content needed for processing is sent to the server.",
    },
    forWhom: {
      ko: [
        "매번 금액과 카테고리를 고르는 대신, 말하듯 빠르게 기록하고 싶은 분",
        "신혼 생활비나 함께 쓰는 돈을 한 가계부에서 관리하고 싶은 분",
        "여러 자산과 지갑을 나눠 관리하면서 전체 흐름도 보고 싶은 분",
        "어디에 썼는지 확인하고, 다음 달 예산까지 계획하고 싶은 분",
      ],
      en: [
        "Anyone who would rather write a sentence than fill in every field",
        "Couples and households who want to manage shared expenses together",
        "People with several assets or wallets who want to see the bigger picture",
        "Anyone who wants to understand their spending and plan the next month's budget",
      ],
    },
    features: {
      ko: [
        "한 줄·음성·영수증 입력 — 편한 방식으로 보내면 AI가 거래 내용을 정리해요.",
        "자동 기록 — iOS 단축어와 Android 알림 감지를 설정해 결제 내용을 받아올 수 있어요.",
        "기록 대기함 — 자동 기록의 저장 지갑이 모호하면, 지갑과 결제수단을 확인한 뒤 저장해요.",
        "공유 가계부 — 참여자와 기록을 함께 보고, 지출한 사람과 개인·공통 비용을 구분해요.",
        "소분류와 자동 분류 기억 — 식비 안에서 외식·장보기를 나누고, 고친 분류를 다음에도 활용해요.",
        "분석과 AI 코칭 — 월별 소비 흐름을 차트로 보고, 조언에서 관련 내역과 예산으로 이동해요.",
        "자산 관리 — 현금·계좌·카드·포인트와 대출, 국내 주식·ETF·가상자산을 함께 관리해요.",
        "예산과 정기 거래 — 카테고리별 예산을 세우고, 반복 결제 인사이트에서 정기 거래를 등록해요.",
        "정산 — 함께 쓴 비용을 나누고, 정산 완료와 입금 여부를 확인해요.",
        "여러 지갑과 통화 — 개인 지갑과 공유 가계부를 나누고, 다른 통화의 기록도 관리해요.",
        "금액 계산기 — 거래·자산·설정의 금액 입력에서 사칙연산을 바로 사용해요.",
        "홈 화면 위젯 — 월 요약을 확인하고, 빠른 기록으로 입력을 시작해요.",
      ],
      en: [
        "Sentence, voice, or receipt — send it your way and let AI organize the transaction.",
        "Automatic capture — set up iOS Shortcuts or Android notification access to receive payment details.",
        "Pending entries — when the destination wallet is unclear, review the wallet and payment method before saving.",
        "Shared wallets — view entries together and distinguish who paid, personal expenses, and shared costs.",
        "Subcategories and category memory — split food into dining out and groceries, and reuse your corrections.",
        "Analysis and AI coaching — explore monthly spending charts and open related entries or budgets from advice.",
        "Asset management — organize cash, accounts, cards, points, loans, Korean stocks and ETFs, and crypto.",
        "Budgets and recurring entries — set category budgets and turn recurring-payment insights into scheduled entries.",
        "Split expenses — divide shared costs and check settlement and payment status.",
        "Multiple wallets and currencies — keep personal and shared records separate and manage spending in other currencies.",
        "Amount calculator — use arithmetic directly in transaction, asset, and settings amount fields.",
        "Home-screen widgets — check your monthly summary and jump into a quick entry.",
      ],
    },
    closing: {
      ko: "오늘 쓴 돈, 한마디로 시작해보세요. 세이비는 iPhone과 Android에서 무료로 다운로드할 수 있어요. 일부 기능은 PRO 이용권으로 제공해요.",
      en: "Start with a few words about what you spent today. Savvy is available to download for free on iPhone and Android, with some features offered through PRO.",
    },
    developer: "DamDam Studio",
    languages: { ko: "한국어 · English", en: "Korean · English" },
    privacyHref: "/apps/savvy/privacy",
    termsHref: "/apps/savvy/terms",
  },
  {
    id: "sseukgarim",
    iconImage: "/apps/sseukgarim.png",
    name: { ko: "쓱가림", en: "SseukGarim" },
    tagline: {
      ko: "공유하기 전에, 글자는 가리고 얼굴은 모자이크",
      en: "Cover text and pixelate faces before you share",
    },
    category: { ko: "사진 편집 · 개인정보 보호", en: "Photo Editing · Privacy" },
    summary: {
      ko: "사진 속 글자는 검정으로, 얼굴은 모자이크로 가려요. 인식부터 새 이미지 저장까지 iPhone 안에서 처리합니다.",
      en: "Hide text with solid black covers and pixelate faces. From detection to saving a new image, it all happens on your iPhone.",
    },
    free: false,
    status: "live",
    appStoreUrl: "https://apps.apple.com/kr/app/id6831950696",
    screenshots: [
      {
        src: {
          ko: "/apps/sseukgarim/1.1.0/ko/01-home.webp",
          en: "/apps/sseukgarim/1.1.0/en/01-home.webp",
        },
        alt: {
          ko: "쓱가림 홈의 사진 선택 버튼과 글자·얼굴·직접 가리기 안내",
          en: "SseukGarim home screen with a photo picker and guides to text, face, and manual tools",
        },
      },
      {
        src: {
          ko: "/apps/sseukgarim/1.1.0/ko/02-text.webp",
          en: "/apps/sseukgarim/1.1.0/en/02-text.webp",
        },
        alt: {
          ko: "연락처 카드에서 인식한 글자 영역을 표시한 화면",
          en: "Detected text regions highlighted on a sample contact card",
        },
      },
      {
        src: {
          ko: "/apps/sseukgarim/1.1.0/ko/03-faces.webp",
          en: "/apps/sseukgarim/1.1.0/en/03-faces.webp",
        },
        alt: {
          ko: "사진에서 선택한 두 얼굴에 모자이크를 적용한 화면",
          en: "Two selected faces pixelated in the photo editor",
        },
      },
      {
        src: {
          ko: "/apps/sseukgarim/1.1.0/ko/04-export.webp",
          en: "/apps/sseukgarim/1.1.0/en/04-export.webp",
        },
        alt: {
          ko: "전화번호를 가린 결과 미리보기와 새 이미지 저장·공유 버튼",
          en: "Preview of a covered phone number with buttons to save or share the new image",
        },
      },
    ],
    overview: {
      ko: "연락처가 담긴 스크린샷이나 여러 사람이 나온 사진을 공유할 때, 쓱가림에서 필요한 부분만 가려 보세요. 사진 한 장을 고르면 편집 화면에서 글자 선택, 얼굴 선택, 직접 가리기를 오갈 수 있어요.\n\nApple Vision이 iPhone에서 한국어·영어·일본어·중국어 간체 글자 영역과 얼굴을 찾아요. 가릴 글자를 탭하면 불투명한 검정으로 덮고, 얼굴은 하나씩 또는 모두 선택해 모자이크를 적용할 수 있어요. 놓친 영역은 사각형을 그려 검정이나 모자이크로 가려요.\n\n결과를 미리 본 뒤 새 PNG로 저장하거나 공유하세요. 원본 사진은 그대로 두고 새 이미지에는 원본의 위치·촬영 정보가 들어가지 않아요. 사진 인식과 편집은 회원가입이나 업로드 없이 기기 안에서 이루어져요.",
      en: "Cover what you need before sharing a screenshot with contact details or a group photo. Pick one image and switch between text selection, face selection, and manual covers in the editor.\n\nApple Vision detects faces on your iPhone and recognizes text in Korean, English, Japanese, and Simplified Chinese. Tap text to cover it with solid black, or pixelate detected faces individually or all at once. Draw a rectangle to cover any area with solid black or a mosaic.\n\nPreview the result, then save or share it as a new PNG. The original stays intact, and the new image leaves out the original location and camera metadata. Detection and editing run on your device without an account or upload.",
    },
    forWhom: {
      ko: [
        "이름이나 전화번호를 가리고 스크린샷을 공유하고 싶은 분",
        "모임 사진에서 공유하기 곤란한 얼굴을 모자이크로 가리고 싶은 분",
        "자동 인식으로 찾은 영역과 직접 그린 영역을 한 사진에서 함께 가리고 싶은 분",
      ],
      en: [
        "People who want to cover names or phone numbers before sharing screenshots",
        "Anyone who wants to pixelate selected faces in group photos",
        "People who want to combine detected areas and hand-drawn covers on one image",
      ],
    },
    features: {
      ko: [
        "한국어·영어·일본어·중국어 간체 글자 영역을 찾아 탭으로 검정 가림",
        "얼굴을 하나씩 또는 한꺼번에 선택해 모자이크 적용",
        "직접 그린 사각형에 검정 또는 모자이크 적용",
        "두 손가락 확대·이동과 실행 취소로 가림 범위 확인",
        "결과 미리보기와 새 PNG 저장·공유",
        "원본 사진 유지, 원본 위치·촬영 메타데이터 제외",
        "서버·회원가입·광고·외부 AI API 없이 편집",
        "구독·앱 내 결제 없는 일회성 유료 다운로드",
      ],
      en: [
        "Detect Korean, English, Japanese, and Simplified Chinese text and tap to cover it in black",
        "Pixelate detected faces individually or all at once",
        "Draw your own rectangles with solid black or mosaic covers",
        "Check coverage with two-finger zoom and pan, plus undo",
        "Preview, save, and share the result as a new PNG",
        "Keep the original photo and omit its location and camera metadata",
        "Edit without servers, accounts, ads, or external AI APIs",
        "A one-time paid download with no subscription or in-app purchases",
      ],
    },
    closing: {
      ko: "자동 인식이 놓친 글자나 얼굴은 직접 가리고, 공유 전에 결과 미리보기에서 가림 범위를 확인해 주세요. 확실히 덮어야 하는 정보는 불투명한 검정으로 가려 주세요.",
      en: "Manually cover any text or faces detection missed, then check the preview before sharing. Use solid black for anything you need to cover completely.",
    },
    developer: "DamDam Studio",
    requires: { ko: "iPhone · iOS 17.0 이상", en: "iPhone · iOS 17.0 or later" },
    languages: { ko: "한국어 · English · 日本語 · 简体中文", en: "Korean · English · Japanese · Simplified Chinese" },
    price: {
      ko: "유료 · 일회성 구매 (한국 App Store 1,100원)",
      en: "One-time paid download (Korean App Store: ₩1,100)",
    },
    privacyHref: "/apps/sseukgarim/privacy.html",
    termsHref: "/apps/sseukgarim/terms.html",
    supportHref: "/apps/sseukgarim/support.html",
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
