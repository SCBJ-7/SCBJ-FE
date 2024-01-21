import axios from "axios";
import { axiosInstance } from "./axiosInstance";
import { END_POINTS } from "@/constants/api";

export const fetchPurchaseDetail = async (id: string) => {
  try {
    const response = await axios.get(`/v1/purchase-detail/${id}`, {
      // 닫는 괄호 위치 수정
      headers: {
        Authorization: `${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("방 상세 정보 가져오기 실패", error);
    throw new Error("방 상세 정보를 가져오는 데 실패했습니다");
  }
};
