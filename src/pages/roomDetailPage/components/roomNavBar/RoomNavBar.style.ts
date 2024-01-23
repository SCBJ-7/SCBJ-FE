import styled from "styled-components";

export { Text } from "@pages/roomDetailPage/RoomDetail.style";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 768px;
  height: 68px;
  padding: 1.2rem 1.25rem;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.white};

  display: flex;
  align-items: center;

  box-shadow: 0 0 0.4rem rgba(5, 44, 82, 0.1);
  -webkit-clip-path: inset(-0.4rem 0 0 0);
  clip-path: inset(-0.4rem 0 0 0);
`;

export const Flex = styled.div`
  display: flex;
`;

export const ColWrapper = styled(Flex)`
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
`;

export const Row2 = styled(Flex)`
  gap: 0.5rem;
`;

export const Button = styled.button<{ $status: boolean }>`
  ${({ theme }) => theme.typo.button2}
  padding: 0.7rem 3rem;
  color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  background-color: ${({ $status, theme }) =>
    $status ? theme.color.percentOrange : theme.color.greyScale5};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ $status, theme }) =>
      $status ? theme.color.darkOrange : theme.color.greyScale4};
  }
`;
