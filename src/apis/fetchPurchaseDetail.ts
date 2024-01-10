import axios from "axios";

export const fetchPurchaseDetail = async () => {
  try {
    const response = await axios("/v1/purchase-detail");
    console.log("res", response);
    return response.data.data;
  } catch (error) {
    console.error("방 상세 정보 가져오기 실패", error);
    throw new Error("방 상세 정보를 가져오는 데 실패했습니다");
  }
};
