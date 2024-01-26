import * as S from "./SignUp.style";
import { FormProvider, useForm } from "react-hook-form";

import TermsAgreementSection from "@pages/connectYanoljaPage/verificationPage/components/termsAgreementSection/TermsAgreementSection";
import FieldValues from "./components/fieldValues/FieldValues";
import SignUpSubmitBtn from "./components/signUpSubmitBtn/SignUpSubmitBtn";

const SignUp = () => {
  const methods = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });

  return (
    <S.SignUpContainer>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <FormProvider {...methods}>
        <FieldValues />

        <S.SignUpCheckBoxContainer>
          <TermsAgreementSection />
        </S.SignUpCheckBoxContainer>

        <SignUpSubmitBtn />
      </FormProvider>
    </S.SignUpContainer>
  );
};

export default SignUp;
