# 에이전트 코딩 가이드

## 프로젝트

`@pdg/react-table`은 TypeScript와 React로 작성한 테이블 컴포넌트 npm 패키지다. `src/index.ts`가 공개 진입점이며 예제는 배포 패키지가 아닌 루트 소스를 직접 가져오는 별도 Rspack 앱이다.

- `src/PTable/`: 열·행, 선택, 정렬, 페이지와 명령형 ref를 다루는 기본 테이블
- `src/PSearchTable/`: `@pdg/react-form` 검색, 비동기 데이터 로드, 페이지와 선택적 URL hash 연동
- `src/PInfoTable/`: 항목 설정으로 정보를 표시하는 컴포넌트
- `src/PTableContext/`, `src/PTableContextProvider/`, 각 셀·행·정렬 컴포넌트: 기본 테이블 내부 구성. 공개 여부는 `src/index.ts`와 각 `index.ts`를 확인한다.
- `examples/src/component/`: Table, SearchTable, InfoTable 데모와 공통 데이터. 라우트는 `examples/src/router/index.tsx`에 있다.
- `examples/rspack.config.js`: 예제 번들 및 개발 서버(기본 포트 9809). `@comp`, `@ccomp`는 예제 `tsconfig.json`에서 가져오며 React와 React DOM을 예제 설치본으로 해석한다.
- 상세 구조와 설정 주의점: [프로젝트 문서](docs/agents/project.md), [코딩 스킬](.agents/skills/npm-package-development/SKILL.md)

## 작업 원칙

1. 시작할 때 `git status --short`와 관련 소스·설정을 읽고 사용자의 기존 변경을 보존한다.
2. 필요한 범위만 수정한다. 공개 API 변경 시 컴포넌트의 props·명령형 ref·타입, 배럴 내보내기, README, 예제와 배포 선언을 함께 확인한다. 내부 `*.private` 구현과 공개 API를 구분한다.
3. 테이블 동작 변경 시 해당 기능에 따라 열 렌더링, 체크 상태, 행 정렬, 페이지, 스크롤과 명령형 ref의 상호작용을 확인한다. 검색 테이블은 비동기 결과, 검색·페이지 및 hash 흐름도 확인한다.
4. 문서와 작업 결과는 한글로 작성한다. 식별자와 명령은 원래 표기를 사용한다.
5. React와 React DOM은 peer dependency다. 의존성 변경 시 양쪽 `package.json`, 직접 사용처, peer 범위 및 `.nvmrc`와의 호환성을 확인하고, 예제의 React 중복과 `@pdg/react-admin-layout` peer도 확인한다. 두 ESLint 설정은 `@pdg/eslint-plugin-react-hook`을 사용한다.
6. `dist/`, `examples/dist/`, 루트 `index.html`, `404.html`에는 Git 추적 파일이 있다. 생성물을 직접 편집하지 말고 빌드 전에 변경 사항을 확인해 보존한다. 빌드는 기존 결과물을 지우거나 덮어쓸 수 있다.
7. 커밋·푸시·npm 게시는 요청받은 경우에만 실행한다. `npm run pub`는 실제로 게시한다. `git:commit`, `reset:gitignore`, `reinstall:module`은 각각 인덱스 또는 로컬 의존성을 변경하므로 스크립트 내용을 먼저 확인한다.

## 검증

`.nvmrc`에 지정된 Node와 npm을 사용한다. 루트와 `examples/`의 의존성은 별도다. `package-lock.json`은 Git 제외 대상이며 로컬 잠금 파일이 선언과 다를 수 있다. 설치 옵션과 사용한 잠금 파일을 확인하고 기존 파일과 `node_modules`를 무심코 삭제하거나 덮어쓰지 않는다.

```sh
npm run tsc
npm run lint
cd examples && npm run tsc && npm run lint
```

현재 테스트 파일과 npm `test` 스크립트는 없다. 동작 변경은 적절한 테스트와 실행 명령을 마련해 검증한다. Jest 설정의 변환 패턴은 `.tsx`를 포함하지 않고 환경은 Node이므로 React 컴포넌트 테스트에 필요한 변환과 DOM 환경을 확인한다.

라이브러리 빌드 변경 시 `npm run build`를 실행한다. Watchman 감시 재등록에 실패하면 `./node_modules/.bin/rollup -c --bundleConfigAsCjs`를 별도로 실행하고 표준 빌드의 실패와 구분해 보고한다. Rollup은 `dist/*`를 정리하며 lint 경고도 실패로 처리한다. 예제 변경 시 `cd examples && npm run build:rspack`을 실행한다. 이 명령도 `examples/dist/`를 정리한다. 예제의 `npm run build`는 추가로 루트 HTML 두 파일을 덮어쓴다.

배포 설정을 변경할 때는 `npm pack --dry-run`과 실제 소비 환경의 import·require·타입 해석을 확인한다. `"type": "module"`인데 CommonJS 출력이 `.js`이므로 Node 소비 호환성을 가정하지 않는다. 예제 빌드 성공은 배포물 검증을 대신하지 않는다.

개발 서버는 `npm run dev`로 실행한다. 서버 응답과 브라우저 렌더링·HMR 검증을 구분한다. 문서만 수정할 때는 링크·경로·명령을 실제 설정과 대조한다. 완료 보고에는 변경 내용, 실행한 검증과 결과, 미확인 사항을 남긴다.
