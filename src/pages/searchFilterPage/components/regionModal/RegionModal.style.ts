import CloseButton from "@/assets/icons/ic_close-button.svg?react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;

  color: ${({ theme }) => theme.color.black};
`;

export const ModalContent = styled.div`
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 56px 20px 0 20px;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.scroll};
`;

export const ModalTop = styled.div`
  max-width: 768px;
  min-width: 360px;
  padding: 0 20px;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  height: 56px;

  z-index: 50;
`;

export const ModalTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const ModalCloseButton = styled(CloseButton)`
  cursor: pointer;
`;

export const ModalRegionItems = styled.div`
  max-width: 500px;
  width: 100%;
  margin-top: 2rem;
`;

export const RegionItemsLine = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-bottom: 2rem;
`;

export const RegionItem = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  transition: 0.1s;
  ${({ theme }) => theme.typo.body3}
  position: relative;
  overflow: hidden; /* overflow 설정 추가 */

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.greyScale3};
  }

  &.active {
    border: 2px solid ${({ theme }) => theme.color.percentOrange};
    color: ${({ theme }) => theme.color.percentOrange};
    font-size: 800 !important;
  }
`;

export const RegionImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1; /* width와 height를 1:1로 설정 */
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  position: relative;
`;
export const RegionName = styled.div`
  width: 100%;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0 0 12px 12px;
`;
