import styled from "styled-components";

export const LocaleWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  height: 390px;
  background-color: ${({ theme }) => theme.color.greyScale7};
  border-radius: 12px;

  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;

  & img {
    width: 100%;
    height: 195px;
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
  width: 100%;
  height: 14px;
  display: flex;
  gap: 4px;
  font-size: 12px;
  font-weight: 700;
  padding: 0 16px;
  margin-bottom: 16px;

  color: ${({ theme }) => theme.color.percentOrange};

  @media screen and (max-width: 500px) {
    margin-bottom: 8px;
  }
`;

export const Titles = styled.div`
  padding: 0 16px;
  margin-bottom: 8px;

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
    display: flex;
    justify-content: space-between;

    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  h4 .original {
    color: ${({ theme }) => theme.color.greyScale3};
    text-decoration: line-through;
    margin-left: 0.2rem;
  }

  h1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  section {
    ${({ theme }) => theme.typo.body1}
  }

  section .percentage {
    ${({ theme }) => theme.typo.caption2}
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
  gap: 8px;
`;

export const Period = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 23px;

  white-space: nowrap;
  ${({ theme }) => theme.typo.body3}
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.color.greyScale6};
  border-radius: 12px;

  @media screen and (max-width: 500px) {
    width: 67px;
    font-size: 10px;
    font-weight: 700;
  }
`;

export const HotelRate = styled.div`
  display: flex;
  margin: 0 0 8px 16px;
  ${({ theme }) => theme.typo.caption2}
  > div {
    padding-right: 0.1rem;
  }
`;

export const OriginalSection = styled.div`
  width: 127px;
  display: flex;
  justify-content: space-between;
`;

export const SalesSection = styled.div`
  width: 127px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
  font-weight: 600;
  height: 20px;

  > div:nth-child(2) {
    font-size: 17px; /* 두 번째 div에 대해 다른 폰트 크기 적용 */
  }
`;

export const HotelRateMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 79px;
  height: 24px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.percentOrange};
  background-color: ${({ theme }) => theme.color.black};
  right: 0;
  border-radius: 0 12px 0 12px;
`;
