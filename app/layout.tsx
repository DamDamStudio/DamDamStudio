import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "담담스튜디오 · DamDam Studio",
  description:
    "담담하게, 오래 곁에 두고 싶은 모바일 앱을 만드는 스튜디오. A mobile app studio crafting calm, considered apps.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "담담스튜디오 · DamDam Studio",
    description:
      "담담하게, 오래 곁에 두고 싶은 모바일 앱을 만드는 스튜디오.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* 본문·UI: Pretendard */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* 워드마크·디스플레이: 한글 명조 + 영문 Newsreader (브랜드 지정 서체) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap"
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
