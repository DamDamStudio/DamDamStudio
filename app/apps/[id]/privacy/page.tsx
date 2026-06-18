"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getApp } from "@/lib/apps";
import { buildPrivacy } from "@/lib/privacy";
import { useI18n } from "@/lib/i18n";

export default function PrivacyPage() {
  const { t, lang } = useI18n();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const app = id ? getApp(id) : undefined;

  if (!app || !app.privacy) {
    return (
      <>
        <Header />
        <main className="container-x px-6 pb-24 pt-40 text-center">
          <p className="text-muted">{t("detail.notfound")}</p>
          <Link
            href="/#apps"
            className="mt-6 inline-block text-sm text-clay hover:underline"
          >
            {t("detail.back")}
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const doc = buildPrivacy(app.name[lang], app.privacy, lang);

  return (
    <>
      <Header />
      <main className="pt-16">
        <article className="container-x px-6 py-16 sm:py-20">
          <Link
            href={`/apps/${app.id}`}
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            {doc.backLabel}
          </Link>

          <h1 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {doc.title}
          </h1>
          <p className="mt-2 text-sm text-muted">{doc.updatedLabel}</p>

          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-muted">
            {doc.intro}
          </p>

          <div className="mt-12 flex max-w-3xl flex-col gap-10">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-lg font-semibold tracking-tight">
                  {s.heading}
                </h2>
                {s.paragraphs && (
                  <div className="mt-3 flex flex-col gap-3">
                    {s.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed text-muted"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                )}
                {s.bullets && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {s.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
