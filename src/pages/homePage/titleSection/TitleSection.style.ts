import { styled } from "styled-components";

export const Container = styled.section`
  width: calc(100% - 40px);
  height: 66px;
  ${({ theme }) => theme.typo.title2}
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
