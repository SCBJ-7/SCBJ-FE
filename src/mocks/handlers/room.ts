import { http, HttpResponse } from "msw";

import { BASE_URL, END_POINTS } from "@/constants/api";
import dummyRoomDetail from "@/mocks/data/dummyRoomDetail.json";
import dummyStock from "@/mocks/data/dummyStock.json";

const roomHandlers = [
  http.get(BASE_URL + END_POINTS.ROOM(":productId"), () => {
    return HttpResponse.json(dummyRoomDetail);
  }),
  http.get(BASE_URL + END_POINTS.STOCK, () => {
    return HttpResponse.json(dummyStock);
  }),
];

export default roomHandlers;
