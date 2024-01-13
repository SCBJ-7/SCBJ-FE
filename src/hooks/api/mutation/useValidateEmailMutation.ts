import { END_PONTS } from "@constants/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useValidateEmailMutation = () => {
  const validateEmailMutation = useMutation({
    mutationFn: (email) =>
      axios.post(`https://3.34.147.187.nip.io${END_PONTS.EMAIL}`, { email }),

    // FIXME: 엣지 케이스 추가
  });

  return validateEmailMutation;
};
