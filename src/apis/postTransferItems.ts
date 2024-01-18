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
  const { data } = await axiosInstance.post(END_POINTS.ROOM(pathVariable), {
    firstPrice,
    secondPrice,
    bank,
    accountNumber,
    secondGrantedPeriod,
    isRegistered,
  });
  return data;
};
