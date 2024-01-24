import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@constants/api";
import type { ResponseData } from "@type/responseType";
import type { RoomData } from "@type/room";

export const getRoom = async (roomId: string): Promise<RoomData> => {
  const { data } = await axiosInstance.get<ResponseData<RoomData>>(
    END_POINTS.ROOM(roomId),
  );
  return data.data;
};
