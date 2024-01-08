import RoomDetail from "@pages/roomDetailPage/RoomDetail";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PATH } from "../constants/path";

import Home from "../pages/homePage";
import My from "../pages/myPage";
import NotFound from "../pages/notFoundPage";
import Search from "../pages/searchPage";
import SignIn from "../pages/signInPage";
import SignUp from "../pages/signUpPage";
import TransferPurchase from "../pages/transferPurchasePage";
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
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: <TransferWriting />,
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
        path: PATH.DETIAIL_ROOMS,
        element: (
          <Suspense fallback={<div>LOADING</div>}>
            <RoomDetail />
          </Suspense>
        ),
      },
    ],
  },
]);
