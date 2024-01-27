import { END_POINTS } from "@constants/api";
import { axiosInstance } from "./axiosInstance";

export const fetchPurchaseList = async () => {
  try {
    const response = await axiosInstance.get(END_POINTS.PURCHASE_HISTORY);
    console.log("res", response);

    return response.data.data;
  } catch (err) {
    throw new Error("⚠️예기치 못한 에러가 발생하였습니다.");
  }
};
