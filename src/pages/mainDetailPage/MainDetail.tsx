import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import MainTheme from "./components/MainTheme/MainTheme";
import RegionButton from "./components/RegionButton/RegionButton";
import * as S from "./MainDetail.style";

import { fetchSearchList } from "@/apis/fetchSeachList";
import ArrowIcon from "@/assets/icons/ic_arrow.svg?react";
import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import SearchItem from "@/pages/searchPage/components/searchItem/SearchItem";
import { ISearchList } from "@/types/searchList";

const MainDetail = () => {
  const pageSize = 10;

  const [selectedRegion, setSelectedRegion] = useState("전체");
  const [scrollPosition, setScrollPosition] = useState(0);

  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);
  const searchInfo = {
    brunch: null,
    checkIn: null,
    checkOut: null,
    location: selectedRegion === "전체" ? null : selectedRegion,
    oceanView: null,
    pool: null,
    quantityPeople: 0,
    sorted: null,
  };
  const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery({
    queryKey: [
      "searchItems",
      searchInfo.location,
      searchInfo.checkIn,
      searchInfo.checkOut,
      searchInfo.quantityPeople,
      searchInfo.sorted,
      searchInfo.brunch,
      searchInfo.pool,
      searchInfo.oceanView,
    ],
    queryFn: ({ pageParam = 0 }) =>
      fetchSearchList(
        searchInfo.location,
        searchInfo.checkIn,
        searchInfo.checkOut,
        searchInfo.quantityPeople,
        searchInfo.sorted,
        searchInfo.brunch,
        searchInfo.pool,
        searchInfo.oceanView,
        pageParam,
        pageSize,
      ),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const lastData = lastPage?.content;
      return lastData && lastData.length === pageSize
        ? lastPage?.number + 1
        : undefined;
    },
  });

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
    setScrollPosition(currentPosition);
    setIsTopButtonVisible(currentPosition > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const MoveToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log("a");
  return (
    <S.Container>
      <MainTheme />
      <RegionButton
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      <S.SearchContainer>
        {!isLoading && data && !data?.pages?.[0]?.content?.length && (
          <S.NoResultCover>
            <S.NoResultText>검색 조건에 맞는 호텔이 없어요</S.NoResultText>
            <S.NoResultTextTwo>
              다른 지역과 날짜로 변경해보세요
            </S.NoResultTextTwo>
          </S.NoResultCover>
        )}
        <S.SearchItemFlex>
          {data &&
            data.pages?.length > 0 &&
            data.pages.map((page) =>
              page?.content.map((item: ISearchList) => (
                <SearchItem key={item.id} item={item} />
              )),
            )}
        </S.SearchItemFlex>
        <div ref={ref} />
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
export default MainDetail;
