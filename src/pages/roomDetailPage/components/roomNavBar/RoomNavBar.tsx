import { useOverlay } from "@toss/use-overlay";
import { useNavigate } from "react-router-dom";

import LikeButton from "./LikeButton";
import * as S from "./RoomNavBar.style";
import DiscontinuePopup from "../discontinuePopup/DiscontinuePopup";

import type { RoomNavBarData } from "@/types/room";

import { ResponseError } from "@/components/error/Error";
import { Button } from "@/components/ui/button";
import { Typo } from "@/components/ui/typo";
import { STATUS_CODE } from "@/constants/api";
import { PATH } from "@/constants/path";
import { useDiscontinueMutation } from "@/hooks/api/useDiscontinueQuery";
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
  const overlay = useOverlay();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { handleToast } = useToastConfig();
  const { refetch } = useStockQuery(roomId);
  const { deleteProduct } = useDiscontinueMutation();

  const checkLoggedIn = () => {
    if (!isLoggedIn) {
      throw new ResponseError(STATUS_CODE.UNAUTHORIZED, "로그인이 필요합니다.");
    }
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
    checkLoggedIn();
    await processPurchase();
  };

  const handleDiscontinueProduct = () => {
    deleteProduct(roomId),
      {
        onSuccess: () => overlay.close(),
      };
  };

  const openDiscontinuePopup = () =>
    overlay.open(({ isOpen, close }) => (
      <DiscontinuePopup
        isOpen={isOpen}
        onClose={close}
        action={handleDiscontinueProduct}
      />
    ));

  const buttonConfig = {
    buyer: {
      text: "즉시 구매",
      action: handlePurchaseClick,
    },
    seller: {
      text: "판매 취소",
      action: openDiscontinuePopup,
    },
  };

  const userType = room.isSeller ? "seller" : "buyer";

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
