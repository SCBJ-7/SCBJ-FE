import XIcon from "@assets/icons/ic_x.png";
import PercentHotelLogo from "@assets/logos/Percent-hotel_logo_b.png";
import YanoljaLogo from "@assets/logos/Yanolja_CI.png";
import { PATH } from "@constants/path";
import { useNavigate } from "react-router-dom";

import * as S from "./IntroPage.style.ts";

import ProgressiveImg from "@/components/progressiveImg/ProgressiveImg.tsx";

const IntroPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.7,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.7,
      },
    },
  };

  return (
    <S.PageContainer>
      <S.MainWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <S.PercentHotelLogo>
          <ProgressiveImg src={PercentHotelLogo} alt="퍼센트호텔 로고" />
        </S.PercentHotelLogo>
        <S.XIcon>
          <ProgressiveImg src={XIcon} alt="x" />
        </S.XIcon>
        <S.YanoljaLogo>
          <ProgressiveImg src={YanoljaLogo} alt="야놀자 로고" />
        </S.YanoljaLogo>
        <S.Title variants={titleVariants} initial="hidden" animate="visible">
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
