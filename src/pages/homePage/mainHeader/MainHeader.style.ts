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

  background-color: white;
`;

export const HeaderWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.color.black};
`;

export const bellIcon = styled(LuBell)`
  font-size: 24px;
`;
