import styled from "styled-components";

import { hexToRgba } from "@/utils/hexTorgba";

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.percentOrange};

  &:hover {
    background-color: ${({ theme }) =>
      hexToRgba(theme.color.percentOrange, 0.9)};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.darkOrange};
  }

  transition: background-color 0.2s ease-in-out;
`;
