import * as S from "./TransferWriting.style";
import TransferItem from "./transferItem/TransferItem";

import { fetchTransferItems } from "@/apis/fetchTransferItems";
import { useToastStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { fetchUserInfo } from "@apis/fetchUserInfo.ts";
import NoResult from "@components/noResult/NoResult";
import { PATH } from "@constants/path";

const TransferWriting = () => {
  const setToastConfig = useToastStore((state) => state.setToastConfig);

  const { data: userData } = useQuery({
    queryKey: ["UserInfo"],
    queryFn: fetchUserInfo,
  });

  const { data: transferData } = useQuery({
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
    return (
      <NoResult
        title="로그인이 필요한 서비스입니다"
        desc="로그인 후 숙박권을 판매해보세요!"
        buttonDesc="로그인 하기"
        navigateTo={PATH.LOGIN}
      />
    );
  }

  if (userData?.linkToYanolja === false) {
    return (
      <NoResult
        title="야놀자 예약내역 확인이 필요합니다."
        desc="야놀자 계정 연동으로 예약내역을 불러올 수 있어요"
        buttonDesc="계정 연동하기"
        navigateTo={PATH.YANOLJA_ACCOUNT}
      />
    );
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
