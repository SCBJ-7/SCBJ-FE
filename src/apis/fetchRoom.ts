import axios from "axios";

import type { ResponseData } from "@/types/responseType";
import type { RoomData } from "@/types/room";

import { ACCESS_TOKEN, BASE_URL, END_POINTS } from "@/constants/api";

export const getRoom = async (
  productId: string,
  isLoggedIn: boolean,
): Promise<RoomData> => {
  const headers: Record<string, string> = {};

  if (isLoggedIn) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    headers["Authorization"] = `${accessToken}`;
  }

  const { data } = await axios.get<ResponseData<RoomData>>(
    `${BASE_URL}${END_POINTS.ROOM(productId)}`,
    { headers },
  );

  return data.data;
};
