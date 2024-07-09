import axios from "axios";

import { axiosInstance } from "./axiosInstance";

import type { ResponseData } from "@/types/responseType";
import type { RoomData } from "@/types/room";

import { BASE_URL, END_POINTS } from "@/constants/api";

export const getRoom = async (
  productId: string,
  isLoggedIn: boolean,
): Promise<RoomData> => {
  const client = isLoggedIn ? axiosInstance : axios;
  const url = isLoggedIn
    ? END_POINTS.ROOM(productId)
    : `${BASE_URL}${END_POINTS.ROOM(productId)}`;

  const { data } = await client.get<ResponseData<RoomData>>(url);

  return data.data;
};
