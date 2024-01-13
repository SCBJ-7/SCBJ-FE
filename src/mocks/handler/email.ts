import { END_PONTS } from "@constants/api";
import { http, HttpResponse } from "msw";

export const emailHandlers = [
  http.post(`https://3.34.147.187.nip.io${END_PONTS.EMAIL}`, () => {
    const pageParams = new URLSearchParams(window.location.search);
    const scenario = pageParams.get("scenario");

    // FIXME: 에러 상황 테스트 컨벤션 정해봐욥~!

    // Sad path
    if (scenario === "error1") {
      return HttpResponse.json(
        { message: "공백이 없어야 합니다." },
        { status: 400 },
      );
    }

    if (scenario === "error2") {
      return HttpResponse.json(
        { message: "유효하지 않은 이메일입니다." },
        { status: 400 },
      );
    }

    if (scenario === "error3") {
      return HttpResponse.json(
        { message: "이메일 서버가 연결되지 않습니다." },
        { status: 500 },
      );
    }

    // Happy path
    return HttpResponse.json({
      message: "이메일 인증번호 발급에 성공했습니다.",
      data: "1039475",
    });
  }),
];
