import * as S from "./bottomNav.styled";
import { PATH } from "../../constants/path";

const BottomNav = () => {
  return (
    <S.BottomNavContainer>
      <S.BottomNavWrapper>
        <S.BottomNavCell to={PATH.ROOT}>
          <></>홈
        </S.BottomNavCell>
        <S.BottomNavCell to={PATH.WRITE_TRANSFER}>
          <S.NavIconsTransfer />
          양도하기
        </S.BottomNavCell>
        <S.BottomNavCell to={PATH.SEARCHLIST}>
          <S.NavIconsSearch />
          호텔검색
        </S.BottomNavCell>
        <S.BottomNavCell to={PATH.MY_PAGE}>
          <S.NavIconsMy />
          마이
        </S.BottomNavCell>
      </S.BottomNavWrapper>
    </S.BottomNavContainer>
  );
};

export default BottomNav;
