import { app } from "@/firebase";
import { isMobileSafari } from "@utils/isMobileSafari";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import { isAccessTokenExpired } from "./checkToken";

export const messaging = !isMobileSafari() && getMessaging(app);

export async function checkAccessToken() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken && isAccessTokenExpired(accessToken)) {
    await getNotificationPermission();
  }
}

async function getNotificationPermission() {
  if (!messaging) return;

  const permission = await Notification.requestPermission();
  if (permission === "denied") {
    console.log("알림 권한 허용 안됨");
    return;
  }

  onMessage(messaging, (payload) => {
    console.log("메시지가 도착했습니다.", payload);
  });

  const fcmToken = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID,
  });

  if (fcmToken) {
    console.log("token: ", fcmToken);
    localStorage.setItem("fcmToken", fcmToken);
  } else console.log("Can not get Token");

  return fcmToken;
}

export default getNotificationPermission;
