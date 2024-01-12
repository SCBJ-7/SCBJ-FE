import YanoljaLogo from "@assets/logos/Yanolja_CI.png";
import AccountVerificationForm from "@pages/connectYanoljaAccountPage/components/accountVerificationForm/AccountVerificationForm";
import SubmitButton from "@pages/connectYanoljaAccountPage/components/submitButton/SubmitButton";
import TermsAgreementForm from "@pages/connectYanoljaAccountPage/components/termsAgreementForm/TermsAgreementForm";
import { useForm, FormProvider } from "react-hook-form";

import * as S from "./ConnectYanoljaAccount.style";

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
        <AccountVerificationForm />
        <TermsAgreementForm />
        <SubmitButton />
      </FormProvider>
    </S.PageContainer>
  );
};

export default ConnectYanoljaAccount;
