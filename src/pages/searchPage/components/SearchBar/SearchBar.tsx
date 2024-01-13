import * as S from "./SearchBar.style";

const SearchBar = () => {
  return (
    <>
      <S.SearchBarFixContainer>
        <S.SearchBarContainer>
          <S.SearchBarInput>
            <S.SearchRegion>어떤 호텔을 찾으세요?</S.SearchRegion>
          </S.SearchBarInput>
        </S.SearchBarContainer>
      </S.SearchBarFixContainer>
    </>
  );
};

export default SearchBar;
