import styled from "styled-components";
import { ListElement, ListWrapper } from "../setting/Setting.style";

export const InfoListWrapper = styled.section`
  ${ListWrapper}
`;

export const InfoListElement = styled.div`
  ${ListElement}

  button {
    width: 100%;

    text-align: left;
    line-height: 32px;
  }
`;
