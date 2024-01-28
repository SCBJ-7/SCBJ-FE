import { PATH } from "@constants/path";
import { useNavigate } from "react-router-dom";

import * as S from "./NavToSearchSection.style";

const NavToSearchSection = () => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(PATH.SEARCH_FILTER)}>
      <h4>언제 어디로 떠나세요?</h4>
      <S.SearchIcon />
    </S.Container>
  );
};

export default NavToSearchSection;
