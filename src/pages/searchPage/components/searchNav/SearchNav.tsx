import { useState } from "react";
import * as S from "./SearchNav.style";
import { useSearchFilterInfoStore } from "@store/store";
import { ISearchFilterInfo } from "@type/searchFilterInfo";
import SearchModalButton from "../searchModalButton/SearchModalButton";
type ActiveState = Record<string, boolean>;

const SeachNav = () => {
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);
  const setSearchInfo = useSearchFilterInfoStore(
    (state) => state.setSearchInfo,
  );
  const [isActive, setIsActive] = useState<ActiveState>({
    brunch: searchInfo.brunch ?? false,
    pool: searchInfo.pool ?? false,
    oceanView: searchInfo.oceanView ?? false,
  });

  const navList = [
    { id: 1, label: "brunch", name: "조식제공" },
    { id: 2, label: "pool", name: "수영장" },
    { id: 3, label: "oceanView", name: "오션뷰" },
  ];
  //이중모달 관리 훅

  const handleCellClick = (key: string) => {
    const searchKey = key as keyof ISearchFilterInfo;
    const isKeyActive = searchInfo?.[searchKey];

    setSearchInfo({
      [searchKey]: isKeyActive ? null : true,
    });

    const newActiveState: ActiveState = { ...isActive };
    newActiveState[key] = !isKeyActive;
    setIsActive(newActiveState);
  };

  return (
    <>
      <S.SearchNavContainer>
        <S.StandardFlex>
          <S.SearchCellCover>
            {navList.map(({ id, label, name }) => (
              <S.SearchNavCell
                key={id}
                onClick={() => handleCellClick(label)}
                className={isActive[label] ? "active" : ""}
              >
                {name}
              </S.SearchNavCell>
            ))}
          </S.SearchCellCover>
          <SearchModalButton />
        </S.StandardFlex>
      </S.SearchNavContainer>
    </>
  );
};

export default SeachNav;
