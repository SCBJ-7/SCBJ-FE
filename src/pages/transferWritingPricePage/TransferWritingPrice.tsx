import usePreventLeave from "@hooks/common/usePreventLeave";
import { useEffect, useRef, useState } from "react";

import AccountSection from "./accountSection/AccountSection";
import AgreementSection from "./agreementSection/AgreementSection";
import EnterAccountInfo from "./enterAccountInfo/EnterAccountInfo";
import FirstPriceTag from "./firstPriceTag/FirstPriceTag";
import PaymentSection from "./paymentSection/PaymentSection";
import SecondPriceTag from "./secondPriceTag/SecondPriceTag";
import * as S from "./TransferWritingPrice.style";
import TransferPricingHeader from "./transferWritingPriceHeader/TransferPricingHeaderTop";
import usePostTransferItems from "../../hooks/api/usePostTransferItems";
import useChangePage from "../../hooks/common/useChangePage";
import useReadyToSubmit from "../../hooks/common/useReadyToSubmit";
import useSubmitHandler from "../../hooks/common/useSubmitHandler";

import { useUserInfoQuery } from "@/hooks/api/useUserInfoQuery";
import { useSelectedItemStore } from "@/store/store";

const TransferWritingPrice = () => {
  // 현재 선택된 숙박
  const selectedItem = useSelectedItemStore((state) => state.selectedItem);

  // 유저 정보
  const userInfoQuery = useUserInfoQuery();
  const { data: userData } = userInfoQuery;

  // 1차 가격
  const [firstPrice, setFirstPrice] = useState("");
  const [is2ndChecked, setIs2ndChecked] = useState(false); // 2차 가격 설정하기 체크 여부
  // 1차 가격 HTMLElement
  const firstCheckRef = useRef(null); // 2차 가격 체크박스 ref
  const firstInputRef = useRef(null);

  // 2차 가격
  const [secondPrice, setSecondPrice] = useState("");
  const [downTimeAfter, setDownTimeAfter] = useState("");
  // 2차 가격 HTMLElement
  const secondPriceInputRef = useRef(null);
  const secondTimeInputRef = useRef(null);

  const [bank, setBank] = useState(userData?.bank ?? null);
  const [accountNumber, setAccountNumber] = useState(
    userData?.accountNumber ?? null,
  );

  // 약관 동의
  const [opt1, setOpt1] = useState(false);
  const [opt2, setOpt2] = useState(false);
  const [opt3, setOpt3] = useState(false);
  const [optFinal, setOptFinal] = useState(false);

  // 제출 가능 여부
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  useEffect(() => {
    setBank(userData?.bank ?? null);
    setAccountNumber(userData?.accountNumber ?? null);
  }, [userData]);

  // HOOKS
  // 작성 중 나가면 경고하는 훅
  usePreventLeave(true);

  // state변화에 따라 제출 버튼을 활성화/비활성화 하는 훅
  useReadyToSubmit({
    setReadyToSubmit,
    firstPrice,
    opt1,
    opt2,
    opt3,
    optFinal,
    bank,
    accountNumber,
    is2ndChecked,
    secondPrice,
    downTimeAfter,
    userData,
  });

  // 계좌 등록 페이지 <-> 판매글 작성 페이지 왔다갔다 할 때
  // state상태에 따라 체크박스나 토글 풀려있는거 복구하는 훅
  const { accountSetting, setAccountSetting } = useChangePage({
    is2ndChecked,
    firstCheckRef,
  });

  // 판매글 작성 POST 리액트 쿼리 훅
  const { mutate } = usePostTransferItems({
    firstPrice,
    secondPrice,
    downTimeAfter,
    is2ndChecked,
    opt1,
    opt2,
    opt3,
    optFinal,
    bank,
    accountNumber,
    userData,
  });

  // 정책들을 모두 검토하고 마지막에 usePostTransferItems API를 POST요청하는 훅
  const [submitHandler] = useSubmitHandler({
    readyToSubmit,
    firstPrice,
    secondPrice,
    downTimeAfter,
    firstInputRef,
    secondPriceInputRef,
    secondTimeInputRef,
    is2ndChecked,
    userData,
    mutate,
    opt1,
    opt2,
    opt3,
    optFinal,
  });

  return (
    <S.Container layout>
      <TransferPricingHeader />
      {accountSetting === "none" && (
        <>
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
            type="first"
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
                type="second"
                price={secondPrice}
                is2ndChecked
                title="2차 판매 체결 시 예상 정산금액"
              />
            </>
          )}
          <AccountSection
            bank={bank}
            accountNumber={accountNumber}
            userInfo={userData}
            onSetAccount={setAccountSetting}
          />
          <AgreementSection
            opt1={opt1}
            opt2={opt2}
            opt3={opt3}
            optFinal={optFinal}
            setOpt1={setOpt1}
            setOpt2={setOpt2}
            setOpt3={setOpt3}
            setOptFinal={setOptFinal}
          />
          <S.ButtonSection $readyToSubmit={readyToSubmit}>
            <button onClick={submitHandler}>판매 게시물 올리기</button>
          </S.ButtonSection>
        </>
      )}
      {accountSetting === "enter" && (
        <EnterAccountInfo
          accountNumber={accountNumber}
          bank={bank}
          onSetAccountNumber={setAccountNumber}
          onSetBank={setBank}
          onSubmitAccount={setAccountSetting}
        ></EnterAccountInfo>
      )}
    </S.Container>
  );
};

export default TransferWritingPrice;
