import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CalendarModal from "./components/calendarModal/CalendarModal";
import PeopleCounter from "./components/peopleCounter/PeopleCounter";
import RegionModal from "./components/regionModal/RegionModal";
import * as S from "./SearchFilter.style";

import { HelmetTag } from "@/components/Helmet/Helmet";
import { PATH } from "@/constants/path";
import { useSearchFilterInfoStore } from "@/store/store";
import { formatDateMonthAndDay } from "@/utils/dateFomaterMonthDay";

const SearchFilterView = () => {
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
          <S.FilterTitle>언제 어디로 떠나세요?</S.FilterTitle>
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

const SearchFilter = () => {
  const schemaData = {
    "@type": "WebPage",
    name: "퍼센트호텔 검색 필터",
    description:
      "퍼센트호텔에서 원하는 조건으로 호텔을 검색하세요. 지역, 날짜, 인원 수를 선택할 수 있습니다.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}${PATH.SEARCH_FILTER}`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${location.origin}/search?location={location}&checkIn={checkIn}&checkOut={checkOut}&people={people}`,
      },
      "query-input": [
        {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "location",
        },
        {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "checkIn",
        },
        {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "checkOut",
        },
        {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "people",
        },
      ],
    },
  };

  return (
    <>
      <HelmetTag
        title="검색 필터"
        schemaType="WebPage"
        schemaData={schemaData}
      />
      <SearchFilterView />
    </>
  );
};

export default SearchFilter;
