import IconCheck from "@/assets/icons/ic_check.svg?react";
import * as S from "@/pages/roomDetailPage/RoomDetail.style";
import { theme } from "@/styles/theme";

interface RoomThemeOptionProps {
  option: {
    parkingZone: boolean;
    breakfast: boolean;
    pool: boolean;
    oceanView: boolean;
  };
}

const RoomThemeOption = ({ option }: RoomThemeOptionProps) => {
  const optionNames: { [key: string]: string } = {
    parkingZone: "주차가능",
    breakfast: "조식제공",
    pool: "수영장",
    oceanView: "오션뷰",
  };

  const filteredOptions = Object.keys(option).filter(
    (key) => option[key as keyof RoomThemeOptionProps["option"]],
  );

  return (
    <S.OptionContainer>
      {filteredOptions.map((key) => (
        <S.OptionWrapper key={key}>
          <IconCheck fill={theme.color.percentOrange} />
          <S.Text variant="body4" color="percentOrange">
            {optionNames[key]}
          </S.Text>
        </S.OptionWrapper>
      ))}
    </S.OptionContainer>
  );
};

export default RoomThemeOption;
