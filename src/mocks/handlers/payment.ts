import { BASE_URL, END_POINTS } from "@constants/api";
import dummyPaymentInfo from "@mocks/data/dummyPaymentInfo.json";
import { http, HttpResponse } from "msw";

export const paymentHandler = [
  http.get(`${BASE_URL + END_POINTS.PAYMENT(":productId")}`, () => {
    return HttpResponse.json(dummyPaymentInfo);
  }),
];
