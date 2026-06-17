"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mark, IconBadge } from "@/components/Logo";
import { useI18n, type DictKey } from "@/lib/i18n";

export default function BrandPage() {
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Lockups />
        <AppIcons />
        <Colors />
        <Construction />
        <Downloads />

        <div className="container-x px-6 pb-20">
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            {t("brand.back")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ── 섹션 공통 헤더 ── */
function SectionHead({
  no,
  title,
  body,
}: {
  no: DictKey;
  title: DictKey;
  body?: DictKey;
}) {
  const { t } = useI18n();
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
        {t(no)}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {t(title)}
      </h2>
      {body && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {t(body)}
        </p>
      )}
    </div>
  );
}

/* ── Hero: 심볼 + 워드마크 + 컨셉 ── */
function Hero() {
  const { t } = useI18n();
  return (
    <section className="border-b border-line px-6 py-20 text-center sm:py-24">
      <div className="container-x flex flex-col items-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
          {t("brand.eyebrow")}
        </p>
        <div className="mt-8 grid h-24 w-24 place-items-center rounded-[26px] bg-ink">
          <Mark className="h-12 w-12" stroke="#f4f0e8" dot="#c08b6b" />
        </div>
        <h1 className="mt-7 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
          {t("brand.wordmark.ko")}
        </h1>
        <p className="mt-2 font-serif text-sm tracking-[0.35em] text-muted">
          {t("brand.wordmark.en")}
        </p>
        <p className="mt-7 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
          {t("brand.concept")}
        </p>
      </div>
    </section>
  );
}

/* ── 01 로크업 ── */
function Lockups() {
  const { t } = useI18n();
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHead
          no="brand.lockups.no"
          title="brand.lockups.title"
          body="brand.lockups.body"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {/* 가로형 Primary */}
          <Card label={t("brand.lockups.primary")} className="bg-cream">
            <span className="inline-flex items-center gap-3">
              <Mark className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold tracking-tight">
                  담담스튜디오
                </span>
                <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                  DAMDAM STUDIO
                </span>
              </span>
            </span>
          </Card>

          {/* 세로형 */}
          <Card label={t("brand.lockups.vertical")} className="bg-cream">
            <span className="flex flex-col items-center gap-2">
              <Mark className="h-10 w-10" />
              <span className="font-serif text-xl font-semibold tracking-tight">
                담담스튜디오
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                DAMDAM STUDIO
              </span>
            </span>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {/* 심볼 단독 */}
          <Card label={t("brand.lockups.symbol")} className="bg-cream">
            <Mark className="h-12 w-12" />
          </Card>

          {/* 다크 반전 */}
          <Card label={t("brand.lockups.dark")} dark className="bg-ink">
            <span className="flex flex-col items-center gap-2">
              <Mark className="h-9 w-9" stroke="#f4f0e8" dot="#c08b6b" />
              <span className="font-serif text-lg font-semibold tracking-tight text-cream">
                담담스튜디오
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cream/60">
                DAMDAM STUDIO
              </span>
            </span>
          </Card>

          {/* 점토 배경 */}
          <Card label={t("brand.lockups.clay")} dark className="bg-clay">
            <Mark className="h-12 w-12" stroke="#f4f0e8" dot="#f4f0e8" />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  children,
  label,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-line ${className}`}
    >
      <div className="grid min-h-[140px] flex-1 place-items-center px-6 py-10">
        {children}
      </div>
      <div
        className={`border-t px-5 py-3 text-center text-xs ${
          dark ? "border-white/10 text-cream/60" : "border-line text-muted"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

/* ── 02 앱 아이콘 ── */
function AppIcons() {
  const { t } = useI18n();
  const icons = [
    { v: "ink" as const, label: t("brand.icon.ink") },
    { v: "paper" as const, label: t("brand.icon.paper") },
    { v: "clay" as const, label: t("brand.icon.clay") },
  ];
  return (
    <section className="section-pad bg-clay-light/30">
      <div className="container-x">
        <SectionHead
          no="brand.icon.no"
          title="brand.icon.title"
          body="brand.icon.body"
        />
        <div className="flex flex-wrap items-end gap-8">
          {icons.map((i) => (
            <figure key={i.v} className="flex flex-col items-center gap-3">
              <IconBadge
                variant={i.v}
                className="h-24 w-24 rounded-[22px] shadow-sm ring-1 ring-black/5"
              />
              <figcaption className="text-xs text-muted">{i.label}</figcaption>
            </figure>
          ))}

          {/* 크기 샘플 */}
          <div className="ml-2 flex items-end gap-5 border-l border-line pl-8">
            <figure className="flex flex-col items-center gap-2">
              <IconBadge variant="ink" className="h-14 w-14 rounded-[14px]" />
              <figcaption className="text-[11px] text-muted">60pt</figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-2">
              <IconBadge variant="ink" className="h-8 w-8 rounded-[8px]" />
              <figcaption className="text-[11px] text-muted">32pt</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 03 컬러 ── */
function Colors() {
  const { t } = useI18n();
  const swatches = [
    { name: t("brand.color.ink"), hex: "#211E1A", fg: "#f4f0e8" },
    { name: t("brand.color.paper"), hex: "#F4F0E8", fg: "#211e1a", ring: true },
    { name: t("brand.color.clay"), hex: "#B0573C", fg: "#f4f0e8" },
    { name: t("brand.color.tan"), hex: "#C08B6B", fg: "#211e1a" },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHead no="brand.color.no" title="brand.color.title" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {swatches.map((s) => (
            <div
              key={s.hex}
              className="overflow-hidden rounded-2xl border border-line"
            >
              <div
                className={`h-28 ${s.ring ? "border-b border-line" : ""}`}
                style={{ backgroundColor: s.hex }}
              />
              <div className="bg-cream px-4 py-3">
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wide text-muted">
                  {s.hex}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 04 구성 · 여백 규칙 ── */
function Construction() {
  const { t } = useI18n();
  const rules: [DictKey, DictKey][] = [
    ["brand.cons.symbol.k", "brand.cons.symbol.v"],
    ["brand.cons.space.k", "brand.cons.space.v"],
    ["brand.cons.min.k", "brand.cons.min.v"],
    ["brand.cons.stroke.k", "brand.cons.stroke.v"],
    ["brand.cons.ko.k", "brand.cons.ko.v"],
    ["brand.cons.en.k", "brand.cons.en.v"],
  ];
  return (
    <section className="section-pad bg-clay-light/30">
      <div className="container-x">
        <SectionHead no="brand.cons.no" title="brand.cons.title" />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* clearspace 다이어그램 */}
          <div className="grid place-items-center rounded-2xl border border-line bg-cream p-8">
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-xl border border-dashed border-clay/50 p-7">
                <div className="rounded-md border border-dashed border-clay/40 p-4">
                  <Mark className="h-16 w-16" />
                </div>
              </div>
              <span className="text-xs text-muted">
                {t("brand.cons.clearspace")}
              </span>
            </div>
          </div>

          {/* 규칙 테이블 */}
          <dl className="flex flex-col">
            {rules.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-[88px_1fr] gap-4 py-3.5 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <dt className="text-sm font-semibold">{t(k)}</dt>
                <dd className="text-sm leading-relaxed text-muted">{t(v)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ── 에셋 다운로드 ── */
function Downloads() {
  const { t } = useI18n();
  const files = [
    { href: "/brand/damdam-mark.svg", label: "damdam-mark.svg" },
    { href: "/brand/damdam-mark-reversed.svg", label: "damdam-mark-reversed.svg" },
    { href: "/brand/damdam-mark-mono.svg", label: "damdam-mark-mono.svg" },
    { href: "/brand/damdam-icon-ink.svg", label: "damdam-icon-ink.svg" },
    { href: "/brand/damdam-icon-paper.svg", label: "damdam-icon-paper.svg" },
    { href: "/brand/damdam-icon-clay.svg", label: "damdam-icon-clay.svg" },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHead no="brand.download.no" title="brand.download.title" />
        <p className="-mt-6 mb-8 max-w-2xl text-sm leading-relaxed text-muted">
          {t("brand.download.body")}
        </p>
        <div className="flex flex-wrap gap-2">
          {files.map((f) => (
            <a
              key={f.href}
              href={f.href}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-clay hover:bg-clay-light"
            >
              <span aria-hidden>↓</span>
              {f.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
