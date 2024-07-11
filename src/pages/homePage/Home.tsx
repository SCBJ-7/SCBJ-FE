import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";

import EventCarousel from "./eventCarousel/EventCarousel";
import * as S from "./Home.style";
import ItemCarousel from "./itemCarousel/ItemCarousel";
import MainHeader from "./mainHeader/MainHeader";
import NavToSearchSection from "./navToSearchSection/NavToSearchSection";
import PercentAnimator from "./percentAnimator/PercentAnimator";
import SequenceSection from "./sequenceSection/SequenceSection";
import WeekendCarousel from "./weekendCarousel/WeekendCarousel";

import { fetchMainItem } from "@/apis/fetchMainItems";
import secondMonth from "@/assets/EventImages/secondMonth.png";
import { LocaleItem, WeekendItem } from "@/types/saleSection";
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
      id: 1,
      image: secondMonth,
      title1: "성수기 숙소 예약 놓쳤다면?",
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

  return (
    <S.Container $weekLength={weekendHotels?.length}>
      <MainHeader />
      <NavToSearchSection />
      <EventCarousel
        EventCarouselContents={EventCarouselContents}
        height={304}
        arrows={false}
        infinite={true}
        innerShadow={true}
        draggable={true}
        auto={true}
      />

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
      <S.SaleCarouselContainer>
        <S.TextSlider>
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
      </S.SaleCarouselContainer>
    </S.Container>
  );
};

export default Home;
