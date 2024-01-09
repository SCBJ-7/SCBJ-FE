import styled, { css } from "styled-components";

export const SettingListContainer = styled.div`
  padding: 32px 20px;
`;

export const ListWrapper = css`
  padding: 16px 0px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    ${({ theme }) => theme.typo.body2}
    color: ${({ theme }) => theme.color.black};

    margin-bottom: 8px;
  }
`;

export const ListElement = css`
  ${({ theme }) => theme.typo.body4}
  color: ${({ theme }) => theme.color.black};

  border-bottom: ${({ theme }) => theme.border.strokeThin};

  height: 32px;
`;
