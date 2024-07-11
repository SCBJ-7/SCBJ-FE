import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postTransferItems } from "@/apis/postTransferItems";
import { PATH } from "@/constants/path";
import { useSelectedItemStore } from "@/store/store";
import { ProfileData } from "@/types/profile";

interface PostTransferItems {
  firstPrice: string;
  secondPrice: string;
  downTimeAfter: string;
  is2ndChecked: boolean;
  opt1: boolean;
  opt2: boolean;
  opt3: boolean;
  optFinal: boolean;
  bank: string | null;
  accountNumber: string | null;
  userData: ProfileData;
}
const usePostTransferItems = ({
  firstPrice,
  secondPrice,
  downTimeAfter,
  is2ndChecked,
  opt1,
  opt2,
  opt3,
  optFinal,
  bank,
  accountNumber,
  userData,
}: PostTransferItems) => {
  const selectedItem = useSelectedItemStore((state) => state.selectedItem);

  // 처음 들어올 때 계좌가 있는지 여부.
  const [firstlyNoAccount] = useState(userData?.accountNumber ? false : true);

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: () =>
      postTransferItems({
        pathVariable: `${selectedItem.reservationId}`,
        firstPrice: Number(firstPrice.split(",").join("")),
        secondPrice: Number(secondPrice.split(",").join("")),
        bank: bank as string,
        accountNumber: accountNumber as string,
        secondGrantPeriod: Number(downTimeAfter),
        isRegistered: is2ndChecked,
        standardTimeSellingPolicy: opt1,
        totalAmountPolicy: opt2,
        sellingModificationPolicy: opt3,
        productAgreement: optFinal,
      }),
    onSuccess: () => {
      alert("판매 게시물이 성공적으로 등록되었습니다!");
      navigate(PATH.WRITE_TRANSFER_SUCCESS + "?FNA=" + `${firstlyNoAccount}`, {
        state: { bank, accountNumber },
      });
    },
  });

  return { mutate };
};

export default usePostTransferItems;
