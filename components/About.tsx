"use client";

import { useI18n, type DictKey } from "@/lib/i18n";

const stats: { value: string; labelKey: DictKey }[] = [
  { value: "1", labelKey: "about.stat.apps" },
  { value: "5.0", labelKey: "about.stat.rating" },
  { value: "iOS", labelKey: "about.stat.platforms" },
  { value: "KO · EN", labelKey: "about.stat.languages" },
];

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section-pad">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {t("about.body")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {stats.map((s) => (
            <div
              key={s.labelKey}
              className="flex flex-col justify-center gap-1 bg-cream p-7"
            >
              <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {s.value}
              </span>
              <span className="text-sm text-muted">{t(s.labelKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
