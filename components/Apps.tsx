"use client";

import Image from "next/image";
import Link from "next/link";
import { apps, moreComing, type AppItem } from "@/lib/apps";
import { useI18n } from "@/lib/i18n";

export default function Apps() {
  const { t, lang } = useI18n();
  const live = apps.filter((a) => a.status === "live");
  const soon = apps.filter((a) => a.status === "soon");

  return (
    <section id="apps" className="section-pad bg-clay-light/40">
      <div className="container-x">
        <div className="max-w-xl">
          <p className="eyebrow">{t("apps.eyebrow")}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
            {t("apps.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {t("apps.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {live.map((app) => (
            <AppCard key={app.id} app={app} lang={lang} />
          ))}
          {soon.map((app) => (
            <AppCard key={app.id} app={app} lang={lang} />
          ))}

          {/* generic placeholder only when nothing is explicitly "coming soon" */}
          {soon.length === 0 && (
            <div className="flex min-h-[220px] flex-col items-start justify-center gap-1 rounded-2xl border border-dashed border-line bg-cream/50 p-7">
              <p className="text-lg font-semibold tracking-tight">
                {moreComing.title[lang]}
              </p>
              <p className="text-sm text-muted">{moreComing.body[lang]}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AppIcon({ app, lang }: { app: AppItem; lang: "ko" | "en" }) {
  if (app.iconImage) {
    if (app.iconContain) {
      // transparent logo → padded on a white tile so it reads as an app icon
      return (
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[18px] bg-white p-2.5 shadow-sm ring-1 ring-line">
          <Image
            src={app.iconImage}
            alt={`${app.name[lang]} app icon`}
            width={72}
            height={72}
            className="h-full w-full object-contain"
          />
        </div>
      );
    }
    return (
      <Image
        src={app.iconImage}
        alt={`${app.name[lang]} app icon`}
        width={72}
        height={72}
        className="h-16 w-16 shrink-0 rounded-[18px] shadow-sm ring-1 ring-line"
      />
    );
  }
  return (
    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[18px] bg-clay-light text-3xl">
      {app.icon}
    </div>
  );
}

function AppCard({ app, lang }: { app: AppItem; lang: "ko" | "en" }) {
  const { t } = useI18n();
  const isSoon = app.status === "soon";

  return (
    <article
      className={`flex flex-col rounded-2xl border border-line bg-cream p-7 transition-all ${
        isSoon
          ? ""
          : "hover:-translate-y-0.5 hover:border-clay hover:shadow-[0_18px_50px_-30px_rgba(38,36,31,0.4)]"
      }`}
    >
      {/* icon + name + (soon badge) */}
      <div className="flex items-start gap-4">
        <AppIcon app={app} lang={lang} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold leading-snug tracking-tight">
              {app.name[lang]}
            </h3>
            {isSoon && (
              <span className="shrink-0 rounded-full bg-clay/10 px-2.5 py-1 text-xs font-medium text-clay-dark">
                {t("apps.soon")}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm font-medium text-clay">
            {app.category[lang]}
            {!isSoon && app.rating != null && (
              <span className="ml-2 text-muted">★ {app.rating.toFixed(1)}</span>
            )}
          </p>
        </div>
      </div>

      {/* short summary */}
      <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
        {app.summary[lang]}
      </p>

      {!isSoon && (
        <>
          <hr className="my-6 border-line" />
          <div className="flex items-center justify-between">
            {app.appStoreUrl ? (
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
              >
                 {t("apps.appstore.short")}
              </a>
            ) : (
              <span />
            )}
            <Link
              href={`/apps/${app.id}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {t("apps.more")}
              <span aria-hidden>›</span>
            </Link>
          </div>
        </>
      )}
    </article>
  );
}
