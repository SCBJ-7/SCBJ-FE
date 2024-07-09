import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./EventCarousel.style";

import { PATH } from "@/constants/path";
import { useCarousel } from "@/hooks/common/useCarousel";
import { useCarouselSize } from "@/hooks/common/useCarouselSize";

interface EventItem {
  id: number;
  image: string;
  title1: string;
  title2: string;
}

interface EventCarouselProps {
  EventCarouselContents: EventItem[];
  arrows?: boolean;
  height?: number;
  infinite?: boolean;
  draggable?: boolean;
}

const EventCarousel: React.FC<EventCarouselProps> = ({
  EventCarouselContents,
  arrows,
  height = 300,
  infinite = true,
  draggable = true,
}) => {
  const navigate = useNavigate();
  const { slideWidth, sliderRef } = useCarouselSize();
  const slideList = infinite
    ? [
        EventCarouselContents.slice(-1)[0],
        ...EventCarouselContents,
        EventCarouselContents[0],
      ]
    : EventCarouselContents;

  const {
    currentIndex,
    getSliderStyle,
    handleSliderNavigationClick,
    handlerSliderMoueDown,
    handleSliderTouchStart,
    handleSliderTransitionEnd,
  } = useCarousel({
    slideLength: slideList.length,
    infinite,
    slideWidth,
  });

  const onClickHandler = (id: number) => {
    navigate(`${PATH.MAIN_DETAIL}?id=${id}`);
  };

  return (
    <S.Container $height={height}>
      <S.SliderContainer
        ref={sliderRef}
        style={getSliderStyle()}
        onMouseDown={draggable ? handlerSliderMoueDown : undefined}
        onTouchStart={draggable ? handleSliderTouchStart : undefined}
        onTransitionEnd={draggable ? handleSliderTransitionEnd : undefined}
      >
        {slideList.map((content, index) => (
          <S.ImageWrapper key={index} $height={height}>
            <img
              src={content?.image}
              onClick={() => onClickHandler(content?.id ?? 0)}
            />
            <S.Title>
              <div>{content?.title1}</div>
              <div>{content?.title2}</div>
              <div>바로 예약하러 가기</div>
            </S.Title>
          </S.ImageWrapper>
        ))}
      </S.SliderContainer>
      {arrows && (
        <S.ButtonContainer>
          <S.LeftButton
            aria-label="뒤로가기"
            onClick={() => handleSliderNavigationClick(currentIndex - 1)}
            $visible={infinite || currentIndex > 0}
          >
            Left
          </S.LeftButton>
          <S.RightButton
            aria-label="앞으로가기"
            onClick={() => handleSliderNavigationClick(currentIndex + 1)}
            $visible={infinite || currentIndex < slideList.length - 1}
          >
            Right
          </S.RightButton>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default EventCarousel;
