import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import type { ISearchFilterInfo } from "@/types/searchFilterInfo";

import { fetchSearchList } from "@/apis/fetchSeachList";

export const useInfiniteSearchQuery = (searchInfo: ISearchFilterInfo) => {
  const pageSize = 10;

  return useSuspenseInfiniteQuery({
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
};
