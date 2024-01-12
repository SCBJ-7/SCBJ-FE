import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { PATH } from "@/constants/path";

export const useConnectAccountMutation = () => {
  const navigate = useNavigate();

  const connectAccountMutation = useMutation({
    mutationFn: (email) =>
      axios.post("https://3.34.147.187.nip.io/v1/members/yanolja", { email }),
    onSuccess: () => {
      navigate(PATH.YANOLJA_ACCOUNT_VERIFY + "/success", {
        state: { success: true },
        replace: true,
      });
    },
    onError: () => {
      // 에러 핸들링 필요
    },
  });

  return connectAccountMutation;
};
