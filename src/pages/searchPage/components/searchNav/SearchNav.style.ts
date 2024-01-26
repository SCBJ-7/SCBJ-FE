import styled from "styled-components";

export const StandardFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchNavContainer = styled.div`
  position: absolute;
  background-color: white;
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  height: 44px;
  padding: 0.5rem 1.5rem;
  position: fixed;
  z-index: 10;
  top: 72px;
`;

export const SearchCellCover = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SearchNavCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 28px;
  color: ${({ theme }) => theme.color.greyScale2};
  box-sizing: border-box;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  ${({ theme }) => theme.typo.button6}

  &.active {
    border: none;
    background-color: ${({ theme }) => theme.color.percentOrange};
    color: white;
  }
  cursor: pointer;
`;
