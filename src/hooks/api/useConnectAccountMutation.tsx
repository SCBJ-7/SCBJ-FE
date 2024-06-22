import { postYanoljaAccount } from "@/apis/fetchYanoljaAccount";
import { PATH } from "@/constants/path";
import useToastConfig from "@/hooks/common/useToastConfig";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { STATUS_CODE } from "@/constants/api";

export const useConnectAccountMutation = () => {
  const navigate = useNavigate();
  const { handleToast } = useToastConfig();

  const errorMessageMap = {
    [STATUS_CODE.NOT_FOUND]: <>입력한 정보를 다시 확인해주세요</>,
    [STATUS_CODE.INTERNAL_SERVER_ERROR]: <>잠시후 다시 시도하세요</>,
  };

  const handleError = (error: Error) => {
    if (isAxiosError(error) && error.response) {
      const message =
        errorMessageMap[error.response.status as keyof typeof errorMessageMap];
      if (message) {
        handleToast(true, [message]);
      }
    }
  };

  const connectAccountMutation = useMutation({
    mutationFn: (email: string) => {
      console.log(email);
      return postYanoljaAccount(email);
    },
    onSuccess: () => {
      navigate(PATH.YANOLJA_ACCOUNT_VERIFICATION_SUCCESS, {
        state: { success: true },
        replace: true,
      });
    },
    onError: handleError,
    throwOnError: (error) => {
      console.log(error);
      return !isAxiosError(error);
    },
  });

  return connectAccountMutation;
};
