import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { TIME_UNIT } from "@constants/time";

/**
 * ISO 형식의 날짜 문자열을 특정 포맷으로 변환합니다.
 * @param {string} date - ISO 형식의 날짜 문자열,
 * @returns {string} 변환된 날짜 문자열.
 */
export const formatDate = (date: string): string => {
  const parseIoDate = new Date(date);
  return format(parseIoDate, "yy.MM.dd(E) HH:mm", { locale: ko });
};

export const formatDateWithoutTime = (date: string): string => {
  const parseIoDate = new Date(date);
  parseIoDate.setDate(parseIoDate.getDate() - 1);
  return format(parseIoDate, "yy.MM.dd (E)", { locale: ko });
};

export const remainTime = (date: string) => {
  const parseIoDate = new Date(date);
  const today = new Date();
  const timeDifference = parseIoDate.getTime() - today.getTime();

  for (const { unit, duration } of TIME_UNIT) {
    if (timeDifference >= duration) {
      const value = Math.floor(timeDifference / duration);
      return `${value}${unit}`;
    }
  }

  return "1분";
};
