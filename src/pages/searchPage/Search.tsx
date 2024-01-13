import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
import SearchNav from "./components/searchNav/SeachNav";
import * as S from "./Search.style";
import { useEffect, useState } from "react";
import { ISearchList } from "@/types/searchList";
import SearchItem from "./components/searchItem/SearchItem";
const Search = () => {
  const [searchItems, setSearchItems] = useState<ISearchList[]>([]);
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
      <S.SearchContainer>
        <SearchNav />
        <S.SearchItemFlex>
          {searchItems.map((item) => (
            <SearchItem key={item.id} item={item} />
          ))}
        </S.SearchItemFlex>

        <div style={{ width: "100%", height: "1000px" }}>s</div>
      </S.SearchContainer>
    </>
  );
};

export default Search;
