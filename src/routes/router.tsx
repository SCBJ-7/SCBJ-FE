import IntroPage from "@pages/connectYanoljaPage/IntroPage/IntroPage.tsx";
import SuccessPage from "@pages/connectYanoljaPage/successPage/SuccessPage.tsx";
import VerificationPage from "@pages/connectYanoljaPage/verificationPage/VerificationPage";
import { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { PATH } from "@/constants/path";

import Home from "@/pages/homePage/Home";
import NotFound from "@/pages/notFoundPage";
import Search from "@/pages/searchPage/Search";
import SignUp from "@/pages/signUpPage/SignUp";
import MyPage from "@/pages/myPage/MyPage";
import SignIn from "@/pages/signInPage/SignIn";
import RoomDetail from "@pages/roomDetailPage/RoomDetail";
import TransferPurchase from "@/pages/transferPurchasePage/TransferPurchase";
import TransferSale from "@/pages/transferSalePage";
import TransferWriting from "@/pages/transferWritingPage/TransferWriting";

import ManageAccount from "@/pages/myPage/manage/manageAccount/ManageAccount";
import ManageProfile from "@/pages/myPage/manage/manageProfile/ManageProfile";
import Setting from "@/pages/myPage/setting/Setting";
import PasswordReset from "@/pages/passwordResetPage/PasswordReset";
import PurchaseDetail from "@/pages/purchaseDetailPage/PurchaseDetail";
import SearchFilter from "@/pages/searchFilterPage/SearchFilter";
import TransferWritingPrice from "@/pages/transferWritingPricePage/TransferWritingPrice";
import LocalErrorBoundary from "@components/errorBoundary/LocalErrorBoundary";
import Payment from "@pages/paymentPage/Payment";
import TransferWritingSuccess from "@pages/transferWritingSuccessPage/TransferWritingSuccess";
import EditAccount from "@pages/myPage/manage/editAccount/EditAccount";

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
        path: PATH.SETTING,
        element: <Setting />,
      },
      {
        path: PATH.MANAGE_PROFILE,
        element: <ManageProfile />,
      },
      {
        path: PATH.MANAGE_ACCOUNT,
        element: <ManageAccount />,
      },
      {
        path: PATH.ACCOUNT_EDIT,
        element: <EditAccount />,
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: (
          <LocalErrorBoundary>
            <Suspense fallback={<div>{/* loading */}</div>}>
              <TransferWriting />
            </Suspense>
          </LocalErrorBoundary>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_PRICE + `/:id`,
        element: (
          <Suspense fallback={<div>{/* loading */}</div>}>
            <TransferWritingPrice />
          </Suspense>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_SUCCESS,
        element: (
          <Suspense fallback={<div>{/* loading */}</div>}>
            <TransferWritingSuccess />
          </Suspense>
        ),
      },
      {
        path: PATH.DETAIL_ROOM + "/:roomId",
        element: (
          <LocalErrorBoundary>
            <Suspense fallback={<div>LOADING</div>}>
              <RoomDetail />
            </Suspense>
          </LocalErrorBoundary>
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
      {
        path: PATH.YANOLJA_ACCOUNT,
        element: (
          <LocalErrorBoundary>
            <IntroPage />
          </LocalErrorBoundary>
        ),
      },
      {
        path: PATH.YANOLJA_ACCOUNT_VERIFY,
        element: (
          <LocalErrorBoundary>
            <VerificationPage />
          </LocalErrorBoundary>
        ),
      },
      {
        path: PATH.YANOLJA_ACCOUNT_VERIFY + "/success",
        element: (
          <LocalErrorBoundary>
            <SuccessPage />
          </LocalErrorBoundary>
        ),
      },
      {
        path: PATH.SEARCH_FILTER,
        element: <SearchFilter />,
      },
      {
        path: PATH.PAYMENT,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Payment />,
          },
        ],
      },
    ],
  },
]);
