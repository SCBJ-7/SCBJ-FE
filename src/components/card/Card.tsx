import * as S from "./Card.style";

interface CardProps {
  title?: string;
  children?: React.ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <S.CardContainer>
      <S.Text variant="body2" color="black">
        {title}
      </S.Text>
      <S.CardBody>{children}</S.CardBody>
    </S.CardContainer>
  );
};

export default Card;
