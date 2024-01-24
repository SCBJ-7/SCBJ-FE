import { END_POINTS } from "@constants/api";
import { axiosInstance } from "./axiosInstance";
import { ReadType } from "@type/alarm";

export const fetchHasAlarm = async (): Promise<ReadType> => {
  const { data } = await axiosInstance.get(END_POINTS.HASALARM);
  return data.data;
};
