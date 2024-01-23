import { useRef, useState } from "react";
import * as S from "./SearchModalButton.style";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { useSearchFilterInfoStore } from "@store/store";
const SearchModalButton = () => {
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);
  const setSearchInfo = useSearchFilterInfoStore(
    (state) => state.setSearchInfo,
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const navList = [
    { id: 1, name: "추천 순" },
    { id: 2, name: "최신 등록 순" },
    { id: 3, name: "낮은 가격 순" },
    { id: 4, name: "높은 할인 순" },
  ];
  useOnClickOutside({
    ref,
    handler: () => setIsModalOpen(false),
    isModalTwoOpen,
    refTwo,
    handlerTwo: () => setIsModalTwoOpen(false),
  });

  const registerFilter = (
    event: React.MouseEvent<HTMLDivElement>,
    name: string,
  ) => {
    const modalTwoButtonClick =
      event.target instanceof Element && e.target.closest(".modal-two-button");

    if (modalTwoButtonClick) {
      event.preventDefault();
      return;
    }
    if (name === "추천 순") {
      setSearchInfo({ sorted: null });
      setIsModalOpen(false);
    } else {
      setSearchInfo({ sorted: name });
      setIsModalOpen(false);
    }
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

  return (
    <>
      <S.SearchFilterCover onClick={handleFilterClick}>
        <S.SearchFilterText>
          {searchInfo.sorted ?? "추천 순"}
        </S.SearchFilterText>
        <S.SearchFilterImg />
      </S.SearchFilterCover>
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
            {navList.map(({ id, name }) => (
              <S.ModalFitlerName
                key={id}
                onClick={(e) => registerFilter(e, name)}
                className={searchInfo.sorted === name ? "active" : ""}
              >
                {id === 1 ? (
                  <>
                    <span>{name}</span>{" "}
                    <S.WarningButton
                      className="modal-two-button"
                      onClick={handleOpenModalTwo}
                    />
                  </>
                ) : (
                  name
                )}
              </S.ModalFitlerName>
            ))}
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

export default SearchModalButton;
