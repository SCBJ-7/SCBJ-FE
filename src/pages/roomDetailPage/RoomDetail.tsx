import { getRoom } from "@apis/fetchRoom";

import Carousel from "@components/carousel/Carousel";
import RoomHeader from "@pages/roomDetailPage/components/roomHeader/RoomHeader";
import RoomInfo from "@pages/roomDetailPage/components/roomInfo/RoomInfo";
import RoomNavBar from "@pages/roomDetailPage/components/roomNavBar/RoomNavBar";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { RoomData } from "@type/room";
import type { AxiosError } from "axios";
import { useParams } from "react-router-dom";

import * as S from "./RoomDetail.style";

const RoomDetail = () => {
  const { roomId } = useParams();
  if (!roomId) throw new Error("존재하지 않는 roomId 입니다.");

  const { data } = useSuspenseQuery<RoomData, AxiosError>({
    queryKey: ["room"],
    queryFn: () => getRoom(roomId),
  });

  return (
    <S.Container>
      <RoomHeader title={data.hotelName} />
      <Carousel
        images={data.hotelImageUrl}
        height={300}
        arrows={true}
        infinite={false}
        innerShadow={true}
        draggable={true}
      />
      <RoomInfo room={data} />
      <RoomNavBar room={data} />
    </S.Container>
  );
};

export default RoomDetail;
