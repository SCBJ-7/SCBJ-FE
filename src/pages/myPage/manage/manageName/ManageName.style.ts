import styled from "styled-components";
import { ManageInfoElement } from "../manageProfile/ManageProfile.style";
import { theme } from "@/styles/theme";

const helpMessageColor = (state: string) => {
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
  state,
  isChanging,
}: {
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

    color: ${({ $state, $isChanging }) =>
      buttonColor({ state: $state, isChanging: $isChanging })};

    border-color: ${({ $state, $isChanging }) =>
      buttonColor({ state: $state, isChanging: $isChanging })};
  }
`;

export const HelpMessage = styled.span<{ $state: string }>`
  color: ${({ $state }) => helpMessageColor($state)};
`;
