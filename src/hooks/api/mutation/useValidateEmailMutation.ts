import { postValidateEmail } from "@apis/fetchLogin";
import { useMutation } from "@tanstack/react-query";

export const useValidateEmailMutation = () => {
  const validateEmailMutation = useMutation({
    mutationFn: ({ email }: { email: string }) => postValidateEmail(email),
    throwOnError: true,
  });

  return validateEmailMutation;
};
