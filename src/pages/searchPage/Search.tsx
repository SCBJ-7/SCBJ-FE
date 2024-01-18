import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
import SearchNav from "./components/searchNav/SeachNav";
import * as S from "./Search.style";
import { useEffect, useRef, useState } from "react";
import { ISearchList } from "@/types/searchList";
import SearchItem from "./components/searchItem/SearchItem";
const Search = () => {
  const [searchItems, setSearchItems] = useState<ISearchList[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

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
        const response = await axios.get("/v1/products");

        setSearchItems(response.data.data.products);
        return response;
      } catch (err) {
        alert("⚠️예기치 못한 에러가 발생하였습니다.");
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
          {searchItems.map((item) => (
            <SearchItem key={item.id} item={item} />
          ))}
        </S.SearchItemFlex>
      </S.SearchContainer>
      <S.TopButton $visible={scrollPosition > 500} onClick={MoveToTop} />
    </>
  );
};

export default Search;
