import type { PropsWithChildren } from "react";

import { StyledSpacing } from "@/components/ui/dialog/dialog.styles.ts";
import { type TextProps, Typo } from "@/components/ui/typo";

export const DialogDescription = ({
  children,
  ...props
}: PropsWithChildren<Partial<TextProps>>) => {
  const { typo = "body2", color = "greyScale3" } = props;
  return (
    <StyledSpacing>
      <Typo as={"p"} typo={typo} color={color} textAlign={"center"}>
        {children}
      </Typo>
    </StyledSpacing>
  );
};
