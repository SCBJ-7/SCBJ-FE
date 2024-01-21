export const PATH = {
  ROOT: "/",
  SEARCHLIST: "/search",
  SEARCH_FILTER: "/search/filter",
  CREATE_TRIP: "/trip-new",
  SALE_LIST: "/my-page/sale-list",
  PURCHASE_LIST: "/my-page/purchase-list",
  DETAIL_ROOM: "/room",
  WRITE_TRANSFER: "/transfer/new",
  WRITE_TRANSFER_PRICE: "/transfer/new/price",
  WRITE_TRANSFER_SUCCESS: "/transfer/new/success",
  SIGNUP: "/signup",
  LOGIN: "/signin",
  MY_PAGE: "/my-page",
  SETTING: "/my-page/setting",
  MANAGE_PROFILE: "/my-page/setting/manage-profile",
  MANAGE_ACCOUNT: "/my-page/setting/manage-account",
  ACCOUNT_EDIT: "/my-page/setting/manage-account/edit",
  REDIRECT: "/auth/:provider",
  PASSWORD_RESET: "/password-reset",
  PURCAHSE_DEATAIL: "/my-page/purchase-detail",
  YANOLJA_ACCOUNT: "/account/yanolja",
  YANOLJA_ACCOUNT_VERIFY: "/account/yanolja/verify",
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
