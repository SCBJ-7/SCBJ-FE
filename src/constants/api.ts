export const BASE_URL = "https://3.34.147.187.nip.io";

export const END_POINTS = {
  LOGIN: "/v1/members/signin",
  LOGOUT: "/v1/members/logout",
  SIGNUP: "/v1/members/signup",
  ALARM: "/v1/alarms",
  HASALARM: "/v1/alarms/status",
  ROOM: (roomId: string) => `/v1/products/${roomId}`,
  RESERVATION: "/v1/reservations",
  MAIN: "/v1/products/main",
  USER_INFO: "/v1/members",
  PURCHASE_HISTORY: "/v1/members/purchased-history",
  PURCHASE_DETAIL: (purchaseId: string) => `/v1/purchase-detail/${purchaseId}`,
  EMAIL: "/v1/members/email",
  YANOLJA: "/v1/members/yanolja",
  ACCOUNT: "/v1/members/account",
  PAYMENT: (productId: string) => `/v1/products/${productId}/payments`,
  PAYMENT_REQUEST: (productId: string, paymentType: string) =>
    `/v1/products/${productId}/payments?paymentType=${paymentType}`,
  NEW_TOKEN: "/v1/token/refresh",
  SEARCH: "/v1/products/search",
} as const;

export const ERROR_CODE = {
  INVALID_TOKEN: 402,
  EXPIRED_TOKEN: 401,
} as const;

export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
