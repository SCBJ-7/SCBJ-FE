import IsLogin from "@components/isLogin/IsLogin";
import ScrollToTop from "@components/scrollToTop/ScrollToTop";
import Toast from "@components/toast/Toast";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

import "./firebase.ts";

import { useToastStore } from "./store/store";

const App = () => {
  const toastConfig = useToastStore((state) => state.config);

  return (
    <IsLogin>
      <ScrollToTop />
      <AnimatePresence>{toastConfig.isShow && <Toast />}</AnimatePresence>
      <Outlet />
    </IsLogin>
  );
};

export default App;
