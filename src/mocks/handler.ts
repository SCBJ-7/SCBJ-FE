import { http, HttpResponse } from "msw";
import dummyRoom from "./data/dummyRoom.json";
import dummyRoomDetail from "./data/dummyRoomDetail.json";

export const handlers = [
  http.get("/api/roomId", () => {
    return HttpResponse.json(dummyRoom);
  }),
  http.get("/v1/products/1", () => {
    return HttpResponse.json(dummyRoomDetail);
  }),
];
