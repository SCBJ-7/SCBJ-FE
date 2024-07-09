import { AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./EnterAccountInfo.style";

import { BANK_LIST } from "@/constants/bank";
import { PATH } from "@/constants/path";
import usePreventLeave from "@/hooks/common/usePreventLeave";
import useToastConfig from "@/hooks/common/useToastConfig";
import { Nullable } from "@/types/nullable";

const EnterAccountInfo = ({
  bank,
  accountNumber,
  onSubmitAccount,
  onSetAccountNumber,
  onSetBank,
}: {
  bank: Nullable<string>;
  accountNumber: Nullable<string>;
  onSubmitAccount: React.Dispatch<React.SetStateAction<"none" | "enter">>;
  onSetAccountNumber: React.Dispatch<React.SetStateAction<Nullable<string>>>;
  onSetBank: React.Dispatch<React.SetStateAction<Nullable<string>>>;
}) => {
  usePreventLeave(true);
  const { pathname } = useLocation();
  const { handleToast } = useToastConfig();
  const controls = useAnimation();

  const accountNumberRef = useRef<HTMLInputElement>(null);
  const [newAccountNumber, setNewAccountNumber] = useState<string>(
    accountNumber || "",
  );
  const [newBank, setNewBank] = useState<string>(bank || "");

  const [showBankList, setShowBankList] = useState<boolean>(false);
  const checkIsNumber = /^\d+$/;

  const accountValidation =
    newBank &&
    newAccountNumber &&
    checkIsNumber.test(newAccountNumber) &&
    newAccountNumber.length > 10 &&
    newAccountNumber.length < 25;

  const buttonText =
    pathname === PATH.MANAGE_ACCOUNT ? "계좌 등록하기" : "계좌 입력하기";

  const bankOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowBankList(false);
    setNewBank(e.target.value);
  };

  const accountOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAccountNumber(e.target.value);
  };

  // 바텀 시트 애니메이션 로직
  useEffect(() => {
    if (showBankList) {
      controls.start({ y: 0, display: "block" }, { duration: 0.4 });
    } else {
      controls.start({ y: "100%", display: "none" }, { duration: 0.4 });
    }
  }, [controls, showBankList]);

  const handleErrorToast = () => {
    if (!accountNumberRef.current) {
      return;
    }
    if (newAccountNumber.length > 0 && !checkIsNumber.test(newAccountNumber)) {
      handleToast(true, [<>계좌번호는 숫자만 입력할 수 있어요</>]);
      accountNumberRef.current.focus();
      return;
    }

    if (newAccountNumber.length < 10 || newAccountNumber.length > 25) {
      handleToast(true, [<>계좌번호가 정확히 입력되었는지 확인해주세요</>]);
      accountNumberRef.current.focus();
      return;
    }

    if (!newBank) {
      handleToast(true, [<>은행을 선택해 주세요</>]);
      setShowBankList(true);
      return;
    }

    return true;
  };

  const onSubmit = () => {
    if (!handleErrorToast()) {
      return;
    }

    onSetAccountNumber(newAccountNumber);
    onSetBank(newBank);
    onSubmitAccount("none");

    return;
  };

  return (
    <S.EnterAccountInfoContainer>
      <h1>입금받을 계좌를 등록해주세요</h1>
      <S.AccountNumberInput
        ref={accountNumberRef}
        value={newAccountNumber}
        onChange={(e) => accountOnChange(e)}
      />
      <S.BankInput
        $bank={newBank}
        $showBankList={showBankList}
        onClick={() => setShowBankList(true)}
      >
        {newBank ? newBank : "은행"}
      </S.BankInput>

      <S.BackgroundBlur
        $isVisible={showBankList}
        onClick={() => setShowBankList(false)}
      />
      <AnimatePresence>
        <S.BankListBottomSheet controls={controls}>
          <h2>은행</h2>
          <S.BankListContainer>
            {BANK_LIST.map((item) => {
              return (
                <S.BankListWrapper htmlFor={item.name} key={item.name}>
                  <input
                    type="radio"
                    name="bank"
                    value={item.name}
                    id={item.name}
                    onChange={(e) => bankOnChange(e)}
                    checked={item.name === bank}
                  />
                  <img src={item.img} alt={item.name} />
                  {item.name}
                </S.BankListWrapper>
              );
            })}
          </S.BankListContainer>
        </S.BankListBottomSheet>
      </AnimatePresence>
      <S.SubmitButton
        onClick={onSubmit}
        $disabled={!accountValidation}
        $showBankList={showBankList}
      >
        {buttonText}
      </S.SubmitButton>
    </S.EnterAccountInfoContainer>
  );
};

export default EnterAccountInfo;
