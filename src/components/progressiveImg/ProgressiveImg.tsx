import { useState, useEffect } from "react";

import * as S from "./style";

interface ProgressiveImgProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholderSrc?: string;
}

const ProgressiveImg: React.FC<ProgressiveImgProps> = ({
  src,
  placeholderSrc,
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setLoading(false);
    };
  }, [src]);

  return (
    <S.Img src={imgSrc} alt={alt || ""} isLoading={isLoading} {...props} />
  );
};

export default ProgressiveImg;
