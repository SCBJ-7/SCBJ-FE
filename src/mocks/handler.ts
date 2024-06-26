import { http, HttpResponse } from "msw";

import dummyPurchaseList from "./data/dummyPuchaseList.json";
import dummyPurchaseDetail from "./data/dummyPurchaseDetail.json";
import dummyRoom from "./data/dummyRoomDetail.json";
import dummySaleDetail from "./data/dummySaleDetail.json";
import dummySaleList from "./data/dummySaleList.json";
import dummySearchList from "./data/dummySearchList.json";
import emailHandlers from "./handlers/email";
import { paymentHandler } from "./handlers/payment";
import roomHandlers from "./handlers/room";
import yanoljaAccountHandlers from "./handlers/yanoljaAccount";

export const handlers = [
  // ...roomHandlers,
  ...paymentHandler,
  ...Object.values(emailHandlers),
  ...Object.values(yanoljaAccountHandlers),
  http.get("/api/roomId", () => {
    return HttpResponse.json(dummyRoom);
  }),
  http.get("/v1/members/purchased-history", () => {
    return HttpResponse.json(dummyPurchaseList);
  }),
  http.get("/v1/purchase-detail/102", () => {
    return HttpResponse.json(dummyPurchaseDetail);
  }),
  http.get("/v1/products/10", () => {
    return HttpResponse.json(dummyPurchaseDetail);
  }),
  http.get("/v1/members/purchased-history", () => {
    return HttpResponse.json(dummyPurchaseList);
  }),
  http.get("/v1/purchase-detail/102", () => {
    return HttpResponse.json(dummyPurchaseDetail);
  }),
  http.get("/v1/products", () => {
    return HttpResponse.json(dummySearchList);
  }),
  http.get("/v1/members/sale-history", () => {
    return HttpResponse.json(dummySaleList);
  }),
  http.get("/v1/sale-history/49", () => {
    return HttpResponse.json(dummySaleDetail);
  }),

  /*
    warning 없애기용.
    cdn에 폰트 요청하는걸 가로채지 못했다고 warning 띄우길래 적용했습니다.
  */
  http.get("*", () => {
    return;
  }),
];
