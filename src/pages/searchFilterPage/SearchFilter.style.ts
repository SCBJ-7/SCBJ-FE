import styled from "styled-components";
import ResetIcon from "@assets/icons/ic_reset.svg?react";
export const FilterContainer = styled.div`
  width: 100%;

  height: 100%;
  background-color: white;
  padding: 2rem 20px 0 20px;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.scroll};
`;

export const FilterContent = styled.div`
  width: 100%;
  background-color: white;
`;

export const FilterTitle = styled.div`
  ${({ theme }) => theme.typo.title2}
`;
export const FilterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin-top: 2rem;
  display: flex;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.greyScale6};
  box-shadow:
    4px 4px 10px 0px rgba(212, 212, 212, 0.5),
    4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
export const FilterSubTitle = styled.div`
  ${({ theme }) => theme.typo.title5}
`;

export const FilterModalButton = styled.div`
  ${({ theme }) => theme.typo.body1}
`;

export const FilterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  position: fixed;
  height: 80px;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.greyScale6};
  padding: 20px;
`;

export const ResetButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  height: 24px;
  cursor: pointer;
  ${({ theme }) => theme.typo.button3}
  &.disable {
    color: ${({ theme }) => theme.color.greyScale3};
  }
`;
export const ResetButton = styled(ResetIcon)`
  &.disable {
    fill: ${({ theme }) => theme.color.greyScale3} !important;
  }
`;
export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 242px;
  height: 39px;
  color: white;
  background-color: ${({ theme }) => theme.color.percentOrange};
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
