import { Link } from "react-router-dom";
import styled from "styled-components";

import { ListElement, ListWrapper } from "../setting/Setting.style";

export const ManageListWrapper = styled.section`
  ${ListWrapper}
`;

export const ManageListElement = styled.div<{ $visible: boolean }>`
  ${ListElement}

  display: ${({ $visible }) => ($visible ? "" : "none")};
`;

export const ManageLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  line-height: 32px;
`;
