import { useNavigate } from "react-router-dom";
import * as S from "./MainHeader.style";
import MainLogo from "@assets/logos/main_logo.svg?react";
import { useState } from "react";
import { PATH } from "@constants/path";

const MainHeader = () => {
  const [isAlarmOn, setIsAlarmOn] = useState(false);
  const navigate = useNavigate();

  const alertHandler = () => {
    setIsAlarmOn(false);
    navigate(PATH.NOTICE);
  };

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <MainLogo />
        <section>
          <S.bellIcon onClick={alertHandler} />
          <S.bellAlertOn $isAlarmOn={isAlarmOn} />
        </section>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default MainHeader;
