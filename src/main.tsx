import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      font-family: 'Pretendard Variable', sans-serif;
  }
    
  // hide scroll
  * {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
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
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
