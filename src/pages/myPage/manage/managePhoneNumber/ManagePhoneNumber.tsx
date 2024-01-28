import { changeNumber } from "@/apis/fetchUserInfo";
import { useUserInfoStore } from "@/store/store";
import useToastConfig from "@hooks/common/useToastConfig";
import { useRef, useState } from "react";

import * as S from "./ManagePhoneNumber.style";

const ManagePhoneNumber = ({
  prevPhoneNumber,
}: {
  prevPhoneNumber: string;
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>(prevPhoneNumber);
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleToast } = useToastConfig();
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);

  const phoneNumberChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhoneNumber(event.target.value);
  };

  const changeButtonClickHandler = async () => {
    if (!isChanging) {
      setIsChanging(true);
      inputRef.current?.focus();
      return;
    }

    setIsChanging(false);
    if (prevPhoneNumber === phoneNumber) return;
    try {
      await changeNumber(phoneNumber).then(() => {
        setUserInfo({ phone: phoneNumber });
        handleToast(true, [<>전화번호가 성공적으로 변경되었습니다!</>]);
      });
    } catch (err) {
      handleToast(true, [<>전화번호 변경 실패. 다시 시도해 주세요</>]);
      setPhoneNumber(prevPhoneNumber);
      setIsChanging(true);
    }
  };

  const phoneNumberRegex = /^[0-9-]+$/;

  const getHelpMessageAndState = () => {
    if (phoneNumber[0] !== "0") {
      return {
        helpMessage: "올바른 휴대폰 번호를 입력해 주세요",
        state: "onError",
      };
    }

    if (
      !phoneNumberRegex.test(phoneNumber) ||
      phoneNumber.length < 12 ||
      phoneNumber.length > 13
    ) {
      return {
        helpMessage: "010-1234-5678과 같은 형식으로 입력해 주세요",
        state: "onError",
      };
    }

    return {
      helpMessage: "연락 가능한 본인 명의의 휴대폰 번호를 입력해 주세요.",
      state: "default",
    };
  };

  const { helpMessage, state } = getHelpMessageAndState();
  const buttonText = isChanging ? "확인" : "변경";
  const btnIsDisabled = state === "onError";

  return (
    <>
      <S.ManageNumberSection $state={state} $isChanging={isChanging}>
        <label htmlFor="phone-number">전화번호</label>
        <div>
          <input
            type="text"
            id="phone-number"
            value={phoneNumber}
            onChange={phoneNumberChangeHandler}
            ref={inputRef}
            readOnly={!isChanging}
          />
          <button onClick={changeButtonClickHandler} disabled={btnIsDisabled}>
            {buttonText}
          </button>
        </div>
        <S.HelpMessage $state={state}>{helpMessage}</S.HelpMessage>
      </S.ManageNumberSection>
    </>
  );
};

export default ManagePhoneNumber;
