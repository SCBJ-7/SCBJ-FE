import { theme } from "@styles/theme.ts";
import styled from "styled-components";

export interface FlexStyleProps {
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  basis?: "auto" | "0" | "200px";
  grow?: string;
  shrink?: string;
  align?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "inherit"
    | "initial"
    | "unset";
  justify?:
    | "center"
    | "start"
    | "flex-start"
    | "end"
    | "flex-end"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  gap?: string;
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
  width?: string;
  height?: string;
  position?: "static" | "absolute" | "relative" | "fixed" | "inherit";
  backgroundColor?: string;
  color?: string;
}

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "direction",
      "wrap",
      "basis",
      "grow",
      "shrink",
      "align",
      "justify",
      "gap",
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
      "width",
      "height",
      "position",
      "backgroundColor",
      "color",
    ].includes(prop),
})<FlexStyleProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  flex-basis: ${({ basis }) => basis};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};
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
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: ${({ position }) => position};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor in theme.color
      ? theme.color[backgroundColor as keyof typeof theme.color]
      : backgroundColor};
  color: ${({ color }) => color};
`;
