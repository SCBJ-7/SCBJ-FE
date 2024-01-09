import { useCarousel } from "@hooks/useCarousel";
import * as S from "./Carousel.style.ts";

interface CarouselProps {
  images: string[];
  width?: number;
  height?: number;
  arrows?: boolean;
  infinite?: boolean;
  draggable?: boolean;
}

const Carousel = ({
  width = 100,
  height = 300,
  images,
  arrows = true,
  infinite = false,
  draggable = false,
}: CarouselProps) => {
  const slideList = infinite
    ? [images.at(-1), ...images, images.at(0)]
    : images;

  const {
    sliderRef,
    currentIndex,
    getSliderStyle,
    handleSliderNavigationClick,
    handleSliderTransitionEnd,
    handlerSliderMoueDown,
    handleSliderTouchStart,
  } = useCarousel({
    slideLength: slideList.length,
    infinite,
    slideWidth: width,
  });

  return (
    <S.CarouselContainer $width={width} $height={height}>
      <S.SliderWrapper>
        <S.SliderContainer
          ref={sliderRef}
          style={getSliderStyle()}
          data-testid={`slide-${currentIndex}`}
          onMouseDown={draggable ? handlerSliderMoueDown : undefined}
          onTouchStart={draggable ? handleSliderTouchStart : undefined}
          onTransitionEnd={draggable ? handleSliderTransitionEnd : undefined}
        >
          {slideList.map((imageUrl, index) => (
            <S.ImageWrapper key={index} $width={width} $height={height}>
              <img src={imageUrl} alt={`Slide ${index}`} draggable={false} />
            </S.ImageWrapper>
          ))}
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
            $visible={infinite || currentIndex < images.length - 1}
          >
            <S.RightIcon />
          </S.RightButton>
        </S.ButtonContainer>
      )}
    </S.CarouselContainer>
  );
};

export default Carousel;
