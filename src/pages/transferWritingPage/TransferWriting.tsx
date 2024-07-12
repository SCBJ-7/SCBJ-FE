import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import TransferItem from "./transferItem/TransferItem";
import * as S from "./TransferWriting.style";

import { fetchTransferItems } from "@/apis/fetchTransferItems";
import { fetchUserInfo } from "@/apis/fetchUserInfo.ts";
import { ResponseError } from "@/components/error/Error";
import { HelmetTag } from "@/components/Helmet/Helmet";
import NoResult from "@/components/noResult/NoResult";
import { ERROR_CODE } from "@/constants/api";
import { PATH } from "@/constants/path";
import useToastConfig from "@/hooks/common/useToastConfig";
import useAuthStore from "@/store/authStore";

const TransferWritingView = () => {
  const { handleToast } = useToastConfig();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const { data: userData, isLoading } = useQuery({
    queryKey: ["UserInfo"],
    queryFn: fetchUserInfo,
  });

  const { data: transferData } = useQuery({
    queryKey: ["TransferItemList", userData?.id],
    queryFn: fetchTransferItems,
    enabled: !!userData?.id,
  });

  useEffect(() => {
    if (!userData?.linkedToYanolja || !isLoggedIn) return;
    handleToast(false, [<>야놀자</>, "에서 예약하신 상품만 판매 가능해요."]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, userData?.linkedToYanolja]);

  if (isLoading) return;

  if (!isLoggedIn) {
    throw new ResponseError(
      ERROR_CODE.UNAUTHORIZED_WRITE_TRANSFER,
      "로그인이 필요합니다.",
    );
  }

  if (!userData?.linkedToYanolja) {
    throw new ResponseError(
      ERROR_CODE.UNAUTHORIZED_YANOLJA,
      "야놀자 계정 연동이 필요합니다.",
    );
  }

  const dtAfter14 = new Date();
  dtAfter14.setDate(dtAfter14.getDate() + 14);

  // const dummy = [
  //   {
  //     reservationId: 10,
  //     hotelName: "이쁜 호텔",
  //     roomName: "스텐다드 더블",
  //     startDate: new Date(),
  //     endDate: dtAfter14,
  //     refundPrice: 100000,
  //     purchasePrice: 150000,
  //     remainingDays: 14,
  //     remainingTimes: 14 * 24,
  //     imageUrl:
  //       "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/PxG_GVE_Blog_Header-bike_1.width-1300.png",
  //   },
  // ];

  return (
    <S.Container>
      {transferData?.length !== 0 && (
        <S.Subtitle>판매할 내역을 선택해주세요.</S.Subtitle>
      )}
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
            desc="야놀자에서 예약한 데이터들이 없습니다."
            buttonDesc="홈으로 가기"
            navigateTo={PATH.ROOT}
          />
        )}
      </S.TransferItemList>
    </S.Container>
  );
};

const TransferWriting = () => {
  const schemaData = {
    "@type": "WebPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}${PATH.WRITE_TRANSFER}`,
    },
  };

  return (
    <>
      <HelmetTag title="판매하기" schemaData={schemaData} />
      <TransferWritingView />
    </>
  );
};

export default TransferWriting;
