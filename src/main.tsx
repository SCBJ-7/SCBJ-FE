import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { router } from "./routes/router";
import "./index.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const queryClient = new QueryClient();

export const GlobalStyle = createGlobalStyle`
  /* css reset */
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *, :after, :before {box-sizing:border-box;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4;}
  html, body, #root {height:100%;}
  img, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  
  * {
      box-sizing: border-box;
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
`;

const theme = {
  color: {
    primaryLight: "#FFECDB",
    primary: "#FF7C17",
    primaryDark: "#CB5A04",

    secondaryLight: "#CDEDFF",
    secondary: "#519EC9",
    secondaryDark: "#0072B1",

    black: "#151515",

    greyScale1: "#404040",
    greyScale2: "#686868",
    greyScale3: "#999999",
    greyScale4: "#B8B8B8",
    greyScale5: "#CDCDCD",
    greyScale6: "#E9E9E9",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
