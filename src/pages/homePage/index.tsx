import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
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
    <>
      <div>home</div>
    </>
  );
};

export default Home;
