import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "@components/scrollToTop/ScrollToTop";
import Toast from "./components/toast/Toast";
import "./firebase.ts";

import { useToastStore } from "./store/store";
import { AnimatePresence } from "framer-motion";

function App() {
  // 토스트
  const toastConfig = useToastStore((state) => state.config);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>{toastConfig.isShow && <Toast />}</AnimatePresence>
      <Outlet />
    </>
  );
}

export default App;
