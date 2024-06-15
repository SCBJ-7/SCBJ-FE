import { Variants } from "framer-motion";

export const dimmerAnimationVariants = {
  initial: { opacity: 0, transition: { duration: 0.15 } },
  animate: { opacity: 1, transition: { duration: 0.15 } },
};

export const bottomSheetTransition = {
  type: "tween",
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
};

export const bottomSheetAnimationVariants: Variants = {
  animate: {
    y: 0,
    transition: bottomSheetTransition,
    willChange: "y",
  },
  exit: {
    y: "120%",
    transition: bottomSheetTransition,
    willChange: "y",
  },
  initial: {
    y: "100%",
    transition: bottomSheetTransition,
    willChange: "y",
  },
};
