import { PATH } from "@/constants/path";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./HeaderTop.style";

const Header = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search); // 쿼리스트링 분리

  let alarmIC = false;
  let settingIC = false;
  let title = "";
  let undo = true;

  if (pathname.includes(PATH.WRITE_TRANSFER_PRICE)) {
    const hotelName = params.get("hotelName");
    if (hotelName) {
      title = hotelName;
    }
  }

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
    case PATH.WRITE_TRANSFER_PRICE:
      alarmIC = false;
      settingIC = false;
      undo = false;
      break;
    case PATH.MY_PAGE:
      alarmIC = true;
      settingIC = true;
      title = "마이페이지";
      undo = true;
      break;
    default: // 없음
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
