import { useEffect, useRef, useState } from "react";

type State = {
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
};

interface UseIntersectionObserverOptions {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number;
  onChange?: (
    isIntersecting: boolean,
    entry: IntersectionObserverEntry,
  ) => void;
}

type IntersectionReturn = [
  (node?: Element | null) => void,
  boolean,
  IntersectionObserverEntry | undefined,
] & {
  ref: (node?: Element | null) => void;
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
};

export const useIntersectionObserver = ({
  root = null,
  rootMargin = "0%",
  threshold = 0,
  onChange,
}: UseIntersectionObserverOptions = {}): IntersectionReturn => {
  const [ref, setRef] = useState<Element | null>(null);

  const [state, setState] = useState<State>(() => ({
    isIntersecting: false,
    entry: undefined,
  }));

  const callbackRef = useRef<UseIntersectionObserverOptions["onChange"]>();

  callbackRef.current = onChange;

  useEffect(() => {
    if (!ref) return;

    if (!("IntersectionObserver" in window)) return;

    let unobserve: (() => void) | undefined;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry) => {
          const isIntersecting =
            entry.isIntersecting && entry.intersectionRatio >= threshold;
          setState({ isIntersecting, entry });

          if (callbackRef.current) {
            callbackRef.current(isIntersecting, entry);
          }

          if (isIntersecting && unobserve) {
            unobserve();
            unobserve = undefined;
          }
        });
      },
      { threshold, root, rootMargin },
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin]);

  // ensures that if the observed element changes, the intersection observer is reinitialized
  const prevRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!ref && state.entry?.target && prevRef.current !== state.entry.target) {
      prevRef.current = state.entry.target;
      setState({ isIntersecting: false, entry: undefined });
    }
  }, [ref, state.entry]);

  const result = [
    setRef,
    !!state.isIntersecting,
    state.entry,
  ] as IntersectionReturn;

  result.ref = result[0];
  result.isIntersecting = result[1];
  result.entry = result[2];

  return result;
};
