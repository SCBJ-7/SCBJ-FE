import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import WishButton from "./LikeButton.tsx";
import * as S from "./WishCard.styles.ts";

import type { ProductType } from "@/types/wish.ts";

import ProgressiveImg from "@/components/progressiveImg/ProgressiveImg.tsx";
import { Typo } from "@/components/ui/typo";
import { formatDateWithoutTime } from "@/utils/dateFormatter.ts";

const WishCard = ({ product }: { product: ProductType }) => {
  const [isVisible, setIsVisible] = useState(true);

  const checkInDate = formatDateWithoutTime(product.checkInDate);
  const checkOutDate = formatDateWithoutTime(product.checkOutDate);

  useEffect(() => {
    if (product.visible === false) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [product.visible]);

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <S.CardContainer
          as={motion.div}
          initial="initial"
          animate="visible"
          exit="hidden"
          variants={cardVariants}
          layout
        >
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
                <WishButton productId={product.id} />
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
      )}
    </AnimatePresence>
  );
};

export default WishCard;

const cardVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    transition: { duration: 0.35 },
  },
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.35 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35 },
  },
};
