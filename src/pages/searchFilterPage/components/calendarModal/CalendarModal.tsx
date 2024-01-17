import * as S from "./CalendarModal.style";
import { ko } from "date-fns/locale";
import React, { useRef } from "react";

interface CalendarModalProps {
  setDateIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  checkIn: string | null;
  checkOut: string | null;
  setCheckIn: React.Dispatch<React.SetStateAction<string | null>>;
  setCheckOut: React.Dispatch<React.SetStateAction<string | null>>;
}

const CalendarModal = ({
  setDateIsModalOpen,
  checkIn,
  checkOut,
  setCheckIn,
  setCheckOut,
}: CalendarModalProps) => {
  const handleModalClose = () => {
    setDateIsModalOpen(false);
  };

  return (
    <S.ModalContainer>
      <S.ModalTop>
        <div></div>
        <S.ModalTitle>일정</S.ModalTitle>
        <div>
          <S.ModalCloseButton onClick={handleModalClose} />
        </div>
      </S.ModalTop>
      <S.ModalContent>\</S.ModalContent>
    </S.ModalContainer>
  );
};

export default CalendarModal;
