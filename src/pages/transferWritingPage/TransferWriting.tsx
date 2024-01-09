import { Suspense } from "react";
import * as S from "./TransferWriting.style";
import TransferItem from "./transferItem/TransferItem";

import { fetchTransferItems } from "@/apis/fetchTransferItems";
import { AnimatePresence } from "framer-motion";
import { useSuspenseQuery } from "@tanstack/react-query";

const TransferWriting = () => {
  const UID = "DUMMY_UID";

  const { data } = useSuspenseQuery({
    queryKey: ["TransferItemList", UID],
    queryFn: fetchTransferItems,
    staleTime: 500000,
  });

  return (
    <>
      <S.Subtitle>판매할 내역을 선택해주세요.</S.Subtitle>
      <Suspense fallback={<div>Loading...</div>}>
        <S.TransferItemList>
          {data?.map((item, idx) => {
            return (
              <AnimatePresence>
                <TransferItem
                  key={idx}
                  hotelName={item.hotelName}
                  roomName={item.roomName}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  refundPrice={item.refundPrice}
                  purchasePrice={item.purchasePrice}
                  remainingDays={item.remainingDays}
                  remainingTimes={item.remainingTimes}
                  hotelImage={item.hotelImage}
                />
              </AnimatePresence>
            );
          })}
        </S.TransferItemList>
      </Suspense>
    </>
  );
};

export default TransferWriting;
