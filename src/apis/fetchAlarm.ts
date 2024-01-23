import { END_POINTS } from "@constants/api";
import { axiosInstance } from "./axiosInstance";

export interface AlarmProps {
  id: number;
  title: string;
  content: string;
  date: string;
  isRead: boolean;
}

export const fetchAlarm = async (): Promise<AlarmProps[]> => {
  const { data } = await axiosInstance.get(END_POINTS.ALARM);
  return data.data;
};
