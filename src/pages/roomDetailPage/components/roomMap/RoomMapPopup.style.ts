import styled from "styled-components";

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 600;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 24px 20px;
  gap: 16px;
  background: #fff;
  font-size: 0;
  box-shadow: 0 -3px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;

  background-color: ${(props) => props.theme.color.white};
`;
