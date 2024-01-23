import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 32px;

  & button {
    margin-bottom: 32px;
    flex-shrink: 0;

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
