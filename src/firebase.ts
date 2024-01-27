import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { isMobileSafari } from "./utils/isMobileSafari";
import { isAccessTokenExpired } from "./utils/checkToken";
import getNotificationPermission from "./utils/getNotificationPermission";

// firebase
const firebaseConfig = {
  apiKey: "AIzaSyAc4XrxZs2G1EVp-NbpCh5rw9rVgnUG284",
  authDomain: "scbj-af2e3.firebaseapp.com",
  projectId: "scbj-af2e3",
  storageBucket: "scbj-af2e3.appspot.com",
  messagingSenderId: "177564796245",
  appId: "1:177564796245:web:6b27b878cbc2ccacf39bdc",
  measurementId: "G-1YD7ZEM9HM",
};

export const app = initializeApp(firebaseConfig);
export const messaging = !isMobileSafari() && getMessaging(app);

// isLoggedIn wrapper로 만든걸 사용하고 싶었는데 만료 여부도 확인해야돼서 localStorage.getItem을 썼습니다!
const accessToken = localStorage.getItem("accessToken");
if (accessToken && isAccessTokenExpired(accessToken)) {
  await getNotificationPermission();
  // 로그인을 안 하더라도 로컬 스토리지의 accessToken이 만료되지 않았다면 getNotification을 실행
}

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
