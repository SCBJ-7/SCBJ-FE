import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

import * as S from "./RoomMapPopup.style";

import { getGeoCoder } from "@/apis/map";
import IconMapPin from "@/assets/icons/ic_map-pin.svg?react";
import Header from "@/components/layout/header/HeaderTop";
import { Portal } from "@/components/ui/portal";
import { Typo } from "@/components/ui/typo";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface RoomMapPopupProps {
  isOpen: boolean;
  close: () => void;
  mapInfo: {
    hotelName: string;
    address: string;
  };
}

const RoomMapPopup = ({ isOpen, close, mapInfo }: RoomMapPopupProps) => {
  const { data: geocoder } = useSuspenseQuery({
    queryKey: ["map"],
    queryFn: () => getGeoCoder(mapInfo.address),
    select: (data) => {
      const x = data.documents[0].x;
      const y = data.documents[0].y;
      return { x, y };
    },
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef(null);

  const handleClickCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("주소가 복사 되었습니다");
    } catch (e) {
      alert("주소 복사에 실패했습니다");
    }
  };

  useEffect(() => {
    if (!isOpen || !geocoder) {
      return;
    }

    const container = mapRef.current;
    if (container && !mapInstance.current) {
      const position = new window.kakao.maps.LatLng(geocoder.y, geocoder.x);
      const options = {
        center: position,
        level: 3,
      };

      mapInstance.current = new window.kakao.maps.Map(container, options);

      new window.kakao.maps.Marker({
        map: mapInstance.current,
        position,
      });
    }
  }, [isOpen, geocoder]);

  useEffect(() => {
    return () => {
      if (mapInstance.current) {
        // 지도 인스턴스가 존재하는 경우, null 처리
        mapInstance.current = null;
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <Portal>
      <S.Container>
        <Header text="지도" handleBackClick={close} />
        <S.MapWrapper>
          <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
        </S.MapWrapper>
        <S.InfoContainer>
          <S.InfoWrapper>
            <Typo typo="title3">{mapInfo.hotelName}</Typo>
            <S.AddressWrapper>
              <S.IconWrapper>
                <IconMapPin />
                <Typo variant="body4">{mapInfo.address}</Typo>
              </S.IconWrapper>
              <Typo
                as="button"
                type="button"
                typo="body4"
                color="percentBlue"
                onClick={() => handleClickCopy(mapInfo.address)}
              >
                주소 복사
              </Typo>
            </S.AddressWrapper>
          </S.InfoWrapper>
        </S.InfoContainer>
      </S.Container>
    </Portal>
  );
};

export default RoomMapPopup;
