import { useLocation } from "react-router-dom";
import * as S from "./header.styled";
import { useEffect, useState } from "react";
import { PATH } from "@/constants/path";
PATH;

const Header = () => {
  const { pathname } = useLocation();

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
      default: // 없음
        setAlarmIC(false);
        setSettingIC(false);
        setTitle("");
        setUndo(true);
    }
  }, [pathname]);

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderCell>{undo && <S.UndoIcon />}</S.HeaderCell>
        <S.HeaderCell>{title}</S.HeaderCell>
        <S.HeaderCell>
          {settingIC && <S.AlarmIcon />}
          {alarmIC && <S.SettingIcon />}
        </S.HeaderCell>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
