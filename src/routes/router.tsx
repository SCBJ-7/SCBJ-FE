import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PATH } from "../constants/path";

import My from "@/pages/myPage/MyPage";
import PasswordReset from "@/pages/passwordResetPage/PasswordReset";
import PurchaseDetail from "@/pages/purchaseDetailPage/PurchaseDetail";
import TransferWritingPrice from "@/pages/transerWritingPricePage/TransferWritingPrice";
import TransferPurchase from "@/pages/transferPurchasePage/TransferPurchase";
import RoomDetail from "@pages/roomDetailPage/RoomDetail";
import Home from "../pages/homePage";
import NotFound from "../pages/notFoundPage";
import Search from "../pages/searchPage";
import SignIn from "../pages/signInPage/SignIn";
import SignUp from "../pages/signUpPage/SignUp";
import TransferSale from "../pages/transferSalePage";
import TransferWriting from "../pages/transferWritingPage/TransferWriting";

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: PATH.SEARCHLIST,
        element: <Search />,
      },
      {
        path: PATH.SIGNUP,
        element: <SignUp />,
      },
      {
        path: PATH.LOGIN,
        element: <SignIn />,
      },
      {
        path: PATH.MY_PAGE,
        element: <My />,
        children: [
          {
            path: PATH.PURCHASE_LIST,
            element: <TransferPurchase />,
          },

          {
            path: PATH.SALE_LIST,
            element: <TransferSale />,
          },
        ],
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: <TransferWriting />,
      },
      {
        path: PATH.WRITE_TRANSFER_PRICE + ":id",
        element: <TransferWritingPrice />,
      },

      {
        path: PATH.DETAIL_ROOM,
        element: (
          <Suspense fallback={<div>LOADING</div>}>
            <RoomDetail />
          </Suspense>
        ),
      },
      {
        path: PATH.PASSWORD_RESET,
        element: <PasswordReset />,
      },
      {
        path: PATH.PURCAHSE_DEATAIL,
        element: <PurchaseDetail />,
      },
    ],
  },
]);
