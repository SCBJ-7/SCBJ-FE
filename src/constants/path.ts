export const PATH = {
  ROOT: "/",
  SEARCHLIST: "/search",
  CREATE_TRIP: "/trip-new",
  SALE_LIST: "/sale-list",
  PURCHASE_LIST: "/purchase-list",
  DETAIL_ROOMS: "/rooms",
  WRITE_TRANSFER: "/transfer/new",
  WRITE_TRANSFER_PRICE: "/transfer/new/price/",
  SIGNUP: "/signup",
  LOGIN: "/signin",
  MY_PAGE: "/my-page",
  REDIRECT: "/auth/:provider",
  RELOAD: 0,
} as const;
// 참고

// EDIT_TRIP: (tripId: string) => `/trip/${tripId}/edit`,
// TRIP: (tripId: string) => `/trip/${tripId}`,
// EXPENSE: (tripId: string) => `/trip/${tripId}/expense`,
// SHARE_TRIP: (tripId: string) => `/trip/share/${tripId}`,
// SHARE_EXPENSE: (tripId: string) => `/trip/share/expense/${tripId}`,
// COMMUNITY_TRIP: (tripId: string) => `/community/trip/${tripId}`,
// COMMUNITY_EXPENSE: (tripId: string) => `/community/trip/expense/${tripId}`,
