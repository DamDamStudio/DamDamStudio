import type { Lang } from "./i18n";

export type PrivacyConfig = {
  /** Contact email for privacy inquiries. */
  email: string;
  /** Last-updated date, ISO (YYYY-MM-DD). */
  updated: string;
  /** Where user content lives. */
  storage: "device" | "icloud" | "server";
  /** App shows third-party ads (e.g. AdMob). */
  ads?: boolean;
  /** App uses analytics SDK. */
  analytics?: boolean;
};

export type PrivacySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PrivacyDoc = {
  title: string;
  intro: string;
  sections: PrivacySection[];
  updatedLabel: string;
  backLabel: string;
};

const STUDIO = { ko: "담담스튜디오", en: "DamDam Studio" };

/**
 * 앱 설정(저장 위치·광고·분석)으로부터 개인정보 처리방침 문서를 생성.
 * 앱이 늘어나면 lib/apps.ts의 privacy 설정만 채우면 페이지가 자동 생성됩니다.
 */
export function buildPrivacy(
  appName: string,
  cfg: PrivacyConfig,
  lang: Lang,
): PrivacyDoc {
  const studio = STUDIO[lang];

  if (lang === "en") {
    const sections: PrivacySection[] = [];

    // 1. Information we store
    sections.push({
      heading: "1. Information we store",
      paragraphs: [
        cfg.storage === "device"
          ? `Everything you enter in ${appName} — trips, schedules, spending, receipts, and photos — is stored only on your device. ${studio} does not transmit this content to any server, and we cannot access it.`
          : cfg.storage === "icloud"
            ? `Everything you enter in ${appName} is stored on your device and synced through your personal Apple iCloud account. It is never sent to ${studio}'s servers, and we cannot access it.`
            : `Content you create in ${appName} is stored on ${studio}'s servers so it can sync across your devices.`,
        `${appName} does not require sign-up or login, and does not collect your name, phone number, or email.`,
      ],
    });

    // 2. Advertising
    if (cfg.ads) {
      sections.push({
        heading: "2. Advertising",
        paragraphs: [
          `${appName} is free and may show ads. Ads are delivered through third-party ad networks (for example, Google AdMob). To serve and measure ads, these networks may collect advertising identifiers (such as the device IDFA), approximate location, and device or usage information.`,
          "This collection is governed by each ad network's own privacy policy — for example, Google's policy at policies.google.com/privacy.",
          "On iOS you can decline tracking via the App Tracking Transparency prompt, and limit ad tracking under Settings › Privacy & Security.",
        ],
      });
    }

    // 3. Analytics
    if (cfg.analytics) {
      sections.push({
        heading: sectionNo(cfg, "analytics", "en"),
        paragraphs: [
          `${appName} may use an analytics service to understand aggregate, anonymous usage (such as which features are opened). This data is not used to identify you personally.`,
        ],
      });
    }

    // Sharing
    sections.push({
      heading: sectionNo(cfg, "sharing", "en"),
      paragraphs: [
        cfg.ads || cfg.analytics
          ? `Apart from the third-party services described above, ${studio} does not sell or share your information with anyone.`
          : `${studio} does not sell or share your information with any third party.`,
      ],
    });

    // Retention & deletion
    sections.push({
      heading: sectionNo(cfg, "retention", "en"),
      paragraphs: [
        cfg.storage === "server"
          ? "You can delete your data from within the app. Deleting your account removes the associated data from our servers."
          : "Your content stays on your device. Deleting the app removes all data stored on the device along with it.",
      ],
    });

    // Children
    sections.push({
      heading: sectionNo(cfg, "children", "en"),
      paragraphs: [
        `${appName} is not directed to children under 14, and we do not knowingly collect personal information from children.`,
      ],
    });

    // Changes
    sections.push({
      heading: sectionNo(cfg, "changes", "en"),
      paragraphs: [
        "This policy may be updated as the app changes or as required by law. Any changes will be posted on this page.",
      ],
    });

    // Contact
    sections.push({
      heading: sectionNo(cfg, "contact", "en"),
      paragraphs: [
        `For any privacy questions, please contact us at ${cfg.email}.`,
      ],
    });

    return {
      title: `${appName} Privacy Policy`,
      intro: `${studio} values your privacy and designed ${appName} to work with as little information as possible. This policy explains what information the app handles.`,
      sections,
      updatedLabel: `Last updated · ${cfg.updated}`,
      backLabel: `← Back to ${appName}`,
    };
  }

  // ── Korean ──
  const sections: PrivacySection[] = [];

  sections.push({
    heading: "1. 수집·저장하는 정보",
    paragraphs: [
      cfg.storage === "device"
        ? `${appName}에서 입력하는 여행 일정, 지출 내역, 영수증·사진 등 모든 콘텐츠는 사용자의 기기 안에만 저장됩니다. ${studio}는 이 정보를 서버로 전송하거나 수집하지 않으며, 접근할 수 없습니다.`
        : cfg.storage === "icloud"
          ? `${appName}에서 입력하는 모든 콘텐츠는 사용자의 기기와 본인의 Apple iCloud 계정에 저장되어 동기화됩니다. ${studio}의 서버로는 전송되지 않으며, 접근할 수 없습니다.`
          : `${appName}에서 생성한 콘텐츠는 여러 기기 간 동기화를 위해 ${studio}의 서버에 저장됩니다.`,
      `${appName}은 회원가입이나 로그인을 요구하지 않으며, 이름·전화번호·이메일을 수집하지 않습니다.`,
    ],
  });

  if (cfg.ads) {
    sections.push({
      heading: "2. 광고",
      paragraphs: [
        `${appName}은 무료로 제공되며 화면에 광고가 표시될 수 있습니다. 광고는 제3자 광고 네트워크(예: Google AdMob)를 통해 게재되며, 광고 제공·측정을 위해 광고 식별자(IDFA 등 기기 식별자), 대략적 위치, 기기·사용 정보가 해당 네트워크에 의해 수집·이용될 수 있습니다.`,
        "이러한 데이터 수집은 각 광고 네트워크의 개인정보 처리방침을 따릅니다. 예: Google 정책 policies.google.com/privacy",
        "iOS에서는 앱 추적 투명성(ATT) 안내에서 추적을 거부할 수 있으며, 설정 › 개인정보 보호 및 보안에서 광고 추적을 제한할 수 있습니다.",
      ],
    });
  }

  if (cfg.analytics) {
    sections.push({
      heading: sectionNo(cfg, "analytics", "ko"),
      paragraphs: [
        `${appName}은 어떤 기능이 사용되는지 등 익명·집계 형태의 사용 통계를 파악하기 위해 분석 도구를 사용할 수 있습니다. 이 데이터는 개인을 식별하는 데 사용되지 않습니다.`,
      ],
    });
  }

  sections.push({
    heading: sectionNo(cfg, "sharing", "ko"),
    paragraphs: [
      cfg.ads || cfg.analytics
        ? `위에 설명한 제3자 서비스를 제외하고, ${studio}는 사용자의 정보를 제3자에게 판매하거나 제공하지 않습니다.`
        : `${studio}는 사용자의 정보를 제3자에게 판매하거나 제공하지 않습니다.`,
    ],
  });

  sections.push({
    heading: sectionNo(cfg, "retention", "ko"),
    paragraphs: [
      cfg.storage === "server"
        ? "앱 내에서 데이터를 삭제할 수 있으며, 계정을 삭제하면 서버에 저장된 관련 데이터가 함께 삭제됩니다."
        : "앱의 콘텐츠는 기기에 보관되며, 앱을 삭제하면 기기에 저장된 모든 데이터가 함께 삭제됩니다.",
    ],
  });

  sections.push({
    heading: sectionNo(cfg, "children", "ko"),
    paragraphs: [
      `${appName}은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다.`,
    ],
  });

  sections.push({
    heading: sectionNo(cfg, "changes", "ko"),
    paragraphs: [
      "본 방침은 앱 업데이트나 관련 법령 변경에 따라 수정될 수 있으며, 변경 시 본 페이지를 통해 고지합니다.",
    ],
  });

  sections.push({
    heading: sectionNo(cfg, "contact", "ko"),
    paragraphs: [`개인정보 관련 문의는 ${cfg.email} 으로 연락해 주세요.`],
  });

  return {
    title: `${appName} 개인정보 처리방침`,
    intro: `${studio}는 사용자의 개인정보를 소중히 여기며, ${appName}이 최소한의 정보만으로 동작하도록 설계했습니다. 본 방침은 앱이 어떤 정보를 다루는지 설명합니다.`,
    sections,
    updatedLabel: `최종 업데이트 · ${cfg.updated}`,
    backLabel: `← ${appName}(으)로 돌아가기`,
  };
}

/**
 * Section numbers shift depending on whether ads/analytics sections exist.
 * This keeps the numbering correct without hardcoding.
 */
function sectionNo(
  cfg: PrivacyConfig,
  key: "analytics" | "sharing" | "retention" | "children" | "changes" | "contact",
  lang: Lang,
): string {
  // base section 1 (info) always present; 2 = ads if present
  let n = 1;
  const order: string[] = ["info"];
  if (cfg.ads) order.push("ads");
  if (cfg.analytics) order.push("analytics");
  order.push("sharing", "retention", "children", "changes", "contact");
  n = order.indexOf(key) + 1;

  const titles: Record<string, Record<Lang, string>> = {
    analytics: { ko: "분석", en: "Analytics" },
    sharing: { ko: "제3자 제공", en: "Sharing with third parties" },
    retention: { ko: "데이터 보관 및 삭제", en: "Data retention & deletion" },
    children: { ko: "아동의 개인정보", en: "Children's privacy" },
    changes: { ko: "방침의 변경", en: "Changes to this policy" },
    contact: { ko: "문의", en: "Contact" },
  };
  return `${n}. ${titles[key][lang]}`;
}
