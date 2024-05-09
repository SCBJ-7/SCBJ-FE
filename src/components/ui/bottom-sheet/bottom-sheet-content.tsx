import { forwardRef, useContext, type ElementType } from "react";

import { BottomSheetContext } from "./bottom-sheet-context";
import { StyledBottomSheetContent } from "./styles";

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../polymorphic";

type BottomSheetContentProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const BottomSheetContent = forwardRef(function BottomSheetContent<
  C extends ElementType = "div",
>(props: BottomSheetContentProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;

  const bottomSheetContext = useContext(BottomSheetContext);

  if (!bottomSheetContext)
    throw new Error(
      "BottomSheet.Content must be rendered within a BottomSheet.Root.",
    );

  return (
    <StyledBottomSheetContent as={as || "div"} ref={ref} {...rest}>
      {children}
    </StyledBottomSheetContent>
  );
});

export { BottomSheetContent };
