import App from "@/App";
import { PATH } from "@constants/path";

import Home from "@pages/homePage";
import My from "@pages/myPage";
import NotFound from "@pages/notFoundPage";
import RoomDetail from "@pages/roomDetailPage/RoomDetail";
import Search from "@pages/searchPage";
import SignIn from "@pages/signInPage";
import SignUp from "@pages/signUpPage/SignUp";
import TransferWritingPrice from "@pages/transerWritingPricePage/TransferWritingPrice";
import TransferPurchase from "@pages/transferPurchasePage";
import TransferSale from "@pages/transferSalePage";
import TransferWriting from "@pages/transferWritingPage/TransferWriting";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

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
        path: PATH.SALE_LIST,
        element: <TransferSale />,
      },
      {
        path: PATH.PURCHASE_LIST,
        element: <TransferPurchase />,
      },
      {
        path: PATH.DETIAIL_ROOM,
        element: (
          <Suspense fallback={<div>LOADING</div>}>
            <RoomDetail />
          </Suspense>
        ),
      },
    ],
  },
]);
