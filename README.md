# 담담 스튜디오 · DamDam Studio

모바일 앱을 만드는 담담 스튜디오의 회사 소개 & 앱 홍보 홈페이지입니다.
A company & app-promotion website for DamDam Studio, a mobile app studio.

## 기술 스택 · Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- 한국어 / English 토글 (간단한 클라이언트 i18n)

## 개발 · Development

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
```

## 콘텐츠 수정 · Editing content

- **문구 (모든 텍스트):** `lib/i18n.tsx` 의 `dict` — `{ ko, en }` 쌍으로 관리.
- **앱 목록:** `lib/apps.ts` 의 `apps` 배열 — 이름·설명·스토어 링크·아이콘 교체.
- **색상/폰트:** `tailwind.config.ts`, `app/layout.tsx`.

현재 앱 카드는 플레이스홀더입니다. 실제 앱 정보가 준비되면 `lib/apps.ts` 만 수정하면 됩니다.

## 구조 · Structure

```
app/            레이아웃 · 페이지 · 글로벌 스타일
components/      Header / Hero / About / Apps / Contact / Footer
lib/            i18n 사전 · 앱 데이터
```