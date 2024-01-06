import styled from "styled-components";

export const Subtitle = styled.p`
  width: inherit;
  height: 69px;
  background-color: white;

  padding: 32px 16px 0;

  ${({ theme }) => theme.typo.title2}

  position: sticky;
  top: 56px;
`;

export const TransferItemList = styled.div`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 60px;
`;
