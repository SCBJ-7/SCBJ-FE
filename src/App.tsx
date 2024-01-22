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
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
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
