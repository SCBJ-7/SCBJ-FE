import styled from "styled-components";

export const DetailSection = styled.section`
  padding: 2rem 1.25rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.color.greyScale7};
  padding: 1rem;
  width: 100%;
`;

export const LeftBox = styled(Box)`
  -webkit-border-top-left-radius: 8px;
  -webkit-border-bottom-left-radius: 8px;
  -moz-border-radius-topleft: 8px;
  -moz-border-radius-bottomleft: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const RightBox = styled(Box)`
  -webkit-border-top-right-radius: 8px;
  -webkit-border-bottom-right-radius: 8px;
  -moz-border-radius-topright: 8px;
  -moz-border-radius-bottomright: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.typo.body3}
`;
