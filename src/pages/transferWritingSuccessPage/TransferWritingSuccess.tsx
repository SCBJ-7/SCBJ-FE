import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import AccountBottomSheet from "./accountBottomSheet/AccountBottomSheet";
import * as S from "./TransferWritingSuccess.style";

import PercentHotelLogo from "@/assets/logos/Percent-hotel_logo_b.png";
import { HelmetTag } from "@/components/Helmet/Helmet";
import Success from "@/components/lottie/success/Success";
import { PATH } from "@/constants/path";

const TransferWritingSuccessView = () => {
  const [content, setContent] = useState<
    "default" | "agreement" | "firstlyNoAccount"
  >("default");

  const [searchParams] = useSearchParams();
  const firstlyNoAccount = searchParams.get("FNA");

  useEffect(() => {
    if (firstlyNoAccount === "true") {
      setContent("firstlyNoAccount");
    }
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  const doneHandler = () => {
    navigate(PATH.SALE_LIST);
  };

  return (
    <S.PageContainer>
      <S.MainWrapper>
        <S.PercentHotelLogo>
          <img src={PercentHotelLogo} alt="퍼센트호텔 로고" />
        </S.PercentHotelLogo>
        <S.LottieWrapper>
          <Success />
        </S.LottieWrapper>
        <S.TitleWrapper>
          <S.Title>판매 게시물 등록 완료!</S.Title>
          <S.SubTitle>상품이 판매되면 알림으로 알려드릴게요!</S.SubTitle>
        </S.TitleWrapper>
      </S.MainWrapper>
      <S.BottomWrapper>
        <S.Button variant="solid" onClick={doneHandler}>
          내 판매내역 확인하기
        </S.Button>
      </S.BottomWrapper>
      <AccountBottomSheet content={content} onSetContent={setContent} />
    </S.PageContainer>
  );
};

const TransferWritingSuccess = () => {
  const schemaData = {
    "@type": "WebPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}${location.pathname}}`,
    },
  };

  return (
    <>
      <HelmetTag title="판매 성공" schemaData={schemaData} />
      <TransferWritingSuccessView />
    </>
  );
};

export default TransferWritingSuccess;
