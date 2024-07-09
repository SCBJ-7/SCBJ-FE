import { ElementType, forwardRef, useContext } from "react";

import { BottomSheetContext } from "./bottom-sheet-context";
import { StyledFooter } from "./styles";

import type { DirectionType } from "./types";
import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../polymorphic";

type BottomSheetFooterProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C> & {
    direction?: DirectionType;
  };

const BottomSheetFooter = forwardRef(function BottomSheetFooter<
  C extends ElementType = "div",
>(props: BottomSheetFooterProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, direction = "horizontal", ...rest } = props;

  const bottomSheetContext = useContext(BottomSheetContext);

  if (!bottomSheetContext)
    throw new Error("BottomSheet.Button must be rendered within a BottomSheet");

  return (
    <StyledFooter as={as || "div"} ref={ref} direction={direction} {...rest}>
      {children}
    </StyledFooter>
  );
});

export { BottomSheetFooter };
