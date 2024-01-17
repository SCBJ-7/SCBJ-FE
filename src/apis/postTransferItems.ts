import { PostTransferProps } from "./../types/postTransferItem";
// import axios from "axios";
import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

export const postTransferItems = async ({
  pathVariable,
  firstPrice,
  secondPrice,
  bank,
  accountNumber,
  secondGrantedPeriod,
  isRegistered,
}: PostTransferProps) => {
  try {
    console.log(
      pathVariable,
      firstPrice,
      secondPrice,
      bank,
      accountNumber,
      secondGrantedPeriod,
      isRegistered,
      "!!!!!!!!",
    );
    const response = await axiosInstance.post(
      END_POINTS.ROOM(pathVariable),
      {
        firstPrice,
        secondPrice,
        bank,
        accountNumber,
        secondGrantedPeriod,
        isRegistered,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err, "err");
  }
};
