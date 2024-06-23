import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 8px;

  padding: 16px 20px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.body3};
`;

export const Desc = styled.span`
  ${({ theme }) => theme.typo.caption5};
  color: ${({ theme }) => theme.color.greyScale3};
  margin-top: 4px;
`;

export const BadgesList = styled.ul`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 8px;
`;

export const Badge = styled.li`
  flex-shrink: 0;
  height: 28px;
  color: ${({ theme }) => theme.color.percentOrange};
  border: 1px solid ${({ theme }) => theme.color.percentOrange};
  padding: 8px;

  ${({ theme }) => theme.typo.body5};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`;

export const AddBadgeButton = styled.button`
  height: 28px;
  color: ${({ theme }) => theme.color.percentOrange};
  border: 1px solid ${({ theme }) => theme.color.percentOrange};
  padding: 8px;
  margin-top: 12px;

  ${({ theme }) => theme.typo.body4};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  margin: 12px 8px;
  gap: 4px;

  & .icon {
    position: relative;
    top: -0.5px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.lightOrange};
  }
`;
