import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import AppRouter from "./routes/router";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { hydrate } from "react-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
    rootElement,
  );
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
  );
}
