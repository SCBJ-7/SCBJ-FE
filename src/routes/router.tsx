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
import TransferSale from "@pages/transferSalePage/TransferSale";
import TransferWriting from "@/pages/transferWritingPage/TransferWriting";
import ManageAccount from "@/pages/myPage/manage/manageAccount/ManageAccount";
import ManageProfile from "@/pages/myPage/manage/manageProfile/ManageProfile";
import Setting from "@/pages/myPage/setting/Setting";
import PasswordReset from "@/pages/passwordResetPage/PasswordReset";
import PurchaseDetail from "@/pages/purchaseDetailPage/PurchaseDetail";
import SearchFilter from "@/pages/searchFilterPage/SearchFilter";
import TransferWritingPrice from "@/pages/transferWritingPricePage/TransferWritingPrice";
import LocalErrorBoundary from "@components/errorBoundary/LocalErrorBoundary";
import Alarm from "@pages/alarmPage/AlarmPage";
import Payment from "@pages/paymentPage/Payment";
import TransferWritingSuccess from "@/pages/transferWritingSuccessPage/TransferWritingSuccess";
import PaymentSuccess from "@pages/paymentSuccessPage/PaymentSuccess";
import EditAccount from "@pages/myPage/manage/editAccount/EditAccount";
import Loading from "@components/loading/Loading";
import SaleDetail from "@pages/saleDetailPage/SaleDetail";

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
        path: PATH.DETAIL_ROOM(":productId"),
        element: (
          <LocalErrorBoundary>
            <Suspense fallback={<Loading />}>
              <RoomDetail />
            </Suspense>
          </LocalErrorBoundary>
        ),
      },
      {
        path: PATH.ALARM,
        element: (
          <LocalErrorBoundary>
            <Suspense>
              <Alarm />
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
        element: (
          <LocalErrorBoundary>
            <Suspense fallback={<div>LOADING</div>}>
              <PurchaseDetail />
            </Suspense>
          </LocalErrorBoundary>
        ),
      },
      {
        path: PATH.SALE_DETAIL + "/:saleId",
        element: (
          <LocalErrorBoundary>
            <Suspense fallback={<Loading />}>
              <SaleDetail />
            </Suspense>
          </LocalErrorBoundary>
        ),
      },
      {
        path: PATH.YANOLJA_ACCOUNT,
        element: (
          <LocalErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </LocalErrorBoundary>
        ),
        children: [
          {
            index: true,
            element: <IntroPage />,
          },
          {
            path: "verify",
            element: <VerificationPage />,
          },
          {
            path: "verify/success",
            element: <SuccessPage />,
          },
        ],
      },
      {
        path: PATH.SEARCH_FILTER,
        element: <SearchFilter />,
      },
      {
        path: PATH.PAYMENT(":productId"),
        element: (
          <LocalErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Payment />
            </Suspense>
          </LocalErrorBoundary>
        ),
        children: [
          {
            path: "",
            element: <Payment />,
          },
          {
            path: "success",
            element: <PaymentSuccess />,
          },
          {
            path: "ready",
            element: <Payment />,
          },
        ],
      },
    ],
  },
]);
