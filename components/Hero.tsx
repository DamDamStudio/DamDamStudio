"use client";

import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-40 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-clay-light blur-3xl opacity-60"
      />

      <div className="container-x flex flex-col items-center text-center">
        <p className="eyebrow animate-fade-up">{t("hero.eyebrow")}</p>
        <h1 className="mt-5 max-w-3xl animate-fade-up text-balance text-4xl font-semibold leading-[1.2] tracking-tight sm:text-6xl">
          {t("hero.title")}
        </h1>
        <p
          className="mt-6 max-w-xl animate-fade-up text-pretty text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "80ms" }}
        >
          {t("hero.subtitle")}
        </p>
        <div
          className="mt-9 flex animate-fade-up flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "160ms" }}
        >
          <a
            href="#apps"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
          >
            {t("hero.cta.apps")}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-clay-light"
          >
            {t("hero.cta.contact")}
          </a>
        </div>
      </div>
    </section>
  );
}
