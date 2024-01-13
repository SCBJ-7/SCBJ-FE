import { PiCaretLeftBold } from "react-icons/pi";
import styled from "styled-components";

export const ScrollObserver = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const HeaderContainer = styled.header<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 768px;
  height: 56px;
  z-index: 2;
  background-color: ${({ $visible, theme }) =>
    $visible ? "unset" : theme.color.white};
  border-bottom: ${({ $visible, theme }) =>
    $visible ? "none" : `1px solid ${theme.color.greyScale7}`};

  transition:
    border-bottom,
    background-color 0.5s ease-in;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > .wrap-left {
    position: absolute;
    top: 4px;
    left: 4px;
    font-size: 0;

    & > .btn-back {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
    }
  }
`;

export const BackIcon = styled(PiCaretLeftBold)<{ $visible: boolean }>`
  font-size: 24px;
  fill: ${({ $visible, theme }) =>
    $visible ? theme.color.white : theme.color.black};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const Title = styled.p<{ $visible: boolean }>`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 180px);

  opacity: ${({ $visible }) => ($visible ? 0 : 1)};
`;
