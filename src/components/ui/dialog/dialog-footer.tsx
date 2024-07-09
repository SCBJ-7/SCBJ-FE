import { ElementType, forwardRef, useContext } from "react";

import { DialogContext } from "@/components/ui/dialog/dialog-context.tsx";
import { StyledDialogFooter } from "@/components/ui/dialog/dialog.styles.ts";
import { DirectionType } from "@/components/ui/dialog/types.ts";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/components/ui/polymorphic";

type DialogFooterProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C> & {
    direction?: DirectionType;
  };

export const DialogFooter = forwardRef(function DialogFooter<
  C extends ElementType = "div",
>(props: DialogFooterProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, direction = "horizontal", ...rest } = props;

  const dialogContext = useContext(DialogContext);

  if (!dialogContext)
    throw new Error("Dialog.Footer must be rendered within a Dialog");

  return (
    <StyledDialogFooter
      as={as || "div"}
      ref={ref}
      direction={direction}
      {...rest}
    >
      {children}
    </StyledDialogFooter>
  );
});
