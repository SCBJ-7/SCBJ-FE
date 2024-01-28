import { Outlet } from "react-router-dom";
import ScrollToTop from "@components/scrollToTop/ScrollToTop";
import Toast from "@components/toast/Toast";
import { useToastStore } from "./store/store";
import { AnimatePresence } from "framer-motion";
import IsLogin from "@components/isLogin/IsLogin";
import "./firebase.ts";

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
