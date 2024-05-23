import { styled } from "styled-components";

import type { ColorKeys } from "@/styles/theme.ts";

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bg",
})<{ bg: ColorKeys }>`
  width: 100%;
  min-height: 100%;
  max-width: 768px;
  min-width: 360px;
  position: relative;
  margin: 0 auto;

  background-color: ${({ theme, bg }) => theme.color[bg]};
`;
