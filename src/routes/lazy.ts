import { lazy } from "react";

export const Home = lazy(() => import("@/pages/homePage/Home"));
export const Search = lazy(() => import("@/pages/searchPage/Search"));
export const SignUp = lazy(() => import("@/pages/signUpPage/SignUp"));
export const MyPage = lazy(() => import("@/pages/myPage/MyPage"));
export const SignIn = lazy(() => import("@/pages/signInPage/SignIn"));
export const RoomDetail = lazy(
  () => import("@pages/roomDetailPage/RoomDetail"),
);
export const TransferPurchase = lazy(
  () => import("@/pages/transferPurchasePage/TransferPurchase"),
);
export const TransferSale = lazy(
  () => import("@pages/transferSalePage/TransferSale"),
);
export const TransferWriting = lazy(
  () => import("@/pages/transferWritingPage/TransferWriting"),
);
export const ManageAccount = lazy(
  () => import("@/pages/myPage/manage/manageAccount/ManageAccount"),
);
export const ManageProfile = lazy(
  () => import("@/pages/myPage/manage/manageProfile/ManageProfile"),
);
export const Setting = lazy(() => import("@/pages/myPage/setting/Setting"));
export const PasswordReset = lazy(
  () => import("@/pages/passwordResetPage/PasswordReset"),
);
export const PurchaseDetail = lazy(
  () => import("@/pages/purchaseDetailPage/PurchaseDetail"),
);
export const SearchFilter = lazy(
  () => import("@/pages/searchFilterPage/SearchFilter"),
);
export const TransferWritingPrice = lazy(
  () => import("@/pages/transferWritingPricePage/TransferWritingPrice"),
);

export const Alarm = lazy(() => import("@pages/alarmPage/AlarmPage"));
export const Payment = lazy(() => import("@pages/paymentPage/Payment"));
export const TransferWritingSuccess = lazy(
  () => import("@/pages/transferWritingSuccessPage/TransferWritingSuccess"),
);
export const PaymentSuccess = lazy(
  () => import("@pages/paymentSuccessPage/PaymentSuccess"),
);
export const EditAccount = lazy(
  () => import("@pages/myPage/manage/editAccount/EditAccount"),
);

export const SaleDetail = lazy(
  () => import("@pages/saleDetailPage/SaleDetail"),
);

export const IntroPage = lazy(
  () => import("@pages/connectYanoljaPage/IntroPage/IntroPage.tsx"),
);
export const SuccessPage = lazy(
  () => import("@pages/connectYanoljaPage/successPage/SuccessPage.tsx"),
);
export const VerificationPage = lazy(
  () => import("@pages/connectYanoljaPage/verificationPage/VerificationPage"),
);

export const RoomMap = lazy(
  () => import("@pages/roomDetailPage/RoomDetailMap"),
);
