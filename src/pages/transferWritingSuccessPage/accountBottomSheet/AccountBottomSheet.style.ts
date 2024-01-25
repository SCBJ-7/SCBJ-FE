import styled from "styled-components";

export const Dim = styled.section`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
`;

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  padding: 40px 20px;
  border-radius: 28px 28px 0 0;

  position: absolute;
  bottom: 0;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ${({ theme }) => theme.typo.body3}
`;

export const Body = styled.div``;
export const Button = styled.div``;
