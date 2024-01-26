import { BASE_URL, END_POINTS } from "@constants/api";
import type { ResponseData } from "@type/responseType";
import type { RoomData } from "@type/room";
import axios from "axios";

export const getRoom = async (productId: string): Promise<RoomData> => {
  const { data } = await axios.get<ResponseData<RoomData>>(
    BASE_URL + END_POINTS.ROOM(productId),
  );
  return data.data;
};
