interface PeopleCounterProps {
  quantityPeople: number;
  setQuantityPeople: React.Dispatch<React.SetStateAction<number>>;
}
import * as S from "./PeopleCounter.style";
const PeopleCounter = ({
  quantityPeople,
  setQuantityPeople,
}: PeopleCounterProps) => {
  const increment = () => {
    setQuantityPeople((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantityPeople((prev) => Math.max(prev - 1, 0));
  };

  return (
    <S.CountContainer>
      <S.DownButton
        className={quantityPeople ? "" : "disable"}
        onClick={decrement}
      >
        -
      </S.DownButton>
      <S.CountNumber>{quantityPeople}</S.CountNumber>
      <S.UpButton onClick={increment}>
        <span>+</span>
      </S.UpButton>
    </S.CountContainer>
  );
};

export default PeopleCounter;
