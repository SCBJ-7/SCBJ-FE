import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 203px;
  background-color: white;
  padding: 24px 32px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.black};
`;
