import { useNavigate } from "react-router-dom";
import type { RoomNavBarData } from "@type/room";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";

import * as S from "./RoomNavBar.style";
import { useStockQuery } from "@/hooks/api/useStockQuery";
import useAuthStore from "@/store/authStore";

interface RoomNavBarProps {
  room: RoomNavBarData;
  roomId: string;
  discount: string;
}

const RoomNavBar = ({ room, roomId, discount }: RoomNavBarProps) => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { handleToast } = useToastConfig();
  const { refetch } = useStockQuery(roomId);

  const handlePurchaseClick = async () => {
    if (!isLoggedIn) return;

    if (room.isSeller) {
      handleToast(true, [<>내가 판매하는 상품은 구매가 불가합니다</>]);
      return;
    } else if (!room.saleStatus) {
      return;
    }

    const stockData = await refetch();

    if (stockData?.data?.hasStock) {
      navigate(PATH.PAYMENT(roomId));
    } else {
      handleToast(true, [<>이미 판매완료된 상품입니다</>]);
    }
  };

  return (
    <S.Wrapper>
      <S.ColWrapper>
        <S.Text variant="body3" color="greyScale3">
          <s>{room.originalPrice.toLocaleString()}원</s>
        </S.Text>
        <S.Row2>
          <S.Text variant="title2" color="percentBlue">
            {discount}%
          </S.Text>
          <S.Text variant="title2">
            {room.sellingPrice.toLocaleString()}원
          </S.Text>
        </S.Row2>
      </S.ColWrapper>
      <S.Button
        type="button"
        $status={room.saleStatus}
        aria-label="구매하기"
        onClick={handlePurchaseClick}
      >
        구매하기
      </S.Button>
    </S.Wrapper>
  );
};

export default RoomNavBar;
