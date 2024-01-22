import XIcon from "@assets/icons/ic_x.png";
import PercentHotelLogo from "@assets/logos/Percent-hotel_logo.png";
import YanoljaLogo from "@assets/logos/Yanolja_CI.png";
import { PATH } from "@constants/path";
import { useNavigate } from "react-router-dom";

import * as S from "./IntroPage.style.ts";

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <S.PageContainer>
      <S.MainWrapper>
        <S.PercentHotelLogo>
          <img src={PercentHotelLogo} alt="퍼센트호텔 로고" />
        </S.PercentHotelLogo>
        <S.XIcon>
          <img src={XIcon} alt="x" />
        </S.XIcon>
        <S.YanoljaLogo>
          <img src={YanoljaLogo} alt="야놀자 로고" />
        </S.YanoljaLogo>
        <S.Title>
          야놀자 계정 연동하고
          <br />
          쉽고 빠르게 거래하기
        </S.Title>
      </S.MainWrapper>
      <S.BottomWrapper>
        <S.Button
          type="button"
          variant="solid"
          onClick={() => navigate(PATH.YANOLJA_ACCOUNT + "/verify")}
        >
          계정 연동하기
        </S.Button>

        <S.Button type="button" variant="outline" onClick={() => navigate(-1)}>
          다음에 하기
        </S.Button>
      </S.BottomWrapper>
    </S.PageContainer>
  );
};

export default IntroPage;
