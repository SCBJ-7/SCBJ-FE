import RoomInfo from "@pages/roomDetailPage/components/roomInfo/RoomInfo.tsx";
import RoomNavBar from "@pages/roomDetailPage/components/roomNavBar/RoomNavBar.tsx";
import { dummyData } from "./RoomDetail.data";

const RoomDetail = () => {
  const { data } = dummyData;

  return (
    <main>
      {/* 캐로셀 위치 */}
      <RoomInfo room={data} />
      <RoomNavBar room={data} />
    </main>
  );
};

export default RoomDetail;
