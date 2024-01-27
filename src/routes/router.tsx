import { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { PATH } from "@/constants/path";

import App from "@/App";
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
import ApiErrorBoundary from "@/components/errorBoundary/ErrorBoundary";
import Alarm from "@pages/alarmPage/AlarmPage";
import Payment from "@pages/paymentPage/Payment";
import TransferWritingSuccess from "@/pages/transferWritingSuccessPage/TransferWritingSuccess";
import PaymentSuccess from "@pages/paymentSuccessPage/PaymentSuccess";
import EditAccount from "@pages/myPage/manage/editAccount/EditAccount";
import Loading from "@/components/lottie/loading/Loading";
import SaleDetail from "@pages/saleDetailPage/SaleDetail";
import Layout from "@components/layout/Layout";
import IntroPage from "@pages/connectYanoljaPage/IntroPage/IntroPage.tsx";
import SuccessPage from "@pages/connectYanoljaPage/successPage/SuccessPage.tsx";
import VerificationPage from "@pages/connectYanoljaPage/verificationPage/VerificationPage";
import A2HS from "@/components/A2HS/A2HS";

const routes = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    errorElement: (
      <Layout isHeaderOn={true} isBottomNavOn={false}>
        <NotFound />
      </Layout>
    ),
    children: [
      {
        path: "",
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.LOGIN,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={false}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <SignIn />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.SIGNUP,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <SignUp />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.PASSWORD_RESET,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <PasswordReset />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.SEARCHLIST,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Search />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.SEARCH_FILTER,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <SearchFilter />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <TransferWriting />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <TransferWriting />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_PRICE + `/:id`,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <TransferWritingPrice />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.WRITE_TRANSFER_SUCCESS,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <TransferWritingSuccess />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.MY_PAGE,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <MyPage />
                <A2HS />
              </Suspense>
            </ApiErrorBoundary>
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
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Setting />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.MANAGE_PROFILE,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <ManageProfile />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.MANAGE_ACCOUNT,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <ManageAccount />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.ACCOUNT_EDIT,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <EditAccount />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.DETAIL_ROOM(":productId"),
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={false}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <RoomDetail />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.ALARM,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Alarm />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.PURCAHSE_DETAIL,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <PurchaseDetail />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.SALE_DETAIL + "/:saleId",
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <SaleDetail />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.YANOLJA_ACCOUNT,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={false}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <IntroPage />,
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.YANOLJA_ACCOUNT_VERIFICATION,
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <VerificationPage />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.YANOLJA_ACCOUNT_VERIFICATION_SUCCESS,
        element: (
          <Layout isHeaderOn={false} isBottomNavOn={true}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <SuccessPage />
              </Suspense>
            </ApiErrorBoundary>
          </Layout>
        ),
      },
      {
        path: PATH.PAYMENT(":productId"),
        element: (
          <Layout isHeaderOn={true} isBottomNavOn={false}>
            <ApiErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </ApiErrorBoundary>
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

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
