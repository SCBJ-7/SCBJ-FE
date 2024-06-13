import { forwardRef, Children, isValidElement, ElementType } from "react";

import {
  type IStyledTextProps,
  type StyledEmEmProps,
  StyledTypo,
  StyledEm,
} from "./typo.styles.ts";

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../polymorphic";

export type TextProps<C extends ElementType = "span"> =
  PolymorphicComponentPropsWithRef<C, IStyledTextProps & StyledEmEmProps>;

export const Typo = forwardRef(function Typo<C extends ElementType = "span">(
  props: TextProps<C>,
  ref?: PolymorphicRef<C>,
) {
  const {
    as,
    color = "black",
    typo = "body1",
    isEllipsis = false,
    children,
    ...rest
  } = props;

  const styledChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === "em") {
      const color = child.props.color;
      return <StyledEm color={color}>{child.props.children}</StyledEm>;
    }
    return child;
  });

  return (
    <StyledTypo
      ref={ref}
      as={as}
      color={color}
      typo={typo}
      isEllipsis={isEllipsis}
      {...rest}
    >
      {styledChildren}
    </StyledTypo>
  );
});
