import { END_POINTS } from "@constants/api";
import { axiosInstance } from "./axiosInstance";
import axios from "axios";
import type { ResponseData } from "@type/responseType";
import type { ISaleData } from "@type/saleDetail";

// FIXME as below (백엔드 수정 후)
export const fetchSaleDetail = async (id: number): Promise<ISaleData> => {
  const response = await axiosInstance.get<ResponseData<ISaleData>>(
    END_POINTS.SALE_DETAIL(id),
  );
  console.log(response);
  return response.data.data;
};

// export const fetchSaleDetail = async () => {
//   const { data } = await axios.get<ResponseData<ISaleData>>(
//     "/v1/sale-history/49",
//   );
//   return data.data;
// };
