import { format } from "date-fns";
import { ko } from "date-fns/locale";

import * as S from "./ItemInfo.style";

import ProgressiveImg from "@/components/progressiveImg/ProgressiveImg";
import { useSelectedItemStore } from "@/store/store";

const ItemInfo = () => {
  const selectedItem = useSelectedItemStore((state) => state.selectedItem);
  const { hotelName, roomName, startDate, endDate, imageUrl } = selectedItem;

  const SDT = format(startDate, "yyyy. MM. dd (ccc)", {
    locale: ko,
  });
  const EDT = format(endDate, "yyyy. MM. dd (ccc)", {
    locale: ko,
  });
  const SDT_TIME = format(startDate, "HH:mm");
  const EDT_TIME = format(endDate, "HH:mm");

  return (
    <S.Container>
      <S.ItemInfo>
        <ProgressiveImg src={imageUrl} loading="lazy" />
        <S.itemInfoDesc>
          <S.DescHotelName>{hotelName}</S.DescHotelName>
          <S.DescRoomName>{roomName}</S.DescRoomName>
          <S.DescAmount>기준 2인 / 최대 4인</S.DescAmount>
        </S.itemInfoDesc>
      </S.ItemInfo>
      <S.ItemDateSet>
        <S.ItemDate dir="LEFT">
          <h4>체크인</h4>
          <span>{SDT}</span>
          <span>{SDT_TIME}</span>
        </S.ItemDate>
        <S.ItemDate dir="RIGHT">
          <h4>체크아웃</h4>
          <span>{EDT}</span>
          <span>{EDT_TIME}</span>
        </S.ItemDate>
      </S.ItemDateSet>
    </S.Container>
  );
};

export default ItemInfo;
