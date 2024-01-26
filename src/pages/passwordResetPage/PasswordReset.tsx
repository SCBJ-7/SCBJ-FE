import { FormProvider, useForm } from "react-hook-form";
import * as S from "./PasswordReset.style";
import FieldValues from "./components/fieldValues/FieldValues";
import PasswordResetSubmitBtn from "./components/passwordResetSubmitBtn.tsx/PasswordResetSubmitBtn";

const PasswordReset = () => {
  const method = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });

  return (
    <S.PasswordResetContainer>
      <S.PasswordResetTitleContainer>
        <S.PasswordResetTitle>비밀번호 변경</S.PasswordResetTitle>
      </S.PasswordResetTitleContainer>

      <FormProvider {...method}>
        <FieldValues />
        <PasswordResetSubmitBtn />
      </FormProvider>
    </S.PasswordResetContainer>
  );
};

export default PasswordReset;
