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
  draggable = false,
}: CarouselProps) => {
  const {
    sliderRef,
    currentIndex,
    getSliderStyle,
    handleSliderNavigationClick,
    handleSliderTransitionEnd,
    handlerSliderMoueDown,
    handleSliderTouchStart,
  } = useCarousel({
    slideLength: images.length,
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
          {images.map((imageUrl, index) => (
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
            $visible={currentIndex > 0}
          >
            <S.LeftIcon />
          </S.LeftButton>
          <S.RightButton
            aria-label="앞으로가기"
            onClick={handleSliderNavigationClick(currentIndex + 1)}
            $visible={currentIndex < images.length - 1}
          >
            <S.RightIcon />
          </S.RightButton>
        </S.ButtonContainer>
      )}
    </S.CarouselContainer>
  );
};

export default Carousel;
