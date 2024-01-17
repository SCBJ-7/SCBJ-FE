export const END_POINTS = {
  ROOM: (roomId: string) => `/v1/products/${roomId}`,
  RESERVATION: "/v1/reservations",
  USER_INFO: "/v1/members",
  PURCHASE_HISTORY: "/v1/members/purchased-history",
  PURCHASE_DETAIL: (purchaseId: string) => `/v1/purchase-detail/${purchaseId}`,
  EMAIL: "/v1/members/email",
  YANOLJA: "/v1/members/yanolja",
  NEW_TOKEN: "/v1/token/refresh",
} as const;

export const ERROR_CODE = {
  INVALID_TOKEN: 400,
  EXPIRED_TOKEN: 401,
} as const;

export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
