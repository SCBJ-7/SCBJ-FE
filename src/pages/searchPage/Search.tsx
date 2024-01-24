import SearchBar from "./components/searchBar/SearchBar";
import SearchNav from "./components/searchNav/SearchNav";
import * as S from "./Search.style";
import { useEffect, useRef, useState } from "react";
import { ISearchList } from "@/types/searchList";
import SearchItem from "./components/searchItem/SearchItem";
import { useSearchFilterInfoStore } from "@store/store";
import { fetchSearchList } from "@apis/fetchSeachList";
import { useInfiniteQuery } from "@tanstack/react-query";
import UseIntersectionObserver from "@hooks/useIntersectionObserver";

const Search = () => {
  const pageSize = 10;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
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
      queryFn: ({ pageParam = 1 }) =>
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
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => {
        const lastData = lastPage?.content;
        console.log("last", lastData.length);
        return lastData && lastData.length === pageSize
          ? pages[0]?.number + 1
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
  const MoveToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const currentPosition = scrollContainerRef.current.scrollTop;
        setScrollPosition(currentPosition);
      }
    };

    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollContainerRef]);
  console.log("isFetchingNextPage", isFetchingNextPage);
  return (
    <>
      <SearchBar />
      <SearchNav />

      <S.SearchContainer>
        {isLoading && <div></div>}

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
            data.pages.map(
              (page) =>
                page?.content.map((item: ISearchList) => (
                  <SearchItem key={item.id} item={item} />
                )),
            )}
        </S.SearchItemFlex>
        <div ref={(node) => setTarget(node)} />
      </S.SearchContainer>

      <S.TopButton $visible={scrollPosition > 500} onClick={MoveToTop} />
    </>
  );
};
export default Search;
