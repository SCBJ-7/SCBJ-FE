import { PATH } from "@/constants/path";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./HeaderTop.style";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let alarmIC = false;
  let settingIC = false;
  let title = "";
  let undo = true;

  switch (pathname) {
    case PATH.ROOT:
      alarmIC = false;
      settingIC = false;
      title = "홈";
      undo = false;
      break;
    case PATH.SEARCHLIST:
      alarmIC = false;
      settingIC = false;
      undo = false;
      break;
    case PATH.WRITE_TRANSFER:
      alarmIC = false;
      settingIC = false;
      title = "판매할 내역 선택";
      undo = false;
      break;
    case PATH.PURCHASE_LIST:
      alarmIC = true;
      settingIC = true;
      title = "구매내역";
      undo = true;
      break;
    case PATH.SALE_LIST:
      alarmIC = true;
      settingIC = true;
      title = "판매내역";
      undo = true;
      break;
    case PATH.PURCAHSE_DEATAIL:
      alarmIC = false;
      settingIC = false;
      title = "구매내역상세";
      undo = true;
      break;

    case PATH.SETTING:
      alarmIC = false;
      settingIC = false;
      title = "설정";
      undo = true;
      break;
    case PATH.MANAGE_PROFILE:
      alarmIC = false;
      settingIC = false;
      title = "프로필 변경";
      undo = true;
      break;
    default: // 없음
      alarmIC = false;
      settingIC = false;
      title = "";
      undo = true;
  }
  const undoHandler = () => {
    navigate(-1);
  };

  const alarmHandler = () => {
    // navigate("/...")
  };

  const settingHandler = () => {
    navigate("/setting");
  };

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderCell>
          {undo && <S.UndoIcon onClick={undoHandler} />}
        </S.HeaderCell>
        <S.HeaderCell>{title}</S.HeaderCell>
        <S.HeaderCell>
          {settingIC && <S.AlarmIcon onClick={alarmHandler} />}
          {alarmIC && <S.SettingIcon onClick={settingHandler} />}
        </S.HeaderCell>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
