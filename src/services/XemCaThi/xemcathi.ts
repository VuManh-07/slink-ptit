import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getCaThiGiamThi(data: { page: number; limit: number }, condition: any) {
  return axios.get(`${ip3}/thi-online/ngan-hang-de/giam-thi-xem-ca-thi`, {
    params: {
      page: data.page,
      limit: data.limit,
      condition: condition,
    },
  });
}
