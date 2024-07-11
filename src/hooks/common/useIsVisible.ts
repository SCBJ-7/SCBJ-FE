import { RefCallback, useEffect, useState } from "react";

type UseIsVisibleReturnType = [RefCallback<HTMLDivElement>, boolean];

interface UseIsVisibleProps {
  options: {
    threshold: number;
    rootMargin: string;
  };
  initialVisible: boolean;
}

const useIsVisible = (props: UseIsVisibleProps): UseIsVisibleReturnType => {
  const { options, initialVisible } = props;
  const [visibleRef, setVisibleRef] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting !== isVisible) {
        setIsVisible(entry.isIntersecting);
      }
    }, options);

    if (visibleRef) {
      observer.observe(visibleRef);
    }

    return () => {
      if (visibleRef) {
        observer.unobserve(visibleRef);
      }
    };
  }, [options, visibleRef, isVisible]);

  const setRefCallback: RefCallback<HTMLDivElement> = (node) => {
    setVisibleRef(node);
  };

  return [setRefCallback, isVisible];
};

export default useIsVisible;
