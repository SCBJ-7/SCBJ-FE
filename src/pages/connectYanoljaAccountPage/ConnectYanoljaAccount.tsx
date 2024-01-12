import YanoljaLogo from "@assets/logos/Yanolja_CI.png";
import SubmitButton from "@pages/connectYanoljaAccountPage/components/submitButton/SubmitButton";
import { useForm, FormProvider } from "react-hook-form";

import * as S from "./ConnectYanoljaAccount.style";

import AccountVerificationSection from "@/pages/connectYanoljaAccountPage/components/accountVerificationSection/AccountVerificationSection";
import TermsAgreementSection from "@/pages/connectYanoljaAccountPage/components/termsAgreementSection/TermsAgreementSection";

const ConnectYanoljaAccount = () => {
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
        <AccountVerificationSection />
        <TermsAgreementSection />
        <SubmitButton />
      </FormProvider>
    </S.PageContainer>
  );
};

export default ConnectYanoljaAccount;
