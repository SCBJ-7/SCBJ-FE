import styled from "styled-components";

export const Subtitle = styled.p`
  width: inherit;
  height: 69px;
  background-color: white;

  padding: 32px 16px 0;

  ${({ theme }) => theme.typo.title4}

  position: sticky;
  top: 56px;

  z-index: 1;
`;

export const TransferItemList = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4px;
  ${({ theme }) => theme.scroll}
`;

export const Container = styled.main`
  padding-top: 56px;
  padding-bottom: 62px;
  background-color: ${({ theme }) => theme.color.white};

  height: 100%;
`;
