import { IReservation } from "@/types/reservationList";
import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

// 예약목록을 불러오는 api입니다.
export const fetchTransferItems = async (): Promise<
  IReservation[] | undefined
> => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw new Error("No Token");
    }
    const response = await axiosInstance.get(END_POINTS.RESERVATION, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data.data as IReservation[];
  } catch (err) {
    console.log(err, "err");
  }
};
