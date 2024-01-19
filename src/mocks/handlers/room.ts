import { BASE_URL, END_POINTS } from "@constants/api";
import dummyRoomDetail from "@mocks/data/dummyRoomDetail.json";
import { http, HttpResponse } from "msw";

export const roomHandlers = [
  http.get(`${BASE_URL + END_POINTS.ROOM(":roomId")}`, () => {
    return HttpResponse.json(dummyRoomDetail);
  }),
];
