import type { Lang } from "./i18n";
import type { PrivacySection } from "./privacy";

/**
 * 앱별 "직접 작성한" 개인정보 처리방침 (공식 문구를 그대로 사용).
 * 여기에 항목이 있으면 buildPrivacy() 생성기 대신 이 내용이 우선 렌더됩니다.
 */
export type CustomPrivacy = Record<
  Lang,
  {
    effective?: string;
    intro?: string;
    sections: PrivacySection[];
  }
>;

export const customPrivacy: Record<string, CustomPrivacy> = {
  // 여로 — App Privacy Policy Generator로 생성한 공식 방침 (영문 원문 + 한글 번역)
  yeoro: {
    en: {
      effective: "2026-04-13",
      intro:
        'This privacy policy applies to the Yeoro app (hereby referred to as "Application") for mobile devices that was created by DamDam Studio (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".',
      sections: [
        {
          heading: "Information Collection and Use",
          paragraphs: [
            "The Application collects information when you download and use it. This information may include information such as:",
          ],
          bullets: [
            "Your device's Internet Protocol address (e.g. IP address)",
            "The pages of the Application that you visit, the time and date of your visit, the time spent on those pages",
            "The time spent on the Application",
            "The operating system you use on your mobile device",
          ],
        },
        {
          heading: "",
          paragraphs: [
            "The Application does not gather precise information about the location of your mobile device.",
            "The Application does not use Artificial Intelligence (AI) technologies to process your data or provide features.",
            "The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.",
            "For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.",
          ],
        },
        {
          heading: "Third Party Access",
          paragraphs: [
            "Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.",
            "Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the third-party service providers used by the Application:",
          ],
          bullets: [
            "AdMob",
            "Google Analytics for Firebase",
            "Firebase Crashlytics",
          ],
        },
        {
          heading: "",
          paragraphs: [
            "The Service Provider may disclose User Provided and Automatically Collected Information:",
          ],
          bullets: [
            "as required by law, such as to comply with a subpoena, or similar legal process;",
            "when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;",
            "with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.",
          ],
        },
        {
          heading: "Opt-Out Rights",
          paragraphs: [
            "You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.",
          ],
        },
        {
          heading: "Data Retention Policy",
          paragraphs: [
            "The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at studio.damdam2@gmail.com and they will respond in a reasonable time.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.",
            "The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (studio.damdam2@gmail.com) so that they will be able to take the necessary actions.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.",
            "This privacy policy is effective as of 2026-04-13.",
          ],
        },
        {
          heading: "Your Consent",
          paragraphs: [
            "By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at studio.damdam2@gmail.com.",
          ],
        },
      ],
    },
    ko: {
      effective: "2026-04-13",
      intro:
        "본 개인정보 처리방침은 담담스튜디오(이하 ‘서비스 제공자’)가 광고 기반(Ad Supported) 서비스로 만든 모바일용 여로(Yeoro) 앱(이하 ‘애플리케이션’)에 적용됩니다. 본 서비스는 ‘있는 그대로(AS IS)’ 제공됩니다.",
      sections: [
        {
          heading: "정보의 수집 및 이용",
          paragraphs: [
            "애플리케이션은 사용자가 다운로드하고 사용할 때 정보를 수집합니다. 이 정보에는 다음이 포함될 수 있습니다:",
          ],
          bullets: [
            "사용자 기기의 인터넷 프로토콜 주소(예: IP 주소)",
            "방문한 애플리케이션 페이지, 방문 시각과 날짜, 해당 페이지에 머문 시간",
            "애플리케이션 사용 시간",
            "모바일 기기에서 사용하는 운영체제",
          ],
        },
        {
          heading: "",
          paragraphs: [
            "애플리케이션은 사용자 모바일 기기의 정확한 위치 정보를 수집하지 않습니다.",
            "애플리케이션은 사용자 데이터를 처리하거나 기능을 제공하기 위해 인공지능(AI) 기술을 사용하지 않습니다.",
            "서비스 제공자는 사용자가 제공한 정보를 이용해, 중요한 안내·필수 고지·마케팅 프로모션을 위해 수시로 사용자에게 연락할 수 있습니다.",
            "더 나은 경험을 위해, 서비스 제공자는 애플리케이션 사용 중 특정 개인 식별 정보를 요청할 수 있습니다. 요청한 정보는 서비스 제공자가 보관하며 본 방침에 설명된 대로 이용됩니다.",
          ],
        },
        {
          heading: "제3자 접근",
          paragraphs: [
            "서비스 및 애플리케이션 개선을 돕기 위해, 집계·익명화된 데이터만 주기적으로 외부 서비스에 전송됩니다. 서비스 제공자는 본 방침에 설명된 방식으로 사용자의 정보를 제3자와 공유할 수 있습니다.",
            "애플리케이션은 데이터 처리에 관한 자체 개인정보 처리방침을 가진 제3자 서비스를 이용합니다. 애플리케이션이 사용하는 제3자 서비스 제공자는 다음과 같습니다:",
          ],
          bullets: ["AdMob", "Google Analytics for Firebase", "Firebase Crashlytics"],
        },
        {
          heading: "",
          paragraphs: [
            "서비스 제공자는 다음의 경우 사용자가 제공한 정보 및 자동으로 수집된 정보를 공개할 수 있습니다:",
          ],
          bullets: [
            "법령에 따라 요구되는 경우(예: 소환장 또는 유사한 법적 절차 준수)",
            "자신의 권리 보호, 사용자 또는 타인의 안전 보호, 사기 조사, 또는 정부 요청 대응을 위해 공개가 필요하다고 선의로 판단하는 경우",
            "서비스 제공자를 대신해 업무를 수행하고, 제공받은 정보를 독립적으로 사용하지 않으며, 본 방침의 규칙을 따르기로 동의한 신뢰할 수 있는 서비스 제공자와 공유하는 경우",
          ],
        },
        {
          heading: "수집 거부(Opt-Out) 권리",
          paragraphs: [
            "애플리케이션을 삭제(제거)하면 모든 정보 수집을 손쉽게 중단할 수 있습니다. 모바일 기기 또는 앱 마켓에서 제공하는 표준 삭제 절차를 이용할 수 있습니다.",
          ],
        },
        {
          heading: "데이터 보관 정책",
          paragraphs: [
            "서비스 제공자는 사용자가 애플리케이션을 사용하는 동안과 그 이후 합리적인 기간 동안 사용자가 제공한 데이터를 보관합니다. 제공한 데이터의 삭제를 원하시면 studio.damdam2@gmail.com 으로 연락해 주시면 합리적인 시간 내에 처리합니다.",
          ],
        },
        {
          heading: "아동",
          paragraphs: [
            "서비스 제공자는 만 13세 미만 아동으로부터 데이터를 수집하거나 마케팅하기 위해 애플리케이션을 의도적으로 사용하지 않습니다.",
            "애플리케이션은 만 13세 미만을 대상으로 하지 않습니다. 서비스 제공자는 만 13세 미만 아동의 개인 식별 정보를 고의로 수집하지 않습니다. 만 13세 미만 아동이 개인정보를 제공한 사실이 확인되면 서버에서 즉시 삭제합니다. 자녀가 개인정보를 제공한 사실을 알게 된 보호자께서는 studio.damdam2@gmail.com 으로 연락해 주시면 필요한 조치를 취하겠습니다.",
          ],
        },
        {
          heading: "보안",
          paragraphs: [
            "서비스 제공자는 사용자 정보의 기밀 유지를 중요하게 생각하며, 처리·보관하는 정보를 보호하기 위해 물리적·전자적·절차적 안전장치를 제공합니다.",
          ],
        },
        {
          heading: "변경",
          paragraphs: [
            "본 개인정보 처리방침은 어떤 이유로든 수시로 업데이트될 수 있습니다. 변경 시 본 페이지를 새로운 방침으로 갱신하여 알려드립니다. 계속 사용하면 모든 변경에 동의한 것으로 간주되므로, 정기적으로 본 방침을 확인하시기 바랍니다.",
            "본 방침의 시행일은 2026-04-13 입니다.",
          ],
        },
        {
          heading: "동의",
          paragraphs: [
            "애플리케이션을 사용함으로써, 사용자는 현재 및 향후 개정될 본 개인정보 처리방침에 따른 정보 처리에 동의하는 것입니다.",
          ],
        },
        {
          heading: "문의",
          paragraphs: [
            "애플리케이션 사용 중 개인정보 관련 문의나 처리 방식에 대한 질문이 있으시면 studio.damdam2@gmail.com 으로 이메일 주시기 바랍니다.",
          ],
        },
      ],
    },
  },
};

export function getCustomPrivacy(id: string): CustomPrivacy | undefined {
  return customPrivacy[id];
}
