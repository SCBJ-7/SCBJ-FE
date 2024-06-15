import { AnimatePresence, motion } from "framer-motion";
import { type ElementType, MouseEventHandler, forwardRef } from "react";

import { BottomSheetProvider } from "./bottom-sheet-context";
import { Dimmer, StyledBottomSheet } from "./styles";
import { Portal } from "../portal";

import type { BgType } from "./types";
import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../polymorphic";

import {
  dimmerAnimationVariants,
  bottomSheetAnimationVariants,
} from "@/styles/animation";

type BottomSheetProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      isOpen: boolean;
      onClose: () => void;
      closeOnClickDim?: boolean;
      dimmer?: boolean;
      bg?: BgType;
    }
  >;

const BottomSheetRoot = forwardRef(function BottomSheetRoo<
  C extends ElementType = "div",
>(props: BottomSheetProps<C>, ref?: PolymorphicRef<C>) {
  const {
    children,
    isOpen,
    closeOnClickDim = true,
    onClose,
    bg = "white",
    ...rest
  } = props;

  const onClickDimDefault: MouseEventHandler = (e): void => {
    if (e.target === e.currentTarget) onClose();
  };

  const bottomSheetRoot = (
    <StyledBottomSheet
      role="dialog"
      tabindex="-1"
      ref={ref}
      bg={bg}
      as={motion.div}
      key="bottom-sheet"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={bottomSheetAnimationVariants}
      {...rest}
    >
      {children}
    </StyledBottomSheet>
  );

  return (
    <Portal>
      <AnimatePresence mode="wait">
        {isOpen && (
          <BottomSheetProvider onClose={onClose}>
            <Dimmer
              key="dimmer"
              as={motion.div}
              onClick={closeOnClickDim ? onClickDimDefault : props.onClick?.()}
              initial="initial"
              animate="animate"
              exit="initial"
              variants={dimmerAnimationVariants}
              aria-hidden="true"
            />
            {bottomSheetRoot}
          </BottomSheetProvider>
        )}
      </AnimatePresence>
    </Portal>
  );
});

export { BottomSheetRoot };
