import * as S from "./RegionButton.style";

interface RegionButtonProps {
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

const RegionButton = ({
  selectedRegion,
  setSelectedRegion,
}: RegionButtonProps) => {
  const regionList: string[] = [
    "전체",
    "서울",
    "부산",
    "제주",
    "경기",
    "강원",
    "경상",
    "전라",
    "충청",
  ];

  const registerRegion = (region: string): void => {
    if (region) {
      setSelectedRegion(region);
    }
    console.log(region);
  };

  return (
    <>
      <S.ItemSection>
        <S.ItemRow>
          {regionList.slice(0, 3).map((region, index) => (
            <S.Item
              onClick={() => registerRegion(region)}
              key={index}
              className={selectedRegion === region ? "active" : ""}
            >
              {region}
            </S.Item>
          ))}
        </S.ItemRow>
        <S.ItemRow>
          {regionList.slice(3, 6).map((region, index) => (
            <S.Item
              onClick={() => registerRegion(region)}
              key={index}
              className={selectedRegion === region ? "active" : ""}
            >
              {region}
            </S.Item>
          ))}
        </S.ItemRow>
        <S.ItemRow>
          {regionList.slice(6).map((region, index) => (
            <S.Item
              onClick={() => registerRegion(region)}
              key={index}
              className={selectedRegion === region ? "active" : ""}
            >
              {region}
            </S.Item>
          ))}
        </S.ItemRow>
      </S.ItemSection>
    </>
  );
};

export default RegionButton;
