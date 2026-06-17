"use client";

import { useI18n } from "@/lib/i18n";

const EMAIL = "hello@damdam.studio";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-cream sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-clay/30 blur-3xl"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            {t("contact.eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-cream/70">
            {t("contact.body")}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {t("contact.email")}
            <span aria-hidden>→</span>
          </a>
          <p className="mt-4 text-sm text-cream/50">{EMAIL}</p>
        </div>
      </div>
    </section>
  );
}
