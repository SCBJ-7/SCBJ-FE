import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import SearchBar from "./components/searchBar/SearchBar";
import SearchItem from "./components/searchItem/SearchItem";
import SearchNav from "./components/searchNav/SearchNav";
import * as S from "./Search.style";

import type { ISearchList } from "@/types/searchList";

import { fetchSearchList } from "@/apis/fetchSeachList";
import ArrowIcon from "@/assets/icons/ic_arrow.svg?react";
import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import { useSearchFilterInfoStore } from "@/store/store";

const Search = () => {
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);

  const pageSize = 10;
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

export default Search;
