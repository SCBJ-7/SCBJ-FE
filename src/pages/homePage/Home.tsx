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
import { HelmetTag } from "@/components/Helmet/Helmet";
import { LocaleItem, LocaleItemsType, WeekendItem } from "@/types/saleSection";
interface EventItem {
  id: number;
  image: string;
  title1: string;
  title2: string;
}

const HomeView = ({
  data,
}: {
  data: [LocaleItemsType, WeekendItem[] | null];
}) => {
  const [localeProds, weekendProds] = data;
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
            arrows={true}
            infinite={false}
            draggable={true}
          />
        </S.WeekendCarouselContainer>
      )}
      <S.SaleCarouselContainer>
        <S.TextSlider>
          <strong>지역</strong>
          <PercentAnimator
            percent={currentLocale[2][0]?.salePercentage}
            localeAndHotel={localeAndHotel}
          />
          <strong>할인 호텔</strong>
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

const Home = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["main"],
    queryFn: fetchMainItem,
  });

  const [localeProds, weekendProds] = data;

  const schemaData = {
    areaServed: Object.keys(localeProds),
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TravelService",
          name: "지역별 할인 호텔",
          description: `${Object.keys(localeProds).length}개 지역의 할인 호텔 상품`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TravelService",
          name: "프리미엄 호캉스",
          description: `${weekendProds?.length || 0}개의 프리미엄 호캉스 상품`,
        },
      },
    ],
  };

  return (
    <>
      <HelmetTag schemaType="TravelAgency" schemaData={schemaData} />
      <HomeView data={data} />
    </>
  );
};

export default Home;
