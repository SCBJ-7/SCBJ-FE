import { BASE_URL, END_POINTS } from "@constants/api";
import dummyRoomDetail from "@mocks/data/dummyRoomDetail.json";
import { http, HttpResponse } from "msw";

const roomHandlers = [
  http.get(BASE_URL + END_POINTS.ROOM(":productId"), () => {
    return HttpResponse.json(dummyRoomDetail);
  }),
];

export default roomHandlers;
