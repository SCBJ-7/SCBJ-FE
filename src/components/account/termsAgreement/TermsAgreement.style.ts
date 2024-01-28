import { PiXBold } from "react-icons/pi";
import styled from "styled-components";

import { ColorKeys, theme, TypoKeys } from "@/styles/theme";

export const TermsAgreementContainer = styled.div`
  padding: 10px 20px 32px;

  height: 100%;
  overflow: scroll;

  h1 {
    margin-bottom: 24px;

    ${({ theme }) => theme.typo.title3}
    color: ${({ theme }) => theme.color.black};
  }

  div {
    margin: 8px 0 32px;

    ${({ theme }) => theme.typo.caption3}
    color: ${({ theme }) => theme.color.greyScale2};

    ul {
      list-style-position: inside;
    }

    li {
      padding-left: 5px;
    }

    li span {
      position: relative;
      left: -6px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: right;
  align-items: center;

  padding: 0 20px;

  height: 48px;
`;

export const XIcon = styled(PiXBold)`
  cursor: pointer;

  color: ${({ theme }) => theme.color.greyScale2};
`;

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

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 14px;
  height: 14px;
  border-radius: 1px;
  accent-color: ${({ theme }) => theme.color.percentBlue};
`;

export const Label = styled.label<{
  $isChecked: boolean;
  $color: ColorKeys;
  $typo: TypoKeys;
}>`
  cursor: pointer;
  ${({ theme, $typo }) => theme.typo[$typo]};
  color: ${({ $isChecked, $color }) =>
    $isChecked ? theme.color.percentBlue : theme.color[$color]};
`;

export const Button = styled.button<{ $disabled: boolean }>`
  width: 100%;
  height: 40px;

  border-radius: 8px;

  ${({ theme }) => theme.typo.button2}
  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.color.greyScale5 : theme.color.percentOrange};
`;
