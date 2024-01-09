import { fetchTransferItems } from "@/apis/fetchTransferItems";
import { AnimatePresence } from "framer-motion";
import Toast from "@/components/toast/Toast";
import { useEffect, useState } from "react";
import { IReservation } from "../../types/reservationList";
import TransferItem from "./transferItem/TransferItem";
import * as S from "./TransferWriting.style";

const TransferWriting = () => {
  const [reservations, setReservations] = useState<IReservation[]>([]);

  useEffect(() => {
    try {
      fetchTransferItems().then((res) => {
        setReservations(res.data.reservationList);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Toast strings={[<>야놀자</>, "에서 예약하신 상품만 판매가 가능해요"]} />
      <S.Subtitle>판매할 내역을 선택해주세요.</S.Subtitle>
      <S.TransferItemList>
        {reservations.map((item, idx) => {
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
    </>
  );
};

export default TransferWriting;
