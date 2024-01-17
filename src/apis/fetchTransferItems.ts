import { IReservation } from "@/types/reservationList";
import axios from "axios";

// 예약목록을 불러오는 api입니다.
export const fetchTransferItems = async (): Promise<
  IReservation[] | undefined
> => {
  try {
    const response = await axios.get(
      "https://3.34.147.187.nip.io/v1/reservations",
      {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      },
    );
    return response.data.data as IReservation[];
  } catch (err) {
    alert(`⚠️예기치 못한 에러가 발생하였습니다. ${err}`);
    console.log(err, "err");
  }
};
