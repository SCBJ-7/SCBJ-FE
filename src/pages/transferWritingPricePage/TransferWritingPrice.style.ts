import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.greyScale7};

  ${({ theme }) => theme.scroll}
`;
