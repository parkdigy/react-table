---
name: npm-package-development
description: 이 저장소의 React·TypeScript 테이블 npm 라이브러리 기능 구현, 오류 수정, 공개 API, 의존성 및 빌드 설정 변경에 사용하는 절차. 테이블 동작·타입·예제·배포 진입점을 함께 확인한다.
---

# 테이블 npm 패키지 개발 절차

## 사용 시점

컴포넌트 기능, 버그, 공개 타입, 의존성 또는 빌드·배포 설정을 변경할 때 사용한다. 문구나 주석만 바꿀 때는 관련 경로와 내용만 확인한다. 먼저 [저장소 지침](../../../AGENTS.md)과 [프로젝트 구조](../../../docs/agents/project.md)를 읽는다.

## 1. 분석

- `git status --short`를 확인하고 기존 변경과 요청 범위를 구분한다. 관련 구현, 타입, 예제, 설정과 테스트 유무를 읽어 기대 동작과 검증 방법을 정한다.
- 기본 테이블은 `src/PTable/`의 열·행, 체크, 정렬, 페이지, 스크롤, `PTableCommands`와 내부 context 및 셀·행 컴포넌트를 함께 추적한다. 선택적 기능인 `progressiveVisible`과 sortable에도 변경 영향이 있는지 본다.
- 검색 테이블은 `src/PSearchTable/`의 검색 폼, `onGetData`, 페이지, 선택적 hash와 `PSearchTableCommands`를 확인한다. 정보 표는 `src/PInfoTable/`의 항목 설정과 렌더링을 확인한다.
- 공개 여부는 `src/index.ts`와 각 디렉터리의 `index.ts`로 확인한다. `*.private` 구현과 빌드 시 제거되는 private 선언이 공개 타입에 새로 노출되지 않도록 확인한다.
- 예제의 `/table`, `/search_table`, `/info_table` 화면은 루트 소스를 직접 사용한다. 관련 예제와 소비자 관점의 차이를 함께 살핀다.

## 2. 구현

- 공개 props, 제네릭 타입, 콜백이나 명령형 ref를 바꾸면 호출부, 배럴 내보내기, 선언 파일, README와 예제에 필요한 변경을 반영한다. 타입만 내보내는 경우 `export type`을 사용한다.
- 실제 동작을 바꾸면 공개 API를 통한 적절한 테스트와 실행 명령을 마련한다. 현재 Jest 설정은 Node 환경이고 `.tsx` 변환과 npm `test` 스크립트가 없으므로 필요한 환경을 먼저 구성한다.
- React와 React DOM peer 범위, 루트와 예제의 설치 트리 및 중복 여부를 확인한다. 예제의 Rspack은 두 패키지를 예제 설치본으로 별칭 처리하고 `@comp`, `@ccomp`를 `tsconfig.json`에서 읽는다.
- 의존성 변경 시 직접 사용처, 전이 peer, Node 버전 및 두 ESLint 설정의 `@pdg/eslint-plugin-react-hook`을 확인한다. 최신 버전을 무조건 적용하지 않는다. `package-lock.json`은 Git에서 제외되므로 설치에 사용한 파일과 옵션을 확인하고 기존 잠금 파일이나 `node_modules`를 무심코 삭제하지 않는다.
- 생성물을 직접 편집하지 않는다. `dist/`, `examples/dist/` 및 루트 HTML에 추적 파일이 있으므로 빌드 전 기존 변경을 확인하고 보존한다.

## 3. 검증과 검토

`AGENTS.md`의 루트·예제 타입 및 lint 검사와 변경에 적합한 테스트를 실행한다. 라이브러리 빌드 변경에는 표준 빌드를, 예제 변경에는 Rspack 빌드를 확인한다. Watchman 오류 시 Rollup을 별도로 실행하되 표준 빌드 성공과 구분한다. Rollup과 예제 프로덕션 빌드는 각각 `dist/`와 `examples/dist/`를 정리한다. 예제 전체 빌드는 루트 HTML도 덮어쓴다.

배포 설정 변경에는 패키지 파일 목록과 실제 소비자의 import·require·타입 해석을 확인한다. 예제가 소스를 직접 가져오므로 예제 성공을 배포물 검증으로 간주하지 않는다. `type: module`과 CommonJS `.js` 출력의 관계도 확인한다. HTTP 응답만으로 브라우저 렌더링이나 HMR을 검증했다고 보고하지 않는다.

실패 원인을 코드, 기존 결함, 환경 문제로 구분하고 명령과 오류를 기록한다. 실패를 숨기려고 검사 설정을 완화하지 않는다. 마지막으로 diff에서 API 누락, 생성물과 기존 변경의 훼손 여부를 확인한다.

## 4. 완료 또는 인계

변경 목적, 검증 결과와 미확인 사항을 한글로 보고한다. 여러 세션에 걸치거나 인계가 필요한 작업만 [작업 기록 양식](templates/task.md)을 `_workspace/<작업명>/task.md`로 복사해 유지한다. 작업명은 경로로 안전한 짧은 영문·숫자·하이픈 조합을 쓰고 다른 기록을 덮어쓰지 않는다.
