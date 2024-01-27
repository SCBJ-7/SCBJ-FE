import { messaging } from "@/firebase";
import { getToken, onMessage } from "firebase/messaging";

async function getNotificationPermission() {
  console.log("권한 요청 중...");

  // const permission = await Notification.requestPermission();
  // if (permission === "denied") {
  //   console.log("알림 권한 허용 안됨");
  //   return;
  // }

  // console.log("알림 권한이 허용됨");

  const fcmToken = await getToken(messaging, {
    vapidKey:
      "BNJnISNECPJrEzIQ8Mbjvw2bu3GQrwo52ChZT0E8BX243r9WAlXS7yYZJntYKt537lSs4188KsLJLJFFdPyRL3Q",
  });

  console.log(fcmToken);

  if (fcmToken) console.log("token: ", fcmToken);
  else console.log("Can not get Token");

  onMessage(messaging, (payload) => {
    console.log("메시지가 도착했습니다.", payload);
  });

  return fcmToken;
}

export default getNotificationPermission;
