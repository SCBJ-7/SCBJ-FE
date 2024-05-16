import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BottomNavContainer = styled.section<{ $isMobile: boolean }>`
  display: flex;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "78px" : "60px")};
  max-width: 768px;

  z-index: 1;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(5, 44, 82, 0.1);
`;

export const BottomNavWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const BottomNavCell = styled(NavLink)`
  height: 100%;
  padding-top: 4px;

  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const BottomNavCellContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.typo.caption5}

  color: ${({ theme }) => theme.color.greyScale3};

  &.active {
    color: ${({ theme }) => theme.color.percentOrange};
  }
`;
