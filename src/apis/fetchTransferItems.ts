import {END_POINTS} from '@/constants/api'
import {IReservation} from '@/types/reservationList'
import {axiosInstance} from '@apis/axiosInstance'

// 예약목록을 불러오는 api입니다.
export const fetchTransferItems = async (): Promise<
  IReservation[] | undefined
> => {
  const { data } = await axiosInstance.get(END_POINTS.RESERVATION);
  return data.data as IReservation[];
};
