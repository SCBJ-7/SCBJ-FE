import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div<{
  $isHeaderOn?: boolean;
  $isBottomNavOn: boolean;
}>`
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  height: 100%;

  padding-top: ${({ $isHeaderOn }) => ($isHeaderOn ? "56px" : "0")};
  padding-bottom: ${({ $isBottomNavOn }) => ($isBottomNavOn ? "80px" : "0")};

  position: relative;

  background-color: white;
`;
