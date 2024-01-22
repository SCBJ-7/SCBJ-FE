interface PeopleCounterProps {
  maximumPeople: number;
  setMaximumPeople: React.Dispatch<React.SetStateAction<number>>;
}
import * as S from "./PeopleCounter.style";
const PeopleCounter = ({
  maximumPeople,
  setMaximumPeople,
}: PeopleCounterProps) => {
  const increment = () => {
    setMaximumPeople((prev) => prev + 1);
  };

  const decrement = () => {
    setMaximumPeople((prev) => Math.max(prev - 1, 0));
  };

  return (
    <S.CountContainer>
      <S.DownButton
        className={maximumPeople ? "" : "disable"}
        onClick={decrement}
      >
        -
      </S.DownButton>
      <S.CountNumber>{maximumPeople}</S.CountNumber>
      <S.UpButton onClick={increment}>
        <span>+</span>
      </S.UpButton>
    </S.CountContainer>
  );
};

export default PeopleCounter;
