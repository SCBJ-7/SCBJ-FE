export const SELLERCOMMENTS = [
  "후기 좋아요",
  "이용자 강추",
  "갓성비",
  "파격적인 가격",
  "사정이 생겼어요",
  "뷰맛집",
  "옵션 좋아요",
  "교통편리",
  "가족여행추천",
  "커플여행추천",
  "호캉스추천",
  "조식맛집",
  "시설이 청결해요",
  "관광명소근처",
  "인기숙소",
  "주차편리",
] as const;

export type SellerCommentType = (typeof SELLERCOMMENTS)[number];
