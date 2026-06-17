import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 담담스튜디오 브랜드 팔레트 (브랜드 마크 가이드)
        paper: "#f4f0e8", // 한지 Paper
        cream: "#f4f0e8", // alias of paper (배경)
        ink: "#211e1a", // 먹색 Ink
        muted: "#6f675d",
        line: "#e4ddd0",
        clay: {
          DEFAULT: "#b0573c", // 낙관 점토 Clay
          dark: "#8f4530",
          tan: "#c08b6b", // 톤다운 클레이
          light: "#efe4d9", // 연한 점토 틴트 (배경용)
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
        // 워드마크 · 디스플레이: 한글 명조 + 영문 Newsreader
        serif: [
          "var(--font-serif-en)",
          "var(--font-serif-ko)",
          "serif",
        ],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
