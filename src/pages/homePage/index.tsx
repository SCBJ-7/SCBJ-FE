import Carousel from "@components/carousel/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const dummyImg = [
    "https://media.discordapp.net/attachments/1175967240030531667/1179675296547483659/155.png?ex=65a8c9bc&is=659654bc&hm=f42a4bf0acda4e8d7ec8bdce51088862090d8aaf8d73e80204280988af24b4a9&=&format=webp&quality=lossless&width=855&height=534",
    "https://media.discordapp.net/attachments/1175967240030531667/1179675297034014812/256.jpeg?ex=65a8c9bc&is=659654bc&hm=a03d4fe9dc349cc8cad08c60b5890c723d94d4c598fa553693d631174bcea879&=&format=webp",
    "https://media.discordapp.net/attachments/1175967240030531667/1179675297352790026/2154.png?ex=65a8c9bc&is=659654bc&hm=c92f12e2aed013a9501cd4e0417f12fd99217fe8bcd260e844219dc1f363318b&=&format=webp&quality=lossless&width=712&height=535",
  ];
  //객실 정보
  interface Room {
    id: number;
    name: string;
    checkIn: string;
    checkOut: string;
    originalPrice: string;
    salePrice: string;
    roomPicture: string;
  }

  const [rooms, setRooms] = useState<Room[]>([]);
  // const { id } = useParams<Params>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/roomId");
        setRooms(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log("rooms", rooms);
  return (
    <Carousel
      images={dummyImg}
      height={300}
      arrows={true}
      infinite={true}
      draggable={true}
    />
  );
};

export default Home;
