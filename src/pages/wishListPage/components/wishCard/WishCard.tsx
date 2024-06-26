import WishButton from "./LikeButton.tsx";
import * as S from "./WishCard.styles.ts";

import type { ProductType } from "@/types/wish.ts";

import ProgressiveImg from "@/components/progressiveImg/ProgressiveImg.tsx";
import { Typo } from "@/components/ui/typo";
import { formatDateWithoutTime } from "@/utils/dateFormatter.ts";

const WishCard = ({ product }: { product: ProductType }) => {
  const checkInDate = formatDateWithoutTime(product.checkInDate);
  const checkOutDate = formatDateWithoutTime(product.checkOutDate);

  return (
    <S.CardContainer>
      <S.CardWrapper>
        <S.ImgWrapper>
          <ProgressiveImg
            src={product.imageUrl}
            alt={`${product.hotelName} 이미지`}
          />
        </S.ImgWrapper>
        <S.InfoWrapper>
          <S.TitleWrapper>
            <S.TextWrapper>
              <Typo typo="button4">{product.hotelName}</Typo>
              <Typo typo="body5">{product.bedType}</Typo>
            </S.TextWrapper>
            <WishButton productId={product.productId} />
          </S.TitleWrapper>
          <S.TextWrapper>
            <Typo typo="body5">
              {checkInDate} ~ {checkOutDate}
            </Typo>
            <Typo typo="button4">
              <span>{product.price.toLocaleString()}원</span>
            </Typo>
          </S.TextWrapper>
        </S.InfoWrapper>
      </S.CardWrapper>
    </S.CardContainer>
  );
};

export default WishCard;
