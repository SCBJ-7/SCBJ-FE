import { useNavigate } from "react-router-dom";
import * as S from "./MainHeader.style";
import MainLogo from "@assets/logos/main_logo.svg?react";

const MainHeader = () => {
  const naivgate = useNavigate();

  const alertHandler = () => {
    naivgate("/alert");
  };

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <MainLogo />
        <section>
          <S.bellIcon onClick={alertHandler} />
          <S.bellAlertOn />
        </section>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default MainHeader;
