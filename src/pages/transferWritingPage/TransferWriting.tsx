import * as S from "./TransferWriting.style";
import TransferItem from "./transferItem/TransferItem";

import { fetchTransferItems } from "@/apis/fetchTransferItems";
import { useToastStore, useUserInfoStore } from "@/store/store";
import { useSuspenseQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { fetchUserInfo } from "@apis/fetchUserInfo.ts";

const TransferWriting = () => {
  const setToastConfig = useToastStore((state) => state.setToastConfig);
  const userInfo = useUserInfoStore((state) => state.userInfo);

  const { data: userData } = useSuspenseQuery({
    queryKey: ["UserInfo"],
    queryFn: fetchUserInfo,
  });

  const { data: transferData } = useSuspenseQuery({
    queryKey: ["TransferItemList", userData?.id],
    queryFn: fetchTransferItems,
  });

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!userData?.linkToYanolja || !token) return;
    setToastConfig({
      isShow: true,
      isError: false,
      strings: [<>야놀자</>, "에서 예약하신 상품만 판매 가능해요."],
    });
    setTimeout(() => {
      setToastConfig({
        isShow: false,
        isError: false,
        strings: [<>야놀자</>, "에서 예약하신 상품만 판매 가능해요."],
      });
    }, 3000);
  }, [setToastConfig, token, userData?.linkToYanolja]);

  if (!token) {
    return <div>로그인이 필요합니다.</div>;
  }

  if (!userInfo.linkToYanolja) {
    return <div>야놀자 연동이 필요합니다.</div>;
  }

  return (
    <>
      <S.Subtitle>판매할 내역을 선택해주세요.</S.Subtitle>
      <S.TransferItemList>
        {transferData?.map((item) => {
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
