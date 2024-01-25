import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { postYanoljaAccount } from "@apis/fetchYanoljaAccount";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";

export const useConnectAccountMutation = () => {
  const navigate = useNavigate();
  const { handleToast } = useToastConfig();

  const connectAccountMutation = useMutation({
    mutationFn: (email: string) => postYanoljaAccount(email),
    onSuccess: () => {
      navigate(PATH.YANOLJA_ACCOUNT + "/verify/success", {
        state: { success: true },
        replace: true,
      });
    },
    onError: (error): void => {
      if (
        isAxiosError(error) &&
        error.response &&
        error.response.status === 404
      ) {
        handleToast(true, [<>입력한 정보를 다시 확인해주세요</>]);
      } else if (
        isAxiosError(error) &&
        error.response &&
        error.response.status === 500
      ) {
        handleToast(true, [<>잠시후 다시 시도하세요</>]);
      }
    },
    throwOnError: (error) => {
      return !isAxiosError(error);
    },
  });

  return connectAccountMutation;
};
