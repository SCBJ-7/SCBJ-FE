import * as S from "./Setting.style";
import Manage from "../manage/Manage";
import Info from "../info/Info";

const Setting = () => {
  return (
    <S.SettingListContainer>
      <Manage />
      <Info />
    </S.SettingListContainer>
  );
};

export default Setting;
