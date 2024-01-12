import { http, HttpResponse } from "msw";
import dummyRoom from "./data/dummyRoomDetail.json";
import dummyRoomDetail from "./data/dummyRoomDetail.json";
import reservationList from "./data/reservationList.json";
import dummyPurchaseList from "./data/dummyPuchaseList.json";
import dummyPurchaseDetail from "./data/dummyPurchaseDetail.json";
import userInfo from "./data/userInfo.json";

export const handlers = [
  http.get("/api/roomId", () => {
    return HttpResponse.json(dummyRoom);
  }),
  http.get("/v1/reservations", () => {
    return HttpResponse.json(reservationList);
  }),
  http.get("/v1/products/1", () => {
    return HttpResponse.json(dummyRoomDetail);
  }),
  http.get("/v1/members", () => {
    return HttpResponse.json(userInfo);
  }),
  http.get("/v1/members/purchased-history", () => {
    return HttpResponse.json(dummyPurchaseList);
  }),
  http.get("/v1/purchase-detail/102", () => {
    return HttpResponse.json(dummyPurchaseDetail);
  }),

  /*
    warning 없애기용.
    cdn에 폰트 요청하는걸 가로채지 못했다고 warning 띄우길래 적용했습니다.
  */
  http.get("*", () => {}),
];
