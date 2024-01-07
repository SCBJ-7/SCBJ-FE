import { Outlet } from "react-router-dom";
import MyPageNav from "./components/myPageNav/MyPageNav";

const My = () => {
  return (
    <div>
      <MyPageNav />
      <Outlet />
    </div>
  );
};

export default My;
