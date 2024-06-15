import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LikeButton from "./LikeButton";
import * as S from "./RoomNavBar.style";

import type { RoomNavBarData } from "@/types/room";

import { ResponseError } from "@/components/error/Error";
import { Button } from "@/components/ui/button";
import { Typo } from "@/components/ui/typo";
import { STATUS_CODE } from "@/constants/api";
import { PATH } from "@/constants/path";
import { useStockQuery } from "@/hooks/api/useStockQuery";
import useToastConfig from "@/hooks/common/useToastConfig";
import useAuthStore from "@/store/authStore";

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

  const buttonConfig = {
    buyer: {
      text: "즉시 구매",
      action: handlePurchaseClick,
    },
    seller: {
      text: "판매 취소",
      action: () => console.log("판매 취소 로직"),
    },
  };

  const userType = room.isSeller ? "seller" : "buyer";

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return (
    <S.Wrapper>
      <LikeButton productId={roomId} />
      <S.Infowrapper>
        <S.TextWrapper>
          <S.PriceWrapper>
            <Typo typo="button4" color="percentBlue">
              {discount}%
            </Typo>
            <Typo typo="button5" color="greyScale3">
              <s>{room.originalPrice.toLocaleString()}원</s>
            </Typo>
          </S.PriceWrapper>
          <Typo typo="title3">{room.sellingPrice.toLocaleString()}원</Typo>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <Button
            type="button"
            variant="solid"
            size="md"
            width="full"
            disabled={!room.saleStatus}
            onClick={buttonConfig[userType].action}
          >
            {buttonConfig[userType].text}
          </Button>
        </S.ButtonWrapper>
      </S.Infowrapper>
    </S.Wrapper>
  );
};

export default RoomNavBar;
