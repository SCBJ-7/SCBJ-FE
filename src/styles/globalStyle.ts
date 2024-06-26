import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *, :after, :before {box-sizing:border-box;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.2;overflow-wrap:break-word;word-break:break-word;tab-size:4;}
  html, body {height:100%;background-color: ${({ theme }) =>
    theme.color.greyScale6};
    -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
  scrollbar-width: none;  
  }
  img, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  
  * {
      box-sizing: border-box;
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  

  body {
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.greyScale6};
    letter-spacing: -.3px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }
`;
