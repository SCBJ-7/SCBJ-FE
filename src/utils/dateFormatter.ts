import { TIME_UNIT } from "@/constants/time";
import { format, parse } from "date-fns";
import { ko } from "date-fns/locale";

/**
 * ISO 형식의 날짜 문자열을 특정 포맷으로 변환합니다.
 * @param {string} date - ISO 형식의 날짜 문자열,
 * @returns {string} 변환된 날짜 문자열.
 */
export const formatDate = (date: string): string => {
  const parseIoDate = new Date(date);
  return format(parseIoDate, "yy.MM.dd(E) HH:mm", { locale: ko });
};

/**
 * ISO 형식의 날짜 문자열에서 날짜와 시간을 분리하여 반환합니다.
 * @param {string} date - ISO 형식의 날짜 문자열
 * @returns {{date: string, time: string}} 분리된 날짜와 시간
 */
export const formatDateAndTime = (
  date: string,
): { date: string; time: string } => {
  const parsedDate = new Date(date);
  const formattedDate = format(parsedDate, "yy.MM.dd(E)", { locale: ko });
  const formattedTime = format(parsedDate, "HH:mm", { locale: ko });
  return {
    date: formattedDate,
    time: formattedTime,
  };
};

/**
 * 날짜 문자열을 특정 형식으로 변환합니다.
 * @param {string} dateString - 변환할 날짜 문자열 (예: "24.01.27 (Sat) 14:47")
 * @returns {string} 변환된 날짜 문자열 (예: "2023. 01. 27 (금) 14:47")
 */
export const formatDateString = (dateString: string) => {
  // 날짜 파싱 (예: "24.01.27 (Sat) 14:47" -> Date 객체)
  const parsedDate = parse(dateString, "yy.MM.dd (EEE) HH:mm", new Date());

  // 포매팅 (예: Date 객체 -> "2023. 01. 27 (금) 14:47")
  return format(parsedDate, "yyyy. MM. dd (eee) HH:mm", { locale: ko });
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
