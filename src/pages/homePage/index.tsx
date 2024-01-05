import Carousel from "@components/carousel/Carousel";

const Home = () => {
  const dummyImg = [
    "https://media.discordapp.net/attachments/1175967240030531667/1179675296547483659/155.png?ex=65a8c9bc&is=659654bc&hm=f42a4bf0acda4e8d7ec8bdce51088862090d8aaf8d73e80204280988af24b4a9&=&format=webp&quality=lossless&width=855&height=534",
    "https://media.discordapp.net/attachments/1175967240030531667/1179675297034014812/256.jpeg?ex=65a8c9bc&is=659654bc&hm=a03d4fe9dc349cc8cad08c60b5890c723d94d4c598fa553693d631174bcea879&=&format=webp",
    "https://media.discordapp.net/attachments/1175967240030531667/1179675297352790026/2154.png?ex=65a8c9bc&is=659654bc&hm=c92f12e2aed013a9501cd4e0417f12fd99217fe8bcd260e844219dc1f363318b&=&format=webp&quality=lossless&width=712&height=535",
  ];
  return (
    <Carousel
      images={dummyImg}
      width="100%"
      height={300}
      arrows={true}
      infinite={false}
    />
  );
};

export default Home;
