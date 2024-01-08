import { RoomNavBarData } from "@type/room";
import { calculateDiscount } from "@utils/calculator";
import * as S from "./RoomNavBar.style";

interface RoomNavBarProps {
  room: RoomNavBarData;
}

const RoomNavBar = ({ room }: RoomNavBarProps) => {
  // FIXME: 패칭 후 가공단계에서 할인율 계산
  const discountRate = calculateDiscount(room.originalPrice, room.sellingPrice);

  return (
    <S.Wrapper>
      <S.ColWrapper>
        <S.Text variant="body3" color="greyScale3">
          <s>{room.originalPrice.toLocaleString()}원</s>
        </S.Text>
        <S.Row2>
          <S.Text variant="title2" color="percentBlue">
            {discountRate}%
          </S.Text>
          <S.Text variant="title2">
            {room.sellingPrice.toLocaleString()}원
          </S.Text>
        </S.Row2>
      </S.ColWrapper>
      <S.Button $status={room.saleStatus} aria-label="구매하기">
        구매하기
      </S.Button>
    </S.Wrapper>
  );
};

export default RoomNavBar;
