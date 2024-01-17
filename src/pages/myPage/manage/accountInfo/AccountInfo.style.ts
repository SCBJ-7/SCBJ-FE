import styled from "styled-components";

export const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 32px 20px;
`;

export const AccountInfoWrapper = styled.div`
  ${({ theme }) => theme.typo.body4}
  color: ${({ theme }) => theme.color.black};

  div {
    height: 33px;
    line-height: 33px;

    border-bottom: ${({ theme }) => theme.border.strokeThin};
  }
`;
