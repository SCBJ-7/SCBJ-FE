import { format, parseISO } from "date-fns";
import { ko } from "date-fns/locale";

/**
 * ISO 형식의 날짜 문자열을 특정 포맷으로 변환합니다.
 * @param {string} date - ISO 형식의 날짜 문자열.
 * @returns {string} 변환된 날짜 문자열.
 */
export const formatDate = (date: string) => {
  return format(parseISO(date), "yy.MM.dd(E) HH:mm", { locale: ko });
};
