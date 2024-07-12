import { useEffect, useRef, useState } from "react";

import AccountSection from "./accountSection/AccountSection";
import EnterAccountInfo from "./enterAccountInfo/EnterAccountInfo";
import FirstPriceTag from "./firstPriceTag/FirstPriceTag";
import ItemInfoSection from "./itemInfo/ItemInfo";
import PaymentSection from "./paymentSection/PaymentSection";
import PriceSection from "./priceSection/PriceSection";
import SecondPriceTag from "./secondPriceTag/SecondPriceTag";
import { Modal } from "./sellerComment/Modal";
import SellerCommentSection from "./sellerComment/SellerComment";
import TransferNavigation from "./transferNavigation/transferNavigation";
import * as S from "./TransferWritingPrice.style";
import TransferPricingHeader from "./transferWritingPriceHeader/TransferPricingHeaderTop";
import usePostTransferItems from "../../hooks/api/usePostTransferItems";
import useChangePage from "../../hooks/common/useChangePage";
import useReadyToSubmit from "../../hooks/common/useReadyToSubmit";
import useSubmitHandler from "../../hooks/common/useSubmitHandler";

import { HelmetTag } from "@/components/Helmet/Helmet";
import { useUserInfoQuery } from "@/hooks/api/useUserInfoQuery";
import usePreventLeave from "@/hooks/common/usePreventLeave";
import useTransferNavigation from "@/hooks/common/useTransferNavigation";
import { useSelectedItemStore } from "@/store/store";
// import { ProfileData } from "@/types/profile";
import { type SellerCommentType } from "@/types/sellerComments";

// const userData: ProfileData = {
//   accountNumber: "123123123123123",
//   bank: "신한",
//   email: "jove0729@naver.com",
//   id: 123,
//   linkedToYanolja: true,
//   phone: "010-4922-3563",
//   name: "Bumang",
// };

const TransferWritingPriceView = () => {
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

  // 모달
  const [modalType, setModalType] = useState<"SELLER" | "AGREEMENT">("SELLER");
  const [sellerComments, setSellerComments] = useState<SellerCommentType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const { handleAddPhaseHistory, handleSubPhaseHistory, phase } =
    useTransferNavigation({ firstPrice, setIs2ndChecked });

  const handleOpenAgreement = () => {
    setModalType("AGREEMENT");
    setIsModalOpen(true);
  };

  const handleOpenSeller = () => {
    setModalType("SELLER");
    setIsModalOpen(true);
  };

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
    phase,
    handleSubPhaseHistory,
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
    <S.Container>
      <TransferPricingHeader />
      {accountSetting === "none" && <ItemInfoSection />}
      {accountSetting === "none" && phase !== "finalConfirm" && (
        <PriceSection phase={phase} firstPrice={firstPrice} />
      )}
      {accountSetting === "none" && phase === "1stInput" && (
        <FirstPriceTag
          checkRef={firstCheckRef}
          inputRef={firstInputRef}
          purchasePrice={selectedItem.purchasePrice}
          inputData={firstPrice}
          onFirstPriceChange={setFirstPrice}
        />
      )}
      {accountSetting === "none" && phase === "2ndInput" && (
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
      )}
      {accountSetting === "none" && phase === "finalConfirm" && (
        <>
          <PaymentSection
            type="first"
            price={firstPrice}
            is2ndChecked={is2ndChecked}
            title={
              is2ndChecked
                ? "1차 거래 체결 시 예상 정산금액"
                : "거래 채결 시 예상 정산금액"
            }
          />
          {is2ndChecked && (
            <PaymentSection
              type="second"
              price={secondPrice}
              is2ndChecked
              title={"2차 거래 체결 시 예상 정산금액"}
            />
          )}
          <AccountSection
            bank={bank}
            accountNumber={accountNumber}
            onSetAccount={setAccountSetting}
          />
          <SellerCommentSection //
            sellerComments={sellerComments}
            setIsModalOpen={handleOpenSeller}
          />
          <S.Gutters />
        </>
      )}

      {accountSetting === "enter" && (
        <EnterAccountInfo
          accountNumber={accountNumber}
          bank={bank}
          onSetAccountNumber={setAccountNumber}
          onSetBank={setBank}
          onSubmitAccount={setAccountSetting}
        />
      )}

      {accountSetting === "none" && (
        <TransferNavigation //
          phase={phase}
          onAddHistory={handleAddPhaseHistory}
          onSubmit={handleOpenAgreement}
        />
      )}
      <Modal
        modalType={modalType}
        sellerComments={sellerComments}
        setSellerComments={setSellerComments}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        submitHandler={submitHandler}
        opt1={opt1}
        opt2={opt2}
        opt3={opt3}
        optFinal={optFinal}
        setOpt1={setOpt1}
        setOpt2={setOpt2}
        setOpt3={setOpt3}
        setOptFinal={setOptFinal}
      />
    </S.Container>
  );
};

const TransferWritingPrice = () => {
  const schemaData = {
    "@type": "WebPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}${location.pathname}}`,
    },
  };

  return (
    <>
      <HelmetTag title="판매글 작성" schemaData={schemaData} />
      <TransferWritingPriceView />
    </>
  );
};

export default TransferWritingPrice;
