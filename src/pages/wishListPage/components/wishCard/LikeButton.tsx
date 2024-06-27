import { useState } from "react";

import { LikeButton } from "./WishCard.styles";

import HeartFill from "@/assets/icons/heart-fill.svg?react";
import Heart from "@/assets/icons/heart.svg?react";
import { useDeleteWishInfiniteMutation } from "@/hooks/api/useWishQuery";

const WishButton = ({ productId }: { productId: number }) => {
  const [liked, setLiked] = useState<boolean>(true);

  const { deleteWish } = useDeleteWishInfiniteMutation();

  const handleToggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
    if (liked) {
      deleteWish(productId);
    }
  };

  return (
    <LikeButton type="button" onClick={handleToggleLike}>
      {liked ? <HeartFill /> : <Heart />}
    </LikeButton>
  );
};

export default WishButton;
