# Percent Hotel

[배포 링크](https://percenthotel.web.app/)

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

- 규칙
  1. 컴포넌트의 width는 가변값(%) 사용을 권장합니다.
  2. 컴포넌트의 height만 고정값(px)를 사용합니다.
  3. 되도록 Layout(Wrapper)가 되는 레이아웃에 min-width/max-width 너비를 설정합니다.(내용이 되는 컴포넌트엔 %만 설정할 수 있도록)
