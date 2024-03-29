import styled from "styled-components";
import TopButtonIcon from "@assets/icons/ic_top_button.svg?react";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.white};
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 116px;
  color: ${({ theme }) => theme.color.black};
  padding-bottom: 100px;
`;

export const SearchItemFlex = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 20px;
`;

interface TopButtonProps {
  $visible: boolean;
}
export const TopButtonCover = styled.div`
  position: fixed;
  width: 100%;
  max-width: 768px;
  bottom: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;
export const TopButton = styled(TopButtonIcon)<TopButtonProps>`
  margin-right: 20px;
  cursor: pointer;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden").toString()};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition:
    visibility 0.2s,
    opacity 0.2s;
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
