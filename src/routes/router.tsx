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
import Layout from "@components/layout/Layout";

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
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.LOGIN,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={false}>
            <SignIn />
          </Layout>
        ),
      },
      {
        path: PATH.SIGNUP,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <SignUp />
          </Layout>
        ),
      },
      {
        path: PATH.PASSWORD_RESET,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <PasswordReset />
          </Layout>
        ),
      },
      {
        path: PATH.SEARCHLIST,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <Search />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <TransferWriting />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <TransferWriting />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_PRICE + `/:id`,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <TransferWritingPrice />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_SUCCESS,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <TransferWritingSuccess />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.MY_PAGE,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <MyPage />
          </Layout>
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
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <Setting />
          </Layout>
        ),
      },
      {
        path: PATH.MANAGE_PROFILE,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ManageProfile />
          </Layout>
        ),
      },
      {
        path: PATH.MANAGE_ACCOUNT,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ManageAccount />
          </Layout>
        ),
      },
      {
        path: PATH.ACCOUNT_EDIT,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <EditAccount />
          </Layout>
        ),
      },
      {
        path: PATH.DETAIL_ROOM(":productId"),
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={false}>
            <Suspense fallback={<Loading />}>
              <RoomDetail />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.ALARM,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <Alarm />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.PURCAHSE_DEATAIL,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <PurchaseDetail />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.SALE_DETAIL + "/:saleId",
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <Suspense fallback={<Loading />}>
              <SaleDetail />
            </Suspense>
          </Layout>
        ),
      },
      {
        path: PATH.YANOLJA_ACCOUNT,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={false}>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </Layout>
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
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <VerificationPage />
          </Layout>
        ),
      },
      {
        path: PATH.SEARCH_FILTER,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <SearchFilter />
          </Layout>
        ),
      },
      {
        path: PATH.PAYMENT(":productId"),
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </Layout>
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
