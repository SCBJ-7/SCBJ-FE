import { END_POINTS } from "@constants/api";
import { http, HttpResponse } from "msw";

export const getEmailVerification = (scenarioProps?: string) => {
  return http.post(`https://3.34.147.187.nip.io${END_POINTS.EMAIL}`, () => {
    const pageParams = new URLSearchParams(window.location.search);
    const scenario = pageParams.get("scenario");

    if (scenario || scenarioProps === "E01") {
      return HttpResponse.json(
        { message: "공백이 없어야 합니다." },
        { status: 400 },
      );
    }

    if (scenario || scenarioProps === "E02") {
      return HttpResponse.json(
        { message: "유효하지 않은 이메일입니다." },
        { status: 400 },
      );
    }

    if (scenario || scenarioProps === "E03") {
      return HttpResponse.json(
        { message: "이메일 서버가 연결되지 않습니다." },
        { status: 500 },
      );
    }

    // return HttpResponse.json({
    //   message: "이메일 인증번호 발급에 성공했습니다.",
    //   data: "1039475",
    // });
  });
};

const emailHandlers = [getEmailVerification()];

export default emailHandlers;
