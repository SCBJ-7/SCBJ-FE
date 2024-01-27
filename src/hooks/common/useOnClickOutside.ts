import { useEffect, RefObject } from "react";

interface UseOnClickOutsideProps {
  ref: RefObject<HTMLElement>;
  handler: () => void;
  isModalTwoOpen: boolean;
  refTwo: RefObject<HTMLElement>;
  handlerTwo: () => void;
}
const useOnClickOutside = ({
  ref,
  handler,
  isModalTwoOpen,
  refTwo,
  handlerTwo,
}: UseOnClickOutsideProps) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      if (!isModalTwoOpen) {
        handler();
      }
    };
    const listenerTwo = (event: MouseEvent | TouchEvent) => {
      if (!refTwo.current || refTwo.current.contains(event.target as Node)) {
        return;
      }
      if (isModalTwoOpen) {
        handlerTwo();
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("mousedown", listenerTwo);
    document.addEventListener("touchstart", listenerTwo);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("mousedown", listenerTwo);
      document.removeEventListener("touchstart", listenerTwo);
    };
    // eslint-disable-next-line
  }, [ref, handler, refTwo, handlerTwo]);
};

export default useOnClickOutside;
