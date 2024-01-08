import styled from "styled-components";
export { Text } from "@pages/roomDetailPage/RoomDetail.style";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 768px;
  padding: 1.5rem 1.25rem;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 10px 0 rgba(5, 44, 82, 0.1);
`;

export const Flex = styled.div`
  display: flex;
`;

export const Col = styled(Flex)`
  flex-direction: column;
`;

export const Row1 = styled(Flex)`
  gap: 0.5rem;
`;

export const ItemWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
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
