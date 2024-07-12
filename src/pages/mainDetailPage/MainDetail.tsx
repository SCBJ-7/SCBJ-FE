import type { InfiniteData } from "@tanstack/react-query";

import React, { useState, useEffect } from "react";

import MainTheme from "./components/MainTheme/MainTheme";
import RegionButton from "./components/RegionButton/RegionButton";
import * as S from "./MainDetail.style";

import ArrowIcon from "@/assets/icons/ic_arrow.svg?react";
import { HelmetTag } from "@/components/Helmet/Helmet";
import { useInfiniteSearchQuery } from "@/hooks/api/useSearchQuery";
import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import SearchItem from "@/pages/searchPage/components/searchItem/SearchItem";
import { ISearchList } from "@/types/searchList";

interface SearchPage {
  content: ISearchList[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

interface MainDetailViewProps {
  data: InfiniteData<SearchPage, unknown>;
  fetchNextPage: () => void;
  isLoading: boolean;
  hasNextPage: boolean | undefined;
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

const MainDetailView = ({
  data,
  fetchNextPage,
  isLoading,
  hasNextPage,
  selectedRegion,
  setSelectedRegion,
}: MainDetailViewProps) => {
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moveToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <S.Container>
      <MainTheme />
      <RegionButton
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <S.SearchContainer>
        {!isLoading && data && !data.pages[0]?.content.length && (
          <S.NoResultCover>
            <S.NoResultText>검색 조건에 맞는 호텔이 없어요</S.NoResultText>
            <S.NoResultTextTwo>
              다른 지역과 날짜로 변경해보세요
            </S.NoResultTextTwo>
          </S.NoResultCover>
        )}
        <S.SearchItemFlex>
          {data?.pages.map((page) =>
            page?.content.map((item: ISearchList) => (
              <SearchItem key={item.id} item={item} />
            )),
          )}
        </S.SearchItemFlex>
        <div ref={ref} />
        <S.TopButtonCover>
          <S.TopButton
            className={isTopButtonVisible ? "visible" : ""}
            onClick={moveToTop}
          >
            <ArrowIcon />
          </S.TopButton>
        </S.TopButtonCover>
      </S.SearchContainer>
    </S.Container>
  );
};

const MainDetail: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("전체");

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

  const { data, fetchNextPage, isLoading, hasNextPage } =
    useInfiniteSearchQuery(searchInfo);

  const schemaData = {
    "@type": "ItemList",
    name: "황금 연휴 호캉스 추천",
    description: "성수기 숙소 예약 놓쳤다면? 황금연휴 호캉스 추천",
    itemListElement:
      data?.pages.flatMap((page, pageIndex) =>
        page?.content.map((item: ISearchList, index: number) => ({
          "@type": "ListItem",
          position: pageIndex * 10 + index + 1,
          item: {
            "@type": "Hotel",
            name: item.name,
            image: item.imageUrl,
            offers: {
              "@type": "Offer",
              price: item.salePrice,
              priceCurrency: "KRW",
              priceValidUntil: item.checkOut,
              availability: "https://schema.org/InStock",
            },
            checkinTime: item.checkIn,
            checkoutTime: item.checkOut,
            starRating: {
              "@type": "Rating",
              ratingValue: item.hotelRate,
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: item.reviewRate,
              bestRating: "5",
              worstRating: "1",
            },
          },
        })),
      ) || [],
  };

  return (
    <>
      <HelmetTag
        title="황금 연휴 호캉스 추천"
        schemaType="ItemList"
        schemaData={schemaData}
      />
      <MainDetailView
        data={data}
        fetchNextPage={fetchNextPage}
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </>
  );
};

export default MainDetail;
