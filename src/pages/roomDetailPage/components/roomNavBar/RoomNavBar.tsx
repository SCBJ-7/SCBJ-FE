import Flex from "@components/flex/Flex";
import Text from "@components/text/Text.tsx";
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
      <Flex direction="column">
        <Text variant="body3" color="greyScale3">
          <s>{room.originalPrice.toLocaleString()}원</s>
        </Text>
        <Flex justify="space-between" align="center">
          <Flex gap="0.5rem">
            <Text variant="title2" color="percentBlue">
              {discountRate}%
            </Text>
            <Text variant="title2">{room.sellingPrice.toLocaleString()}원</Text>
          </Flex>
          <S.Button $status={room.saleStatus} aria-label="구매하기">
            구매하기
          </S.Button>
        </Flex>
      </Flex>
    </S.Wrapper>
  );
};

export default RoomNavBar;
