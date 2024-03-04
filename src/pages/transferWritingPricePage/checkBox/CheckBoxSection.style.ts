import styled from "styled-components";

import { ColorKeys, theme, TypoKeys } from "@/styles/theme";

export const CheckContainer = styled.section`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  align-items: center;
  width: fit-content;
  transition: 0.2s;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.color.greyScale7};
  }
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })<{
  $type: string;
}>`
  width: 14px;
  height: 14px;
  border-radius: 1px;
  accent-color: ${({ theme, $type }) =>
    $type === "trigger" ? theme.color.percentBlue : theme.color.greyScale1};
`;

export const Label = styled.label<{
  $isChecked: boolean;
  $color: ColorKeys;
  $fontSize: TypoKeys;
}>`
  cursor: pointer;
  ${({ theme, $fontSize }) => theme.typo[$fontSize]};
  color: ${({ $isChecked, $color }) =>
    $isChecked ? theme.color.percentBlue : theme.color[$color]};

  ${theme.unableToDrag}
`;
