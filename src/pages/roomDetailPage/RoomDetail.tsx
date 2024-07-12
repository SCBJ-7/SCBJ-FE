import { useEffect } from "react";
import { useParams } from "react-router-dom";

import * as S from "./RoomDetail.style";

import type { RoomData } from "@/types/room";

import Carousel from "@/components/carousel/Carousel";
import { HelmetTag } from "@/components/Helmet/Helmet";
import { useRoomQuery } from "@/hooks/api/useRoomQuery";
import useToastConfig from "@/hooks/common/useToastConfig";
import RoomHeader from "@/pages/roomDetailPage/components/roomHeader/RoomHeader";
import RoomInfo from "@/pages/roomDetailPage/components/roomInfo/RoomInfo";
import RoomNavBar from "@/pages/roomDetailPage/components/roomNavBar/RoomNavBar";
import useAuthStore from "@/store/authStore";

interface RoomDetailViewProps {
  roomData: RoomData;
  discountRate: string;
  productId: string;
}

const RoomDetailView = ({
  roomData,
  discountRate,
  productId,
}: RoomDetailViewProps) => {
  const { handleToast } = useToastConfig();

  useEffect(() => {
    if (roomData.isSeller) {
      handleToast(false, ["내가 판매 중인 상품입니다"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomData.isSeller]);

  return (
    <S.Container>
      <RoomHeader title={roomData.hotelName} />
      <Carousel
        images={roomData.hotelImageUrlList}
        height={300}
        arrows={true}
        infinite={false}
        innerShadow={true}
        draggable={true}
      />
      <RoomInfo room={roomData} discount={discountRate} />
      <RoomNavBar room={roomData} discount={discountRate} roomId={productId} />
    </S.Container>
  );
};

const RoomDetail = () => {
  const { productId } = useParams();

  if (!productId) throw new Error("존재하지 않는 roomId 입니다.");

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { data } = useRoomQuery(productId, isLoggedIn);
  const { rawData, discountRate } = data;

  const amenities = [
    rawData.roomTheme.parkingZone && "주차장",
    rawData.roomTheme.breakfast && "조식",
    rawData.roomTheme.pool && "수영장",
    rawData.roomTheme.oceanView && "오션뷰",
  ].filter(Boolean);

  const schemaData = {
    "@type": "Hotel",
    name: rawData.hotelName,
    image: rawData.hotelImageUrlList,
    address: {
      "@type": "PostalAddress",
      streetAddress: rawData.hotelAddress,
      addressCountry: "KR",
    },
    starRating: {
      "@type": "Rating",
      ratingValue: rawData.hotelLevel,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rawData.roomAllRating,
      bestRating: "5",
      worstRating: "1",
    },
    amenityFeature: amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    })),
    url: rawData.hotelInfoUrl,
    offers: {
      "@type": "Offer",
      name: rawData.roomName,
      price: rawData.sellingPrice,
      priceCurrency: "KRW",
      availability: rawData.saleStatus
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      validFrom: rawData.checkIn,
      validThrough: rawData.checkOut,
      priceValidUntil: rawData.checkOut,
    },
    containsPlace: {
      "@type": "HotelRoom",
      name: rawData.roomName,
      occupancy: {
        "@type": "QuantitativeValue",
        minValue: rawData.standardPeople,
        maxValue: rawData.maxPeople,
      },
      bed: {
        "@type": "BedDetails",
        typeOfBed: rawData.bedType,
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: rawData.facilityInformation,
        },
      ],
    },
  };

  return (
    <>
      <HelmetTag
        title={`${rawData.hotelName} - ${rawData.roomName}`}
        schemaType="Hotel"
        schemaData={schemaData}
      />
      <RoomDetailView
        roomData={rawData}
        discountRate={discountRate}
        productId={productId}
      />
    </>
  );
};

export default RoomDetail;
