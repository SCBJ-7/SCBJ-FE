import { Outlet } from "react-router-dom";
import * as S from "./components/layout";

function App() {
  return (
    <S.Container>
      {/* <SHeader /> */}
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
      {/* <SFooter/> */}
    </S.Container>
  );
}

export default App;
