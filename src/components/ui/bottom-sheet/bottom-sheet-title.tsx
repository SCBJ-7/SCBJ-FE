import type { PropsWithChildren } from "react";

import { StyledBottomSheetTitle } from "./styles";

import type { AlignType } from "./types";

const BottomSheetTitle = ({
  align = "start",
  children,
}: PropsWithChildren<{ align?: AlignType }>) => {
  return (
    <StyledBottomSheetTitle align={align}>{children}</StyledBottomSheetTitle>
  );
};

export { BottomSheetTitle };
