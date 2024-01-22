import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

import { Outlet, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import Toast from "./components/toast/Toast.tsx";

import { useToastStore } from "./store/store.ts";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
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

  const app = initializeApp(firebaseConfig);
  app;
  // const messaging = getMessaging(app);

  // getToken(messaging, { vapidKey: "BKagOny0KF_2pCJQ3m....moL0ewzQ8rZu" });

  // 토스트
  const toastConfig = useToastStore((state) => state.config);
  const setToastConfig = useToastStore((state) => state.setToastConfig);
  const location = useLocation();

  useEffect(() => {
    setToastConfig({
      isShow: false,
      isError: false,
      strings: toastConfig.strings,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Layout>
      <AnimatePresence>{toastConfig.isShow && <Toast />}</AnimatePresence>
      <Outlet />
    </Layout>
  );
}

export default App;
