import * as S from "./TransferWriting.style";
import TransferItem from "./transferItem/TransferItem";
import Toast from "@/components/toast/Toast";

import { fetchTransferItems } from "@/apis/fetchTransferItems";
import { useSuspenseQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

const TransferWriting = () => {
  const UID = "DUMMY_UID";

  const { data } = useSuspenseQuery({
    queryKey: ["TransferItemList", UID],
    queryFn: fetchTransferItems,
    staleTime: 500000,
  });

  console.log("data: ", data);

  return (
    <>
      <Toast strings={[<>야놀자</>, "에서 예약하신 상품만 판매가 가능해요"]} />
      <S.Subtitle>판매할 내역을 선택해주세요.</S.Subtitle>

      <S.TransferItemList>
        {data?.map((item) => {
          return (
            <AnimatePresence key={item.reservationId}>
              <TransferItem
                reservationId={item.reservationId}
                hotelName={item.hotelName}
                roomName={item.roomName}
                startDate={item.startDate}
                endDate={item.endDate}
                refundPrice={item.refundPrice}
                purchasePrice={item.purchasePrice}
                remainingDays={item.remainingDays}
                remainingTimes={item.remainingTimes}
                imageUrl={item.imageUrl}
              />
            </AnimatePresence>
          );
        })}
      </S.TransferItemList>
    </>
  );
};

export default TransferWriting;
