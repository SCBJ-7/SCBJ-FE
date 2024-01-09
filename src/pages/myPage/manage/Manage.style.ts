import styled from "styled-components";
import { ListElement, ListWrapper } from "../setting/Setting.style";

export const ManageListWrapper = styled.section`
  ${ListWrapper}
`;

export const ManageListElement = styled.div`
  ${ListElement}

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    line-height: 32px;
  }
`;
