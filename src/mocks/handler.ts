import { http, HttpResponse } from "msw";
import dummyPurchaseList from "./data/dummyPuchaseList.json";
export const handlers = [
  http.get("/v1/members/purchased-history", () => {
    return HttpResponse.json(dummyPurchaseList);
  }),
];
