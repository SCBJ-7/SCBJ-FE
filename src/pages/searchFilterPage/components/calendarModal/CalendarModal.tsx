import useToastConfig from "@/hooks/common/useToastConfig";
import { format, isSaturday, isSunday, subDays } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import * as S from "./CalendarModal.style";

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
  const { handleToast } = useToastConfig();
  const [startDate, setStartDate] = useState<Date | null>(
    checkIn ? new Date(checkIn) : null,
  );
  const [endDate, setEndDate] = useState<Date | null>(
    checkOut ? new Date(checkOut) : null,
  );

  const handleModalClose = () => {
    setDateIsModalOpen(false);
  };

  const onChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      const [start, end] = dates;
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
    if (isSunday(date)) {
      return "sunday";
    } else if (isSaturday(date)) {
      return "saturday";
    }

    return null; // Return null for other days
  };

  const adjustEndDate = (start: Date, end: Date) => {
    //두날짜 같다면 end date 다음날로 세팅하기ㄴ
    return start.getTime() === end.getTime()
      ? new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1)
      : end;
  };

  const selectedDatesText =
    startDate && endDate
      ? `${format(startDate, "yy.MM.dd (EEE)", { locale: ko })} ~ ${format(
          adjustEndDate(startDate, endDate),
          "yy.MM.dd (EEE)",
          { locale: ko },
        )}`
      : startDate
        ? `${format(startDate, "yy.MM.dd (EEE)", { locale: ko })}`
        : "검색하기";

  const handleSetDate = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startDate && endDate) {
      const adjustedEndDate = adjustEndDate(startDate, endDate);
      setCheckIn(format(startDate, "yyyy-MM-dd"));
      setCheckOut(format(adjustedEndDate, "yyyy-MM-dd"));
      setDateIsModalOpen(false);
    } else if (startDate && !endDate) {
      e.preventDefault();
      handleToast(true, [<>체크아웃 날짜를 선택해주세요</>]);
    } else {
      setCheckIn(null);
      setCheckOut(null);

      setDateIsModalOpen(false);
    }
  };
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
              monthsShown={3}
              showMonthYearPicker={false}
            />
          </S.CalendarContainer>
        </S.ModalContent>
        <S.FilterBottom>
          <S.ResetButtonContent
            onClick={onReset}
            className={startDate ? "" : "disable"}
          >
            <div>초기화</div>
            <div>
              <S.ResetButton className={startDate ? "" : "disable"} />
            </div>
          </S.ResetButtonContent>
          <S.SearchButton onClick={handleSetDate}>
            {selectedDatesText}
          </S.SearchButton>
        </S.FilterBottom>
      </S.ModalContainer>
    </>
  );
};

export default CalendarModal;
