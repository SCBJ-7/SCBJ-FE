import { PATH } from "@/constants/path";
import { theme } from "@/styles/theme";
import { IReservation } from "@/types/reservationList";
import priceFormat from "@utils/priceFormat";
import { format } from "date-fns/format";
import { ko } from "date-fns/locale";
import { motion, useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as S from "./TransferItem.style";
import { useSelectedItemStore } from "@/store/store";

const TransferItem = ({
  reservationId,
  hotelName,
  roomName,
  startDate,
  endDate,
  refundPrice,
  purchasePrice,
  remainingDays,
  remainingTimes,
  imageUrl,
}: IReservation) => {
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  const setSelectedItem = useSelectedItemStore(
    (state) => state.setSelectedItem,
  );

  const SDT = format(startDate, "yyyy. mm. dd (ccc)", {
    locale: ko,
  });
  const EDT = format(endDate, "yyyy. mm. dd (ccc)", {
    locale: ko,
  });

  const navigateHandler = async () => {
    await new Promise((resolve) => {
      animate(
        scope.current,
        {
          border: `1px solid ${theme.color.percentOrange}`,
          boxShadow: "4px 4px 40px 0 rgba(255, 124, 23, 0.06)",
        },
        { duration: 0.1 },
      );
      setTimeout(() => {
        resolve(true);
      }, 500);
    });

    setSelectedItem({
      reservationId,
      hotelName,
      roomName,
      startDate,
      endDate,
      refundPrice,
      purchasePrice,
      remainingDays,
      remainingTimes,
      imageUrl,
    });

    navigate(
      PATH.WRITE_TRANSFER_PRICE +
        "/" +
        reservationId +
        "?hotelName=" +
        hotelName,
    );
  };

  return (
    <S.ItemContainer
      onClick={navigateHandler}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileTap={{
        scale: 0.98,
      }}
      ref={scope}
    >
      <S.ItemTitle>
        체크인까지 {remainingDays}일 남았어요!
        <S.ItemTitleBtn>
          판매하기
          <S.ItemTitleBtnIcon />
        </S.ItemTitleBtn>
      </S.ItemTitle>
      <S.ItemInfo>
        <S.itemInfoImg src={imageUrl} />
        <S.itemInfoDesc>
          <S.DescHotelName>{hotelName}</S.DescHotelName>
          <S.DescRoomName>{roomName}</S.DescRoomName>
          <S.DescDates>
            {SDT} ~ {EDT}
          </S.DescDates>
        </S.itemInfoDesc>
      </S.ItemInfo>
      <S.ItemPrice>
        <S.PriceTag>
          <h4>구매가</h4>
          <span>{priceFormat(purchasePrice)} 원</span>
        </S.PriceTag>
        <S.PriceTag>
          <h4>예약 취소 시 환불금액</h4>
          <span>{refundPrice} 원</span>
        </S.PriceTag>
      </S.ItemPrice>
    </S.ItemContainer>
  );
};

export default TransferItem;
