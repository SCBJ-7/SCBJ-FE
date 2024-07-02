import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 88px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  background-color: white;

  display: flex;
  padding: 20px;
  gap: 8px;
`;

export const PrimaryButton = styled.button`
  flex-grow: 1;
  height: 40px;
  background-color: ${({ theme }) => theme.color.percentOrange};
  color: white;
  ${({ theme }) => theme.typo.button3}
  border-radius: 8px;
`;

export const SecondaryButton = styled.button`
  flex-grow: 1;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.percentOrange};
  color: ${({ theme }) => theme.color.percentOrange};
  border-radius: 8px;
`;
