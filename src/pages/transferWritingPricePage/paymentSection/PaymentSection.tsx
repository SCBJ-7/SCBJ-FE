import priceFormat from "@/utils/priceFormat";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import * as S from "./PaymentSection.style";

interface PaymentProps {
  price: string;
  is2ndChecked: boolean;
  title: string;
  type: "first" | "second";
}

const PaymentSection = ({ price, is2ndChecked, title, type }: PaymentProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (type === "first") {
      if (is2ndChecked) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    } else {
      if (is2ndChecked) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, [is2ndChecked, type]);

  const FP = Number(price.split(",").join(""));
  let charge = 0;
  if (1000 < FP && FP <= 150000) {
    charge = Math.floor(FP * (2 / 100));
  } else if (150000 < FP && FP <= 300000) {
    charge = Math.floor(FP * (3 / 100));
  } else if (300000 < FP) {
    charge = Math.floor(FP * (5 / 100));
  }

  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <S.Container
      $is2ndChecked={is2ndChecked}
      layout={type === "first" ? "position" : undefined}
      transition={{
        layout: { duration: 0.2, type: "just", opacity: [0, 1] },
      }}
    >
      <S.Contents>
        <S.Label $isOpen={isOpen}>
          <h1>{is2ndChecked ? title : "예상 정산금액"}</h1>
          <S.IconWrapper onClick={toggleHandler}>
            <S.downIcon $isOpen={isOpen} />
          </S.IconWrapper>
        </S.Label>
        {isOpen && (
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <section>
              <h3>상품 판매가</h3>
              <span>{price ? priceFormat(FP) : 0} 원</span>
            </section>
            <section>
              <h3>중개 수수료</h3>
              <motion.span>{priceFormat(charge)} 원</motion.span>
            </section>
            <S.Hr />
          </motion.div>
        )}
      </S.Contents>
      {isOpen && (
        <S.Result
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <section>
            <h2>정산 총액</h2>
            <motion.span>{priceFormat(FP - charge)} 원</motion.span>
          </section>
          <h6>정산 총액은 양도 판매가에 중개 수수료를 제외한 값입니다.</h6>
        </S.Result>
      )}
    </S.Container>
  );
};

export default PaymentSection;
