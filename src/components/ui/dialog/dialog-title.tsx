import type { PropsWithChildren } from "react";

import { TextProps, Typo } from "@/components/ui/typo";

export const DialogTitle = ({
  children,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <Typo
      {...props}
      as={"p"}
      typo={"title3"}
      color={"greyScale1"}
      textAlign={"center"}
    >
      {children}
    </Typo>
  );
};
