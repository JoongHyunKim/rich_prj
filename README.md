# Tarot Spread MVP

가벼운 질문을 입력하고 1/3/5장 스프레드를 뽑는 타로 MVP입니다. 기본 상태에서는 로컬 해석 로직으로 작동하며, `/api/reading` 엔드포인트를 통해 서버에서 결과를 생성할 수 있습니다.

## 구성
- `index.html`: 메인 UI
- `styles.css`: 스타일
- `app.js`: 클라이언트 로직
- `shared/tarot.js`: 덱 데이터 + 해석 로직
- `functions/reading.js`: Cloudflare Pages Functions 엔드포인트

## 로컬 실행
간단한 정적 서버로 열면 됩니다.
- 예시: VS Code Live Server 또는 `npx serve .`

## Cloudflare Pages 배포
1) Git 저장소로 연결
2) Build command: 비워두기
3) Output directory: `/` (루트)
4) Functions 사용: `functions/reading.js`가 자동 배포됨

## 외부 OpenAPI 연동
현재는 로컬 해석 로직을 사용합니다. 외부 API로 대체하려면:
1) 원하는 API 스펙(요청/응답 형식)을 알려주세요.
2) `functions/reading.js`에서 해당 API 호출로 치환해 드립니다.

## 유의
- 서비스 성격상 엔터테인먼트 고지 문구를 유지하세요.
- AdSense 적용 시 정책에 맞는 페이지 구성(개인정보 처리방침, 이용약관) 추가를 권장합니다.

## 폰트/이미지 출처
- Nanum Gothic 폰트: SIL OFL 라이선스, `assets/fonts/OFL.txt` 참고
- Rider-Waite-Smith 타로 이미지: 퍼블릭 도메인으로 표기된 파일을 사용

