import { useState } from "react";

import { LikeButton } from "./WishCard.styles";

import HeartFill from "@/assets/icons/heart-fill.svg?react";
import Heart from "@/assets/icons/heart.svg?react";
import {
  useDeleteWishMutation,
  usePostWishMutation,
} from "@/hooks/api/useWishQuery";

const WishButton = ({ productId }: { productId: number }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const { deleteWish } = useDeleteWishMutation();
  const { postWish } = usePostWishMutation();

  const handleToggleLike = () => {
    setLiked((prev) => !prev);
    if (liked) {
      deleteWish(productId.toString());
    } else {
      postWish(productId.toString());
    }
  };

  return (
    <LikeButton type="button" onClick={handleToggleLike}>
      {liked ? <HeartFill /> : <Heart />}
    </LikeButton>
  );
};

export default WishButton;
