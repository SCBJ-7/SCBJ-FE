import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/homePage";
import { Search } from "./pages/searchPage";
import { SignUp } from "./pages/signUpPage";
import { SignIn } from "./pages/signInPage";
import { My } from "./pages/myPage";
import { TransferWriting } from "./pages/transferWritingPage/";
import { TransferSale } from "./pages/transferSalePage";
import { TransferPurchase } from "./pages/transferPurchasePage";
import { Detail } from "./pages/detailPage";
import { NotFound } from "./pages/notFoundPage";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <NotFound />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
    errorElement: <NotFound />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
    errorElement: <NotFound />,
  },
  {
    path: "/myPage",
    element: <My />,
    errorElement: <NotFound />,
  },
  {
    path: "/hotels/new",
    element: <TransferWriting />,
    errorElement: <NotFound />,
  },
  {
    path: "/saleList",
    element: <TransferSale />,
    errorElement: <NotFound />,
  },
  {
    path: "/purchaseList",
    element: <TransferPurchase />,
    errorElement: <NotFound />,
  },
  {
    path: "/rooms",
    element: <Detail />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
