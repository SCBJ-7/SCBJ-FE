import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";

import AppRouter from "./routes/router";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";

// import { worker } from "@/mocks/broswer.ts";

// if (process.env.NODE_ENV === "development") {
//   worker.start();
// }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: true,
    },
    mutations: {
      retry: false,
      throwOnError: true,
    },
  },
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker 등록 성공:", registration);
    })
    .catch((error) => {
      console.log("Service Worker 등록 실패:", error);
    });
}

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
  );
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
  );
}
