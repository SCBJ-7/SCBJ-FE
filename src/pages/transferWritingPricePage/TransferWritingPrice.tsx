import { useEffect, useRef, useState } from "react";
import * as S from "./TransferWritingPrice.style";

import FirstPriceTag from "./firstPriceTag/FirstPriceTag";
import SecondPriceTag from "./secondPriceTag/SecondPriceTag";
import PaymentSection from "./paymentSection/PaymentSection";
import AccountSection from "./accountSection/AccountSection";
import AgreementSection from "./agreementSection/AgreementSection";
import {
  useSelectedItemStore,
  useToastStore,
  useUserInfoStore,
} from "@/store/store";
import usePreventLeave from "@/hooks/usePreventLeave";
// import { useNavigate } from "react-router-dom";

const TransferWritingPrice = () => {
  // const navigate = useNavigate();
  const selectedItem = useSelectedItemStore((state) => state.selectedItem);
  usePreventLeave(true);
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const setToastConfig = useToastStore((state) => state.setToastConfig);

  // first price value
  const [firstPrice, setFirstPrice] = useState("");
  const [is2ndChecked, setIs2ndChecked] = useState(false); // activating 2nd price value
  const firstCheckRef = useRef(null);
  const firstInputRef = useRef(null);

  // second price value
  const [secondPrice, setSecondPrice] = useState("");
  const [downTimeAfter, setDownTimeAfter] = useState("");
  const secondPriceInputRef = useRef(null);
  const secondTimeInputRef = useRef(null);

  // Terms in second price Values
  const [opt1, setOpt1] = useState(false);
  const [opt2, setOpt2] = useState(false);
  const [opt3, setOpt3] = useState(false);
  const [optFinal, setOptFinal] = useState(false);

  // finally able to submit
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  useEffect(() => {
    setReadyToSubmit(() => {
      if (firstPrice && opt1 && opt2 && opt3 && optFinal) {
        // accountNumber 추가
        if (!is2ndChecked) return true; // 2차 가격 설정하기 체크 안 한 경우

        if (is2ndChecked && secondPrice && downTimeAfter) {
          return true; // 2차 가격 설정한 경우
        } else if (is2ndChecked && !secondPrice && !downTimeAfter) {
          return true; // 2차 가격 체크했지만 아무것도 쓰지 않은 경우는 일단 가능
        } else if (is2ndChecked && !secondPrice && downTimeAfter) {
          return false; // 2차 가격 체크하고 2차 가격 입력 안 하고 시간만 입력한 경우
        } else if (is2ndChecked && secondPrice && !downTimeAfter) {
          return false; // 2차 가격 체크하고 2차 시간 입력 안 하고 가격만 입력한 경우
        }
      }

      return false; // 1차가격 설정과 약관 동의 안한 경우
    });
  }, [
    firstPrice,
    opt1,
    opt2,
    opt3,
    optFinal,
    is2ndChecked,
    secondPrice,
    downTimeAfter,
  ]);

  const submitHandler = () => {
    if (!readyToSubmit) {
      const firstPriceNum = Number(firstPrice.split(",").join(""));
      const secondPriceNum = Number(secondPrice.split(",").join(""));
      const downTimeAfterNum = Number(downTimeAfter);
      let message = [<></>];

      if (!firstPriceNum) {
        message = [<>1차 가격을 설정해주세요</>];
        setToastConfig({
          isShow: true,
          isError: true,
          strings: message,
        });
        if (firstInputRef.current) {
          (firstInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 1차 가격이 판매가보다 높을 때
      } else if (firstPriceNum > selectedItem.purchasePrice) {
        message = [<>판매가격이 구매가보다 높아요! 판매가격을 확인해주세요</>];
        setToastConfig({
          isShow: true,
          isError: true,
          strings: message,
        });
        if (firstInputRef.current) {
          (firstInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 2차 가격이 1차 가격보다 높을 때
      } else if (secondPriceNum > firstPriceNum) {
        message = [<>2차가격은 1차 가격보다 낮게 설정해주세요</>];
        setToastConfig({
          isShow: true,
          isError: true,
          strings: message,
        });
        if (secondPriceInputRef.current) {
          (secondPriceInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 2차가격 인하 시간을 3시간 이하로 설정했을 때
      } else if (downTimeAfterNum && downTimeAfterNum < 3) {
        message = [<>체크인 3시간 전까지만 2차 가격 설정이 가능해요</>];
        setToastConfig({
          isShow: true,
          isError: true,
          strings: message,
        });
        if (secondTimeInputRef.current) {
          (secondTimeInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 2차 가격만 입력하고 2차 기준시간은 입력 안 했을 때
      } else if (is2ndChecked && secondPrice && !downTimeAfter) {
        message = [<>2차 가격으로 내릴 시간을 입력해주세요</>];
        setToastConfig({
          isShow: true,
          isError: true,
          strings: message,
        });
        if (secondTimeInputRef.current) {
          (secondTimeInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 2차 기준시간만 입력하고 2차 가격은 입력 안 했을 때
      } else if (is2ndChecked && !secondPrice && downTimeAfter) {
        message = [<>2차 가격을 입력해주세요</>];
        setToastConfig({
          isShow: true,
          isError: true,
          strings: message,
        });
        if (secondPriceInputRef.current) {
          (secondPriceInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
      }
      // 약관 동의를 다 안 했을 때
      else if (!opt1 || !opt2 || !opt3 || !optFinal) {
        message = [<>판매 진행 약관에 동의해주세요</>];
        setToastConfig({
          isShow: true,
          isError: true,
          strings: message,
        });

        // 계좌를 입력 안 한 경우
      } else if (!userInfo.accountNumber) {
        message = [<>계좌를 입력해주세요</>];
        setToastConfig({
          isShow: true,
          isError: true,
          strings: message,
        });
      }

      setTimeout(() => {
        setToastConfig({
          isShow: false,
          isError: true,
          strings: message,
        });
      }, 5000);
      return;
    }

    const confirmToProceed = confirm("판매 게시물을 등록하시겠어요?");
    if (confirmToProceed) {
      // navigate()
    }
  };

  return (
    <S.Container layout>
      <FirstPriceTag
        checkRef={firstCheckRef}
        inputRef={firstInputRef}
        purchasePrice={selectedItem.purchasePrice}
        inputData={firstPrice}
        onFirstPriceChange={setFirstPrice}
        is2ndChecked={is2ndChecked}
        on2ndChecked={setIs2ndChecked}
      />
      <PaymentSection
        price={firstPrice}
        is2ndChecked={is2ndChecked}
        title="1차 판매 체결 시 예상 정산금액"
      />
      {is2ndChecked && (
        <>
          <SecondPriceTag
            secondPriceInputRef={secondPriceInputRef}
            secondTimeInputRef={secondTimeInputRef}
            firstPrice={firstPrice}
            secondPriceData={secondPrice}
            onSecondPriceChange={setSecondPrice}
            downTimeAfter={downTimeAfter}
            onDownTimeAfterChange={setDownTimeAfter}
            remainingDays={selectedItem.remainingDays}
            remainingTimes={selectedItem.remainingTimes}
            startDate={selectedItem.startDate}
            endDate={selectedItem.endDate}
          />
          <PaymentSection
            price={secondPrice}
            is2ndChecked
            title="2차 판매 체결 시 예상 정산금액"
          />
        </>
      )}
      <AccountSection />
      <AgreementSection
        setOpt1={setOpt1}
        setOpt2={setOpt2}
        setOpt3={setOpt3}
        setOptFinal={setOptFinal}
        optFinal={optFinal}
      />
      <S.ButtonSection $readyToSubmit={readyToSubmit}>
        <button onClick={submitHandler}>판매 게시물 올리기</button>
      </S.ButtonSection>
    </S.Container>
  );
};

export default TransferWritingPrice;
