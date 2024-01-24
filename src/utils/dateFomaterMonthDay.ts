import { format } from "date-fns";
import { ko } from "date-fns/locale";

export const formatDateMonthAndDay = (day: string | null): string => {
  if (!day) {
    return ""; // 또는 다른 기본값을 반환할 수 있습니다.
  }

  // "2024-02-01" => "02. 01"
  return format(new Date(day), "MM.dd (EEE)", {
    locale: ko,
  });
};
