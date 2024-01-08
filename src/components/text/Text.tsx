import { ElementType } from "react";
import * as S from "./Text.style";
import type { VariantProps, ColorVariant } from "./Text.style";
import type { ComponentPropsWithoutRef } from "react";

export interface TextProps
  extends ComponentPropsWithoutRef<ElementType>,
    VariantProps {
  color?: ColorVariant;
  tag?: ElementType;
}

const Text = ({
  tag: Tag = "p",
  variant,
  color,
  children,
  ...props
}: TextProps) => {
  return (
    <S.Text as={Tag} variant={variant} color={color} {...props}>
      {children}
    </S.Text>
  );
};

export default Text;
