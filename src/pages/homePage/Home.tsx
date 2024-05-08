import { fetchMainItem } from "@apis/fetchMainItems";
import { useSuspenseQuery } from "@tanstack/react-query";
import { LocaleItem, WeekendItem } from "@type/saleSection";
import { useState } from "react";
import secondMonth from "@assets/EventImages/secondMonth.png";
import firstMonth from "@assets/EventImages/firstMonth.png";

import * as S from "./Home.style";
import ItemCarousel from "./itemCarousel/ItemCarousel";
import MainHeader from "./mainHeader/MainHeader";
import EventCarousel from "./eventCarousel/EventCarousel";

import NavToSearchSection from "./navToSearchSection/NavToSearchSection";

import WeekendCarousel from "./weekendCarousel/WeekendCarousel";
import SequenceSection from "./sequenceSection/SequenceSection";
import PercentAnimator from "./percentAnimator/PercentAnimator";

interface EventItem {
  id: number;
  image: string;
  title1: string;
  title2: string;
}

const Home = () => {
  const { data: mainData } = useSuspenseQuery({
    queryKey: ["main"],
    queryFn: fetchMainItem,
  });
  const [localeProds, weekendProds] = mainData;
  const EventCarouselContents: EventItem[] = [
    {
      id: 0,
      image: firstMonth,
      title1: "봄맞이 꽃놀이 명소",
      title2: "숙소 예약 놓쳤다면?",
    },
    {
      id: 1,
      image: secondMonth,
      title1: "가정의 달 맞이",
      title2: "황금연휴 호캉스 추천",
    },
  ];
  // 지역 별 할인 관련 데이터
  const localeEntries: [number, string, LocaleItem[]][] = Object.entries(
    localeProds,
  )
    .filter((v) => v[1].length !== 0)
    .map((v, i) => [i, v[0], v[1]]);

  const [localeAndHotel] = useState(localeEntries);
  console.log("localeEntries", localeEntries);
  const [currentLocale, setCurrentLocale] = useState<
    [number, string, LocaleItem[]]
  >(localeAndHotel[0]);
  const indicatorRange = new Array(localeAndHotel.length)
    .fill("")
    .map((_, i) => i);

  const WeekendMapped: [number, WeekendItem][] | undefined = weekendProds?.map(
    (v, i) => [i, v],
  );
  const [weekendHotels] = useState(WeekendMapped);
  console.log("currentLocale", currentLocale);
  console.log("localeAndHotel", localeAndHotel);
  return (
    <S.Container $weekLength={weekendHotels?.length}>
      <MainHeader />
      <NavToSearchSection />

      <S.SaleCarouselContainer>
        <S.TextSlider>
          <TextLocaleAnimator text={locale[currentLocale[1]]} />
          <span>지역</span>
          <PercentAnimator
            percent={currentLocale[2][0]?.salePercentage}
            localeAndHotel={localeAndHotel}
          />
          <span>할인 호텔</span>
        </S.TextSlider>
        <div className="divider"></div>
        <ItemCarousel
          currentLocale={currentLocale}
          localeAndHotel={localeAndHotel}
          onChangeLocale={setCurrentLocale}
          height={312}
          arrows={true}
          infinite={false}
          draggable={true}
        />
        <div className="divider"></div>
        <SequenceSection
          indicatorRange={indicatorRange}
          currentLocale={currentLocale}
          localeAndHotel={localeAndHotel}
          onSetSequence={setCurrentLocale}
        />
        <EventCarousel
          EventCarouselContents={EventCarouselContents}
          height={304}
          arrows={true}
          infinite={true}
          innerShadow={true}
          draggable={true}
          auto={true}
        />
      </S.SaleCarouselContainer>
      {weekendHotels && weekendHotels.length !== 0 && (
        <S.WeekendCarouselContainer className="week-container">
          <S.TitleSection>프리미엄 호캉스</S.TitleSection>
          <S.SubTitle>퍼센특가로 만나는 4-5성급 호텔 모음 </S.SubTitle>

          <WeekendCarousel
            weekendHotels={weekendHotels}
            onChangeLocale={setCurrentLocale}
            height={343}
            arrows={true}
            infinite={false}
            draggable={true}
          />
        </S.WeekendCarouselContainer>
      )}
    </S.Container>
  );
};

export default Home;
