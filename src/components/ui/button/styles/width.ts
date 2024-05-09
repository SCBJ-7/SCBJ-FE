import { type ElementType } from "react";
import { css } from "styled-components";

import { type ButtonProps } from "../types";

export const getWidth = (
  width: Pick<ButtonProps<ElementType>, "width">["width"],
) => {
  if (!width || width === "auto")
    return css`
      width: auto;
    `;
  if (width === "full")
    return css`
      width: 100%;
    `;
  return css`
    width: ${width}px;
  `;
};
