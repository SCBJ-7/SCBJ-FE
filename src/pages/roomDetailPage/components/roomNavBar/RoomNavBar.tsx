import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./RoomNavBar.style";

import type { RoomNavBarData } from "@/types/room";

import IconInfoMark from "@/assets/icons/ic_question-mark.svg?react";
import { ResponseError } from "@/components/error/Error";
import { Button } from "@/components/ui/button";
import { STATUS_CODE } from "@/constants/api";
import { PATH } from "@/constants/path";
import { useStockQuery } from "@/hooks/api/useStockQuery";
import useToastConfig from "@/hooks/common/useToastConfig";
import useAuthStore from "@/store/authStore";

interface RoomNavBarProps {
  room: RoomNavBarData;
  roomId: string;
}

const RoomNavBar = ({ room, roomId }: RoomNavBarProps) => {
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
    propose: {
      buyer: {
        text: "가격 제안",
        action: () => console.log("가격 제안 페이지로 이동"),
      },
      seller: {
        text: "받은 가격 제안",
        action: () => console.log("받은 가격 제안으로 이동"),
      },
    },
    purchase: {
      buyer: {
        text: "즉시 구매",
        action: handlePurchaseClick,
      },
      seller: {
        text: "판매 취소",
        action: () => console.log("판매 취소 로직"),
      },
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
      <S.Heart />
      <S.ButtonWrapper>
        <Button
          type="button"
          variant="outline"
          size="md"
          width="full"
          disabled={!room.saleStatus}
          onClick={buttonConfig.propose[userType].action}
          rightAddon={
            room.isSeller || (
              <IconInfoMark fill={room.saleStatus ? "#FF7C17" : "#CDCDCD"} />
            )
          }
        >
          {buttonConfig.propose[userType].text}
        </Button>
        <Button
          type="button"
          variant="solid"
          size="md"
          width="full"
          disabled={!room.saleStatus}
          onClick={buttonConfig.purchase[userType].action}
        >
          {buttonConfig.purchase[userType].text}
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default RoomNavBar;
