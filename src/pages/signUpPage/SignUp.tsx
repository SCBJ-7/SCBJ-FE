import { FormProvider, useForm } from "react-hook-form";

import FieldValues from "./components/fieldValues/FieldValues";
import SignUpSubmitBtn from "./components/signUpSubmitBtn/SignUpSubmitBtn";
import * as S from "./SignUp.style";

import { HelmetTag } from "@/components/Helmet/Helmet";
import { PATH } from "@/constants/path";
import TermsAgreementSection from "@/pages/connectYanoljaPage/verificationPage/components/termsAgreementSection/TermsAgreementSection";

const SignUpView = () => {
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

const SignUp = () => {
  const schemaData = {
    "@type": "WebPage",
    description:
      "퍼센트호텔 회원가입 페이지입니다. 가입하시면 다양한 혜택을 누리실 수 있습니다.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}${PATH.SIGNUP}`,
    },
  };

  return (
    <>
      <HelmetTag
        title="회원가입"
        schemaType="WebPage"
        schemaData={schemaData}
      />
      <SignUpView />
    </>
  );
};

export default SignUp;
