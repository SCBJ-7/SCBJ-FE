export interface ISearchFilterInfo {
  location: string | null;
  checkIn: string | null;
  checkOut: string | null;
  maximumPeople: number | null;
  sorted: string | null;
  brunch: boolean | null;
  pool: boolean | null;
  oceanView: boolean | null;
  page: number | null;
  pageSize: number | null;
}
