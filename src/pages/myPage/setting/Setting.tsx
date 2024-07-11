import * as S from "./Setting.style";
import Info from "../info/Info";
import Manage from "../manage/Manage";

const Setting = () => {
  return (
    <S.SettingListContainer>
      <Manage />
      <Info />
    </S.SettingListContainer>
  );
};

export default Setting;
