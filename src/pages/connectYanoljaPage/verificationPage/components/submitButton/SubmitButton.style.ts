import styled from "styled-components";

import { hexToRgba } from "@/utils/hexTorgba";

export const BottomWrapper = styled.div`
  margin-top: 3.5em;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.yanoljaPink};

  &:hover {
    background-color: ${({ theme }) => hexToRgba(theme.color.yanoljaPink, 0.9)};
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.greyScale5};
    cursor: unset;
  }

  &[data-disabled]:hover {
    background-color: ${({ theme }) => theme.color.greyScale4};
  }

  transition: background-color 0.2s ease-in-out;
`;
