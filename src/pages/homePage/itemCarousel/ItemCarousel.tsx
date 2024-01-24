import { useAnimateCarousel } from "@hooks/common/useAnimateCarousel";
import { useCarouselSize } from "@hooks/common/useCarouselSize";
import * as S from "./ItemCarousel.style";
import type { LocaleItem } from "@type/saleSection";
import ItemCarouselUnit from "./itemCarouselUnit/ItemCarouselUnit.tsx";
import { useEffect } from "react";

interface CarouselProps {
  localeAndHotel: [number, string, LocaleItem[]][];
  onChangeLocale: React.Dispatch<
    React.SetStateAction<[number, string, LocaleItem[]]>
  >;
  currentLocale: [number, string, LocaleItem[]];
  height?: number;
  arrows?: boolean;
  infinite?: boolean;
  draggable?: boolean;
  innerShadow?: boolean;
}

const ItemCarousel = ({
  localeAndHotel,
  onChangeLocale,
  height = 300,
  arrows = true,
  infinite = false,
  draggable = false,
  innerShadow = false,
}: CarouselProps) => {
  const { slideWidth, sliderRef } = useCarouselSize();

  const {
    currentIndex,
    getSliderStyle,
    handleSliderNavigationClick,
    handleSliderTransitionEnd,
    handlerSliderMoueDown,
    handleSliderTouchStart,
    setIsPlay,
  } = useAnimateCarousel({
    slideLength: localeAndHotel.length,
    infinite,
    slideWidth,
  });

  // localeAndHotel과 currentIndex의 연동
  useEffect(() => {
    onChangeLocale([
      currentIndex,
      localeAndHotel[currentIndex][1],
      localeAndHotel[currentIndex][2],
    ]);
    // eslint-disable-next-line
  }, [currentIndex]);

  return (
    <S.CarouselContainer
      $height={height}
      onMouseEnter={() => setIsPlay(false)}
      onMouseLeave={() => setIsPlay(true)}
    >
      <S.SliderWrapper>
        <S.SliderContainer
          ref={sliderRef}
          style={getSliderStyle()}
          onMouseDown={draggable ? handlerSliderMoueDown : undefined}
          onTouchStart={draggable ? handleSliderTouchStart : undefined}
          onTransitionEnd={draggable ? handleSliderTransitionEnd : undefined}
        >
          {innerShadow && <S.ImageShadowWrapper />}
          {localeAndHotel.map(
            (item) =>
              item[2].length && (
                <ItemCarouselUnit key={item[2][0]?.id} item={item} />
              ),
          )}
        </S.SliderContainer>
      </S.SliderWrapper>
      {arrows && (
        <S.ButtonContainer>
          <S.LeftButton
            aria-label="뒤로가기"
            onClick={handleSliderNavigationClick(currentIndex - 1)}
            $visible={infinite || currentIndex > 0}
          >
            <S.LeftIcon />
          </S.LeftButton>
          <S.RightButton
            aria-label="앞으로가기"
            onClick={handleSliderNavigationClick(currentIndex + 1)}
            $visible={infinite || currentIndex < localeAndHotel.length - 1}
          >
            <S.RightIcon />
          </S.RightButton>
        </S.ButtonContainer>
      )}
    </S.CarouselContainer>
  );
};

export default ItemCarousel;
