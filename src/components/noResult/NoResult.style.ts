import styled from "styled-components";

export const Container = styled.section<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & h4 {
    ${({ theme }) => theme.typo.title4}
  }

  & h5 {
    ${({ theme }) => theme.typo.body3}
  }

  & button {
    margin: 24px 0 64px;

    width: calc(100% - 40px);
    height: 48px;

    ${({ theme }) => theme.typo.button4}
    color: white;

    background-color: ${({ theme }) => theme.color.percentOrange};
    border-radius: 12px;
    transition: 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.color.darkOrange};
    }
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 184px;
`;
