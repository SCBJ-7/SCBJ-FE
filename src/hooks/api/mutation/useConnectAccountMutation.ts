import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { useToastStore } from "@store/store";
import { postYanoljaAccount } from "@apis/postYanoljaAccount";
import { PATH } from "@constants/path";

export const useConnectAccountMutation = () => {
  const navigate = useNavigate();
  const setToastConfig = useToastStore((state) => state.setToastConfig);

  const connectAccountMutation = useMutation({
    mutationFn: (email: string) => postYanoljaAccount(email),
    onSuccess: () => {
      navigate(PATH.YANOLJA_ACCOUNT_VERIFY + "/success", {
        state: { success: true },
        replace: true,
      });
    },
    onError: (error) => {
      if (!isAxiosError(error)) throw error;
      if (error.response && error.response.status === 404) {
        // FIXME: jsx 반환이 안돼서 문자열로 처리, but 수정이 필요함
        const message = "입력한 정보를 다시 확인해주세요";
        setToastConfig({
          isShow: true,
          isError: false,
          strings: [message],
        });
        setTimeout(() => {
          setToastConfig({
            isShow: false,
            isError: false,
            strings: [message],
          });
        }, 6000);
      }
    },
  });

  return connectAccountMutation;
};
