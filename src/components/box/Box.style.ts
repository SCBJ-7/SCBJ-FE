import { theme } from "@styles/theme";
import styled from "styled-components";

type ThemeColor = keyof typeof theme.color;

export interface BoxStyleProps {
  width?: string;
  w?: string;
  maxWidth?: string;
  height?: string;
  h?: string;
  margin?: string;
  marginRight?: string;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  backgroundColor?: ThemeColor | string;
  position?: "static" | "absolute" | "relative" | "fixed" | "inherit";
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const boxStylePropsKeys = [
  "width",
  "w",
  "maxWidth",
  "height",
  "h",
  "margin",
  "marginRight",
  "marginTop",
  "marginLeft",
  "marginBottom",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "border",
  "borderRadius",
  "borderColor",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "backgroundColor",
  "position",
  "top",
  "bottom",
  "left",
  "right",
];

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => !boxStylePropsKeys.includes(prop),
})<BoxStyleProps>`
  width: ${({ width, w }) => width || w};
  height: ${({ height, h }) => height || h};
  max-width: ${({ maxWidth }) => maxWidth};
  margin: ${({ margin }) => margin};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-color: ${({ borderColor }) => borderColor};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor in theme.color
      ? theme.color[backgroundColor as keyof typeof theme.color]
      : backgroundColor};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;

export default Box;
