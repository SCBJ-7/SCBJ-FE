import useOnClickOutside from "@/hooks/common/useOnClickOutside";
import ModalPortal from "@components/portal/ModalPortal";
import { useSearchFilterInfoStore } from "@store/store";
import { useRef, useState } from "react";
import DescriptionModal from "../descriptionModal/DescriptionModal";
import FilterModal from "../filterModal/FilterModal";

import * as S from "./SearchModalButton.style";

const SearchModalButton = () => {
  const searchInfo = useSearchFilterInfoStore((state) => state.searchInfo);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);

  useOnClickOutside({
    ref,
    handler: () => setIsModalOpen(false),
    isModalTwoOpen,
    refTwo,
    handlerTwo: () => setIsModalTwoOpen(false),
  });

  const handleFilterClick = () => {
    setIsModalOpen(true);
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
        <ModalPortal>
          <FilterModal
            setIsModalOpen={setIsModalOpen}
            setIsModalTwoOpen={setIsModalTwoOpen}
            ref={ref}
          />
        </ModalPortal>
      )}

      {isModalTwoOpen && (
        <ModalPortal>
          <DescriptionModal
            setIsModalTwoOpen={setIsModalTwoOpen}
            refTwo={refTwo}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default SearchModalButton;
