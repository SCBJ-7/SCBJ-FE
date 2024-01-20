import ItemCarousel from "@components/itemCarousel/ItemCarousel";
import { useState } from "react";
import * as S from "./Home.style";
import TitleSection from "./titleSection/TitleSection";
import NavToSearchSection from "./navToSearchSection/NavToSearchSection";
import {
  LocaleItemsType,
  LocaleItem,
  WeekendItemsType,
  WeekendItem,
} from "@type/saleSection";

import { locale } from "@constants/locale";
import WeekendCarousel from "./weekendCarousel/WeekendCarousel";

const Home = () => {
  const weekendProds: WeekendItemsType = {
    weekend: [
      {
        id: 103,
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.5,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
        brunch: true,
        pool: true,
        oceanView: true,
      },
      {
        id: 104,
        name: "시그니엘 레지던스 강릉",
        roomType: "스탠다드 더블",
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.5,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
        brunch: true,
        pool: true,
        oceanView: true,
      },
    ],
  };
  const localeProds: LocaleItemsType = {
    seoul: [
      {
        id: 101,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.3,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 102,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
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
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
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
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.1,
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
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.53,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 106,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.45,
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
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.45,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 108,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.4,
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
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.5,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 110,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.1,
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
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.34,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
      {
        id: 112,
        city: "부산",
        name: "시그니엘 레지던스",
        roomType: "스탠다드 더블",
        imageUrl:
          "https://yaimg.yanolja.com/v5/2022/06/23/12/1280/62b46269e5eca1.34391138.jpg",
        originalPrice: 2400000,
        salePrice: 1200000,
        salePercentage: 0.2,
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-14",
      },
    ],
  };

  // 지역 별 할인 관련 데이터
  const localeEntries: [number, string, LocaleItem[]][] = Object.entries(
    localeProds,
  )
    .filter((v) => v[1] !== null)
    .map((v, i) => [i, v[0], v[1]]);

  const [localeAndHotel] = useState(localeEntries);
  const [currentLocale, setCurrentLocale] = useState<
    [number, string, LocaleItem[]]
  >(localeAndHotel[0]);

  const indicatorRange = new Array(localeAndHotel.length)
    .fill("")
    .map((_, i) => i);

  // 주말 특가 관련 데이터
  const WeekendMapped: [number, WeekendItem][] = weekendProds["weekend"].map(
    (v, i) => [i, v],
  );
  const [weekendHotels] = useState(WeekendMapped);

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
        <S.SequneceSection>
          <S.SequneceIndicator>
            {indicatorRange.map((sequence) =>
              sequence === currentLocale[0] ? (
                <section key={sequence}>
                  <span className="current"></span>
                </section>
              ) : (
                <section key={sequence}>
                  <span></span>
                </section>
              ),
            )}
          </S.SequneceIndicator>
        </S.SequneceSection>
      </S.SaleCarouselContainer>

      <S.WeekendCarouselContainer className="week-container">
        <S.TitleSection>주말 호캉스 추천</S.TitleSection>
        <WeekendCarousel
          weekendHotels={weekendHotels}
          onChangeLocale={setCurrentLocale}
          height={343}
          arrows={true}
          infinite={false}
          draggable={true}
        />
      </S.WeekendCarouselContainer>
    </S.Container>
  );
};

export default Home;
