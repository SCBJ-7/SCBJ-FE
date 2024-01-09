import styled from "styled-components";

export const PurchaseList = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 160px;
  background-color: white;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
