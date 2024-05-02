import IconMapPin from "@/assets/icons/ic_map-pin.svg?react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { getGeoCoder } from "@/apis/map";
import { ColorKeys, TypoKeys } from "@/styles/theme";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function RoomDetailMaps() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("address");

  if (!query) throw new Error("존재하지 않는 주소입니다.");

  const { data: geocoder } = useSuspenseQuery({
    queryKey: ["map"],
    queryFn: () => getGeoCoder(query),
    select: (data) => {
      const x = data.documents[0].x;
      const y = data.documents[0].y;
      return { x, y };
    },
  });

  const mapRef = useRef<HTMLDivElement>(null);

  const handleClickCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("주소가 복사 되었습니다");
    } catch (e) {
      alert("주소 복사에 실패했습니다");
    }
  };

  useEffect(() => {
    const container = mapRef.current;
    const position = new window.kakao.maps.LatLng(geocoder.y, geocoder.x);
    const options = {
      center: position,
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    const marker = new window.kakao.maps.Marker({
      map: map,
      position,
    });
  }, [geocoder]);

  return (
    <>
      <Container>
        <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
      </Container>
      <InfoContainer>
        <InfoWrapper>
          <Text variant="title3">호텔 인 나인 강남</Text>
          <AddressWrapper>
            <IconWrapper>
              <IconMapPin />
              <Text variant="body4">{query}</Text>
            </IconWrapper>
            <Text
              as="button"
              type="button"
              variant="body4"
              color="percentBlue"
              onClick={() => handleClickCopy(query)}
            >
              주소 복사
            </Text>
          </AddressWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 600;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 24px 20px;
  gap: 16px;
  background: #fff;
  font-size: 0;
  box-shadow: 0 -3px 5px 0 rgba(0, 0, 0, 0.1);
`;

export type VariantProps = {
  variant?: TypoKeys;
  color?: ColorKeys;
};
export const Text = styled.p.withConfig({
  shouldForwardProp: (prop) => !["variant", "color"].includes(prop),
})<VariantProps>`
  ${({ variant, theme }) => variant && theme.typo[variant]};
  color: ${({ color, theme }) => color && theme.color[color]};

  &.underline {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
