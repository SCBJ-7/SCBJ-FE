import * as S from "./TransferWritingSuccess.style";
import PercentHotelIcon from "@assets/icons/ic_percent_hotel.png";
import PercentHotelLogo from "@assets/logos/Percent-hotel_logo_b.png";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";
import { useSearchParams } from "react-router-dom";
import AccountBottomSheet from "./accountBottomSheet/AccountBottomSheet";
import { useEffect, useState } from "react";

const TransferWritingSuccess = () => {
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
    <S.Container>
      <S.MainWrapper>
        <S.PercentHotelLogo>
          <img src={PercentHotelLogo} alt="퍼센트호텔 로고" />
        </S.PercentHotelLogo>
        <S.PercentHotelIcon>
          <img src={PercentHotelIcon} alt="퍼센트호텔 아이콘" />
        </S.PercentHotelIcon>
        <S.TitleWrapper>
          <S.Title>판매 게시물 등록 완료!</S.Title>
          <S.SubTitle>상품이 판매되면 알림으로 알려드릴게요!</S.SubTitle>
        </S.TitleWrapper>
      </S.MainWrapper>
      <S.Button variant="solid" onClick={doneHandler}>
        내 판매내역 확인하기
      </S.Button>
      <AccountBottomSheet content={content} onSetContent={setContent} />
    </S.Container>
  );
};

export default TransferWritingSuccess;
