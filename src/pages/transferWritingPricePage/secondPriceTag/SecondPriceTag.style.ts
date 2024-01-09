import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  margin-bottom: 16px;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.typo.body3};

  section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  span {
    color: ${({ theme }) => theme.color.percentBlue};
  }
`;
