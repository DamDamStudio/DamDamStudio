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
};

export default nextConfig;
