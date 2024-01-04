import { Outlet } from "react-router-dom";
import * as S from "./components/layout";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <S.Container>
      {/* <SHeader /> */}
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
      <BottomNav />
    </S.Container>
  );
}

export default App;
