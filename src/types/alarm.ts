export interface AlarmType {
  id: number;
  title: string;
  content: string;
  date: string;
  isRead: boolean;
}

export interface ReadType {
  hasNonReadAlarm: boolean;
}
