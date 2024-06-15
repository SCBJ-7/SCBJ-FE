import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { StyledIcon, StyledTag } from "./Tag.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: "span" | "button";
  variant?: "outline";
  radius?: "rectangle" | "pill";
}

const Tag = ({
  children,
  tag = "span",
  variant = "outline",
  radius = "pill",
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const contentProps = {
    children,
  };

  return (
    <StyledTag as={tag} variant={variant} radius={radius} {...props}>
      <ButtonContent {...contentProps} />
    </StyledTag>
  );
};

type ButtonContentProps = Pick<ButtonProps, "children">;

const ButtonContent = (props: ButtonContentProps) => {
  const { children } = props;

  return (
    <>
      <StyledIcon>#</StyledIcon>
      {children}
    </>
  );
};

export default Tag;
