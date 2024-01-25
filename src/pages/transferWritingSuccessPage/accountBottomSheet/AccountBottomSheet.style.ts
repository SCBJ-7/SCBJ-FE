import styled from "styled-components";

export const Container = styled.section<{ $height: number }>`
  width: 100%;
  height: ${({ $height }) => `${$height}px`};
  background-color: ${({ theme }) => theme.color.black};
  padding: 40px 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
