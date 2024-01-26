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
import LocalErrorBoundary from "@/components/errorBoundary/ErrorBoundary";
import Alarm from "@pages/alarmPage/AlarmPage";
import Payment from "@pages/paymentPage/Payment";
import TransferWritingSuccess from "@/pages/transferWritingSuccessPage/TransferWritingSuccess";
import PaymentSuccess from "@pages/paymentSuccessPage/PaymentSuccess";
import EditAccount from "@pages/myPage/manage/editAccount/EditAccount";
import Loading from "@/components/lottie/loading/Loading";
import SaleDetail from "@pages/saleDetailPage/SaleDetail";
import Layout from "@components/layout/Layout";

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: (
      <LocalErrorBoundary>
        <App />
      </LocalErrorBoundary>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.LOGIN,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={false}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <SignIn />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.SIGNUP,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <SignUp />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.PASSWORD_RESET,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <PasswordReset />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.SEARCHLIST,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Search />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <TransferWriting />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <TransferWriting />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_PRICE + `/:id`,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <TransferWritingPrice />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_SUCCESS,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <TransferWritingSuccess />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.MY_PAGE,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <MyPage />
              </Suspense>
            </LocalErrorBoundary>
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
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Setting />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.MANAGE_PROFILE,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <ManageProfile />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.MANAGE_ACCOUNT,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <ManageAccount />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.ACCOUNT_EDIT,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <EditAccount />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.DETAIL_ROOM(":productId"),
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={false}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <RoomDetail />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.ALARM,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Alarm />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.PURCAHSE_DETAIL,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <PurchaseDetail />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.SALE_DETAIL + "/:saleId",
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <SaleDetail />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.YANOLJA_ACCOUNT,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={false}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </LocalErrorBoundary>
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
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <VerificationPage />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.SEARCH_FILTER,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <SearchFilter />
              </Suspense>
            </LocalErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.PAYMENT(":productId"),
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <LocalErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </LocalErrorBoundary>
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
