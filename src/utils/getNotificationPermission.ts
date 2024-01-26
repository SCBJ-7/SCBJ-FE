import { messaging } from "@/firebase";
import { getToken, onMessage } from "firebase/messaging";

async function getNotificationPermission() {
  console.log("권한 요청 중...");

  const permission = await Notification.requestPermission();

  if (permission === "denied") {
    alert(
      "알림을 차단하셨습니다.\n브라우저의 사이트 설정에서 변경하실 수 있습니다.",
    );
    return false;
  }

  console.log(permission);

  if (permission === "granted") {
    console.log("알림 권한이 허용됨");

    const fcmToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID,
    });

    if (fcmToken) {
      console.log("token: ", fcmToken);
    } else {
      console.log("FCM 토큰을 가져올 수 없습니다.");
      return false;
    }

    onMessage(messaging, (payload) => {
      console.log("메시지가 도착했습니다.", payload);
    });

    return fcmToken;
  }
}

export default getNotificationPermission;
