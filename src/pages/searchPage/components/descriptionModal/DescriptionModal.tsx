import { ForwardedRef } from "react";
import * as S from "./DescriptionModal.style";

interface DescriptionModalProps {
  setIsModalTwoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refTwo: ForwardedRef<HTMLDivElement>;
}

const DescriptionModal = ({
  setIsModalTwoOpen,
  refTwo,
}: DescriptionModalProps) => {
  const handleCloseModalTwo = () => {
    setIsModalTwoOpen(false);
  };

  return (
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
  );
};

export default DescriptionModal;
