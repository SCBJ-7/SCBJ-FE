import * as S from "./TransferWriting.style";
import TransferItem from "./transferItem/TransferItem";

import { fetchTransferItems } from "@/apis/fetchTransferItems";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { fetchUserInfo } from "@apis/fetchUserInfo.ts";
import NoResult from "@components/noResult/NoResult";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";
import { ACCESS_TOKEN, ERROR_CODE } from "@/constants/api";
import { ResponseError } from "@/components/error/Error";

const TransferWriting = () => {
  const { handleToast } = useToastConfig();

  const { data: userData, isLoading } = useQuery({
    queryKey: ["UserInfo"],
    queryFn: fetchUserInfo,
  });

  const { data: transferData } = useQuery({
    queryKey: ["TransferItemList", userData?.id],
    queryFn: fetchTransferItems,
    enabled: !!userData?.id,
  });

  const token = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    if (!userData?.linkedToYanolja || !token) return;
    handleToast(false, [<>야놀자</>, "에서 예약하신 상품만 판매 가능해요."]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userData?.linkedToYanolja]);

  if (isLoading) return;

  if (!token) {
    throw new ResponseError(
      ERROR_CODE.UNAUTHORIZED_WRITE_TRANSFER,
      "토큰이 없습니다.",
    );
  }

  if (!userData || !userData.linkedToYanolja) {
    throw new ResponseError(
      ERROR_CODE.UNAUTHORIZED_YANOLJA,
      "야놀자 계정 연동이 필요합니다.",
    );
  }

  return (
    <S.Container>
      <S.Subtitle>판매할 내역을 선택해주세요.</S.Subtitle>
      <S.TransferItemList>
        {transferData &&
          transferData.length !== 0 &&
          transferData.map((item) => {
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
        {transferData && transferData.length === 0 && (
          <NoResult
            title="판매 가능한 상품이 없습니다."
            desc="야놀자에서 예약한 데이터들이 "
            buttonDesc="홈으로 가기"
            navigateTo={PATH.ROOT}
          />
        )}
      </S.TransferItemList>
    </S.Container>
  );
};

export default TransferWriting;
