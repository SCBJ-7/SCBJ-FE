import { END_POINTS } from "@constants/api";
import { axiosInstance } from "./axiosInstance";
import { AlarmType } from "@type/alarm";

export const fetchAlarm = async (): Promise<AlarmType[]> => {
  const { data } = await axiosInstance.get(END_POINTS.ALARM);
  return data.data;
};
