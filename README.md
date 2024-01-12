# Percent Hotel

[배포 링크](https://percenthotel.web.app/)

[노션](https://www.notion.so/Front-End-6ac236829702439bab5827147862f0a4?pvs=4)

[API 명세서](https://www.notion.so/API-1f719ecae72c41a6b56f0c51ba23c3ac)

[피그마링크](https://www.figma.com/file/Ci0WNO2vuruoU655e50XS3/7%EC%A1%B0-%ED%94%BC%EA%B7%B8%EB%A7%88?type=design&node-id=19%3A10567&mode=design&t=ZJataIUNrBE5N59F-1)

<hr>

## 진행 상황 & 피드백 요청 사항

<details>
<summary>세부사항</summary>

### 로그인 / 회원가입 / 비밀번호 찾기 페이지

- 각 페이지 마크업 / API 연결 완료
- **설명**
  - 각 페이지에서 사용하는 API 등을 훅 등으로 분리하지 않고 아직 같은 페이지 안에 로직 작성
    - 로그인, 회원가입등의 로직은 캐싱이 필요하다고 생각되지 않아 react-query를 사용하지 않고 axios만을 사용
  - axios를 사용하고 있는데, 로그인, 회원가입 등의 로직은 아직 intercepter 등을 사용하지 않음
    - 추후 토큰 재발급 등의 로직을 위해 intercepter 혹은 커스텀 훅 등을 작성해야할 필요성 느껴짐
  - 각 페이지에 react-hook-form을 도입하여 정보 기입시 페이지 렌더링 및 컴포넌트 내 로직 최소화
  - 아직 로그인 후 유저 정보 및 access, refresh 토큰을 localStorage에 저장하고 있어 개선 필요.
    - 방법을 권장해주시면 감사하겠습니다!

### 상품 상세 페이지

- 마크업 완료
- msw 목서버 연결 완료
- 캐러셀 컴포넌트 유닛테스트 진행 완료
- 위치정보 카카오 map api 연동 예정

### 양도글 작성 페이지 (양도할 예약내역 선택 / 양도 가격설정 페이지)

- 각 페이지 마크업 완료
- msw 목서버 연결
- 양도할 예약 내역 데이터를 양도 가격설정 페이지로 전달할 때 전역변수 사용
  - zustand-persist로 새로고침 시 데이터 유실 방지
- 기획적인 예외 처리 진행 (처음 판매할 때 원하는 가격이 1차 가격, N시간 안에 안 팔리면 자동 인하된 가격이 2차 가격)
  - 1차 가격을 설정하지 않고 2차 가격 설정 못하도록 설정
  - 1차 가격보다 2차 가격을 높게 설정 못하도록 설정
  - 1차/2차 모두 설정되어 있는 상황에서 1차 가격을 2차 가격보다 내리면 2차 가격은 자동적으로 1차 가격보다 1000원 낮게 설정
  - 가격 설정 시 십의자리 이하 가격은 내림 처리 (123,456원 → 123,400원)

### 마이페이지

- 프로필 변경
  - 마크업 / API 연동 완료
  - 이름과 전화번호 변경이 개별적으로 진행될 수 있도록 컴포넌트 분리
- 로그아웃 기능
  - 마크업 / API 연동 완료
- 정산 계좌 관리
  - 마크업 진행중

### 공통컴포넌트 (헤더/ 바텀네비게이션/ 토스트메시지)

- 헤더와 바텀네비게이션은 useLocation을 이용하여 url에 따라 조건적으로 렌더됨
- 토스트 메시지는 전역변수로 원하는 시기에 useEffect를 통해서 관리
</details>

## 추가 질문

<details>
<summary>세부사항</summary>

### 질문1. 특정페이지에서 공통 헤더, 푸터를 다르게 보여줘야 할 때 설계를 어떻게 하는게 좋을까요?

현재 react-router-dom의 outlet를 이용해서 밑과 같은 구조로 레이아웃 래퍼를 사용 중입니다.

```jsx
function App() {
  return (
    <Layout>
      {" "}
      // 헤더, 푸터 포함된 래퍼
      <Outlet />
    </Layout>
  );
}
```

특정 라우터에선 레이아웃 래퍼 안의 헤더와 푸터를 사용하지 않아야할 땐 어떤식으로 설계하는게 좋을까요?

```tsx
// in Layout
// 첫 번째 시도
const { pathname } = useLocation()

const isHeaderOn = ![ // 제외해야될 PATH들의 배열
    PATH.LOGIN as string,
    PATH.DETAIL_ROOM as string,
  ].includes(pathname);

return (
    <S.Container>
      {isHeaderOn && <Header />} // isHeaderOn 변수에 따라 조건적 렌더
      <S.Wrapper
        $isHeaderOn={isHeaderOn} //
        $isBottomNavOn={isBottomNavOn}
      >
        {children}
      </S.Wrapper>
      // ...
```

1차적으론 route의 PATH들과 useLocation으로 받아온 pathname이 같은지 판별해서 처리하고 있었는데 ‘/:id’ 같은 동적 라우팅이 되는 페이지는 정확히 걸러내지 못했습니다.

```jsx
// 두 번째 시도
const pathsToExclude = [PATH.LOGIN, PATH.DETAIL_ROOM, PATH.YANOLJA_ACCOUNT];
const isHeaderOn = !pathsToExclude.some((path) => pathname.includes(path));
let isBottomNavOn = !pathsToExclude.some((path) => pathname.includes(path));
```

2차적으로는 useLocation의 pathname기준으로 route의 path를 포함하고 있는지로 개선했는데,

동적 라우팅도 대응할 수 있지만 `/product`만 포함해야되는데 `/product/detail`이 있는 경우에 이것까지 포함합니다.

</details>

<hr>
<br/>

<details>
<summary>개발 컨벤션</summary>

## branch

- main
  - 배포 브랜치 (firebase web hosting with github action)
- feature

  - 기능 개발 및 기타 개인 작업 브랜치
  - feature/{issue-number}-{feature-name}
    - ex) feature/#123-mainpage

## Responsive Strategy

> display: flex; <br>
> min-width: 360px; <br>
> max-width: 768px; <br>

1. 컴포넌트의 width는 가변값(%) 사용을 권장합니다.
2. 컴포넌트의 height만 고정값(px)를 사용을 권장합니다.
3. 되도록 Layout(Wrapper)가 되는 컴포넌트에 min-width/max-width 너비를 설정합니다.(내용이 되는 컴포넌트엔 %만 설정할 수 있도록)

## 네이밍 컨벤션

- **폴더명**: camelCase
- **컴포넌트/스타일 명**: PascalCase

- **~~index.tsx~~**는 페이지 컴포넌트 상관없이 모두 사용하지 않기

  (페이지/컴포넌트 이름 통일성을 위함)

- **스타일 파일**: xxx.style.ts

- **함수 선언 (~~function~~ vs 화살표)**: 화살표 함수(리액트 snippet → rafce)
- **export default:** 컴포넌트**(**파일 하단) / 스타일(개별)

## 코드 리뷰 규칙

- 19시 이전 pr → 21시 전에 코드리뷰 진행
- 19시 이후 pr → 익일 12시 전에 코드리뷰 진행

## 머지 규칙

- 반드시 담당자가 Approved된 PR merge 진행

## PR & Issue 컨벤션

label로 잘 보여지기 때문에 commit type은 붙이지 않고 작성

```

PR: [#27] 게시물 작성 기능 추가

Issue: 게시물 작성 기능 추가
```

</details>
