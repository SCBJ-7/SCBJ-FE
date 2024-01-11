import styled from "styled-components";

export const FirstContainer = styled.div`
  height: 269px;
  width: 100%;
  padding: 40px 20px 32px;
  background-color: white;
  margin-bottom: 16px;
`;

export const Headline = styled.div`
  ${({ theme }) => theme.typo.title4};
`;

export const Contents = styled.div`
  ${({ theme }) => theme.typo.body3};
  margin-top: 32px;

  section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    &:last-child {
      flex-direction: column;
      gap: 16px;
      margin-bottom: 16px;
    }
  }

  span {
    color: ${({ theme }) => theme.color.percentBlue};
  }
`;
