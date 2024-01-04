import { NavLink } from "react-router-dom";
import { typo } from "../../styles/typography";
import styled from "styled-components";

// icons
import { PiNewspaperClippingFill } from "react-icons/pi";
import { PiListMagnifyingGlassFill } from "react-icons/pi";
import { PiUserFill } from "react-icons/pi";
import NavIconHome from "@/assets/icons/NavHome";

export const BottomNavContainer = styled.section`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.black};
`;

export const BottomNavWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;

  display: flex;
`;

export const BottomNavCell = styled(NavLink)`
  width: 25%;
  height: 100%;

  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  gap: 2px;

  ${typo.caption3}

  color: white;
  &.active {
    color: orange;
  }
`;

export const NavIconHomes = styled(NavIconHome)``;

export const NavIconTransfer = styled(PiNewspaperClippingFill)`
  font-size: 32px;
`;

export const NavIconSearch = styled(PiListMagnifyingGlassFill)`
  font-size: 32px;
  transform: translateY(-1px);
`;

export const NavIconMy = styled(PiUserFill)`
  font-size: 32px;
`;
