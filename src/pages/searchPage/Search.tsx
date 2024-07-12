import { useEffect, useState } from "react";

import SearchBar from "./components/searchBar/SearchBar";
import SearchItem from "./components/searchItem/SearchItem";
import SearchNav from "./components/searchNav/SearchNav";
import * as S from "./Search.style";

import type { ISearchFilterInfo } from "@/types/searchFilterInfo";
import type { ISearchList } from "@/types/searchList";

import ArrowIcon from "@/assets/icons/ic_arrow.svg?react";
import { HelmetTag } from "@/components/Helmet/Helmet";
import { useInfiniteSearchQuery } from "@/hooks/api/useSearchQuery";
import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import { useSearchFilterInfoStore } from "@/store/store";

const SearchView = ({ searchInfo }: { searchInfo: ISearchFilterInfo }) => {
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);
  const { data, fetchNextPage, isLoading, hasNextPage } =
    useInfiniteSearchQuery(searchInfo);

  const handleIntersect = (isIntersecting: boolean) => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  };

  const { ref } = useIntersectionObserver({
    onChange: handleIntersect,
    threshold: 0.5,
  });

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setIsTopButtonVisible(currentPosition > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MoveToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <S.Container>
      <SearchBar />
      <SearchNav />
      <S.SearchContainer>
        {!isLoading && data?.pages?.[0]?.empty && (
          <S.NoResultCover>
            <S.NoResultText>검색 조건에 맞는 호텔이 없어요</S.NoResultText>
            <S.NoResultTextTwo>
              다른 지역과 날짜로 변경해보세요
            </S.NoResultTextTwo>
          </S.NoResultCover>
        )}
        <S.SearchItemFlex>
          {data &&
            !data.pages?.[0].empty &&
            data.pages.map((page) =>
              page?.content.map((item: ISearchList) => (
                <SearchItem key={item.id} item={item} />
              )),
            )}
        </S.SearchItemFlex>
        {!isLoading && hasNextPage && <div ref={ref} />}
        <S.TopButtonCover>
          <S.TopButton
            className={isTopButtonVisible ? "visible" : ""}
            onClick={MoveToTop}
          >
            <ArrowIcon />
          </S.TopButton>
        </S.TopButtonCover>
      </S.SearchContainer>
    </S.Container>
  );
};

const Search = () => {
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);

  const schemaData = {
    "@type": "SearchResultsPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}/search`,
    },
    about: {
      "@type": "HotelSearch",
      checkinTime: searchInfo.checkIn,
      checkoutTime: searchInfo.checkOut,
      location: {
        "@type": "Place",
        name: searchInfo.location,
      },
      occupancy: {
        "@type": "QuantitativeValue",
        value: searchInfo.quantityPeople,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${location.origin}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <HelmetTag
        title="검색 결과"
        schemaType="SearchResultsPage"
        schemaData={schemaData}
      />
      <SearchView searchInfo={searchInfo} />
    </>
  );
};

export default Search;
