import { useNavigate } from "react-router-dom";
import type { RoomNavBarData } from "@type/room";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";

import * as S from "./RoomNavBar.style";
import { useStockQuery } from "@/hooks/api/useStockQuery";
import useAuthStore from "@/store/authStore";
import { ResponseError } from "@/components/error/Error";
import { STATUS_CODE } from "@/constants/api";
import { useEffect, useState } from "react";

interface RoomNavBarProps {
  room: RoomNavBarData;
  roomId: string;
  discount: string;
}

const RoomNavBar = ({ room, roomId, discount }: RoomNavBarProps) => {
  const navigate = useNavigate();
  const [error, setError] = useState<unknown>(null);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { handleToast } = useToastConfig();
  const { refetch } = useStockQuery(roomId);

  const checkLoggedIn = () => {
    if (!isLoggedIn) {
      throw new ResponseError(STATUS_CODE.UNAUTHORIZED, "로그인이 필요합니다.");
    }
  };

  const checkPurchaseConditions = () => {
    if (room.isSeller) {
      handleToast(true, [<>내가 판매하는 상품은 구매가 불가합니다</>]);
      return false;
    } else if (!room.saleStatus) {
      return false;
    }
    return true;
  };

  const processPurchase = async () => {
    const stockData = await refetch();
    if (stockData?.data?.hasStock) {
      navigate(PATH.PAYMENT(roomId));
    } else {
      handleToast(true, [<>이미 판매완료된 상품입니다</>]);
    }
  };

  const handlePurchaseClick = async () => {
    try {
      checkLoggedIn();
      const canPurchase = checkPurchaseConditions();
      if (canPurchase) {
        await processPurchase();
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

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
