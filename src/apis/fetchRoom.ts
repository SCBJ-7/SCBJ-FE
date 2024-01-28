import { ResponseError } from "@/components/error/Error";
import { ACCESS_TOKEN, BASE_URL, END_POINTS } from "@constants/api";

import type { ResponseData } from "@type/responseType";
import type { RoomData } from "@type/room";
import axios from "axios";

export const getRoom = async (
  productId: string,
  isLoggedIn: boolean,
): Promise<RoomData> => {
  const headers: { [key: string]: string } = {};

  if (isLoggedIn) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) throw new ResponseError(401, "토큰이 없습니다.");

    headers["Authorization"] = accessToken;
  }

  const { data } = await axios.get<ResponseData<RoomData>>(
    `${BASE_URL}${END_POINTS.ROOM(productId)}`,
    { headers },
  );

  return data.data;
};
