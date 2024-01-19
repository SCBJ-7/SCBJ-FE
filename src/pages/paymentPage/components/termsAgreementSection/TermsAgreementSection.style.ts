import styled from "styled-components";

export { Text } from "@pages/paymentPage/Payment.style";

export const HStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const ItemWrapper = styled.div`
  padding: 0.7rem 0;
  border-bottom: ${({ theme }) => theme.border.strokeThin};
`;
