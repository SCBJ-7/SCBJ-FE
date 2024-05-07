export interface FestivalData {
  name?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  link?: string;
  image?: string;
}

export interface FestivalDataProps {
  festivals: FestivalData[];
}

export const FirstFestivals = [
  {
    name: "BLOSSOM TOWER",
    startDate: "2024.03.22. (금)",
    endDate: "2024.04.14. (일)",
    location: "서울",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do;jsessionid=D162DEFE52EF47FFD3CB91FE7A025673.instance2?cmsCntntsId=2814415&Flag=Y",
  },
  {
    name: "호수벚꽃축제",
    startDate: "2024.03.27. (수)",
    endDate: "2024.03.31. (일)",
    location: "서울",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=1592898",
  },
  {
    name: "경주 대릉원돌담길 벚꽃축제",
    startDate: "2024.04.06. (토)",
    endDate: "2024.04.07. (일)",
    location: "경상",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2485128",
  },
  {
    name: "진해군항제",
    startDate: "2024.03.23. (토)",
    endDate: "2024.04.01. (월)",
    location: "경상",
    link: "https://www.changwon.go.kr/cwportal/depart/11063/11090/12962.web",
  },
  {
    name: "인천대공원 범시민 벚꽃축제",
    startDate: "2024.04.13. (토)",
    endDate: "2024.04.21. (일)",
    location: "경기",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=527212",
  },
  {
    name: "개암동 벚꽃축제",
    startDate: "2024.03.30. (토)",
    endDate: "2024.03.31. (일)",
    location: "전라",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2588930",
  },
  {
    name: "고창 벚꽃축제",
    startDate: "2024.03.29. (금)",
    endDate: "2024.03.31. (일)",
    location: "전라",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2952761",
  },
  {
    name: "제주 한림공원 왕벚꽃축제",
    startDate: "2023.03.24. (금)",
    endDate: "2023.04.08. (토)",
    location: "제주",
    link: "https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_200000000015367&menuId=DOM_000001718007000000",
  },
  {
    name: "전농로 왕벚꽃 축제",
    startDate: "2024.03.22. (금)",
    endDate: "2024.03.24. (일)",
    location: "제주",
    link: "https://www.jejusi.go.kr/vill/samdo1.do",
  },
  {
    name: "렛츠런파크 서울 벚꽃축제 '벚꽃야경'",
    startDate: "2024.03.29. (금)",
    endDate: "2024.04.21. (일)",
    location: "경기",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=525883",
  },
  {
    name: "에덴벚꽃길 벚꽃축제",
    startDate: "2024.04.06. (토)",
    endDate: "2024.04.14. (일)",
    location: "경기",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2484272",
  },
  {
    name: "남이섬 벗(友)꽃놀자",
    startDate: "2024.04.06. (토)",
    endDate: "2024.04.21. (일)",
    location: "강원",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2593221",
  },
  {
    name: "강릉 경포벚꽃잔치",
    startDate: "2023.03.31. (금)",
    endDate: "2023.04.05. (수)",
    location: "강원",
    link: "https://www.gn.go.kr/tour/index.do#popup",
  },
  {
    name: "금산 보곡산골 산벚꽃 축제",
    startDate: "2024.04.13. (토)",
    endDate: "2024.04.21. (일)",
    location: "충청",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2950952",
  },
  {
    name: "보은 벚꽃길 축제",
    startDate: "2024.03.29. (금)",
    endDate: "2024.03.31. (일)",
    location: "충청",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=3109655",
  },
];

export const SecondFestivals = [
  {
    name: "정동야행",
    startDate: "2024.05.24. (금)",
    endDate: "2024.05.25. (토)",
    location: "서울",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2005233",
  },
  {
    name: "서울서커스페스티벌",
    startDate: "2024.05.04. (토)",
    endDate: "2024.05.05. (일)",
    location: "서울",
    link: "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=cdb6d0ed-d6dc-47fe-9f78-a34d1a958377",
  },
  {
    name: "세계오르골페스티벌 & 유럽동화나라축제",
    startDate: "2024.03.01. (금)",
    endDate: "2024.05.31. (금)",
    location: "경기",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=3108083",
  },
  {
    name: "퍼스트가든 봄꽃축제 - 블루밍가든",
    startDate: "2024.04.01. (월)",
    endDate: "2024.05.31. (금)",
    location: "경기",
    link: "https://firstgarden.co.kr/firstgarden/",
  },
  {
    name: "춘천마임축제",
    startDate: "2024.05.26. (일)",
    endDate: "2024.06.02. (일)",
    location: "강원",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=506942",
  },
  {
    name: "오크밸리 3D 라이팅쇼 '소나타오브라이트'",
    startDate: "2022.01.01. (토)",
    endDate: "2024.12.31. (화)",
    location: "강원",
    link: "https://oakvalley.co.kr/oak_new/star6.asp",
  },
  {
    name: "포항국제불빛축제",
    startDate: "2024.05.31. (금)",
    endDate: "2024.06.02. (일)",
    location: "경상",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=588175",
  },
  {
    name: "밀양 아리랑대축제",
    startDate: "2024.05.23. (목)",
    endDate: "2024.05.26. (일)",
    location: "경상",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=715421",
  },
  {
    name: "광안리어방축제",
    startDate: "2024.05.10. (금)",
    endDate: "2024.05.12. (일)",
    location: "부산",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=506545",
  },
  {
    name: "고창청보리밭 축제",
    startDate: "2024.04.20. (토)",
    endDate: "2024.05.12. (일)",
    location: "전라",
    link: "https://www.gochang.go.kr/tour_old/index.gochang?menuCd=DOM_000000403005001000",
  },
  {
    name: "보성다향대축제",
    startDate: "2024.05.03. (금)",
    endDate: "2024.05.07. (화)",
    location: "전라",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=553299",
  },
  {
    name: "웨이뷰 유채꽃 축제",
    startDate: "2024.03.15. (금)",
    endDate: "2024.05.31. (금)",
    location: "제주",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=3190e5fc-41c6-4887-b6be-311f30e64a23&cntntsNm=%EC%9B%A8%EC%9D%B4%EB%B7%B0%EC%9C%A0%EC%B1%84%EA%BD%83%EC%B6%95%EC%A0%9C",
  },
  {
    name: "여름꽃 & 능소화축제",
    startDate: "2024.05.15. (수)",
    endDate: "2024.07.20. (토)",
    location: "제주",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2823399",
  },
  {
    name: "음성품바축제",
    startDate: "2024.05.22. (수)",
    endDate: "2024.05.26. (일)",
    location: "충청",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=141731",
  },
  {
    name: "억만송이 봄꽃대향연 튤립 수선화 축제",
    startDate: "2024.03.22. (금)",
    endDate: "2024.05.26. (일)",
    location: "충청",
    link: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2810416",
  },
];
