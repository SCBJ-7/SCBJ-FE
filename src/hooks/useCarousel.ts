import { inrange } from "@utils/inRange";
import { useRef, useState } from "react";

interface CarouselProps {
  slideLength: number;
  slideWidth: number;
}

export const useCarousel = ({ slideLength, slideWidth }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);
  const [animate, setAnimate] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDragChange = (deltaX: number) => {
    setTransX(inrange(deltaX, -slideWidth, slideWidth));
  };

  const handleDragEnd = (deltaX: number) => {
    const maxIndex = slideLength - 1;

    if (deltaX < -50) setCurrentIndex(inrange(currentIndex + 1, 0, maxIndex));
    if (deltaX > 50) setCurrentIndex(inrange(currentIndex - 1, 0, maxIndex));

    setAnimate(true);
    setTransX(0);
  };

  const handleSliderNavigationClick =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (index < 0 || index >= slideLength) return;

      setCurrentIndex(index);
      setAnimate(true);
      setTransX(0);
    };

  // FIXME: touch 이벤트 후 발생하는 mouse 이벤트 무시하기
  const handleSliderTouchStart = (
    touchEvent: React.TouchEvent<HTMLDivElement>,
  ) => {
    const handleTouchMove = (moveEvent: TouchEvent) => {
      if (moveEvent.cancelable) moveEvent.preventDefault();

      const delta = moveEvent.touches[0].pageX - touchEvent.touches[0].pageX;
      handleDragChange(delta);
    };

    const handleTouchEnd = (moveEvent: TouchEvent) => {
      if (moveEvent.cancelable) moveEvent.preventDefault();
      const delta =
        moveEvent.changedTouches[0].pageX - touchEvent.changedTouches[0].pageX;
      handleDragEnd(delta);

      document.removeEventListener("touchmove", handleTouchMove);
    };

    document.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    document.addEventListener("touchend", handleTouchEnd, {
      once: true,
    });
  };

  const handlerSliderMoueDown = (
    clickEvent: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    clickEvent.preventDefault();

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.pageX - clickEvent.pageX;
      handleDragChange(deltaX);
    };

    const handleMouseUp = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.pageX - clickEvent.pageX;
      handleDragEnd(deltaX);

      document.removeEventListener("mousemove", handleMouseMove);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp, {
      once: true,
    });
  };

  const getSliderStyle = () => {
    return {
      transform: `translateX(${-currentIndex * slideWidth + transX}px)`,
      transition: `transform ${animate ? 300 : 0}ms ease-in-out 0s`,
    };
  };

  const handleSliderTransitionEnd = () => {
    setAnimate(false);
  };

  return {
    sliderRef,
    currentIndex,
    handleSliderNavigationClick,
    handleSliderTouchStart,
    handlerSliderMoueDown,
    handleSliderTransitionEnd,
    getSliderStyle,
  };
};
