import { axiosInstance } from "./axiosInstance";

export const fetchSaleList = async () => {
  const { data } = await axiosInstance.get("/v1/members/sale-history");
  return data;
};
