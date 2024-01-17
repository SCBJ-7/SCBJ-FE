import { useNavigate } from "react-router-dom";
import * as S from "./SearchBar.style";
import { PATH } from "@/constants/path";
import { useSearchFilterInfoStore } from "@store/store";

const SearchBar = () => {
  const navigate = useNavigate();
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);
  const handleSearchBar = () => {
    navigate(PATH.SEARCH_FILTER);
  };

  return (
    <>
      <S.SearchBarFixContainer onClick={handleSearchBar}>
        <S.SearchBarContainer>
          <S.SearchBarInput>
            <S.SearchRegion>어떤 호텔을 찾으세요?</S.SearchRegion>
          </S.SearchBarInput>
        </S.SearchBarContainer>
      </S.SearchBarFixContainer>
    </>
  );
};

export default SearchBar;