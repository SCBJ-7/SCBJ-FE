import styled from "styled-components";

import { remCalc } from "@/utils/styleFormatter.ts";

export const CardContainer = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};

  padding-block: ${remCalc(24)};
  padding-inline: ${remCalc(20)};

  cursor: pointer;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImgWrapper = styled.div`
  max-width: 88px;
  height: 88px;
  width: 100%;

  border-radius: 8px;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LikeButton = styled.button`
  & > svg {
    width: 24px;
    height: 24px;
  }
`;
