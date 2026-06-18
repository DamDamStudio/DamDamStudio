"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getApp } from "@/lib/apps";
import { useI18n, type DictKey } from "@/lib/i18n";

export default function AppDetailPage() {
  const { t, lang } = useI18n();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const app = id ? getApp(id) : undefined;

  if (!app) {
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

  const overviewParas = (app.overview?.[lang] ?? "").split("\n\n").filter(Boolean);

  const allInfoRows: { label: DictKey; value?: string }[] = [
    { label: "detail.info.developer", value: app.developer },
    { label: "detail.info.category", value: app.category[lang] },
    {
      label: "detail.info.rating",
      value: app.rating != null ? `★ ${app.rating.toFixed(1)}` : undefined,
    },
    { label: "detail.info.requires", value: app.requires?.[lang] },
    { label: "detail.info.languages", value: app.languages?.[lang] },
    { label: "detail.info.price", value: app.price?.[lang] },
  ];
  const infoRows = allInfoRows.filter((r) => r.value);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* ── Hero ── */}
        <section className="border-b border-line px-6 py-14 sm:py-16">
          <div className="container-x">
            <Link
              href="/#apps"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {t("detail.back")}
            </Link>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              {app.iconImage &&
                (app.iconContain ? (
                  <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[24px] bg-white p-3.5 shadow-sm ring-1 ring-line sm:h-28 sm:w-28">
                    <Image
                      src={app.iconImage}
                      alt={`${app.name[lang]} app icon`}
                      width={120}
                      height={120}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <Image
                    src={app.iconImage}
                    alt={`${app.name[lang]} app icon`}
                    width={120}
                    height={120}
                    className="h-24 w-24 shrink-0 rounded-[24px] shadow-sm ring-1 ring-line sm:h-28 sm:w-28"
                  />
                ))}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-wide text-clay">
                    {app.category[lang]}
                  </span>
                  {app.rating != null && (
                    <span className="text-xs font-medium text-muted">
                      <span className="text-clay">★</span>{" "}
                      {app.rating.toFixed(1)}
                    </span>
                  )}
                  {app.free && (
                    <span className="rounded-full bg-clay-light px-2 py-0.5 text-xs font-medium text-clay-dark">
                      {t("apps.free")}
                    </span>
                  )}
                </div>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {app.name[lang]}
                </h1>
                <p className="mt-1.5 text-base text-ink/70">
                  {app.tagline[lang]}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
                    >
                       {t("apps.appstore")}
                    </a>
                  )}
                  {app.googlePlayUrl && (
                    <a
                      href={app.googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-clay-light"
                    >
                      {t("apps.googleplay")}
                    </a>
                  )}
                  {!app.appStoreUrl && app.status === "soon" && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay-light px-6 py-3 text-sm font-medium text-clay-dark">
                      ⏳ {t("detail.soon.cta")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Screenshots ── */}
        {app.screenshots && app.screenshots.length > 0 && (
          <section className="border-b border-line py-14 sm:py-16">
            <div className="container-x px-6">
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-clay">
                {t("detail.screens")}
              </h2>
              <div className="no-scrollbar -mx-6 flex gap-4 overflow-x-auto px-6 pb-2">
                {app.screenshots.map((src, i) => (
                  <div
                    key={src}
                    className="shrink-0 overflow-hidden rounded-[28px] border border-line bg-cream shadow-sm"
                  >
                    <Image
                      src={src}
                      alt={`${app.name[lang]} screenshot ${i + 1}`}
                      width={1080}
                      height={2337}
                      className="h-[420px] w-auto sm:h-[520px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Body: overview / lists / info ── */}
        <section className="section-pad">
          <div className="container-x grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-16">
            <div className="flex flex-col gap-12">
              {/* overview */}
              {overviewParas.length > 0 && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold tracking-tight">
                    {t("detail.overview")}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {overviewParas.map((p, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed text-muted"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* who it's for */}
              {app.forWhom && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold tracking-tight">
                    {t("detail.forwhom")}
                  </h2>
                  <ul className="flex flex-col gap-2.5">
                    {app.forWhom[lang].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* features */}
              {app.features && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold tracking-tight">
                    {t("detail.features")}
                  </h2>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {app.features[lang].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 rounded-xl border border-line bg-cream px-4 py-3 text-[15px] leading-snug"
                      >
                        <span className="mt-0.5 text-clay" aria-hidden>
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* closing */}
              {app.closing && (
                <p className="rounded-2xl bg-clay-light/50 px-6 py-5 text-[15px] leading-relaxed text-ink/80">
                  {app.closing[lang]}
                </p>
              )}
            </div>

            {/* info sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-line bg-cream p-6">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                  {t("detail.info")}
                </h2>
                <dl className="flex flex-col">
                  {infoRows.map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between gap-4 py-3 text-sm ${
                        i > 0 ? "border-t border-line" : ""
                      }`}
                    >
                      <dt className="text-muted">{t(row.label)}</dt>
                      <dd className="text-right font-medium text-ink">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {app.appStoreUrl ? (
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
                  >
                     {t("apps.appstore")}
                  </a>
                ) : app.status === "soon" ? (
                  <span className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-clay/30 bg-clay-light px-5 py-3 text-sm font-medium text-clay-dark">
                    ⏳ {t("detail.soon.cta")}
                  </span>
                ) : null}
              </div>
            </aside>
          </div>
        </section>

        {/* 제일 하단: 개인정보 처리방침 링크 */}
        {app.privacy && (
          <div className="border-t border-line">
            <div className="container-x flex justify-center px-6 py-8">
              <Link
                href={`/apps/${app.id}/privacy`}
                className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                {t("detail.privacy")}
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
