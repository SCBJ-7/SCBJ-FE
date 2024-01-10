import styled from "styled-components";
import { ListElement, ListWrapper } from "../setting/Setting.style";
import { Link } from "react-router-dom";

export const ManageListWrapper = styled.section`
  ${ListWrapper}
`;

export const ManageListElement = styled.div`
  ${ListElement}
`;

export const ManageLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  line-height: 32px;
`;
