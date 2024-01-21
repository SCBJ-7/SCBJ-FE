import { useState } from "react";
import * as S from "./SearchFilter.style";
import RegionModal from "./components/regionModal/RegionModal";
import PeopleCounter from "./components/peopleCounter/PeopleCounter";
import CalendarModal from "./components/calendarModal/CalendarModal";
import { useSearchFilterInfoStore } from "@store/store";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";
import { formatDateMonthAndDay } from "@utils/dateFomaterMonthDay";
const SearchFilter = () => {
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);
  const setSearchInfo = useSearchFilterInfoStore(
    (state) => state.setSearchInfo,
  );
  const [regionIsModalOpen, setRegionIsModalOpen] = useState(false);
  const [dateIsModalOpen, setDateIsModalOpen] = useState(false);
  const [location, setLocation] = useState<string | null>(searchInfo.location);
  const [quantityPeople, setQuantityPeople] = useState<number>(
    searchInfo.quantityPeople ? searchInfo.quantityPeople : 0,
  );
  const [checkIn, setCheckIn] = useState<string | null>(searchInfo.checkIn);
  const [checkOut, setCheckOut] = useState<string | null>(searchInfo.checkOut);
  const isDisabled =
    checkIn === null &&
    checkOut === null &&
    quantityPeople === 0 &&
    location === null;
  const navigate = useNavigate();

  const handleRegionModal = () => {
    setRegionIsModalOpen(true);
  };

  const handleDateModal = () => {
    setDateIsModalOpen(true);
  };

  const handleReset = () => {
    setLocation(null);
    setCheckOut(null);
    setCheckIn(null);
    setQuantityPeople(0);
  };

  const handleSearch = () => {
    setSearchInfo({ location, quantityPeople, checkIn, checkOut });
    navigate(PATH.SEARCHLIST);
  };

  return (
    <>
      <S.FilterContainer>
        <S.FilterContent>
          <S.FilterTitle>어떤 호텔을 찾으세요?</S.FilterTitle>
          <S.FilterBlock onClick={handleRegionModal}>
            <S.FilterSubTitle>지역</S.FilterSubTitle>
            <S.FilterModalButton>
              {location ? location : "어디든지"}
            </S.FilterModalButton>
          </S.FilterBlock>
          <S.FilterBlock onClick={handleDateModal}>
            <S.FilterSubTitle>일정</S.FilterSubTitle>
            <S.FilterModalButton>
              {checkIn && checkOut
                ? `${formatDateMonthAndDay(checkIn)} ~ ${formatDateMonthAndDay(
                    checkOut,
                  )}`
                : "언제든지"}
            </S.FilterModalButton>
          </S.FilterBlock>

          <S.FilterBlock>
            <S.FilterSubTitle>인원</S.FilterSubTitle>
            <PeopleCounter
              quantityPeople={quantityPeople}
              setQuantityPeople={setQuantityPeople}
            />
          </S.FilterBlock>
        </S.FilterContent>
        {regionIsModalOpen && (
          <RegionModal
            setRegionIsModalOpen={setRegionIsModalOpen}
            location={location}
            setLocation={setLocation}
          />
        )}
        {dateIsModalOpen && (
          <CalendarModal
            setDateIsModalOpen={setDateIsModalOpen}
            checkIn={checkIn}
            checkOut={checkOut}
            setCheckIn={setCheckIn}
            setCheckOut={setCheckOut}
          />
        )}
      </S.FilterContainer>
      <S.FilterBottom>
        <S.ResetButtonContent
          className={isDisabled ? "disable" : ""}
          onClick={handleReset}
        >
          <div>초기화</div>
          <div>
            <S.ResetButton className={isDisabled ? "disable" : ""} />
          </div>
        </S.ResetButtonContent>
        <S.SearchButton onClick={handleSearch}>검색하기</S.SearchButton>
      </S.FilterBottom>
    </>
  );
};

export default SearchFilter;
