import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import useToastConfig from "../common/useToastConfig";

import { cancelSale } from "@/apis/cancelSale";

export function useDiscontinueMutation() {
  const navigate = useNavigate();

  const { handleToast } = useToastConfig();
  const { mutate } = useMutation({
    mutationFn: cancelSale,
    onSuccess: () => navigate(-1),
    onError: (err) => {
      if (isAxiosError(err) && err.response?.status === 404) {
        handleToast(true, [<>상품 정보를 찾을 수 없습니다.</>]);
      } else {
        throw err;
      }
    },
  });

  return { deleteProduct: mutate };
}
