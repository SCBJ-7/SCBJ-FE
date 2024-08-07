import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import * as S from "./MainHeader.style";

import { fetchHasAlarm } from "@/apis/fetchHasAlarm";
import MainLogo from "@/assets/logos/main_logo.svg?react";
import { PATH } from "@/constants/path";

const MainHeader = () => {
  const { data: hasAlarmData } = useSuspenseQuery({
    queryKey: ["hasAlarm"],
    queryFn: fetchHasAlarm,
  });

  const navigate = useNavigate();

  const alertHandler = () => {
    navigate(PATH.ALARM);
  };

  // isAlarmOn: 빈 배열일 시 true, boolean값일 시 false
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <MainLogo />
        <section>
          <S.bellIcon onClick={alertHandler} />
          <S.bellAlertOn $isAlarmOn={hasAlarmData.hasNonReadAlarm} />
        </section>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default MainHeader;
