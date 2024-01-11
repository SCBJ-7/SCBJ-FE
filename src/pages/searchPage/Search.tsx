import SearchBar from "./components/SearchBar/SearchBar";
import SearchNav from "./components/SearchNav/SeachNav";
import * as S from "./Search.style";
const Search = () => {
  return (
    <>
      <SearchBar />
      <S.SearchContainer>
        <SearchNav />
        <div style={{ width: "100%", height: "1000px" }}>s</div>
      </S.SearchContainer>
    </>
  );
};

export default Search;
