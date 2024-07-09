import { AnimatePresence } from "framer-motion";
import { forwardRef } from "react";

import * as S from "./FilterModal.style";

import { useSearchFilterInfoStore } from "@/store/store";

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

    const modalVariants = {
      hidden: { y: "100vh", opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
      exit: { y: "100vh", opacity: 0, transition: { duration: 0.2 } },
    };
    console.log("searchinfosort", searchInfo.sorted);
    return (
      <AnimatePresence mode="wait">
        <S.ModalContainer>
          <S.ModalContent
            ref={ref}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
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
                    <span
                      className={searchInfo.sorted === null ? "active" : ""}
                    >
                      {name}
                    </span>{" "}
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
      </AnimatePresence>
    );
  },
);

export default FilterModal;
