import * as S from "./Flex.style";
import type { FlexStyleProps } from "./Flex.style";
import type { BoxStyleProps } from "@components/box/Box.style";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

type FlexProps = {
  children: ReactNode;
} & FlexStyleProps &
  Pick<BoxStyleProps, "backgroundColor" > &
  ComponentPropsWithoutRef<"div">;

const Flex = ({ children, ...props }: FlexProps) => {
  return <S.Flex {...props}>{children}</S.Flex>;
};

export default Flex;
