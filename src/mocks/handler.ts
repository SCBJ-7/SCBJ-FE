import { http, HttpResponse } from "msw";
import dummyRoom from "./data/dummyRoom.json";

export const handlers = [
  http.get("/api/roomId", () => {
    return HttpResponse.json(dummyRoom);
  }),
];
