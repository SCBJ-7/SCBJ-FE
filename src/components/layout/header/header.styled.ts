import { typo } from "@/styles/typography";
import { styled } from "styled-components";
import { PiCaretLeftBold, PiBellBold, PiGearBold } from "react-icons/pi";

export const HeaderContainer = styled.section`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;

  background-color: white;
`;

export const HeaderWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;

  display: flex;
`;

export const HeaderCell = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.color.black};

  &:nth-child(1) {
    padding-left: 16px;
  }

  &:nth-child(2) {
    ${typo.body1}
    width: 50%;
    justify-content: center;
  }

  &:nth-child(3) {
    padding-right: 16px;
    justify-content: flex-end;
    gap: 16px;
  }
`;

export const UndoIcon = styled(PiCaretLeftBold)`
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => theme.color.black};
`;

export const AlarmIcon = styled(PiBellBold)`
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => theme.color.black};
`;

export const SettingIcon = styled(PiGearBold)`
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => theme.color.black};
`;
