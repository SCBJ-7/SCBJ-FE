import { getRoom } from "@apis/getRoom";
import Carousel from "@components/carousel/Carousel";
import RoomHeader from "@pages/roomDetailPage/components/roomHeader/RoomHeader";
import RoomInfo from "@pages/roomDetailPage/components/roomInfo/RoomInfo";
import RoomNavBar from "@pages/roomDetailPage/components/roomNavBar/RoomNavBar";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { RoomData } from "@type/room";
import type { AxiosError } from "axios";
import * as S from "./RoomDetail.style";

const RoomDetail = () => {
  const { data } = useSuspenseQuery<RoomData, AxiosError>({
    queryKey: ["room"],
    queryFn: () => getRoom(1),
  });

  return (
    <S.Container>
      <RoomHeader title={data.hotelName} />
      <Carousel
        images={data.hotelImageUrl}
        width="100%"
        height={300}
        arrows={true}
        infinite={false}
        innerShadow={true}
      />
      <RoomInfo room={data} />
      <RoomNavBar room={data} />
    </S.Container>
  );
};

export default RoomDetail;
