import { type CSSProp, css } from "styled-components";

import type { ButtonRadii } from "../types";

export const getRadius = (radii: ButtonRadii): CSSProp => {
  const radiusStyles: Record<ButtonRadii, CSSProp> = {
    rectangle: css`
      border-radius: 8px;
    `,
    pill: css`
      border-radius: 20px;
    `,
  };

  if (typeof radii === "number") {
    return css`
      border-radius: ${radii}px;
    `;
  }

  return radiusStyles[radii];
};
