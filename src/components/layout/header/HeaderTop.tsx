import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./HeaderTop.style";
import { PATH } from "@/constants/path";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [alarmIC, setAlarmIC] = useState(false);
  const [settingIC, setSettingIC] = useState(false);
  const [title, setTitle] = useState("");
  const [undo, setUndo] = useState(true);

  useEffect(() => {
    switch (pathname) {
      case PATH.ROOT:
        setAlarmIC(false);
        setSettingIC(false);
        setTitle("홈");
        setUndo(false);
        break;
      case PATH.SEARCHLIST:
        setAlarmIC(false);
        setSettingIC(false);
        setTitle("검색");
        setUndo(true);
        break;
      case PATH.WRITE_TRANSFER:
        setAlarmIC(false);
        setSettingIC(false);
        setTitle("양도글");
        setUndo(true);
        break;
      case PATH.MY_PAGE:
        setAlarmIC(true);
        setSettingIC(true);
        setTitle("양도글");
        setUndo(true);
        break;
      default: // 없음
        setAlarmIC(false);
        setSettingIC(false);
        setTitle("");
        setUndo(true);
    }
  }, [pathname]);

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
