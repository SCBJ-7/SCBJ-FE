import { http, HttpResponse } from "msw";

import dummyPurchaseList from "./data/dummyPuchaseList.json";
import dummyPurchaseDetail from "./data/dummyPurchaseDetail.json";
import dummyRoom from "./data/dummyRoomDetail.json";
// import userInfo from "./data/userInfo.json";
import { roomHandlers } from "./handlers/room";
// import emailHandlers from "./handlers/email";

export const handlers = [
  ...roomHandlers,
  // ...Object.values(emailHandlers),
  http.get("/api/roomId", () => {
    return HttpResponse.json(dummyRoom);
  }),
  // http.get("/v1/members", () => {
  //   return HttpResponse.json(userInfo);
  // }),
  http.get("/v1/members/purchased-history", () => {
    return HttpResponse.json(dummyPurchaseList);
  }),
  http.get("/v1/purchase-detail/102", () => {
    return HttpResponse.json(dummyPurchaseDetail);
  }),
  http.get("/v1/products/10", () => {
    return HttpResponse.json(dummyPurchaseDetail);
  }),

  /*
    warning 없애기용.
    cdn에 폰트 요청하는걸 가로채지 못했다고 warning 띄우길래 적용했습니다.
  */
  http.get("*", () => {}),
];
