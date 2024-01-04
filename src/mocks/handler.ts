import { http, HttpResponse } from "msw";
import dummyRoom from "./data/dummyRoom.json";

export const handlers = [
  http.get("/api/roomId", () => {
    //객실 타입
    return HttpResponse.json(dummyRoom);
  }),
];
