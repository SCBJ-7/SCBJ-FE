import styled from "styled-components";
import FilterIcon from "@assets/icons/ic_arrows-down-up.svg?react";
import CloseButton from "@assets/icons/ic_close-button.svg?react";
export const StandardFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchNavContainer = styled.div`
  position: sticky;
  background-color: white;
  top: 0;
  width: 100%;
  height: 44px;
  padding: 0.5rem 1.5rem;
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
export const SearchFilterCover = styled.div`
  width: 48px;
  height: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchFilterText = styled.div`
  ${({ theme }) => theme.typo.body5}
  margin-right: 0.25rem;
`;

export const SearchFilterImg = styled(FilterIcon)`
  width: 10px;
  height: 10px;
`;
export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 101;
`;

export const ModalContent = styled.div`
  transition: 2s;
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  height: 309px;
  position: fixed;
  bottom: 0;
  background-color: white;
  padding: 32px 20px;
  border-radius: 28px 28px 0 0;
`;
export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ModalTitle = styled.div`
  ${({ theme }) => theme.typo.button2}
`;
export const ModalCloseButton = styled(CloseButton)`
  margin-right: auto;
  cursor: pointer;
`;
