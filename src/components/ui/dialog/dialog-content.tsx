import { ElementType, forwardRef, useContext } from "react";

import { DialogContext } from "./dialog-context.tsx";
import { StyledDialogContent } from "./dialog.styles.ts";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/components/ui/polymorphic";

type BottomSheetContentProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const DialogContent = forwardRef(function DialogContent<
  C extends ElementType = "div",
>(props: BottomSheetContentProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;

  const bottomSheetContext = useContext(DialogContext);

  if (!bottomSheetContext)
    throw new Error(
      "BottomSheet.Content must be rendered within a BottomSheet.Root.",
    );

  return (
    <StyledDialogContent as={as || "div"} ref={ref} {...rest}>
      {children}
    </StyledDialogContent>
  );
});
