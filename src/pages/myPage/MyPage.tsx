import { Outlet } from "react-router-dom";
import MyPageNav from "./components/myPageNav/MyPageNav";

const My = () => {
  return (
    <>
      <MyPageNav />
      <Outlet />
    </>
  );
};

export default My;
