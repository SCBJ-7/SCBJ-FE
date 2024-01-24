import { postValidateEmail } from "@apis/fetchLogin";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";

export const useValidateEmailMutation = () => {
  const validateEmailMutation = useMutation({
    mutationFn: ({ email }: { email: string }) => postValidateEmail(email),
    throwOnError: (error) => {
      return !(isAxiosError(error) && error.response);
    },
  });

  return validateEmailMutation;
};
