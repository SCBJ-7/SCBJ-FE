import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/roomId", () => {
    //객실 타입
    return HttpResponse.json([
      {
        id: 1,
        name: "Standard",
        checkIn: "18:00",
        checkOut: "13:00",
        originalPrice: "100,000",
        salePrice: "90,000",
        roomPicture:
          "https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg",
      },
      {
        id: 2,
        name: "Deluxe",
        checkIn: "18:00",
        checkOut: "13:00",
        originalPrice: "100,000",
        salePrice: "90,000",
        roomPicture:
          "https://yaimg.yanolja.com/v5/2023/05/31/16/640/647779ee189cf0.19714641.jpg",
      },
      {
        id: 3,
        name: "Standard",
        checkIn: "18:00",
        checkOut: "13:00",
        originalPrice: "100,000",
        salePrice: "90,000",
        roomPicture:
          "https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg",
      },
    ]);
  }),
  http.get(`/api/placeId`, () => {
    //숙소 타입
    return HttpResponse.json([
      {
        id: 1,
        name: "롯데호텔",
        place: "서울특별시 송파구 올림픽로 300",
        picture:
          "https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg",
      },
      {
        id: 2,
        name: "강릉 어쩌고 호텔",
        place: "강릉인데요",
        picture:
          "https://yaimg.yanolja.com/v5/2023/05/31/16/640/647779ee189cf0.19714641.jpg",
      },
      {
        id: 3,
        name: "제주도인디",
        place: "제주",
        picture:
          "https://yaimg.yanolja.com/v5/2023/05/31/16/640/647779ee189cf0.19714641.jpg",
      },
    ]);
  }),
];
