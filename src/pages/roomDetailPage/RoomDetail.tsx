import { useEffect } from "react";
import { useParams } from "react-router-dom";

import * as S from "./RoomDetail.style";

import Carousel from "@/components/carousel/Carousel";
import { HelmetTag } from "@/components/Helmet/Helmet";
import { useRoomQuery } from "@/hooks/api/useRoomQuery";
import useToastConfig from "@/hooks/common/useToastConfig";
import RoomHeader from "@/pages/roomDetailPage/components/roomHeader/RoomHeader";
import RoomInfo from "@/pages/roomDetailPage/components/roomInfo/RoomInfo";
import RoomNavBar from "@/pages/roomDetailPage/components/roomNavBar/RoomNavBar";
import useAuthStore from "@/store/authStore";

const RoomDetail = () => {
  const { productId } = useParams();

  if (!productId) throw new Error("존재하지 않는 roomId 입니다.");

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const { data } = useRoomQuery(productId, isLoggedIn);
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
      <HelmetTag text={rawData.hotelName} />
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
      <RoomNavBar room={rawData} roomId={productId} />
    </S.Container>
  );
};

export default RoomDetail;
