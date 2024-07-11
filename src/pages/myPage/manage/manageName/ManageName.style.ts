import styled, { DefaultTheme } from "styled-components";

import { ManageInfoElement } from "../manageProfile/ManageProfile.style";

const helpMessageColor = ({
  theme,
  state,
}: {
  theme: DefaultTheme;
  state: string;
}) => {
  switch (state) {
    case "linkedToYanolja":
      return theme.color.greyScale4;
    case "onError":
      return theme.color.cautionRed;
    default:
      return theme.color.percentBlue;
  }
};

const buttonColor = ({
  theme,
  state,
  isChanging,
}: {
  theme: DefaultTheme;
  state: string;
  isChanging: boolean;
}) => {
  if (!isChanging) {
    return theme.color.black;
  } else if (state === "onError") {
    return theme.color.greyScale4;
  } else {
    return theme.color.percentOrange;
  }
};

export const ManageNameSection = styled(ManageInfoElement)<{
  $linkedToYanolja: boolean;
  $state: string;
  $isChanging: boolean;
}>`
  button {
    display: ${({ $linkedToYanolja }) => ($linkedToYanolja ? "none" : "")};

    color: ${({ theme, $state, $isChanging }) =>
      buttonColor({ theme, state: $state, isChanging: $isChanging })};

    border-color: ${({ theme, $state, $isChanging }) =>
      buttonColor({ theme, state: $state, isChanging: $isChanging })};
  }
`;

export const HelpMessage = styled.span<{ $state: string }>`
  color: ${({ theme, $state }) => helpMessageColor({ theme, state: $state })};
`;
