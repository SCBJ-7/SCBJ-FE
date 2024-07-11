import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.greyScale7};
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.color.black};
  padding: 130px 0 130px 0;
`;

export const SearchItemFlex = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 20px;
`;

export const TopButtonCover = styled.div`
  position: fixed;
  width: 100%;
  max-width: 768px;
  bottom: 11%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

export const TopButton = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  border: 1px solid #e4e4e7;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  transform: rotate(270deg);

  & > svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.color.greyScale3};
  }

  &:hover {
    background-color: #f4f4f5;
  }

  visibility: hidden;
  opacity: 0;

  &.visible {
    visibility: visible;
    opacity: 1;
  }

  cursor: pointer;

  transition-property: background-color, visibility, opacity;
  transition-duration: 0.125s;
  transition-timing-function: ease;
`;

export const NoResultCover = styled.div`
  width: 100%;
  text-align: center;
`;
export const NoResultText = styled.div`
  margin-top: 184px;
  ${({ theme }) => theme.typo.title4}
`;
export const NoResultTextTwo = styled.div`
  ${({ theme }) => theme.typo.body3}
  margin-top: 1rem;
`;
