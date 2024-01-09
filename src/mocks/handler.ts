import { http, HttpResponse } from "msw";
import dummyPurchaseList from "./data/dummyPuchaseList.json";
import reservationList from "./data/reservationList.json";
import dummyPurchaseDetail from "./data/dummyPurchaseDetail.json";

export const handlers = [
  http.get("/v1/members/purchased-history", () => {
    return HttpResponse.json(dummyPurchaseList);
  }),
  http.get("/v1/reservations", () => {
    return HttpResponse.json(reservationList);
  }),
  http.get("/v1/purchase-detail", () => {
    return HttpResponse.json(dummyPurchaseDetail);
  }),
  /* 
    warning 없애기용.
    cdn에 폰트 요청하는걸 가로채지 못했다고 warning 띄우길래 적용했습니다.
  */
  http.get("*", (req) => {
    console.log(req);
  }),
];
