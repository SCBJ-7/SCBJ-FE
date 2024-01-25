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

  if (pathname.includes(PATH.SALE_DETAIL)) {
    undo = true;
    title = "판매내역 상세";
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
      undo = false;
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
      undo = false;
      break;
    case PATH.SALE_LIST:
      alarmIC = true;
      settingIC = true;
      title = "마이페이지";
      undo = true;
      break;
    case PATH.PURCHASE_DEATAIL:
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
    case PATH.SEARCH_FILTER:
      alarmIC = false;
      settingIC = false;
      title = "검색";
      undo = true;
      break;
    case PATH.MANAGE_ACCOUNT:
      alarmIC = false;
      settingIC = false;
      title = "정산계좌 관리";
      undo = true;
      break;
    case PATH.ALARM:
      alarmIC = false;
      settingIC = false;
      title = "알림";
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
    navigate(PATH.SETTING);
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
