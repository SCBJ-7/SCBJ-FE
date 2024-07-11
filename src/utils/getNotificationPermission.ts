import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
} from "firebase/messaging";

import { isAccessTokenExpired } from "./checkToken";

import { app } from "@/firebase";

export async function checkAccessToken() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken && isAccessTokenExpired(accessToken)) {
    await getNotificationPermission();
  }
}

async function getNotificationPermission() {
  const supported = await isSupported();
  if (!supported) {
    console.log("이 브라우저는 FCM을 지원하지 않습니다.");
    return;
  }

  const messaging = getMessaging(app);

  const permission = await Notification.requestPermission();
  if (permission === "denied") {
    console.log("알림 권한 허용 안됨");
    return;
  }

  onMessage(messaging, (payload) => {
    console.log("메시지가 도착했습니다.", payload);
  });

  try {
    const fcmToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID,
    });

    if (fcmToken) {
      console.log("token: ", fcmToken);
      localStorage.setItem("fcmToken", fcmToken);
    } else {
      console.log("토큰을 가져올 수 없습니다.");
    }

    return fcmToken;
  } catch (error) {
    console.error("FCM 토큰 요청 중 오류 발생:", error);
  }
}

export default getNotificationPermission;
