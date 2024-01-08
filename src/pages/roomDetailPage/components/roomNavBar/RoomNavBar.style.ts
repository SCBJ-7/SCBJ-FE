import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 768px;
  padding: 1.5rem 1.25rem;
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  bottom: 0;
`;

// FIXME: Button 컴포넌트 만들기
export const Button = styled.button<{ $status: boolean }>`
  ${({ theme }) => theme.typo.button2}
  padding: 0.7rem 3rem;
  color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  background-color: ${({ $status, theme }) =>
    $status ? theme.color.percentOrange : theme.color.greyScale5};
  transition: background-color 0.5s ease-in;
  &:hover {
    background-color: ${({ $status, theme }) =>
      $status ? theme.color.darkOrange : theme.color.greyScale4};
  }
`;
