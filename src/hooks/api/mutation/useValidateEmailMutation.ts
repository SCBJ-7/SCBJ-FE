import { END_POINTS } from "@constants/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useValidateEmailMutation = () => {
  const validateEmailMutation = useMutation({
    mutationFn: (email: { email: string }) =>
      axios.post(`https://3.34.147.187.nip.io${END_POINTS.EMAIL}`, { email }),

    // FIXME: 엣지 케이스 추가
  });

  return validateEmailMutation;
};
