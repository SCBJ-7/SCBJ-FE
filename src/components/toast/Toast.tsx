import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "./Toast.style";

import { AnimatePresence } from "framer-motion";

interface ToastProps {
  strings: (string | ReactNode)[];
  duration?: number;
  isError?: boolean;
}

const Toast = ({ strings, duration = 5000, isError = false }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, duration);
  }, [duration]);

  const variants = {
    visible: {
      opacity: [0, 0.3, 1],
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 60,
        delay: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {visible && (
            <S.ToastContainer
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              $isError={isError}
            >
              {strings.map((str, idx) => {
                return typeof str === "string" ? (
                  <span key={idx}>{str}</span>
                ) : (
                  <strong key={idx}>{str}</strong>
                );
              })}
            </S.ToastContainer>
          )}
        </AnimatePresence>,
        document.getElementById("overlay-root") as HTMLElement,
      )}
    </>
  );
};

export default Toast;
