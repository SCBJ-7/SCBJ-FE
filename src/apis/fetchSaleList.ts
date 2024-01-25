import { axiosInstance } from "./axiosInstance";

export const fetchSaleList = async () => {
  try {
    const response = await axiosInstance.get("/v1/members/sale-history");
    console.log(response);
    return response.data;
  } catch (err) {
    alert("⚠️예기치 못한 에러가 발생하였습니다.");
  }
};
