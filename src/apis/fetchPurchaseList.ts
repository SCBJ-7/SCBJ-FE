import { BASE_URL, END_POINTS } from "@constants/api";
import { axiosInstance } from "./axiosInstance";

export const fetchPurchaseList = async () => {
  try {
    const response = await axiosInstance.get(
      BASE_URL + END_POINTS.PURCHASE_HISTORY,
    );
    return response.data.data;
  } catch (err) {
    throw new Error("⚠️예기치 못한 에러가 발생하였습니다.");
  }
};
