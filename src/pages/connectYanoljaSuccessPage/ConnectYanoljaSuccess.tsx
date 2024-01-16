import * as S from "./ConnectYanoljaSuccess.style";
import PercentHotelLogo from "@assets/logos/Percent-hotel_logo_b.png";
import PercentHotelIcon from "@assets/icons/ic_percent_hotel.png";
import { PATH } from "@constants/path";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ConnectYanoljaSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.success) {
      navigate("/");
    }
  }, [navigate, location.state]);

  return (
    <S.PageContainer>
      <S.MainWrapper>
        <S.PercentHotelLogo>
          <img src={PercentHotelLogo} alt="퍼센트호텔 로고" />
        </S.PercentHotelLogo>
        <S.PercentHotelIcon>
          <img src={PercentHotelIcon} alt="퍼센트호텔 아이콘" />
        </S.PercentHotelIcon>
        <S.Title>계정 연동 완료!</S.Title>
        <S.SubTitle>
          매진된 야놀자 상품을 퍼센트 호텔에서
          <br /> 합리적인 가격으로 만나보세요!
        </S.SubTitle>
      </S.MainWrapper>
      <S.BottomWrapper>
        <S.Button
          type="button"
          variant="solid"
          onClick={() => navigate(PATH.WRITE_TRANSFER)}
        >
          판매글 작성하기
        </S.Button>
      </S.BottomWrapper>
    </S.PageContainer>
  );
};

export default ConnectYanoljaSuccess;
