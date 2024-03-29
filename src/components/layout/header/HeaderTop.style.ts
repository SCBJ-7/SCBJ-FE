import { PiBellBold, PiCaretLeftBold, PiGearBold } from "react-icons/pi";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 768px;
  height: 56px;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  z-index: 10;

  background-color: white;
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
    ${({ theme }) => theme.typo.body1}
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
