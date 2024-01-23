import { END_POINTS } from "@constants/api";
import { axiosInstance } from "./axiosInstance";

export interface ReadProps {
  hasNonReadAlarm: boolean;
}

export const fetchHasAlarm = async (): Promise<ReadProps> => {
  const { data } = await axiosInstance.get(END_POINTS.HASALARM);
  return data.data;
};
