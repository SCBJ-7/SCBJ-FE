import * as S from "./CalendarModal.style";
import { ko } from "date-fns/locale";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { subDays, isSaturday, isSunday, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

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
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleModalClose = () => {
    setDateIsModalOpen(false);
  };

  const onChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      console.log(start);
      setStartDate(start);
      setEndDate(end !== start ? end : null);
    }
  };

  const onReset = () => {
    // 초기화 버튼 클릭 시 날짜 초기화
    setStartDate(null);
    setEndDate(null);
  };

  const dayClassName = (date: Date) => {
    // Apply custom classes based on the day of the week
    if (isSunday(date)) {
      return "sunday";
    } else if (isSaturday(date)) {
      return "saturday";
    }
    return undefined;
  };

  const selectedDatesText =
    startDate && endDate
      ? `${format(startDate, "yy.MM.dd (EEE)", { locale: ko })} ~ ${format(
          endDate,
          "yy.MM.dd (EEE)",
          { locale: ko },
        )}`
      : "검색하기";

  return (
    <>
      <S.ModalContainer>
        <S.ModalTop>
          <div></div>
          <S.ModalTitle>일정</S.ModalTitle>
          <div>
            <S.ModalCloseButton onClick={handleModalClose} />
          </div>
        </S.ModalTop>
        <S.ModalContent>
          <S.CalendarContainer>
            <DatePicker
              locale={ko}
              selectsRange
              startDate={startDate}
              endDate={endDate}
              minDate={subDays(new Date(), 0)}
              onChange={onChange}
              isClearable={true}
              inline
              shouldCloseOnSelect={false}
              dayClassName={dayClassName}
            />
          </S.CalendarContainer>
        </S.ModalContent>
      </S.ModalContainer>
      <S.FilterBottom>
        <S.ResetButtonContent onClick={onReset}>
          <div>초기화</div>
          <div>
            <S.ResetButton />
          </div>
        </S.ResetButtonContent>
        <S.SearchButton>{selectedDatesText}</S.SearchButton>
      </S.FilterBottom>
    </>
  );
};

export default CalendarModal;
