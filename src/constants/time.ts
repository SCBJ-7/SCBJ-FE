export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const MONTH = DAY * 30;

export const TIME_UNIT = [
  { unit: "달", duration: MONTH },
  { unit: "주", duration: WEEK },
  { unit: "일", duration: DAY },
  { unit: "시간", duration: HOUR },
  { unit: "분", duration: MINUTE },
];
