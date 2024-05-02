import * as S from "./SequenceSection.style";

import type { LocaleItem } from "@/types/saleSection";

interface indicatorProps {
  indicatorRange: number[];
  currentLocale: [number, string, LocaleItem[]];
  onSetSequence: React.Dispatch<
    React.SetStateAction<[number, string, LocaleItem[]]>
  >;
  localeAndHotel: [number, string, LocaleItem[]][];
}

const SequenceSection = ({
  indicatorRange,
  currentLocale,
  localeAndHotel,
  onSetSequence,
}: indicatorProps) => {
  const clickHandler = (sequence: number) => {
    onSetSequence(localeAndHotel[sequence]);
  };

  return (
    <S.SequneceSection>
      <S.SequneceIndicator>
        {indicatorRange.map((sequence) =>
          sequence === currentLocale[0] ? (
            <section key={sequence}>
              <span className="current"></span>
            </section>
          ) : (
            <section key={sequence} onClick={() => clickHandler(sequence)}>
              <span></span>
            </section>
          ),
        )}
      </S.SequneceIndicator>
    </S.SequneceSection>
  );
};

export default SequenceSection;
