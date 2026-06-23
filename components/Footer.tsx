"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { getApp } from "@/lib/apps";
import { getCustomPrivacy } from "@/lib/privacyContent";
import { getCustomTerms } from "@/lib/termsContent";
import { Mark } from "./Logo";

export default function Footer() {
  const { t } = useI18n();
  const year = 2026;

  // 앱 페이지(/apps/<id>...)에서는 푸터 정책 링크가 그 앱의 문서를 가리킴.
  const pathname = usePathname();
  const appId = pathname?.match(/^\/apps\/([^/]+)/)?.[1];
  const app = appId ? getApp(appId) : undefined;
  const hasPrivacy = !!app && (!!app.privacy || !!getCustomPrivacy(app.id));
  const hasTerms = !!app && (!!app.terms || !!getCustomTerms(app.id));

  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Mark className="h-7 w-7" />
            <span className="font-serif text-base font-semibold tracking-tight">
              담담스튜디오
            </span>
          </div>
          <p className="mt-3 text-sm text-muted">{t("footer.tagline")}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-muted sm:items-end">
          <div className="flex gap-5">
            <Link href="/brand" className="transition-colors hover:text-ink">
              {t("nav.brand")}
            </Link>
            {hasPrivacy && (
              <Link
                href={`/apps/${appId}/privacy`}
                className="transition-colors hover:text-ink"
              >
                {t("footer.privacy")}
              </Link>
            )}
            {hasTerms && (
              <Link
                href={`/apps/${appId}/terms`}
                className="transition-colors hover:text-ink"
              >
                {t("footer.terms")}
              </Link>
            )}
          </div>
          <p>
            © {year} DamDam Studio. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
