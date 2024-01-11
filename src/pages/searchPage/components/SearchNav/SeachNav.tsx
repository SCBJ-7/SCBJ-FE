import { useEffect, useState } from "react";
import * as S from "./SearchNav.style";
type ActiveState = Record<string, boolean>;
const navList = [
  { id: 1, label: "food", name: "조식제공" },
  { id: 2, label: "pool", name: "수영장" },
  { id: 3, label: "view", name: "오션뷰" },
];

const SeachNav = () => {
  const [isActive, setIsActive] = useState<ActiveState>({
    food: false,
    pool: false,
    view: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const labelsInStorage = navList.filter(({ label }) =>
      sessionStorage.getItem(label),
    );
    const active = labelsInStorage.map(({ label }) => label);

    setIsActive((prev) => ({
      ...prev,
      ...Object.fromEntries(active.map((label) => [label, true])),
    }));
  }, []);

  const handleCellClick = (key: string) => {
    const newActiveState: ActiveState = { ...isActive };

    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "true");
      newActiveState[key] = true;
    } else {
      sessionStorage.removeItem(key);
      newActiveState[key] = false;
    }

    setIsActive(newActiveState);
  };
  const handleFilterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // 모달 닫기 로직
    setIsModalOpen(false);
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
          <S.SearchFilterCover onClick={handleFilterClick}>
            <S.SearchFilterText>추천순</S.SearchFilterText>
            <S.SearchFilterImg />
          </S.SearchFilterCover>
        </S.StandardFlex>
      </S.SearchNavContainer>
    </>
  );
};

export default SeachNav;
