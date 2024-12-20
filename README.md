# Movie Get 
🎬 개봉한 영화들을 간편하게 예매해 보세요 🎬

> Megabox, 롯데시네마, CGV를 바탕으로 실제 영화 예매 시스템과 밀접하게 서비스를 구현했습니다. TMDB의 영화 상영 데이터를 가공하여 데이터를 생성 회원들이 실제와 같은 영화 예매를 경험할 수 있습니다.
<br/>

<div align="center">
  <img src="https://github.com/user-attachments/assets/3c8f4569-2234-4292-bec8-ec315313c903" alt="movieget_thumbnail"><br/>
</div>


<div align="center"> 프로젝트 기간 : 2024.10.10 ~ 2024.11.06 </div>

## 📅 프로젝트 일정

| Sprint | 기간                    | 내용                             |
| ------ | ----------------------- | -------------------------------- |
| 1      | 2024/10/10 - 2024/10/16 | 요구사항 1단계 및 인증 구현      |
| 2      | 2024/10/17 - 2024/10/23 | 요구사항 2단계 구현              |
| 3      | 2024/10/24 - 2024/10/30 | 요구사항 3단계 구현              |
| 4      | 2024/10/31 - 2024/11/05 | 배포 및 배포환경 디버깅 발표준비 |
| 4      | 2024/11/06              | 최종 발표, 데모                  |


## 👥 팀원 구성
| Leader       | Member       | Member       |
| :---:        | :---:        | :---:        |
| FE 김진모    | FE 김대식    | FE 김수민    |
| <a href="https://github.com/moriroKim"><img src="https://avatars.githubusercontent.com/u/162679625?s=64&v=4" alt="moriroKim" width="200px" height="200px"></a> @moriroKim | <a href="https://github.com/tosioB"><img src="https://avatars.githubusercontent.com/u/88811407?v=4" alt="tosioB" width="200px" height="200px"></a> @tosioB| <a href="https://github.com/siltea2019"><img src="https://avatars.githubusercontent.com/u/174302300?v=4" alt="siltea2019" width="200px" height="200px"></a> @siltea2019|

## 👩‍💻 프로젝트 세부
| 로그인                                                                                               | 결제                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/e8dfaf29-f097-450a-9534-54400b22f876" width="400px"> | <img src="https://github.com/user-attachments/assets/1cd30f98-39b4-4550-927b-984c8f0eff02" width="400px"> |

| 무한스크롤                                                                                               | 찜하기                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/8f3bfd5e-df2f-460c-a140-b5768ed69d56" width="400px"> | <img src="https://github.com/user-attachments/assets/65de09b7-f384-4e49-a458-eeb5e685b4d3" width="400px"> |

| 에러                                                                                               |
| --------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/2715027a-1b6b-4e20-b22b-567637365af0" width="400px"> |


## 💻 개발환경

Front : Vite, React, TypeScript, Styled-components, Axios, Zustand, Tanstack/react-query <br />
배포환경 : AWS<br />
버전 : Github <br />
협업 툴 : Discord, Notion <br />
디자인 : Figma

## 📌 브랜치 전략

- git-flow를 기반으로 배포 단계에서 사용하는 main, 기능 개발이 완료된 브랜치인 develop, develop브랜치를 보조하는 feature브랜치로 나누어 운영하였습니다.
- feature브랜치는 페이지 단위로 나누어 팀원별 독립적인 개발환경을 위하여 사용하고, develop으로의 merge가 완료되면 해당 브랜치를 삭제하는 방식으로 운영하였습니다.

## 🧑‍💻 기술 선택 이유

### Vite - 빠르고 효율적인 빌드 도구
- 빠른 개발 서버: 즉각적인 핫 모듈 교체(HMR)를 통해 코드 변경 시 실시간으로 반영됩니다. 이는 브라우저 새로고침 없이도 변경된 내용을 바로 확인할 수 있어 개발 속도를 대폭 향상시킵니다.
- 빠른 빌드 속도: 모듈을 사전 번들링(pre-bundling)하여 초기 빌드 시간을 크게 단축합니다.
- 경량화된 설정: Webpack 대비 간결한 설정 파일로, 초기 설정 및 관리가 간편합니다.

### React - 사용자 인터페이스를 구축하기 위함
- 컴포넌트 기반 아키텍처: UI를 재사용 가능한 컴포넌트로 나누어 개발 및 유지보수가 용이합니다.
- 풍부한 생태계: 방대한 오픈소스 라이브러리 및 커뮤니티 지원을 통해 문제 해결 및 기능 확장이 용이합니다.
- Virtual DOM: 효율적인 DOM 조작을 통해 UI 업데이트 속도를 최적화합니다.

### TypeScript - 정적 타입 검사 기능을 제공하여 코드 안정성을 높임
- 타입 안전성: 코드 작성 시 실수를 줄이고, 런타임 오류를 사전에 방지합니다.
- 자동 완성 및 IntelliSense: 개발 도구에서 제공하는 코드 자동 완성, 함수 시그니처 표시 등의 기능으로 개발 생산성을 높입니다.
- 유지보수성: 대규모 프로젝트에서 코드의 일관성을 유지하고, 리팩토링을 쉽게 할 수 있습니다.

### Styled-components - CSS-in-JS 방식으로 스타일을 관리하여 컴포넌트 단위로 스타일링
- 컴포넌트 기반 스타일링: 각 컴포넌트에 고유한 스타일을 적용하여 CSS의 전역 네임스페이스 충돌을 방지합니다.
- 동적 스타일링: props를 활용한 동적 스타일링이 가능하여 재사용성과 유연성을 높입니다.
- 자동 벤더 프리픽스: CSS 속성에 자동으로 벤더 프리픽스(-webkit-, -moz- 등)를 추가해 호환성을 보장합니다.

### Axios - API 요청을 쉽게 처리할 수 있는 HTTP 클라이언트 라이브러리
- 직관적인 API: GET, POST, PUT 등 HTTP 메서드를 직관적으로 사용 가능하며, 요청 및 응답에 대한 인터셉터 설정이 가능합니다.
- 에러 핸들링: 비동기 통신에서 발생할 수 있는 다양한 에러를 체계적으로 관리할 수 있습니다.
- Promise 기반: 비동기 처리를 위한 Promise 및 async/await 사용이 가능하여 가독성이 높은 코드 작성이 가능합니다.

### Zustand - React 애플리케이션의 전역 상태 관리를 위한 경량 상태 관리 라이브러리
- 단순하고 직관적인 API: Redux보다 간단한 구조로 사용이 용이하며, 보일러플레이트 코드가 거의 없습니다.
- 빠른 성능: 불필요한 리렌더링을 최소화하여 성능 최적화가 가능합니다.
- 직접적인 상태 업데이트: React Context API보다 빠르고 효율적인 상태 업데이트가 가능합니다.

### TanStack React-Query - 서버 상태 관리에 특화된 라이브러리, 데이터 페칭 및 캐싱 최적화
- 자동 캐싱 및 리페치: 데이터 변경 시 자동으로 캐시를 업데이트하고, 새로고침 없이 최신 상태를 반영합니다.
- 로딩 및 에러 상태 관리: API 호출 시 발생하는 로딩, 에러, 성공 상태를 간편하게 관리할 수 있습니다.
- 페이징 및 무한 스크롤: 복잡한 데이터 페칭 로직을 단순화하고, 효율적인 데이터 로딩을 지원합니다.

### 배포 환경: AWS - 안정적이고 확장 가능한 클라우드 인프라를 제공하여 빠르고 안정적인 서비스 운영
- 다양한 배포 옵션: EC2(가상 서버), S3(정적 웹사이트 호스팅), CloudFront(콘텐츠 전송 네트워크(CDN) 등 다양한 서비스를 활용할 수 있습니다.
- 자동 스케일링: 트래픽 증가 시 자동으로 인프라를 확장하여 서비스 중단을 방지합니다.
- CI/CD 파이프라인: GitHub Actions와 연동하여 코드 변경 시 자동 배포가 가능하도록 설정할 수 있습니다.

### 버전 관리: GitHub - 분산형 버전 관리 시스템, 협업 시 코드 변경 사항을 추적, 관리
- 브랜치 전략: 기능별로 브랜치를 나누어 개발하고, Pull Request를 통해 코드 리뷰를 진행할 수 있습니다.
- 코드 히스토리 관리: 코드 변경 이력을 쉽게 추적하고, 이전 버전으로 되돌릴 수 있습니다.
- GitHub Actions: CI/CD 자동화 도구를 사용하여 테스트 및 배포 작업을 자동으로 실행할 수 있습니다.
- 협업 강화: 이슈 관리, 프로젝트 보드, 팀 멘션 등을 통해 개발자 간 협업을 효율적으로 지원합니다.

