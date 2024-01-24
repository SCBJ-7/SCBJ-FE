import { useState } from "react";
import * as S from "./AlarmPage.style";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { fetchAlarm } from "@apis/fetchAlarm";
import { format, parseISO } from "date-fns";
import { fetchUserInfo } from "@apis/fetchUserInfo";
import { AlarmType } from "@type/alarm";

const AlarmPage = () => {
  const { data: userData } = useSuspenseQuery({
    queryKey: ["UserInfo"],
    queryFn: fetchUserInfo,
  });

  const { data: alarmData } = useQuery({
    queryKey: ["alarm", userData?.id],
    queryFn: fetchAlarm,
    enabled: !!userData?.id,
  });

  console.log(alarmData);
  const [messages] = useState<AlarmType[] | undefined>(alarmData);

  return (
    <S.Container>
      {messages?.map((item) =>
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
      {!messages && <div>no result</div>}
    </S.Container>
  );
};

export default AlarmPage;