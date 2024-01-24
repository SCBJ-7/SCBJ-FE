import { useEffect, useState } from "react";

interface UseIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const UseIntersectionObserver = ({
  root,
  rootMargin = "0px",
  threshold = 0.5,
  onIntersect,
}: UseIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};

export default UseIntersectionObserver;
