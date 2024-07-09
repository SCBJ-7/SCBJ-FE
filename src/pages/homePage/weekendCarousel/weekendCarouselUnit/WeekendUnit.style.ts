import styled from "styled-components";

export const LocaleWrapper = styled.div`
  height: 343px;

  background-color: ${({ theme }) => theme.color.greyScale7};
  border-radius: 12px;

  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;

  & img {
    width: 100%;
    height: 169px;
    margin-bottom: 16px;
    object-fit: cover;
  }

  @media screen and (max-width: 499px) {
    width: 240px;
    img {
      margin-bottom: 8px;
    }
  }
  @media screen and (min-width: 500px) {
    width: 450px;
  }
`;

export const Stickers = styled.div`
  display: flex;
  gap: 4px;
  font-size: 12px;
  font-weight: 900;
  padding: 0 16px;
  margin-bottom: 16px;

  & section {
    padding: 5px 8px;
    border: 1px solid ${({ theme }) => theme.color.percentOrange};
    border-radius: 4px;
    color: ${({ theme }) => theme.color.percentOrange};
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 8px;
  }
`;

export const Titles = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;

  & h1 {
    ${({ theme }) => theme.typo.body1}
    margin-bottom: 5px;
  }

  & h3 {
    ${({ theme }) => theme.typo.body3}
  }
`;

export const Price = styled.div`
  padding: 0 16px;
  h4 {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.color.greyScale3};
    text-decoration: line-through;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.typo.body1}
  }

  section h1.percentage {
    color: ${({ theme }) => theme.color.percentBlue};
  }

  @media screen and (max-width: 500px) {
    section {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }
`;

export const Discounted = styled.div`
  display: flex;
  gap: 8px;
`;

export const Period = styled.div`
  ${({ theme }) => theme.typo.body5}
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.color.greyScale6};
  border-radius: 4px;
`;
