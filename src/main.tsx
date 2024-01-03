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

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/myPage",
    element: <My />,
  },
  {
    path: "/myPage",
    element: <My />,
  },
  {
    path: "/hotels/new",
    element: <TransferWriting />,
  },
  {
    path: "/saleList",
    element: <TransferSale />,
  },
  {
    path: "/purchaseList",
    element: <TransferPurchase />,
  },
  {
    path: "/rooms",
    element: <Detail />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
