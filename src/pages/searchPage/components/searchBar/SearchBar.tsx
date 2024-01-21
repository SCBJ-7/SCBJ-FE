import { useNavigate } from "react-router-dom";
import * as S from "./SearchBar.style";
import { PATH } from "@/constants/path";
import { useSearchFilterInfoStore } from "@store/store";

const SearchBar = () => {
  const navigate = useNavigate();
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);
  const isDisabled =
    searchInfo.checkIn === null &&
    searchInfo.checkOut === null &&
    searchInfo.maximumPeople === 0 &&
    searchInfo.location === null;

  const searchBarContent = `${
    searchInfo.location ? `${searchInfo.location} / ` : ""
  }${searchInfo.checkIn || ""}${
    searchInfo.checkOut && searchInfo.checkIn ? " ~ " : ""
  }${searchInfo.checkOut || ""}${
    (searchInfo.location || searchInfo.checkOut) && searchInfo.maximumPeople
      ? " / "
      : ""
  }${
    searchInfo.maximumPeople !== null && searchInfo.maximumPeople > 0
      ? `${searchInfo.maximumPeople}인`
      : ""
  }`.trim();

  const handleSearchBar = () => {
    navigate(PATH.SEARCH_FILTER);
  };
  return (
    <>
      <S.SearchBarFixContainer onClick={handleSearchBar}>
        <S.SearchBarContainer>
          <S.SearchBarInput>
            <S.SearchRegion>
              <div>
                {isDisabled ? "어떤 호텔을 찾으세요?" : searchBarContent}
              </div>
              <div>
                <S.SearchBarIcon />
              </div>
            </S.SearchRegion>
          </S.SearchBarInput>
        </S.SearchBarContainer>
      </S.SearchBarFixContainer>
    </>
  );
};

export default SearchBar;
