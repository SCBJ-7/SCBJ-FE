import type { PropsWithChildren } from "react";

import { StyledSpaing } from "@/components/ui/dialog/dialog.styles.ts";
import { Typo } from "@/components/ui/typo";

export const DialogDescription = ({ children }: PropsWithChildren) => {
  return (
    <StyledSpaing>
      <Typo as={"p"} typo={"body2"} color={"greyScale3"} textAlign={"center"}>
        {children}
      </Typo>
    </StyledSpaing>
  );
};
