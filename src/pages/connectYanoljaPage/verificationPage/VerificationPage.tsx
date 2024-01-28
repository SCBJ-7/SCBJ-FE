import YanoljaLogo from "@assets/logos/Yanolja_CI.png";
import SubmitButton from "@pages/connectYanoljaPage/verificationPage/components/submitButton/SubmitButton";
import TermsAgreementSection from "@pages/connectYanoljaPage/verificationPage/components/termsAgreementSection/TermsAgreementSection";
import VerificationSection from "@pages/connectYanoljaPage/verificationPage/components/verificationSection/VerificationSection";
import { FormProvider, useForm } from "react-hook-form";

import * as S from "./VerificationPage.style";

const VerificationPage = () => {
  const methods = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });

  return (
    <S.PageContainer>
      <S.YanoljaHeader>
        <S.LogoWrapper>
          <img src={YanoljaLogo} alt="야놀자 로고" />
        </S.LogoWrapper>
      </S.YanoljaHeader>
      <FormProvider {...methods}>
        <VerificationSection />
        <TermsAgreementSection />
        <SubmitButton />
      </FormProvider>
    </S.PageContainer>
  );
};

export default VerificationPage;
