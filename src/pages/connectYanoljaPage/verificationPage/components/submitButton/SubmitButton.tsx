import { useConnectAccountMutation } from "@hooks/api/mutation/useConnectAccountMutation";
import { useFormContext } from "react-hook-form";

import * as S from "./SubmitButton.style";

const SubmitButton = () => {
  const {
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useFormContext();

  const connectAccountMutation = useConnectAccountMutation();

  const onSubmit = () => {
    const email = getValues("email");
    if (!email) return;
    connectAccountMutation.mutate(email);
  };

  return (
    <S.BottomWrapper>
      <S.Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        data-disabled={isValid ? null : ""}
        aria-label="야놀자 계정 연동하기"
      >
        계정 연동하기
      </S.Button>
    </S.BottomWrapper>
  );
};

export default SubmitButton;
