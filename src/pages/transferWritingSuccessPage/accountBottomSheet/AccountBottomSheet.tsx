import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";
import * as S from "./AccountBottomSheet.style";
import { useEffect, useRef, useState } from "react";
import { postAccount } from "@apis/postAccount";
import { useMutation } from "@tanstack/react-query";

interface BottomSheetProps {
  content: string;
  onSetContent: React.Dispatch<
    React.SetStateAction<"default" | "agreement" | "firstlyNoAccount">
  >;
}

const AccountBottomSheet = ({ content, onSetContent }: BottomSheetProps) => {
  const navigate = useNavigate();
  const [optAll, setOptAll] = useState(false);
  const [optAge, setOptAge] = useState(false);
  const [optPrivacy, setOptPrivacy] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  const allRef = useRef(null);
  const ageRef = useRef(null);
  const privacyRef = useRef(null);

  const accountNumber = localStorage.getItem("newAccount");
  const bank = localStorage.getItem("newBank");
  if (!accountNumber || !bank) {
    onSetContent("default");
  }

  useEffect(() => {
    if (optAll) {
      if (allRef.current && ageRef.current && privacyRef.current) {
        setOptAll(true);
        setOptAge(true);
        setOptPrivacy(true);

        (allRef.current as HTMLInputElement).checked = true;
        (ageRef.current as HTMLInputElement).checked = true;
        (privacyRef.current as HTMLInputElement).checked = true;
      }
    } else {
      setOptAll(false);
      setOptAge(false);
      setOptPrivacy(false);

      if (allRef.current && ageRef.current && privacyRef.current) {
        (allRef.current as HTMLInputElement).checked = false;
        (ageRef.current as HTMLInputElement).checked = false;
        (privacyRef.current as HTMLInputElement).checked = false;
      }
    }
  }, [optAll]);

  useEffect(() => {
    if (optAll && optAge && optPrivacy) {
      setReadyToSubmit(true);
    } else {
      setReadyToSubmit(false);
    }
  }, [optAll, optAge, optPrivacy]);

  const { mutate } = useMutation({
    mutationFn: () =>
      postAccount({
        bank: bank as string,
        accountNumber: accountNumber as string,
      }),
    onSuccess: () => {
      try {
        localStorage.removeItem("newAccount");
        localStorage.removeItem("newBank");
        navigate(PATH.PURCHASE_LIST);
      } catch {
        navigate(PATH.PURCHASE_LIST);
      }
    },
  });

  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    onSetContent("agreement");
  };

  const submitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    if (!readyToSubmit) return;
    if (optAll && optAge && optPrivacy) {
      mutate();
    }
  };

  if (content === "default") {
    return <></>;
  } else {
    return (
      <S.Dim onClick={() => onSetContent("default")}>
        <S.Container $state={content} onClick={(e) => e.stopPropagation()}>
          {content === "firstlyNoAccount" && (
            <>
              <S.Header>지금 입력한 계좌를 기본 계좌로 등록할까요?</S.Header>
              <S.Buttons>
                <button onClick={clickHandler}>기본 계좌로 등록하기</button>
                <button
                  className="cancel"
                  onClick={() => navigate(PATH.PURCHASE_LIST)}
                >
                  변경하지 않기
                </button>
              </S.Buttons>
            </>
          )}
          {content === "agreement" && (
            <>
              <S.Header>등록한 계좌 정보를 저장하면</S.Header>
              <S.Header>편하게 게시물을 판매할 수 있어요!</S.Header>
              <S.Body
                $optPrivacy={optPrivacy}
                $optAll={optAll}
                $optAge={optAge}
              >
                <div className="all">
                  <input
                    ref={allRef}
                    type="checkbox"
                    onChange={() => setOptAll((prev) => !prev)}
                  />
                  <span>전체동의</span>
                </div>
                <div className="age">
                  <input
                    ref={ageRef}
                    type="checkbox"
                    onChange={() => setOptAge((prev) => !prev)}
                  />
                  <span>[필수] 만 14세 이상입니다</span>
                </div>
                <div className="privacy">
                  <input
                    ref={privacyRef}
                    type="checkbox"
                    onChange={() => setOptPrivacy((prev) => !prev)}
                  />
                  <span>[필수] 개인정보 처리방침에 동의합니다.</span>
                </div>
              </S.Body>
              <S.PostButtons $color={readyToSubmit}>
                <button className="post" onClick={submitHandler}>
                  나의 계좌로 등록하기
                </button>
                <button
                  className="cancel"
                  onClick={() => navigate(PATH.PURCHASE_LIST)}
                >
                  나중에 입력하기
                </button>
              </S.PostButtons>
            </>
          )}
        </S.Container>
      </S.Dim>
    );
  }
};

export default AccountBottomSheet;
