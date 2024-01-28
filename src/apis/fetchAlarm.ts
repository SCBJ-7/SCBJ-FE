import { END_POINTS } from "@constants/api";
import { AlarmType } from "@type/alarm";

import { axiosInstance } from "./axiosInstance";

export const fetchAlarm = async (): Promise<AlarmType[]> => {
  const { data } = await axiosInstance.get(END_POINTS.ALARM);
  return data.data;
};
