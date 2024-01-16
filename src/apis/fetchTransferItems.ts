import { IReservation } from "@/types/reservationList";
import axios from "axios";

// 예약목록을 불러오는 api입니다.
export const fetchTransferItems = async (): Promise<
  IReservation[] | undefined
> => {
  try {
    const response = await axios.get("/v1/reservations");
    return response.data.data.reservationList as IReservation[];
  } catch (err) {
    alert("⚠️예기치 못한 에러가 발생하였습니다.");
  }
};
