import { AnimatePresence, motion } from "framer-motion";
import { type ElementType, forwardRef, MouseEventHandler } from "react";

import { Portal } from "../portal";

import type { BgType } from "./types";
import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../polymorphic";

import { Dimmer } from "@/components/ui/bottom-sheet/styles.ts";
import { DialogProvider } from "@/components/ui/dialog/dialog-context.tsx";
import { StyledDialog } from "@/components/ui/dialog/dialog.styles.ts";
import {
  dialogAnimationVariants,
  dimmerAnimationVariants,
} from "@/styles/animation";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

type DialogRootProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      closeOnClickDim?: boolean;
      dimmer?: boolean;
      bg?: BgType;
    } & DialogProps
  >;

export const DialogRoot = forwardRef(function DialogRoot<
  C extends ElementType = "div",
>(props: DialogRootProps<C>, ref?: PolymorphicRef<C>) {
  const {
    children,
    isOpen,
    closeOnClickDim = false,
    onClose,
    bg = "white",
    ...rest
  } = props;

  const onClickDimDefault: MouseEventHandler = (e): void => {
    if (e.target === e.currentTarget) onClose();
  };

  const dialogRoot = (
    <StyledDialog
      role="dialog"
      tabindex="-1"
      ref={ref}
      as={motion.div}
      key="dialog"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={dialogAnimationVariants}
      {...rest}
    >
      {children}
    </StyledDialog>
  );
  return (
    <Portal>
      <AnimatePresence mode="wait">
        {isOpen && (
          <DialogProvider onClose={onClose} bg={bg}>
            <Dimmer
              key="dimmer"
              as={motion.div}
              onClick={closeOnClickDim ? onClickDimDefault : props.onClick?.()}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={dimmerAnimationVariants}
              aria-hidden="true"
            />
            {dialogRoot}
          </DialogProvider>
        )}
      </AnimatePresence>
    </Portal>
  );
});
