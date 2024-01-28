import { useEffect, useState } from "react";
import * as S from "./RegisterAccount.style";
import { useNavigate, useSearchParams } from "react-router-dom";
import TermsAgreement from "@/components/account/termsAgreement/TermsAgreement";
import EnterAccountInfo from "@/components/account/enterAccountInfo/EnterAccountInfo";
import { PATH } from "@constants/path";
import type { AccountData } from "@/types/profile";

const RegisterAccount = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<string>("first");
  const [path, setPath] = useSearchParams();
  const [accountInfo, setAccountInfo] = useState<AccountData>({
    accountNumber: null,
    bank: null,
  });

  const handleStep = (step: string) => {
    setStep(step);
    setPath({ step });
  };

  useEffect(() => {
    /** state로 관리하는 step을 url 변경으로 조작하지 못하도록
     *  url 상의 step이 step state와 일치하는 지 검사 후
     *  일치하지 않을 경우 정산계좌 관리 페이지로 보냄
     *  */
    if (path.get("step") !== step) {
      navigate(PATH.MANAGE_ACCOUNT, { replace: true });
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
          <S.RegisterAccountButton onClick={() => handleStep("termsAgreement")}>
            1분만에 계좌 등록하기
          </S.RegisterAccountButton>
        </S.RegisterAccountContainer>
      )}
      {step === "termsAgreement" && (
        <TermsAgreement onClickHandler={() => handleStep("enterAccount")} />
      )}
      {step === "enterAccount" && (
        <EnterAccountInfo
          accountInfo={accountInfo}
          setAccountInfo={setAccountInfo}
        />
      )}
    </>
  );
};

export default RegisterAccount;
