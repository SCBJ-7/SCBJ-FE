import { useEffect, useRef, useState } from "react";

export const useCarouselSize = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (!sliderRef.current) return;

      const parentWidth =
        sliderRef.current.parentElement?.getBoundingClientRect().width ?? 0;
      console.dir(sliderRef.current.parentElement);
      setSlideWidth(parentWidth);
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [sliderRef]);

  return {
    slideWidth,
    sliderRef,
  };
};
