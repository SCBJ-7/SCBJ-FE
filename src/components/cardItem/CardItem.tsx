import * as S from "./CardItem.style";
import type { CardItemStyleProps } from "./CardItem.style";

interface CardItemProps extends CardItemStyleProps {
  label: string;
  content: string | React.ReactNode;
}

const CardItem = ({ label, content, type = "normal" }: CardItemProps) => {
  return (
    <>
      {type === "recipe" && <S.Hr />}
      <S.CardItem type={type}>
        <p className="label">{label}</p>
        <p className="content">{content}</p>
      </S.CardItem>
    </>
  );
};

export default CardItem;
