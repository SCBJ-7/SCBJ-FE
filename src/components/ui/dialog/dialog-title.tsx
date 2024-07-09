import type { PropsWithChildren } from "react";

import { type TextProps, Typo } from "@/components/ui/typo";

export const DialogTitle = ({
  children,
  ...props
}: PropsWithChildren<Partial<TextProps>>) => {
  const { typo = "title3", color = "greyScale1" } = props;
  return (
    <Typo as={"p"} typo={typo} color={color} textAlign={"center"}>
      {children}
    </Typo>
  );
};
