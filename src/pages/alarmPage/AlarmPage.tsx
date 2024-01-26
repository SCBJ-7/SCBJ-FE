import * as S from "./AlarmPage.style";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { fetchAlarm } from "@apis/fetchAlarm";
import { format, parseISO } from "date-fns";
import { fetchUserInfo } from "@apis/fetchUserInfo";
import NoResult from "@components/noResult/NoResult";
import { PATH } from "@constants/path";
import Loading from "@components/loading/Loading";

const AlarmPage = () => {
  const { data: userData } = useSuspenseQuery({
    queryKey: ["UserInfo"],
    queryFn: fetchUserInfo,
  });

  const { data: alarmData, isLoading } = useQuery({
    queryKey: ["alarm", userData?.id],
    queryFn: fetchAlarm,
    enabled: !!userData?.id,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <S.Container>
      {alarmData?.map((item) =>
        item.isRead ? (
          <S.OldMessage key={item.id}>
            <S.OldMessage>
              <h1>{item.content}</h1>
              <h3>{format(parseISO(item.date), "yyyy. MM. dd. HH:mm")}</h3>
            </S.OldMessage>
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
      {!alarmData && (
        <NoResult
          title="알림 내역이 없습니다."
          desc="판매가 이루어지면 알림을 확인하실수 있어요."
          buttonDesc="돌아가기"
          navigateTo={PATH.ROOT}
        />
      )}
    </S.Container>
  );
};

export default AlarmPage;
