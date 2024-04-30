import IconBed from "@assets/icons/ic_bed.svg?react";
import IconCaretRight from "@assets/icons/ic_caret_right.svg?react";
import IconChat from "@assets/icons/ic_chat-fill.svg?react";
import IconMapPin from "@assets/icons/ic_map-pin.svg?react";
import IconStar from "@assets/icons/ic_star-fill.svg?react";
import IconUser from "@assets/icons/ic_users.svg?react";
import RoomThemeOption from "@pages/roomDetailPage/components/roomThemeOption/RoomThemeOption";
import * as S from "@pages/roomDetailPage/RoomDetail.style";
import { formatDateAndTime } from "@utils/dateFormatter";
import { useLocation } from "react-router-dom";

import ExpandableContent from "./ExpandableContent";

import type { RoomData } from "@type/room";

import Tag from "@/components/tag/Tag";

interface RoomInfoProps {
  room: RoomData;
  discount: string;
}

const RoomInfo = ({ room, discount }: RoomInfoProps) => {
  const location = useLocation();
  const { pathname } = location;

  const checkInDate = formatDateAndTime(room.checkIn);
  const checkOutDate = formatDateAndTime(room.checkOut);

  const params = new URLSearchParams();
  params.append("address", room.hotelAddress);

  return (
    <>
      <S.DetailSection>
        <S.HStack1>
          <S.Row1>
            <IconStar />
            <S.Text variant="body3">
              {room.roomAllRating + " · " + room.hotelLevel}
            </S.Text>
          </S.Row1>
          <S.Text variant="title2">{room.hotelName}</S.Text>
          <S.Text variant="body2">{room.roomName}</S.Text>
        </S.HStack1>

        <S.MapWrapper>
          <S.MapLink to={pathname + "/map?" + params}>
            <IconMapPin />
            <S.Text variant="body4">{room.hotelAddress}</S.Text>
            <S.IconArrow />
          </S.MapLink>
        </S.MapWrapper>

        <S.VStack1>
          <S.LeftBox>
            <S.Text variant="body3" color="greyScale3">
              체크인
            </S.Text>
            <S.Text variant="body2">
              {checkInDate.date}
              <br />
              {checkInDate.time}
            </S.Text>
          </S.LeftBox>
          <S.RightBox>
            <S.Text variant="body3" color="greyScale3">
              체크아웃
            </S.Text>
            <S.Text variant="body2">
              {checkOutDate.date}
              <br />
              {checkOutDate.time}
            </S.Text>
          </S.RightBox>
        </S.VStack1>

        <S.Col>
          <S.ItemWrapper>
            <S.Text>야놀자 정가</S.Text>
            <S.Row>
              <S.Text variant="button4" color="percentBlue">
                {discount}%
              </S.Text>
              <S.Text variant="body4" color="greyScale3">
                <s>{room.originalPrice.toLocaleString()}원</s>
              </S.Text>
            </S.Row>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <S.Text>거래 희망가</S.Text>
            <S.Text variant="title2">
              {room.sellingPrice.toLocaleString()}원
            </S.Text>
          </S.ItemWrapper>
        </S.Col>
      </S.DetailSection>

      {room.sellerCommentList && (
        <S.DetailSection>
          <S.VStack3>
            <S.Row>
              <IconChat />
              <S.Text variant="body2">판매자 코멘트</S.Text>
            </S.Row>
            <ExpandableContent>
              {room.sellerCommentList.map((item, index) => (
                <Tag key={index}>{item}</Tag>
              ))}
            </ExpandableContent>
          </S.VStack3>
        </S.DetailSection>
      )}

      <S.DetailSection>
        <S.HStack5>
          <S.HStack1>
            <S.Text variant="body3">기본 정보</S.Text>
            <S.VStack5>
              <S.Row>
                <IconUser />
                <S.Text variant="body4" color="greyScale2">
                  기준 {room.standardPeople}인 / 최대 {room.maxPeople}인
                </S.Text>
              </S.Row>
              <S.Row>
                <IconBed />
                <S.Text variant="body4">{room.bedType}</S.Text>
              </S.Row>
            </S.VStack5>
          </S.HStack1>
          <S.HStack1>
            <S.Text variant="body3">부가 정보</S.Text>
            <RoomThemeOption option={room.roomTheme} />
          </S.HStack1>
          <S.HStack1>
            <S.Text variant="body3">추가 정보</S.Text>
            <S.VStack5>
              <S.Text variant="body4" color="greyScale2">
                {room.facilityInformation}
              </S.Text>
            </S.VStack5>
          </S.HStack1>
          <a
            href={room.hotelInfoUrl}
            target="_blank"
            rel="noopener"
            aria-label="상세 정보 보기"
          >
            <S.MoreInfoWrapper>
              <S.Text
                className="underline"
                variant="caption3"
                color="greyScale1"
              >
                상세 정보 보러가기
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
