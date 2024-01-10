import { useState } from "react";
import * as S from "./TransferWritingPrice.style";

import FirstPriceTag from "./firstPriceTag/FirstPriceTag";
import SecondPriceTag from "./secondPriceTag/SecondPriceTag";
import PaymentSection from "./paymentSection/PaymentSection";
import AccountSection from "./accountSection/AccountSection";
import AgreementSection from "./agreementSection/AgreementSection";
import useSelectedItemStore from "@/store/store";

const TransferWritingPrice = () => {
  const selectedItem = useSelectedItemStore((state) => state.selectedItem);

  // first price value
  const [firstPrice, setFirstPrice] = useState("");
  const [is2ndChecked, setIs2ndChecked] = useState(false); // activating 2nd price value

  // second price value
  const [secondPrice, setSecondPrice] = useState("");
  const [downTimeAfter, setDownTimeAfter] = useState("");

  // accountNumber (전역으로 바꾸자)
  // const [accountNumber, setAccountNumber] = useState("");

  // Terms in second price Values
  const [opt1, setOpt1] = useState(false);
  const [opt2, setOpt2] = useState(false);
  const [opt3, setOpt3] = useState(false);
  const [optFinal, setOptFinal] = useState(false);

  // finally able to submit
  const [readyToSubmit] = useState(() => {
    if (firstPrice && opt1 && opt2 && opt3 && optFinal) {
      // accountNumber 추가
      if (!is2ndChecked) return true; // 2차 가격 설정하기 체크 안 한 경우

      if (is2ndChecked && secondPrice && downTimeAfter) {
        return true; // 2차 가격 설정한 경우
      } else {
        return false; // 2차 가격 체크했지만 아무것도 쓰지 않은 경우
      }
    }

    return false; // 1차가격 설정과 약관 동의 안한 경우
  });

  const submitHandler = () => {
    if (!readyToSubmit) return;
    console.log("제출 수행");
  };

  return (
    <S.Container layout>
      <FirstPriceTag
        purchasePrice={selectedItem.purchasePrice}
        inputData={firstPrice}
        onFirstPriceChange={setFirstPrice}
        is2ndChecked={is2ndChecked}
        on2ndChecked={setIs2ndChecked}
      />
      <PaymentSection
        price={firstPrice}
        is2ndChecked
        title="1차 판매 체결 시 예상 정산금액"
      />
      {is2ndChecked && (
        <>
          <SecondPriceTag
            firstPrice={firstPrice}
            secondPriceData={secondPrice}
            onSecondPriceChange={setSecondPrice}
            downTimeAfter={downTimeAfter}
            onDownTimeAfterChange={setDownTimeAfter}
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
