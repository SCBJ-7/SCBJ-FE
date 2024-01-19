import { useRef, useState } from "react";
import * as S from "./SearchNav.style";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useSearchFilterInfoStore } from "@store/store";
import { ISearchFilterInfo } from "@type/searchFilterInfo";
type ActiveState = Record<string, boolean>;

const SeachNav = () => {
  const [isActive, setIsActive] = useState<ActiveState>({
    brunch: false,
    pool: false,
    oceanView: false,
  });
  const [filterName, setFilterName] = useState<string | null>(() => {
    return sessionStorage.getItem("sorted");
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);
  const setSearchInfo = useSearchFilterInfoStore(
    (state) => state.setSearchInfo,
  );
  const ref = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);

  const navList = [
    { id: 1, label: "brunch", name: "조식제공" },
    { id: 2, label: "pool", name: "수영장" },
    { id: 3, label: "oceanView", name: "오션뷰" },
  ];

  //이중모달 관리 훅
  useOnClickOutside({
    ref,
    handler: () => setIsModalOpen(false),
    isModalTwoOpen,
    refTwo,
    handlerTwo: () => setIsModalTwoOpen(false),
  });

  const handleCellClick = (key: string) => {
    const searchKey = key as keyof ISearchFilterInfo;
    const isKeyActive = searchInfo?.[searchKey];

    console.log("ssss", isKeyActive);
    setSearchInfo({
      [searchKey]: !isKeyActive,
    });
  };

  const handleFilterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModalTwo = () => {
    setIsModalTwoOpen(false);
  };

  const handleOpenModalTwo = () => {
    setIsModalTwoOpen(true);
  };

  const registerFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    const modalTwoButtonClick =
      e.target instanceof Element && e.target.closest(".modal-two-button");

    const innerText = e.currentTarget.innerText;
    if (modalTwoButtonClick) {
      e.preventDefault();
      return;
    }
    if (innerText === "최신 등록 순") {
      sessionStorage.setItem("sorted", "최신 등록 순");
      setIsModalOpen(false);
      setFilterName("최신 등록 순");
    } else if (innerText === "낮은 가격 순") {
      sessionStorage.setItem("sorted", "낮은 가격 순");
      setFilterName("낮은 가격 순");

      setIsModalOpen(false);
    } else if (innerText === "높은 할인 순") {
      sessionStorage.setItem("sorted", "높은 할인 순");
      setFilterName("높은 할인 순");

      setIsModalOpen(false);
    } else {
      sessionStorage.removeItem("sorted");
      setFilterName(null);

      setIsModalOpen(false);
    }
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
            <S.SearchFilterText>{filterName ?? "추천 순"}</S.SearchFilterText>
            <S.SearchFilterImg />
          </S.SearchFilterCover>
        </S.StandardFlex>
      </S.SearchNavContainer>
      {/**모달*1*/}
      {isModalOpen && (
        <S.ModalContainer>
          <S.ModalContent ref={ref}>
            <S.ModalTop>
              <div></div>
              <S.ModalTitle>정렬</S.ModalTitle>
              <div>
                <S.ModalCloseButton onClick={handleCloseModal} />
              </div>
            </S.ModalTop>
            <S.ModalFitlerName
              onClick={registerFilter}
              className={filterName === null ? "active" : ""}
            >
              <span>추천 순</span>{" "}
              <S.WarningButton
                className="modal-two-button"
                onClick={handleOpenModalTwo}
              />
            </S.ModalFitlerName>
            <S.ModalFitlerName
              onClick={registerFilter}
              className={filterName === "최신 등록 순" ? "active" : ""}
            >
              최신 등록 순
            </S.ModalFitlerName>
            <S.ModalFitlerName
              onClick={registerFilter}
              className={filterName === "낮은 가격 순" ? "active" : ""}
            >
              낮은 가격 순
            </S.ModalFitlerName>
            <S.ModalFitlerName
              onClick={registerFilter}
              className={filterName === "높은 할인 순" ? "active" : ""}
            >
              높은 할인 순
            </S.ModalFitlerName>
          </S.ModalContent>
        </S.ModalContainer>
      )}
      {isModalTwoOpen && (
        <S.ModalTwoContainer>
          <S.ModalTwoContent ref={refTwo}>
            <S.ModalTwoTop>
              <div></div>
              <S.ModaltTwoTitle>추천 순</S.ModaltTwoTitle>
              <div>
                <S.ModalCloseButton onClick={handleCloseModalTwo} />
              </div>
            </S.ModalTwoTop>
            <S.ModalTwoText>
              <div>체크인 임박 순으로 정렬되며 </div>
              <div>동일날짜는 높은 할인 순으로 적용됩니다</div>
            </S.ModalTwoText>
          </S.ModalTwoContent>
        </S.ModalTwoContainer>
      )}
    </>
  );
};

export default SeachNav;
