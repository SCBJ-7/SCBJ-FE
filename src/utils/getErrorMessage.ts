import { ResponseError } from "@/components/error/Error";
import { ERROR_CODE, STATUS_CODE } from "@/constants/api";
import { PATH } from "@/constants/path";
import type { AxiosError } from "axios";

const getErrorMessage = (
  error: AxiosError<{ message: string }> | ResponseError,
) => {
  let status: number | undefined;
  let message: string | undefined;

  if (error instanceof ResponseError) {
    status = error.response.status;
    message = error.response.data.message;
  } else if (error.isAxiosError) {
    status = error.response?.status;
    message = error.response?.data.message;
  }

  let title;
  let content;
  let button;
  let nav;

  switch (status) {
    case STATUS_CODE.UNAUTHORIZED:
      title = "로그인이 필요한 서비스입니다";
      content = "로그인 후 다시 시도해주세요";
      button = "로그인 하러가기";
      nav = `${PATH.LOGIN}?redirect=${window.location.pathname}`;
      break;
    case STATUS_CODE.INTERNAL_SERVER_ERROR:
      title = "현재 페이지를 표시할 수 없습니다";
      content = "잠시 후 다시 시도해주세요";
      button = "새로고침 하기";
      break;
    case STATUS_CODE.BAD_REQUEST:
      title = "잘못된 요청입니다.";
      content = `확인 후 다시 시도해주세요`;
      button = "새로고침 하기";
      break;
    case ERROR_CODE.UNAUTHORIZED_WRITE_TRANSFER:
      title = "로그인이 필요한 서비스입니다";
      content = "로그인 후 숙박권을 판매해보세요!";
      button = "로그인 하러가기";
      nav = `${PATH.LOGIN}?redirect=${window.location.pathname}`;
      break;
    case ERROR_CODE.UNAUTHORIZED_YANOLJA:
      title = "야놀자 예약내역 확인이 필요합니다.";
      content = "야놀자 계정 연동으로 예약내역을 불러올 수 있어요";
      button = "계정 연동하기";
      nav = PATH.YANOLJA_ACCOUNT;
      break;
    default:
      title = message || "알 수 없는 문제가 발생했습니다.";
      content = "잠시 후 다시 시도해주세요.";
      button = "새로고침 하기";
      break;
  }

  return { title, content, button, nav };
};

export default getErrorMessage;
