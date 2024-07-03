import { Variants } from "framer-motion";

export const dimmerAnimationVariants = {
  initial: { opacity: 0, transition: { duration: 0.15 } },
  animate: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
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

export const dialogTransition = {
  opacity: { duration: 0.15 },
  transform: {
    duration: 0.25,
    type: "tween",
    ease: [0.32, 0.72, 0, 1],
  },
};

export const dialogAnimationVariants = {
  animate: {
    opacity: 1,
    transform: "translate3d(0, -50%, 0) scale3d(1, 1, 1)",
    transition: dialogTransition,
  },
  exit: {
    opacity: 0,
    transform: "translate3d(0, -48%, 0) scale3d(0.95, 0.95, 0.95)",
    transition: dialogTransition,
  },
  initial: {
    opacity: 1,
    transform: "translate3d(0, -48%, 0) scale3d(0.95, 0.95, 0.95)",
    transition: dialogTransition,
  },
};
