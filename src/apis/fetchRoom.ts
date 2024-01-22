import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@constants/api";

export const getRoom = async (roomId: string) => {
  const { data } = await axiosInstance.get(END_POINTS.ROOM(roomId));
  return data.data;
};
