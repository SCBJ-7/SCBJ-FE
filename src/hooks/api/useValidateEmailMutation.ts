import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useValidateEmailMutation = () => {
  const validateEmailMutation = useMutation({
    mutationFn: (email) =>
      axios.post("https://3.34.147.187.nip.io/v1/members/email", { email }),

    // FIXME: api 에러 케이스 추가
  });

  return validateEmailMutation;
};
