import { BASE_URL, END_POINTS } from "@constants/api";
import { http, HttpResponse } from "msw";

export const getYanoljaAccount = (scenarioProps?: string) => {
  return http.post(BASE_URL + END_POINTS.YANOLJA, () => {
    const pageParams = new URLSearchParams(window.location.search);
    const scenario = pageParams.get("scenario");

    if (scenario || scenarioProps === "A01") {
      return HttpResponse.json(
        { message: "야놀자 계정을 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    if (scenario || scenarioProps === "A02") {
      return HttpResponse.json(
        { message: "공백이 없어야 합니다." },
        { status: 400 },
      );
    }

    if (scenario || scenarioProps === "A03") {
      return HttpResponse.json(
        { message: "유효하지 않은 이메일입니다." },
        { status: 400 },
      );
    }
  });
};

const yanoljaAccountHandlers = [getYanoljaAccount()];

export default yanoljaAccountHandlers;
