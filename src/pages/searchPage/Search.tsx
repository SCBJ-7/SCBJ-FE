import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
import SearchNav from "./components/searchNav/SearchNav";
import * as S from "./Search.style";
import { useEffect, useRef, useState } from "react";
import { ISearchList } from "@/types/searchList";
import SearchItem from "./components/searchItem/SearchItem";
import { useSearchFilterInfoStore } from "@store/store";
const Search = () => {
  const [searchItems, setSearchItems] = useState<ISearchList[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);
  console.log(searchInfo);
  const MoveToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth", // 애니메이션 부드럽게 설정
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

  useEffect(() => {
    const fetchPurchaseList = async () => {
      try {
        const response = await axios.get("v1/products/", {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            location: null,
            checkIn: null,
            checkOut: null,
            quantityPeople: null,
            sorted: null,
            brunch: null,
            pool: null,
            oceanView: null,
          },
        });

        setSearchItems(response.data.data.products);
        return response;
      } catch (error) {
        if (error) {
          setSearchItems([]);
          throw new Error("호텔 검색에 실패했습니다");
        }
      }
    };

    fetchPurchaseList();
  }, []);

  return (
    <>
      <SearchBar />
      <SearchNav />

      <S.SearchContainer ref={scrollContainerRef}>
        <S.SearchItemFlex>
          {searchItems?.length > 0 ? (
            searchItems.map((item) => <SearchItem key={item.id} item={item} />)
          ) : (
            <S.NoResultCover>
              <S.NoResultText>검색 조건에 맞는 호텔이 없어요</S.NoResultText>
              <S.NoResultTextTwo>
                다른 지역과 날짜로 변경해보세요
              </S.NoResultTextTwo>
            </S.NoResultCover>
          )}
        </S.SearchItemFlex>
      </S.SearchContainer>
      <S.TopButton $visible={scrollPosition > 500} onClick={MoveToTop} />
    </>
  );
};

export default Search;
