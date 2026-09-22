/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // 버전 관리 파일은 항상 최신본을 받아야 하므로 캐시 무효화 (경로 무관)
        source: "/:path*/version.json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  // Savvy 법적 문서는 self-contained HTML 정적 파일 → 클린 URL로 서빙
  // (배열 반환 = afterFiles: 정적 파일 확인 후 · 동적 라우트 전에 적용)
  async rewrites() {
    return [
      { source: "/apps/savvy/privacy", destination: "/apps/savvy/privacy.html" },
      { source: "/apps/savvy/terms", destination: "/apps/savvy/terms.html" },
      { source: "/apps/savvy/open-source", destination: "/apps/savvy/open-source.html" },
    ];
  },
};

export default nextConfig;
