import styled from "styled-components";

export const LocaleWrapper = styled.div<{ $display: "block" | "none" }>`
  width: 100%;
  height: 272px;
  background-color: white;
  flex: 0 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ItemUnit = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;

  & img {
    width: 180px;
    height: 128px;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 12px;
  }

  & .item-info {
    height: 112px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & .hotelTitle {
    margin-bottom: 16px;
  }

  & .item-info h1 {
    ${({ theme }) => theme.typo.body1}
  }

  & .item-info h3 {
    ${({ theme }) => theme.typo.body3}
  }

  & .hotel_price h5 {
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyScale3};
    text-decoration-line: line-through;
  }

  & .hotel_price h1 span {
    color: ${({ theme }) => theme.color.percentBlue};
  }

  @media screen and (min-width: 580px) {
    & img {
      width: 320px;
      object-fit: cover;
    }
  }

  & h1 span {
    margin-left: 8px;
  }
`;

export const Sticker = styled.div`
  ${({ theme }) => theme.typo.body5}
  width: fit-content;
  padding: 2px 8px;
  margin-top: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.greyScale6};
`;
