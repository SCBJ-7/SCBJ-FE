import styled from "styled-components";
export { LeftBox, RightBox } from "@pages/roomDetailPage/RoomDetail.style";
export { HStack, Text } from "@pages/paymentPage/Payment.style";

export const Flex = styled.div`
  display: flex;
`;

export const Col = styled(Flex)`
  flex-direction: column;
  gap: 0.5rem;
`;

export const Row = styled(Flex)`
  gap: 1rem;
  align-items: center;
`;

export const VStack3 = styled(Flex)`
  gap: 0.375rem;
  padding: 1rem 0 1.5rem;
`;

export const ThumbnailWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;

  border-radius: 12px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const ItemWrapper = styled(Flex)`
  justify-content: space-between;

  gap: 1rem;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px dashed ${({ theme }) => theme.color.greyScale5};
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
`;
