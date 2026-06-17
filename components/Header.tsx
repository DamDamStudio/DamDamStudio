"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Lockup } from "./Logo";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 홈 섹션 앵커 + 브랜드 페이지 링크
  const links: { href: string; label: string; external?: boolean }[] = [
    { href: "/#about", label: t("nav.about") },
    { href: "/#apps", label: t("nav.apps") },
    { href: "/brand", label: t("nav.brand"), external: true },
    { href: "/#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-cream/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between px-6">
        <Link href="/" aria-label="담담스튜디오 홈">
          <Lockup />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line"
          >
            <span className="text-lg leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-cream md:hidden">
          <nav className="container-x flex flex-col px-6 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: "ko" | "en";
  setLang: (l: "ko" | "en") => void;
}) {
  return (
    <div className="flex items-center rounded-full border border-line p-0.5 text-xs">
      {(["ko", "en"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
            lang === code ? "bg-ink text-cream" : "text-muted hover:text-ink"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
