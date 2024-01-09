import { useEffect, useState, RefCallback } from "react";

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
      setIsVisible(entry.isIntersecting);
    }, options);

    if (visibleRef) {
      observer.observe(visibleRef);
      return;
    }

    return () => {
      if (visibleRef) {
        observer.unobserve(visibleRef);
      }
    };
  }, [options, visibleRef]);

  const setRefCallback: RefCallback<HTMLDivElement> = (node) => {
    setVisibleRef(node);
  };

  return [setRefCallback, isVisible];
};

export default useIsVisible;
