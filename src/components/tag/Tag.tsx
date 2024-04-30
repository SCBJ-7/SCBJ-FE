import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { StyledIcon, StyledTag } from "./Tag.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: "span" | "button";
  icon?: boolean;
  variant?: "outline";
  radius?: "rectangle" | "pill";
}

const Tag = ({
  children,
  tag = "span",
  icon = true,
  variant = "outline",
  radius = "pill",
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const contentProps = {
    icon,
    children,
  };

  return (
    <StyledTag
      as={tag}
      variant={variant}
      radius={radius}
      $isTextOnly={!icon}
      {...props}
    >
      <ButtonContent {...contentProps} />
    </StyledTag>
  );
};

type ButtonContentProps = Pick<ButtonProps, "icon" | "children">;

const ButtonContent = (props: ButtonContentProps) => {
  const { icon, children } = props;

  return (
    <>
      {icon && <StyledIcon>#</StyledIcon>}
      {children}
    </>
  );
};

export default Tag;
