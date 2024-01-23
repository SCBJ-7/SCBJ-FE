import Carousel from "@components/carousel/Carousel";
import RoomHeader from "@pages/roomDetailPage/components/roomHeader/RoomHeader";
import RoomInfo from "@pages/roomDetailPage/components/roomInfo/RoomInfo";
import RoomNavBar from "@pages/roomDetailPage/components/roomNavBar/RoomNavBar";

import useToastConfig from "@hooks/common/useToastConfig";
import { useRoomQuery } from "@hooks/api/useRoomQuery";
import { useParams } from "react-router-dom";

import * as S from "./RoomDetail.style";
import { useEffect } from "react";

const RoomDetail = () => {
  const { roomId } = useParams();
  if (!roomId) throw new Error("존재하지 않는 roomId 입니다.");

  const { data } = useRoomQuery(roomId);
  const { rawData, discountRate } = data;

  const { handleToast } = useToastConfig();

  useEffect(() => {
    if (rawData.isSeller) {
      handleToast(false, ["내가 판매 중인 상품입니다"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawData.isSeller]);

  return (
    <S.Container>
      <RoomHeader title={rawData.hotelName} />
      <Carousel
        images={rawData.hotelImageUrlList}
        height={300}
        arrows={true}
        infinite={false}
        innerShadow={true}
        draggable={true}
      />
      <RoomInfo room={rawData} discount={discountRate} />
      <RoomNavBar room={rawData} discount={discountRate} roomId={roomId} />
    </S.Container>
  );
};

export default RoomDetail;
