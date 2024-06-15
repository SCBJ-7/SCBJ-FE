import { type ElementType, forwardRef } from "react";

import ButtonAddon from "./button-addon";
import { StyledButton } from "./styles";
import { type ButtonProps } from "./types";
import { type PolymorphicRef } from "../polymorphic";

const Button = forwardRef(function Button<C extends ElementType = "button">(
  {
    variant = "solid",
    size = "sm",
    typo = "button3",
    children,
    width = "auto",
    colorScheme = "orange",
    as,
    leftAddon,
    rightAddon,
    radius = "rectangle",
    onClick,
    disabled,
    ...rest
  }: ButtonProps<C>,
  ref?: PolymorphicRef<C>,
) {
  const contentProps = {
    size,
    typo,
    variant,
    colorScheme,
    leftAddon,
    rightAddon,
    radius,
    children,
    ref,
  };

  return (
    <StyledButton
      as={as || "button"}
      ref={ref}
      typo={typo}
      variant={variant}
      width={width}
      size={size}
      colorScheme={colorScheme}
      radius={radius}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <ButtonContent {...contentProps} />
    </StyledButton>
  );
});

type ButtonContentProps = Pick<
  ButtonProps<ElementType>,
  "leftAddon" | "rightAddon" | "children" | "size" | "variant" | "colorScheme"
>;

const ButtonContent = (props: ButtonContentProps) => {
  const { leftAddon, rightAddon, children, size } = props;

  return (
    <>
      {leftAddon && (
        <ButtonAddon
          size={size}
          addonStyles={{
            marginRight: "0.25rem",
          }}
        >
          {leftAddon}
        </ButtonAddon>
      )}
      {children}
      {rightAddon && (
        <ButtonAddon
          size={size}
          addonStyles={{
            marginLeft: "0.25rem",
          }}
        >
          {rightAddon}
        </ButtonAddon>
      )}
    </>
  );
};

export default Button;
