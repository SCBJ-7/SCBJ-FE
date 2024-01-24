import { LocaleItemsType, WeekendItem } from "./../types/saleSection";
import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

// 유저 정보를 불러오는 api입니다.
export const fetchMainItem = async (): Promise<
  [LocaleItemsType, WeekendItem[]]
> => {
  const { data } = await axiosInstance.get(
    END_POINTS.MAIN +
      "?cityNames=서울&cityNames=강원&cityNames=부산&cityNames=제주&cityNames=경상&cityNames=전라",
  );
  const { weekend, ...locale } = data.data;
  const temp = weekend.content;

  return [locale, temp];
};
