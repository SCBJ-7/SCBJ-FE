import styled from "styled-components";

interface ImgProps {
  isLoading: boolean;
}

export const Img = styled.img.withConfig({
  shouldForwardProp: (prop) => !["isLoading"].includes(prop),
})<ImgProps>`
  transition: opacity 0.3s linear;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};

  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
`;
