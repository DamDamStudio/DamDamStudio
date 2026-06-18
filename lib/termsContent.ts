import type { Lang } from "./i18n";
import type { TermsSection } from "./terms";

/**
 * 앱별 "직접 작성한" 이용약관 (공식 문구를 그대로 사용).
 * 여기에 항목이 있으면 buildTerms() 생성기 대신 이 내용이 우선 렌더됩니다.
 */
export type CustomTerms = Record<
  Lang,
  {
    effective?: string;
    intro?: string;
    sections: TermsSection[];
  }
>;

export const customTerms: Record<string, CustomTerms> = {
  // 여로 — App Privacy Policy Generator로 생성한 공식 약관 (영문 원문 + 한글 번역)
  yeoro: {
    en: {
      effective: "2026-04-13",
      intro:
        'These terms and conditions apply to the Yeoro app (hereby referred to as "Application") for mobile devices that was created by DamDam Studio (hereby referred to as "Service Provider") as an Ad Supported service.',
      sections: [
        {
          heading: "",
          paragraphs: [
            "Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.",
            "Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.",
            "The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.",
            "The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.",
            "Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the third-party service providers used by the Application:",
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
            "Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.",
            "If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.",
            "Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.",
            "In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.",
            "The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.",
          ],
        },
        {
          heading: "Changes to These Terms and Conditions",
          paragraphs: [
            "The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.",
            "These terms and conditions are effective as of 2026-04-13.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at studio.damdam2@gmail.com.",
          ],
        },
      ],
    },
    ko: {
      effective: "2026-04-13",
      intro:
        "본 이용약관은 담담스튜디오(이하 ‘서비스 제공자’)가 광고 기반(Ad Supported) 서비스로 만든 모바일용 여로(Yeoro) 앱(이하 ‘애플리케이션’)에 적용됩니다.",
      sections: [
        {
          heading: "",
          paragraphs: [
            "애플리케이션을 내려받거나 이용함으로써, 사용자는 아래 약관에 자동으로 동의하게 됩니다. 애플리케이션을 사용하기 전에 본 약관을 충분히 읽고 이해하시길 강력히 권장합니다.",
            "애플리케이션, 애플리케이션의 일부, 또는 당사 상표에 대한 무단 복제·수정은 엄격히 금지됩니다. 애플리케이션의 소스 코드를 추출하거나, 다른 언어로 번역하거나, 파생 버전을 만드는 시도는 허용되지 않습니다. 애플리케이션과 관련된 모든 상표권·저작권·데이터베이스권 및 기타 지식재산권은 서비스 제공자에게 있습니다.",
            "서비스 제공자는 애플리케이션이 최대한 유익하고 효율적이도록 노력합니다. 이에 따라 언제든지, 어떤 이유로든 애플리케이션을 수정하거나 서비스에 요금을 부과할 권리를 보유합니다. 애플리케이션 또는 서비스에 요금이 부과되는 경우 이를 명확히 안내해 드립니다.",
            "애플리케이션은 서비스 제공을 위해 사용자가 서비스 제공자에게 제공한 개인정보를 저장·처리합니다. 휴대폰과 애플리케이션 접근의 보안을 유지하는 것은 사용자의 책임입니다. 서비스 제공자는 기기의 공식 운영체제가 부과한 소프트웨어 제한을 해제하는 탈옥(jailbreak)이나 루팅(rooting)을 하지 않을 것을 강력히 권고합니다. 이러한 행위는 휴대폰을 멀웨어·바이러스·악성 프로그램에 노출시키고, 보안 기능을 훼손하며, 애플리케이션이 올바르게 작동하지 않거나 전혀 작동하지 않게 만들 수 있습니다.",
            "애플리케이션은 자체 이용약관을 가진 제3자 서비스를 이용합니다. 애플리케이션이 사용하는 제3자 서비스 제공자는 다음과 같습니다:",
          ],
          bullets: ["AdMob", "Google Analytics for Firebase", "Firebase Crashlytics"],
        },
        {
          heading: "",
          paragraphs: [
            "서비스 제공자가 책임지지 않는 부분이 있음을 알려드립니다. 애플리케이션의 일부 기능은 Wi-Fi 또는 이동통신망을 통한 활성 인터넷 연결이 필요합니다. Wi-Fi에 연결할 수 없거나 데이터 허용량을 모두 소진하여 애플리케이션이 제 기능을 다하지 못하는 경우, 서비스 제공자는 책임지지 않습니다.",
            "Wi-Fi 지역 밖에서 애플리케이션을 사용하는 경우, 이동통신사의 약관이 계속 적용됩니다. 따라서 애플리케이션 연결 중 데이터 사용에 대해 통신사로부터 요금이 부과되거나 기타 제3자 요금이 발생할 수 있습니다. 애플리케이션을 사용함으로써, 데이터 로밍을 끄지 않은 채 본 지역(국가) 밖에서 사용할 경우의 로밍 데이터 요금을 포함한 모든 요금에 대한 책임을 사용자가 부담하는 데 동의합니다. 사용 중인 기기의 요금 납부자가 본인이 아닌 경우, 납부자의 허락을 받은 것으로 간주합니다.",
            "마찬가지로, 서비스 제공자가 사용자의 애플리케이션 사용에 대해 항상 책임질 수 있는 것은 아닙니다. 예를 들어 기기를 충전된 상태로 유지하는 것은 사용자의 책임입니다. 기기 배터리가 방전되어 서비스에 접근할 수 없는 경우, 서비스 제공자는 책임지지 않습니다.",
            "사용자의 애플리케이션 사용에 대한 서비스 제공자의 책임과 관련하여, 서비스 제공자는 애플리케이션을 항상 최신·정확하게 유지하려 노력하지만 정보 제공을 위해 제3자에 의존합니다. 사용자가 이 기능에 전적으로 의존함으로써 입은 직접적·간접적 손실에 대해 서비스 제공자는 어떠한 책임도 지지 않습니다.",
            "서비스 제공자는 향후 애플리케이션을 업데이트할 수 있습니다. 애플리케이션은 현재 운영체제 요구사항에 맞춰 제공되며(및 서비스 제공자가 제공 범위를 확장하기로 한 추가 시스템), 그 요구사항은 변경될 수 있고, 계속 사용하려면 업데이트를 내려받아야 합니다. 서비스 제공자는 애플리케이션을 항상 사용자에게 적합하거나 기기에 설치된 특정 운영체제 버전과 호환되도록 업데이트한다고 보장하지 않습니다. 다만 사용자는 제공되는 업데이트를 항상 수락하는 데 동의합니다. 서비스 제공자는 또한 애플리케이션 제공을 중단하고 사전 고지 없이 언제든 이용을 종료할 수 있습니다. 별도 고지가 없는 한, 종료 시 (a) 본 약관에서 부여된 권리와 라이선스는 종료되며, (b) 사용자는 애플리케이션 사용을 중단하고 필요한 경우 기기에서 삭제해야 합니다.",
          ],
        },
        {
          heading: "약관의 변경",
          paragraphs: [
            "서비스 제공자는 이용약관을 주기적으로 업데이트할 수 있습니다. 따라서 변경 사항을 확인하기 위해 본 페이지를 정기적으로 검토하시기 바랍니다. 변경 시 새로운 이용약관을 본 페이지에 게시하여 알려드립니다.",
            "본 이용약관의 시행일은 2026-04-13 입니다.",
          ],
        },
        {
          heading: "문의",
          paragraphs: [
            "이용약관에 대한 문의나 제안이 있으시면 언제든지 studio.damdam2@gmail.com 으로 서비스 제공자에게 연락해 주시기 바랍니다.",
          ],
        },
      ],
    },
  },
};

export function getCustomTerms(id: string): CustomTerms | undefined {
  return customTerms[id];
}
