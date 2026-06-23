import type { Lang } from "./i18n";

export type TermsConfig = {
  /** Contact email. */
  email: string;
  /** Last-updated date, ISO (YYYY-MM-DD). */
  updated: string;
  /** Free app — payment/refund handled by the App Store. */
  free?: boolean;
  /** Governing law / jurisdiction. Defaults to Republic of Korea. */
  governingLaw?: Record<Lang, string>;
  /**
   * 구독·결제 섹션 커스텀 내용 (있으면 기본 "결제" 섹션을 대체).
   * 구독/인앱결제가 있는 앱에 사용.
   */
  payments?: {
    paragraphs: Record<Lang, string[]>;
    bullets?: Record<Lang, string[]>;
  };
};

export type TermsSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TermsDoc = {
  title: string;
  intro: string;
  sections: TermsSection[];
  updatedLabel: string;
  backLabel: string;
};

const STUDIO = { ko: "담담스튜디오", en: "DamDam Studio" };

/**
 * 앱 설정으로부터 이용약관 문서를 생성. (privacy.ts와 동일한 패턴)
 * 앱의 terms 설정만 채우면 /apps/[id]/terms 페이지가 자동 생성됩니다.
 */
export function buildTerms(
  appName: string,
  cfg: TermsConfig,
  lang: Lang,
): TermsDoc {
  const studio = STUDIO[lang];
  const law =
    cfg.governingLaw?.[lang] ??
    (lang === "ko" ? "대한민국" : "the Republic of Korea");

  if (lang === "en") {
    const sections: TermsSection[] = [
      {
        heading: "1. Acceptance of terms",
        paragraphs: [
          `By downloading or using ${appName} (the "app"), you agree to these Terms of Service. If you do not agree, please do not use the app.`,
        ],
      },
      {
        heading: "2. License to use",
        paragraphs: [
          `${studio} grants you a personal, non-exclusive, non-transferable license to use ${appName} for your own, non-commercial purposes, in accordance with these terms and the App Store rules.`,
        ],
      },
      {
        heading: "3. Your responsibilities",
        paragraphs: [
          "You agree not to misuse the app — including reverse engineering, distributing modified versions, or using it for any unlawful purpose.",
        ],
      },
      {
        heading: "4. Your content",
        paragraphs: [
          `Any content you create in ${appName} belongs to you. ${studio} does not claim ownership of it. You are responsible for keeping your own backups of important data.`,
        ],
      },
      {
        heading: "5. Intellectual property",
        paragraphs: [
          `The app itself — including its design, brand, and code — is owned by ${studio} and is protected by applicable laws.`,
        ],
      },
      {
        heading: "6. Disclaimer of warranties",
        paragraphs: [
          `${appName} is provided "as is" and "as available," without warranties of any kind. We do not guarantee that the app will be uninterrupted, error-free, or that it will meet every expectation.`,
        ],
      },
      {
        heading: "7. Limitation of liability",
        paragraphs: [
          `To the extent permitted by law, ${studio} shall not be liable for any indirect, incidental, or consequential damages, including any loss of data, arising from your use of the app.`,
        ],
      },
      {
        heading: cfg.payments ? "8. Subscriptions & Payments" : "8. Payments",
        paragraphs: cfg.payments
          ? cfg.payments.paragraphs.en
          : [
              cfg.free
                ? `${appName} is currently provided free of charge. If paid features are introduced later, purchases and refunds are handled by the App Store under Apple's terms.`
                : "Purchases made in the app are processed by the App Store. Refunds are subject to Apple's policies.",
            ],
        bullets: cfg.payments?.bullets?.en,
      },
      {
        heading: "9. Changes to these terms",
        paragraphs: [
          "We may update these terms as the app evolves or as required by law. Continued use after an update means you accept the revised terms.",
        ],
      },
      {
        heading: "10. Governing law",
        paragraphs: [
          `These terms are governed by the laws of ${law}, and any disputes shall be resolved under that jurisdiction.`,
        ],
      },
      {
        heading: "11. Contact",
        paragraphs: [`For any questions about these terms, contact us at ${cfg.email}.`],
      },
    ];

    return {
      title: `${appName} Terms of Service`,
      intro: `These Terms of Service govern your use of ${appName}, provided by ${studio}. Please read them before using the app.`,
      sections,
      updatedLabel: `Last updated · ${cfg.updated}`,
      backLabel: `← Back to ${appName}`,
    };
  }

  // ── Korean ──
  const sections: TermsSection[] = [
    {
      heading: "1. 약관의 동의",
      paragraphs: [
        `${appName}(이하 ‘앱’)을 내려받거나 이용함으로써, 사용자는 본 이용약관에 동의하는 것으로 간주됩니다. 동의하지 않는 경우 앱을 이용하지 말아 주세요.`,
      ],
    },
    {
      heading: "2. 이용 허락",
      paragraphs: [
        `${studio}는 본 약관과 App Store 정책에 따라, 사용자가 ${appName}을 개인적·비상업적 목적으로 이용할 수 있는 비독점적·양도 불가능한 권리를 부여합니다.`,
      ],
    },
    {
      heading: "3. 사용자의 책임",
      paragraphs: [
        "사용자는 앱을 역설계하거나, 변경된 버전을 배포하거나, 불법적인 목적으로 사용하는 등 앱을 오·남용하지 않기로 합니다.",
      ],
    },
    {
      heading: "4. 사용자 콘텐츠",
      paragraphs: [
        `${appName}에서 사용자가 작성한 콘텐츠의 권리는 사용자에게 있으며, ${studio}는 이에 대한 소유권을 주장하지 않습니다. 중요한 데이터는 사용자가 직접 백업해 주시기 바랍니다.`,
      ],
    },
    {
      heading: "5. 지식재산권",
      paragraphs: [
        `앱 자체(디자인, 브랜드, 코드 등)에 대한 권리는 ${studio}에 있으며 관련 법령에 의해 보호됩니다.`,
      ],
    },
    {
      heading: "6. 보증의 부인",
      paragraphs: [
        `${appName}은 ‘있는 그대로(as is)’ 제공되며, 어떠한 명시적·묵시적 보증도 하지 않습니다. 앱이 중단 없이, 오류 없이 동작하거나 모든 기대를 충족한다고 보장하지 않습니다.`,
      ],
    },
    {
      heading: "7. 책임의 제한",
      paragraphs: [
        `관련 법령이 허용하는 범위에서, ${studio}는 앱 이용으로 인해 발생한 데이터 손실을 포함한 간접적·부수적·결과적 손해에 대해 책임지지 않습니다.`,
      ],
    },
    {
      heading: cfg.payments ? "8. 구독 및 결제" : "8. 결제",
      paragraphs: cfg.payments
        ? cfg.payments.paragraphs.ko
        : [
            cfg.free
              ? `${appName}은 현재 무료로 제공됩니다. 향후 유료 기능이 추가되는 경우, 결제 및 환불은 Apple의 정책에 따라 App Store를 통해 처리됩니다.`
              : "앱 내 결제는 App Store를 통해 처리되며, 환불은 Apple의 정책을 따릅니다.",
          ],
      bullets: cfg.payments?.bullets?.ko,
    },
    {
      heading: "9. 약관의 변경",
      paragraphs: [
        "본 약관은 앱의 변경이나 관련 법령에 따라 수정될 수 있으며, 변경 후에도 앱을 계속 이용하면 개정된 약관에 동의한 것으로 간주됩니다.",
      ],
    },
    {
      heading: "10. 준거법",
      paragraphs: [
        `본 약관은 ${law} 법률에 따라 해석되며, 분쟁은 해당 관할에서 해결합니다.`,
      ],
    },
    {
      heading: "11. 문의",
      paragraphs: [`본 약관에 관한 문의는 ${cfg.email} 으로 연락해 주세요.`],
    },
  ];

  return {
    title: `${appName} 이용약관`,
    intro: `본 이용약관은 ${studio}가 제공하는 ${appName}의 이용에 관한 사항을 규정합니다. 앱을 이용하기 전에 읽어 주세요.`,
    sections,
    updatedLabel: `최종 업데이트 · ${cfg.updated}`,
    backLabel: `← ${appName}(으)로 돌아가기`,
  };
}
