import { useSearchFilterInfoStore } from "@store/store";
import * as S from "./FilterModal.style";
import { forwardRef } from "react";

interface FilterModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalTwoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal = forwardRef<HTMLDivElement, FilterModalProps>(
  ({ setIsModalOpen, setIsModalTwoOpen }, ref) => {
    const navList = [
      { id: 1, name: "추천 순" },
      { id: 2, name: "최신 등록 순" },
      { id: 3, name: "낮은 가격 순" },
      { id: 4, name: "높은 할인 순" },
    ];
    const setSearchInfo = useSearchFilterInfoStore(
      (state) => state.setSearchInfo,
    );
    const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);

    const registerFilter = (
      event: React.MouseEvent<HTMLDivElement>,
      name: string,
    ) => {
      const modalTwoButtonClick =
        event.target instanceof Element &&
        event.target.closest(".modal-two-button");

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
    const handleOpenModalTwo = () => {
      setIsModalTwoOpen(true);
    };
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
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
    );
  },
);

export default FilterModal;
