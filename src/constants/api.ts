export const END_PONTS = {
  ROOM: (roomId: string) => `/v1/products/${roomId}`,
  RESERVATION: "/v1/reservations",
  USER_INFO: "/v1/members",
  PURCHASE_HISTORY: "/v1/members/purchased-history",
  PURCHASE_DETAIL: (purchaseId: string) => `/v1/purchase-detail/${purchaseId}`,
  EMAIL: "/v1/members/email",
  YANOLJA: "/v1/members/yanolja",
} as const;
