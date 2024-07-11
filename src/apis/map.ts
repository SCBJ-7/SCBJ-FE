import axios from "axios";

import type { MapData } from "@/types/room";

export const getGeoCoder = async (query: string): Promise<MapData> => {
  const { data } = await axios.get<MapData>(
    "https://dapi.kakao.com/v2/local/search/address.json",
    {
      params: { query },
      headers: {
        Authorization: "KakaoAK 3cd9d9375f80720d9a3657239334f08d",
      },
    },
  );

  return data;
};
