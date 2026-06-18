"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ko" | "en";

type Dict = Record<Lang, string>;

/**
 * Every piece of copy lives here as a { ko, en } pair so the whole site can
 * flip languages from a single toggle. Add a key, use t("...") in a component.
 */
export const dict = {
  "nav.about": { ko: "소개", en: "About" },
  "nav.apps": { ko: "앱", en: "Apps" },
  "nav.brand": { ko: "브랜드", en: "Brand" },
  "nav.contact": { ko: "문의", en: "Contact" },

  "hero.eyebrow": { ko: "담담스튜디오", en: "DamDam Studio" },
  "hero.title": {
    ko: "담담하게, 오래 곁에 두고 싶은 앱",
    en: "Calm, considered apps you'll keep close",
  },
  "hero.subtitle": {
    ko: "화려함보다 본질에 집중합니다. 매일 쓰는 순간이 편안하도록, 단순하고 정직한 모바일 앱을 만듭니다.",
    en: "We focus on essence over flash — building simple, honest mobile apps that feel calm to use, every single day.",
  },
  "hero.cta.apps": { ko: "앱 둘러보기", en: "Explore apps" },
  "hero.cta.contact": { ko: "문의하기", en: "Get in touch" },

  "about.eyebrow": { ko: "소개", en: "About" },
  "about.title": {
    ko: "작지만 깊게, 사용자의 하루를 생각합니다",
    en: "Small team, deep care for your everyday",
  },
  "about.body": {
    ko: "담담스튜디오는 모바일 앱을 만드는 작은 팀입니다. 우리는 더하기보다 덜어내기를 좋아합니다. 꼭 필요한 기능만 남기고, 직관적인 디자인으로 누구나 쉽게 쓸 수 있는 경험을 추구합니다.",
    en: "DamDam Studio is a small team that crafts mobile apps. We prefer subtracting over adding — keeping only what matters, wrapped in an intuitive design anyone can pick up and use.",
  },
  "about.stat.apps": { ko: "출시한 앱", en: "Apps shipped" },
  "about.stat.rating": { ko: "평균 평점", en: "Average rating" },
  "about.stat.platforms": { ko: "지원 플랫폼", en: "Platform" },
  "about.stat.languages": { ko: "지원 언어", en: "Languages" },

  "apps.eyebrow": { ko: "앱", en: "Apps" },
  "apps.title": {
    ko: "담담이 만든 앱들",
    en: "Apps we've made",
  },
  "apps.subtitle": {
    ko: "일상을 가볍게 만들어 주는 앱들을 소개합니다.",
    en: "A few apps designed to make daily life a little lighter.",
  },
  "apps.appstore": { ko: "App Store에서 보기", en: "View on App Store" },
  "apps.appstore.short": { ko: "App Store", en: "App Store" },
  "apps.googleplay": { ko: "Google Play", en: "Google Play" },
  "apps.free": { ko: "무료", en: "Free" },
  "apps.more": { ko: "자세히 보기", en: "View details" },
  "apps.soon": { ko: "출시 예정", en: "Coming soon" },

  // ── 앱 상세 페이지(/apps/[id]) ──
  "detail.back": { ko: "← 앱 목록으로", en: "← Back to apps" },
  "detail.screens": { ko: "스크린샷", en: "Screenshots" },
  "detail.overview": { ko: "소개", en: "Overview" },
  "detail.forwhom": { ko: "이런 분께 잘 맞아요", en: "Who it's for" },
  "detail.features": { ko: "주요 기능", en: "Features" },
  "detail.info": { ko: "정보", en: "Information" },
  "detail.info.developer": { ko: "개발자", en: "Developer" },
  "detail.info.category": { ko: "카테고리", en: "Category" },
  "detail.info.requires": { ko: "지원 OS", en: "Requires" },
  "detail.info.languages": { ko: "언어", en: "Languages" },
  "detail.info.price": { ko: "가격", en: "Price" },
  "detail.info.rating": { ko: "평점", en: "Rating" },
  "detail.notfound": { ko: "앱을 찾을 수 없어요.", en: "App not found." },
  "detail.privacy": { ko: "개인정보 처리방침", en: "Privacy Policy" },

  "contact.eyebrow": { ko: "문의", en: "Contact" },
  "contact.title": {
    ko: "함께 이야기 나눠요",
    en: "Let's talk",
  },
  "contact.body": {
    ko: "제휴, 피드백, 무엇이든 편하게 연락 주세요.",
    en: "Partnerships, feedback, anything at all — reach out anytime.",
  },
  "contact.email": { ko: "이메일 보내기", en: "Send email" },

  "footer.rights": {
    ko: "모든 권리 보유.",
    en: "All rights reserved.",
  },
  "footer.privacy": { ko: "개인정보처리방침", en: "Privacy Policy" },
  "footer.terms": { ko: "이용약관", en: "Terms of Service" },
  "footer.tagline": {
    ko: "담담하게 만드는 모바일 앱 스튜디오",
    en: "A mobile app studio, made calmly",
  },

  // ── 브랜드(CI) 페이지 ──
  "brand.eyebrow": { ko: "담담스튜디오 · BRAND MARK", en: "DamDam Studio · BRAND MARK" },
  "brand.wordmark.ko": { ko: "담담스튜디오", en: "담담스튜디오" },
  "brand.wordmark.en": { ko: "DAMDAM STUDIO", en: "DAMDAM STUDIO" },
  "brand.concept": {
    ko: "‘담담(淡淡)’의 첫 자음 ㄷ 둘이 마주 보며 균형을 이루고, 그 사이 여백에 낙관의 점토색 점을 둡니다. 담백하고 차분한, 과장 없는 결.",
    en: "Two ㄷ — the first consonant of ‘담담(淡淡)’ — face each other in balance, with a clay-red seal dot resting in the space between. Plain, calm, without exaggeration.",
  },

  "brand.lockups.no": { ko: "01 — LOCKUPS", en: "01 — LOCKUPS" },
  "brand.lockups.title": { ko: "로크업", en: "Lockups" },
  "brand.lockups.body": {
    ko: "기본은 가로형이에요. 공간이 좁거나 정사각 배치엔 세로형, 아이콘·파비콘엔 심볼 단독을 씁니다.",
    en: "Horizontal is the default. Use vertical for tight or square spaces, and the symbol alone for icons and favicons.",
  },
  "brand.lockups.primary": { ko: "가로형 (Primary)", en: "Horizontal (Primary)" },
  "brand.lockups.vertical": { ko: "세로형", en: "Vertical" },
  "brand.lockups.symbol": { ko: "심볼 단독", en: "Symbol only" },
  "brand.lockups.dark": { ko: "다크 (반전)", en: "Dark (reversed)" },
  "brand.lockups.clay": { ko: "점토 배경", en: "Clay background" },

  "brand.icon.no": { ko: "02 — APP ICON", en: "02 — APP ICON" },
  "brand.icon.title": { ko: "앱 아이콘 · 파비콘", en: "App icon · Favicon" },
  "brand.icon.body": {
    ko: "둥근 사각 안의 심볼. 작은 크기에서도 두 ㄷ과 점이 또렷하게 읽혀요.",
    en: "The symbol inside a rounded square — the two ㄷ and the dot stay legible even at small sizes.",
  },
  "brand.icon.ink": { ko: "먹색", en: "Ink" },
  "brand.icon.paper": { ko: "한지", en: "Paper" },
  "brand.icon.clay": { ko: "점토", en: "Clay" },

  "brand.color.no": { ko: "03 — COLOR", en: "03 — COLOR" },
  "brand.color.title": { ko: "컬러 팔레트", en: "Color palette" },
  "brand.color.ink": { ko: "먹색 Ink", en: "Ink" },
  "brand.color.paper": { ko: "한지 Paper", en: "Paper" },
  "brand.color.clay": { ko: "낙관 점토 Clay", en: "Seal Clay" },
  "brand.color.tan": { ko: "톤다운 클레이", en: "Toned Clay" },

  "brand.cons.no": { ko: "04 — CONSTRUCTION", en: "04 — CONSTRUCTION" },
  "brand.cons.title": { ko: "구성 · 여백 규칙", en: "Construction & spacing" },
  "brand.cons.clearspace": { ko: "½ 여백", en: "½ clearspace" },
  "brand.cons.symbol.k": { ko: "심볼", en: "Symbol" },
  "brand.cons.symbol.v": { ko: "마주 보는 두 ㄷ + 중앙 점토 점", en: "Two facing ㄷ + a centered clay dot" },
  "brand.cons.space.k": { ko: "여백", en: "Clearspace" },
  "brand.cons.space.v": { ko: "심볼 높이의 절반(½)을 사방 최소 여백으로", en: "Keep at least half the symbol's height clear on all sides" },
  "brand.cons.min.k": { ko: "최소 크기", en: "Min size" },
  "brand.cons.min.v": { ko: "심볼 16px / 가로 로크업 110px 이상", en: "Symbol 16px / horizontal lockup 110px and up" },
  "brand.cons.stroke.k": { ko: "획", en: "Stroke" },
  "brand.cons.stroke.v": { ko: "둥근 끝·둥근 모서리, 균일한 두께", en: "Round caps and corners, even weight" },
  "brand.cons.ko.k": { ko: "한글", en: "Korean" },
  "brand.cons.ko.v": { ko: "고운바탕 / 나눔명조 (Bold)", en: "Gowun Batang / Nanum Myeongjo (Bold)" },
  "brand.cons.en.k": { ko: "영문", en: "Latin" },
  "brand.cons.en.v": { ko: "Newsreader · 자간 넓게(레터스페이싱)", en: "Newsreader · wide letter-spacing" },

  "brand.download.no": { ko: "05 — ASSETS", en: "05 — ASSETS" },
  "brand.download.title": { ko: "에셋 다운로드", en: "Download assets" },
  "brand.download.body": {
    ko: "SVG 원본을 내려받아 사용하세요. 워드마크 아웃라인, 적용 예시가 더 필요하면 알려 주세요.",
    en: "Grab the SVG originals. Ask anytime if you need wordmark outlines or more usage samples.",
  },
  "brand.back": { ko: "← 홈으로", en: "← Back home" },
} satisfies Record<string, Dict>;

export type DictKey = keyof typeof dict;

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: DictKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");

  // Restore the visitor's last choice on mount.
  useEffect(() => {
    const saved = window.localStorage.getItem("damdam-lang");
    if (saved === "ko" || saved === "en") {
      setLangState(saved);
    } else if (navigator.language.startsWith("en")) {
      setLangState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("damdam-lang", next);
  };

  const t = (key: DictKey) => dict[key][lang];

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
