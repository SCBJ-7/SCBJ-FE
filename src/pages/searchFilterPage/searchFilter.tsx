import { useState } from "react";
import * as S from "./SearchFilter.style";
import RegionModal from "./components/regionModal/RegionModal";
import PeopleCounter from "./components/peopleCounter/PeopleCounter";
import CalendarModal from "./components/calendarModal/CalendarModal";
const SearchFilter = () => {
  const [regionIsModalOpen, setRegionIsModalOpen] = useState(false);
  const [dateIsModalOpen, setDateIsModalOpen] = useState(false);
  const [location, setLocation] = useState<string | null>(null);
  const [maximumPeople, setMaximumPeople] = useState<number>(0);
  const [checkIn, setCheckIn] = useState<string | null>(null);
  const [checkOut, setCheckOut] = useState<string | null>(null);

  const handleRegionModal = () => {
    setRegionIsModalOpen(true);
  };
  const handleDateModal = () => {
    setDateIsModalOpen(true);
  };

  console.log("rendering");
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
            <S.FilterModalButton>언제든지</S.FilterModalButton>
          </S.FilterBlock>

          <S.FilterBlock>
            <S.FilterSubTitle>인원</S.FilterSubTitle>
            <PeopleCounter
              maximumPeople={maximumPeople}
              setMaximumPeople={setMaximumPeople}
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
        <S.ResetButtonContent>
          <div>초기화</div>
          <div>
            <S.ResetButton />
          </div>
        </S.ResetButtonContent>
        <S.SearchButton>검색하기</S.SearchButton>
      </S.FilterBottom>
    </>
  );
};

export default SearchFilter;
