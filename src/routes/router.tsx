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
import TestLayout from "@components/layout/TestLayout";

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: (
      <LocalErrorBoundary>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </LocalErrorBoundary>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: (
          <TestLayout isHeaderOn={false} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.LOGIN,
        element: (
          <TestLayout isHeaderOn={false} isBottomNavOn={false}>
            <SignIn />
          </TestLayout>
        ),
      },
      {
        path: PATH.SIGNUP,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={false}>
            <SignUp />
          </TestLayout>
        ),
      },
      {
        path: PATH.PASSWORD_RESET,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={false}>
            <PasswordReset />
          </TestLayout>
        ),
      },
      {
        path: PATH.SEARCHLIST,
        element: (
          <TestLayout isHeaderOn={false} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <Search />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <TransferWriting />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <TransferWriting />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_PRICE + `/:id`,
        element: (
          <TestLayout isHeaderOn={false} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <TransferWritingPrice />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_SUCCESS,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <TransferWritingSuccess />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.MY_PAGE,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <MyPage />
          </TestLayout>
        ),
        children: [
          {
            index: true,
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
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <Setting />
          </TestLayout>
        ),
      },
      {
        path: PATH.MANAGE_PROFILE,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <ManageProfile />
          </TestLayout>
        ),
      },
      {
        path: PATH.MANAGE_ACCOUNT,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <ManageAccount />
          </TestLayout>
        ),
      },
      {
        path: PATH.ACCOUNT_EDIT,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <EditAccount />
          </TestLayout>
        ),
      },
      {
        path: PATH.DETAIL_ROOM(":productId"),
        element: (
          <TestLayout isHeaderOn={false} isBottomNavOn={false}>
            <Suspense fallback={<Loading />}>
              <RoomDetail />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.ALARM,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <Alarm />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.PURCAHSE_DEATAIL,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <PurchaseDetail />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.SALE_DETAIL + "/:saleId",
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <SaleDetail />
            </Suspense>
          </TestLayout>
        ),
      },
      {
        path: PATH.YANOLJA_ACCOUNT,
        element: (
          <TestLayout isHeaderOn={false} isBottomNavOn={false}>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </TestLayout>
        ),
        children: [
          {
            index: true,
            element: <IntroPage />,
          },
          {
            path: "verify/success",
            element: <SuccessPage />,
          },
        ],
      },
      {
        path: PATH.YANOLJA_ACCOUNT_VERIFICATION,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={false}>
            <VerificationPage />
          </TestLayout>
        ),
      },
      {
        path: PATH.SEARCH_FILTER,
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={false}>
            <SearchFilter />
          </TestLayout>
        ),
      },
      {
        path: PATH.PAYMENT(":productId"),
        element: (
          <TestLayout isHeaderOn={true} isBottomNavOn={false}>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </TestLayout>
        ),
        children: [
          {
            path: "",
            element: <Payment action="default" />,
          },
          {
            path: "success",
            element: <PaymentSuccess />,
          },
          {
            path: "ready",
            element: <Payment action="ready" />,
          },
          {
            path: "cancel",
            element: <Payment action="cancel" />,
          },
        ],
      },
    ],
  },
]);
