import { ElementType, forwardRef, useContext } from "react";
import { type CSSProp } from "styled-components";

import { DialogContext } from "./dialog-context.tsx";
import { StyledDialogContent } from "./dialog.styles.ts";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/components/ui/polymorphic";

type BottomSheetContentProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C> & {
    css?: CSSProp;
  };

export const DialogContent = forwardRef(function DialogContent<
  C extends ElementType = "div",
>(props: BottomSheetContentProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, css, ...rest } = props;

  const bottomSheetContext = useContext(DialogContext);

  if (!bottomSheetContext)
    throw new Error(
      "BottomSheet.Content must be rendered within a BottomSheet.Root.",
    );

  return (
    <StyledDialogContent
      as={as || "div"}
      ref={ref}
      bg={bottomSheetContext.bg}
      css={css}
      {...rest}
    >
      {children}
    </StyledDialogContent>
  );
});
