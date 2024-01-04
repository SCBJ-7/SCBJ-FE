import { Outlet } from "react-router-dom";
import * as S from "./components/layout";
import BottomNav from "./components/navBottom";

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
