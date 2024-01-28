import TermsAgreementSection from "@pages/connectYanoljaPage/verificationPage/components/termsAgreementSection/TermsAgreementSection";
import { FormProvider, useForm } from "react-hook-form";

import FieldValues from "./components/fieldValues/FieldValues";
import SignUpSubmitBtn from "./components/signUpSubmitBtn/SignUpSubmitBtn";
import * as S from "./SignUp.style";

const SignUp = () => {
  const methods = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });

  return (
    <S.SignUpContainer>
      <S.TitleWrapper>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
      </S.TitleWrapper>
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
