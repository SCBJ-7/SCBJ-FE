import Carousel from "@components/carousel/Carousel";
import RoomInfo from "@pages/roomDetailPage/components/roomInfo/RoomInfo";
import RoomNavBar from "@pages/roomDetailPage/components/roomNavBar/RoomNavBar";
import { dummyData } from "./RoomDetail.data";

import * as S from "./RoomDetail.style";

const RoomDetail = () => {
  const { data } = dummyData;

  return (
    <S.Container>
      <Carousel
        images={data.hotelImageUrl}
        width="100%"
        height={300}
        arrows={true}
        infinite={false}
      />
      <RoomInfo room={data} />
      <RoomNavBar room={data} />
    </S.Container>
  );
};

export default RoomDetail;
