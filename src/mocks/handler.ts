import { http, HttpResponse } from "msw";
import dummyRoom from "./data/dummyRoom.json";
import dummyRoomDetail from "./data/dummyRoomDetail.json";
import reservationList from "./data/reservationList.json";

export const handlers = [
  http.get("/api/roomId", () => {
    return HttpResponse.json(dummyRoom);
  }),
  http.get("/v1/reservations", () => {
    return HttpResponse.json(reservationList);
  }),

  /*
    warning 없애기용.
    cdn에 폰트 요청하는걸 가로채지 못했다고 warning 띄우길래 적용했습니다.
  */
  http.get("*", (req) => {
    console.log(req);
  }),
  http.get("/v1/products/1", () => {
    return HttpResponse.json(dummyRoomDetail);
  }),
];
