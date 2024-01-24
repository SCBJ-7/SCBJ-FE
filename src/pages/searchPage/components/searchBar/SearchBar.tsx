import { useNavigate } from "react-router-dom";
import * as S from "./SearchBar.style";
import { PATH } from "@/constants/path";
import { useSearchFilterInfoStore } from "@store/store";
import { formatDateMonthAndDay } from "@utils/dateFomaterMonthDay";

const SearchBar = () => {
  const navigate = useNavigate();
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);

  let searchBarContent = "어떤 호텔을 찾으세요?";
  if (searchInfo.location && searchInfo.checkOut && searchInfo.quantityPeople) {
    searchBarContent = `${searchInfo.location} / ${formatDateMonthAndDay(
      searchInfo.checkIn,
    )} ~ ${formatDateMonthAndDay(searchInfo.checkOut)} / ${
      searchInfo.quantityPeople
    }명`;
  } else if (searchInfo.location && searchInfo.checkOut) {
    searchBarContent = `${searchInfo.location} / ${formatDateMonthAndDay(
      searchInfo.checkIn,
    )} ~ ${formatDateMonthAndDay(searchInfo.checkOut)}`;
  } else if (searchInfo.location && searchInfo.quantityPeople) {
    searchBarContent = `${searchInfo.location} / ${searchInfo.quantityPeople}명`;
  } else if (searchInfo.location) {
    searchBarContent = `${searchInfo.location}`;
  } else if (searchInfo.checkOut && searchInfo.quantityPeople) {
    searchBarContent = `${formatDateMonthAndDay(
      searchInfo.checkIn,
    )} ~ ${formatDateMonthAndDay(searchInfo.checkOut)} / ${
      searchInfo.quantityPeople
    }명`;
  } else if (searchInfo.checkOut) {
    searchBarContent = `${formatDateMonthAndDay(
      searchInfo.checkIn,
    )} ~ ${formatDateMonthAndDay(searchInfo.checkOut)}`;
  } else if (searchInfo.quantityPeople) {
    searchBarContent = `${searchInfo.quantityPeople}명`;
  }

  const handleSearchBar = () => {
    navigate(PATH.SEARCH_FILTER);
  };
  return (
    <>
      <S.SearchBarFixContainer onClick={handleSearchBar}>
        <S.SearchBarContainer>
          <S.SearchBarInput>
            <S.SearchRegion>
              <div>{searchBarContent}</div>
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
