import * as S from "./Box.style";
import type { ReactNode, ComponentPropsWithoutRef, ElementType } from "react";
import type { BoxStyleProps } from "./Box.style";

type BoxProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
} & BoxStyleProps &
  ComponentPropsWithoutRef<C>;

const Box = <C extends ElementType = "div">({
  as,
  children,
  ...props
}: BoxProps<C>) => {
  const Component = as || "div";
  return (
    <S.Box as={Component} {...props}>
      {children}
    </S.Box>
  );
};

export default Box;
