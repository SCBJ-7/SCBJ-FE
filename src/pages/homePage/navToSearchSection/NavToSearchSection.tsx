import { useNavigate } from "react-router-dom";
import * as S from "./NavToSearchSection.style";
import { PATH } from "@constants/path";

const NavToSearchSection = () => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(PATH.SEARCHLIST)}>
      <h4>어떤 호텔을 찾으세요?</h4>
      <S.SearchIcon />
    </S.Container>
  );
};

export default NavToSearchSection;
