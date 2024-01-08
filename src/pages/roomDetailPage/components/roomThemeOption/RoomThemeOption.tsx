import IconCheck from "@assets/icons/ic_check.svg?react";
import Flex from "@components/flex/Flex";
import Stack from "@components/stack/Stack";
import Text from "@components/text/Text";
import { theme } from "@styles/theme";

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
    <Stack spacing={5} direction="row">
      {filteredOptions.map((key) => (
        <Flex gap="0.3rem" key={key}>
          <IconCheck fill={theme.color.percentOrange} />
          <Text variant="body2" color="percentOrange">
            {optionNames[key]}
          </Text>
        </Flex>
      ))}
    </Stack>
  );
};

export default RoomThemeOption;
