import { axiosInstance } from "./axiosInstance";

export const fetchSaleList = async () => {
  try {
    const { data } = await axiosInstance.get("/v1/members/sale-history");
    console.log("data", data);
    return data;
  } catch (err) {
    throw new Error("⚠️예기치 못한 에러가 발생하였습니다.");
  }
};
