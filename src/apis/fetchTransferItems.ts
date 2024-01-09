import { IReservation } from "@/types/reservationList";
import axios from "axios";

export const fetchTransferItems = async () => {
  try {
    const response = await axios.get("/v1/reservations");
    console.log("response: ", response);
    return response.data.data.reservationList as IReservation[];
  } catch (err) {
    alert("⚠️예기치 못한 에러가 발생하였습니다.");
  }
};
