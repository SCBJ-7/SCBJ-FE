import {
  cloneElement,
  type CSSProperties,
  isValidElement,
  type ReactElement,
} from "react";

import { StyledButtonAddon } from "./styles";
import { type ButtonSizeSet } from "./types";

interface ButtonAddonProps {
  size?: ButtonSizeSet;
  children: ReactElement;
  addonStyles: {
    marginRight?: CSSProperties["marginRight"];
    marginLeft?: CSSProperties["marginLeft"];
  };
}

const ButtonAddon = (props: ButtonAddonProps) => {
  const { children, ...rest } = props;

  const _children = isValidElement(children)
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cloneElement<any>(children, {
        "aria-hidden": true,
        focusable: false,
      })
    : children;

  return (
    <StyledButtonAddon className="button_addon" {...rest}>
      {_children}
    </StyledButtonAddon>
  );
};

export default ButtonAddon;
