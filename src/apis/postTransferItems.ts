// import axios from "axios";
import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "@/apis/axiosInstance";

import { PostTransferProps } from "./../types/postTransferItem";

export const postTransferItems = async ({
  pathVariable,
  firstPrice,
  secondPrice,
  bank,
  accountNumber,
  secondGrantPeriod,
  isRegistered,
  standardTimeSellingPolicy,
  totalAmountPolicy,
  sellingModificationPolicy,
  productAgreement,
}: PostTransferProps) => {
  const { data } = await axiosInstance.post(END_POINTS.ROOM(pathVariable), {
    firstPrice,
    secondPrice,
    bank,
    accountNumber,
    secondGrantPeriod,
    isRegistered,
    standardTimeSellingPolicy,
    totalAmountPolicy,
    sellingModificationPolicy,
    productAgreement,
  });
  return data;
};
