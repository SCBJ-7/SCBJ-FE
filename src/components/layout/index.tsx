import * as S from "./index";
import BottomNav from "./navBottom/index";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
      <BottomNav />
    </S.Container>
  );
};

export default Layout;
