import IconBed from "@assets/icons/ic_bed.svg?react";
import IconCaretRight from "@assets/icons/ic_caret_right.svg?react";
import IconUser from "@assets/icons/ic_users.svg?react";
import Box from "@components/box/Box";
import Flex from "@components/flex/Flex";
import Stack from "@components/stack/Stack";
import Text from "@components/text/Text";

import RoomThemeOption from "@pages/roomDetailPage/components/roomThemeOption/RoomThemeOption";
import type { RoomData } from "@type/room";
import { calculateDiscount } from "@utils/calculator";
import { formatDate } from "@utils/dateFormater";
import * as S from "./RoomInfo.style";

interface RoomInfoProps {
  room: RoomData;
}

const RoomInfo = ({ room }: RoomInfoProps) => {
  const discountRate = calculateDiscount(room.originalPrice, room.sellingPrice);

  const checkInDate = formatDate(room.checkIn);
  const checkOutDate = formatDate(room.checkOut);
  return (
    <>
      <S.DetailSection>
        <Stack spacing={8}>
          <Box>
            <Text variant="title2">{room.hotelName}</Text>
            <Text variant="body3">{room.roomName}</Text>
          </Box>
          <Flex direction="column" gap="0.5rem">
            <S.ItemWrapper>
              <Text>정가</Text>
              <Text color="greyScale3">
                <s>{room.originalPrice.toLocaleString()}원</s>
              </Text>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <Text>판매가</Text>
              <Flex gap="0.5rem">
                <Text variant="title2" color="percentBlue">
                  {discountRate}%
                </Text>
                <Text variant="title2">
                  {room.sellingPrice.toLocaleString()}원
                </Text>
              </Flex>
            </S.ItemWrapper>
          </Flex>
          <Stack spacing={1} direction="row">
            <S.LeftBox>
              <Text variant="body3" color="greyScale1">
                체크인
              </Text>
              <Text variant="body3">{checkInDate}</Text>
            </S.LeftBox>
            <S.RightBox>
              <Text variant="body3" color="greyScale1">
                체크아웃
              </Text>
              <Text variant="body3">{checkOutDate}</Text>
            </S.RightBox>
          </Stack>
        </Stack>
      </S.DetailSection>

      <S.DetailSection>
        <Stack spacing={8}>
          <Stack spacing={1}>
            <Text variant="body3">기본 정보</Text>
            <Stack spacing={5} direction="row">
              <Flex gap="0.5rem" align="center">
                <IconUser />
                <Text variant="body3">
                  기준 {room.standardPeople}인 / 최대 {room.maxPeople}인
                </Text>
              </Flex>
              <Flex gap="0.5rem" align="center">
                <IconBed />
                <Text variant="body3">{room.bedType}</Text>
              </Flex>
            </Stack>
          </Stack>
          <Stack spacing={1}>
            <Text variant="body3">부가 정보</Text>
            <RoomThemeOption option={room.roomTheme} />
          </Stack>
          <Stack spacing={1}>
            <Text variant="body3">위치 정보</Text>
            <Text variant="body3">{room.hotelAddress}</Text>
          </Stack>
          <Box
            as="a"
            href={room.hotelInfoUrl}
            target="_blank"
            aria-label="상세 정보 보기"
          >
            <Flex justify="flex-end" align="center" gap="0.3rem">
              <Text variant="button2" color="greyScale1">
                상세 정보 보기
              </Text>
              <IconCaretRight />
            </Flex>
          </Box>
        </Stack>
      </S.DetailSection>
    </>
  );
};

export default RoomInfo;
