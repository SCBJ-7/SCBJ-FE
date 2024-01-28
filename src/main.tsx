import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import AppRouter from "./routes/router";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      throwOnError: true,
    },
    mutations: {
      retry: 1,
      throwOnError: true,
    },
  },
});

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
