import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";

import * as S from "./AlarmPage.style";

import { fetchAlarm } from "@/apis/fetchAlarm";
import { fetchUserInfo } from "@/apis/fetchUserInfo";
import NoResult from "@/components/noResult/NoResult";
import { PATH } from "@/constants/path";
import { isMobileSafari } from "@/utils/isMobileSafari";

const AlarmPage = () => {
  const mobileSafari = isMobileSafari();

  const { data: userData } = useSuspenseQuery({
    queryKey: ["UserInfo"],
    queryFn: fetchUserInfo,
  });

  const { data: alarmData } = useQuery({
    queryKey: ["alarm", userData?.id],
    queryFn: fetchAlarm,
    enabled: !!userData?.id && !mobileSafari,
  });

  if (mobileSafari) {
    return (
      <NoResult
        title="알림을 사용할 수 없는 브라우저입니다"
        desc="모바일 사파리 브라우저에서 알림을 사용할 수 없어요"
        buttonDesc="홈 화면으로 돌아가기"
        navigateTo={PATH.ROOT}
      />
    );
  }

  if (alarmData) {
    return (
      <S.Container>
        {alarmData?.map((item) =>
          item.isRead ? (
            <S.OldMessage key={item.id}>
              <h1>{item.content}</h1>
              <h3>{format(parseISO(item.date), "yyyy. MM. dd. HH:mm")}</h3>
            </S.OldMessage>
          ) : (
            <S.NewMessage key={item.id}>
              <h1>{item.content}</h1>
              <div>
                {!item.isRead && <section />}
                <h3>{format(parseISO(item.date), "yyyy. MM. dd. HH:mm")}</h3>
              </div>
            </S.NewMessage>
          ),
        )}
        {alarmData && alarmData.length === 0 && (
          <NoResult
            title="알림 내역이 없습니다."
            desc="판매가 이루어지면 알림을 확인하실수 있어요."
            buttonDesc="돌아가기"
            navigateTo={PATH.ROOT}
          />
        )}
      </S.Container>
    );
  }
};

export default AlarmPage;
