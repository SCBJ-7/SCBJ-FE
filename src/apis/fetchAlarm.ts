import { END_POINTS } from "@constants/api";
import axios from "axios";
import { AlarmType } from "@type/alarm";

export const fetchAlarm = async (): Promise<AlarmType[]> => {
  const { data } = await axios.get(END_POINTS.ALARM);
  return data.data;
};
