import SearchBar from "./components/searchBar/SearchBar";
import SearchNav from "./components/searchNav/SearchNav";
import * as S from "./Search.style";
import React, { useEffect, useRef, useState } from "react";
import { ISearchList } from "@/types/searchList";
import SearchItem from "./components/searchItem/SearchItem";
import { useSearchFilterInfoStore } from "@store/store";
import { fetchSearchList } from "@apis/fetchSeachList";
import { useInfiniteQuery } from "@tanstack/react-query";

const pageSize = 10;

const Search = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);

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

  const {
    data: searchItems,
    fetchNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
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
    initialPageParam: 1,
    getNextPageParam: (lastPage, lastPageParam) => {
      const lastData = lastPage?.data?.body;
      return lastData && lastData.length === pageSize
        ? lastPageParam + 1
        : undefined;
    },
  });
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load more data when the target element is 50% visible
          fetchNextPage();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => {
      if (scrollContainerRef.current) {
        observer.unobserve(scrollContainerRef.current);
      }
    };
  }, [scrollContainerRef, fetchNextPage]);
  console.log(searchItems?.pages[0]?.content);
  return (
    <>
      <SearchBar />
      <SearchNav />

      <S.SearchContainer ref={scrollContainerRef}>
        {!searchItems?.pages[0]?.content?.length && (
          <p style={{ color: "red" }}>
            : "An error occurred while fetching data."
          </p>
        )}
        <S.SearchItemFlex>
          {searchItems?.pages[0]?.content.map((item: ISearchList) => (
            <SearchItem key={item.id} item={item} />
          ))}
        </S.SearchItemFlex>
      </S.SearchContainer>

      <S.TopButton $visible={scrollPosition > 500} onClick={MoveToTop} />
    </>
  );
};

export default Search;
