import IconInfoMark from "@assets/icons/ic_question-mark.svg?react";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./RoomNavBar.style";

import type { TButtonVariant } from "./RoomNavBar.style";
import type { RoomNavBarData } from "@type/room";

import { ResponseError } from "@/components/error/Error";
import { STATUS_CODE } from "@/constants/api";
import { useStockQuery } from "@/hooks/api/useStockQuery";
import useAuthStore from "@/store/authStore";

interface ButtonProps {
  text: ReactElement;
  action: () => void;
  status: boolean;
  variant?: TButtonVariant;
}

const Button = ({ text, action, status, variant }: ButtonProps) => {
  return (
    <S.Button
      type="button"
      variant={variant}
      disabled={!status}
      onClick={action}
    >
      {text}
    </S.Button>
  );
};

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
        text: (
          <>
            가격 제안
            <IconInfoMark />
          </>
        ),
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
          {...buttonConfig.propose[userType]}
          status={room.saleStatus}
          variant="outline"
        />
        <Button
          {...buttonConfig.purchase[userType]}
          status={room.saleStatus}
          variant="fill"
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default RoomNavBar;
