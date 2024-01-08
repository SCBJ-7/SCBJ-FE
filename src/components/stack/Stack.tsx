import * as S from "./Stack.style";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { StackStyleProps } from "./Stack.style";

export type StackProps = {
  children: ReactNode;
} & StackStyleProps &
  ComponentPropsWithoutRef<"div">;

const Stack = ({ direction, spacing, children }: StackProps) => {
  return (
    <S.Stack direction={direction} spacing={spacing}>
      {children}
    </S.Stack>
  );
};

export default Stack;
