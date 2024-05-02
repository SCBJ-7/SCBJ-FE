import { BASE_URL, END_POINTS } from "@/constants/api";
import { ReadType } from "@/types/alarm";
import { isAccessTokenExpired } from "@/utils/checkToken";
import axios from "axios";

export const fetchHasAlarm = async (): Promise<ReadType> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return {
      hasNonReadAlarm: false,
    };
  }

  if (isAccessTokenExpired(accessToken)) {
    console.log("expired Token");
    return {
      hasNonReadAlarm: false,
    };
  }

  const { data } = await axios.get(BASE_URL + END_POINTS.HASALARM, {
    headers: {
      Authorization: `${localStorage.getItem("accessToken")}`,
    },
  });
  return data.data;
};
