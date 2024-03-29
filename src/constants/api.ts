export const BASE_URL = "https://3.35.83.30.nip.io";

export const END_POINTS = {
  LOGIN: "/v1/members/signin",
  LOGOUT: "/v1/members/logout",
  SIGNUP: "/v1/members/signup",
  ALARM: "/v1/alarms",
  HASALARM: "/v1/alarms/status",
  ROOM: (productId: string) => `/v1/products/${productId}`,
  RESERVATION: "/v1/reservations",
  MAIN: "/v1/products/main",
  USER_INFO: "/v1/members",
  PURCHASE_HISTORY: "/v1/members/purchased-history",
  SALE_HISTORY: "/v1/members/sale-history",
  PURCHASE_DETAIL: (purchaseId: string) =>
    `/v1/members/purchased-history/${purchaseId}`,
  SALE_DETAIL: (saleId: number, isPaymentId: boolean) =>
    `/v1/members/sale-history/${saleId}/${isPaymentId}`,
  EMAIL: "/v1/members/email",
  YANOLJA: "/v1/members/yanolja",
  ACCOUNT: "/v1/members/account",
  PAYMENT: (productId: string) => `/v1/products/${productId}/payments`,
  PAYMENT_REQUEST: (productId: string, paymentType: string) =>
    `/v1/products/${productId}/payments?paymentType=${paymentType}`,
  PAYMENT_SUCCESS: (paymentType: string, pgToken: string) =>
    `/v1/products/pay-success?paymentType=${paymentType}&pg_token=${pgToken}`,
  PAYMENT_CANCEL: (paymentType: string) =>
    `/v1/products/pay-cancel?paymentType=${paymentType}`,
  STOCK: (productId: string) => `/v1/products/${productId}/stock`,
  NEW_TOKEN: "/v1/token/refresh",
  SEARCH: "/v1/products/search",
  CHANGE_NAME: "/v1/members/name",
  CHANGE_NUMBER: "/v1/members/phone",
} as const;

export const STATUS_CODE = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_CODE = {
  NULL_STOCK: 409,
  INVALID_TOKEN: 402,
  UNAUTHORIZED_WRITE_TRANSFER: 1002,
  UNAUTHORIZED_YANOLJA: 5003,
};

export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const FCM_TOKEN = "fcmToken";
