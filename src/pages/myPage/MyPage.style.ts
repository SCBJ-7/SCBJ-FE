import styled from "styled-components";

export const ProfileSection = styled.section`
  padding: 25px 20px 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  border-bottom: 10px solid ${({ theme }) => theme.color.greyScale7};

  span {
    ${({ theme }) => theme.typo.body1}
    color: ${({ theme }) => theme.color.black};

    margin-bottom: 16px;
  }

  button {
    ${({ theme }) => theme.typo.body4}
    color: ${({ theme }) => theme.color.white};

    display: flex;
    justify-content: center;
    align-items: center;

    height: 32px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.color.percentOrange};
  }
`;
