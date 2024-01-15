import { useRef, useState } from "react";
import * as S from "./ManageName.style";
// import Toast from "@/components/toast/Toast";
import useProfileApi from "@/apis/useProfileApi";

const ManageName = ({
  prevName,
  linkedToYanolja,
}: {
  prevName: string;
  linkedToYanolja: boolean;
}) => {
  const [name, setName] = useState<string>(prevName);
  const [isChanging, setIsChanging] = useState<boolean>(false);
  // const [showToast, setShowToast] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const koreanRegex = /^[ㄱ-ㅎ가-힣ㅏ-ㅣ]+$/;
  const { changeName } = useProfileApi();

  // api 통신 에러 토스트 핸들러
  // const handleShowToast = () => {
  //   setShowToast(true);
  //   setTimeout(() => {
  //     setShowToast(false);
  //   }, 3000);
  // };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeButtonClickHandler = () => {
    if (isChanging) {
      setIsChanging(false);
      if (prevName === name) return;
      changeName("/v1/members/name", name);
      // handleShowToast();
    } else {
      setIsChanging(true);
      inputRef.current?.focus();
    }
  };

  const getMessageAndState = () => {
    if (linkedToYanolja) {
      return {
        helpMessage: "야놀자 계정 연동 후에는 이름을 변경할 수 없습니다.",
        state: "linkedToYanolja",
      };
    }

    if (!koreanRegex.test(name)) {
      return {
        helpMessage: "이름은 한글로만 입력해 주세요",
        state: "onError",
      };
    }

    if (name.length < 2) {
      return {
        helpMessage: "이름은 2자 이상이어야 합니다",
        state: "onError",
      };
    }

    if (name.length > 20) {
      return {
        helpMessage: "이름은 20자 미만이어야 합니다",
        state: "onError",
      };
    }

    return {
      helpMessage: "본명을 등록해 주세요. 체크인 시 본인확인용으로 사용됩니다.",
      state: "default",
    };
  };

  const { helpMessage, state } = getMessageAndState();
  const buttonText = isChanging ? "확인" : "변경";
  const btnIsDisabled = state === "onError" || state === "linkedToYanolja";

  return (
    <>
      {/* {showToast && <Toast strings={[<>이름 변경 성공</>, "ㅊㅋ"]} />} */}
      <S.ManageNameSection
        $linkedToYanolja={linkedToYanolja}
        $state={state}
        $isChanging={isChanging}
      >
        <label htmlFor="name">이름</label>
        <div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChangeHandler}
            ref={inputRef}
            readOnly={!isChanging}
          />
          <button onClick={changeButtonClickHandler} disabled={btnIsDisabled}>
            {buttonText}
          </button>
        </div>
        <S.HelpMessage $state={state}>{helpMessage}</S.HelpMessage>
      </S.ManageNameSection>
    </>
  );
};

export default ManageName;
