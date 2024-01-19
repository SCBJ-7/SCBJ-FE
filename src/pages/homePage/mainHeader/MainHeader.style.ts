import { styled } from "styled-components";
import { LuBell } from "react-icons/lu";

export const HeaderContainer = styled.section`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  z-index: 10;

  background-color: ${({ theme }) => theme.color.greyScale6};
`;

export const HeaderWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.color.black};
  padding: 0 20px;

  section {
    position: relative;
    border-radius: 50%;
    transition: 0.2s;
  }

  & section:hover {
    background-color: ${({ theme }) => theme.color.greyScale5};
  }
`;

export const bellIcon = styled(LuBell)`
  font-size: 24px;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
`;

export const bellAlertOn = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.color.cautionRed};
  border-radius: 50%;

  position: absolute;
  top: 0px;
  left: 13px;
  border: 1px solid ${({ theme }) => theme.color.greyScale6};
`;
