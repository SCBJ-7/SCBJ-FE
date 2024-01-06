import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/homePage";
import NotFound from "../pages/notFoundPage";
import Search from "../pages/searchPage";
import SignUp from "../pages/signUpPage";
import SignIn from "../pages/signInPage";
import MyPage from "../pages/myPage/MyPage";
import TransferWriting from "../pages/transferWritingPage";
import TransferSale from "../pages/transferSalePage";
import Detail from "../pages/detailPage";
import TransferPurchase from "../pages/transferPurchasePage";
import { PATH } from "../constants/path";
import App from "../App";
import Setting from "@/pages/myPage/setting/Setting";

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
        element: <MyPage />,
      },
      {
        path: PATH.SETTING,
        element: <Setting />,
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
        element: <Detail />,
      },
    ],
  },
]);
