import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 137px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2px;
`;

export const Rows = styled.div`
  margin: 0 20px;

  display: flex;
  justify-content: space-between;

  span {
    ${({ theme }) => theme.typo.body3}
    margin-bottom: 8px;
  }

  &.return {
    margin-top: 8px;
  }

  .blue {
    color: ${({ theme }) => theme.color.percentBlue};
    font-size: 16px;
    font-weight: bold;
  }
`;
