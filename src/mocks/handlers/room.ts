import { END_PONTS } from "@constants/api";
import dummyRoomDetail from "@mocks/data/dummyRoomDetail.json";
import { http, HttpResponse } from "msw";

export const roomHandlers = [
  http.get(`${END_PONTS.ROOM(":roomId")}`, () => {
    return HttpResponse.json(dummyRoomDetail);
  }),
];
