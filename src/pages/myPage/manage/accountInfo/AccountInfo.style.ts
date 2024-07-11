import styled from "styled-components";

export const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 56px 1.25rem 80px;
`;

export const AccountInfoWrapper = styled.div`
  ${({ theme }) => theme.typo.body4}
  color: ${({ theme }) => theme.color.black};

  padding-top: 1.25rem;

  div {
    height: 33px;
    line-height: 33px;

    border-bottom: ${({ theme }) => theme.border.strokeThin};
  }
`;

export const AccountEditButton = styled.button`
  position: absolute;
  bottom: 112px;

  width: calc(100% - 40px);
  height: 48px;

  border-radius: 8px;

  ${({ theme }) => theme.typo.button2}
  color: ${({ theme }) => theme.color.white};
  line-height: 48px;

  background-color: ${({ theme }) => theme.color.percentOrange};
`;
