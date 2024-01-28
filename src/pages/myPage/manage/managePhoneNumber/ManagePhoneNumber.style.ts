import styled, { DefaultTheme } from "styled-components";

import { ManageInfoElement } from "../manageProfile/ManageProfile.style";

const helpMessageColor = ({
  theme,
  state,
}: {
  theme: DefaultTheme;
  state: string;
}) => {
  if (state === "onError") return theme.color.cautionRed;
  else return theme.color.percentBlue;
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

export const ManageNumberSection = styled(ManageInfoElement)<{
  $state: string;
  $isChanging: boolean;
}>`
  button {
    color: ${({ theme, $state, $isChanging }) =>
      buttonColor({ theme, state: $state, isChanging: $isChanging })};

    border-color: ${({ theme, $state, $isChanging }) =>
      buttonColor({ theme: theme, state: $state, isChanging: $isChanging })};
  }
`;

export const HelpMessage = styled.span<{ $state: string }>`
  color: ${({ theme, $state }) => helpMessageColor({ theme, state: $state })};
`;
