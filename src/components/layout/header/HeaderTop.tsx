import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./HeaderTop.style";
import { PATH } from "@/constants/path";

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
      title = "검색";
      undo = true;
      break;
    case PATH.WRITE_TRANSFER:
      alarmIC = false;
      settingIC = false;
      title = "판매할 내역 선택";
      undo = false;
      break;
    case PATH.MY_PAGE:
      alarmIC = true;
      settingIC = true;
      title = "마이페이지";
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
    // navigate("/...")
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
