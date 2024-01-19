import ItemCarousel from "@components/itemCarousel/ItemCarousel";
import { useState } from "react";
import * as S from "./Home.style";
import TitleSection from "./titleSection/TitleSection";
import NavToSearchSection from "./navToSearchSection/NavToSearchSection";
import { LocaleItemsType, LocaleItem } from "@type/saleSection";

import percentImg from "@assets/bankImages/hana.png";
import { locale } from "@constants/locale";

const Home = () => {
  const localeItems: LocaleItemsType = {
    seoul: [
      {
        id: 101,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 102,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
    ],
    gangwon: [
      {
        id: 103,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 104,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
    ],
    busan: [
      {
        id: 105,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 106,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
    ],
    jeju: [
      {
        id: 107,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 108,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
    ],
    gyeongsang: [
      {
        id: 109,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 110,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
    ],
    jeolla: [
      {
        id: 111,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 112,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl: percentImg,
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
    ],
  };

  const localeEntries: [number, string, LocaleItem[]][] = Object.entries(
    localeItems,
  )
    .filter((v) => v[1] !== null)
    .map((v, i) => [i, v[0], v[1]]);

  const [localeAndHotel] = useState(localeEntries);
  const [currentLocale, setCurrentLocale] = useState<
    [number, string, LocaleItem[]]
  >(localeAndHotel[0]);

  // const leftBtnRef = useRef(null);
  // const RightBtnRef = useRef(null);

  return (
    <S.Container>
      <TitleSection />
      <NavToSearchSection />

      <S.SaleCarouselContainer>
        <S.TextSlider>
          <span>
            <strong>{locale[currentLocale[1]]}</strong> 지역
          </span>
          <span>
            <strong className="percentage">
              최대 {currentLocale[2][0].salePercentage * 100}%
            </strong>{" "}
            할인 호텔
          </span>
        </S.TextSlider>
        <div className="divider"></div>
        <ItemCarousel
          localeAndHotel={localeAndHotel}
          onChangeLocale={setCurrentLocale}
          height={312}
          arrows={true}
          infinite={false}
          draggable={true}
        />
        <div className="divider"></div>
        <S.SequneceIndicator>
          {/* FIXME: layout애니메이션 적용한 인디케이터 */}
        </S.SequneceIndicator>
      </S.SaleCarouselContainer>

      <S.WeekendCarouselContainer />
    </S.Container>
  );
};

export default Home;
