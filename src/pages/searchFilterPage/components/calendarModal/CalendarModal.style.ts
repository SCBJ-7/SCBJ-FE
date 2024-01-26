import styled from "styled-components";
import CloseButton from "@assets/icons/ic_close-button.svg?react";
import ResetIcon from "@assets/icons/ic_reset.svg?react";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 70;

  color: ${({ theme }) => theme.color.black};
`;

export const ModalContent = styled.div`
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 56px 20px 0 20px;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.scroll};
`;

export const ModalTop = styled.div`
  max-width: 768px;
  min-width: 360px;
  padding: 0 20px;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  height: 56px;

  z-index: 50;
`;
export const ModalTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const ModalCloseButton = styled(CloseButton)`
  cursor: pointer;
`;

export const CalendarContainer = styled.div`
  box-sizing: border-box;
  .custom-end-date {
    border-radius: 50% !important;
    color: red !important;
    background-color: ${({ theme }) => theme.color.percentOrange} !important;
  }
  width: 360px;
  .react-datepicker {
    padding: 0 20px;
    border: none;
  }
  .react-datepicker__day--disabled {
    color: black;
    opacity: 0.3;
  }
  .sunday {
    color: #ff4949;
  }
  .saturday {
    color: #0a76da;
  }

  .react-datepicker__navigation {
    top: 2.5rem;
  }
  .react-datepicker__navigation--previous {
    position: absolute;
    left: 300px;
  }

  .react-datepicker__month-container {
    width: 100%;
    height: auto;
  }
  .react-datepicker__header {
    background-color: white;
    border: none;
  }
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .react-datepicker__month-container {
    border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};
  }
  .react-datepicker__current-month {
    ${({ theme }) => theme.typo.title2}
    width: 320px;
    display: flex;
    justify-content: space-between;
  }
  .react-datepicker__month-container {
    padding: 32px 0;
  }
  .react-datepicker__day {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }
  .react-datepicker__day-names {
    width: 320px;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};
    font-size: 14px;
  }
  .react-datepicker__month {
    border: none;
  }
  .react-datepicker__day--range-start {
    border-radius: 50% !important;
    color: white !important;
    background-color: ${({ theme }) => theme.color.percentOrange} !important;
  }
  .react-datepicker__day--in-range {
    background-color: white;
    color: ${({ theme }) => theme.color.percentOrange};
    border: 2px solid ${({ theme }) => theme.color.percentOrange};
    font-weight: bold;
  }
  .react-datepicker__day--keyboard-selected {
    background-color: white;
  }
  .react-datepicker__day--in-range.react-datepicker__day--keyboard-selected {
    border-radius: 50% !important;
    color: white;
    background-color: ${({ theme }) => theme.color.percentOrange};
  }
  .react-datepicker__day--in-selecting-range {
    background-color: white;
    color: ${({ theme }) => theme.color.percentOrange};
    border: 2px solid ${({ theme }) => theme.color.percentOrange};
    font-weight: bold;
  }
  .react-datepicker__day--outside-month {
    opacity: 0;
  }
`;

export const FilterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  position: fixed;
  height: 80px;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.greyScale6};
  padding: 20px;
  z-index: 1000;
  background-color: white;
`;

export const ResetButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  height: 24px;
  cursor: pointer;
  ${({ theme }) => theme.typo.button3}
  &.disable {
    color: ${({ theme }) => theme.color.greyScale3};
  }
`;
export const ResetButton = styled(ResetIcon)`
  &.disable {
    fill: ${({ theme }) => theme.color.greyScale3} !important;
  }
`;
export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 242px;
  height: 39px;
  color: white;
  background-color: ${({ theme }) => theme.color.percentOrange};
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
