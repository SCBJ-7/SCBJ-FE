import { fetchMainItem } from "@apis/fetchMainItems";
import { locale } from "@constants/locale";
import { useSuspenseQuery } from "@tanstack/react-query";
import { LocaleItem, WeekendItem } from "@type/saleSection";
import { useState } from "react";

import * as S from "./Home.style";
import ItemCarousel from "./itemCarousel/ItemCarousel";
import MainHeader from "./mainHeader/MainHeader";
import NavToSearchSection from "./navToSearchSection/NavToSearchSection";
import PercentAnimator from "./percentAnimator/PercentAnimator";
import SequenceSection from "./sequenceSection/SequenceSection";
import TextLocaleAnimator from "./textAnimator/TextAnimator";
import TitleSection from "./titleSection/TitleSection";
import WeekendCarousel from "./weekendCarousel/WeekendCarousel";

const Home = () => {
  const { data: mainData } = useSuspenseQuery({
    queryKey: ["main"],
    queryFn: fetchMainItem,
  });
  const [localeProds, weekendProds] = mainData;

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

  // 주말 특가 관련 데이터
  const WeekendMapped: [number, WeekendItem][] | undefined = weekendProds?.map(
    (v, i) => [i, v],
  );
  const [weekendHotels] = useState(WeekendMapped);
  console.log(weekendHotels, "weekendHotels");

  return (
    <S.Container>
      <MainHeader />
      <TitleSection />
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
      </S.SaleCarouselContainer>
      {weekendHotels && weekendHotels.length !== 0 && (
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
      )}
    </S.Container>
  );
};

export default Home;
