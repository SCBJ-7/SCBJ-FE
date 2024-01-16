import { useEffect, useState } from "react";
import * as S from "./RegisterAccount.style";
import { useNavigate, useSearchParams } from "react-router-dom";
import TermsAgreement from "@/components/account/termsAgreement/TermsAgreement";
import EnterAccountInfo from "@/components/account/enterAccountInfo/EnterAccountInfo";
import type { AccountInfo } from "@/types/account";

const RegisterAccount = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<string>("first");
  const [path, setPath] = useSearchParams();
  const [accountInfo, setAccountInfo] = useState<AccountInfo>({
    accountNumber: undefined,
    bank: undefined,
  });

  const handleStep = (step: string) => {
    setStep(step);
    setPath({ step });
  };

  useEffect(() => {
    if (path.size === 0 || path.get("step") === "first") {
      handleStep("first");
      return;
    }

    if (path.get("step") !== step) {
      navigate("/manage-account");
    }
    // eslint-disable-next-line
  }, [path]);

  return (
    <>
      {step === "first" && (
        <S.RegisterAccountContainer>
          <h2>등록된 계좌가 없습니다.</h2>
          <p>
            계좌를 등록하고 못가게 된<br /> 숙박권을 판매해보세요!
          </p>
          <S.RegisterAccountButton onClick={() => handleStep("약관 동의")}>
            1분만에 계좌 등록하기
          </S.RegisterAccountButton>
        </S.RegisterAccountContainer>
      )}
      {step === "약관 동의" && (
        <TermsAgreement onClickHandler={() => handleStep("계좌 입력")} />
      )}
      {step === "계좌 입력" && (
        <EnterAccountInfo
          accountInfo={accountInfo}
          setAccountInfo={setAccountInfo}
        />
      )}
    </>
  );
};

export default RegisterAccount;
