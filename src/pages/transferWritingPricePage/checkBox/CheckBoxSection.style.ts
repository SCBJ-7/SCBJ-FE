import { theme } from "@/styles/theme";
import styled from "styled-components";

export const CheckContainer = styled.section`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  align-items: center;
  width: fit-content;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 14px;
  height: 14px;
  border-radius: 1px;
`;

export const Label = styled.label<{ $isChecked: boolean }>`
  ${theme.typo.body4};
  cursor: pointer;
  color: ${({ $isChecked }) =>
    $isChecked ? theme.color.percentBlue : theme.color.greyScale1};
  ${theme.unableToDrag}

  &:hover {
    color: black;
  }
`;
