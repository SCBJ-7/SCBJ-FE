import Layout from "@components/layout/Layout";
import { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import * as Lazy from "./lazy.ts";

import App from "@/App.tsx";
import LoadingFallback from "@/components/deferredComponent/LoadingFallback.tsx";
import ApiErrorBoundary from "@/components/errorBoundary/ErrorBoundary.tsx";
import { HelmetTag } from "@/components/Helmet/Helmet.tsx";
import Redirect from "@/components/redirect/Redirect.tsx";
import { PATH } from "@/constants/path.ts";
import NotFound from "@/pages/notFoundPage";

const AppRouter = () => {
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
              <HelmetTag text="메인" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.Home />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: "",
          element: (
            <Layout isHeaderOn={false} isBottomNavOn={true}>
              <HelmetTag text="메인" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.Home />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.LOGIN,
          element: (
            <Layout isHeaderOn={false} isBottomNavOn={false}>
              <HelmetTag text="로그인" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.SignIn />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.SIGNUP,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={false}>
              <HelmetTag text="회원가입" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.SignUp />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.PASSWORD_RESET,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={false}>
              <HelmetTag text="비밀번호 재설정" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.PasswordReset />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.SEARCHLIST,
          element: (
            <Layout isHeaderOn={false} isBottomNavOn={true}>
              <HelmetTag text="검색" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.Search />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.SEARCH_FILTER,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={false}>
              <HelmetTag text="검색" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.SearchFilter />
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
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.TransferWriting />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.WRITE_TRANSFER,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={true}>
              <HelmetTag text="판매하기" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.TransferWriting />
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
                <HelmetTag text="판매글 작성" />
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.TransferWritingPrice />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.WRITE_TRANSFER_SUCCESS,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={true}>
              <HelmetTag text="판매 성공" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.TransferWritingSuccess />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.MY_PAGE,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={true}>
              <HelmetTag text="마이 페이지" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.MyPage />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
          children: [
            {
              index: true,
              element: (
                <>
                  <HelmetTag text="마이 페이지" />
                  <Lazy.TransferPurchase />
                </>
              ),
            },

            {
              path: PATH.SALE_LIST,
              element: (
                <>
                  <HelmetTag text="판매내역" />
                  <Lazy.TransferSale />
                </>
              ),
            },
          ],
        },
        {
          path: PATH.SETTING,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={true}>
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.Setting />
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
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.ManageProfile />
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
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.ManageAccount />
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
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.EditAccount />
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
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.RoomDetail />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.ALARM,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={true}>
              <HelmetTag text="알림" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.Alarm />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.PURCAHSE_DETAIL,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={true}>
              <HelmetTag text="구매내역 상세" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.PurchaseDetail />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.SALE_DETAIL + "/:saleId",
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={true}>
              <HelmetTag text="판매내역 상세" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.SaleDetail />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.YANOLJA_ACCOUNT,
          element: (
            <Layout isHeaderOn={false} isBottomNavOn={false}>
              <HelmetTag text="야놀자인증" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.IntroPage />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.YANOLJA_ACCOUNT_VERIFICATION,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={false}>
              <HelmetTag text="야놀자 인증" />
              <ApiErrorBoundary>
                <Redirect>
                  <Suspense fallback={<LoadingFallback />}>
                    <Lazy.VerificationPage />
                  </Suspense>
                </Redirect>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.YANOLJA_ACCOUNT_VERIFICATION_SUCCESS,
          element: (
            <Layout isHeaderOn={false} isBottomNavOn={true}>
              <HelmetTag text="야놀자 인증 성공" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.SuccessPage />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
        {
          path: PATH.PAYMENT(":productId"),
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={false}>
              <HelmetTag text="결제" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Outlet />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
          children: [
            {
              path: "",
              element: <Lazy.Payment action="default" />,
            },
            {
              path: "success",
              element: (
                <>
                  <HelmetTag text="구매 내역 상세" />
                  <Lazy.PaymentSuccess />
                </>
              ),
            },
            {
              path: "ready",
              element: <Lazy.Payment action="ready" />,
            },
            {
              path: "cancel",
              element: <Lazy.Payment action="cancel" />,
            },
          ],
        },
        {
          path: PATH.MAIN_DETAIL,
          element: (
            <Layout isHeaderOn={true} isBottomNavOn={true}>
              <HelmetTag text="메인상세" />
              <ApiErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Lazy.MainDetail />
                </Suspense>
              </ApiErrorBoundary>
            </Layout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRouter;
