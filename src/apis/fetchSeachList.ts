import axios from "axios";

export const fetchSearchList = async (
  location: string | null,
  checkIn: string | null,
  checkOut: string | null,
  quantityPeople: number | null,
  sorted: string | null,
  brunch: boolean | null,
  pool: boolean | null,
  oceanView: boolean | null,
  page: number | null,
  pageSize: number,
) => {
  try {
    const response = await axios.post(
      "https://3.34.147.187.nip.io/v1/products/search",
      {
        location: location,
        checkIn: checkIn,
        checkOut: checkOut,
        quantityPeople: quantityPeople,
        sorted: sorted,
        brunch: brunch,
        pool: pool,
        oceanView: oceanView,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          page: page,
          pageSize: pageSize,
        },
      },
    );
    return response.data.data;
  } catch (error) {
    throw new Error("호텔 검색에 실패했습니다");
  }
};
