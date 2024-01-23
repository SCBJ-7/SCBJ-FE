import RoomThemeOption from "@pages/roomDetailPage/components/roomThemeOption/RoomThemeOption";
import type { RoomData } from "@type/room";
import { formatDate } from "@utils/dateFormatter";
import IconBed from "@assets/icons/ic_bed.svg?react";
import IconCaretRight from "@assets/icons/ic_caret_right.svg?react";
import IconUser from "@assets/icons/ic_users.svg?react";

import * as S from "@pages/roomDetailPage/RoomDetail.style";

interface RoomInfoProps {
  room: RoomData;
  discount: string;
}

const RoomInfo = ({ room, discount }: RoomInfoProps) => {
  const checkInDate = formatDate(room.checkIn);
  const checkOutDate = formatDate(room.checkOut);
  return (
    <>
      <S.DetailSection>
        <S.HStack5>
          <S.HStack1>
            <S.Text variant="title2">{room.hotelName}</S.Text>
            <S.Text variant="body3">{room.roomName}</S.Text>
          </S.HStack1>
          <S.Col>
            <S.ItemWrapper>
              <S.Text>정가</S.Text>
              <S.Text color="greyScale3">
                <s>{room.originalPrice.toLocaleString()}원</s>
              </S.Text>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.Text>판매가</S.Text>
              <S.Row>
                <S.Text variant="title2" color="percentBlue">
                  {discount}%
                </S.Text>
                <S.Text variant="title2">
                  {room.sellingPrice.toLocaleString()}원
                </S.Text>
              </S.Row>
            </S.ItemWrapper>
          </S.Col>
          <S.VStack1>
            <S.LeftBox>
              <S.Text variant="body3" color="greyScale1">
                체크인
              </S.Text>
              <S.Text variant="body3">{checkInDate}</S.Text>
            </S.LeftBox>
            <S.RightBox>
              <S.Text variant="body3" color="greyScale1">
                체크아웃
              </S.Text>
              <S.Text variant="body3">{checkOutDate}</S.Text>
            </S.RightBox>
          </S.VStack1>
        </S.HStack5>
      </S.DetailSection>

      <S.DetailSection>
        <S.HStack5>
          <S.HStack1>
            <S.Text variant="body3">기본 정보</S.Text>
            <S.VStack5>
              <S.Row>
                <IconUser />
                <S.Text variant="body3">
                  기준 {room.standardPeople}인 / 최대 {room.maxPeople}인
                </S.Text>
              </S.Row>
              <S.Row>
                <IconBed />
                <S.Text variant="body3">{room.bedType}</S.Text>
              </S.Row>
            </S.VStack5>
          </S.HStack1>
          <S.HStack1>
            <S.Text variant="body3">부가 정보</S.Text>
            <RoomThemeOption option={room.roomTheme} />
          </S.HStack1>
          <S.HStack1>
            <S.Text variant="body3">위치 정보</S.Text>
            <S.Text variant="body3">{room.hotelAddress}</S.Text>
          </S.HStack1>
          <a
            href={room.hotelInfoUrl}
            target="_blank"
            rel="noopener"
            aria-label="상세 정보 보기"
          >
            <S.MoreInfoWrapper>
              <S.Text variant="button2" color="greyScale1">
                상세 정보 보기
              </S.Text>
              <IconCaretRight />
            </S.MoreInfoWrapper>
          </a>
        </S.HStack5>
      </S.DetailSection>
    </>
  );
};

export default RoomInfo;
