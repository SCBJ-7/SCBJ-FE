import SearchBar from "./components/searchBar/SearchBar";
import SearchNav from "./components/searchNav/SearchNav";
import * as S from "./Search.style";
import { useEffect, useRef, useState } from "react";
import { ISearchList } from "@/types/searchList";
import SearchItem from "./components/searchItem/SearchItem";
import { useSearchFilterInfoStore } from "@store/store";
import { fetchSearchList } from "@apis/fetchSeachList";
import { useInfiniteQuery } from "@tanstack/react-query";
import UseIntersectionObserver from "@/hooks/common/useIntersectionObserver";
import Loading from "@/components/lottie/loading/Loading";

const Search = () => {
  const pageSize = 10;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);
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

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  const { setTarget } = UseIntersectionObserver({
    onIntersect: handleIntersect,
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
  return (
    <S.Container>
      <SearchBar />
      <SearchNav />

      <S.SearchContainer>
        {isLoading && <Loading />}
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
        <div ref={setTarget} />
        <S.TopButtonCover>
          <S.TopButton $visible={isTopButtonVisible} onClick={MoveToTop} />
        </S.TopButtonCover>{" "}
      </S.SearchContainer>
    </S.Container>
  );
};

export default Search;
