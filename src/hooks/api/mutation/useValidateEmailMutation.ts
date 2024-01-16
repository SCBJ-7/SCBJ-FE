import { postValidateEmail } from "@apis/postValidateEmail";
import { useMutation } from "@tanstack/react-query";

export const useValidateEmailMutation = () => {
  const validateEmailMutation = useMutation({
    mutationFn: ({ email }: { email: string }) => postValidateEmail(email),
  });

  return validateEmailMutation;
};
